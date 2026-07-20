import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

import Hero from "../Components/Hero";

// Lazy-load sections below the hero
const HeroAboutSection = lazy(() => import("../Components/HeroAbout"));

const RecentWorks = lazy(() => import("../Components/RecentWorks"));

const ServicesSection = lazy(() => import("../Components/Service"));

const WorksShowcase = lazy(() => import("../Components/WorksShowcase"));

const ContactForm = lazy(() => import("../Components/ContactForm"));

const DeferredSection = ({ children, minHeight = "600px" }) => {
  const sectionRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        minHeight: shouldRender ? undefined : minHeight,
      }}
    >
      {shouldRender ? children : null}
    </div>
  );
};

const SectionLoader = ({ minHeight = "200px" }) => (
  <div role="status" aria-label="Loading section" style={{ minHeight }} />
);

const Home = () => {
  return (
    <>
      {/* Load hero immediately */}
      <Hero />

      {/* Load after the hero */}
      <DeferredSection minHeight="800px">
        <Suspense fallback={<SectionLoader minHeight="800px" />}>
          <HeroAboutSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="900px">
        <Suspense fallback={<SectionLoader minHeight="900px" />}>
          <RecentWorks />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="600px">
        <Suspense fallback={<SectionLoader minHeight="600px" />}>
          <ServicesSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="500px">
        <Suspense fallback={<SectionLoader minHeight="500px" />}>
          <WorksShowcase />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight="600px">
        <Suspense fallback={<SectionLoader minHeight="600px" />}>
          <ContactForm />
        </Suspense>
      </DeferredSection>
    </>
  );
};

export default Home;
