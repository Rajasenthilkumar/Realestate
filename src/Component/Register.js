import React, { useState } from 'react';
import './login.css';
import {
  CButton,
  CCard,
  CCardBody,
  CContainer,
  CRow,
  CForm,
  CFormInput,
} from '@coreui/react';
import backgroundImg from '../assets/images/unsplash_MAnVoJlQUvg.png';
import logo from '../assets/images/evoltec logo-01 1.svg';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State variables for error messages
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateName = () => {
    if (fullName.trim() === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePhone = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError('Invalid phone number');
    } else {
      setPhoneError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleRegister = () => {
    validateName();
    validateEmail();
    validatePhone();
    validatePassword();
    validateConfirmPassword();

    if (
      !nameError &&
      !emailError &&
      !phoneError &&
      !passwordError &&
      !confirmPasswordError
    ) {
      console.log('Registering user:', {
        fullName,
        email,
        phone,
        password,
        confirmPassword,
      });
      // Add your registration logic here
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <CContainer>
        <CRow className="justify-content-center align-items-center">
          <div className="logo-container text-center mb-4">
            <img
              src={logo}
              alt="Evoltec Logo"
              style={{ width: '150px', height: '150px',marginLeft:'130px' }}
            />
          </div>
          <CCard className="p-4" style={{ width: '100%', borderRadius: '20px', padding: '20px' }}>
            <CCardBody>
              <div className="mb-4">
                <p className="form-title">Register</p>
                <p className="form-subtitle">
                  Please register to create your account.
                </p>
              </div>
              <CForm>
                <div className="mb-3">
                  <CFormInput
                    type="text"
                    id="fullName"
                    value={fullName}
                    onBlur={validateName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="form-input"
                  />
                  {nameError && (
                    <p className="error-message">{nameError}</p>
                  )}
                </div>
                <div className="mb-3">
                  <CFormInput
                    type="email"
                    id="email"
                    value={email}
                    onBlur={validateEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className="form-input"
                  />
                  {emailError && (
                    <p className="error-message">{emailError}</p>
                  )}
                </div>
                <div className="mb-3">
                  <CFormInput
                    type="tel"
                    id="phone"
                    value={phone}
                    onBlur={validatePhone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    className="form-input"
                  />
                  {phoneError && (
                    <p className="error-message">{phoneError}</p>
                  )}
                </div>
                <div className="mb-3">
                  <CFormInput
                    type="password"
                    id="password"
                    value={password}
                    onBlur={validatePassword}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="form-input"
                  />
                  {passwordError && (
                    <p className="error-message">{passwordError}</p>
                  )}
                </div>
                <div className="mb-3">
                  <CFormInput
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onBlur={validateConfirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                    className="form-input"
                  />
                  {confirmPasswordError && (
                    <p className="error-message">{confirmPasswordError}</p>
                  )}
                </div>
                <CButton
                  onClick={handleRegister}
                  className="mt-3 register-button"
                  style={{
                    backgroundColor: '#8b54ff',
                    color: '#ffffff',
                    borderRadius: '10px',
                    border: 'none',
                    marginBottom: '10px',
                  }}
                >
                  Register
                </CButton>
                <div style={{ textAlign: 'center' }}>
                  <CButton
                    onClick={handleRegister}
                    className="register-button"
                    style={{
                      backgroundColor: '#3300cc',
                      color: '#ffffff',
                      borderRadius: '10px',
                      border: 'none',
                    }}
                  >
                    <a
                      href="/Signin"
                      style={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                      }}
                    >
                      Have an account? Sign in
                    </a>
                  </CButton>
                </div>
              </CForm> 
            </CCardBody>
          </CCard>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
