// yeah guys contact me section hahaha


interface ContactInformation {
  SocialMedia: string;
  linkToSocial: string;


}


function ContactItem({ SocialMedia, linkToSocial }: ContactInformation) {

  function redirectedToLink() {
    window.open(linkToSocial, "_blank", "noopener,noreferrer");
  }
  return (

    <div className="hover-underline  mt-3 rounded py-3 btn btn-secondary " onClick = {redirectedToLink}>

        <h2>{SocialMedia}</h2>
      
    
    </div>


  )
}



function ContactSection() {

  const exampleMedia = {
    SocialMedia: "SilkSongingIt",
    linkToSocial: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/",
  }

  const linkedIn = {
    SocialMedia: "LinkedIn",
    linkToSocial: "https://www.linkedin.com/in/matthew-zhao-a746912a1/",
  }

  return (
    <>
      <div className="intro-animation container text-white text-center p-5">
        <h2 className="fs-2 fw-bold mb-4">Contact Me</h2>
        <p className="fs-5">
          You can contact me at these social media platforms, feel free to send me an email right now!
        </p>
        <div className="row text-center">
          <div className="col-md-6 d-grid gap-2 ">
            <ContactItem {...linkedIn} />
            <ContactItem {...exampleMedia} />
          </div>
          <div className="col-md-6 d-grid gap-2 ">
            <ContactItem {...exampleMedia} />
            <ContactItem {...exampleMedia} />

          </div>


        </div>
      </div>
    </>
  );
}

export default ContactSection;
