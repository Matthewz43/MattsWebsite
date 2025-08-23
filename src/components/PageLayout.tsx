import React from "react";
import ListGroup from "./ListGroup";

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

function PageLayout({ pageInformation = "soy" }) {
  const propsExample = {
    items: ["Item 1", "Item 2", "Item 3"],
    heading: "My items",
    onSelectItem: (item: string) => console.log(`Selected: ${item}`),
  };

  return (
    <>
      <main className="container-fluid mt-5 pt-3">
        {/* The target for the "About" link */}
        <section id="About" style={{ minHeight: "100vh" /*, paddingTop: "1px" */}}>
          <Section color="bg-primary">
            <h2 className="fs-2 fw-bold mb-4">Welcome to Section One</h2>
            <p className="fs-5">
              This section's height will grow to fit this paragraph and any
              other content you add. Try adding more text or images to see it
              expand.
            </p>
          </Section>
          <h2>{pageInformation}</h2>
          <p>
            This is the content for the "About" section. Clicking the "About"
            button in the navbar will bring you here.
          </p>
          <p>You can add your bio, skills, and experience here.</p>
        </section>

        <ListGroup
          items={propsExample.items}
          heading={propsExample.heading}
          onSelectItem={propsExample.onSelectItem}
        />
      </main>
    </>
  );
}

export default PageLayout;
