import type { MouseEvent } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import imgIcon from "../assets/cbm.ico";

// hi me from future to npm run dev expose host you have to type in -> npm run dev -- --host with extra -- Thank you random dude on stackoverflow
// summer break starts in 9 days (fuck summer courses) i get a whole 15 days of summer vacation what a time to be spending me first year as an adult

interface ButtonInformation {
  buttonName: string;
  hrefContent?: string; // ? mark to make it optional
}
function NavBarButton({ buttonName, hrefContent }: ButtonInformation) {
  let handleClick = (event: MouseEvent) => console.log(event);

  if (!hrefContent) {
    hrefContent = "/about";
  }
  return (
    <li className="nav-item" onClick={handleClick}>
      <Link className="nav-link" to={hrefContent}>
        {buttonName}
      </Link>
    </li>
  );
}

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);


  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen); // tsx doesnt acutally require semicolons WHTATTTT
    // yeah so apparently ts doesnt work with bootstrap js or like it fucks uip the anim hen i try to control it myself:sob:
  };

  let clickedNavCollapsedToggle = () => {
    handleNavToggle();
    console.log("yeah i clicked ts isNavOpen is now:", isNavOpen);
  };

  return (
    // Bootstrap's responsive navigation bar with dark background and shadow
    // before it was bg-dark for boostraps dark i made a custom dark (its just darker (pure black trust)) honestly might use bg-dark mine is too black 
    <nav className="navbar navbar-expand-lg navbar-dark my-custom-dark shadow-lg fixed-top">
      <div className="container-fluid">
        
        <img
          src={imgIcon}
          className="rounded me-3" // 'me-2' adds margin-right for spacing OHHHHH IT MEANS MARGIN END THAT MAKES SENESE :RIYAL:

          width="32"
          height="32"
          alt="Profile Icon"
        />
        <a className="navbar-brand fs-3 fw-bold" href="#">
          Your Name
        </a>

        {/* Navbar Toggler for small screens */}
        {/* ok so basically the target is the div with the data-bs-target id idk bootstrap is kinda confusing soi many things twf wtf....*/}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // Bootstrap attribute to toggle collapse
          data-bs-target="#navbarNav" // Target the ID of the collapsible content
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick = {clickedNavCollapsedToggle} // reminder for me to delete ts later
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
            <NavBarButton buttonName="About" hrefContent="/about" />
            <NavBarButton buttonName="Projects" hrefContent="/projects" />
            <NavBarButton buttonName="Contact" hrefContent="/contact"/>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
