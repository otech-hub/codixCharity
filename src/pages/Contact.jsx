import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin } from "lucide-react";
import SectionTag from "@/components/SectionTag";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.email.trim() || !form.message.trim()) return;

    setSending(true);
    setError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        {
          from_name: `${form.firstName} ${form.lastName}`.trim(),
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <section className="container py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold">Contact Us</h1>
      </section>

      <section className="container pb-20 grid md:grid-cols-2 gap-12">
        <div>
          <SectionTag>Contact</SectionTag>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Get in Touch</h2>

          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="h-11 w-11 rounded-md bg-foreground text-background flex items-center justify-center shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="font-heading font-semibold">Phone</p>
                <p className="text-muted-foreground text-sm">+234 XXX XXXX</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="h-11 w-11 rounded-md bg-foreground text-background flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-heading font-semibold">Email Address</p>
                <p className="text-muted-foreground text-sm">codixcharityfoundation@gmail.com</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="h-11 w-11 rounded-md bg-foreground text-background flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-heading font-semibold">Address</p>
                <p className="text-sm">Codix Charity Foundation</p>
                <p className="text-muted-foreground text-sm">c/o Codix Pharma Ltd, Lagos, Nigeria</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-border p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">Thank you!</h3>
              <p className="text-muted-foreground">We'll get back to you shortly.</p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-heading font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">First Name</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.firstName}
                      onChange={update("firstName")}
                      placeholder="Enter your first name"
                      className="w-full rounded-md border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Last Name</label>
                    <input
                      type="text"
                      maxLength={100}
                      value={form.lastName}
                      onChange={update("lastName")}
                      placeholder="Enter your last name"
                      className="w-full rounded-md border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={update("email")}
                    placeholder="Enter your email address"
                    className="w-full rounded-md border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Type here..."
                    className="w-full rounded-md border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
