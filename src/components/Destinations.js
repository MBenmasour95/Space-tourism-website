import React, { useState } from "react";

function Destinations({ destinations }) {
  const [current, setCurrent] = useState(0);
  const { name, image, description, distance, travel } = destinations[current];

  return (
    <section className="destinations-wrapper">
      <h2 className="sub-heading-1">
        <span>01</span> pick your destination
      </h2>
      <div className="row">
        <div className="col-1">
          <div className="img-box">
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="col-2">
          <div className="tabs">
            {destinations.map((destination, index) => {
              return (
                <button
                  key={index}
                  className={`tab-btn ${index === current ? "active" : ""}`}
                  onClick={() => setCurrent(index)}
                >
                  {destination.name}
                </button>
              );
            })}
          </div>

          <div className="content-center">
            <h2 className="heading-2">{name}</h2>
            <p className="paragraph">{description}</p>
          </div>
          <hr />
          <div className="content-bottom">
            <div>
              <h6 className="sub-heading-2">avg. distance</h6>
              <h5 className="heading-5">{distance}</h5>
            </div>
            <div>
              <h6 className="sub-heading-2">est. distance time</h6>
              <h5 className="heading-5">{travel}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destinations;
