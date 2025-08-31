// npimport { Fragment, useState } from "react";
import type { MouseEvent } from "react";
import githubIcon from "../../assets/github-mark.svg";
import linksvgIcon from "../../assets/link-svg.svg";
import { useState } from "react";

interface ProjectItemDescription {
  title: string;
  description: string[];
  githubLink: string;
  otherLink: string;
}

function ButtonIcon({redirectedLink = "", renderedIcon = githubIcon}) {

  if (redirectedLink === "") {
    return null
  }
  function redirectedToLink() {
    window.open(redirectedLink, "_blank", "noopener,noreferrer");
  }

  return (
    
      <button
        type="button"
        className="btn btn-primary my-1 "
        onClick={redirectedToLink}
      >
        <img
          src={renderedIcon}
          alt="Github"
          className="rounded-circle responsive-image"
        ></img>
      </button>

  );
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
  return (
    <>
      <li
        className={`container my-2 p-2 rounded list-unstyled box2  ${
          isHovered ? "rotatebox2" : ""
        }`}
        onMouseOver={handleMouseOverItem}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-dark rounded ">
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

                <div className="p-3 rounded d-flex flex-column align-items-end ">
                  <ButtonIcon redirectedLink = {githubLink} renderedIcon={githubIcon}/>
                  <ButtonIcon redirectedLink = {otherLink} renderedIcon = {linksvgIcon} />
                </div>
            
            
          </div>
        </div>
      </li>
    </>
  );
}

const InteractableBook = () => {
  const linkToClick =
    "https://en.wikipedia.org/wiki/Monkey_selfie_copyright_dispute";
  // not rickroll btw
  return (
    <a
      className="book-container"
      href={linkToClick}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="book">
        <img
          alt="monkey monkey"
          src="https://images.theconversation.com/files/56078/original/zkmxyt9c-1407516907.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1000&fit=clip"
        />
      </div>
    </a>
  );
};

// probably add like some container to hold the single project items

function ProjectsContainer() {
  const sectionSubject = "Projects";
  const projectsToShow = [
    {
      title: "BTD6 AI",
      description: [
        "Developed an AI with a genetic algorithm to learn how to play the game Bloons Tower Defense 6 (BTD6)",
        "Created a C# mod using DLL injection to interface with the BTD6 game engine, providing real-time gameplay data to the C++ AI for learning and optimization.",
        "Optimized a decision-making algorithm, reducing the number of generations needed to beat the game by 50% through refined genetic selection.",
      ],
      githubLink: "https://github.com/zycata/BTD6Machina",
      otherLink: "",
    },
    {
      title: "Vendorly Hackathon Project",
      description: [
        "Developed a full-stack platform for business registration and management for the UBC BizTech Hackathon.",
        "Created the backend with Python and FastAPI, handling API requests and managing a MySQL database for business data.",
      ],
      githubLink: "https://github.com/fanxiaotuGod/vendorly",
      otherLink: "https://www.google.com/search?q=Mineral+Craft+Funny",
    },
    {
      title: "Vendorly Hackathon Project",
      description: [
        "Developed a full-stack platform for business registration and management for the UBC BizTech Hackathon.",
        "Created the backend with Python and FastAPI, handling API requests and managing a MySQL database for business data.",
      ],
      githubLink: "",
      otherLink: "",
    },
  ];
  return (
    <>
      {" "}
      {/*remove bg-info later*/}
      <div className=" row p-2" id={sectionSubject}>
        <div className="bg-secondary col-lg-2 align-self-center rounded text-center py-3">
          <h2>{sectionSubject}</h2>
          <p>
            <a
              className="link-danger link-opacity-100"
              href="https://creations.mtdv.me/articles/MattsProjects"
              target="_blank"
            >
              View All Projects{" ->"}
            </a>
          </p>
          <InteractableBook />
        </div>

        <div className="col-lg-10 align-self-center py-3">
          {projectsToShow.map((item, index) => (
            <SingleProjectItem key={index} {...item} />
          ))}

          <div className="box"> </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsContainer;
