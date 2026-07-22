import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(403).json({
      message: "Api Method is not allowed, use POST method",
    });
  }

  //   destructure Post request coming from the contact us component
  const formData = req.body ?? {};
  const { firstName, lastName, email, message } = formData;

  //   Use resend to send the message
  try {
    const { data, error } = await resend.emails.send({
      from: "info@codixcharityfoundation.org",
      to: "georgejoshuaayomiposi@gmail.com",
      subject: "Contact Us Response - CodixCharity",
      html: `
      <h2>New Contact Us Form</h2>
      <p><strong>Name: </strong> ${firstName} ${lastName}</p>
      <p><strong>Email: </strong> ${email}</p>
      <p><strong>Message: </strong> ${message}</p>
      `,
    });

    // Handling Resend Error, incase it fails from resend

    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    return res.status(200).json({
      message: "Message sent successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
}
