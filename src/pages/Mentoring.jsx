import SectionTag from "@/components/SectionTag";
import mentoringImg from "@/assets/MentoringImage.jpg";

const Mentoring = () => (
  <div>
    <section className="container py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-heading font-bold">
        CCF Mentorship Programme
      </h1>
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
