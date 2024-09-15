import React, { useState } from 'react'; // Import useState
import HeadTitle from '../Headtitle/HeadTitle';
import './login.css'; // Assuming login.css is used for styling
import '../contact/contact.css'; // Import if needed for styles
import { Link } from 'react-router-dom';

export default function Register() {
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

  return (
    <>
      <HeadTitle />
      <div className='container' >
      <div className="register-form">
        <h2 style={{marginTop:"20px",fontSize:"26px",fontFamily:"cursive",color:"gray", textAlign:"center",marginBottom:"40px"}}>Register</h2>
        <form onSubmit={formsubmit}>
          <div className="grid1">
            <div className="input">
              <span>
                First Name<label htmlFor="fname">*</label>
              </span>
              <input
                type="text"
                name="fname" 
                required
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
                required
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
                required
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


         <Link to="/" ><button type="submit" className="primary-btn" style={{marginTop:"30px"}}>Register</button></Link>
        </form>
      </div>
      </div>
     
    </>
  );
}
