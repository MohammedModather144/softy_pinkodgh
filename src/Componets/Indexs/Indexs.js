import { Component } from "react";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
// import HomeSection from "../HomeSection/HomeSection";
import Pricing from "../Pricing/Pricing";
import Statistic from "../Statistic/Statistic";
import WhatSay from "../WhatSay/WhatSay";
import Work from "../Work/Work";

class Indexs extends Component{
  render(){
    return(
      <div>
        {/* <HomeSection/> */}
        <Features/>
        <About/>
        <Work/>
        <WhatSay/>
        <Pricing/>
        <Statistic/>
        <Blog/>
        <Footer/>
      </div>
    )
  }
}
export default Indexs;