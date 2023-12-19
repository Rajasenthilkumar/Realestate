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
import logo from '../assets/images/evoltec logo-01 1.svg'

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

    if (!nameError && !emailError && !phoneError && !passwordError && !confirmPasswordError) {
      console.log('Registering user:', { fullName, email, phone, password, confirmPassword });
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
        minHeight: '1vh',
      }}
    >
      <div>
        <CContainer>
          <CRow>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              <img
                src={logo}
                alt="Evoltec Logo"
                style={{ width: '200px', height: '200px' }}
              />
            </div>
            <CCard className="p-4" style={{ width: '500px', borderRadius: '20px', paddingTop: '50px', paddingBottom: '50px' }}>
              <CCardBody>
                <div>
                  <div style={{ marginLeft: '70px' }}>
                    <p style={{ fontFamily: 'Alfa Slab One', fontSize: '35px', margin: '0', padding: '0', fontWeight: 'bold', textAlign: 'left' }}>Register</p>
                    <p style={{ fontSize: '18px', color: '#969696', textAlign: 'left' }}>Please register to create your account.</p>
                  </div>
                  <CForm style={{ textAlign: 'center' }}>
                    <div>
                      <CFormInput
                        type="text"
                        id="fullName"
                        value={fullName}
                        onBlur={validateName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        style={{
                          width: '350px',
                          height: '25px',
                          marginBottom: '15px',
                          borderRadius: '10px',
                          border: '2px solid #3300cc',
                          padding: '10px',
                        }}
                      />
                      {nameError && <p style={{ color: 'red', fontSize: '14px', marginTop: '0' }}>{nameError}</p>}
                    </div>
                    <div>
                      <CFormInput
                        type="email"
                        id="email"
                        value={email}
                        onBlur={validateEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                        style={{
                          width: '350px',
                          height: '25px',
                          marginBottom: '15px',
                          borderRadius: '10px',
                          border: '2px solid #3300cc',
                          padding: '10px',
                        }}
                      />
                      {emailError && <p style={{ color: 'red', fontSize: '14px', marginTop: '0' }}>{emailError}</p>}
                    </div>
                    <div>
                      <CFormInput
                        type="tel"
                        id="phone"
                        value={phone}
                        onBlur={validatePhone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                        style={{
                          width: '350px',
                          height: '25px',
                          marginBottom: '15px',
                          borderRadius: '10px',
                          border: '2px solid #3300cc',
                          padding: '10px',
                        }}
                      />
                      {phoneError && <p style={{ color: 'red', fontSize: '14px', marginTop: '0' }}>{phoneError}</p>}
                    </div>
                    <div>
                      <CFormInput
                        type="password"
                        id="password"
                        value={password}
                        onBlur={validatePassword}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        style={{
                          width: '350px',
                          height: '25px',
                          marginBottom: '15px',
                          borderRadius: '10px',
                          border: '2px solid #3300cc',
                          padding: '10px',
                        }}
                      />
                      {passwordError && <p style={{ color: 'red', fontSize: '14px', marginTop: '0' }}>{passwordError}</p>}
                    </div>
                    <div>
                      <CFormInput
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onBlur={validateConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password"
                        style={{
                          width: '350px',
                          height: '25px',
                          marginBottom: '15px',
                          borderRadius: '10px',
                          border: '2px solid #3300cc',
                          padding: '10px',
                        }}
                      />
                      {confirmPasswordError && <p style={{ color: 'red', fontSize: '14px', marginTop: '0' }}>{confirmPasswordError}</p>}
                    </div>
                    <CButton
                      onClick={handleRegister}
                      className="mt-3"
                      style={{ width: '370px', height: '50px', marginBottom: '20px', backgroundColor: '#8b54ff', color: '#ffffff', borderRadius: '10px', border: 'none' }}
                    >
                      Register
                    </CButton>
                    <CButton
                      onClick={handleRegister}
                      className="mt-3"
                      style={{ width: '370px', height: '50px', backgroundColor: '#3300cc', color: '#ffffff', borderRadius: '10px', border: 'none' }}
                    >
                  <a href="/Sigin" style={{ color: '#ffffff', fontWeight: 'bold', textDecoration: 'none' }}>Have an account? Sign in</a>
                     
                    </CButton>
                  </CForm>
                </div>
              </CCardBody>
            </CCard>
          </CRow>
        </CContainer>
      </div>
    </div>
  );
};

export default Register;
