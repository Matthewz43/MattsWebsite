import React from "react";
import avatar from "../assets/avatar.png"; // The bundler handles this import.

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
      className={`${color} container-fluid align-items-center justify-content-center `}
    >
      {/*
        The Bootstrap "container" class is used here to constrain the inner content's
        width, which is the most common Bootstrap pattern.
        d-flex justify-content-center
        use this to center it and then add container fluid to "increase size of class"
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

function MeIcon() {
  return (
    <div className="">
      <div className="container pb-4">
        <img
          src={avatar}
          alt="my avatar"
          className="rounded-circle"
        ></img>
      </div>

      <p>Matthew Zhao</p>
      <p>University Of British Columbia</p>
      <p>Icons</p>
      <p>LinkedIn Github, Instagram</p>
    </div>
  );
}

function BiographyDescription() {
  return (
    <>
      <h3>Column 2</h3>
      <p>
        This is the content for the second column. When the screen is wider, it will be right next to Column 1. I am artificially making this content longer than it has to be because I am extremely funny and yes, true, I'm just a test. Using a `br` tag is really bad for adding spacing, but this is a test.mp4.
      </p>
      <h4>
        Some quick buttons below to navigate to part of this page
      </h4>
      <div className="display-flex">
        <button>Soy</button>
        <button>Soy</button>
        <button>Soy</button>
        <button>Soy</button>
      </div>
    </>
  );
}


function MySummary() {
  return (
    // change to bg-transparent after testing bs is
    <div className={`bg-success row container align-items-center pt-5 pb-3`}>
      <div className="col-12 col-lg-6">
        <MeIcon></MeIcon>
      </div>
      {/*use pe-val for right padding*/}
      <div className="col-12 col-lg-6 ">
        <BiographyDescription/>

      </div>
    </div>
  );
}

const AboutPage = () => {
  return (
    <>
      {" "}
      {/* add mt-5 for margin */}
      <Section color="bg-primary">
        <MySummary></MySummary>
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
