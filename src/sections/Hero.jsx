import React from "react";
import Button from "../components/Button";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const Hero = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Nextjs",
    "Zustand",
    "Vercel",
    "Nodejs",
    "MongoDB",
  ];
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* bg image */}
      <div className="absolute inset-0">
        <img
          className="min-h-screen obejct-cover opacity-40"
          src="/hero-bg.jpg"
          alt="hero-image"
        />
      </div>
      {/* bg filter */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />

      {/* green dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            className="absolute rounded-full w-1.5 h-1.5 opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            key={index}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        {/* badge */}

        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 animate-fade-in text-sm text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Software Engineer • React Specialist
          </span>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              <span className="text-primary glow-text">Frontend </span>Engineer
              <br />
              building reliable
              <br />
              <span className="font-serif italic font-normal text-white">
                web applications.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Hi, I'm Shiya Fu — a frontend Developer crafting clean,
              accessible, and performant web experiences with modern JavaScript
              and React.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <Button size="lg">
              Contact Me <ArrowRight className="size-5" />
            </Button>
            <AnimatedBorderButton>
              <Download className="size-5" />
              Download CV
            </AnimatedBorderButton>
          </div>

          <div className="flex items-center gap-2 animate-fade-in animation-delay-400">
            <span>Fllow me:</span>
            {[
              { icon: Github, href: "https://github.com/Fupaopaopaopao" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/shiya-fu-81746b285/",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="flex glass rounded-full w-10 h-10 items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {<social.icon className="size-5" />}
              </a>
            ))}
          </div>
        </div>

        <div className="animate-fade-in animation-delay-500 overflow-hidden mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-cente">
            My skills:
          </p>
          <div className="relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee ">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
