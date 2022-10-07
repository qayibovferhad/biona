import React from 'react'
import Aboutsecondcard from './Aboutsecondcard'

const Aboutsecond = () => {
  return (
    <>
    <section className="aboutsecond">
    <div className="container">
        <div className="aboutsecond-text">
            <div className="circle"></div>
            <h1>Our responsibility</h1>
            <p>As a collective, Biona community works together to advance the science of food and one another through the following shared values:</p>

        </div>
        </div>
            <div className="aboutsecond-cards">
              <div className="container">
              <div className="row">
                <Aboutsecondcard img={"fa-solid fa-power-off"} title={"Community"} para={"We are dedicated to supporting the changing needs."} />
                <Aboutsecondcard img={"fa-sharp fa-solid fa-spinner"} title={"Integrity"} para={"We are dedicated to supporting the changing needs."} />
                <Aboutsecondcard img={"fa-sharp fa-solid fa-apple-whole"} title={"Progress"} para={"We are dedicated to supporting the changing needs."} />
                <Aboutsecondcard img={"fa-sharp fa-solid fa-droplet"} title={"Passion"} para={"We are dedicated to supporting the changing needs."} />
                <Aboutsecondcard img={"fa-sharp fa-solid fa-bottle-water"} title={"Our responsibility"} para={"We are dedicated to supporting the changing needs."} />
                <Aboutsecondcard img={"fa-sharp fa-solid fa-ruler"} title={"Integrity"} para={"We are dedicated to supporting the changing needs."} />
                </div>
                </div>
                </div>
        
        
    </section>
    </>
  )
}

export default Aboutsecond