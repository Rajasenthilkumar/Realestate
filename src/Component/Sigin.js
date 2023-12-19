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
      console.log('Registering user:', { fullName, email, phone, password, confirmPassword });
      // Add your registration logic here
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#e1decf',

      }}
    >
      <div>
        <CContainer>
          <CRow>
            <p style={{ textAlign: 'center', fontSize: '65px', margin: '0', marginBottom: '0', fontFamily: 'Rammetto One', marginBottom: '0', fontWeight: 'bold' }}>evoltec</p>
            <p className="text" style={{ textAlign: 'center', marginTop: '0' }}>EVOLVING TECHNOLOGIES</p>
            <CCard className="p-4" style={{ backgroundColor: '#ffffff', width: '500px', borderRadius: '20px', paddingTop: '50px', paddingBottom: '50px' }}>
              <CCardBody>
                <div>
                  <div style={{ marginLeft: '70px' }}>
                    <p style={{ fontFamily: 'Alfa Slab One', fontSize: '35px', margin: '0', padding: '0', fontWeight: 'bold', textAlign: 'left' }}>Sign in</p>
                    <p style={{ fontSize: '18px', color: '#969696', textAlign: 'left' }}>Please Login to  Continue your account.</p>
                  </div>
                  <CForm style={{ textAlign: 'center' }}>
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
                          marginBottom: '20px',
                          borderRadius: '10px',
                          border: '2px solid #3300cc',
                          padding: '10px',
                        }}
                      />
                      {emailError && <p style={{ color: 'red', fontSize: '14px', margin: '0' }}>{emailError}</p>}
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
                          marginBottom: '20px',
                          borderRadius: '10px',
                          border: '2px solid #3300cc',
                          padding: '10px',
                        }}
                      />
                      {passwordError && <p style={{ color: 'red', fontSize: '14px', margin: '0' }}>{passwordError}</p>}
                    </div>
                    <CFormCheck
                      style={{ marginLeft: 0, textAlign: 'left' }}
                      className="mb-3"
                      label="Keep me logged in"
                      onChange={(e) => {
                        console.log(e.target);
                      }}
                    />
                    <CButton
                      onClick={handleRegister}
                      className="mt-3"
                      style={{ width: '370px', height: '50px', marginBottom: '20px', backgroundColor: '#8b54ff', color: '#ffffff', borderRadius: '10px', border: 'none' }}
                    >
                      Sign in
                    </CButton>
                    <p className="text1" style={{ textAlign: 'center', marginTop: '0' }}>or</p>
                    <CButton
                      onClick={handleRegister}
                      className="mt-3"
                      style={{ width: '370px', height: '50px', borderRadius: '10px', border: 'none' }}
                    >
                      Sign in With Google
                    </CButton>

                    <p >Need an account ? Create one </p>

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
