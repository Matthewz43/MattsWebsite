import type { MouseEvent } from "react";

import imgIcon from "../assets/cbm.ico"; // Adjust path based on where img_girl.jpg is relative to your component



interface ButtonInformation {
  buttonName : string;
}
function NavBarButton({buttonName}: ButtonInformation) {
  let handleClick = (event: MouseEvent) => console.log(event);
  
  return ( 
    <li className="nav-item" onClick={handleClick}>
      <a className="nav-link" href="#contact">
        {buttonName}
      </a>
    </li>
  );
}
// Then in your JSX:
function Navbar() {
  return (
    // Bootstrap's responsive navigation bar with dark background and shadow
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div className="container-fluid">
        {/* Brand/Logo - Your Name, styled with Bootstrap's font size and weight classes */}
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
        >
          <span className="navbar-toggler-icon"></span>{" "}
          {/* Icon for the toggler */}
        </button>

        {/* Collapsible Navbar Content */}
        {/* This div contains the navigation links and collapses on small screens */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Navigation Links - ms-auto pushes them to the right on larger screens */}
          <ul className="navbar-nav ms-auto">
            <NavBarButton buttonName="About" />
            <NavBarButton buttonName="Projects" />
            <NavBarButton buttonName="Contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; // Export the component for use in other files
