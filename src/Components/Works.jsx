import React from 'react'
import Card from 'react-bootstrap/Card';
import icon from '../assets/Person.png'
function Works() {
  return (
    <div>
      {/* heading */}
      <div id='CareAxis Works' className='text-center mt-5 px-3 '>
        <p style={{ color: "#087e7c", fontWeight: "bold" }}>How CareAxis works</p>
        <p className='fs-1 fw-bold'>Your healthcare journey,guided</p>
        <p className='text-secondary'>we connect every step,so you spend less time figuring out healthcare<br className="d-none d-md-block" />
          and more time focused on getting better.
        </p>


      </div>
      {/* cards  */}
      <div className='container my-5'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6 g-3">
          <div className="col">

            <Card className="h-100">
              <Card.Body>
                <div className='mb-5 text-secondary'>
                  01
                </div>
                <img src={icon} alt="" className="img-fluid mb-2" />
                <Card.Title>Discover</Card.Title>
                <Card.Text>
                  Understand your health need and find the right direction.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">

            <Card className="h-100">
              <Card.Body>
                <div className='mb-5 text-secondary'>
                  02
                </div>
                <img src={icon} alt="" className="img-fluid mb-2" />
                <Card.Title>Navigate</Card.Title>
                <Card.Text>
                  Get personalised guidance and connect with the right specialist.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">

            <Card className="h-100">
              <Card.Body>
                <div className='mb-5 text-secondary'>
                  03
                </div>
                <img src={icon} alt="" className="img-fluid mb-2" />
                <Card.Title>Plan</Card.Title>
                <Card.Text>
                  Review reports, options, second opinions, hospitals and estimates.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">

            <Card className="h-100">
              <Card.Body>
                <div className='mb-5 text-secondary'>
                  04
                </div>
                <img src={icon} alt="" className="img-fluid mb-2" />
                <Card.Title>Treat</Card.Title>
                <Card.Text>
                  Coordinate appointments, admission, insurance and treatment.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">

            <Card className="h-100">
              <Card.Body>
                <div className='mb-5 text-secondary'>
                  05
                </div>
                <img src={icon} alt="" className="img-fluid mb-2" />
                <Card.Title>Recover</Card.Title>
                <Card.Text>
                  Access rehabilitation, medicines, home care and follow-up.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">

            <Card className="h-100">
              <Card.Body>
                <div className='mb-5 text-secondary'>
                  06
                </div>
                <img src={icon} alt="" className="img-fluid mb-2" />
                <Card.Title>Stay Healthy</Card.Title>
                <Card.Text>
                  Continue with preventive care and long-term support.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Works
