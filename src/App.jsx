import './assets/css/main.css'
import './assets/css/appfeatures.css'
import './assets/css/button.css'
import './assets/css/clients.css' 
import './assets/css/contact-js.css'
import './assets/css/contact.css'
import './assets/css/email.css'
import './assets/css/featuresmoney.css'
import './assets/css/hero.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Heroe from './components/Heroe'
import Brands from './components/Brands'
import AppFeatures from './components/AppFeatures'
import MobileSliders from './components/MobileSliders'
import FeatureMoney from './components/FeatureMoney'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Email from './components/Email'


function App() {


  return (
    <>
      <div class="wrapper">
        <Header />
        <main>
          <Heroe></Heroe>
          <Brands></Brands>
          <AppFeatures></AppFeatures>
          <MobileSliders></MobileSliders>
          <FeatureMoney></FeatureMoney>
          <Clients></Clients>
          <Contact></Contact>
          <Email></Email>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
