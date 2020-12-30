import "./Statistic.css";
import statisticBackground from "../../images/fun-facts-bg.png";

const Statistic=()=>{
  return(
    <div className="statistic align-items-center" style={{backgroundImage:'url('+ statisticBackground+')'}}>
      <div className="container">
        <div className="row ">
          <div className="col-6 col-md-3">
            <div className="statistic-box">
              <h2 className="h3 title">126</h2>
              <span className="desc">Projects</span>
            </div>
          </div>
          <div className="col-6  col-md-3">
            <div className="statistic-box bg">
              <h2 className="h3 title">63</h2>
              <span className="desc">Happy Clients</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="statistic-box bg bgsm">
              <h2 className="h3 title">18</h2>
              <span className="desc">Awards Wins</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="statistic-box bg">
              <h2 className="h3 title">27</h2>
              <span className="desc">Countries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Statistic;