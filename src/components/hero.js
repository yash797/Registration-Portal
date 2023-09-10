import React from "react";
import "./styles/hero.css";
import Typewriter from "typewriter-effect";
function hero() {
  return (
    <div
      className="hero1"
      // style={{
      //   "!backgroundImage":
      //     "url(waves25.png), url(https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg)",
      // }}
    >
      <div className="main">
        <div className="hero_logo">
          {/* <p className="glitch"> */}
          {/* <span aria-hidden="true">
              PICT&nbsp;CSI&nbsp;STUDENT&nbsp;BRANCH{" "}
            </span>
            PICT&nbsp;CSI&nbsp;STUDENT&nbsp;BRANCH
            <span aria-hidden="true">
              PICT&nbsp;CSI&nbsp;STUDENT&nbsp;BRANCH{" "}
            </span> */}
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("PICT CSI STUDENT BRANCH ")
                
                .pauseFor(2500)
                
                .deleteAll()
                
                .start();
            }}
          /> */}
          <Typewriter
            options={{
              strings: ["PICT CSI STUDENT BRANCH "],
              // strings:["2022"],
              autoStart: true,
              pauseFor: 2500,
              loop: true,
            }}
          />

          {/* </p> */}
        </div>
        {/* <div> */}
        {/* <Typewriter
            options={{
              strings: ["2022"],
              autoStart: true,
              pauseFor:(5000),
              loop: true,
            }}
          /> */}
        {/* <p className="glitch2">
            <span aria-hidden="true">2022 </span>
            2022
            <span aria-hidden="true">2022 </span>
          </p> */}
        {/* </div> */}
        {/* <div className="hero_slogan">
          - Together we stand, Together we grow!
        </div> */}
        {/* <div className="slogan_div"> */}
          <h1 className="hero_slogan">
            <span className="spn-slgn">Together</span>
            <span className="spn-slgn">we</span>
            <span className="spn-slgn">stand</span>
            <span className="spn-slgn">, </span>
            <span className="spn-slgn">Together</span>
            <span className="spn-slgn">we</span>
            <span className="spn-slgn">grow</span>
            <span className="spn-slgn">!</span>
          </h1>
        {/* </div> */}
        <div className="register">
          <button className="btn">
            <a href="/register">
              <span className="btn-span">Click to Register</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default hero;
