import React from "react";
import Navbar from "./NavBar"; // Assuming your Navbar component is in this file path
import ListGroup from "./ListGroup";

function PageLayout() {

    const propsExample = {
    items: ["Item 1", "Item 2", "Item 3"],
    heading: "My items",
    onSelectItem: (item: string) => console.log(`Selected: ${item}`),
  };

  return (
    <>
      <main className="container mt-5">
        {/* The target for the "About" link */}
        <section id="About" style={{ minHeight: "100vh", paddingTop: "60px" }}>
          <h2>About Me</h2>
          <p>
            This is the content for the "About" section. Clicking the "About"
            button in the navbar will bring you here.
          </p>
          <p>You can add your bio, skills, and experience here.</p>
        </section>

        {/* The target for the "Projects" link */}
        <section
          id="Projects"
          style={{ minHeight: "100vh", paddingTop: "60px" }}
        >
          <h2>My Projects</h2>
          <p>
            This is the content for the "Projects" section. Clicking the
            "Projects" button in the navbar will bring you here.
          </p>
          <p>This area can showcase your portfolio of work.</p>
        </section>

        {/* The target for the "Contact" link */}
        <section
          id="Contact"
          style={{ minHeight: "100vh", paddingTop: "60px" }}
        >
          <ListGroup
            items={propsExample.items}
            heading={propsExample.heading}
            onSelectItem={propsExample.onSelectItem}
          />
          <h2>Contact Me</h2>

          <p>
            This is the content for the "Contact" section. Clicking the
            "Contact" button in the navbar will bring you here.
          </p>
          <p>Feel free to reach out via the form below or my email.</p>
        </section>
      </main>
    </>
  );
}

export default PageLayout;
