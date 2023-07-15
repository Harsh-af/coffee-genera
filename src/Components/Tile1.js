import React, { useEffect, useRef } from "react";
import "../App.css";
import Bean from "../Images/graine-cafe.webp";
import CoffeeCup from "../Images/coffee.png";
import "./CSS/body.css";

function App() {
  const imageRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
        } else {
          entry.target.classList.remove("slide-in");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#191512",
        height: "90vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        paddingTop: "2rem",
        overflow: "hidden",
      }}
    >
      <div style={{ paddingLeft: "10rem" }}>
        <h1
          style={{
            fontFamily: "Restrain ",
            fontWeight: 100,
            fontSize: "80px",
            color: "#bdb2a7",
          }}
        >
          Capulus Est<br></br> Delectamentum
        </h1>
        <p className="tile1-text">
          The{" "}
          <span
            style={{
              fontSize: "35px",
            }}
          >
            euphoria
          </span>{" "}
          of dopamine and pleasant feelings that people often associate with
          their first cup of coffee in the morning. k
        </p>
        <p className="tile1-text">
          The passion for exceptional coffees continues to be transmitted in
          this centuries-old roasting workshop, a warm place that offers lively,
          vibrant coffee from the finest origins and always roasted according to
          the rules of the art. Between passion and tradition, the deuza house
          perpetuates local history with one of the most consumed drinks in the
          world.
        </p>
      </div>
      <img
        src={CoffeeCup}
        ref={imageRef}
        alt="Sliding Image"
        className="slide-image"
        style={{
          width: "40vw",
          objectFit: "contain",
          aspectRatio: "1/1",
          // marginLeft: "10rem",
        }}
      ></img>
    </div>
  );
}

export default App;
