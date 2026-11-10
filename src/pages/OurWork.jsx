import SectionTag from "@/components/SectionTag";
import heroImage2 from "@/assets/heroImage2.jpg";
import heroImage4 from "@/assets/heroImage3.jpg";
import Mentoring from "@/assets/MentoringImage.jpg";
import OurWorkHero from "../assets/Banner.png";
import { SEO } from "@/components/SEO";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ImageGalaryView } from "@/components/imageGalaryView";
import Image1 from "../assets/Home 1.png";
import Image2 from "../assets/Home 2.png";
import Image3 from "../assets/Home 3.png";
import Image4 from "../assets/Home 4.png";
import Image5 from "../assets/Home 5.png";
import Image6 from "../assets/Banner.png";
import Image7 from "../assets/ourWork1.jpeg";
import Image8 from "../assets/ourWork2.jpeg";
import Image9 from "../assets/ourWork3.jpeg";
import Image10 from "../assets/ourWork4.jpeg";
// import Image11 from "../assets/ourWork5.JPG";
// import Image12 from "../assets/ourWork6.JPG";

const statsGrid = [
  {
    value: "400+",
    label: "Academy Graduates",
    desc: "As of October 2025 — across three cohorts of the Codix Academy programme.",
    bg: "bg-background",
  },
  {
    value: "5",
    label: "Strategic Pillars",
    desc: "Guiding every initiative from capacity-building to philanthropy.",
    bg: "bg-primary text-primary-foreground",
  },
  {
    value: "3",
    label: "Active Programmes",
    desc: "Academy, Scholarships, and Professional Mentorship — live and growing.",
    bg: "bg-accent text-accent-foreground",
  },
  {
    value: "1",
    label: "University MOU",
    desc: "Formalised academic partnership with Olabisi Onabanjo University.",
    bg: "bg-background",
  },
];

const pillars = [
  {
    title: "Health",
    desc: "Contributing and prioritizing the health and well-being of communities at large.",
  },
  {
    title: "Education",
    desc: "Prioritizing education and training initiatives that benefit our stakeholders and the broader community.",
  },
  {
    title: "Philanthropic Initiatives",
    desc: "Supporting charitable causes and organizations.",
  },
  {
    title: "Community Engagement",
    desc: "Supporting and contributing to local communities.",
  },
  {
    title: "Research & Development",
    desc: "Supporting activities around research and development.",
  },
];

const initiatives = [
  {
    tag: "Education",
    title: "Codix Academy",
    img: heroImage4,
    alt: "Scholarship winner",
    desc: "A healthcare capacity-building programme formalised through a Memorandum of Understanding with Olabisi Onabanjo University. The Academy trains undergraduate students in the fields of biosensors and nanotechnology — equipping them with hands-on, industry-relevant skills that directly serve Nigeria's evolving diagnostic sector. SIWES Industrial Placements with Codix Group are embedded in the programme, and select graduates have gone on to join the Codix team.",
    color: "border-primary",
    navigate: "codix-academy",
  },
  {
    tag: "Philanthropy",
    title: "Scholarship",
    img: heroImage2,
    alt: "Training session",
    desc: "The Foundation provides targeted scholarship support to help underserved students achieve their academic and career goals. Rooted in the belief that financial circumstance should not determine professional potential, the scheme identifies and invests in promising individuals — removing barriers to entry in specialised and competitive fields.",
    color: "border-accent",
    navigate: "scholarship",
  },
  {
    tag: "Community",
    title: "Mentorship",
    img: Mentoring,
    alt: "Mentoring session image",
    desc: "Scholarship beneficiaries and NYSC participants are paired with experienced industry professionals within the Codix network. This structured mentorship programme bridges the gap between formal education and workplace readiness — building the communication skills, professional instincts, and sector knowledge that no curriculum alone can deliver.",
    color: "border-primary",
    navigate: "mentoring",
  },
];

const OurWorkImages = [
  { src: Image1, alt: "our work Image 1" },
  { src: Image2, alt: "our work Image 2" },
  { src: Image3, alt: "our work Image 3" },
  { src: Image4, alt: "our work Image 4" },
  { src: Image5, alt: "our work Image 5" },
  // { src: Image6, alt: "our work Image 6" },
  { src: Image7, alt: "our work Image 7" },
  { src: Image8, alt: "our work Image 8" },
  { src: Image9, alt: "our work Image 9" },
  { src: Image10, alt: "our work Image 10" },
  // { src: Image11, alt: "our work Image 11" },
  // { src: Image12, alt: "our work Image 12" },
];

const OurWork = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SEO
        title="Our Work & Initiatives - Codix Charity Foundation"
        description="Codix Charity Foundation invests in people and communities through education, healthcare, and youth development initiatives across Nigeria."
        image={OurWorkHero}
      />

      <section
        className="text-center min-h-[75vh] md:min-h-[100vh] relative flex justify-center items-center"
        style={{
          backgroundImage: `url(${OurWorkHero})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginBottom: "80px",
        }}
      >
        <div className=" text-white text-center h-full flex flex-col justify-center">
          <div className="bg-black absolute inset-0 opacity-55 z-10"></div>
          <p className="bg-black w-fit relative z-20 mx-auto px-4 py-1 shadow-lg rounded-full text-white opacity-80 border border-white text-xs font-bold">
            OUR WORKS
          </p>
          <h1 className="text-4xl md:text-5xl relative z-20 font-heading font-bold mt-4">
            Our Work &amp; Initiatives
          </h1>
        </div>
      </section>

      <section className=" py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="">
              <SectionTag>Our Work</SectionTag>
              <h2 className="text-3xl font-heading font-bold mb-4">
                Improving Lives and Strengthening Communities
              </h2>
              <p className="text-muted-foreground text-sm">
                The Codix Charity Foundation leverages the expertise and
                innovation of Codix Pharma to expand access to quality
                healthcare and empower communities to thrive sustainably —
                across health, education, and long-term development.
              </p>
            </div>
            <div className="grid grid-cols-2 shadow-md">
              {statsGrid.map((s) => (
                <div
                  key={s.label}
                  className={`rounded-xl p-6 border border-border ${s.bg}`}
                >
                  <p className="text-3xl font-heading font-bold">{s.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide mt-1">
                    {s.label}
                  </p>
                  <p className="text-xs opacity-70 mt-2">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
            Featured Initiatives
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Where Strategy Becomes Impact
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12">
            Three active programmes currently delivering measurable change —
            from laboratory training to scholarship funding and professional
            mentorship.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {initiatives.map((i) => {
              const isPrimary = i.color === "border-primary";
              const bgClass = isPrimary ? "bg-[#3D8C54]" : "bg-[#2557C3]";
              const hoverBorderClass = isPrimary
                ? "hover:border-[#3D8C54]"
                : "hover:border-[#2557C3]";

              return (
                <div
                  // key={i.title}
                  className={`rounded bg-white text-left border border-transparent flex flex-col overflow-hidden transition-colors cursor-pointer hover:scale-105 ${hoverBorderClass}`}
                  onClick={() => navigate(`/${i.navigate}`)}
                >
                  <div className={`h-[300px] w-full bg-gray-100`}>
                    <img
                      src={i.img}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading py-6 font-bold text-2xl text-black">
                      {i.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {i.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-20 text-center">
        <SectionTag>Our Work</SectionTag>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
          The Pillars that Guide our Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`rounded-xl p-6 text-left border group transition-all hover:shadow-md hover:bg-primary hover:text-white hover:border-primary hover:cursor-pointer ${
                p.highlighted
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border"
              }`}
            >
              <h3 className="font-heading font-semibold text-lg mb-2">
                {p.title}
              </h3>
              <p
                className={`text-sm transition-colors group-hover:text-white/90 ${p.highlighted ? "opacity-90" : "text-muted-foreground"}`}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="my-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Some of Our Work in Pictures
          </h2>
          <ImageGalaryView images={OurWorkImages} />
        </div>
      </section>
    </div>
  );
};

export default OurWork;
