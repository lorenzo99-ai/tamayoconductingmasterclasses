import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { CONTACT_EMAIL, CONTACT_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Conducting Masterclass with Arturo Tamayo",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="[Month] 2026">
      <p>
        This Privacy Policy explains how the organizers of the Conducting
        Masterclass with Prof. Arturo Tamayo &amp; the Berliner Symphoniker
        (&quot;we&quot;, &quot;us&quot;, &quot;the organization&quot;) handle
        information in connection with this website and the masterclass held in
        Berlin on October 5–8, 2026.
      </p>

      <h2>1. Who we are</h2>
      <p>
        The organizer and data controller is {CONTACT_NAME}. For any privacy
        question, contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. [Add full legal
        entity name and postal address.]
      </p>

      <h2>2. Information we collect</h2>
      <p>
        This website itself does not collect personal data through forms.
        Applications are submitted through an external Google Form, and any
        information you provide there is processed by Google on our behalf. The
        application may ask for: name, email address, country, conducting
        background, and a link to a conducting video.
      </p>
      <ul>
        <li>
          <strong>Application data</strong> you submit via the Google Form.
        </li>
        <li>
          <strong>Correspondence</strong> if you email us directly.
        </li>
        <li>
          <strong>Basic technical data</strong> (e.g. anonymized analytics, if
          enabled). [Confirm whether any analytics or cookies are used; if so,
          list them here.]
        </li>
      </ul>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To review and respond to masterclass applications.</li>
        <li>To organize participation, scheduling, and recordings.</li>
        <li>To communicate with applicants and participants.</li>
        <li>To meet legal and accounting obligations.</li>
      </ul>

      <h2>4. Legal basis</h2>
      <p>
        We process your data on the basis of your consent and to take steps at
        your request prior to entering an agreement (your application and
        participation), and where necessary to comply with legal obligations,
        under the EU General Data Protection Regulation (GDPR).
      </p>

      <h2>5. Sharing your information</h2>
      <p>
        We do not sell your personal data. We share it only with service
        providers who help us run the masterclass — for example Google (form and
        email), and recording/production partners — and only as needed. [List
        sub-processors.]
      </p>

      <h2>6. Recordings</h2>
      <p>
        Sessions of the masterclass are recorded. By participating you
        acknowledge that audio and video recordings may be made. [State how
        recordings are used, stored, and whether they may be published, and how
        participants can request access to their own recording.]
      </p>

      <h2>7. Data retention</h2>
      <p>
        We keep application and participation data only as long as necessary for
        the purposes above and to meet legal requirements, after which it is
        deleted or anonymized. [Specify retention periods.]
      </p>

      <h2>8. Your rights</h2>
      <p>
        Subject to applicable law, you have the right to access, correct, delete,
        restrict, or object to the processing of your personal data, and to data
        portability. To exercise these rights, contact{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. You also have the
        right to lodge a complaint with your local data protection authority.
      </p>

      <h2>9. International transfers</h2>
      <p>
        Some providers (such as Google) may process data outside your country.
        Where this happens, appropriate safeguards are applied. [Confirm and
        describe.]
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The
        &quot;Last updated&quot; date above reflects the latest version.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about this policy? Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalShell>
  );
}
