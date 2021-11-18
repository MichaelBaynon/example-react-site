import "../App.css";
import PineAppleImage from "../images/pineapple.jpg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function HomeContent() {
  return (
    <div className="homeContent">
      <h1>Build you pizza with us.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut.
      
      
      </p>
      
      
      <Link className='getStarted' to="/buildpizza">Get Started</Link>



      <div className="cardlist">
        <div className="card">
          <img width="300" src={PineAppleImage}></img>
          <h2>Pineapple Pizza</h2>
          <p>Pineapple on Pizza everyones favorite</p>
          <a href="#">Customize</a>
        </div>

        <div className="card">
          <img width="300" src={PineAppleImage}></img>
          <h2>Pineapple Pizza</h2>
          <p>Pineapple on Pizza everyones favorite</p>
          <a href="#">Customize</a>
        </div>

        <div className="card">
          <img width="300" src={PineAppleImage}></img>
          <h2>Pineapple Pizza</h2>
          <p>Pineapple on Pizza everyones favorite</p>
          <a href="#">Customize</a>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
