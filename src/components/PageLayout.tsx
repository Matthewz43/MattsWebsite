import React from "react";
import ListGroup from "./ListGroup";




function PageLayout({pageInformation = "soy"}) {

    const propsExample = {
    items: ["Item 1", "Item 2", "Item 3"],
    heading: "My items",
    onSelectItem: (item: string) => console.log(`Selected: ${item}`),
  };

  return (
    <>
      <main className="container mt-5 pt-5">
        {/* The target for the "About" link */}
        <section id="About" style={{ minHeight: "100vh", paddingTop: "60px" }}>
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
