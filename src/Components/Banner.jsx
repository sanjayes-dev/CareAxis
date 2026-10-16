import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import banner from '../assets/banner.png'
import SearchSection from './Search'
function Banner() {
  return (
    <div className='container-fluid px-3 px-lg-4 py-3'>
      {/* banner and image  */}
      <div className="row align-items-stretch">
        {/* text section */}
        <div className="col-12 col-lg-6 rounded" style={{ backgroundColor: "#E2F0EE" }}>
          <div className='p-4 p-lg-4  rounded h-100 d-flex flex-column'>
            <span className=' fw-bold' style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", lineHeight: 1.2 }}>  Right Care,with <br className="d-none d-sm-block" /> guidance at every step.</span>

            <p className="mt-3 mb-0">
              From choosing the right specialist to recovering at <br className="d-none d-lg-block" /> home, a CareAxis Navigator plans every step with <br className="d-none d-lg-block" /> you.
            </p>
            {/* buttons  */}
            <div className='d-flex flex-wrap gap-3 mt-4 '>
              <Button style={{ backgroundColor: "#087e7c", borderColor: "#087e7c" }}>Start Your Care Journey</Button>
              <Button variant='outline-secondary' className='text-black'>Talk to a Navigator </Button>
            </div>
          </div>

        </div>


        <div className="col-12 col-lg-6">
          {/*  image section */}
          <img
            className="rounded w-100 h-100"
            src={banner}
            alt="CareAxis healthcare banner"
            style={{
              objectFit: "cover",
              height: "clamp(280px, 45vw, 644px)"
            }}
          />

        </div>
      </div>
      <SearchSection />
    </div>
  )
}

export default Banner
