import React from "react";
import Products from "./Products";

function Home(props) {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img src="/assets/yen2.jpg" className="card-img" alt="background" style={{ objectFit: "cover", height: "650px" }}/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
