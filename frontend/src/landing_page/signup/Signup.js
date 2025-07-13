import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    // If form is valid, submit data (can be connected to API later)
    console.log("Form submitted:", formData);

    // Redirect to login or home page after successful signup using window.location
    window.location.href = "/login"; // Here, replace '/login' with the path of the page you want to redirect to
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <a href="/login" className="login-link">
          Log in
        </a>
      </p>
    </div>
  );
};

export default Signup;
