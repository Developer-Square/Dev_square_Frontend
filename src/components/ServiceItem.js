import React from 'react';
import Col from 'react-bootstrap/Col';

import './ServicesAndBlog.scss'

function ServiceItem(props) {
  
  {/* props for image, title, description classname and array of offerings*/ }
  return (
    <Col xs={12} sm={6} className="service-container">
      <div className="service-title d-flex justify-content-center">
        <img src={props.image1} alt="services" className="img-fluid" />
        <img src={props.image2} alt="services" className="service-icon img-fluid" />
        <p className="title my-auto">{props.title}</p>
      </div>
      <div className={`${props.classname} p-3`}>
        <p>{props.description}</p>
        <ul>
          { props.offering?  props.offering.map( item => (<li>{item}</li>)) : null}
        </ul>
      </div>
    </Col>
  );
}

export default ServiceItem;