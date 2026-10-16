import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bg1 from '../assets/expertise images/Background1.png'
import bg2 from '../assets/expertise images/Background2.png'
import bg3 from '../assets/expertise images/Background3.png'
import bg4 from '../assets/expertise images/Background4.png'
import { FaArrowRightLong } from "react-icons/fa6";

function Expertise() {
  return (
    <div id='Services' className='p-3 p-md-4 p-lg-5'>
      {/* Heading */}
      <p style={{ color: "#087e7c", fontWeight: "bold" }}>Focused expertise</p>
      <p className='fs-1'>Spcialised care,with the <br className="d-none d-md-block" /> right guidance.</p>
      <p className='text-secondary'>Starting with focused pathways in Kerala, built around the conditions <br className="d-none d-md-block" /> where continuity and recovery matter most.</p>
      {/* cards */}
      <div className="row g-3 g-md-4 mb-4 mb-md-5">
        <div className="col-12 col-sm-6 col-lg-3">
          <Card className='rounded-3 h-100 overflow-hidden'>
            <Card.Img variant="top" src={bg1} style={{ height: "180px", objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Orthopaedics</Card.Title>
              <Card.Text>
                Expert guidance for bone, joint and mobility concerns.
              </Card.Text>
              <a href="#" style={{ color: "#0B6E7A" }} className="icon-link icon-link-hover text-decoration-none fw-bold mt-auto">
                Explore specialists
                <FaArrowRightLong />
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <Card className='rounded-3 h-100 overflow-hidden'>
            <Card.Img variant="top" src={bg2} style={{ height: "180px", objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Spine Care</Card.Title>
              <Card.Text>
                Robotic total knee, anterior hip replacement,
                and complex osteotomy.
              </Card.Text>
              <a href="#" style={{ color: "#0B6E7A" }} className="icon-link icon-link-hover text-decoration-none fw-bold mt-auto">
                Explore specialists
                <FaArrowRightLong />
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <Card className='rounded-3 h-100 overflow-hidden'>
            <Card.Img variant="top" src={bg3} style={{ height: "180px", objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Sports Medicine</Card.Title>
              <Card.Text>
                Robotic total knee, anterior hip
                replacement, and complex osteotomy.
              </Card.Text>
              <a href="#" style={{ color: "#0B6E7A" }} className="icon-link icon-link-hover text-decoration-none fw-bold mt-auto">
                Explore specialists
                <FaArrowRightLong />
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <Card className='rounded-3 h-100 overflow-hidden'>
            <Card.Img variant="top" src={bg4} style={{ height: "180px", objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Rehabilitation</Card.Title>
              <Card.Text>
                Robotic total knee, anterior hip
                replacement, and complex osteotomy.
              </Card.Text>
              <a href="#" style={{ color: "#0B6E7A" }} className="icon-link icon-link-hover text-decoration-none fw-bold mt-auto">
                Explore specialists
                <FaArrowRightLong />
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* surgary pathway */}
      <div className='mt-4 mt-md-5 p-3 p-md-4 p-lg-5 rounded-3' style={{ backgroundColor: "#E2F0EE" }}>

        <p className='fw-bold fs-2 text-center'>The surgery pathway</p>
        <p className='text-secondary text-center mb-0'>If surgery is on the table, this is how we take you through it.</p>

        {/* Stepper */}
        <div className="mt-4 p-0 p-md-2 p-lg-3 ">
          <div className="d-flex flex-column flex-lg-row w-100 align-items-stretch align-items-lg-start">

            {/* Step 1 */}
            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start flex-grow-1">

              <div className="d-flex flex-column align-items-center text-center"style={{ width: "100%", maxWidth: "150px", flexShrink: 0 }} >
                {/* Circle */}
                <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                  style={{ width: "55px", height: "55px", backgroundColor: "#FFFFFF", border: "1.5px solid #0B6E7A", color: "#0B6E7A" }}>
                  1
                </div>

                {/* Text */}
                <p className="fw-bold mt-3 mb-1">
                  Specialist
                </p>
                <p className="text-secondary small mb-0 lh-sm">
                  Tell us what is going on.
                </p>
              </div>

              {/* Connecting line */}
              <div className="flex-grow-1 d-none d-lg-block" style={{ height: "2px", backgroundColor: "#0B6E7A", marginTop: "27px" }} />
            </div>
            {/* Step 2 */}
            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start flex-grow-1">

              <div className="d-flex flex-column align-items-center text-center"style={{ width: "100%", maxWidth: "150px", flexShrink: 0 }} >
                {/* Circle */}
                <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                  style={{ width: "55px", height: "55px", backgroundColor: "#FFFFFF", border: "1.5px solid #0B6E7A", color: "#0B6E7A" }}>
                  2
                </div>

                {/* Text */}
                <p className="fw-bold mt-3 mb-1">
                  Opinion
                </p>
                <p className="text-secondary small mb-0 lh-sm">
                  Get matched with the right doctors.
                </p>
              </div>

              {/* Connecting line */}
              <div className="flex-grow-1 d-none d-lg-block" style={{ height: "2px", backgroundColor: "#0B6E7A", marginTop: "27px" }} />
            </div>
            {/* Step 3 */}
            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start flex-grow-1">

              <div className="d-flex flex-column align-items-center text-center"style={{ width: "100%", maxWidth: "150px", flexShrink: 0 }} >
                {/* Circle */}
                <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                  style={{ width: "55px", height: "55px", backgroundColor: "#FFFFFF", border: "1.5px solid #0B6E7A", color: "#0B6E7A" }}>
                  3
                </div>

                {/* Text */}
                <p className="fw-bold mt-3 mb-1">
                  Hospital & estimate
                </p>
                <p className="text-secondary small mb-0 lh-sm">
                  Compare hospitals, costs and cover.
                </p>
              </div>

              {/* Connecting line */}
              <div className="flex-grow-1 d-none d-lg-block" style={{ height: "2px", backgroundColor: "#0B6E7A", marginTop: "27px" }} />
            </div>
            {/* Step 4 */}
            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start flex-grow-1">

              <div className="d-flex flex-column align-items-center text-center"style={{ width: "100%", maxWidth: "150px", flexShrink: 0 }} >
                {/* Circle */}
                <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                  style={{ width: "55px", height: "55px", backgroundColor: "#FFFFFF", border: "1.5px solid #0B6E7A", color: "#0B6E7A" }}>
                  4
                </div>

                {/* Text */}
                <p className="fw-bold mt-3 mb-1">
                  Insurance
                </p>
                <p className="text-secondary small mb-0 lh-sm">
                  Admission through to procedure.
                </p>
              </div>

              {/* Connecting line */}
              <div className="flex-grow-1 d-none d-lg-block" style={{ height: "2px", backgroundColor: "#0B6E7A", marginTop: "27px" }} />
            </div>
            {/* Step 5 */}
            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start flex-grow-1">

              <div className="d-flex flex-column align-items-center text-center"style={{ width: "100%", maxWidth: "150px", flexShrink: 0 }} >
                {/* Circle */}
                <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                  style={{ width: "55px", height: "55px", backgroundColor: "#FFFFFF", border: "1.5px solid #0B6E7A", color: "#0B6E7A" }}>
                  5
                </div>

                {/* Text */}
                <p className="fw-bold mt-3 mb-1">
                  Procedure
                </p>
                <p className="text-secondary small mb-0 lh-sm">
                  Rehab and follow-up, at home.
                </p>
              </div>

              {/* Connecting line */}
              <div className="flex-grow-1 d-none d-lg-block" style={{ height: "2px", backgroundColor: "#0B6E7A", marginTop: "27px" }} />
            </div>
            {/* Step 6 */}
            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start flex-grow-1">

              <div className="d-flex flex-column align-items-center text-center"style={{ width: "100%", maxWidth: "150px", flexShrink: 0 }} >
                {/* Circle */}
                <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                  style={{ width: "55px", height: "55px", backgroundColor: "#0B6E7A", border: "1.5px solid #0B6E7A", color: "#FFFFFF" }}>
                  6
                </div>

                {/* Text */}
                <p className="fw-bold mt-3 mb-1">
                  Rehabilitation
                </p>
                <p className="text-secondary small mb-0 lh-sm">
                  Ongoing and preventive care.
                </p>
              </div>


            </div>

          </div>
        </div>
        {/* button */}
        <div className='text-center mt-3'>
          <Button style={{ backgroundColor: "#0B6E7A" }} >Talk to a Surgery Navigator</Button>
        </div>

      </div>
    </div>


  )
}

export default Expertise
