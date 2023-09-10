import React from "react";
import { FaLinkedin, FaEnvelope, FaPhoneSquare } from 'react-icons/fa';

function contact() {
  const info = [
    {
      name: "Yash Pande",
      img: "https://drive.google.com/uc?export=view&id=1S-J9q8YouV0yKQE7UFGxtkfPM7AwyQWD",
      linkedin: "https://www.linkedin.com/in/yash-pande-/",
      email: "mailto:yashpande2002@gmail.com",
      phone: "tel:9579345348"
    },
    {
      name: "Piyush Bora",
      img: "https://drive.google.com/uc?export=view&id=1SamfS5W7irHqJ3W5ZJ-zCaRns9W3od0Q",
      linkedin: "https://www.linkedin.com/in/piyushbora/",
      email: "mailto:29piyushbora@gmail.com",
      phone: "tel:7666066207"
    },
    {
      name: "Soham Badjate",
      img: "https://drive.google.com/uc?export=view&id=1SZfYUw1pt4pxgYBZmbiHaBp7pW8kKsCz",
      linkedin: "https://www.linkedin.com/in/soham-badjate-137870218/",
      email: "mailto:badjatesoham@gmail.com",
      phone: "tel:9028031200"
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-w-full leading-loose text-center space-y-4 py-8 flex-1 px-4">
      <span className="text-5xl md:text-6xl text-[#0891B2] font-poppins font-bold filter drop-shadow-md">
        Contact Us
      </span>

      <div className="flex flex-wrap justify-center items-center">
        {info.map((member, i) => (
          <div key={i} className="h-auto w-[400px] rounded-lg bg-blue-900 bg-opacity-20 shadow-lg px-5 mt-32 pb-4 transition ease-in-out hover:scale-105 transform -translate-y-2 mx-5">
            <div className="w-full pt-1 mt-8 ">
              <div className="overflow-hidden rounded-full border-4 border-full transition duration-300 ease-in-out transform hover:scale-110 border-cyan-600 w-32 h-32 -mt-16 mx-auto shadow-lg">
                {/* <a href={linkedin ? linkedin : null} target="_blank" rel="noreferrer"> */}
                <img src={member.img} alt="name" loading="lazy" />
              </div>
            </div>
            <div className="mt-4 ">
              <p className="text-xl font-primary text-blue-500 font-bold text-center">
                {member.name}
              </p>
              <p className="text-md font-secondary text-gray-300 text-center mt-2 mb-1">
                Student Co-ordinator
              </p>
            </div>

            <div className="w-full overflow-y-auto h-20 flex justify-center items-center space-x-3">
              <a href={member.linkedin} target="_blank"><FaLinkedin color="#fff" size={40}/></a>
              <a href={member.email} target="_blank"><FaEnvelope color="#fff" size={40}/></a>
              {/* <a href={member.phone}><FaPhoneSquare color="#fff" size={40}/></a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default contact;
