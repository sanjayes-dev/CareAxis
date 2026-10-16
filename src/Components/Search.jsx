
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function SearchSection() {
  const [activeTab, setActiveTab] = useState('guidance')
  const [healthNeed, setHealthNeed] = useState('')

  const suggestions = [
    'I have Knee Pain',
    "I'm looking for a spine specialist",
    "I'm travelling to India for treatment"
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!healthNeed.trim()) return

    console.log('Search:', healthNeed)
  }

  return (
    <div id='Findcare'
      className="position-relative px-2 px-md-3"
      style={{ marginTop: '-48px', zIndex: 5 }}
    >
      <div
        className="bg-white border rounded-4 shadow-sm mx-auto overflow-hidden"
        style={{ maxWidth: '1380px' }}
      >

        {/* Tabs */}
        <div className="d-flex border-bottom w-100">
          <button
            type="button"
            onClick={() => setActiveTab('guidance')}
            className={`text-center position-relative flex-fill flex-md-grow-0 px-3 px-md-4 py-3 bg-white border-0 border-end ${activeTab === 'guidance'
                ? 'fw-semibold text-dark'
                : 'text-secondary'
              }`}
          >
            Tell us what you need

            {activeTab === 'guidance' && (
              <span
                className="position-absolute bottom-0 start-0 w-100"
                style={{
                  height: '2px',
                  backgroundColor: '#087e7c'
                }}
              />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('direct')}
            className={` text-center position-relative flex-fill flex-md-grow-0 px-3 px-md-4 py-3 bg-white border-0 ${activeTab === 'direct'
                ? 'fw-semibold text-dark'
                : 'text-secondary'
              }`}
          >
            Search Directly

            {activeTab === 'direct' && (
              <span
                className="position-absolute bottom-0 start-0 w-100"
                style={{
                  height: '2px',
                  backgroundColor: '#087e7c'
                }}
              />
            )}
          </button>
        </div>

        {/* Search content */}
        <div className="p-3 p-md-4">

          <p
            className="mb-1 small"
            style={{ color: '#087e7c' }}
          >
            {activeTab === 'guidance'
              ? 'Not sure where to begin?'
              : 'Know what you are looking for?'}
          </p>

          <h4
            className="fw-normal mb-3"
            style={{ color: '#405965' }}
          >
            {activeTab === 'guidance'
              ? "Tell us what's concerning you."
              : 'Find the care you need.'}
          </h4>

          {/* Input and button */}
          <Form onSubmit={handleSubmit}>
            <div className="d-flex flex-wrap align-items-center gap-2 border rounded-3 p-2 w-100">

              <span
                className="ps-2 text-secondary d-none d-sm-inline"
                aria-hidden="true"
              >
                ⌕
              </span>

              <Form.Control
                type="text"
                value={healthNeed}
                onChange={(e) => setHealthNeed(e.target.value)}
                placeholder={
                  activeTab === 'guidance'
                    ? 'Describe your health need in your own words...'
                    : 'Search doctors, specialties, or treatments...'
                }
                aria-label="Describe your healthcare needs"
                className="border-0 shadow-none flex-grow-1"
                style={{
                  minWidth: '0',
                  flexBasis: '180px',
                  fontSize: '13px'
                }}
              />

              <Button
                type="submit"
                className="border-0 fw-semibold"
                style={{
                  backgroundColor: '#087e7c',
                  whiteSpace: 'nowrap'
                }}
              >
                {activeTab === 'guidance' ? 'Get guidance' : 'Search'}
              </Button>
            </div>
          </Form>

          {/* Suggestions */}
          <div className="d-flex flex-wrap align-items-center gap-2 mt-3">
            <span className="text-secondary small me-1">
              Try saying:
            </span>

            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => setHealthNeed(suggestion)}
                className="border rounded-pill px-2 py-1"
                style={{
                  backgroundColor: '#f1f6f6',
                  color: '#536b74',
                  borderColor: '#e0e8e9',
                  fontSize: '10px'
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Disclaimer */}
          <p
            className="text-secondary mt-3 mb-0"
            style={{ fontSize: '10px', lineHeight: '1.6' }}
          >
            CareAxis supports healthcare navigation and does not replace
            diagnosis or treatment advice from a registered healthcare
            professional. For emergencies, contact your local emergency
            services.
          </p>

        </div>
      </div>
    </div>
  )
}

export default SearchSection
