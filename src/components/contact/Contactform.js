import React, { useState } from 'react';
import './contact.css';

export default function Contactform() {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [subject, setsubject] = useState('');
  const [company, setcompany] = useState('');
  const [message, setmessage] = useState('');
  const [allval, setallval] = useState([]);

  const formsubmit = (e) => {
    e.preventDefault();
    const newval = { fname, lname, phone, email, subject, company, message };
    setallval([...allval, { ...newval, id: Date.now(), isVisible: true }]);

    // Reset form fields
    setfname('');
    setlname('');
    setemail('');
    setphone('');
    setcompany('');
    setsubject('');
    setmessage('');
  };

  const hidedata = (id) => {
    setallval(allval.map(val => (val.id === id ? { ...val, isVisible: false } : val)));
  };

  return (
    <>
      <div className="contact mtop">
        <div className="container flex">
          <div className="main-content">
            <div className="side-content" style={{ position: 'absolute', right: '87px' }}>
            <h3>Visit Our Location</h3>
            <p>123 Main Street, Suite 400, Cityville, USA</p>
              <br />
              <h3>Message Us</h3>
              <span>info@example.com</span>
              <br />
              <span>+012 456 7898</span>
              <br />
              <div className="icon">
                <h3 style={{display:"block", display: 'flex', justifyContent: 'space-around'}}>Follow Us</h3>
                <br />
                <div className="flex_space">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-whatsapp"></i>
                  <i class="fab fa-linkedin-in"></i>
                  <i class="fab fa-youtube"></i>
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
            <h2>Contact Form</h2>
            <p>Fill out the form below, we will get back to you soon</p>
            <form onSubmit={formsubmit}>
              <div className="grid1">
                <div className="input">
                  <span>
                    First Name<label htmlFor="fname">*</label>
                  </span>
                  <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={(e) => setfname(e.target.value)}
                  />
                </div>

                <div className="input">
                  <span>
                    Last Name<label htmlFor="lname">*</label>
                  </span>
                  <input
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={(e) => setlname(e.target.value)}
                  />
                </div>

                <div className="input">
                  <span>
                    Your Phone<label htmlFor="phone">*</label>
                  </span>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>

                <div className="input">
                  <span>
                    Your Email<label htmlFor="email">*</label>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>

                <div className="input">
                  <span>
                    Subject<label htmlFor="sub">*</label>
                  </span>
                  <input
                    type="text"
                    name="sub"
                    value={subject}
                    onChange={(e) => setsubject(e.target.value)}
                  />
                </div>

                <div className="input">
                  <span>
                    Your Company<label htmlFor="com">*</label>
                  </span>
                  <input
                    type="text"
                    name="com"
                    value={company}
                    onChange={(e) => setcompany(e.target.value)}
                  />
                </div>
              </div>

              <div className="input">
                <span>
                  Write a Message<label htmlFor="message">*</label>
                </span>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                style={{padding:"10px"}}></textarea>
              </div>
              <button className="primary-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="show-data">
        {allval.map((currentvalue) => {
          const { id, fname, lname, phone, email, subject, company, message, isVisible } = currentvalue;
          return (
            isVisible && (
              <div className="sign-box" key={id}>
                <h1 style={{ color: 'gray', fontFamily: 'cursive' }}>Sent Successfully</h1>
                <i className="fas fa-times-circle" onClick={() => hidedata(id)}></i>
                <h3>
                  First Name:
                  <p>{fname}</p>
                </h3>
                <h3>
                  Last Name:
                  <p>{lname}</p>
                </h3>
                <h3>
                  Phone:
                  <p>{phone}</p>
                </h3>
                <h3>
                  Email:
                  <p>{email}</p>
                </h3>
                <h3>
                  Subject:
                  <p>{subject}</p>
                </h3>
                <h3>
                  Company:
                  <p>{company}</p>
                </h3>
                <h3>
                  Message:
                  <p>{message}</p>
                </h3>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}
