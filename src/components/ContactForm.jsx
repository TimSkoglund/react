import { useState } from "react";

function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [specialist, setSpecialist] = useState(1);

  const handleFullnameChange = (event) => {
    setFullName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleDropdownChange = (event) => {
    setSpecialist(event.target.value);
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Specialist:', specialist);
  }

  return (
    <div className="form-container">
    <form id="regForm" onSubmit={handleSubmitForm}>
        <h2>Get Online Consultation</h2>
        <div className="input-group">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input onChange={handleFullnameChange} value={fullName} type="text" id="fullName" className="form-input" placeholder="Enter your full name" />
        </div>
        <div className="input-group">
            <label htmlFor="EmailAdress" className="form-label">Email Address</label>
            <input onChange={handleEmailChange} value={email} type="email" id="EmailAdress" className="form-input" placeholder="Enter your email address" />
        </div>
        <div className="form-list">
            <label htmlFor="Specialist">Specialist:</label>
                <select value={specialist} onChange={handleDropdownChange} id="Specialist" name="Specialist" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
        </div>
        <div className="button-style">
            <button className="btn-primary">Make an appointment</button>
        </div>
    </form>
</div>
  )
}

export default ContactForm