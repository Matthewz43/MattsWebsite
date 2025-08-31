import avatar from "../../assets/avatar.png"; // The bundler handles this import.
import AMONGUS from "../../assets/Amogus.mp3";

import{ useRef } from "react";

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

      <p className = "fs-5">Matthew Zhao</p>
      <p className = "fs-5">University Of British Columbia</p>
      <p className = "fs-5"> Icons</p>
      <p>LinkedIn Github, Instagram</p>
    </div>
  );
}

function BiographyDescription() {


  const audioRef = useRef<HTMLAudioElement>(new Audio(AMONGUS));


  const playSound = () => {
    const audio = audioRef.current;
    audio.currentTime = 0; // restart if already playing
    audio.play().catch((err) => console.error("Error playing sound:", err));
  };

  const stopSound = () => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0; // reset to start
  };


  return (
    <>
      <h3 className = "fs-2" >Biography</h3>
      <p className = "fs-4 fw-normal">
        I'm currently an undergraduate student studying computer science (BsC) at the University of British Columbia. My interests in this field include machine learning, robotics, game design and fullstack development. 
      </p>

      <p className = "fs-4 fw-normal">
        Outside of tech, I'm a huge fan of the <strong>Cyberpunk 2077</strong> series by Mike Pondsmith (Yes I'm super excited for EdgeRunners 2). I'm also currently trying to get better at distance running. 
      </p>
      <h4>
        Buttons added because Im really funny
      </h4>
      <div className="display-flex">
        <button onClick = {playSound}>Play</button>
        <button onClick = {stopSound}>Stop</button>
      </div>
    </>
  );
}

function MySummary() {
  return (
    // change to bg-transparent after testing bs is
    <div className={`bg-success row align-items-center pt-5 pb-3 text-center `}>
      <div className="col-12 col-lg-5">
        <MeIcon></MeIcon>
      </div>
      {/*use pe-val for right padding*/}
      <div className="col-12 col-lg-6 ">
        <BiographyDescription/>

      </div>
    </div>
  );
}



export default MySummary;