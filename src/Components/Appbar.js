import React, { useEffect, useState } from "react";
import "./CSS/appbar.css";
import MenuIcon from "../Images/menu.png";
import BeanLogo from "../Images/bean-logo.png";

function ResponsiveAppBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = 750;

      if (scrollTop > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const appBarStyle = {
    background: isScrolled
      ? "linear-gradient(to bottom, rgba(189, 178, 167,0.5), rgba(189, 178, 167,0.5))"
      : "linear-gradient(to bottom, rgba(189, 178, 167,0.5), rgba(189, 178, 167,0.5))",
    backdropFilter: "blur(4px) ",
    transition: "background 1s ease",
  };
  return (
    <>
      <div className="app-bar" style={appBarStyle}>
        <img src={MenuIcon} style={{ marginLeft: "3vw" }}></img>
        <img
          src={BeanLogo}
          style={{ marginLeft: "43vw", width: "70px", marginTop: "0rem" }}
        ></img>
        <div style={{ display: "flex", gap: "1rem", marginLeft: "40vw" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.99"
            height="31.99"
            viewBox="0 0 31.99 31.99"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  x="1"
                  y="1"
                  width="31.99"
                  height="31.99"
                  fill="none"
                ></rect>
              </clipPath>
            </defs>
            <g
              id="Groupe_défilant_1"
              data-name="Groupe défilant 1"
              transform="translate(-1 -1)"
              clip-path="url(#clip-path)"
            >
              <g
                id="Groupe_800"
                data-name="Groupe 800"
                transform="translate(16913.752 3971.55)"
              >
                <path
                  id="Tracé_1215"
                  data-name="Tracé 1215"
                  d="M1515.115,77.741l-6.625-6.625a11.107,11.107,0,1,0-1.569,1.57l6.624,6.625a1.11,1.11,0,0,0,1.57-1.57M1491.024,64.1a8.878,8.878,0,1,1,8.878,8.879,8.887,8.887,0,0,1-8.878-8.879"
                  transform="translate(-18398.557 -4020.55)"
                ></path>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.988"
            height="31.987"
            viewBox="0 0 31.988 31.987"
          >
            <g
              id="Groupe_799"
              data-name="Groupe 799"
              transform="translate(16848.793 3970.55)"
            >
              <path
                id="Tracé_1216"
                data-name="Tracé 1216"
                d="M1577.067,54.685a15.993,15.993,0,1,0,4.685,11.309,15.889,15.889,0,0,0-4.685-11.309m-19.285,22.954a8.1,8.1,0,0,1,15.952,0,14.094,14.094,0,0,1-15.952,0m2.89-13.653a5.086,5.086,0,1,1,5.086,5.086,5.091,5.091,0,0,1-5.086-5.086m14.685,12.353a9.986,9.986,0,0,0-5.807-6.52,6.96,6.96,0,1,0-7.584,0,9.981,9.981,0,0,0-5.807,6.519,14.119,14.119,0,1,1,19.2,0"
                transform="translate(-18398.557 -4020.55)"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
export default ResponsiveAppBar;
