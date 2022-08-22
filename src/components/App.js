import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./Home";
import data from "../data.json";
import Destinations from "./Destinations";
import Crew from "./Crew";
import Technology from "./Technology";
import Footer from "./Footer";
import Errorpage from "./errorpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/destination"
              element={<Destinations destinations={data.destinations} />}
            ></Route>
            <Route path="/crew" element={<Crew crew={data.crew} />}></Route>
            <Route
              path="/technology"
              element={<Technology technology={data.technology} />}
            ></Route>
            <Route path="/*" element={<Errorpage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
