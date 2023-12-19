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
 
  const handleForget = () => {
    validateEmail();
   
    if (!emailError) {
      console.log('Registering user:', {email});
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
                    <p style={{ fontFamily: 'Alfa Slab One', fontSize: '35px', margin: '0', padding: '0', fontWeight: 'bold', textAlign: 'left' }}>Forgot  Password</p>
                    <p style={{ fontSize: '18px', textAlign: 'left',paddingRight:'50px' }}>Enter the email you used to create your account so we can send  your instructions on how to reset your password.</p>
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
                    <CButton
                      onClick={handleForget}
                      className="mt-3"
                      style={{ width: '370px', height: '50px', marginBottom: '20px', backgroundColor: '#3300cc', color: '#ffffff', borderRadius: '10px', border: 'none', fontWeight: 'bold',border: 'none'  }}
                    >
                    Send
                    </CButton>
                    <CButton
                      onClick={handleForget}
                      className="mt-3"
                      style={{ width: '370px', height: '50px', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px',backgroundColor:'transparent' ,border: '1px solid#040308 ', }}
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
