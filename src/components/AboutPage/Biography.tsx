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

      <p>Matthew Zhao</p>
      <p>University Of British Columbia</p>
      <p>Icons</p>
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
      <h3>Column 2</h3>
      <p>
        This is the content for the second column. When the screen is wider, it will be right next to Column 1. I am artificially making this content longer than it has to be because I am extremely funny and yes, true, I'm just a test. Using a `br` tag is really bad for adding spacing, but this is a test.mp4.
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