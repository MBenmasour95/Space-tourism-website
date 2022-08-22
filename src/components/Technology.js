import React, { useState, useRef, useEffect } from "react";

function Technologies({ technology }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState(0);
  const refs = useRef(technology.map(() => React.createRef()));
  const slideParentRef = useRef();

  useEffect(() => {
    refs.current.map((ref, index) => {
      return screenSize <= 768
        ? (ref.current.style.cssText = `top: 0; left: ${index * 100}%`)
        : (ref.current.style.cssText = `top: ${index * 100}%; left: 0`);
    });
  }, [screenSize]);

  useEffect(() => {
    technology.map((_, index) => {
      return currentIndex === index
        ? screenSize <= 768
          ? (slideParentRef.current.style.cssText = `transform: translate(-${
              index * 100
            }%, 0%)`)
          : (slideParentRef.current.style.cssText = `transform: translate(0%, -${
              index * 100
            }%)`)
        : null;
    });
  }, [technology, currentIndex, screenSize]);

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
  }, []);

  return (
    <section className="technology-wrapper">
      <h2 className="sub-heading-1">
        <span>03</span> space launch 101
      </h2>
      <div className="row">
        <div className="numbers">
          {technology.map((_, index) => {
            return (
              <button
                key={index}
                className={`number-btn ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <div className="carousel">
          <div className="slides" ref={slideParentRef}>
            {technology.map((technology, index) => {
              return (
                <div
                  key={index}
                  className={`slide ${
                    index === currentIndex ? "active-slide" : ""
                  }`}
                  ref={refs.current[index]}
                >
                  <div className="col-1">
                    <h6 className="sub-heading-2">the technology...</h6>
                    <h3 className="heading-3">{technology.name}</h3>
                    <p className="paragraph">{technology.description}</p>
                  </div>
                  <div className="col-2">
                    <img
                      src={
                        screenSize <= 768
                          ? technology.images.landscape
                          : technology.images.portrait
                      }
                      alt={technology.name}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
