import Checkcircle from '../assets/images/check-circle.svg'
import FeaturesBild2 from '../assets/images/features-bild2.svg'
import FeaturesBild1 from '../assets/images/features-bild1.svg'
import app1 from '../assets/images/app-1.svg'
import app3 from '../assets/images/app-3.svg'



const FeatureMoney = () => {
  return (
    <section id="featuresmoney">
        <div className="container">
            <div className="money">
                <div className="money-info">
                    <h2 className="h4">Make your money transfer simple and clear</h2>
                        <div className="cirkel-container">
                            <img src={Checkcircle} alt=""/>
                            <p className="text-s">Banking transactions are free for you</p>
                        </div>
        
                    <div className="cirkel-container">
                        <img src={Checkcircle} alt=""/>
                        <p className="text-s">No monthly cash commission</p>
                    </div>
            
                    <div className="cirkel-container">
                        <img src={Checkcircle} alt=""/>
                        <p className="text-s">Manage payments and transactions online</p>
                    </div>

                    <div className="btn-money">
                        <button className="btn-primary">Learn more</button>
                    </div>
                </div>
        
                
                <div className="img-money">
                    <img src={FeaturesBild2} alt=""/>
                </div>
            </div>
                <div className="money">
                    <div className="img-money">
                        <img src={FeaturesBild1} alt=""/>
                    </div>
                
                    <div className="money-info">
                        <h2 className="h4">Receive payment from international bank details</h2>
                            <div className="container-money-info">
                            <div className="icon-container2">
                                <img src={app1} alt=""/>
                                <p className="text-s">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                                <button className="btn-primary">Learn more</button>
                            </div>
                        <div className="icon-container2">
                            <img src={app3} alt=""/>
                            <p className="text-s">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>                  
                        </div>
                    </div>
                </div>
            </div>
        </div>      
  </section>
  )
}

export default FeatureMoney