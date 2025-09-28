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

    <a className="hover-underline  mt-3 rounded py-3 btn btn-dark border border-dark" onClick={redirectedToLink}>
      <div className="d-flex flex-row justify-content-center">
        <h2>{SocialMedia}</h2>
      </div>


    </a>
  )
}


function EmailItem({ SocialMedia, linkToSocial }: ContactInformation) {

  function sendEmailToSocial() {
  // Assuming 'linkToSocial' is a variable that holds the email address, 
  // e.g., var linkToSocial = "info@example.com";
  
  // The 'mailto:' protocol tells the browser to open the default email client.
  window.open("mailto:" + linkToSocial, "_self");
}
  return (

    <a className="hover-underline  mt-3 rounded py-3 btn btn-dark border border-dark" onClick={sendEmailToSocial}>
      <div className="d-flex flex-row justify-content-center">
        
        <h2>{SocialMedia}</h2>
      </div>


    </a>
  )
}

function ContactSection() {

  const exampleMedia = {
    SocialMedia: "Instagram",
    linkToSocial: "https://www.instagram.com/matthewz43/",
  }

  const githubAccount = {
    SocialMedia: "Github",
    linkToSocial: "https://github.com/zycata"
  }

  const emailAddress = {
    SocialMedia: "Email",
    linkToSocial: "yanxinmatthewzhao@gmail.com",
  }

  const linkedIn = {
    SocialMedia: "LinkedIn",
    linkToSocial: "https://www.linkedin.com/in/matthew-zhao-a746912a1/",
  }



  return (
    <>
      <div className="intro-animation container text-white text-center p-5">
        <h2 className="fs-2 fw-bold mb-4">My Socials</h2>
        <p className="fs-5">
          You can contact me at these social media platforms, feel free to send me an email right now!
        </p>
        <div className="row text-center">
          <div className="col-md-6 d-grid gap-2 ">
            <ContactItem {...linkedIn} />
            <EmailItem {...emailAddress} />
          </div>
          <div className="col-md-6 d-grid gap-2 ">
            <ContactItem {...githubAccount} />
            <ContactItem {...exampleMedia} />

          </div>


        </div>
      </div>
    </>
  );
}

export default ContactSection;
