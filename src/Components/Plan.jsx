import React from 'react'
import icon1 from '../assets/plan/icon1.png'
import icon2 from '../assets/plan/icon2.png'
import icon3 from '../assets/plan/icon3.png'
import icon4 from '../assets/plan/icon4.png'
import icon5 from '../assets/plan/icon5.png'
import map from '../assets/plan/Global network.png'
import { Button } from 'react-bootstrap'
function Plan() {
    return (
        <div className='container-fluid mb-5 p-3 p-md-4 p-lg-5' style={{ backgroundColor: "#F1F7F7" }}>
            <div className='d-flex flex-column flex-lg-row align-items-start gap-4'>
                {/* right side  */}
                <div className='rounded-3 p-3 p-md-4 p-lg-5 flex-grow-1' style={{ backgroundColor: "#FFFFFF",minWidth: 0  }}>
                    <p className='fs-1 fw-bold'>Plan treatment in India from<br className="d-none d-md-block" />anywhere</p>
                    <p className='text-secondary'>Share your records from abroad and get a treatment<br className="d-none d-md-block" /> plan before you travel.</p>
                    {/* services */}
                    <div className="row g-2">
                        <div className="col-12 col-sm-6">
                            <hr />
                            <p className="d-flex align-items-start gap-2"
                            ><img src={icon1} alt="" style={{ width: 24, flexShrink: 0 }} />
                            <span>Medical record review</span></p>
                        </div>
                        <div className="col-12 col-sm-6">
                            <hr />
                            <p className="d-flex align-items-start gap-2"><img src={icon4} alt=""  style={{ width: 24, flexShrink: 0 }}/><span>International estimates</span></p>
                        </div>
                    </div>
                    <div className="row g-2">
                        <div className="col-12 col-sm-6">
                            <hr />
                            <p className="d-flex align-items-start gap-2"><img src={icon2} alt=""  style={{ width: 24, flexShrink: 0 }}/><span>Visa & travel support</span></p>
                        </div>
                        <div className="col-12 col-sm-6">
                            <hr />
                            <p className="d-flex align-items-start gap-2"><img src={icon5} alt=""  style={{ width: 24, flexShrink: 0 }}/><span>Admission coordination</span></p>
                        </div>
                    </div>
                    <div className='row g-2'>
                        <div className="col-12 col-sm-6">
                            <hr />
                            <p className="d-flex align-items-start gap-2"><img src={icon3} alt=""  style={{ width: 24, flexShrink: 0 }}/><span >Cross-border follow-up</span></p>
                        </div>
                    </div>
                    <div  className="d-flex flex-column flex-sm-row gap-2 mt-3">
                         <Button style={{ backgroundColor: "#0B6E7A", color: "#FFFFFF" }}>Request Treatment Plan</Button>
                    <Button  style={{ backgroundColor: "#FFFFFF", color: "#0D2B36", border: "1px solid #0D2B36" }}>Talk to a Navigator</Button>
                    </div>
                   
                </div>
                {/* left side */}
                <div className="text-center flex-shrink-0 w-100 w-lg-auto" style={{ maxWidth: "600px" }}>
                    <img src={map} alt="" className='img-fluid' style={{
      width: "600px",
      maxWidth: "100%",
      height: "570px"
    }} />
                </div>
            </div>

        </div>
    )
}

export default Plan
