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

function App() {


  return (
    <>
      <div class="wrapper">
        <Header />
        <main>
    <Heroe></Heroe>
    <Brands></Brands>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
