import React from 'react'
import logo from '../assets/Footer/Logo.png'
function Footer() {
  return (
   <footer className="text-white p-4 p-md-5 mx-auto mt-5"style={{
        backgroundColor: '#0c383e',
        borderRadius: '32px 32px 0 0',
        width: '100%',
        maxWidth: '1240px',
      }}
    >
      {/* Upper Navigation Section */}
      <div className="row g-4 pb-5">
        {/* Logo  */}
        <div className="col-12 col-lg-3 pe-lg-4">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div
              className="d-flex align-items-center justify-content-center text-white"
              style={{
                width: '32px',
                height: '32px',
               
              }}
            >
            <img src={logo} alt="" />
            </div>
            <span
              className="fw-bold"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.45rem',
                letterSpacing: '-0.3px',
              }}
            >
              CareAxis
            </span>
          </div>
              {/* text */}
          <p className="small mb-0"style={{
              color: '#93adb2',
              fontSize: '0.85rem',
              lineHeight: 1.5,
              maxWidth: '200px',
            }}
          >
            Guided care, from first question to full recovery.
          </p>
        </div>

        {/* Links section */}
        <div className="col-12 col-lg-9">
          <div className="row g-4">
            {/* Patients section */}
            <div className="col-6 col-md">
              <h6 className="fw-semibold text-white small mb-3">Patients</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li><a href="#find-care" style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>Find Care</a></li>
                <li><a href="#navigate" style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>Navigate</a></li>
                <li><a href="#second-opinion" style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>Second Opinion</a></li>
              </ul>
            </div>

            {/* Services section*/}
            <div className="col-6 col-md">
              <h6 className="fw-semibold text-white small mb-3">Services</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li><a href="#surgery"style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>Surgery</a></li>
                <li><a href="#careaxis-360"style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>CareAxis 360</a></li>
                <li><a href="#global-care" style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>Global Care</a></li>
              </ul>
            </div>

            {/* Providers section*/}
            <div className="col-6 col-md">
              <h6 className="fw-semibold text-white small mb-3">Providers</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li><a href="#provider-os" style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>Provider OS</a></li>
                <li><a href="#join-network" style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>Join Network</a></li>
              </ul>
            </div>

            {/* Business Health section */}
            <div className="col-6 col-md">
              <h6 className="fw-semibold text-white small mb-3">Business Health</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li><a href="#employee-health" style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>Employee Health</a></li>
                <li><a href="#contact-sales" style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>Contact Sales</a></li>
              </ul>
            </div>

            {/* Company section */}
            <div className="col-6 col-md">
              <h6 className="fw-semibold text-white small mb-3">Company</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li><a href="#about" style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>About</a></li>
                <li><a href="#governance" style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>Governance</a></li>
                <li><a href="#careers" style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>Careers</a></li>
                <li><a href="#contact" style={{color: '#93adb2',fontSize: '0.825rem',textDecoration: 'none',display: 'inline-block',cursor: 'pointer'}}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div style={{width: '100%',height: '1px',backgroundColor: 'rgba(255, 255, 255, 0.12)',}}
      />

      {/* Bottom  section*/}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4 small">
        <p className="mb-2 mb-sm-0" style={{ color: '#76949a', fontSize: '0.8rem' }}
        >
          &copy; CareAxis Health.
        </p>

        <div className="d-flex gap-4">
          <a href="#privacy" style={{ color: '#76949a',fontSize: '0.8rem',textDecoration: 'none',cursor: 'pointer',}}>Privacy</a>
          <a href="#terms" style={{ color: '#76949a',fontSize: '0.8rem',textDecoration: 'none',cursor: 'pointer',}}>Terms</a>
          <a href="#clinical-governance" style={{ color: '#76949a',fontSize: '0.8rem',textDecoration: 'none',cursor: 'pointer',}}>Clinical governance</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
