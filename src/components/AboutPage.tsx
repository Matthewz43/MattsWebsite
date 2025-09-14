import React from "react";
import MySummary from "./AboutPage/Biography"
import ProjectsContainer from "./AboutPage/Projects";
import ContactSection from "./AboutPage/ContactMe"
import Navbar from "./NavBar";
import IntroSection from "./AboutPage/IntroSection"

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


interface SectionProps {
  color: string;
  children: React.ReactNode;
  sectionType?: string;
}

const Section: React.FC<SectionProps> = ({ color, children, sectionType}: SectionProps) => {
  // Bootstrap equivalents:
  // d-flex: display: flex
  // align-items-center: align-items: center
  // justify-content-center: justify-content: center
  // p-5: padding: 3rem (or 48px)
  // The width wraps to its parent by default.
  return (
    <section
      className={`${color} container-fluid `}
      id = {sectionType}
    >
      {/*
        The Bootstrap "container" class is used here to constrain the inner content's
        width, which is the most common Bootstrap pattern.
        d-flex justify-content-center
        use this to center it and then add container fluid to "increase size of class"
        OKAY CHANGE text-center TO SOMEWHERE ELSE IT KINDA RUINS SHIT
      */}
      <div className="container text-white ">{children}</div>
    </section>
  );
};

const ExampleItem: React.FC<SectionProps> = ({ color, children }) => {
  // Bootstrap equivalents:
  // d-flex: display: flex
  // align-items-center: align-items: center
  // justify-content-center: justify-content: center
  // p-5: padding: 3rem (or 48px)
  // The width wraps to its parent by default.
  return (
    <div
      className={`${color} container-fluid d-flex align-items-center justify-content-center p-5`}
    >
      {/*
        The Bootstrap "container" class is used here to constrain the inner content's
        width, which is the most common Bootstrap pattern.
      */}
      <section className="container text-white text-center">{children}</section>
    </div>
  );
};




const AboutPage = () => {

  const location = useLocation();

  useEffect(() => {
    // Check if the URL has a hash (e.g., #Projects)
    if (location.hash) {
      // Find the element with a matching ID (e.g., "Projects")
      const element = document.getElementById(location.hash.substring(1));

      // If the element is found, scroll to it smoothly
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      {" "}
      {/* add mt-5 for margin */}
      <IntroSection/>
      <Navbar />
      <Section color="my-custom-dark-two" sectionType = "About">
        <MySummary></MySummary>
      </Section>
      <Section color="my-custom-dark-three" sectionType = "Projects">
        <ProjectsContainer />
      </Section>
      <Section color="my-custom-dark-two" sectionType = "Contact">
        <ContactSection></ContactSection>
      </Section>
      <Section color="my-custom-dark-three" sectionType = "Footer-Section">
        <ExampleItem color="bg-transparent">
          <div className="box2">
            <h2 className="fs-2 fw-bold mb-4">Land Acknowledgements</h2>
            <p className="fs-5">
              I work, live on the unceded territories of the Musqueam first nations.
            </p>
          </div>
        </ExampleItem>
      </Section>

    </>
  );
};

export default AboutPage;
