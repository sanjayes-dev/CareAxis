import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from '../assets/axis360/img1.png'
import img2 from '../assets/axis360/img2.png'
import img3 from '../assets/axis360/img3.png'
import img4 from '../assets/axis360/img4.png'
import img5 from '../assets/axis360/img5.png'
import img6 from '../assets/axis360/img6.png'
import img7 from '../assets/axis360/img7.png'
import icon from '../assets/axis360/shield.png'
import check from '../assets/axis360/check.png'
import activity from '../assets/axis360/activity.png'
function Axis360() {
    return (
        <div className='p-3 p-md-4 p-lg-5'>
            {/* care axis 360 section */}
            {/* first row */}
            <div className='row g-3 mb-3'>

                <div className='col-12 col-lg-4'>
                    <p className='fs-1 fw-bold'>CareAxis 360</p>
                    <p className='text-secondary'>Every service around your  <br className="d-none d-sm-block" />treatment, in one place and under  <br className="d-none d-sm-block" /> one care team.</p>
                    <a href="#" style={{ color: "#0B6E7A" }} className="icon-link icon-link-hover text-decoration-none fw-bold mt-2">
                        Explore specialists
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg-4 '>
                    <div className="position-relative  h-100">
                        {/* image */}
                        <img src={img1} alt="Teleconsultation" className="img-fluid w-100 h-100 rounded" style={{ objectFit: "cover" }} />
                        {/* text  */}
                        <div className='position-absolute top-0 start-0 p-3'>
                            <p className='fs-5' style={{ color: "#087e7c", fontWeight: "bold" }}>Teleconsultation</p>
                            <p className='text-secondary'> Expert guidance for bone, <br className="d-none d-sm-block" /> joint and mobility concerns.</p>
                        </div>
                    </div>

                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className="position-relative h-100">
                        {/* img */}
                        <img src={img2} alt="Pharmacy" className="img-fluid w-100 h-100 rounded" style={{ objectFit: "cover" }} />
                        {/* text  */}
                        <div className='position-absolute top-0 start-0 p-3'>
                            <p className='fs-5' style={{ color: "#FFFFFF", fontWeight: "bold" }}>Pharmacy</p>
                            <p className='text-white'> Expert guidance for bone, <br className="d-none d-sm-block" /> joint and mobility concerns.</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* second row */}
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="position-relative h-100">
                        {/* image */}
                        <img src={img3} alt="Home Healthcare" className="img-fluid w-100 h-100 rounded" style={{ objectFit: "cover" }} />
                        {/* text  */}
                        <div className='position-absolute top-0 start-0 p-3'>
                            <p className='fs-5' style={{ color: "#087e7c", fontWeight: "bold" }}>Home Healthcare</p>
                            <p className='text-secondary'> Expert guidance for bone,<br className="d-none d-sm-block" /> joint and mobility concerns.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="position-relative h-100 overflow-hidden">
                        {/* image */}
                        <img src={img4} alt="Diagnostics" className="img-fluid w-100 h-100 rounded" style={{ objectFit: "cover" }} />
                        {/* text  */}
                        <div className='position-absolute top-0 start-0 p-3'>
                            <p className='fs-5' style={{ color: "#087e7c", fontWeight: "bold" }}>Diagnostics</p>
                            <p className='text-secondary'> Expert guidance for bone,<br className="d-none d-sm-block" /> joint and mobility concerns.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="position-relative h-100 overflow-hidden">
                        {/* image */}
                        <img src={img5} alt="" className="img-fluid w-100 h-auto rounded" style={{ objectFit: "cover" }} />
                        {/* text  */}
                        <div className='position-absolute top-0 start-0 p-3'>
                            <p className='fs-5' style={{ color: "#087e7c", fontWeight: "bold" }}>Physiotherapy</p>
                            <p className='text-secondary'> Expert guidance for bone,<br className="d-none d-sm-block" /> joint and mobility concerns.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* third row */}
            <div className="row g-3 mt-2">
                <div className="col-12 col-md-6">
                    <div className="position-relative overflow-hidden rounded">
                        {/* image */}
                        <img src={img6} alt=""  className="img-fluid w-100"style={{ height: "220px", objectFit: "cover" }}/>
                        {/* text  */}
                        <div className='position-absolute top-0 start-0 p-3'>
                            <p className='fs-5' style={{ color: "#087e7c", fontWeight: "bold" }}>Nursing</p>
                            <p className='text-secondary'> Expert guidance for bone, <br className="d-none d-sm-block" /> joint and mobility concerns.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="position-relative  overflow-hidden rounded" >
                        {/* image */}
                        <img src={img7} alt="" className="img-fluid w-100"style={{ height: "220px", objectFit: "cover" }}/>
                        {/* text  */}
                        <div className='position-absolute top-0 start-0 p-3'>
                            <p className='fs-5' style={{ color: "#087e7c", fontWeight: "bold" }}>Chronic and preventive care</p>
                            <p className='text-secondary'> Long-term plans and<br className="d-none d-sm-block" />regular check-ins</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* careaxis verfied section */}
            <div className="row g-3 mt-4">
                <div className="col-12 col-lg-7 rounded-4 p-3 p-md-4 " style={{ backgroundColor: "#F1F7F7" }}>
                    <p className='' style={{ color: "#087e7c", fontWeight: "bold" }}><img src={icon} alt="" />CareAxis verified </p>
                    <p className='fs-2 '>Every provider is checked before they  <br className="d-none d-sm-block" />are listed</p>
                    <p><img src={check} alt="" /> Registration & qualifications <br className="d-none d-sm-block" /><span className='mx-4 text-secondary'>Checked against official records.</span> </p>
                    <hr />
                    <p><img src={check} alt="" /> Hospital affiliations<br className="d-none d-sm-block" /><span className='mx-4 text-secondary'>Confirmed with the hospital.</span> </p>
                    <hr />
                    <p><img src={check} alt="" /> Infrastructure & accreditation <br className="d-none d-sm-block" /><span className='mx-4 text-secondary'>Facilities and certifications reviewed.</span> </p>
                    <hr />

                    <div className='d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2 p-3 ' style={{ backgroundColor: "#FFFFFF", border: ".5px dashed", color: "gray" }}>
                        {/* sponsered section */}
                        <p className='p-2 rounded-5 mb-0 flex-shrink-0 ' style={{ backgroundColor: "#FCEBCB" }}>Sponsored</p>
                        <p className='mb-0'>Any paid visibility is always labelled, and never changes<br className="d-none d-sm-block" /> verification.</p>

                    </div>
                </div>
                <div style={{ backgroundColor: "#0A3F49" }} className="col-12 col-lg rounded-4 p-3 p-md-4">
                    <p className='text-white fw-bold'><img src={activity} alt="" /> CareAxis outcomes</p>
                    <p className='fs-2 text-white'>Results we track and <br className="d-none d-sm-block" /> publish</p>
                    <div className='d-flex flex-wrap gap-4 '>
                        <p className='fs-2 text-white mb-0 '>92% <br className="d-none d-sm-block" /> <span className='text-secondary fs-6'>follow-up compliance</span> </p>
                        <p className=' fs-2 text-white mb-0'>4.7 <br className="d-none d-sm-block" /> <span className='text-secondary fs-6'>patient experience</span></p>

                    </div>
                    <a className='text-white' href="">How we measure this</a>
                    <p className='text-secondary mt-2'>Methodology and definitions are shown on click-through.</p>


                </div>
            </div>
        </div>
    )
}

export default Axis360
