import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./NextPage.css";
import unicefLogo from "./assets/unicefLogo.png";

const NextPage = () => {
  const [formData, setFormData] = useState({
    title: "Mr.",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    emailUpdates: true,
    phoneUpdates: true,
  });
  const location = useLocation();
  const { amount } = location.state || {};
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="landing-page">
      <header className="header">
        <img src={unicefLogo} alt="UNICEF Logo" className="unicef-logo" />
      </header>

      <div className="donation-forms-container">
        <div className="progress-bar">
          {["Personal details", "Payment details", "Thank you"].map(
            (step, index) => (
              <div
                key={index}
                className={`progress-step ${
                  index === 0 ? "active" : "inactive"
                }`}
              >
                <div className={`step-circle ${index === 0 ? "" : "inactive"}`}>
                  {index + 1}
                </div>
                {step}
              </div>
            )
          )}
        </div>

        <h2 className="form-header">
          YOU ARE SIGNING UP FOR A{" "}
          <span className="highlight">{`MONTHLY DONATION OF ₹${amount}`}</span>
        </h2>
        <div className="form-subtext">Become a part of our donor family.</div>

        <form onSubmit={handleSubmit} className="donation-forms">
          <label>
            Title <span className="required">*</span>
          </label>
          <select
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          >
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Dr.">Dr.</option>
          </select>

          <label>
            First Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />

          <label>
            Last Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />

          <label>
            E-mail <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label>
            Phone Number <span className="required">*</span>
          </label>
          <div className="phone-input">
            <span>+91</span>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="10-digit mobile number"
              required
              maxLength={10}
            />
          </div>

          <div className="info-check">
            We'd like to keep you up to date on UNICEF's work for children and
            how else you can support us.
          </div>

          <label className="checkbox-group">
            <input
              type="checkbox"
              name="emailUpdates"
              checked={formData.emailUpdates}
              onChange={handleInputChange}
            />
            Yes, keep me updated by email
          </label>

          <label className="checkbox-group">
            <input
              type="checkbox"
              name="phoneUpdates"
              checked={formData.phoneUpdates}
              onChange={handleInputChange}
            />
            Yes, keep me updated by phone, SMS, and WhatsApp
          </label>

          <button type="submit" className="submit-button">
            SUBMIT DETAILS
          </button>
        </form>
      </div>

      <footer className="footer">
        <div align="left">
          <img src={unicefLogo} alt="UNICEF Logo" width="300" />
        </div>
        <p>&copy; 2023 UNICEF - All rights reserved</p>
        <div className="privacy">
          <a href="https://www.unicef.org/legal#privacy-policy">
            Privacy Policy
          </a>
          <a href="https://www.unicef.org/legal">Legal</a>
        </div>
      </footer>
    </div>
  );
};

export default NextPage;
