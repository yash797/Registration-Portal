import React from "react";
import "./styles/formSection.css";

const SecondSection = ({ formData, setFormData }) => {
  return (
    <div className="login-box">
      <h1 className="text-center text-2xl font-semibold mt-4">
        Enter your Details :
      </h1>

      <form action="">
        <span className="text-center text-xxl font-medium my-2">
          <p>Enter your Name : </p>
        </span>
        <input
          type="text"
          onChange={(e) => {
            setFormData({
              ...formData,
              first_name: e.target.value,
            });
          }}
          value={formData.first_name}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          onChange={(e) => {
            setFormData({
              ...formData,
              middleName: e.target.value,
            });
          }}
          value={formData.middleName}
          placeholder="Middle Name"
        />
        <input
          type="text"
          onChange={(e) => {
            setFormData({
              ...formData,
              last_name: e.target.value,
            });
          }}
          value={formData.last_name}
          placeholder="Last Name"
          required
        />
        <span className="text-center text-xxl font-medium my-2">
          <p>Select your Class *</p>
        </span>
        <select
          onChange={(e) => {
            setFormData({ ...formData, year: e.target.value });
          }}
          value={formData.year}
        >
          <option value="" disabled>Select your Class</option>
          <option value="FE">FE</option>
          <option value="SE">SE</option>
          <option value="TE">TE</option>
        </select>
        <span className="text-center text-xxl font-medium my-2">
          <p>Select your division *</p>
        </span>
        <select
          onChange={(e) => {
            setFormData({ ...formData, div: e.target.value });
          }}
          value={formData.div}
        >
          <option value="" disabled>Select your Division</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </select>
        <span className="text-center text-xxl font-medium my-2">
          <p>Enter your Roll No. :</p>
        </span>
        <input
          type="text"
          onChange={(e) => {
            setFormData({
              ...formData,
              roll_no: e.target.value,
            });
          }}
          value={formData.roll_no}
          placeholder="Roll No. *"
          required
        />
        <span className="text-center text-xxl font-medium my-2">
          <p>Select your Department *</p>
        </span>
        <select
          onChange={(e) => {
            setFormData({ ...formData, department: e.target.value });
          }}
          value={formData.department}
        >
          <option value="" disabled>Select your Department</option>
          <option value="CE">CE</option>
          <option value="IT">IT</option>
          <option value="ENTC">ENTC</option>
        </select>
        <span className="text-center text-xxl font-medium my-2">
          <p>Expectations from PCSB :</p>
        </span>
        <textarea
          required
          onChange={(e) => {
            setFormData({
              ...formData,
              expectation: e.target.value,
            });
          }}
          value={formData.expectation}
          placeholder="Expectations From PCSB"
          rows={"8"}
        />
      </form>
    </div>
  );
};

export default SecondSection;
