import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <section className="home-wrapper">
      <div className="col-1">
        <h2 className="sub-heading-1">so, you want to travel to</h2>
        <h1 className="heading-1">space</h1>
        <p className="paragraph">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="col-2">
        <NavLink to="/destination">
          <button className="btn">explore</button>
        </NavLink>
      </div>
    </section>
  );
}

export default HomePage;
