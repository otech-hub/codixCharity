import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SectionTag from "@/components/SectionTag";
import accomplishments from "@/assets/accomplishments.jpg";
import heroImage1 from "@/assets/heroImage1.png";

const timeline = [
  {
    year: "2024",
    title: "Program Launch",
    desc: "Codix Academy is officially established. First cohort enrolled and trained under the inaugural curriculum.",
  },
  {
    year: "2024 – 25",
    title: "Cohorts 2 & 3",
    desc: "Rapid programme growth reflects rising institutional demand, with two additional cohorts welcomed in quick succession.",
  },
  {
    year: "Oct 2025",
    title: "400+ Alumni Milestone",
    desc: "Over four hundred graduates — a strong, technically skilled pipeline entering Nigeria's healthcare sector.",
  },
];

const voices = [
  {
    text: "Studying Biosensors & Nanotechnology at Olabisi Onabanjo University really helped me understand how diagnostic systems actually work, not just the theory. It made concepts like sensitivity and material interactions more practical for me. Now at Codix Bio, I use that analytical thinking to better understand assay performance and pay attention to accuracy in the real-world application.\nIn QA, I now use that skill to carefully monitor processes, detect inconsistencies, and ensure accuracy and reliability in results. Because I understand how biosensor systems work at a deeper level, I'm more intentional about quality checks and maintaining standards.",
    name: "Precious Akinyemi",
    role: "Graduate of Industrial Chemistry",
    uni: "Olabisi Onabanjo University",
  },
  {
    text: "Taking the Biosensors and Nanotechnology course helped me see how biosensors and nanotechnology actually work in real products. Now at Codix Bio, I apply that analytical thinking to quality assurance every day.",
    name: "Kasarachi Moku",
    role: "Graduate of Industrial Chemistry",
    uni: "Olabisi Onabanjo University",
  },
];

const CodixAcademy = () => {
  const [voiceIdx, setVoiceIdx] = useState(0);
  const voice = voices[voiceIdx];

  return (
    <div>
      <section className="container py-16 md:py-24 text-center">
        <SectionTag variant="dark">Professional Training Programme</SectionTag>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4">
          Codix Academy
        </h1>
      </section>

      <section className="bg-secondary py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTag>The Why</SectionTag>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Program Overview
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Codix Academy, a cornerstone initiative of the Codix Charity
                Foundation, is a dedicated effort to contribute to the
                enhancement of the nation's health, with a primary focus on
                strengthening the Nigerian healthcare delivery system. Our
                commitment extends beyond patient care; it is about fostering
                support and building capacity for healthcare professionals.
                Recognizing the pivotal role of timely and effective diagnosis
                in promoting individual health, Codix Academy endeavors to
                empower stakeholders within the healthcare system with the
                knowledge and resources necessary for accurate diagnosis and the
                consistent delivery of test results to improve patient
                management.
              </p>
            </div>
            <img
              src={heroImage1}
              alt="Academy lab session"
              className="rounded-lg w-full h-80 object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionTag>The How</SectionTag>
            <h2 className="text-3xl font-heading font-bold mb-6">
              Our Academic Partnership
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            In line with this commitment, Codix has also formalized a Memorandum
            of Understanding with Olabisi Onabanjo University to develop courses
            in the fields of biosensors, and nanotechnology. The core objective
            of this collaboration is to facilitate skill development among
            undergraduate students, ensuring exposure to the latest advancements
            in these specialized fields. Through hands-on training, students
            acquire practical skills directly applicable to the dynamic
            landscape of healthcare.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <p className="text-sm text-muted-foreground leading-relaxed">
              It also aims to enhance career opportunities for students by
              aligning curricula with industry needs. This strategic approach
              prepares students to meet the evolving demands of the healthcare
              sector, positioning them as highly sought-after professionals. Our
              approach goes beyond theory. Undergraduate students have the
              opportunity to complete their SIWES placements with Codix Group,
              gaining practical experience in real-world industry environments.
              We are also proud that some graduates of the programme have gone
              on to join Codix after completing their studies, helping to reduce
              the gap between graduation and employment in specialized
              healthcare fields.
            </p>
            <div>
              <SectionTag>The Results</SectionTag>
              <h2 className="text-3xl font-heading font-bold">
                Student Impact &amp; Career Growth
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTag>The Records</SectionTag>
              <h2 className="text-3xl font-heading font-bold text-navy-foreground">
                Our Journey &amp; Success
              </h2>
            </div>
            <div>
              <p className="text-sm text-navy-foreground/70 mb-8">
                Launched in 2024, the programme welcomed its first cohort that
                same year and has since grown to its third cohort. As of October
                2025, over 400 students have graduated, building a strong
                pipeline of technically skilled young professionals prepared to
                contribute meaningfully to modern diagnostics and healthcare
                delivery in Nigeria.
              </p>
              <div className="space-y-8">
                {timeline.map((t) => (
                  <div key={t.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium text-navy-foreground/60 min-w-[80px] text-right">
                        {t.year}
                      </span>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-accent mt-1 shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold text-navy-foreground">
                        {t.title}
                      </h3>
                      <p className="text-sm text-navy-foreground/60">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
          Voice from the Cohort
        </h2>
        <div className="max-w-3xl mx-auto flex items-start gap-6">
          <button
            onClick={() =>
              setVoiceIdx((i) => (i - 1 + voices.length) % voices.length)
            }
            className="mt-20 shrink-0 w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-6 items-start">
            <img
              src={accomplishments}
              alt={voice.name}
              className="w-40 h-48 rounded-lg object-cover shrink-0 hidden md:block"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="text-left">
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-6">
                {voice.text}
              </p>
              <p className="font-heading font-semibold">{voice.name}</p>
              <p className="text-xs text-muted-foreground">{voice.role}</p>
              <p className="text-xs text-muted-foreground">{voice.uni}</p>
            </div>
          </div>
          <button
            onClick={() => setVoiceIdx((i) => (i + 1) % voices.length)}
            className="mt-20 shrink-0 w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CodixAcademy;
