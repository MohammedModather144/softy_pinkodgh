import { Component } from "react";
import "./Work.css";
import WorkBacground from "../../images/work-process-bg.png";
import axios from "axios";


class Work extends Component{
  state={
    works:[]
  }
  componentDidMount(){
    axios.get("js/data.json").then((res)=>{
      this.setState({
        works:res.data.works
      })
    })
  }
  render(){
    const {works} =this.state
    const workList=works.map((workItem)=>{
      return(
          <div className="col-6 col-md-2" key={workItem.id}>
            <div className="work-box">
              <div className="img">
                <img src={workItem.image} alt="Images Work Box"/>
              </div>
              <h3 className="title">{workItem.title}</h3>
              <p className="desc">{workItem.desc}</p>
            </div>
          </div>
      )
    })
    return(
      <div className="work text-center" style={{backgroundImage:'url('+ WorkBacground +')'}}>
        <h2 className="title">Work Process</h2>
        <p className="desc">Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
        <div className="container">
          <div className="row">
            {workList}
          </div>
        </div>
      </div>
    )
  }
}
export default Work;