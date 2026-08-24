import SectionTag from "@/components/SectionTag";
import mentoringImg from "@/assets/MentoringImage.jpg";
import mentorHero from "../assets/mentorHero.webp";
import { SEO } from "@/components/SEO";

const Mentoring = () => (
  <div>
    <SEO
      title="Codix Mentorship Programme - Guide and Support the Next Generation of Healthcare Professionals"
      description="CCF Mentorship Programme pairs experienced professionals with scholarship recipients, interns, and NYSC participants to provide guidance, support, and career development."
      image={mentorHero}
    />
    <section
      className="relative flex justify-center items-center text-center min-h-[75vh] md:min-h-[100vh] mb-20"
      style={{
        backgroundImage: `url(${mentorHero})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" text-white text-center h-full flex flex-col justify-center">
        <div className="bg-black absolute inset-0 opacity-50 z-10"></div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold relative z-20">
          CCF Mentorship Programme
        </h1>
      </div>
    </section>

    <section className="container pb-20 grid md:grid-cols-2 gap-12 items-start">
      <div>
        <SectionTag>Overview</SectionTag>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
          About the Programme
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            The Codix Charity Foundation Mentorship Program pairs scholarship
            beneficiaries, student interns, and NYSC participants within the
            Codix Group with experienced professionals who guide them through
            academic growth, career development, and real-world workplace
            skills.
          </p>
          <p>
            Through one-on-one mentoring, career conversations, and practical
            guidance, beneficiaries gain clarity, confidence, and direction as
            they transition from learning to doing. Mentors support participants
            in setting goals, navigating professional environments, building
            relevant skills, and making informed career choices.
          </p>
          <p>
            This program is designed to ensure that every opportunity provided
            by the Codix Charity Foundation leads to lasting personal and
            professional growth.
          </p>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden bg-muted aspect-[4/3]">
        <img
          src={mentoringImg}
          alt="Mentorship in action"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  </div>
);

export default Mentoring;
