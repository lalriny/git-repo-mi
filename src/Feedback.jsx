import React from "react";
import "./Feedback.css"; // Import the CSS file

const FeedbackForm = () => {
  return (
    <div className="feedback-container">
      <div className="feedback-content">
        {/* Left Side Text */}
        <div className="feedback-left">
          <h1 className="feedback-title">
            Feed <span>back</span>
          </h1>

          <p className="feedback-description">
            "We’d love to hear from you! Your feedback helps us improve and
            serve you better."
          </p>

          <p className="feedback-email">info@shikshacom.com</p>
        </div>

        {/* Right Side Form */}
        <form
          className="feedback-form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="a0608d50-fde6-4fa4-84ef-088941c2ece7"
          />

          {/* Name */}
          <label className="form-label">Name (required)</label>
          <div className="name-row">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
            />
          </div>

          {/* Email */}
          <label className="form-label">Email (required)</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="full-input"
            required
          />

          {/* Message */}
          <label className="form-label">Message (required)</label>
          <textarea
            name="message"
            placeholder="Your message..."
            required
          ></textarea>

          {/* Honeypot */}
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
          />

          {/* Button */}
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
