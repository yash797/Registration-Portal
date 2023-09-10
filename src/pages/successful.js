import React, { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Backend from "../api";
import "./styles/successful.css";

const Successful = ({ setLoading }) => {
  var [searchParams] = useSearchParams()
  const [data, setData] = useState({
    email: "",
    phone: "",
    first_name: "",
    middleName: "",
    last_name: "",
    year: "",
    div: "",
    roll_no: "",
    department: "",
    expectation: "",
    payment_id: "",
  })

  const getPayment = useCallback(async (id) => {
    var user = await Backend.getPayment(id)
    if (!user?.error) {
      setData(user?.data)
    } else if (user?.error) {
      alert(`ERROR: ${user?.error}`)
      // navigate('/')
      return
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    getPayment(searchParams.get("id"));
    setLoading(false)
  }, [searchParams, getPayment])

  return (
    <div className="super">
      {/* <div className='demo-5'>successful</div> */}
      {data?.payment_id &&
        <>
          <div className="vector">
            <div className="main-container">
              <div className="check-container">
                <div className="check-background">
                  <svg
                    viewBox="0 0 65 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 25L27.3077 44L58.5 7"
                      stroke="white"
                      strokeWidth="13"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="check-shadow"></div>
              </div>
            </div>
          </div>

          <div className="font-medium  text-4xl text-center text-cyan-400">
            <Typewriter
              onInit={(typewriter) => {
                <br></br>;
                typewriter
                  .typeString("Registration Successful! ")
                  .typeString("<br/>Welcome To PCSB Fam! ")
                  //   .typeString("Welcome To PCSB Fam! ")

                  .pauseFor(2500)
                  //   .typeString("Welcome To PCSB! ")
                  // .deleteAll()

                  .start();
              }}
            />
            {/* <h1>Registration successful!</h1> */}
            {/* <br></br> */}
            {/* <h2>Welcome To PCSB!</h2> */}
          </div>

          <h2 className="text-cyan-700 text-center text-3xl mt-8 mb-4">- Payment Details -</h2>
          <div className="receipt px-6 p-3">
            <div className="column">
              <ul>
                <li>
                  <span className="font-medium">Name - </span><span>{`${data?.first_name || ""} ${data?.middleName || ""} ${data?.last_name || ""}`}</span>
                </li>
                <li>
                  <span className="font-medium">Email - </span><span>{data?.email || ""}</span>
                </li>
                <li>
                  <span className="font-medium">Phone - </span><span>{data?.phone || ""}</span>
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>
                  <span className="font-medium">Roll No. - </span><span>{data?.roll_no || ""}</span>
                </li>
                <li>
                  <span className="font-medium">Year - </span><span>{data?.year || ""}</span>
                </li>
                <li>
                  <span className="font-medium">Division - </span><span>{data?.div || ""}</span>
                </li>
              </ul>
            </div>
          </div>
        </>
      }

      {data?.payment_id ?
        <>
          <p className="mt-4 text-green-400 font-medium text-3xl">Payment ID - {data?.payment_id || ""}</p>
          <button className="mt-4 p-2 receipt-button" onClick={() => { window.print() }}>Download Receipt</button>
        </>
        :
        <>
          <p className="mt-4 text-red-400 font-medium text-3xl">Payment Pending</p>
          <p className="mt-2 text-cyan-400 font-medium text-1xl">(If paid the fees, try refreshing the page)</p>
        </>
      }

      {/* <div className="receipt-button"></div> */}

      <Link to="/">
        <div className="register">
          <button className="btn">
            <span className="btn-span">Return to Home</span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Successful;
