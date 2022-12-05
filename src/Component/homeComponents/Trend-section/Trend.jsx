import React from "react";
import MensCollection from "./MensCollection";
import Latest from "./Latest";
import WomenCollection from "./WomenCollection";

const Trend = () => {
  return (
    <section className="trend spad">
      <div className="container">
        <div className="row">
          <Latest title=" Latest Item " />
          <MensCollection title="men's Colection" />
          <WomenCollection title="women Collection" />
        </div>
      </div>
    </section>
  );
};

export default Trend;
