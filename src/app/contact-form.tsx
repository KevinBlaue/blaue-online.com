"use client";

import { FormEvent, useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

import {
  ContactRequestError,
  contactRequestSource,
  sendContactRequest,
  type ContactRequest,
} from "./contact-request";

type SubmissionState = "idle" | "sending" | "sent" | "error";

const submissionMessages: Record<SubmissionState, string> = {
  idle: "",
  sending: "",
  sent: "Contact request sent. Kevin can now reply to your message.",
  error: "Something went wrong while sending the request.",
};

const inputClassName =
  "min-h-12 rounded-md border border-white/15 bg-white/[0.06] px-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30";

export function ContactForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [submissionMessage, setSubmissionMessage] = useState(
    submissionMessages.idle,
  );
  const formRenderedAt = createFormRenderedAt();
  const formRenderedAtInputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmissionState("sending");
    setSubmissionMessage(submissionMessages.sending);

    const formData = new FormData(form);
    const contactRequest = createContactRequest(formData);

    try {
      await sendContactRequest(contactRequest);
      setSubmissionState("sent");
      setSubmissionMessage(submissionMessages.sent);
      form.reset();
      if (formRenderedAtInputRef.current) {
        formRenderedAtInputRef.current.value = createFormRenderedAt();
      }
    } catch (error) {
      setSubmissionState("error");
      setSubmissionMessage(getContactRequestErrorMessage(error));
    }
  }

  return (
    <form
      aria-label="Contact request form"
      className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4"
      onSubmit={handleSubmit}
    >
      <input
        aria-hidden="true"
        autoComplete="off"
        hidden
        name="website"
        tabIndex={-1}
        type="text"
      />
      <input
        name="formRenderedAt"
        readOnly
        ref={formRenderedAtInputRef}
        suppressHydrationWarning
        type="hidden"
        defaultValue={formRenderedAt}
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Name
          <input
            className={inputClassName}
            name="name"
            autoComplete="name"
            required
            minLength={2}
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Email
          <input
            className={inputClassName}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Company
          <input
            className={inputClassName}
            name="company"
            autoComplete="organization"
            placeholder="Company or team"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Role
          <input
            className={inputClassName}
            name="roleInterest"
            placeholder="Backend, cloud, platform"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        Message
        <textarea
          className={`${inputClassName} min-h-32 resize-y py-3 leading-6`}
          name="message"
          required
          minLength={20}
          placeholder="Short note about the role, team, or project"
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-slate-300">
        <input
          className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-950 text-emerald-300"
          name="consentToReply"
          type="checkbox"
          required
        />
        <span>
          Kevin may use these details only to reply to this request. They are not
          used for marketing.
        </span>
      </label>

      <button
        className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-emerald-300 px-5 text-sm font-bold text-slate-950 transition hover:bg-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-wait disabled:bg-slate-500 disabled:text-slate-900"
        disabled={submissionState === "sending"}
        type="submit"
      >
        <FaPaperPlane className="h-4 w-4" aria-hidden />
        {submissionState === "sending" ? "Sending request" : "Send message"}
      </button>

      <p
        className="min-h-6 text-sm leading-6 text-slate-300"
        role="status"
        aria-live="polite"
      >
        {submissionMessage}
      </p>
    </form>
  );
}

function createFormRenderedAt() {
  return typeof window === "undefined" ? "" : new Date().toISOString();
}

function getContactRequestErrorMessage(error: unknown) {
  if (error instanceof ContactRequestError) {
    if (error.code === "too_many_contact_requests") {
      return "Too many contact requests. Please try again later.";
    }

    if (error.code === "invalid_contact_request") {
      return "This contact request could not be accepted. Please wait a moment and try again.";
    }
  }

  return submissionMessages.error;
}

export function createContactRequest(formData: FormData): ContactRequest {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    company: optionalValue(formData.get("company")),
    roleInterest: optionalValue(formData.get("roleInterest")),
    message: String(formData.get("message") ?? "").trim(),
    consentToReply: formData.get("consentToReply") === "on",
    source: contactRequestSource,
    website: String(formData.get("website") ?? "").trim(),
    formRenderedAt: String(formData.get("formRenderedAt") ?? ""),
  };
}

function optionalValue(value: FormDataEntryValue | null) {
  const text = String(value ?? "").trim();
  return text.length > 0 ? text : undefined;
}
