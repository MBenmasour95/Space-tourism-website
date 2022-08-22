import React from "react";
import { Link } from "react-router-dom";

function Errorpage() {
  return (
    <section className="error-page">
      <Link to="/">Back To Home Page.</Link>
      <h1 className="heading-2">page not found</h1>
    </section>
  );
}

export default Errorpage;
