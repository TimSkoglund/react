import QuotesIcon from '../assets/images/quotes-icon.svg'
import RatingStars from '../assets/images/rating-stars.svg'
import FannieIcon from '../assets/images/fannie-icon.svg'
import AlbertIcon from '../assets/images/albert-icon.svg'
import { Link } from 'react-router-dom';

const Clients = () => {
  return (
    <section id="clients">
        <div className="container">
            <h2 className="client-h2">clients are Loving Our App</h2>
            <div className="quotes-box">
                <img className="quotes-icon" src={QuotesIcon} alt=""/>
                <img className="rating" src={RatingStars} alt=""/>
                <p>
                Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
                sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo
                aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo
                turpis sit amet.
                </p>
                <img className="icon" src={FannieIcon} alt=""/>
                <p className="client-name">Fannie Summers</p>
                <p className="client-class">Designer</p>
            </div>

            <div className="quotes-box">
                <img className="quotes-icon" src={QuotesIcon} alt=""/>
                <img src={RatingStars} alt=""/>
                <p>
                Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin
                amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare
                dictumst sit amet. Dictum pretium dolor tincidunt egestas eget
                nunc.
                </p>
                <img className="icon" src={AlbertIcon} alt=""/>
                <p className="client-name">Albert Flores</p>
                <p className="client-class">Developer</p>
            </div>
        </div>
    </section>
  )
}

export default Clients