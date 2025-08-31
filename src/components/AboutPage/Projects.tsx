// npimport { Fragment, useState } from "react";
import type { MouseEvent } from "react";
import githubIcon from "../../assets/github-mark.svg";
import linksvgIcon from "../../assets/link-svg.svg";
import { redirect } from "react-router-dom";
import { useState } from "react";

interface ProjectItemDescription {
  title: string;
  description: string[];
  githubLink: string;
  otherLink: string;
}

function SingleProjectItem({
  title,
  description,
  githubLink = "github.com",
  otherLink = "soy",
}: ProjectItemDescription) {


  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOverItem(event: MouseEvent) {
    console.log("Mouseover: ", event);

  }
  function redirectToGithub() {
    window.open(githubLink, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <li
        className={`container my-2 p-2 rounded list-unstyled box2  ${isHovered ? "rotatebox2" : ""}`}
        
        onMouseOver={handleMouseOverItem}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className = "bg-dark rounded ">
        <div className="d-flex align-items-center">
          <div className="p-2  rounded flex-grow-1">
            <h5 className="mx-2 fw-bold mt-3">{title}</h5>
            <ul className="">
              {description.map((item, index) => (
                <li className="" key={index}>
                  {" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-3 rounded d-flex flex-column align-items-end">
            <button
              type="button"
              className="btn btn-primary my-1"
              onClick={redirectToGithub}
            >
              <img
                src={githubIcon}
                alt="Github"
                className="rounded-circle  "
              ></img>
            </button>
          </div>
        </div>
        </div>
      </li>
    </>
  );
}

const AlignedContent = ({
  title,
  description,
  githubLink = "hey",
  otherLink = "soy",
}: ProjectItemDescription) => {
  return (
    // The parent 'd-flex' container enables flexbox behavior.
    // 'align-items-center' vertically centers the content.
    <div className="d-flex align-items-center border p-3 rounded">
      {/* This div is pushed to the left by 'mr-auto' */}
      <div className="me-auto p-2">
        <h5 className="mx-2 fw-bold">{title}</h5>
        <ul className="list-unstyled">
          {" "}
          {/* 'list-unstyled' removes bullet points */}
          {description.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
      </div>

      {/* This div is pushed to the right by 'ms-auto' */}
      {/* 'd-flex flex-column align-items-end' stacks the paragraphs and aligns them to the right. */}
      <div className="ms-auto p-2 bg-success text-white rounded d-flex flex-column align-items-end">
        <p className="mb-0">OtherLink: {otherLink}</p>
      </div>
    </div>
  );
};

// probably add like some container to hold the single project items

function ProjectsContainer() {
  const projExample = {
    title: "soy",
    description: ["yeah", "chair"],
    githubLink: "https://github.com/zycata/BTD6Machina",
    otherLink: "please do above",
  };
  const projectsToShow = [
    {
      title: "BTD6 AI",
      description: ["Developed an AI with a genetic algorithm to learn how to play the game Bloons Tower Defense 6 (BTD6)",
         "Created a C# mod using DLL injection to interface with the BTD6 game engine, providing real-time gameplay data to the C++ AI for learning and optimization.", 
          "Optimized a decision-making algorithm, reducing the number of generations needed to beat the game by 50% through refined genetic selection."],
      githubLink: "https://github.com/zycata/BTD6Machina",
      otherLink: "please do above",
    },
    {
      title: "soy",
      description: ["yeah", "chair"],
      githubLink: "https://github.com/zycata/BTD6Machina",
      otherLink: "please do above",
    },
  ];
  return (
    <>
      {" "}
      {/*remove bg-info later*/}
      <div className="bg-info row p-2">
        <div className="bg-secondary col-lg-2 align-self-center rounded text-center">
          <h2>Projects</h2>
          <p>
            <a
              className="link-danger link-opacity-100"
              href="https://creations.mtdv.me/articles/MattsProjects"
              target="_blank"
            >
              View All Projects{" ->"}
            </a>
          </p>
        </div>
        <div className="col-lg-10 align-self-center py-3">
          {projectsToShow.map((item, index) => (
            <SingleProjectItem key={index} {...item} />
          ))}

          <SingleProjectItem {...projExample} />
          <div className = "box"> </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsContainer;
