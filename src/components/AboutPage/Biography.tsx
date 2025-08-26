import avatar from "../../assets/avatar.png"; // The bundler handles this import.




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
  return (
    <>
      <h3>Column 2</h3>
      <p>
        This is the content for the second column. When the screen is wider, it will be right next to Column 1. I am artificially making this content longer than it has to be because I am extremely funny and yes, true, I'm just a test. Using a `br` tag is really bad for adding spacing, but this is a test.mp4.
      </p>
      <h4>
        Some quick buttons below to navigate to part of this page
      </h4>
      <div className="display-flex">
        <button>Soy</button>
        <button>Soy</button>
        <button>Soy</button>
        <button>Soy</button>
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