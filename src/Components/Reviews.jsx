import React from 'react'
import img1 from '../assets/review/img1.png'
import img2 from '../assets/review/img2.png'
import img3 from '../assets/review/img3.png'
import icon1 from '../assets/review/icon1.png'
import icon2 from '../assets/review/icon2.png'
import icon3 from '../assets/review/icon3.png'
import icon4 from '../assets/review/icon4.png'
import img4 from '../assets/review/img4.png'
import { Button } from 'react-bootstrap'

function Reviews() {
    return (
        <div id='Review' className='container-fluid px-4 px-lg-5'>
            {/* heading */}
            <p className='fs-1 fw-bold text-center'>Patients tell it best</p>
            <p className='text-secondary text-center'>Every service around your treatment, in one place and under <br /> one care team.</p>
            {/* reviews */}
            <div className="row  g-4 align-items-stretch">
                <div className="col-12 col-lg-6">
                    <div className="p-4 rounded-4 h-100" style={{ backgroundColor: "#F1F7F7" }}>
                        <img src={img2} alt="" style={{
                            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                        }} />
                        <p>“Progesterone helped my chronically itchy <br /> ear — and I was delighted my Midi visit <br /> and HRT were covered by my insurance.”</p>
                        <p className='fw-bold'>Lindsay W</p>
                        <img src={img2} alt="" />
                        <p>“I felt so alone. Then my Midi clinician <br /> listened to my experience. When she said, <br /> 'I believe you,' it meant everything.”</p>
                        <p className='fw-bold'>Jennifer S.</p>
                        <img src={img3} alt="" />
                        <p style={{
                            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
                        }}>"i white-knuckled it for 8 years with Midi <br /> i've lost 70 pounds,sleep like a baby,and  <br />look in the mirror - she's back. "</p>
                    </div>

                </div>
                <div className="col-12 col-lg-6">
                    {/* video */}
                    <div className="position-relative h-100">
                        <img src={img1} alt="" className="w-100 h-100 d-block rounded-3 " style={{ objectFit: "cover", minHeight: "300px" }} />
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="position-absolute bottom-0 end-0">
                            <img src={icon2} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            {/* provider network and provider os section */}
            <div id='Providers' className=' mt-4 mb-4'>
                <div className="row g-4">
                    <div className="col-12 col-lg-6">
                        <div className='border rounded-3 p-4 p-lg-5 h-100'>
                            <img src={icon3} alt="" />
                            <p className='fs-2 fw-bold'>Join our provider network</p>
                            <p className='text-secondary'>Verification, referrals and an outcomes  <br />partnership.</p>
                            <Button style={{ color: "#0D2B36", backgroundColor: "#FFFFFF", border: "1px solid #0D2B36" }} className='px-4 py-2'>Join network</Button>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="rounded-3 p-4 p-lg-5 h-100" style={{ backgroundColor: "#0A3F49" }}>
                            <img src={icon4} alt="" />
                            <p className='fs-2 fw-bold text-white'>CareAxis Provider OS</p>
                            <p className='text-white-50'> Appointments, EMR, billing, teleconsultation and <br />CRM in one system.</p>
                            <Button style={{ color: "#0D2B36", backgroundColor: "#FFFFFF", border: "1px solid #0D2B36" }} className='px-4 py-2'>Request demo</Button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Where to start section */}
            <div className="rounded-4 mt-4 position-relative">

                <img src={img4} alt="" className="rounded-4 w-100 d-block"
                    style={{ height: "340px", objectFit: "cover" }}
                />

                <div className="position-absolute top-50 start-50 translate-middle text-center w-100 px-3">

                    <p className="fs-1 text-white fw-semibold mb-2">
                        Not sure where to start?
                    </p>

                    <p className="text-white mb-3 ">
                        Talk to CareAxis. A Navigator can help you find the right next step.
                    </p>

                    <Button className="rounded-3 border-0 text-dark fw-bold" style={{ backgroundColor: "#FFFFFF" }} >
                        Talk to a Navigator
                    </Button>

                </div>
            </div>

        </div>

    )
}

export default Reviews
