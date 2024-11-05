import React from 'react'
import MobileSlider1 from '../assets/images/mobile-slider-1.svg'
import MobileSlider2 from '../assets/images/mobile-slider-2.svg'
import MobileSlider3 from '../assets/images/mobile-slider-3.svg'
import DesktopSlider1 from '../assets/images/desktop-slider-1.svg'
import DesktopSlider2 from '../assets/images/desktop-slider-2.svg'
import DesktopSlider3 from '../assets/images/desktop-slider-3.svg'

const MobileSliders = () => {
  return (
    <section id="slider">
          <div class="container">
            <div class="headline">
              <h2>How Does It Work?</h2>
        <section id="mobileslider">
            <div id="container">
                <div id="mobileslider1" className="slider-box">
                    <img src={MobileSlider1} alt=""/>
                </div>
                <div id="mobileslider2" className="slider-box">
                    <img src={MobileSlider2} alt=""/>
                </div>
                <div id="mobileslider3" className="slider-box">
                    <img src={MobileSlider3} alt=""/>
                </div>
                <div id="mobileslider4" className="slider-box">
                    <img src={DesktopSlider1} alt=""/>
                </div>
                <div id="mobileslider5" className="slider-box">
                    <img src={DesktopSlider2} alt=""/>
                </div>
                <div id="mobileslider6" className="slider-box">
                    <img src={DesktopSlider3} alt=""/>
                </div>
            </div>
        </section>
        </div>
        <div class="content">
            <h3>Step 3. Transfers to people from your contact list</h3>
            <p>
            Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
            Pellentesque volutpat ligula est. Mattis fermentum, at nec
            lacus.
            </p>
        </div>
        </div>
    </section>
  )
}

export default MobileSliders