import React from 'react'

const Contact = () => {
  return (
    <div>
         <div className="contact-web">
        <div className="container">
            <div className="contact-text">
                <div className="circle"></div>
                <h3>Contact Us</h3>
            </div>
            <div className="row">
               
                <div className="col-lg-6 col-12">
                    <div className="contact-form">
                    <form className='contactform'>
                        <label for="text">Name</label>
                        <input id='text' type="text" placeholder='Your first name' />
                        <label for ="mail">E-mail</label>
                        <input placeholder='Your email'  id='mail' type="email" />
                        <label for="phone">Phone</label>
                        <input id='phone' placeholder='Your phone' type="tel" />
                        <label for="country">Country/Region</label>
                      <input placeholder='Type your message' type="text" />
                    <button type='submit'>Submit Now</button>
                        
                    </form>

                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className='contact-info'>
                        <div className="adress-info">
                            <h1>Address:</h1>
                            <h3>2861 Fairview St Tallahassee, </h3>
                            <h3>New Mexico 86357 United States</h3> 
                        </div>
                        <div className="adress-info">
                            <h1>Phone:</h1>
                            <h3>+1 (406) 555-0120 <br />+1 (406) 555-0120</h3>
                        </div>
                        <div className="adress-info">
                            <h1>Email Address:</h1>
                            <h3>email@example.com</h3>
                        </div>
                        <div className="adress-info">
                            <h1>Working hours:</h1>
                            <h3>Mon – Fri: 7am – 10pm</h3>
                            <h3>​​Sat – Sun: 8am – 8pm</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact