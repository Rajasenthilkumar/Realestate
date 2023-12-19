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

const Checkemail = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
 
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };
  
  const Checkemail = () => {

  }
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
                    <p style={{ fontFamily: 'Alfa Slab One', fontSize: '35px', margin: '0', padding: '0', fontWeight: 'bold', textAlign: 'left' }}>Check your Email</p>
                    <p style={{ fontSize: '18px', textAlign: 'left',paddingRight:'50px' }}> We have sent an email With password reset information to n**e@e***e.com.</p>
                  </div>
                  <CForm >
                    <div>
                    <p style={{ fontSize: '18px', textAlign: 'left',paddingRight:'50px',marginLeft: '70px' }}> Didn't receive the email ? check spam or promation folder or </p>

                    </div>      
                    <CButton
                      onClick={Checkemail}
                      className="mt-3"
                      style={{ width: '370px', height: '50px', marginBottom: '20px', backgroundColor: '#3300cc', color: '#ffffff', borderRadius: '10px', border: 'none', fontWeight: 'bold',border: 'none'  }}
                    >
                    Resend  Email 
                    </CButton>
                    <CButton
                      onClick={Checkemail}
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

export default Checkemail;
