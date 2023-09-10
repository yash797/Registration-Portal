import React from "react";
import "./styles/formSection.css";

const FirstSection = ({ formData, setFormData }) => {
  return (
    <div className="login-box">
      <h1 className="text-center text-2xl font-semibold mt-4">Enter you details:</h1>

      <form action="">
      <span className="text-center text-xxl font-medium my-2">
        <p>Enter your email : </p>
        </span>
        <input
          type="email"
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
          value={formData.email}
          placeholder="Enter your Email *"
          required
        />
        <span className="text-center text-xxl font-medium my-2">
        <p>Enter Your Phone No. : </p>
        </span>
        <input
          type="phone"
          onChange={(e) => {
            setFormData({
              ...formData,
              phone: e.target.value,
            });
          }}
          value={formData.phone}
          placeholder="Enter your Phone Number *"
          required
        />
      </form>
    </div>
  );
};

export default FirstSection;
