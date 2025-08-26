
import { Fragment, useState } from "react";
import type { MouseEvent } from "react";




interface ProjectItemDescription {
  title: string;
  description: string[];
}

function SingleProjectItem({title, description}: ProjectItemDescription) {
  
  return (
    <>
    <div className = "container bg-secondary m-1 p-2 rounded"> 
        {title}

    </div>

    </>
  );
}


// probably add like some container to hold the single project items



function ProjectsContainer() {
    const projExample = {
    title: "soy",
    description: ['yeah'],
  };

  return (
    <> {/*remove bg-info later*/}
      <div className="bg-info container row">
        <div className="bg-secondary col-lg-4 align-self-center">
          <h2>Projects</h2>
          <p><a className="link-danger link-opacity-100" href="https://getbootstrap.com/docs/5.0/utilities/text/#">
            View All Projects{' ->'}</a>
          </p>

        </div>
        <div className="col-lg-8 align-self-center py-3">
          <SingleProjectItem 
            title = {projExample.title}
            description = {projExample.description}
          />
          <p>2 of 2</p>
          <p>2 of 2</p>
          <p>2 of 2</p>
        </div>

      </div>
    </>

  );
}

export default ProjectsContainer;