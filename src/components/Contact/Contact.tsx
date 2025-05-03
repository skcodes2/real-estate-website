import "./Contact.css"
export default function Contact() {
  return (
    <section className="contact-container bg-color">


        <div className="messaging-container">

            <div className="messaging-header">
              <p className="messaging-title title-md">Got a Question?</p>
              <div className="messaging-divider"></div>
              <p className="messaging-subtitle body-text" style={{fontSize:'24px'}}>Contact Kuldip by filling out the form</p>
            </div>

            <div className="messaging-form">

              <div className="names">
                <div className="first">
                    <label htmlFor="" className="first-name body-text">First Name (Required)</label>
                    <input type="text" className="first-name-input form-input " placeholder="Enter your first name" />
                </div>
                <div className="last">
                    <label htmlFor="" className="last-name body-text">Last Name (Required)</label>
                    <input type="text" className="last-name-input form-input " placeholder="Enter your last name" />
                 </div>   
              </div>

              <div className="phone">
                <label htmlFor="" className="phone body-text">Phone Number (Required)</label>
                <input type="text" className="phone-input form-input " placeholder="Enter your phone number" />
              </div>
                
              <div className="email">
                <label htmlFor="" className="email body-text">Email (Required)</label>
                <input type="text" className="email-input form-input " placeholder="Enter your email" />
              </div>  

              <div className="multiple-choice">
                <p className="multiple-choice-title title-sm">I'm interested In</p>
                <div className="radio-container">
                  <input type="radio" className="radio-button" id="buying" name="buying" value="Buying"></input>
                  <label htmlFor="buying" className="radio-label body-text">Buying</label><br></br>
                  <input type="radio" id="selling" className="radio-button" name="selling" value="Selling"></input>
                  <label htmlFor="selling" className="radio-label body-text">Selling</label><br></br>
                  <input type="radio" id="other" className="radio-button" name="other" value="Other"></input>
                  <label htmlFor="other" className="radio-label body-text">other</label><br></br>
                </div>
              </div>

              <div className="long-description">
                <label htmlFor="" className="descrip body-text">How can I help? (optional)</label>
                <textarea maxLength={1500} rows={4} cols={50} className="descrip-input form-input " placeholder="Enter your message here (250 words maximum)..."></textarea>
              </div>

              <div className="form-button"><button className="send-message body-text button ">Send Message</button>
              </div>
            </div>

        </div>



        <div className="contact-details-container">

        </div>
    </section>
  )
}
