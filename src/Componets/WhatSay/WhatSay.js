import axios from "axios";
import { Component } from "react";
// import IconSay from "../../images/testimonial-icon.png";
import   "./WhatSay.css";

class WhatSay extends Component{
  state={
    WhatSays:[]
  }
  componentDidMount(){
    axios.get("js/data.json").then((res)=>{
      this.setState({
        WhatSays:res.data.WhatSays
      })
    })
  }
  render(){
    const {WhatSays} =this.state
    const listWhatSays=WhatSays.map((itemSay)=>{
      return(
          <div className="col-md-4" key={itemSay.id}>
            <div className="say-box">
              <div className="img">
                <img src={itemSay.image} alt="Images What Say"/>
              </div>
              <p className="desc">{itemSay.desc}</p>
              <div className="row">
                <div className="col-3">
                  <div className="user-info">
                    <div className="user-img">
                      <img className="rounded-circle" src={itemSay.image_user} alt="Images Person"/>
                    </div>
                  </div>
                </div>
                <div className="col-9">
                  <div className="user-info">
                    <h3 className="user-name">{itemSay.user_name}</h3>
                    <h4 className="job">{itemSay.job}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    })
    return(
      <div className="what-say  text-center">
        <div className="container">
          <h2 className="title ">What do they say?</h2>
          <p className="desc">Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
          <div className="row">
                {listWhatSays}
            </div>
          </div>
        </div>
    )
  }
}
export default WhatSay;
