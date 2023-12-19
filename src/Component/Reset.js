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
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

 
 
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

 

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

  const handleReset = () => {

    validatePassword();
    validateConfirmPassword();

    if ( !passwordError && !confirmPasswordError) {
      console.log('Registering user:', {  password, confirmPassword });
     
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
                    <p style={{ fontFamily: 'Alfa Slab One', fontSize: '35px', margin: '0', padding: '0', fontWeight: 'bold', textAlign: 'left' }}>Reset Password</p>
                    <p style={{ fontSize: '20px', textAlign: 'left' }}> Choose  a new password for your account</p>
                  </div>
                  <CForm style={{ textAlign: 'center' }}>
                
                   
                    <div>
                      <CFormInput
                        type="password"
                        id="password"
                        value={password}
                        onBlur={validatePassword}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder=" Your new Password"
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
                        placeholder="Confirm your new password"
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
                      onClick={handleReset}
                      className="mt-3"
                      style={{ width: '370px', height: '50px', marginBottom: '20px', backgroundColor: '#8b54ff', color: '#ffffff', borderRadius: '10px', border: 'none' }}
                    >
                    Reset Password 
                    </CButton>
                    <CButton
                      onClick={handleReset}
                      className="mt-3"
                      style={{ width: '370px', height: '50px', color: '#040308', borderRadius: '10px',   border: '1px solid #040308', backgroundColor:'transparent'  }}
                    >
                      Back to login 
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
