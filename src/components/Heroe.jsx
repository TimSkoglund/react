import AppStore from '../assets/images/appstore.svg'
import GooglePlay from '../assets/images/googleplay.svg'
import MyBudget from '../assets/images/iPhone mybudget.svg'
import YourCards from '../assets/images/iphone-yourcards.svg'

const Heroe = () => {
  return (
    <section id="hero">
        <div className="container">
        <div className="headline">
            <h1>Manage All Your Money in One App</h1>
        </div>
        <div className="content">
            <p>
            We offer you a new generation of the mobile banking. Save, spend
            & manage money in your pocket.
            </p>
            <div className="buttons">
            <a className="btn-download-app" href="#"><img src={AppStore} alt="appstore"/></a>
            <a className="btn-download-app" href="#"><img src={GooglePlay} alt="googleplay"/></a>
            </div>

            <a href="#" className="discover-more">
            <span className="btn-circle">
                <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span>Discover more</span>
            </a>
        </div>

        <div className="images">
            <img className="img-back" src={MyBudget}alt="iphone my budget"/>
            <img className="img-front" src={YourCards}alt="iphone your cards"/>
      </div>
    </div>
  </section>
  )
}

export default Heroe