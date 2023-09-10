import React from 'react'
import "./styles/whyPCSB.css";

function whyPCSBnew() {
    const arr = [
      {
        title: "Strong Alumni Network",
        desc: "We here at PCSB have a very strong connections with our Alumnis.",
      },
      {
        title: "Teamwork",
        desc: "Learn to work in variety of teams and get to know what teamwork means.",
      },
      {
        title: "CSI funding for minor projects",
        desc: "Being a member of Computer Society of India you will get funded for your minor projects.",
      },
      {
        title: "Internship Opportunities ",
        desc: "We will inform you with various Internship Opportunities on a regular basis.",
      },
      {
        title: "Leadership",
        desc: "You will get opportunities to Lead a project or an event at early stage.",
      },

      {
        title: "Technical SIGs",
        desc: "You can acquire the technical knowledge about various domains and various programming languages such as C++, Python, and Web/App Development.",
      },
      {
        title: "Interaction with professionals",
        desc: "Through our events, you get the chance to interact with various professionals who are expert in their own field.",
      },
      {
        title: "Concession for National Conferences",
        desc: "You will get concession for various tech/non-tech conferences which are held across the nation.",
      },
    ];
  return (
    <div>
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
        <h1 className="shop-title" id="why-pcsb">
          <span>Why</span>-PCSB
        </h1>
      </div>
      <div className="align-center flex">
        <div className="ypcsbnew justify-evenly flex-wrap flex md:grid md:grid-cols-2 gap-12 md:mx-auto mt-12">
          {arr.map((member, i) => (
            <div
              key={`member${i}`}
              className="bg-[#04031092] text-cyan-400 w-full max-w-md flex flex-col rounded-lg  shadow-lg p-4 hover:bg-opacity-75 hover:bg-[#0e0b3792] "
            >
              {/* <div class="flex items-center justify-between"> */}
              <div className="flex items-center space-x-4">
                <div className="rounded-full w-4 h-4 border border-cyan-500"></div>
                <div className="text-2xl font-semibold text-left">
                  {member.title}
                </div>
              </div>
              <p className="mt-4 text-gray-200 font-normal text-xl  text-left">
                {member.desc}
              </p>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default whyPCSBnew
