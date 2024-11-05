import React from 'react'
import ContactTelefonIcon from '../assets/images/contact-telefon-icon.svg'
import ContactTextIcon from '../assets/images/contact-text-icon.svg'


const Contact = () => {
  return (
    <section className="container">
        <div id="contact">
            <h3>Any questions? Check out the FAQs</h3>
            <p className="faq-still">
              Still have unanswered questions and need to get in touch?
            </p>
            <div className="content-box-wrapper">
              <div className="contact-box">
                <img src={ContactTelefonIcon} alt="" />
                <p>Still have questions?</p>
                <a className="contact-us" href="Contact us">Contact us<span><i className="fa-solid fa-arrow-right"></i></span></a>
              </div>
              <div className="contact-box">
                <img src={ContactTextIcon} alt="" />
                <p>Don't like phone calls?</p>
                <a className="contact-us" href="Contact us">Contact us<span><i className="fa-solid fa-arrow-right"></i></span></a>
              </div>
            </div>
            <div className="details-container">
                <details>
                <summary>
                  Is any of my personal information stored in the App?
                  <div className="summary-icon">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </summary>
                    <p>
                    Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                    Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
                    adipiscing gravida et consequat lobortis arcu velit. Nibh
                    pharetra fermentum duis accumsan lectus non. Massa cursus
                    molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus
                    gravida adipiscing euismod montes, duis egestas. Vehicula eu
                    etiam quam tristique tincidunt suspendisse ut consequat.
                    <br />
                    <br />Ornare senectus fusce dignissim ut. Integer consequat in
                    eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem
                    suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam
                    nunc purus lacus, elit leo elit facilisi. Dignissim amet
                    adipiscing massa integer.
                    </p>
                </details>
                <details>
                <summary>
                    What formats can I download my transaction history in?
                <div className="summary-icon">
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                </summary>
                    <p className="summary-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe culpa minus cum nulla, ab quia assumenda exercitationem, molestias repellat officiis voluptatibus recusandae dolorum iure illo error laborum? Praesentium officiis temporibus, voluptas totam perspiciatis autem. Delectus harum commodi iste nemo rem!
                    <br />
                    <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet atque voluptas ut fuga. Aut, repudiandae? Blanditiis reiciendis eaque architecto maiores, commodi assumenda laborum, tenetur optio voluptate error perspiciatis expedita?
                    </p>
                </details>
                <details>
                <summary>
                  Can I schedule future transfers?
                <div className="summary-icon">
                    <i className="fa-solid fa-chevron-down"></i>
                </div></summary>
                    <p className="summary-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consectetur necessitatibus labore iure incidunt, facere laboriosam dignissimos suscipit sunt nemo natus veritatis temporibus aspernatur dolor voluptate corporis cum ullam iste? Enim repudiandae reiciendis sunt hic cupiditate at quos tempore nisi!
                    <br />
                    <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, incidunt accusamus error modi voluptatibus iure autem ducimus, nobis tempora quam sit pariatur odio hic, voluptatem sapiente eius aspernatur. Labore, maiores?
                    </p>
                </details>
                <details>
                <summary>
                    When can I sue Banking App services?
                    <div className="summary-icon">
                    <i className="fa-solid fa-chevron-down"></i>
                    </div></summary>
                    <p className="summary-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consectetur necessitatibus labore iure incidunt, facere laboriosam dignissimos suscipit sunt nemo natus veritatis temporibus aspernatur dolor voluptate corporis cum ullam iste? Enim repudiandae reiciendis sunt hic cupiditate at quos tempore nisi!
                    <br />
                    <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, incidunt accusamus error modi voluptatibus iure autem ducimus, nobis tempora quam sit pariatur odio hic, voluptatem sapiente eius aspernatur. Labore, maiores?
                    </p>
                </details>
                <details>
                <summary>
                    Can I create my own password that is easy for me to remember
                <div className="summary-icon">
                    <i className="fa-solid fa-chevron-down"></i>
                </div></summary>
                <p className="summary-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consectetur necessitatibus labore iure incidunt, facere laboriosam dignissimos suscipit sunt nemo natus veritatis temporibus aspernatur dolor voluptate corporis cum ullam iste? Enim repudiandae reiciendis sunt hic cupiditate at quos tempore nisi!
                    <br />
                    <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, incidunt accusamus error modi voluptatibus iure autem ducimus, nobis tempora quam sit pariatur odio hic, voluptatem sapiente eius aspernatur. Labore, maiores?
                </p>
                </details>
                <details>f
                <summary>What happens if I forget or lose my password    
                    <div className="summary-icon">
                    <i className="fa-solid fa-chevron-down"></i>
                    </div></summary>
              
                <p className="summary-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consectetur necessitatibus labore iure incidunt, facere laboriosam dignissimos suscipit sunt nemo natus veritatis temporibus aspernatur dolor voluptate corporis cum ullam iste? Enim repudiandae reiciendis sunt hic cupiditate at quos tempore nisi!
                    <br />
                    <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, incidunt accusamus error modi voluptatibus iure autem ducimus, nobis tempora quam sit pariatur odio hic, voluptatem sapiente eius aspernatur. Labore, maiores?
                </p>
                </details>
            </div>
            <button className="btn-contact">Contact us now</button>

        </div>
    </section>
  )
}

export default Contact