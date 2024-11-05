import React from 'react'
import EmailBell from '../assets/images/email-bell.svg'

const Email = () => {
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
        <div className="input-group">
            <input className="form-input email"type="Email"placeholder="Your Email"/>
            <button className="btn-email">Subscribe</button>
        </div>
    </div>
</section>
  )
}

export default Email