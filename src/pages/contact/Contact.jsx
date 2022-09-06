import './contact.scss';

const Contact = () => {
  const contactHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="intro">
          <div className="about">
            <h1>We'd love to hear from you.</h1>
            <p>Get in touch and get your queries answered.</p>
          </div>
          <div className="socials">
            <h1>Catch us on socials</h1>
            <div className="icons">
              <img src="/images/icons/fb.svg" alt="facebook fb" />
              <img src="/images/icons/twitter.svg" alt="twitter fb" />
              <img src="/images/icons/linkedin.svg" alt="linkedin fb" />
              <img src="/images/icons/insta.svg" alt="instagram fb" />
            </div>
          </div>
        </div>
        <div className="form">
          <form onSubmit={contactHandler}>
            <div className="form-row">
              <div className="form-input">
                <label htmlFor="firstname">First Name:</label>
                <input type="text" />
              </div>
              <div className="form-input">
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-input">
                <label htmlFor="email">Email:</label>
                <input type="email" />
              </div>
              <div className="form-input">
                <label htmlFor="phone">Phone #:</label>
                <input type="tel" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-input">
                <label htmlFor="phone">Subject:</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-input message">
                <label htmlFor="phone">Your Message:</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-row">
              <button className="contactBtn">Send Enquiry</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
