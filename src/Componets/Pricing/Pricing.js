import { Component } from "react"; 
import "./Pricing.css";

class Pricing extends Component{
  render(){
    return(
      <div className="pricing text-center">
        <div className="container">
          <h2 className="title">Pricing Plans</h2>
          <p className="desc">Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
          <div className="row">
            <div className="col-md-4">
              <div className="pricing-box">
                <h3 className="title">Starter</h3>
                <div className="price-header">
                  <h3 className="price"> <sup> $ </sup> 14.50</h3>
                  <span className="month">monthly</span>
                </div>
                <ul className="list list-unstyled">
                  <li>60 GB space</li>
                  <li>600 GB transfer</li>
                  <li>Pro Design Panel</li>
                  <li><del>15-minute support</del></li>
                  <li><del>Unlimited Emails</del></li>
                  <li><del>24/7 Security</del></li>
                </ul>
                <button className="btn">PURCHASE NOW</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-box">
                <h3 className="title">Premium</h3>
                <div className="price-header active">
                  <h3 className="price"> <sup> $ </sup> 21.50</h3>
                  <span className="month">monthly</span>
                </div>
                <ul className="list list-unstyled">
                  <li>120 GB space</li>
                  <li>1200 GB transfer</li>
                  <li>Pro Design Panel</li>
                  <li>15-minute support</li>
                  <li><del>Unlimited Emails</del></li>
                  <li><del>24/7 Security</del></li>
                </ul>
                <button className="btn">PURCHASE NOW</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-box">
                <h3 className="title">Advanced</h3>
                <div className="price-header">
                  <h3 className="price"> <sup> $ </sup> 42.00</h3>
                  <span className="month">monthly</span>
                </div>
                <ul className="list list-unstyled">
                  <li>60 GB space</li>
                  <li>600 GB transfer</li>
                  <li>Pro Design Panel</li>
                  <li>15-minute support</li>
                  <li>Unlimited Emails</li>
                  <li>24/7 Security</li>
                </ul>
                <button className="btn">PURCHASE NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Pricing;