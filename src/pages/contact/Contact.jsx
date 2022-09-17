import './contact.scss';
import { useState } from 'react';

import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const API_URL = 'https://qrprinttechnovation.herokuapp.com';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const contactHandler = (e) => {
    e.preventDefault();
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/api/v1/contact`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'connect.sid=s%3ANIVoAGx28wleURxHGAFtFbc4Vc1iccDF.oEk4BoAi3gUVv3ljApeRsQ28JxocPVsVhclT%2FBhBnrk',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        // lastName: 'Anwar',
        email,
        phone,
        message,
        // email: 'saad26273043@gmail.com',
        // phone: '+923133467889',
        // message: 'Testing',
      }),
    });

    const data = await response.json();

    Swal.fire({
      title: data === 'Message sent to Admin sucessfully' ? 'Sent' : 'Error!',
      text: data,
      icon: data === 'Message sent to Admin sucessfully' ? 'success' : 'error',
      confirmButtonText: 'Cool',
    });

    console.log('Form error: ', data);
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
                <input type="text" required onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="form-input resp">
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" required onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-input">
                <label htmlFor="email">Email:</label>
                <input type="email" required onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-input resp">
                <label htmlFor="phone">Phone #:</label>
                <input type="tel" required onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-input">
                <label htmlFor="phone">Subject:</label>
                <input type="text" required onChange={(e) => setSubject(e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-input message">
                <label htmlFor="phone">Your Message:</label>
                <textarea name="" id="" onChange={(e) => setMessage(e.target.value)}></textarea>
                {/* <input type="text" onChange={(e) => setMessage(e.target.value)} /> */}
              </div>
            </div>
            <div className="form-row">
              <button className="contactBtn" type="submit" onClick={sendMessage}>
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
