import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import useRazorpay from "react-razorpay";
import Backend from "../../api";
import "./styles/formSection.css";

const ThirdSection = ({ formData, setPage, setLoading }) => {
  const navigate = useNavigate()
  const Razorpay = useRazorpay();

  const handlePayment = useCallback(async () => {
    setLoading(true)
    var order = await Backend.createOrder(formData?.email);
    if (!order?.error) {
      if (order?.data?.payment_id) {
        setLoading(false)
        alert(`Email '${order?.data?.email}' has been already registered! Try with different email`)
        setPage(0)
        navigate(`/success?id=${order?.data?.payment_id}`)
        return
      }
    } else if (order?.error) {
      setLoading(false)
      alert(`ERROR: ${order?.error}`)
    }

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      amount: "36000",
      currency: "INR",
      name: "PICT CSI STUDENT BRANCH",
      description: "Club Membership Registration Fee",
      image: "https://elasticbeanstalk-ap-south-1-255813658777.s3.ap-south-1.amazonaws.com/CSI+Logo+blue.png",
      order_id: order?.data,
      handler: async (res) => {
        var confirmation
        while (true) {
          confirmation = await Backend.verifyOrder({ "email": formData?.email, ...res })
          if (!confirmation?.error) break
        }
        setLoading(false)
        setPage(0)
        navigate(`/success?id=${confirmation?.data?.payment_id}`)
      },
      send_sms_hash: true,
      prefill: {
        name: formData?.first_name + " " + formData?.last_name,
        email: formData?.email,
        contact: `+91${formData?.phone}`,
      },
      notes: formData || {},
      modal: {
        confirm_close: true,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new Razorpay(options);
    setLoading(false)
    razorpay.open();
  }, [Razorpay, formData, navigate, setPage]);

  const openPage = () => {
    setLoading(true)
    const win = window.open("https://pages.razorpay.com/PCSBMembershipDrive2022", "_blank");
    // var next = window.confirm("Click Ok to receive receipt after completing the payments")
    if (win != null) {
      // if (next) {
        setLoading(false)
        navigate(`/success?id=${formData?.email}`)
        // }
        win.focus();
    }
  }

  return (
    <div className="login-box">
      <button onClick={openPage}>Click to pay Rs. 360/-</button>
    </div>
  );
};

export default ThirdSection;
