import { Component, Fragment } from "react";
import "./About.css";

class About extends Component{
  render(){
    return(
      <Fragment>
        <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="content-left">
                <img src="./images/left-image.png" alt="About Company"/>
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="content-right">
                <h2 className="title">Let’s discuss about you project</h2>
                <p className="desc">Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="content-left">
              <h2 className="title">We can help you to grow your business</h2>
                <p className="desc">Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.</p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="content-right">
              <img src="./images/right-image.png" alt="About Company"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    )
  }
}
export default About;