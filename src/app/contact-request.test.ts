import { afterEach, describe, expect, it, vi } from "vitest";

import {
  ContactRequestError,
  getContactEndpoint,
  sendContactRequest,
  type ContactRequest,
} from "./contact-request";

const contactRequest: ContactRequest = {
  name: "Kevin Blaue",
  email: "kevin@blaue-online.com",
  company: "Blaue Online",
  roleInterest: "Backend",
  message: "I would like to discuss a backend role.",
  consentToReply: true,
  source: "portfolio-contact-form",
  website: "",
  formRenderedAt: "2026-05-24T09:57:00.000Z",
};

describe("sendContactRequest", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("posts the contact request to the local backend endpoint", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ requestId: "req-123", status: "accepted" }), {
        headers: { "Content-Type": "application/json" },
        status: 202,
      }),
    );

    await expect(sendContactRequest(contactRequest)).resolves.toEqual({
      requestId: "req-123",
      status: "accepted",
    });
    expect(fetchMock).toHaveBeenCalledWith("http://localhost:8080/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactRequest),
      signal: expect.any(AbortSignal),
    });
  });

  it("uses the deployed API outside local development", () => {
    expect(getContactEndpoint("blaue-online.com")).toBe(
      "https://api.bluestack.cloud/api/contact",
    );
  });

  it("maps backend protection failures to an invalid request error", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ error: "Invalid contact request" }), {
        headers: { "Content-Type": "application/json" },
        status: 400,
      }),
    );

    await expect(sendContactRequest(contactRequest)).rejects.toMatchObject({
      code: "invalid_contact_request",
      message: "Invalid contact request",
      status: 400,
    } satisfies Partial<ContactRequestError>);
  });

  it("maps rate limiting to a retry-later error", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ error: "Too many contact requests" }), {
        headers: { "Content-Type": "application/json" },
        status: 429,
      }),
    );

    await expect(sendContactRequest(contactRequest)).rejects.toMatchObject({
      code: "too_many_contact_requests",
      message: "Too many contact requests",
      status: 429,
    } satisfies Partial<ContactRequestError>);
  });

  it("rejects an invalid successful backend response", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ requestId: "req-123", status: "success" }), {
        headers: { "Content-Type": "application/json" },
        status: 202,
      }),
    );

    await expect(sendContactRequest(contactRequest)).rejects.toMatchObject({
      code: "invalid_contact_response",
      message: "Invalid contact response",
    } satisfies Partial<ContactRequestError>);
  });
});
