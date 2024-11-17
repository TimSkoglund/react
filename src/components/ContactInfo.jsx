import MailIcon from '../assets/images/mail-icon.svg'
import ArrowArrow from '../assets/images/arrowarrow.svg'
import AddGroup from '../assets/images/add-group.svg'

function ContactInfo() {
  return (
    <div>
      <div className="headline">
          <h2>Contact Us</h2>
      </div>
      <div className="contact-content">
          {/* <!-- Email  --> */}
          <div className="EmailBox">
              <div className="mail-img">
                  <img src={MailIcon} alt="Mail Icon" />
              </div>
              <div>
                  <h4>Email Us</h4>
                  <p>Please feel free to drop us a line. We will<br /> respond as soon as possible.</p> 
                  <div className="message-container">
                      <a href="#">Leave a message</a>
                      <img className="arrow" src={ArrowArrow} alt="Arrow Icon" />
                  </div>
              </div>
          </div>

        {/* <!-- Careers --> */}
          <div className="EmailBox">
                <div className="mail-img">
                    <img src={AddGroup} alt="Career Icon" />
                </div>
                <div>
                    <h4>Careers</h4>
                    <p>Sit ac ipsum leo lorem magna nunc mattis<br /> maecenas non vestibulum.</p> 
                    <div className="message-container">
                        <a href="#">Send an application</a>
                        <img className="arrow" src={ArrowArrow} alt="Arrow Icon" />
                    </div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default ContactInfo