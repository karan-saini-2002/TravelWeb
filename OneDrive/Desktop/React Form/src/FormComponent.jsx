// src/components/FormComponent.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormComponent.css';

const FormComponent = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Retrieve existing submissions from local storage
      const existingSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
      // Add new form submission
      const updatedSubmissions = [...existingSubmissions, form];
      // Save updated submissions to local storage
      localStorage.setItem('formSubmissions', JSON.stringify(updatedSubmissions));
      navigate('/success');
    } else {
      setErrors(newErrors);
    }
  };
  const handleBackClick = () => {
    navigate('/success');
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = 'First name is required';
    if (!form.lastName) newErrors.lastName = 'Last name is required';
    if (!form.username) newErrors.username = 'Username is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.password) newErrors.password = 'Password is required';
    if (!form.phoneCode) newErrors.phoneCode = 'Phone code is required';
    if (!form.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!form.country) newErrors.country = 'Country is required';
    if (!form.city) newErrors.city = 'City is required';
    if (!form.panNo) newErrors.panNo = 'PAN number is required';
    if (!form.aadharNo) newErrors.aadharNo = 'Aadhar number is required';
    return newErrors;
  };

  const togglePasswordVisibility = () => {
    setForm({
      ...form,
      showPassword: !form.showPassword
    });
  };

  return (
    
    <form onSubmit={handleSubmit}>
        <h2>Fill The Form-</h2>
        <button className="history-button" onClick={handleBackClick}>
            History
          </button>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input
          type={form.showPassword ? 'text' : 'password'}
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {form.showPassword ? 'Hide' : 'Show'}
        </button>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Phone No.</label>
        <input
          type="text"
          name="phoneCode"
          placeholder="Country Code"
          value={form.phoneCode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Number"
          value={form.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneCode && <span>{errors.phoneCode}</span>}
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </div>
      <div>
        <label>Country</label>
        <select name="country" value={form.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>
      <div>
        <label>City</label>
        <select name="city" value={form.city} onChange={handleChange}>
          <option value="">Select City</option>
          {form.country === 'India' && (
            <>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </>
          )}
          {form.country === 'USA' && (
            <>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
            </>
          )}
        </select>
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>PAN No.</label>
        <input
          type="text"
          name="panNo"
          value={form.panNo}
          onChange={handleChange}
        />
        {errors.panNo && <span>{errors.panNo}</span>}
      </div>
      <div>
        <label>Aadhar No.</label>
        <input
          type="text"
          name="aadharNo"
          value={form.aadharNo}
          onChange={handleChange}
        />
        {errors.aadharNo && <span>{errors.aadharNo}</span>}
      </div>
      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Submit
      </button>
    </form>
  );
};

export default FormComponent;

