import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { scholarshipSchema, STEP_FIELDS } from "@/schemas/scholarshipSchema";
import emailjs from "@emailjs/browser";
import { Upload, Check } from "lucide-react";
import SectionTag from "@/components/SectionTag";

const STEPS = [
  { id: 1, label: "Personal" },
  { id: 2, label: "Academic" },
  { id: 3, label: "Financial" },
  { id: 4, label: "Leadership" },
  { id: 5, label: "Declaration" },
];

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT",
  "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
  "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
  "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

const Scholarship = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(null);

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(scholarshipSchema),
    defaultValues: {
      firstName: "", lastName: "", middleName: "", phone: "", gender: "", dob: "",
      homeAddress: "", localGov: "", stateOrigin: "", country: "",
      institution: "", courseStudy: "", yearLevel: "", matric: "", cgpa: "", fileName: "",
      financialNeed: "", appliedOther: "", personalStatement: "",
      leadership: "", communityImpact: "",
      refFullName: "", refRelationship: "", refOrganization: "", refEmail: "", refPhone: "",
      trueInfo: false, understand: false, mediaConsent: "", confirmName: "", date: "",
    },
    mode: "onTouched",
  });

  const firstName = watch("firstName");
  const fileName = watch("fileName");

  const next = async () => {
    const valid = await trigger(STEP_FIELDS[step]);
    if (valid) setStep((s) => Math.min(5, s + 1));
  };

  const prev = () => setStep((s) => Math.max(1, s - 1));

  const onSubmit = async (data) => {
    setSending(true);
    setSendError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_SCHOLARSHIP_TEMPLATE_ID,
        {
          // Personal
          first_name: data.firstName,
          last_name: data.lastName,
          middle_name: data.middleName || "",
          phone: data.phone,
          gender: data.gender,
          dob: data.dob,
          home_address: data.homeAddress,
          lga: data.localGov,
          state: data.stateOrigin,
          country: data.country,
          // Academic
          institution: data.institution,
          course: data.courseStudy,
          year_level: data.yearLevel,
          matric: data.matric,
          cgpa: data.cgpa,
          transcript: data.fileName,
          // Financial
          financial_need: data.financialNeed,
          other_assistance: data.appliedOther,
          personal_statement: data.personalStatement,
          // Leadership
          leadership: data.leadership,
          community_impact: data.communityImpact,
          ref_name: data.refFullName,
          ref_relationship: data.refRelationship,
          ref_org: data.refOrganization,
          ref_phone: data.refPhone,
          ref_email: data.refEmail,
          // Declaration
          media_consent: data.mediaConsent,
          signature: data.confirmName,
          sign_date: data.date,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendError("Submission failed. Please try again or contact us directly.");
    } finally {
      setSending(false);
    }
  };

  // ── Helpers ──────────────────────────────────────────────────────────────────
  const e = (field) => errors[field];
  const inputCls = (field) =>
    `w-full rounded-md border ${e(field) ? "border-red-400 focus:ring-red-300/30" : "border-border focus:ring-primary/30"} bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-colors`;
  const labelCls = "block text-sm font-medium mb-1.5";
  const Err = ({ field }) =>
    e(field) ? <p className="text-xs text-red-500 mt-1">{e(field).message}</p> : null;

  return (
    <div>
      {/* ── Hero ── */}
      <section className="container py-16 md:py-20 text-center">
        <SectionTag variant="dark">Application Form</SectionTag>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4">CCF Scholarship</h1>
      </section>

      {/* ── Form ── */}
      <section className="bg-secondary/40 py-12 md:py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Scholarship Application Form</h2>
            <p className="text-muted-foreground text-sm mt-2">Complete all sections accurately to be considered for our scholarship programme.</p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Step {step} of 5</span>
              <span>{Math.round((step / 5) * 100)}% Complete</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
              <div className="h-full bg-primary transition-all duration-300" style={{ width: `${(step / 5) * 100}%` }} />
            </div>
            <div className="flex justify-between mt-6">
              {STEPS.map((s) => (
                <div key={s.id} className="flex flex-col items-center gap-2 flex-1">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${step > s.id ? "bg-primary text-primary-foreground" :
                    step === s.id ? "bg-primary text-primary-foreground ring-4 ring-primary/20" :
                      "bg-border text-muted-foreground"
                    }`}>
                    {step > s.id ? <Check size={14} /> : s.id}
                  </div>
                  <span className={`text-xs ${step === s.id ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Success ── */}
          {submitted ? (
            <div className="bg-background rounded-lg p-12 text-center border border-border">
              <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Check size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">Application Submitted!</h3>
              <p className="text-muted-foreground">Thank you, {firstName}. We'll review your application and get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-background rounded-lg p-6 md:p-10 border border-border shadow-sm">

              {/* ── Step 1: Personal Information ── */}
              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-heading font-bold mb-4">Personal Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>First Name*</label>
                      <input {...register("firstName")} className={inputCls("firstName")} placeholder="Enter your first name" />
                      <Err field="firstName" />
                    </div>
                    <div>
                      <label className={labelCls}>Last Name*</label>
                      <input {...register("lastName")} className={inputCls("lastName")} placeholder="Enter your last name" />
                      <Err field="lastName" />
                    </div>
                    <div>
                      <label className={labelCls}>Middle Name</label>
                      <input {...register("middleName")} className={inputCls("middleName")} placeholder="Enter your middle name" />
                    </div>
                    <div>
                      <label className={labelCls}>Phone Number*</label>
                      <input {...register("phone")} type="tel" className={inputCls("phone")} placeholder="+234 XXX XXXX" />
                      <Err field="phone" />
                    </div>
                    <div>
                      <label className={labelCls}>Gender*</label>
                      <select {...register("gender")} className={inputCls("gender")}>
                        <option value="">Select gender</option>
                        <option>Female</option><option>Male</option><option>Other</option>
                      </select>
                      <Err field="gender" />
                    </div>
                    <div>
                      <label className={labelCls}>Date of Birth*</label>
                      <input {...register("dob")} type="date" className={inputCls("dob")} />
                      <Err field="dob" />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Home Address*</label>
                    <input {...register("homeAddress")} className={inputCls("homeAddress")} placeholder="Enter your home address" />
                    <Err field="homeAddress" />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className={labelCls}>Local Government Area (LGA)*</label>
                      <input {...register("localGov")} className={inputCls("localGov")} />
                      <Err field="localGov" />
                    </div>
                    <div>
                      <label className={labelCls}>State of Origin*</label>
                      <select {...register("stateOrigin")} className={inputCls("stateOrigin")}>
                        <option value="">Select State</option>
                        {NIGERIAN_STATES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                      <Err field="stateOrigin" />
                    </div>
                    <div>
                      <label className={labelCls}>Country*</label>
                      <select {...register("country")} className={inputCls("country")}>
                        <option value="">Select Country</option>
                        <option>Nigeria</option>
                      </select>
                      <Err field="country" />
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 2: Academic Information ── */}
              {step === 2 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-heading font-bold mb-4">Academic Information</h3>
                  <div>
                    <label className={labelCls}>Name of Institution*</label>
                    <input {...register("institution")} className={inputCls("institution")} placeholder="University/Polytechnic name" />
                    <Err field="institution" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Course of Study*</label>
                      <input {...register("courseStudy")} className={inputCls("courseStudy")} placeholder="e.g. Industrial Chemistry" />
                      <Err field="courseStudy" />
                    </div>
                    <div>
                      <label className={labelCls}>Current Year/Level*</label>
                      <select {...register("yearLevel")} className={inputCls("yearLevel")}>
                        <option value="">Select your level</option>
                        <option>100</option><option>200</option><option>300</option><option>400</option><option>500</option>
                      </select>
                      <Err field="yearLevel" />
                    </div>
                    <div>
                      <label className={labelCls}>Matriculation/Student ID*</label>
                      <input {...register("matric")} className={inputCls("matric")} placeholder="Enter your matric number" />
                      <Err field="matric" />
                    </div>
                    <div>
                      <label className={labelCls}>Current CGPA* (0 – 5)</label>
                      <input {...register("cgpa")} className={inputCls("cgpa")} placeholder="e.g. 4.50" />
                      <Err field="cgpa" />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Upload most recent Academic Transcript*</label>
                    <label className={`border-2 border-dashed rounded-md p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${e("fileName") ? "border-red-400" : "border-border hover:border-primary"}`}>
                      <Upload className="text-muted-foreground mb-2" size={24} />
                      <span className="text-sm text-muted-foreground">{fileName || "Click to upload"}</span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(ev) => setValue("fileName", ev.target.files?.[0]?.name || "", { shouldValidate: true })}
                      />
                    </label>
                    <Err field="fileName" />
                  </div>
                </div>
              )}

              {/* ── Step 3: Financial Need ── */}
              {step === 3 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-heading font-bold mb-4">Financial Need</h3>
                  <div>
                    <label className={labelCls}>Why do you feel that you would benefit from this scholarship?*</label>
                    <textarea {...register("financialNeed")} rows={5} className={inputCls("financialNeed")} placeholder="Type here..." />
                    <Err field="financialNeed" />
                  </div>
                  <div>
                    <label className={labelCls}>Are you currently receiving any other forms of financial assistance?*</label>
                    <div className="flex gap-6 text-sm mt-1">
                      <label className="flex items-center gap-2"><input type="radio" value="Yes" {...register("appliedOther")} /> Yes</label>
                      <label className="flex items-center gap-2"><input type="radio" value="No"  {...register("appliedOther")} /> No</label>
                    </div>
                    <Err field="appliedOther" />
                  </div>
                  <div>
                    <label className={labelCls}>Personal Statement*</label>
                    <p className="text-xs text-muted-foreground mb-2">Tell us about yourself, your goals, and how this scholarship will help you achieve them (max 500 words).</p>
                    <textarea {...register("personalStatement")} rows={6} className={inputCls("personalStatement")} placeholder="Type here..." />
                    <Err field="personalStatement" />
                  </div>
                </div>
              )}

              {/* ── Step 4: Leadership & Community ── */}
              {step === 4 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-heading font-bold mb-4">Leadership &amp; Community Involvement</h3>
                  <div>
                    <label className={labelCls}>List any leadership roles you've held or community service you've participated in.*</label>
                    <textarea {...register("leadership")} rows={4} className={inputCls("leadership")} placeholder="Type here..." />
                    <Err field="leadership" />
                  </div>
                  <div>
                    <label className={labelCls}>How do you plan to contribute to your community after completing your studies?*</label>
                    <textarea {...register("communityImpact")} rows={4} className={inputCls("communityImpact")} placeholder="Type here..." />
                    <Err field="communityImpact" />
                  </div>
                  <h4 className="text-base font-heading font-bold pt-4">Referee Information</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Full Name*</label>
                      <input {...register("refFullName")} className={inputCls("refFullName")} />
                      <Err field="refFullName" />
                    </div>
                    <div>
                      <label className={labelCls}>Relationship*</label>
                      <select {...register("refRelationship")} className={inputCls("refRelationship")}>
                        <option value="">Select relationship</option>
                        <option>Lecturer</option><option>Mentor</option><option>Employer</option>
                      </select>
                      <Err field="refRelationship" />
                    </div>
                    <div>
                      <label className={labelCls}>Organisation*</label>
                      <input {...register("refOrganization")} className={inputCls("refOrganization")} />
                      <Err field="refOrganization" />
                    </div>
                    <div>
                      <label className={labelCls}>Phone Number*</label>
                      <input {...register("refPhone")} type="tel" className={inputCls("refPhone")} />
                      <Err field="refPhone" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelCls}>Email Address*</label>
                      <input {...register("refEmail")} type="email" className={inputCls("refEmail")} />
                      <Err field="refEmail" />
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 5: Declaration ── */}
              {step === 5 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-heading font-bold mb-4">Declaration</h3>
                  <div>
                    <label className="flex gap-3 items-start text-sm cursor-pointer">
                      <input type="checkbox" className="mt-1" {...register("trueInfo")} />
                      <span>I confirm that all information provided in this application is true and accurate to the best of my knowledge.</span>
                    </label>
                    <Err field="trueInfo" />
                  </div>
                  <div>
                    <label className="flex gap-3 items-start text-sm cursor-pointer">
                      <input type="checkbox" className="mt-1" {...register("understand")} />
                      <span>I understand that any false information may result in disqualification.</span>
                    </label>
                    <Err field="understand" />
                  </div>

                  <div className="pt-4">
                    <h4 className="font-heading font-bold mb-2">Media Consent</h4>
                    <p className="text-xs text-muted-foreground mb-3">The Codix Charity Foundation may use documents and stories (e.g. photographs, videos, and written submissions) from funded programs to share the program's success with the public, on social media, in print, or in fundraising activities.</p>
                    <p className="text-sm mb-2">Do you consent to the use of your name, photograph, story description, and information about your Codix Charity Foundation involvement in such promotional materials?</p>
                    <div className="space-y-2 text-sm">
                      <label className="flex items-center gap-2"><input type="radio" value="Yes" {...register("mediaConsent")} /> Yes, I give my consent</label>
                      <label className="flex items-center gap-2"><input type="radio" value="No"  {...register("mediaConsent")} /> No, I do not give my consent</label>
                    </div>
                    <Err field="mediaConsent" />
                  </div>

                  <div className="pt-4 space-y-4">
                    <h4 className="font-heading font-bold">Submission</h4>
                    <div>
                      <label className={labelCls}>Signature (Full Name)*</label>
                      <input {...register("confirmName")} className={inputCls("confirmName")} />
                      <Err field="confirmName" />
                    </div>
                    <div>
                      <label className={labelCls}>Date*</label>
                      <input {...register("date")} type="date" className={inputCls("date")} />
                      <Err field="date" />
                    </div>
                  </div>
                </div>
              )}

              {/* ── Navigation ── */}
              <div className="flex justify-between pt-8 mt-6 border-t border-border">
                <button
                  type="button"
                  onClick={prev}
                  disabled={step === 1}
                  className="rounded-md border border-border px-6 py-2.5 text-sm font-medium disabled:opacity-40 hover:bg-secondary transition-colors"
                >
                  Previous
                </button>
                {step < 5 ? (
                  <button
                    type="button"
                    onClick={next}
                    className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <div className="flex flex-col items-end gap-2">
                    {sendError && (
                      <p className="text-xs text-red-500">{sendError}</p>
                    )}
                    <button
                      type="submit"
                      disabled={sending}
                      className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-60"
                    >
                      {sending ? "Submitting…" : "Submit Application"}
                    </button>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Scholarship;
