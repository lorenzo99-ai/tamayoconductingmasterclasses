import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { CONTACT_EMAIL, CONTACT_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions — Conducting Masterclass with Arturo Tamayo",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms & Conditions" updated="[Month] 2026">
      <p>
        These Terms &amp; Conditions govern applications to and participation in
        the Conducting Masterclass with Prof. Arturo Tamayo &amp; the Berliner
        Symphoniker, held in Berlin on October 5–8, 2026 (the
        &quot;Masterclass&quot;). By applying you agree to these terms.
      </p>

      <h2>1. Application and selection</h2>
      <p>
        Active participation is limited to 8 conductors, selected by Prof.
        Tamayo. Submitting an application does not guarantee a place. Active
        applicants must submit the application form together with one conducting
        video link. Passive participation is available subject to capacity.
      </p>

      <h2>2. Fees</h2>
      <ul>
        <li>
          <strong>Active participant:</strong> €1850.
        </li>
        <li>
          <strong>Passive participant:</strong> €350.
        </li>
      </ul>
      <p>
        Fees are stated in euros and [are/are not] inclusive of VAT.
        Accommodation and transportation are not included. Payment plans may be
        available on request. [Specify payment schedule, deposit, accepted
        methods, and due dates.]
      </p>

      <h2>3. Confirmation and payment</h2>
      <p>
        A place is confirmed once you are selected/accepted and the required
        payment (or agreed deposit) has been received by the date we specify.
        [State deadlines and what happens if payment is late.]
      </p>

      <h2>4. Cancellation and refunds</h2>
      <p>
        [Define your cancellation policy — e.g. refund tiers by date, any
        non-refundable deposit, and what happens to payments if a participant
        withdraws.] If the organization cancels the Masterclass, participants
        will receive a refund of fees paid as set out here. [Specify scope —
        e.g. fees only, excluding travel and accommodation.]
      </p>

      <h2>5. Repertoire and preparation</h2>
      <p>
        Active participants are expected to study their scores deeply before the
        Masterclass. Schönberg&apos;s <em>Verklärte Nacht</em> (string orchestra,
        1914 version) is the mandatory piece. Additional repertoire includes
        Debussy&apos;s <em>Prélude à l&apos;après-midi d&apos;un faune</em> (A.
        Schönberg version) and R. Strauss&apos; <em>Vier letzte Lieder</em>.
      </p>

      <h2>6. Schedule changes</h2>
      <p>
        We do our best to accommodate reasonable schedule requests but cannot
        guarantee them. The organization may adjust the program, timing, or
        venue where necessary, and will inform participants of material changes.
      </p>

      <h2>7. Recordings and media</h2>
      <p>
        Sessions are recorded. Active participants receive recorded sessions and
        a final dressed recording. By participating you consent to being
        recorded and to the organization&apos;s use of recordings as described in
        the <a href="/privacy">Privacy Policy</a>. [Clarify any rights to
        publish or promote using recordings, and participants&apos; rights to
        their own footage.]
      </p>

      <h2>8. Conduct</h2>
      <p>
        Participants are expected to behave professionally and respectfully
        toward the Maestro, the orchestra, staff, and other participants. The
        organization may remove anyone whose conduct is disruptive or unsafe,
        without refund.
      </p>

      <h2>9. Liability</h2>
      <p>
        Participants take part at their own risk and are responsible for their
        own travel, accommodation, insurance, and personal belongings. To the
        extent permitted by law, the organization&apos;s liability is limited to
        the fees paid. [Have this clause reviewed against applicable law.]
      </p>

      <h2>10. Governing law</h2>
      <p>
        These terms are governed by the laws of [Germany / applicable
        jurisdiction], and disputes are subject to the courts of [city].
      </p>

      <h2>11. Contact</h2>
      <p>
        Organizer: {CONTACT_NAME}. Questions about these terms? Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalShell>
  );
}
