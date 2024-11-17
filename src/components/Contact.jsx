import { useEffect, useState } from 'react' // Importera useState och useEffect
import ContactTelefonIcon from '../assets/images/contact-telefon-icon.svg'
import ContactTextIcon from '../assets/images/contact-text-icon.svg'
import AccordionItem from './AccordionItem'

const Contact = () => {
  const [accordions, setAccordions] = useState([]) // Lägg till useState för accordions

  // Hämta FAQ-data från API
  const fetchfaq = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
    const data = await res.json() // Ta bort extra '=' här
    setAccordions(data)
  }

  // Använd useEffect för att anropa fetchfaq när komponenten har renderats
  useEffect(() => {
    fetchfaq()
  }, []) // Tom array gör att den körs en gång när komponenten mountas

  return (
    <section className="container">
      <div id="contact">
        <h3>Any questions? Check out the FAQs</h3>
        <p className="faq-still">
          Still have unanswered questions and need to get in touch?
        </p>
        <div className="content-box-wrapper">
          <div className="contact-box">
            <img src={ContactTelefonIcon} alt="Telefon icon" />
            <p>Still have questions?</p>
            <a className="contact-us" href="Contact us">Contact us<span><i className="fa-solid fa-arrow-right"></i></span></a>
          </div>
          <div className="contact-box">
            <img src={ContactTextIcon} alt="Text icon" />
            <p>Don&apos;t like phone calls?</p>
            <a className="contact-us" href="Contact us">Contact us<span><i className="fa-solid fa-arrow-right"></i></span></a>
          </div>
        </div>

        <button className="btn-contact">Contact us now</button>

        {/* Renderar alla FAQ med AccordionItem-komponenter */}
        {accordions.map(item => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Contact
