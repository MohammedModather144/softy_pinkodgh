import axios from "axios";
import { Component } from "react";
import  "./Features.css";

class Features extends Component{
  state={
    features:[]
  }  
  componentDidMount(){
    axios.get("js/data.json").then((res)=>{
      this.setState({
        features:res.data.features
      })
    })
  }
  render(){
    const {features} =this.state
    const featuresList=features.map((featuresItem)=>{
       return(
          <div className="col-md-4 text-center"  key={featuresItem.id}>
          <div className="box-features">
              <div className="img rounded-circle">
                <img src={featuresItem.image} alt="Images Features"/>
              </div>
            <h3 className="title">{featuresItem.title}</h3>
            <p className="desc">{featuresItem.desc}</p>
          </div>
        </div>
       )
    })
    return(
      <div className="features">
        <div className="container">
          <div className="row">
            {featuresList}
          </div>
        </div>
      </div>
    )
  }
}
export default Features;