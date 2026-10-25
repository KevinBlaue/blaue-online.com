import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

import Home from "./page";

describe("Home", () => {
  it("exports the default SPA root component", () => {
    expect(Home).toBeTypeOf("function");
  });

  it("renders the public backend engineering content without placeholder copy", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain("Kevin Blaue");
    expect(html).toContain("Backend");
    expect(html).toContain("AWS");
    expect(html).toContain("Auth0/IAM");
    expect(html).toContain("Sentry");
    expect(html).toContain("Backend / Cloud Software Developer");
    expect(html).toContain("Backend systems, owned from architecture to handover");
    expect(html).toContain("Architecture Management Group");
    expect(html).toContain("freenet&#x27;s first Backend for Frontend");
    expect(html).toContain("Product Owner coordination");
    expect(html).toContain("structured knowledge transfer");
    expect(html).toContain("AI-Assisted Engineering");
    expect(html).toContain(
      "retaining responsibility for correctness, architecture, maintainability, security, and long-term fit",
    );
    expect(html).not.toContain("AI-first development");
    expect(html).toContain("Download full resume");
    expect(html).toContain("Download architecture brief");
    expect(html).toContain("/assets/kevin-blaue-resume.pdf");
    expect(html).toContain("/assets/kevin-blaue-achievements.pdf");
    expect(html).toContain("Six years of shipping software, nearly four full-time");
    expect(html).toContain("Selected Engineering Patterns");
    expect(html).toContain("First Backend for Frontend");
    expect(html).toContain("Digital Wallet Integration");
    expect(html).toContain("Consent-Gated Order Data API");
    expect(html).toContain("Led the Apple Wallet implementation");
    expect(html).toContain("with a teammate and an external AWS architect");
    expect(html).toContain("Turns wallet provider callbacks into an auditable pass lifecycle");
    expect(html).toContain("Based in Calgary. Available now.");
    expect(html).toContain("Based in Calgary, AB, with a Canadian IEC open work permit");
    expect(html).toContain("freenet DLS GmbH");
    expect(html).toContain("Fielmann Group AG");
    expect(html).toContain("I hold a Canadian IEC open work permit");
    expect(html).toContain("Contact request form");
    expect(html).toContain("Send message");
    expect(html).toContain("Kevin may use these details only");
    expect(html).toContain("mailto:kevin@blaue-online.com");
    expect(html).toContain("Email");
    expect(html).toContain("LinkedIn");
    expect(html).toContain("Blog");
    expect(html).not.toMatch(/lorem|ipsum|placeholder contact/i);
    expect(html).not.toMatch(/public-safe|sanitized/i);
    expect(html).not.toMatch(/confluence/i);
    expect(html).not.toContain("github.com/fielmann");
    expect(html).not.toMatch(/https?:\/\/[^"]*(fielmann|internal|localhost)/i);
    expect(html).not.toContain("email@example.com");
  });
});
