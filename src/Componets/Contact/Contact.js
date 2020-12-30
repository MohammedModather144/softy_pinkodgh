import { Component, Fragment } from "react";
import Footer from "../Footer/Footer";
import  "./Contact.css";

class Contact extends Component{
  render(){
    return(
      <Fragment>
        <div className="contact text-center">
          <div className="container">
            <h2 className="title">Talk To Us</h2>
            <p className="desc">Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper.</p>
            <div className="row">
              <div className="col-md-3">
                <div className="contact-left">
                  <h3 className="title">Keep in touch</h3>
                  <p className="desc">110-220 Quisque diam odio, maximus ac consectetur eu, 10260 auctor non lorem</p>
                  <p className="desc">You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you.</p>
                </div>
              </div>
              <div className="col-md-9">
                <div className="contact-right">
                  <form action="">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Full Name"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="email" placeholder="E-mail Adress"/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <button className="btn" type="submit">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}
export default Contact;