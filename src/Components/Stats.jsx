import React from 'react'

function Stats() {
      return (
            // stats
            // outer container
            <div className='container-fluid px-3 px-md-5 py-4 py-md-5' style={{ backgroundColor: "#E2F0EE" }}>
                  {/* inner container */}
                  <div className="bg-white rounded-3 p-3 p-md-4">
                        <div className="d-flex flex-wrap flex-lg-nowrap text-center align-items-center ">
                              <div  className='flex-fill text-center'>
                                    <p className="mb-0"><span className='fs-1 fw-semibold'>500+</span> <br /> <span className='text-secondary'>Verified specialists</span></p>
                              </div>
                              {/* vertical line */}
                              <div className="vr border-4 text-secondary opacity-100 d-none d-lg-block mx-4 mx-xl-5"></div>
                              <div className='flex-fill text-center'>
                                    <p><span className='fs-1 fw-semibold'>10</span> <br /> <span className='text-secondary'>partner hosptials</span></p>
                              </div>
                              <div className="vr border-4 text-secondary opacity-100 d-none d-lg-block mx-4 mx-xl-5"></div>
                              <div className='flex-fill text-center'>
                                    <p><span className='fs-1 fw-semibold'>1200+</span> <br /> <span className='text-secondary'>Patients guided</span></p>
                              </div>
                              <div className="vr border-4 text-secondary opacity-100 d-none d-lg-block mx-4 mx-xl-5"></div>
                              <div className='flex-fill text-center'>
                                    <p><span className='fs-1 fw-semibold'>6</span> <br /> <span className='text-secondary'>Core services live</span></p>
                              </div>


                        </div>


                  </div>
            </div>

      )
}

export default Stats
