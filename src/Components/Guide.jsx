import React from 'react'
import check from '../assets/check.png'
import { Button } from 'react-bootstrap'
import mark from '../assets/Dot.png'
function Guide() {
  return (
    <div className='container-fluid ' style={{ backgroundColor: "#E2F0EE" }}>
      <div className="row g-4 p-3 p-md-5">
        {/* left main side */}
        <div className="col-12 col-lg-6">
          {/* heading */}
          <p style={{ color: "#087e7c", fontWeight: "bold" }}>Your Human Guide</p>
          <p className='fs-1'>What Your Care Navigator <br className="d-none d-md-block" /> Does</p>
          <p className='text-secondary'>A named person who handles the coordination, so you<br className="d-none d-md-block" /> can focus on getting better.</p>
          {/* points */}
          <div className="row row-cols-2 g-2">
            {/* left side points */}
            <div className="col">

              <p> <img src={check} alt="" /><span className='mx-2'>Report Review</span></p>
              <p> <img src={check} alt="" /><span className='mx-2'>Specialist selection</span></p>
              <p> <img src={check} alt="" /><span className='mx-2'>Hospital comparison</span></p>
              <p> <img src={check} alt="" /><span className='mx-2'>Cost estimates</span></p>
            </div>
            {/* right side points */}
            <div className="col">
              <p> <img src={check} alt="" /><span className='mx-2'>Insurance guidance</span></p>
              <p> <img src={check} alt="" /><span className='mx-2'>Admission support</span></p>
              <p> <img src={check} alt="" /><span className='mx-2'>Discharge planning</span></p>
              <p> <img src={check} alt="" /><span className='mx-2'>Follow-up care</span></p>
            </div>
          </div>
          <Button style={{ backgroundColor: "#087e7c" }}>Talk to a Navigator</Button>
        </div>
        {/* right main side */}
        <div className="col-12 col-lg-6">
          <div className='rounded-3 shadow w-100' style={{ backgroundColor: "#FFFFFF" }}>
            {/* heading */}
            <div className='d-flex justify-content-between p-3'>
              <p className='fs-5 fw-bold'>Your Care Plan</p>
              <p className='rounded-5 px-3' style={{ backgroundColor: "#FCEBCB" }}>Preview</p>
            </div>
            {/* stepper */}
            <div className='p-2 p-md-3'>
              {/* stepper 1 */}
              <div className="d-flex gap-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{ width: "35px", height: "35px", backgroundColor: "#D5E3E5" }} >
                    <img src={mark} alt="" />
                  </div>
                  <div style={{ width: "2px", height: "45px", backgroundColor: "#D5E3E5" }}
                  ></div>
                </div>

                <div>
                  <p className="fw-bold mb-1">Reports reviewed</p>
                  <p className="text-secondary small">
                    Shared with your Navigator
                  </p>
                </div>
              </div>
              {/* stepper 2 */}
              <div className="d-flex gap-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{ width: "35px", height: "35px", backgroundColor: "#D5E3E5" }}>
                    <img src={mark} alt="" />
                  </div>
                  <div style={{ width: "2px", height: "45px", backgroundColor: "#D5E3E5" }}
                  ></div>
                </div>

                <div>
                  <p className="fw-bold mb-1">Specialists shortlisted</p>
                  <p className="text-secondary small">
                    Two matches for your condition
                  </p>
                </div>
              </div>
              {/* stepper 3 */}
              <div className="d-flex gap-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{ width: "35px", height: "35px", backgroundColor: "#D5E3E5" }}>
                    <img src={mark} alt="" />
                  </div>
                  <div style={{ width: "2px", height: "45px", backgroundColor: "#D5E3E5" }}> </div>
                </div>

                <div>
                  <p className="fw-bold mb-1">Hospital comparison</p>
                  <p className="text-secondary small">
                    In progress
                  </p>
                </div>
              </div>
              {/* stepper 4 */}
              <div className="d-flex gap-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{ width: "35px", height: "35px", backgroundColor: "#D5E3E5" }}>
                    <img src={mark} alt="" />
                  </div>
                  <div
                    style={{ width: "2px", height: "45px", backgroundColor: "#D5E3E5" }}></div>
                </div>

                <div>
                  <p className="fw-bold mb-1">Cost estimate and insurance check</p>
                  <p className="text-secondary small">
                    Next
                  </p>
                </div>
              </div>
              {/* stepper 5 */}
              <div className="d-flex gap-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{ width: "35px", height: "35px", backgroundColor: "#D5E3E5" }}>
                    <img src={mark} alt="" />
                  </div>
                  {/* line */}
                  <div style={{ width: "2px", height: "45px", backgroundColor: "#D5E3E5" }}></div>
                </div>

                <div>
                  <p className="fw-bold mb-1">Admission and procedure</p>
                  <p className="text-secondary small">
                    Planned
                  </p>
                </div>
              </div>
              {/* stepper 6 */}
              <div className="d-flex gap-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{ width: "35px", height: "35px", backgroundColor: "#D5E3E5" }}>
                    <img src={mark} alt="" />
                  </div>

                </div>

                <div>
                  <p className="fw-bold mb-1">Discharge and follow-up</p>
                  <p className="text-secondary small">
                    Planned
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide
