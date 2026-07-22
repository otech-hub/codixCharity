import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import SectionTag from "@/components/SectionTag";
import accomplishments from "@/assets/accomplishmentImage.jpg";
import imoleayoTestimonial from "@/assets/imoleayoTestimonial.jpg";
import KasarachiTestimonial from "@/assets/kasarachiTestimonial.jpg";
import preciousTestimonial from "@/assets/preciousTestimonial.jpg";
import { carouselImage } from "@/lib/data";
import {
  CarouselItem,
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import React, { useEffect, useState, useRef } from "react";
import HomeHero from "../assets/HomeHero.jpg";
import { pillars } from "@/lib/pillars";

const stats = [
  {
    label: "Scholars Supported",
    value: "250+",
    desc: "Students across Nigeria receiving educational support and mentorship.",
  },
  {
    label: "Healthcare professionals trained",
    value: "1,200+",
    desc: "Medical laboratory scientists and healthcare workers in our development programs.",
  },
  {
    label: "Communities reached",
    value: "15",
    desc: "States and communities benefiting from our health and education initiatives.",
  },
];

const testimonials = [
  {
    text: "Studying Biosensors & Nanotechnology at Olabisi Onabanjo University really helped me understand how diagnostic systems actually work, not just the theory.",
    name: "Precious Akinyemi",
    role: "Graduate of Industrial Chemistry",
    stars: 5,
    img: preciousTestimonial,
  },
  {
    text: "Taking the Biosensors and Nanotechnology course helped me see how biosensors and nanotechnology actually work in real products.",
    name: "Kasarachi Moku",
    role: "Graduate of Industrial Chemistry",
    stars: 4.5,
    img: KasarachiTestimonial,
  },
  {
    text: "Taking the Biosensors & Nanotechnology course as a final-year student at OOU genuinely shaped how I think about modern diagnostics and pharmaceutical innovation.",
    name: "Imoleayo Solaja",
    role: "Graduate of Industrial Chemistry",
    stars: 4,
    img: imoleayoTestimonial,
  },
];

const Index = () => {
  const [emblaApi, setEmblaApi] = useState();

  const plugin = useRef(
    AutoScroll({
      speed: 1.5,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  useEffect(() => {
    if (!emblaApi) return;

    const timer = setTimeout(() => {
      api.reInt();
    }, 150);

    return () => clearTimeout(timer);
  }, [emblaApi]);

  const videoId = "VWOiLzDL4pc";

  return (
    <div>
      <style>{`
        .continuous-marquee [data-embla-container],
        .continuous-marquee .flex {
          transition-timing-function: linear !important;
        }
      `}</style>
      {/* Hero */}

      <section
        style={{
          backgroundImage: `url(${HomeHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen"
      >
        <div className="bg-black opacity-70 text-white text-center p-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl pt-8 md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6">
            <span className="">
              Transforming <br />{" "}
            </span>{" "}
            People &amp; Communities
          </h1>
          <p className="max-w-xl mx-auto  mb-8">
            Codix Charity Foundation builds stronger healthcare systems and
            empowers the next generation of professionals across Nigeria. We
            invest in people, knowledge, and lasting change.
          </p>
        </div>
      </section>
      <section className="container py-16 mt-10 md:py-24 text-center">
        <div className="flex flex-col lg:flex-row  gap-6 mb-[80px]">
          <div className="lg:w-[50%] text-left">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Creating Lasting Impact
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              At Codix Charity Foundation, we believe that sustainable
              development begins by investing in people. Beyond providing
              support, we create opportunities that improve lives, nurture
              future leaders, strengthen healthcare systems, and inspire
              innovation.
            </p>
            <br />
            <p className="text-sm text-muted-foreground leading-relaxed">
              As the social impact arm of Codix Pharma Ltd and the broader Codix
              Group, we work with communities, educational institutions,
              governments, and development partners to deliver initiatives that
              create meaningful and lasting change. From opening doors for young
              innovators to supporting healthier communities, every intervention
              is driven by a simple belief: when people are empowered with
              knowledge, opportunity, and access, they become catalysts for
              transforming society.
            </p>
            <br />
            <p className="text-sm text-muted-foreground leading-relaxed">
              The stories we help create are our greatest measure of impact—and
              they are only just beginning.
            </p>
          </div>
          <div className="lg:w-[50%] lg:px-5 sm:h-70">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameborder="0"
              title="Youtube Video Player"
              allow="acceleration; autoplay; clipboard-write; encrypted-media; gyroscope; pinture-in-picture"
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
        {/* Image carousel */}
        <Carousel
          setApi={setEmblaApi}
          opts={{
            loop: true,
            align: "start",
            duration: 0,
            watchResize: true,
          }}
          plugins={[plugin.current]}
          className="absolute left-0 right-0 w-full continuous-marquee mt-10"
        >
          <CarouselContent>
            {carouselImage.map((img, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="rounded-2xl w-full h-60 object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <img
            src={heroImage1}
            alt="Lab training"
            className="rounded-2xl w-full h-56 object-cover"
            width={800}
            height={600}
          />
          <img
            src={heroImage2}
            alt="Community training"
            className="rounded-2xl w-full h-56 object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
          <img
            src={heroImage3}
            alt="Healthcare workers"
            className="rounded-2xl w-full h-56 object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div> */}
      </section>

      {/* Pillars */}
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

      {/* Accomplishments */}
      {/* <section className="container py-20">
        <div className="text-center mb-12">
          <SectionTag>Impact</SectionTag>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            What we've accomplished
          </h2>
          <p className="text-muted-foreground mt-2">
            Since 2022, we've reached thousands of students and professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {stats.map((s) => (
              <div key={s.label} className="border-l-4 border-primary pl-6">
                <p className="text-sm font-semibold text-foreground">
                  {s.label}
                </p>
                <p className="text-4xl font-heading font-bold text-foreground">
                  {s.value}
                </p>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <img
            src={accomplishments}
            alt="Students training"
            className="rounded-lg w-full h-full object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="bg-[#0E3074] py-40">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-foreground mb-2">
            Real Voices
          </h2>
          <p className="text-navy-foreground/70 mb-12">
            Hear from those we've supported
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#717D9620] rounded-xl p-6 text-left text-white"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(t.stars)
                          ? "fill-yellow-500 text-yellow-500"
                          : "text-border"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-white mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    // alt={t.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold font-heading">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="container py-20 text-center bg-green-200 my-20 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Stay Updated
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Stay up to date on our programs, events, and more{" "}
        </p>
        <div className="flex gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md border border-border px-4 py-3 text-sm"
          />
          <button className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          By clicking Get Started you're confirming that you agree with our
          Terms and Conditions.
        </p>
      </section> */}
    </div>
  );
};

export default Index;
