import "./Footer.css";
import  "font-awesome/css/font-awesome.min.css";
const Footer =()=>{
  return(
    <div className="footer text-center">
      <div className="container">
        <ul className="social-media-icon list-unstyled">
          <li><i className="fa fa-facebook fa-fw"></i></li>
          <li><i className="fa fa-twitter fa-fw "></i></li>
          <li><i className="fa fa-linkedin fa-fw"></i></li>
          <li><i className="fa fa-rss fa-fw"></i></li>
          <li><i className="fa fa-dribbble fa-fw"></i></li>
        </ul>
        <hr/>
        <p className="copy-right">COPYRIGHT © 2020 SOFTY PINKO COMPANY - DESIGN: Mohammed</p>
      </div>
    </div>
  )
}
export default Footer;