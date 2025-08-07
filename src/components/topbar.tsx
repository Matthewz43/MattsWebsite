import type { MouseEvent } from "react";
import { useState } from "react";

import imgIcon from "../assets/cbm.ico";

interface ButtonInformation {
  buttonName: string;
  hrefContent?: string; // ? mark to make it optional
}
function NavBarButton({ buttonName, hrefContent }: ButtonInformation) {
  let handleClick = (event: MouseEvent) => console.log(event);

  if (!hrefContent) {
    hrefContent = "#yessir";
  }
  return (
    <li className="nav-item" onClick={handleClick}>
      <a className="nav-link" href={hrefContent}>
        {buttonName}
      </a>
    </li>
  );
}

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // 2. A function to toggle the state
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen); // tsx doesnt acutally require semicolons WHTATTTT
  };

  let clickedNavCollapsedToggle = () => {
    handleNavToggle();
    console.log("yeah i clicked ts isNavOpen is now:", isNavOpen);
  };

  return (
    // Bootstrap's responsive navigation bar with dark background and shadow
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div className="container-fluid">
        
        <img
          src={imgIcon}
          className="rounded me-3" // 'me-2' adds margin-right for spacing
          width="32"
          height="32"
          alt="Profile Icon"
        />
        <a className="navbar-brand fs-3 fw-bold" href="#">
          Your Name
        </a>

        {/* Navbar Toggler for small screens */}
        {/* This button appears when the screen is small and collapses the nav links */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // Bootstrap attribute to toggle collapse
          data-bs-target="#navbarNav" // Target the ID of the collapsible content
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick = {handleNavToggle}
        >
          <span className="navbar-toggler-icon"></span>{" "}
          {/* Icon for the toggler */}
        </button>

        {/* Collapsible Navbar Content */}
        {/* This div contains the navigation links and collapses on small screens */}
        <div
          className={`collapse navbar-collapse  `} // ok ig I cant use my own react for some reason
          id="navbarNav"
        >
          {/* Navigation Links - ms-auto pushes them to the right on larger screens */}
          <ul className="navbar-nav ms-auto">
            <NavBarButton buttonName="About" hrefContent="#About" />
            <NavBarButton buttonName="Projects" />
            <NavBarButton buttonName="Contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
