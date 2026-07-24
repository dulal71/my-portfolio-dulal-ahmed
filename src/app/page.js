"use client";
import "./globals.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef(null);
 
const lenis = useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {

      // 1. Loading Screen & Hero Entrance Timeline
      if (lenis) lenis.stop();
      const tl = gsap.timeline({
        onComplete: () => {
          if (lenis) lenis.start();
          const loader = document.querySelector('.loader-overlay');
          if (loader) loader.style.display = 'none';
          ScrollTrigger.refresh();
        }
      });

      // Cinematic background text pan
      gsap.fromTo(".loader-bg-text",
        { xPercent: 10 },
        { xPercent: -20, duration: 3.5, ease: "none" }
      );

      // Percentage Counter
      const counter = { val: 0 };
      tl.to(counter, {
        val: 100,
        duration: 2,
        ease: "power4.inOut",
        onUpdate: () => {
          const el = document.querySelector('.loader-counter');
          if (el) el.textContent = Math.round(counter.val) + "%";
        }
      })
        .fromTo(".loader-text-span",
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
          "-=1.5"
        )
        .to(".loader-progress", { width: "100%", duration: 2, ease: "power4.inOut" }, "-=2")
        // Exit animations
        .to([".loader-counter", ".loader-text-span", ".loader-progress"], { y: -50, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.in" })
        .to(".loader-bg-text", { opacity: 0, duration: 0.5 }, "-=0.6")
        .to(".loader-overlay", {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut"
        })
        // Seamlessly chain into the Hero animation as the curtain rises
        .from(".hero-title", { y: 50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.6")
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .from(".hero-desc", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-buttons", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");

      // 2. Section Reveal Animations
      gsap.utils.toArray('.reveal-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%", // trigger when top of section hits 85% of viewport
            toggleActions: "play none none none", // Only play once for premium feel
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

      // 3. Skill Section Container Animation
      gsap.from(".skill-container", {
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // 4. Skills Staggered Entrance
      gsap.from(".skill-item", {
        scrollTrigger: {
          trigger: "#skills",
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        scale: 0.5,
        stagger: 0.15, // Increased stagger for "one by one" effect
        duration: 0.8,
        ease: "back.out(1.5)"
      });

      // 5. Timeline Animations (Experience & Education)
      gsap.utils.toArray('.timeline-container').forEach(container => {
        const line = container.querySelector('.timeline-line');
        // Draw the line down as you scroll
        if (line) {
          gsap.fromTo(line,
            { scaleY: 0, transformOrigin: "top" },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top center",
                end: "bottom center",
                scrub: true
              }
            }
          );
        }

        const items = container.querySelectorAll('.timeline-item');

        items.forEach((item) => {
          const dot = item.querySelector('.timeline-dot');
          const content = item.querySelector('.timeline-content');

          // Animate dot (activates when line reaches it)
          if (dot) {
            gsap.from(dot, {
              scale: 0,
              backgroundColor: "#374151", // Starts off inactive (gray)
              duration: 0.6,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: item,
                start: "top center", // Triggers exactly when line reaches the item
                toggleActions: "play none none reverse"
              }
            });
          }

          // Animate content box
          if (content) {
            gsap.from(content, {
              x: 50,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top center", // Syncs with dot activation
                toggleActions: "play none none reverse"
              }
            });
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Unique Cinematic Loader Overlay */}
      <div className="loader-overlay fixed inset-0 z-[99999] bg-[#030303] flex flex-col items-center justify-center overflow-hidden">

       

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="loader-counter text-5xl md:text-9xl font-black text-blue-900 mb-2">
            0%
          </div>

          <div className="overflow-hidden h-12 mb-8 flex items-center justify-center">
            <span className=" text-center loader-text-span text-lg md:text-2xl font-bold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-700 to-purple-500 drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]">
              Welcome to my portfolio
            </span>
          </div>

          <div className="w-64 md:w-96 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
            <div className="loader-progress absolute top-0 left-0 h-full w-0 bg-linear-to-r from-brand-orange via-brand-red to-purple-600 shadow-[0_0_20px_rgba(225,29,72,0.8)]"></div>
          </div>
        </div>
      </div>

      <Navbar />

      {/* Ultra Glassy Background Elements with Parallax classes */}
      <div className="fixed inset-0 top-0 hero-bg -z-20 opacity-40"></div>
      <div className="bg-orb-1 fixed top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-blue/10 rounded-full blur-[100px] md:blur-[150px] -z-10 animate-glow-pulse pointer-events-none"></div>
      <div className="bg-orb-2 fixed bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-orange/5 rounded-full blur-[100px] md:blur-[150px] -z-10 animate-glow-pulse pointer-events-none delay-1000"></div>

      <main className="max-w-7xl mx-auto px-6 pt-48 pb-24 relative z-10 overflow-hidden">
        {/* Hero */}
        <Hero></Hero>

        {/* About Me */}
       <About></About> 

        {/* Skills */}
       <Skills></Skills>

       {/* Education Timeline */}
       <Education></Education>
        {/* Experience Timeline */}
        <Experience></Experience>

        {/* Projects */}
        <Projects></Projects>
   {/* Contact Section */}
      <Contact></Contact>
    {/* Footer */}
       <Footer></Footer>
       
      </main>

     

      {/* Footer */}
      
    </div>
  );
}


