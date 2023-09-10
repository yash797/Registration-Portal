import React, { useState } from "react";
import { useNavigate } from "react-router";
import ProgressBar from "@ramonak/react-progress-bar";
import Backend from "../api";
import FirstSection from "../components/formSections/FirstSection";
import SecondSection from "../components/formSections/SecondSection";
import ThirdSection from "../components/formSections/ThirdSection";
import Footer from "../components/footer";
import "./styles/form.css";

let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let validphone = /(\d{10})/;

let validRoll = /(\d{5})/;

let validfields = false;

const Form = ({ loading, setLoading }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
  });

  const [page, setPage] = useState(0);

  const [progress, setProgress] = useState(25);

  async function handleNextClick() {
    if (page === 0) {
      // do form validation
      if (formData.email.match(validEmail)) {
        validfields = true;
      } else {
        return alert("Please Enter valid email address")
      }
      if (formData.phone.match(validphone)) {
        validfields = true;
      } else {
        return alert("Please Enter valid Phone Number")
      }
      if(validfields){
        setLoading(true)
        var isEmailRegistered = await Backend.checkEmail(formData?.email)
        if (!isEmailRegistered?.error) {
          if (isEmailRegistered?.data) {
            if (isEmailRegistered?.data?.payment_id === "") {
              var proceedToPayment = window.confirm(`Email '${isEmailRegistered?.data?.email}' is already registered!\nPress 'OK' to continue\nPress 'Cancel' to try with other email`)
              if (proceedToPayment) {
                setFormData(prevFormData => ({ ...prevFormData, ...isEmailRegistered?.data }))
                setLoading(false)
                setPage(page + 1)
                return
              }
            } else if (isEmailRegistered?.data?.payment_id !== "") {
              alert(`Email '${isEmailRegistered?.data?.email}' is already registered! Try again with different email`)
              setLoading(false)
              navigate(`/success?id=${isEmailRegistered?.data?.email}`)
              return
            }
          }
          var proceedToDetails = window.confirm(`Please double check the following email address is active and reachable!\n\n${formData?.email}`)
          if (proceedToDetails) {
            setLoading(false)
            setProgress(50)
            setPage(page + 1)
            return
          }
        } else {
          alert(`ERROR: ${isEmailRegistered?.error}\n\nPlease retry!`)
        }
        setLoading(false)
      }
    }

    else if (page === 1) {
      validfields = false;
      // do form validation again
      if (formData.first_name === '' || formData.first_name.length<1){
        return alert("Enter your First Name");
      } else {
        validfields = true;
      }
      if (formData.last_name === "" || formData.last_name.length < 1) {
        return alert("Enter your Last Name");
      } else {
        validfields = true;
      }
      if (formData.roll_no.match(validRoll)) {
        validfields = true;
      } else {
        return alert("Enter valid roll no.");
      }
      // if (formData.roll_no === '' || formData.roll_no.length<5){
      //   return alert("Enter your Roll No.");
      // }
      // else{
      //   validfields = true;
      // }
      if(validfields){
        setLoading(true)
        const { email, phone, first_name, last_name, roll_no, expectation, payment_id } = formData
        var registerUser = await Backend.createAccount({ email, phone, first_name, last_name, roll_no, expectation, payment_id })
        if (!registerUser?.error) {
          if (registerUser?.data?.payment_id === "") {
            setLoading(false)
            setProgress(75)
            setPage(page + 1)
          } else if (registerUser?.data?.payment_id !== "") {
            alert(`Email '${registerUser?.data?.email}' is already registered! Try again with different email`)
            setLoading(false)
            navigate(`/success?id=${registerUser?.data?.email}`)
          }
        } else {
          alert(`ERROR: ${registerUser?.error}\n\nPlease retry!`)
        }
        setLoading(false)
      }
    }

    else if (page === 2) {
      // set page === 0 , and clear fields
      setPage(0);
      setProgress(100)
    }
  }

  const handlePrevClick = () => {
    setPage(page - 1);
    setProgress(progress - 33);
  };

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <FirstSection formData={formData} setFormData={setFormData} />;
      case 1:
        return <SecondSection formData={formData} setFormData={setFormData} />;
      case 2:
        return <ThirdSection formData={formData} setPage={setPage} setLoading={setLoading} />;
      default:
        return <FirstSection formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
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
      <ProgressBar
        className="progressbar"
        completed={progress}
        bgColor="#00c6ff"
        customLabel=" "
        borderRadius=" 0px "
        animateOnRender = {true}
        initCompletedOnAnimation = {0}
      />
      <div className="tempo text-center">
        {conditionalComponent()}
        {page === 2 && (
          <>
            <h3 className="text-2xl font-semibold text-cyan-400 py-4">Terms & Conditions</h3>
            <p className="text-gray-200 w-4/5 m-auto">After successful payment of the membership fees, you hereby consent to our Privacy Policy and agree to its terms.
            1. The personal information that we collect from you will be used to complete your registration at PICT CSI Student Branch & will be used to get you registered as a working member of Computer Society of India (CSI), India's oldest and largest society of computer professionals & students.
            2. The membership fees amount will not be refunded under any circumstances except for the cases mentioned below:
            i. Re-registration of an already registered member.
            ii. The registered member is not an active student of PICT at the time of registration.
            <br />
            You agree to share information entered on this page with PICT CSI Student Branch (owner of this page) and Razorpay, adhering to applicable laws.</p>
          </>
        )}
      </div>
      <div className="buttons">
        {page < 2 && <button onClick={handlePrevClick} disabled = {page === 0}>{"< Prev"}</button>}
        {page < 2 &&
          (!loading ? (
            <button onClick={handleNextClick}>
              {page < 2 ? "Next >" : "Submit"}
            </button>
          ) : (
            <button onClick={handleNextClick} disabled>
              {page < 2 ? "Next >" : "Submit"}
            </button>
          ))}
      </div>
      <Footer/>
    </>
  );
};

export default Form;
