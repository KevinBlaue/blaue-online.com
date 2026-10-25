import { describe, expect, it } from "vitest";

import { createContactRequest } from "./contact-form";

describe("createContactRequest", () => {
  it("includes backend protection fields in the contact payload", () => {
    const formData = new FormData();
    formData.set("name", "  Kevin Blaue  ");
    formData.set("email", " kevin@blaue-online.com ");
    formData.set("company", " Blaue Online ");
    formData.set("roleInterest", " Backend ");
    formData.set("message", " I would like to discuss a backend role. ");
    formData.set("consentToReply", "on");
    formData.set("website", "");
    formData.set("formRenderedAt", "2026-05-24T09:57:00.000Z");

    expect(createContactRequest(formData)).toEqual({
      name: "Kevin Blaue",
      email: "kevin@blaue-online.com",
      company: "Blaue Online",
      roleInterest: "Backend",
      message: "I would like to discuss a backend role.",
      consentToReply: true,
      source: "portfolio-contact-form",
      website: "",
      formRenderedAt: "2026-05-24T09:57:00.000Z",
    });
  });

  it("preserves a filled honeypot value so the backend can reject it", () => {
    const formData = new FormData();
    formData.set("name", "Bot");
    formData.set("email", "bot@example.com");
    formData.set("message", "This request should be considered suspicious.");
    formData.set("website", "https://spam.example");
    formData.set("formRenderedAt", "2026-05-24T09:57:00.000Z");

    const request = createContactRequest(formData);

    expect(request.website).toBe("https://spam.example");
    expect(request.consentToReply).toBe(false);
  });
});
