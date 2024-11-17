import '../../assets/css/main.css'
import '../../assets/css/appfeatures.css'
import '../../assets/css/button.css'
import '../../assets/css/clients.css' 
import '../../assets/css/contact-js.css'
import '../../assets/css/contact.css'
import '../../assets/css/email.css'
import '../../assets/css/featuresmoney.css'
import '../../assets/css/hero.css'
import '../../assets/css/popup.css'
import Heroe from '../../components/Heroe'
import Brands from '../../components/Brands'
import MobileSliders from '../../components/MobileSliders'
import FeatureMoney from '../../components/FeatureMoney'
import Clients from '../../components/Clients'
import Contact from '../../components/Contact'
import Email from '../../components/Email'
import AppFeatures from '../../components/AppFeatures'

function Main() {
  return (
    <main>
      <Heroe />
      <Brands />
      <AppFeatures />
      <MobileSliders />
      <FeatureMoney />
      <Clients />
      <Contact />
      <Email />
  </main>
  )
}

export default Main