import {  Fragment, useState } from "react";
import {  NavLink } from "react-router-dom";
import "./NavBar.css";
import "./media.css";
import ImageBacground from "../../images/banner-bg.png";
const NavBar=()=>{
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse  = () => setIsNavCollapsed(!isNavCollapsed);
    return(
     <Fragment>
      <div className="all-header"  style={{backgroundImage: 'url(' + ImageBacground + ')'}}>
          <div className="menu-nav">
            <nav className="menu">
              <label className="menu__toggle-label" onClick={handleNavCollapse}>
                <svg style={{position: 'fixed'}} preserveAspectRatio='xMinYMin' viewBox='0 0 24 24'>
                  <path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />
                </svg>
                <svg preserveAspectRatio='xMinYMin' viewBox='0 0 24 24'>
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </label>
              <ol className='menu__content' className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
                <li className="menu-item"><NavLink to="/" exact><i className="fa fa-home fa-fw"></i> Home</NavLink></li>
                <li className="menu-item"><NavLink to="/j" exact><i className="fa fa-info-circle fa-fw"></i> About</NavLink></li>
                <li className="menu-item"><NavLink to="/j" exact><i className="fa fa-diamond fa-fw"></i> Work Process</NavLink></li>
                <li className="menu-item"><NavLink to="/j" exact><i className="fa fa-life-saver fa-fw"></i> Testimonials</NavLink></li>
                <li className="menu-item"><NavLink to="/i" exact><i className="fa fa-cloud fa-fw"></i> Pricing Tables</NavLink></li>
                <li className="menu-item"><NavLink to="/j" exact><i className="fa fa-newspaper-o fa-fw"></i> Blog Entries</NavLink></li>
                <li className="menu-item"><NavLink to="/conatct" exact><i className="fa fa-asterisk fa-fw"></i> Contact Us</NavLink></li>
              </ol>
            </nav>
            <div className="clearfix"></div>
          </div>
          <div className="container">
          <div className="nav-header">
            <div className="row align-items-start">
              <div className="col-md-3">
                  <div className="logo">
                    <img src="/images/logo.png" alt="imagelogo"/>
                  </div>
              </div>
              <div className="col-md-9">
                <ul className="linkes">
                  <li><NavLink to="/" exact>Home</NavLink></li>
                  <li><NavLink to="/h">About</NavLink></li>
                  <li><NavLink to="/j">Work Process</NavLink></li>
                  <li><NavLink to="/g">Testimonials</NavLink></li>
                  <li><NavLink to="/i">Pricing Tables</NavLink></li>
                  <li><NavLink to="/j">Blog Entries</NavLink></li>
                  <li><NavLink to="/conatct">Contact Us</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main-section text-center">
          <h2 className="title">We provide the best <strong>strategy</strong> to grow up your <strong>business</strong></h2>
          <p className="desc">Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo for your company at absolutely free of charge</p>
          <button className="btn">DISCOVER MORE</button>
        </div>
      </div>
     </Fragment>

      
    )
}
export default NavBar;