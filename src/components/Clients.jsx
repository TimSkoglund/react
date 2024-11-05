import React from 'react'
import QuotesIcon from '../assets/images/quotes-icon.svg'
import RatingStars from '../assets/images/rating-stars.svg'
import FannieIcon from '../assets/images/fannie-icon.svg'
import AlbertIcon from '../assets/images/albert-icon.svg'

const Clients = () => {
  return (
    <section id="clients">
        <div class="container">
            <h2 class="client-h2">clients are Loving Our App</h2>
            <div class="quotes-box">
                <img class="quotes-icon" src={QuotesIcon} alt=""/>
                <img class="rating" src={RatingStars} alt=""/>
                <p>
                Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
                sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo
                aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo
                turpis sit amet.
                </p>
                <img class="icon" src={FannieIcon} alt=""/>
                <p class="client-name">Fannie Summers</p>
                <p class="client-class">Designer</p>
            </div>

            <div class="quotes-box">
                <img class="quotes-icon" src={QuotesIcon} alt=""/>
                <img src={RatingStars} alt=""/>
                <p>
                Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin
                amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare
                dictumst sit amet. Dictum pretium dolor tincidunt egestas eget
                nunc.
                </p>
                <img class="icon" src={AlbertIcon} alt=""/>
                <p class="client-name">Albert Flores</p>
                <p class="client-class">Developer</p>
            </div>
        </div>
    </section>
  )
}

export default Clients