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
import success from '../assets/images/Frame 27.png'
const Resetsucces = () => {
  
  
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
          <CCard className="p-4" style={{ width: '500px', borderRadius: '20px',   }}>
            <CCardBody>
              <div>
              <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <img
              src={success}
              alt="success conformation"
              style={{ width: '125px', height: '125px' }}
            />
          </div>
                <div style={{ marginLeft: '70px' }}>
                <p style={{ fontSize: '22px', textAlign: 'left',paddingRight:'50px', fontWeight: 'bold',textAlign: 'Center',marginBottom: '50px',  }}> Password reset successfully </p>
                  </div>
                  <CForm >
                    <CButton
                      onClick={Resetsucces}
                      className="mt-3"
                      style={{ width: '370px', height: '50px', backgroundColor: '#3300cc', color: '#ffffff', borderRadius: '10px', border: 'none', fontWeight: 'bold',border: 'none'  }}
                    >
                    Login
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

export default Resetsucces;
