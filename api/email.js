import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const REQUIRED_DOCUMENTS = {
  applicationLetter: "Application Letter",
  feeBreakdown: "School Fee Breakdown",
};

const formatValue = (value) => {
  if (value === null || value === undefined || value === "") return "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (Array.isArray(value)) return value.join(", ");
  return String(value);
};

const buildEmailHtml = (formData, documents) => {
  const rows = Object.entries(formData)
    .filter(([key]) => key !== "attachments")
    .map(
      ([key, value]) =>
        `<li><strong>${key}:</strong> ${formatValue(value)}</li>`,
    )
    .join("");

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="margin-bottom: 12px;">New Scholarship Application</h2>
      <p>A new application was submitted from the scholarship form.</p>
      <ul style="padding-left: 20px;">${rows}</ul>
      <h3 style="margin-top: 20px;">Documents attached</h3>
      <ul style="padding-left: 20px;">${
        documents.length
          ? documents.map((d) => `<li>${d.label}: ${d.filename}</li>`).join("")
          : "<li>None</li>"
      }</ul>
    </div>
  `;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Wrong HTTP method",
    });
  }

  if (!resend) {
    return res.status(500).json({
      success: false,
      message: "RESEND_API_KEY is not configured.",
    });
  }

  try {
    const formData = req.body ?? {};
    const { firstName, lastName } = formData;

    const documents = (
      Array.isArray(formData.attachments) ? formData.attachments : []
    ).filter((d) => d && d.content && d.filename);

    const missing = Object.entries(REQUIRED_DOCUMENTS)
      .filter(([field]) => !documents.some((d) => d.field === field))
      .map(([, label]) => label);

    if (missing.length) {
      return res.status(400).json({
        success: false,
        message: `Missing required document(s): ${missing.join(", ")}.`,
      });
    }

    const attachments = documents.map((d) => {
      const base64Content = d.content.includes("base64,")
        ? d.content.split("base64,")[1]
        : d.content;

      return {
        // Prefix with the document type so the files are easy to tell apart in the inbox.
        filename: `${d.label || d.field} - ${d.filename}`,
        content: Buffer.from(base64Content, "base64"),
        contentType: "application/pdf",
      };
    });

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "info@codixcharityfoundation.org",
      to: process.env.RESEND_TO_EMAIL || "info@codixcharityfoundation.org",
      subject:
        `Scholarship Form: ${firstName || "Applicant"} ${lastName || ""}`.trim(),
      html: buildEmailHtml(formData, documents),
      attachments,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Resend error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to send email.",
    });
  }
}
