import React, { useState } from 'react';

import {
  CButton,
  CCard,
  CCardBody,
  CContainer, // Add this line to import CContainer
  CRow,      // Add this line to import CRow
  CForm,
  CFormLabel,
  CFormInput,
} from '@coreui/react';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Implement your registration logic and validation here
    console.log('Registering user:', { fullName, email, phone, password, confirmPassword });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
       
      }}
    >
      <div>
        <CContainer style={{ textAlign:'center'}} >
          <CRow style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CCard className="p-4 text-center">
              <CCardBody>
                <div>
                  <h1 className="mb-4">Evoltec</h1>
                  <p className="text-muted">---EVOLVING TECHNOLOGIES---</p>
                </div>
                {/* Rest of your registration form */}
              </CCardBody>
            </CCard>
          </CRow>
          <CRow>
            <CCard className="p-4" style={{ backgroundColor: '#f0f0f0', padding: '10px', width: '500px' }}>
              <CCardBody>
                <div>
                <div style={{ alignItems:'left'}}> 
                <h2 style={{ alignItems:'left'}}>Register</h2>
                   <p >Please register to create your account.</p>
      </div>
                  <CForm style={{ backgroundColor: '#f0f0f0' }}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        style={{ width: '350px',height:'40px',margin:'15px' }}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormInput
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                        style={{ width: '350px',height:'40px',margin:'15px' }}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormInput
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                        style={{ width: '350px',height:'40px',margin:'15px' }}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormInput
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        style={{ width: '350px',height:'40px',margin:'15px' }}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormInput
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password"
                        style={{ width: '350px',height:'40px',margin:'15px' }}
                      />
                    </div>
                    <CButton onClick={handleRegister} color="primary" className="mt-3"   style={{ width: '350px',height:'40px',margin:'15px' }}>
                      Register
                    </CButton>
                    
                    <CButton onClick={handleRegister} color="primary" className="mt-3"   style={{ width: '350px',height:'40px',margin:'15px' }}>
                    Have an account? Sign in
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
