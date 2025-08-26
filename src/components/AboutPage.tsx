import React from "react";
import MySummary from "./AboutPage/Biography"
import ProjectsContainer from "./AboutPage/Projects";

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
      <div className="bg-warning container text-white text-center">{children}</div>
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
      <div className="container text-white text-center">{children}</div>
    </div>
  );
};




const AboutPage = () => {
  return (
    <>
      {" "}
      {/* add mt-5 for margin */}
      <Section color="bg-primary">
        <MySummary></MySummary>
      </Section>
      <Section color="bg-primary">
        <ProjectsContainer />
      </Section>
      <Section color="bg-primary">
        <ExampleItem color="bg-transparent">
          <h2 className="fs-2 fw-bold mb-4">Welcome to Section One</h2>
          <p className="fs-5">
            This section's height will grow to fit this paragraph and any other
            content you add. Try adding more text or images to see it expand.
          </p>
        </ExampleItem>
      </Section>
    </>
  );
};

export default AboutPage;
