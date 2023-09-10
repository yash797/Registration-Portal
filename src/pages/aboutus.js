import React from "react";
// import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <div className="flex flex-col justify-center items-center min-w-full leading-loose text-center space-y-4 py-8 flex-1 px-4">
      <span className="text-5xl md:text-6xl text-[#0891B2] font-poppins font-bold mb-3 filter drop-shadow-md">
          About Us
      </span>
        <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
        PICT CSI Student Branch, working under CSI, was established in 2016 with an objective to facilitate research, knowledge and career enhancement for the students, along with inspiring and nurturing new entrants into the industry.
        </p>
        <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
        It provides a platform for technical and non-technical education. One of our key strengths at PCSB is our rate of growth in a short span of time. We take pride in the fact that we are one of the best student communities in Pune, still growing at an exponential rate.
        </p>
        <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
          Being the largest student society in PICT, we have many technical and non-technical domains that interest students and help them to improve their skills. Students are encouraged to take part in the various activities taking place in the club and this helps in the overall development of the individuals.
        </p>
        {/* <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
          In my spare time I like to hit the Gym, Listen to music, and play
          Badminton. I’m always down for hearing about new projects, so please
          feel free to drop me a line.
        </p> */}
    </div>
  );
}

export default About;
