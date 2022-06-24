import React from 'react';
import Col from 'react-bootstrap/Col';

import './ServicesAndBlog.scss'

export default function ServiceItem({ img1, img2, title, description, descClass, imgClass }) {

  return (
    <Col xs={12} sm={6} className="service-container">
      <div className="service-title d-flex justify-content-center">
        <img src={`images/${img1}.webp`} alt="services" className="img-fluid" />
        <img src={img2} alt="services" className={`${imgClass} img-fluid`} />
        <p className="title my-auto">{title}</p>
      </div>
      <div className={`${descClass} p-3`}>
        <p>{description}</p>
      </div>
    </Col>
  );
}

