import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <h1 className="thq-heading-1 p-10">Advantages of a water heat pump over a geyser:</h1>
      <div className="features2-container2 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 0 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 1 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal3"
          >
            <div className="features2-divider-container3">
              {activeTab === 2 && <div className="features2-container5"></div>}
            </div>
            <div className="features2-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(3)}
            className="features2-tab-horizontal4"
          >
            <div className="features2-divider-container4">
              {activeTab === 3 && <div className="features2-container6"></div>}
            </div>
            <div className="features2-content4">
              <h2 className="thq-heading-2">{props.feature4Title}</h2>
              <span className="thq-body-small">
                {props.feature4Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(4)}
            className="features2-tab-horizontal5"
          >
            <div className="features2-divider-container5">
              {activeTab === 4 && <div className="features2-container7"></div>}
            </div>
            <div className="features2-content5">
              <h2 className="thq-heading-2">{props.feature5Title}</h2>
              <span className="thq-body-small">
                {props.feature5Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image3 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 3 && (
            <img
              alt={props.feature4ImgAlt}
              src={props.feature4ImgSrc}
              className="features2-image4 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 4 && (
            <img
              alt={props.feature5ImgAlt}
              src={props.feature5ImgSrc}
              className="features2-image5 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature3Description: 'Durable components with extended warranty.',
    // 'Built to last, our water heater pumps are made from high-quality materials ensuring durability and longevity.',
  feature1ImgAlt: 'Energy Efficient Water Heater Pump',
  feature1Description: 'Uses ambient air, reducing electricity usage by up to 70%',
    // 'Our water heater pumps are designed to be energy efficient, helping you save on electricity costs.',
  feature3ImgAlt: 'Longer Lifespan Water Heater Pump',
  feature2Title: 'Eco-Friendly',
  feature1Title: 'Energy Efficient',
  feature1ImgSrc:
    '/assets/diff.jpg',
  feature3ImgSrc:
    '/assets/diff.jpg',
  feature2Description: 'Lower CO₂ emissions.',
    // 'Integrate smart technology into your water heating system with our advanced pumps for better control and efficiency.',
  feature3Title: 'Longer Lifespan',
  feature2ImgAlt: 'Longer Lifespan Water Heater Pump',
  feature2ImgSrc:
    '/assets/diff.jpg',

  feature4Description: 'No direct electrical heating elements in water.',
  feature4Title: 'Safety',
  feature4ImgAlt: 'Safety Water Heater Pump',
  feature4ImgSrc:
    '/assets/diff.jpg',
  feature5Description: 'Performs better in varying climate conditions.',
  feature5Title: 'Consistent Hot Water',
  feature5ImgAlt: 'Consistent Hot Water Water Heater Pump',
  feature5ImgSrc:
    '/assets/diff.jpg',
}

Features2.propTypes = {
  feature3Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  
  feature4Description: PropTypes.string,
  feature4Title: PropTypes.string,
  feature4ImgAlt: PropTypes.string,
  feature4ImgSrc: PropTypes.string,
  feature5Description: PropTypes.string,
  feature5Title: PropTypes.string,
  feature5ImgAlt: PropTypes.string,
  feature5ImgSrc: PropTypes.string,
}

export default Features2
