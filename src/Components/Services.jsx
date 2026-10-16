import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
function Services() {
  return (
    <div className='container-fluid px-3 px-md-5 py-4'>
      {/* heading */}
      <p className='fw-bold fs-3 mb-4'>Get started with a core Service</p>
      {/* cards */}
      <div className="row g-3">
        <div className="col text-center">
          <img src={img1} alt="service1" className="img-fluid" />
          <p className='mt-2 mb-0'>Find a Doctor</p>
        </div>
        <div className="col text-center">
          <img src={img2} alt="service2" className="img-fluid" />
          <p className='mt-2 mb-0'>Find a Hospital</p>
        </div>
        <div className="col text-center">
          <img src={img3} alt="service 3" className="img-fluid" />
          <p className='mt-2 mb-0'>Second Opinion</p>
        </div>
        <div className="col text-center">
          <img src={img4} alt=" service 4" className="img-fluid" />
          <p className='mt-2 mb-0'>Talk to a Navigator</p>
        </div>
        <div className="col text-center">
          <img src={img5} alt="service 5" className="img-fluid" />
          <p className='mt-2 mb-0'>Book a lab test</p>
        </div>
        <div className="col text-center">
          <img src={img6} alt="service 6" className="img-fluid" />
          <p className='mt-2 mb-0'>Order medicine</p>
        </div>
        <div className="col text-center">
          <img src={img7} alt="service 7" className="img-fluid" />
          <p className='mt-2 mb-0'>Home & Recovery</p>
        </div>
      </div>
    </div>
  )
}

export default Services
