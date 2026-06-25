// Veyn: per-system proficiency content (guide + quiz + flashcards), sourced
// from real working-secretary interviews, not vendor marketing copy.

const SYSTEM_SKILLS = {
  carebit: {
    slug: 'carebit',
    name: 'Carebit',
    aim: "Carebit's calendar, patient records, billing, and Compose correspondence tools, plus the failure points that actually trip up new users — confirmed by a secretary with 3 years' genuine working experience across six specialties, not vendor copy.",
    sections: [
      {
        heading: 'Diary & appointment booking',
        body: `
          <p>Carebit's calendar shows all bookings by day, week or month, with every clinician's calendar viewable side by side. Online bookings can be taken directly through the Patient Portal — the practice uploads availability, and patients book and pay at their convenience, including via a booking form embedded on the practice website.</p>
          <p>From the secretary side, a new booking can be created two ways: via the <strong>Action button</strong> on the calendar view (creates a standalone booking), or by clicking directly on a slot inside an existing availability period to search for or create the patient against it.</p>
          <ul>
            <li>Colour-coding by location or service, day notes, and filters (e.g. only bookings without invoices, or only theatre bookings)</li>
            <li>Google/Outlook calendar sync</li>
            <li>"Advanced availability" for irregular clinic patterns (e.g. every third Tuesday)</li>
          </ul>
          <p><strong>Watch out for:</strong> overlapping appointments are blocked by default. This protection can be switched off manually in settings — once off, it allows overlapping bookings silently, with no warning. A hospital-side booking integration can also occasionally push a double-booking through regardless of the practice's own setting.</p>
        `,
      },
      {
        heading: 'Patient records & referrals',
        body: `
          <p>Patients can register online via the branded Patient Portal, entering their own details and uploading referral letters and existing test results directly to their record. Practices can also build electronic questionnaires/intake forms emailed to patients after registration, with responses stored on the patient's profile.</p>
          <p>Uploaded referral documents and test results sit on the patient's record and are viewable by the patient through the Portal using their date of birth. Attachments already stored against a patient can be pulled directly into Compose letters.</p>
          <p><strong>Watch out for:</strong> a Carebit-to-Carebit referral shouldn't end up against the wrong patient — each consultant's information on a shared record stays unseeable by other consultants unless explicitly "sent" to them. The real risk is secretary uploads: if "allow patient to view" was ticked when a document was uploaded to the wrong patient, that's a potential data breach, since the wrong patient may have already seen it. If it wasn't ticked, the document can simply be removed and reattached correctly. Duplicate patient records do happen despite Carebit's matching checks — resolve these with Carebit's built-in merge tool.</p>
        `,
      },
      {
        heading: 'Billing & insurer administration',
        body: `
          <p>Carebit integrates directly with Healthcode for insurer billing: one-click claims, policy number search, CCSD code lookup, automatically-selected prices and automatic discounts. For self-pay patients, PDF invoices can generate and email automatically as soon as a booking is made, with a card-payment link, and a receipt generates automatically once paid.</p>
          <p>Billing and invoicing sit in a dedicated Billing area. CSV reporting covers billing codes, invoiced bookings and end-of-year accounts, and Xero integration syncs transactions, payments and credit notes.</p>
          <p><strong>Watch out for:</strong> a completely invalid code is rejected outright, but there's no system check stopping an invoice being sent before the clinic letter is finalised. If the code used is incorrect but still a valid code, the invoice still goes through Healthcode — the error then has to be resolved directly with the insurer, who will typically ask for the invoice to be resubmitted with the correct code.</p>
        `,
      },
      {
        heading: 'Correspondence & dictation-to-letter',
        body: `
          <p>The <strong>Compose</strong> feature is used to dictate or draft a letter, with built-in AI transcription (branded "Cari") converting speech to text. Letters can be assigned to another staff member for proofing before sending, and sent securely to multiple recipients — patients, GPs, other consultants, hospitals or physios — via a built-in clinician/GP directory, without needing to know the recipient's email address. Patients unlock their letters in the Portal using their date of birth.</p>
          <p>Letter templates are customisable with headers/footers and can be linked to specific clinicians, services or locations so the right template auto-loads. "Autotext" shortcuts can auto-complete common phrasing.</p>
          <p><strong>Watch out for:</strong> the letter just sends — there is no system check before it goes. It is entirely the sender's responsibility to verify the content and the recipient are correct before sending.</p>
        `,
      },
      {
        heading: 'Multi-consultant / practice coordination',
        body: `
          <p>All plans support unlimited staff members, including secretaries, finance and other admin staff, and multiple clinicians' calendars can be viewed side by side. Tasks can be assigned to specific staff members, with attachments, comments, urgency flags, and links to a letter or patient record.</p>
          <p>Permissions are set under <strong>Settings and Tools, in the Users tab</strong>, where an admin user can update other users' roles or archive them.</p>
          <p><strong>Watch out for:</strong> access and permission levels can only be resolved by an admin user — a junior user given the wrong level has to be corrected by someone with admin rights. There's no self-service fix for a non-admin.</p>
        `,
      },
      {
        heading: 'Common new-user mistake',
        body: `
          <p>When creating a standalone booking (not into a pre-set availability period with time slots), it's very easy to end up with the wrong clinic or appointment-slot type, because Carebit auto-fills these fields from a default rather than leaving them blank. The mistake is easy to miss because the field already shows a value — it just isn't necessarily the right one.</p>
          <p>Rule of thumb from a secretary three years in: always use an availability period on the calendar where possible, and otherwise check, check, check before confirming.</p>
        `,
      },
    ],
    quiz: [
      {
        question: "By default, can two appointments be booked into the same slot in Carebit?",
        correctAnswer: "No — it's blocked unless overlapping bookings are manually allowed in settings",
        distractors: ["Yes, always", "Only consultants can override it", "Carebit warns but allows it anyway"],
      },
      {
        question: "Where do you manage user roles and account status (active/archived) in Carebit?",
        correctAnswer: "Settings and Tools, in the Users tab",
        distractors: ["The Patient Portal", "Compose", "The Billing area"],
      },
      {
        question: "A secretary uploads a referral to the wrong patient's record with \"allow patient to view\" ticked. What's the correct response?",
        correctAnswer: "Treat it as a potential data breach, since the wrong patient may already have seen it",
        distractors: ["Simply delete and reattach it, no further action needed", "Ignore it — the patient probably won't notice", "Wait for the patient to report it"],
      },
      {
        question: "An invoice is submitted to Healthcode with a valid CCSD code, but it's the wrong code for the procedure performed. What happens?",
        correctAnswer: "The invoice goes through regardless, and the error must be resolved directly with the insurer",
        distractors: ["Carebit blocks the invoice automatically", "The clinic letter is automatically corrected", "The booking is cancelled"],
      },
      {
        question: "Does Carebit check that a letter's content or recipient is correct before it's sent via Compose?",
        correctAnswer: "No — it is entirely the sender's responsibility to check before sending",
        distractors: ["Yes, it flags likely errors", "Only for letters addressed to GPs", "Only if Cari transcription was used"],
      },
      {
        question: "What's a common new-user mistake when creating a standalone booking outside an availability period?",
        correctAnswer: "The clinic and appointment-slot type auto-fill from a default and can easily be left incorrect",
        distractors: ["The booking is always created with no clinician assigned", "The patient must already exist in the system", "The booking type cannot be changed afterwards"],
      },
      {
        question: "Which feature lets you view multiple clinicians' calendars side by side?",
        correctAnswer: "The calendar view",
        distractors: ["The Patient Portal", "Tasks", "Inbox"],
      },
      {
        question: "What does the Action button on the calendar view do?",
        correctAnswer: "Creates a standalone booking",
        distractors: ["Cancels a booking", "Opens the Billing area", "Merges duplicate patient records"],
      },
      {
        question: "Where can you see that a booking was cancelled, and by whom?",
        correctAnswer: "Under Bookings on the patient's record",
        distractors: ["It disappears completely with no record", "In the Inbox", "In Settings and Tools"],
      },
      {
        question: "Who can fix a user's incorrect permission level in Carebit?",
        correctAnswer: "Only an admin user — there's no self-service fix for a non-admin",
        distractors: ["Any user can edit their own permissions", "Only Carebit's support team", "It resets automatically after 30 days"],
      },
    ],
    flashcards: [
      { term: 'Compose', meaning: "Carebit's letter/dictation feature" },
      { term: 'Cari', meaning: 'Built-in AI transcription assistant (speech to text)' },
      { term: 'Workflows', meaning: 'Automation rules feature' },
      { term: 'Patient Portal', meaning: 'Where patients register, book, pay, and view letters/results' },
      { term: 'Tasks', meaning: 'Assign work to staff, with attachments, comments, urgency flags' },
      { term: 'Inbox', meaning: 'Messaging/communication area' },
      { term: 'Leads', meaning: 'Module for tracking prospective patients' },
      { term: 'Prescribing', meaning: 'Module for issuing prescriptions' },
      { term: 'Booking forms', meaning: 'Embeddable forms for online patient bookings' },
      { term: 'Action button', meaning: 'Creates a standalone booking from the calendar view' },
      { term: 'Create invoice', meaning: 'The labelled action for generating an invoice' },
      { term: 'Settings and Tools > Users', meaning: 'Where user roles and account status are managed' },
      { term: 'CCSD code', meaning: 'Procedure billing code used for insurer claims via Healthcode' },
      { term: 'Healthcode', meaning: 'Insurer billing integration — claims, policy checks, code lookup' },
      { term: 'Autotext', meaning: 'Text shortcuts that auto-complete common phrasing in letters' },
    ],
  },
};
