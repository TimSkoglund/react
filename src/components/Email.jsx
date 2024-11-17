import { useState } from 'react';
import EmailBell from '../assets/images/email-bell.svg'
import {emailPattern} from '../utils/patterns';

const Email = () => {
  const [subscribe, setSubscribe] = useState('');

  const handleChange = (event) => {
    setSubscribe(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailPattern.test(subscribe)) {
      alert('Please enter a valid email address');
      return;
    }

    alert('Thank you for subscribing!');
  }
  return (
    <section id="emailsection">
      <div className="container">
        <div className="img-bell-group">
          <img className="img-bell" src={EmailBell} alt=""/>
          <div className="text-email">
            <h3>
              Subscribe to our newsletter<span className="email-text-desctop">to stay informed about latest updates</span>
            </h3>
          </div>
        </div>

        <form className="input-group" onSubmit={handleSubmit}>
          <div>
            <input className="form-input email"type="email"placeholder="Your Email"value={subscribe}onChange={handleChange}/>
          </div>
          <div>
            <button type="submit" className="btn-email">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Email;
