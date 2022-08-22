import React, { useEffect, useRef, useState } from "react";

function Crews({ crew }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const refs = useRef(crew.map(() => React.createRef()));
  const slideParentRef = useRef();

  useEffect(() => {
    refs.current.map((ref, index) => {
      return (ref.current.style.left = `${index * 100}%`);
    });
  }, []);

  useEffect(() => {
    crew.map((_, index) => {
      return currentIndex === index
        ? (slideParentRef.current.style.transform = `translate(-${
            index * 100
          }%, 0%)`)
        : null;
    });
  }, [crew, currentIndex]);

  return (
    <section className="crew-wrapper">
      <h2 className="sub-heading-1">
        <span>02</span> meet your crew
      </h2>
      <div className="carousel">
        <div className="slides" ref={slideParentRef}>
          {crew.map((crew, index) => {
            return (
              <div
                key={index}
                className={`slide ${
                  index === currentIndex ? "slide-active" : ""
                }`}
                ref={refs.current[index]}
              >
                <div className="col-1">
                  <h4 className="heading-4">{crew.role}</h4>
                  <h3 className="heading-3">{crew.name}</h3>
                  <p className="paragraph">{crew.bio}</p>
                </div>
                <div className="col-2">
                  <img src={crew.image} alt={crew.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bullets">
        {crew.map((_, index) => {
          return (
            <span
              key={index}
              className={`bullet ${
                index === currentIndex ? "bullet-active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          );
        })}
      </div>
    </section>
  );
}

export default Crews;
