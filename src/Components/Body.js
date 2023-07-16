import React from "react";
import "../App.css";
import Bean from "../Images/graine-cafe.webp";

function App() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Bean})`,
          backgroundPosition: "center",
          backgroundSize: "65vh",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          // marginTop: "-60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            width: "100vw",
          }}
        >
          <h1
            style={{
              fontFamily: "Restrain",
              fontSize: "75px",
              marginLeft: "5rem",
              color: "#191512",
              letterSpacing: "2px",
            }}
          >
            Coffee Genera
          </h1>
          <p
            style={{
              fontFamily: "visby regular ",
              marginLeft: "40vw",
              color: "#191512",
            }}
          >
            BY HARSH KARANWAL
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "visby medium",
          marginTop: "-150px",
          marginBottom: "100px",
          color: "#191512",
        }}
      >
        <p> Let's explore through the [GENERA]s of coffee</p>
      </div>
    </div>
  );
}

export default App;
