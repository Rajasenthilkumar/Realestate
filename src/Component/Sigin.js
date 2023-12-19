//signin code for react 19/12/2023
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
  CFormCheck
} from '@coreui/react';
import backgroundImg from '../assets/images/unsplash_MAnVoJlQUvg.png';
import logo from '../assets/images/evoltec logo-01 1.svg'
import Google from '../assets/images/plus.png'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };
  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };
  const handleRegister = () => {
    validateEmail();
    validatePassword();

    if (!emailError && !passwordError) {
      console.log('Registering user:', { email, password });

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
                    <p style={{ fontFamily: 'Alfa Slab One', fontSize: '35px', margin: '0', padding: '0', fontWeight: 'bold', textAlign: 'left' }}>Sign in</p>
                    <p style={{ fontSize: '18px', color: '#969696', textAlign: 'left' }}>Please Login to  Continue your account.</p>
                  </div>
                  <CForm >
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
                    <div className="mb-3">
                      <input
                        type="checkbox"
                        id="keepLoggedIn"
                        onChange={(e) => {
                          console.log(e.target);
                        }}
                        style={{ marginBottom: '20px', marginLeft: '-180px' }}
                      />
                      <label htmlFor="keepLoggedIn" style={{ marginLeft: '10px', textAlign: 'left', marginBottom: '20px', fontSize: '18px' }}>
                        Keep me logged in
                      </label>
                    </div>
                    <CButton
                      onClick={handleRegister}
                      className="mt-3"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '370px',
                        height: '50px',
                        borderRadius: '10px',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        backgroundColor: 'transparent',
                        border: '2px solid #f2f2f2',
                        marginLeft: '70px'
                      }}
                    >
                      Sign in With Google
                      <img
                        src={Google}
                        alt="Evoltec Google"
                        style={{ width: '25px', height: '25px', marginLeft: '10px' }}
                      />
                    </CButton>
                    <p style={{ fontSize: '20px', color: '#969696' }}>  Need an account? <a href="/" style={{ color: '#3300cc', fontWeight: 'bold' }}>Create one</a></p>                  </CForm>
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
