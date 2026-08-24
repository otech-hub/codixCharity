import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SectionTag from "@/components/SectionTag";
import colabImg1 from "../assets/colabImg1.jpg";
import colabImg2 from "../assets/colabImg2.jpg";
import colabImg3 from "../assets/colabImg3.jpg";
import aboutHero from "../assets/aboutHero.jpg";
import colabImg4 from "../assets/colabImg4.jpg";
import colabImg5 from "../assets/colabImg5.jpg";
import colabImg6 from "../assets/colabImg6.jpg";
import colabImg7 from "../assets/colabImg7.jpg";
import Precious from "../assets/Precious.jpg";
import kasarachi from "../assets/kasarachiTestimonial.jpg";
import heroImage4 from "../assets/heroImage4.jpg";
import CodixAcademyHero from "../assets/codixAcademyHero.webp";
import { SEO } from "@/components/SEO";

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
    img: Precious,
  },
  {
    text: "Taking the Biosensors and Nanotechnology course helped me see how biosensors and nanotechnology actually work in real products. Now at Codix Bio, I apply that analytical thinking to quality assurance every day.",
    name: "Kasarachi Moku",
    role: "Graduate of Industrial Chemistry",
    uni: "Olabisi Onabanjo University",
    img: kasarachi,
  },
];

const CodixAcademy = () => {
  const [voiceIdx, setVoiceIdx] = useState(0);
  const voice = voices[voiceIdx];

  const videoId = "VWOiLzDL4pc";

  const OurColalborationImage = [
    { src: colabImg1, alt: "Collaboration group meeting" },
    { src: colabImg3, alt: "MLS meeting" },
    { src: aboutHero, alt: "Council planning session" },
    { src: colabImg2, alt: "Training group" },
    { src: colabImg4, alt: "Classroom training" },
    { src: colabImg5, alt: "Mentoring session" },
    { src: colabImg6, alt: "Project presentation" },
    { src: colabImg7, alt: "Participant discussion" },
  ];

  return (
    <div>
      <SEO
        title=" Codix Academy - Professional Training Programme for Healthcare Professionals"
        description="Codix Academy, a cornerstone initiative of the Codix Charity Foundation, is dedicated to advancing healthcare through education, training and capacity building."
        image={CodixAcademyHero}
      />

      <section
        className="relative flex justify-center items-center text-center min-h-[75vh] md:min-h-[100vh]"
        style={{
          backgroundImage: `url(${CodixAcademyHero})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginBottom: "80px",
        }}
      >
        <div className=" text-white text-center h-full flex flex-col justify-center">
          <div className="bg-black absolute inset-0 opacity-50 z-10"></div>
          <p className="bg-black w-fit relative z-20 mx-auto px-4 py-1 shadow-lg rounded-full text-white opacity-80 border border-white text-xs font-bold">
            PROFESSIONAL TRAINING AND PROGRAMME
          </p>
          <h1 className="text-4xl md:text-5xl relative z-20 font-heading font-bold mt-4">
            Codix Academy
          </h1>
        </div>
      </section>

      <section className=" py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTag>The Why</SectionTag>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Program Overview
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Codix Academy, a cornerstone initiative of the Codix Charity
                Foundation, is dedicated to advancing healthcare through
                education, training and capacity building. As part of our
                commitment to enhancing the nation's health, Codix Academy
                focuses on strengthening the Nigerian healthcare delivery system
                by equipping healthcare professionals, students and other key
                stakeholders with the knowledge, skills and practical
                competencies needed to improve healthcare outcomes.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recognizing the pivotal role of timely and accurate diagnosis in
                promoting individual health, Codix Academy delivers specialized
                training programmes designed to enhance diagnostic proficiency,
                promote best practices and support the consistent delivery of
                quality test results for improved patient management. Our
                commitment extends beyond patient care; it is about building the
                capacity of the healthcare workforce and fostering continuous
                professional development across the healthcare ecosystem
              </p>
            </div>
            <img
              src={heroImage4}
              alt="Academy lab session"
              className="rounded-lg w-full object-cover h-full"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <iframe
            src={`https://youtube.com/embed/${videoId}`}
            frameborder="0"
            className="w-full h-full rounded-md"
            title="Codix Transforming Education"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div>
            <SectionTag>The How</SectionTag>
            <h2 className="text-3xl font-heading font-bold mb-6">
              Our Academic Partnership
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In line with this commitment, Codix has formalized a Memorandum of
              Understanding with Olabisi Onabanjo University to develop courses
              in the fields of biosensors and nanotechnology. The core objective
              of this collaboration is to facilitate skill development among
              undergraduate students, ensuring they are exposed to the latest
              advancements in these specialized fields. Through hands-on
              training and industry-relevant learning experiences, students
              acquire practical skills directly applicable to the dynamic
              landscape of healthcare.
            </p>
          </div>
        </div>
      </section>

      <section className=" py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTag>The Results</SectionTag>
              <h2 className="text-3xl font-heading font-bold">
                Student Impact &amp; Career Growth
              </h2>
            </div>
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
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0E3074] text-white">
        <div className="container">
          <div className="text-center mb-12">
            <SectionTag variant="dark">Our Collaboration</SectionTag>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
              Our Collaboration with MLSCN
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-slate-300 mt-4">
              Supporting professional certification and practical training
              through meaningful engagement with the Medical Laboratory Science
              Council of Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OurColalborationImage.length > 0 &&
              OurColalborationImage.slice(0, 6).map((img, index) => (
                <div
                  key={index}
                  className="rounded-3xl overflow-hidden border border-slate-700 shadow-xl shadow-slate-950/40"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[268px] object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            <div className="col-span-3 flex justify-center gap-4">
              {OurColalborationImage.length > 0 &&
                OurColalborationImage.slice(6).map((img, index) => (
                  <div
                    key={index}
                    className="rounded-3xl overflow-hidden border border-slate-700 shadow-xl shadow-slate-950/40 w-[30%]"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-[268px] object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
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
              src={voice.img}
              alt={voice.name}
              className="w-40 h-48 rounded-lg object-cover shrink-0 hidden md:block"
              loading="lazy"
              width={200}
              height={400}
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

// update

export default CodixAcademy;
