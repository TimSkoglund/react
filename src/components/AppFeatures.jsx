import React from 'react'
import IphoneAppBild from '../assets/images/iphone-app-bild.svg'
import App1 from '../assets/images/app-1.svg'
import App2 from '../assets/images/app-2.svg'
import App3 from '../assets/images/app-3.svg'
import App4 from '../assets/images/app-4.svg'
import App5 from '../assets/images/app-5.svg'
import App6 from '../assets/images/app6.svg'


const AppFeatures = () => {
  return (
    <section id="App-features" className="features">
          <div className="container">
            <div className="iphone">
              <img src={IphoneAppBild} alt=""/>
            </div>
            <div className="text space-y-1">
              <h2 className="h1">App Features</h2>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus</p>

              <div className="features-grid">

                <div className="feature-card">
                  <div className="icon-container">
                  <img src={App1} alt=""/>
                  </div>
                  <div className="space-y-1">
                    <h3 className="h5">Easy Payments</h3>
                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                  </div>
                </div>
                
                <div className="feature-card">
                  <div className="icon-container">
                  <img src={App2} alt=""/>
                  </div>
                  <div className="space-y-1">
                    <h3 className="h5">Cost Statistics</h3>
                    <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                  </div>
                </div>
                
                <div className="feature-card">
                  <div className="icon-container">
                  <img src={App3} alt=""/>
                  </div>
                  <div className="space-y-1">
                    <h3 className="h5">Regular Cashback</h3>
                    <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend</p>
                  </div>
                </div>
                
                <div className="feature-card">
                  <div className="icon-container">
                  <img src={App4} alt=""/>
                  </div>
                  <div className="space-y-1">
                    <h3 className="h5">Data Security</h3>
                    <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                  </div>
                </div>
                
                <div className="feature-card">
                  <div className="icon-container">
                  <img src={App5} alt=""/>
                  </div>
                  <div className="space-y-1">
                    <h3 className="h5">Support 24/7</h3>
                    <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                  </div>
                </div>
                
                <div className="feature-card">
                  <div className="icon-container">
                    <img src={App6} alt=""/>
                  </div>
                  <div className="space-y-1">
                    <h3 className="h5">Top Standards</h3>
                    <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
    </section>
  )
}

export default AppFeatures