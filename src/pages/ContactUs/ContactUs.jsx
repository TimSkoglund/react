

import LittleHouse from '../../assets/images/litethus.svg'
import DoubleArrow from '../../assets/images/doubleArrow.svg'

import MapGoogle from '../../assets/images/mapgoogle.svg'
import MapPoint from '../../assets/images/mpoint.svg'
import MapPhone from '../../assets/images/mphone.svg'
import MapWatch from '../../assets/images/mwatch.svg'
import Facebook from '../../assets/images/mfb.svg'
import Twitter from '../../assets/images/mtvi.svg'
import Instagram from '../../assets/images/minst.svg'
import Youtube from '../../assets/images/myou.svg'
import ContactForm from '../../components/ContactForm'
import ContactInfo from '../../components/ContactInfo'
import '../../assets/css/contact-js.css'
import '../../assets/css/map.css'

const ContactUs = () => {
  return (
    <>
      <section id="contactus">
        <div className="container">
            {/* <!-- Links --> */}
            <div className="Links">
                <img className="litethus" src={LittleHouse} alt="" />
                <a href="index.html">Homepage</a>
                <img className="pilar" src={DoubleArrow} alt="Arrow Icon" />
                <a href="#">Contact</a>
            </div>
            <div className='container-box' >
                <ContactInfo />
                <ContactForm />
            </div>
            </div>
 

    </section>
    <section id="map">
        <div className="container">
                <div className="map-container">
                    <div className="image-container">
                        <img className="responsive-image" src={MapGoogle} alt="" />
                    </div>
                    <div className="media-box">
                    <div className="media-center1">
                        <h4>Medical Center 1</h4>
                        <div className="madia-info">
                            <img src={MapPoint} alt="" />
                            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                        </div>
                        <div className="madia-info">
                            <img src={MapPhone} alt="" />
                            <p>(406) 555-0120</p>
                        </div>
                        <div className="madia-info">
                            <img src={MapWatch} alt=""  />
                            <p> <strong> Mon – Fri: </strong> 9:00 am – 22:00 am<br />
                                <strong> Sat – Sun: </strong> 9:00 am – 20:00 am</p>
                        </div>
                    </div>
                    <div className="media-center2">
                        <h4>Medical Center 2</h4>
                        <div className="madia-info">
                            <img src="../../assets/images/mpoint.svg" alt="" />
                            <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
                        </div>
                        <div className="madia-info">
                            <img src={MapPhone} alt="" />
                            <p>(406) 544-0123</p>
                        </div>
                        <div className="madia-info">
                            <img src={MapWatch} alt="" />
                            <p> <strong> Mon – Fri: </strong> 9:00 am – 22:00 am<br />
                                <strong> Sat – Sun: </strong> 9:00 am – 20:00 am</p>
                        </div>
                    </div>
                    <div className="msocial">
                        <img className="micon" src={Facebook} alt="" />
                        <img className="micon" src={Twitter} alt="" />
                        <img className="micon" src={Instagram} alt="" />
                        <img className="micon" src={Youtube} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactUs