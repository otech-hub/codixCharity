import SectionTag from "@/components/SectionTag";
import aboutTeam from "@/assets/aboutHero.jpg";
import sammy from "@/assets/Sammy.png";
import kingsley from "@/assets/Kingsley.png";
import mary from "@/assets/Mary.png";
import olumide from "@/assets/Olumide.png";
import jide from "@/assets/Jide.png";
import gbenga from "@/assets/Gbenga.png";
import dotun from "@/assets/Dotun.png";
import AboutHero from "../assets/AboutHero.jpg";
import { pillars } from "@/lib/pillars";

const trustees = [
  {
    name: "Mr. Sammy Ogunijimi",
    role: "Chairman",
    img: sammy,
    alt: "Mr Sammy Ogunjimi",
  },
  {
    name: "Pharm. Kingsley Agooru",
    role: "Trustee",
    img: kingsley,
    alt: "Kingsley Agooru",
  },
  {
    name: "Pharm. Mary Ogaegwu",
    role: "Trustee",
    img: mary,
    alt: "Mary Ogaegwu",
  },
  {
    name: "Pst. Olumide Adeyileka",
    role: "Trustee",
    img: olumide,
    alt: "Olumide Adeyileka",
  },
  {
    name: "Mr. Jide Ogunkoya",
    role: "Trustee",
    img: jide,
    alt: "Jide Ogunkoya",
  },
  {
    name: "Barr. Dotun Oduwobi",
    role: "Trustee",
    img: dotun,
    alt: "Dotun Oduwobi",
  },
  {
    name: "Mr. Gbenga Daniel-Adebayo",
    role: "Trustee",
    img: gbenga,
    alt: "Gbenga Daniel-Adebayo",
  },
];

const About = () => {
  return (
    <div>
      <section
        className="  text-center h-screen"
        style={{
          backgroundImage: `url(${AboutHero})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginBottom: "80px",
        }}
      >
        <div className="bg-black opacity-70 w-full h-full py-16 md:py-24 flex flex-col justify-center items-center text-white">
          <SectionTag variant="dark">About the Foundation</SectionTag>
          <h1 className="text-4xl md:text-5xl/17 font-heading font-bold mt-4">
            About Codix Charity <br /> Foundation
          </h1>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start h-full">
          <img
            src={aboutTeam}
            alt="CCF Team"
            className="rounded-lg w-full h-full object-cover"
            loading="lazy"
            width={700}
          />
          <div>
            <SectionTag>Our Work</SectionTag>
            <h2 className="text-3xl font-heading font-bold mb-6">
              Improving Lives and Strengthening Communities
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Codix Charity Foundation is the corporate social responsibility
                arm of Codix Pharma Ltd and the broader Codix Group. Established
                in 2022 and guided by a Board of seasoned trustees, the
                Foundation upholds governance, accountability, and transparency
                in all its interventions.
              </p>
              <p>
                The Foundation is committed to improving lives and strengthening
                communities through targeted investments in health, education,
                research and development, community engagement, and
                philanthropy. By leveraging the expertise, innovation, and reach
                of Codix Pharma, we aim to expand access to quality healthcare,
                support local capacity-building, and empower communities to
                thrive sustainably.
              </p>
              <p>
                Rooted in the belief that inclusive development drives long-term
                progress, Codix Charity Foundation partners with public and
                private stakeholders to deliver impactful programs that respond
                to real community needs that contribute to healthier, more
                resilient societies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container text-center">
          <SectionTag>Our Direction</SectionTag>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Our Vision &amp; Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="rounded-xl bg-primary text-primary-foreground p-8 text-left">
              <h3 className="font-heading font-bold text-xl mb-3">
                Our Vision
              </h3>
              <p className="text-sm opacity-90">
                To be a leading force for healthcare interventions and
                sustainable development in Nigeria.
              </p>
            </div>
            <div className="rounded-xl bg-primary text-primary-foreground p-8 text-left">
              <h3 className="font-heading font-bold text-xl mb-3">
                Our Mission
              </h3>
              <p className="text-sm opacity-90">
                To contribute to a healthier, more empowered nation by improving
                access to quality healthcare, quality education, and sustainable
                solutions for underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 mt-40">
        <div className="container text-center pt-5">
          <SectionTag>Our Focus</SectionTag>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            The Pillars that Guide our Work
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            We channel resources into health, education, and research to create
            measurable impact where it matters most.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className={`rounded-xl p-6 text-left hover:border- border transition-shadow hover:shadow-md hover:bg-primary hover:text-white hover:cursor-pointer`}
              >
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-sm hover:text-white">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Board of Trustees
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Our Board of Trustees comprises distinguished leaders in healthcare,
          business, and philanthropy who provide strategic oversight and
          governance for the Foundation.
        </p>

        <div className="rounded-2xl p-6 max-w-5xl mx-auto flex flex-col gap-6">
          {/* Row 1 - 4 cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {trustees.slice(0, 4).map((t) => (
              <div
                key={t.name}
                className="flex flex-col items-center border border-border rounded-2xl p-6 bg-white w-[220px]"
              >
                <img src={t.img} alt={t.alt} />
                <p className="text-sm font-heading font-semibold text-center mb-1">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  {t.role}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 - 3 cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {trustees.slice(4).map((t) => (
              <div
                key={t.name}
                className="flex flex-col items-center border border-border rounded-2xl p-6 bg-white w-[220px]"
              >
                <img src={t.img} alt={t.alt} />{" "}
                <p className="text-sm font-heading font-semibold text-center mb-1">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
