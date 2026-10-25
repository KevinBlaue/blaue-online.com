export type ContactRequestSource = "portfolio-contact-form";

export type ContactRequest = {
  name: string;
  email: string;
  company?: string;
  roleInterest?: string;
  message: string;
  consentToReply: boolean;
  source: ContactRequestSource;
  website: string;
  formRenderedAt: string;
};

export type ContactRequestResult = {
  requestId: string;
  status: "accepted";
};

export type ContactRequestErrorCode =
  | "invalid_contact_request"
  | "too_many_contact_requests"
  | "invalid_contact_response"
  | "contact_request_failed";

export const contactRequestSource: ContactRequestSource =
  "portfolio-contact-form";

const localContactEndpoint = "http://localhost:8080/api/contact";
const productionContactEndpoint = "https://api.bluestack.cloud/api/contact";
const contactRequestTimeoutMs = 10_000;

export class ContactRequestError extends Error {
  constructor(
    message: string,
    readonly code: ContactRequestErrorCode,
    readonly status?: number,
  ) {
    super(message);
    this.name = "ContactRequestError";
  }
}

export async function sendContactRequest(
  request: ContactRequest,
): Promise<ContactRequestResult> {
  const response = await fetch(getContactEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
    signal: AbortSignal.timeout(contactRequestTimeoutMs),
  });

  const responseBody = await readJsonResponse(response);

  if (!response.ok) {
    throw createContactRequestError(response.status, responseBody);
  }

  return parseContactRequestResult(responseBody);
}

export function getContactEndpoint(hostname = currentHostname()) {
  const configuredEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();
  if (configuredEndpoint) {
    return configuredEndpoint;
  }

  return hostname === "localhost" || hostname === "127.0.0.1"
    ? localContactEndpoint
    : productionContactEndpoint;
}

async function readJsonResponse(
  response: Response,
): Promise<Record<string, unknown>> {
  try {
    const body = await response.json();
    return isRecord(body) ? body : {};
  } catch {
    return {};
  }
}

function createContactRequestError(
  status: number,
  body: Record<string, unknown>,
) {
  const error = typeof body.error === "string" ? body.error : undefined;

  if (status === 429 || error === "Too many contact requests") {
    return new ContactRequestError(
      "Too many contact requests",
      "too_many_contact_requests",
      status,
    );
  }

  if (error === "Invalid contact request") {
    return new ContactRequestError(
      "Invalid contact request",
      "invalid_contact_request",
      status,
    );
  }

  return new ContactRequestError(
    "Contact request failed",
    "contact_request_failed",
    status,
  );
}

function parseContactRequestResult(body: Record<string, unknown>) {
  if (
    body.status !== "accepted" ||
    typeof body.requestId !== "string" ||
    body.requestId.length === 0
  ) {
    throw new ContactRequestError(
      "Invalid contact response",
      "invalid_contact_response",
    );
  }

  return {
    requestId: body.requestId,
    status: "accepted",
  } satisfies ContactRequestResult;
}

function currentHostname() {
  return typeof window === "undefined" ? "localhost" : window.location.hostname;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
