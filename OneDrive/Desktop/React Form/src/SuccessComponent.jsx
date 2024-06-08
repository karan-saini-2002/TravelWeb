import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessComponent.css'; // Import component-specific CSS

const SuccessComponent = () => {
  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve form submissions from local storage
    const storedSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    setSubmissions(storedSubmissions);
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div>
        <button className="back-button" onClick={handleBackClick}>
            Back
          </button>
      {submissions.map((form, index) => (
        <div key={index} className="success-container">
          <h2>Form Submission Successful</h2>
          <div>
            <h3>Submitted Data:</h3>
            <div className="data-field">
              <strong>First Name:</strong> <div>{form.firstName}</div>
            </div>
            <div className="data-field">
              <strong>Last Name:</strong> <div>{form.lastName}</div>
            </div>
            <div className="data-field">
              <strong>Username:</strong> <div>{form.username}</div>
            </div>
            <div className="data-field">
              <strong>Email:</strong> <div>{form.email}</div>
            </div>
            <div className="data-field">
              <strong>Password:</strong> <div>{form.password}</div>
            </div>
            <div className="data-field">
              <strong>Phone No.:</strong> <div>{form.phoneCode} {form.phoneNumber}</div>
            </div>
            <div className="data-field">
              <strong>Country:</strong> <div>{form.country}</div>
            </div>
            <div className="data-field">
              <strong>City:</strong> <div>{form.city}</div>
            </div>
            <div className="data-field">
              <strong>PAN No.:</strong> <div>{form.panNo}</div>
            </div>
            <div className="data-field">
              <strong>Aadhar No.:</strong> <div>{form.aadharNo}</div>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default SuccessComponent;
