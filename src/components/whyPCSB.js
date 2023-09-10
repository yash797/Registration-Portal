import React from "react";
import "./styles/whyPCSB.css";
import Testimonial from './testimonials'

function WhyPCSB() {

  return (
    <div className="main-wp ">

    {/* <div ref={ref} className="container"> */}
    <div  className="container">
        {/* for bg animation */}
        <div className="elements">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

    <div className="textcheck">
        <h1 className="shop-title"><span>Why</span>-PCSB</h1>
    </div>
      <div>
      <div className="box">
        <div className="box1 mx-12 mt-4">
            <div className="ol-cards">
                <div className="element1 c1" >
                    <div className="title">
                        <span>Strong Alumni Network.</span>
                    </div>
                </div>
            </div>
        
            <div className="ol-cards">
                <div className="element1 c2" >
                    <div className="title">
                        <span>Interaction with professionals.</span>
                    </div>
                </div>
            </div>
            <div className="ol-cards">
                <div className="element1 c3" >
                    <div className="title">
                        <span>CSI funding for minor projects.</span>
                    </div>
                </div>
            </div>
            <div className="ol-cards">
                <div className="element1 c4" >
                    <div className="title">
                        <span>Concession for National Conferences.</span>
                    </div>
                </div>
            </div>
            <div className="ol-cards">
                <div className="element1 c5" >
                    <div className="title">
                        <span>Hands on and core work experience for FEs.</span>
                    </div>
                </div>
            </div>
    
        </div>

        

        <div className="box2 mt-4">
            <div className="ol-cards">
                <div className="element2 c6" >
                    <div className="title">
                        <span>Internship Opportunities.</span>
                    </div>
                </div>
            </div>
            <div className="ol-cards">
                <div className="element2 c7" >
                    <div className="title">
                        <span>Publish Articles in CSI Journals.</span>
                    </div>
                </div>
            </div>
        
            <div className="ol-cards">
                <div className="element2 c8" >
                    <div className="title">
                        <span>Training programs and certification.</span>
                    </div>
                </div>
            </div>

            <div className="ol-cards">
                <div className="element2 c9" >
                    <div className="title">
                        <span>Learn to work in variety of teams.</span>
                    </div>
                </div>
            </div>

            <div className="ol-cards">
                <div className="element2 c10" >
                    <div className="title">
                        <span>Leadership opportunities at an early age.</span>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
    </div>
    </div>
    {/* <Testimonial/> */}
    </div>
  );
}

export default WhyPCSB;
