import React from 'react';
import './DoctorsGallery.css';
import { Col, Container, Row } from 'react-bootstrap';
import doctor1 from '../../../images/Doctor/doctor-1.jpg';
import doctor2 from '../../../images/Doctor/doctor-2.jpg';
import doctor3 from '../../../images/Doctor/doctor-3.jpg';
import doctor4 from '../../../images/Doctor/doctor-4.jpg';
import doctor5 from '../../../images/Doctor/doctor-5.jpg';
import doctor6 from '../../../images/Doctor/doctor-6.jpg';
import doctor7 from '../../../images/Doctor/doctor-7.jpg';

const DoctorsGallery = () => {
    return (
        <div className='doctor-gallery container'>
            <Container>
                <h1 className='bg-danger text-light'>Our Doctors</h1>
                <Row>
                    <Col xs={12} md={4}>
                        <img src={doctor1} alt="" roudded />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={doctor2} alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={doctor3} alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={doctor4} alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={doctor5} alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={doctor6} alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={doctor7} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DoctorsGallery;