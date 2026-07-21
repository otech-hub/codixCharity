import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const formatValue = (value) => {
  if (value === null || value === undefined || value === "") return "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (Array.isArray(value)) return value.join(", ");
  return String(value);
};

const buildEmailHtml = (formData) => {
  const rows = Object.entries(formData)
    .filter(([key]) => key !== "resume" && key !== "filename")
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

    const resumeBase64 = formData.resume;
    const resumeName = formData.filename;

    const attachments = [];
    if (resumeBase64 && resumeName) {
      const base64Content = resumeBase64.includes("base64,")
        ? resumeBase64.split("base64,")[1]
        : resumeBase64;

      attachments.push({
        filename: resumeName,
        content: Buffer.from(base64Content, "base64"),
        contentType: "application/pdf",
      });
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "info@codixcharityfoundation.org",
      to: process.env.RESEND_TO_EMAIL || "info@codixcharityfoundation.org",
      subject:
        `Scholarship Form: ${firstName || "Applicant"} ${lastName || ""}`.trim(),
      html: buildEmailHtml(formData),
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
