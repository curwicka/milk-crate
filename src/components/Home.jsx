import React from "react";
import Carousel from "./Carousel";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <h1 class="font-weight-light">Home</h1>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Home;
