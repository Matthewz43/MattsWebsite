import React from "react";
import MySummary from "./AboutPage/Biography"
import ProjectsContainer from "./AboutPage/Projects";
import ContactSection from "./AboutPage/ContactMe"
import InteractiveCard from "./AboutPage/interactive-card-react";

interface SectionProps {
  color: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ color, children }) => {
  // Bootstrap equivalents:
  // d-flex: display: flex
  // align-items-center: align-items: center
  // justify-content-center: justify-content: center
  // p-5: padding: 3rem (or 48px)
  // The width wraps to its parent by default.
  return (
    <div
      className={`${color} container-fluid `}
    >
      {/*
        The Bootstrap "container" class is used here to constrain the inner content's
        width, which is the most common Bootstrap pattern.
        d-flex justify-content-center
        use this to center it and then add container fluid to "increase size of class"
        OKAY CHANGE text-center TO SOMEWHERE ELSE IT KINDA RUINS SHIT
      */}
      <div className="container text-white ">{children}</div>
    </div>
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
  return (
    <>
      {" "}
      {/* add mt-5 for margin */}
      <div id="app">
  <div id="star-container">
    <div id="star-pattern"></div>
    
    <div id="star-gradient-overlay"><InteractiveCard/></div>
  </div>
</div>
      <Section color="my-custom-dark-three">
          <InteractiveCard/>
      </Section>
      <Section color="my-custom-dark-two">
        <MySummary></MySummary>
      </Section>
      <Section color="my-custom-dark-three">
        <ProjectsContainer />
      </Section>
      <Section color="my-custom-dark-two">
        <ContactSection></ContactSection>
      </Section>
      <Section color="my-custom-dark-three">
        <ExampleItem color="bg-transparent">
          <div className="box2">
            <h2 className="fs-2 fw-bold mb-4">Welcome to Section One</h2>
            <p className="fs-5">
              This section's height will grow to fit this paragraph and any other
              content you add. Try adding more text or images to see it expand.
            </p>
          </div>
        </ExampleItem>
      </Section>

    </>
  );
};

export default AboutPage;
