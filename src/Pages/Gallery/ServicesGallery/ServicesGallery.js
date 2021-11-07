import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ServicesGallery = () => {
    return (
        <div className='doctor-gallery container'>
            <Container>
                <h1 className='bg-danger text-light'>Our Medical Equipment</h1>
                <Row>
                    <Col xs={12} md={4}>
                        <img src="https://4rai.com/images/easyblog_articles/74/b2ap3_amp_3T-MRI.jpg" alt="" roudded />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://www.radiologyinfo.org/-/media/radinfo/gallery-items/images/r-to-t/technologist-patient-open-mri.ashx" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://5.imimg.com/data5/PE/OG/RJ/SELLER-2653528/digital-x-ray-machine-500x500.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://4.imimg.com/data4/YL/KD/GLADMIN-184128/ge-ultrasound-machine-500x500.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://5.imimg.com/data5/NS/TC/MY-23931461/cbc-blood-test-machine-500x500.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://media.wired.com/photos/5e715ffda87ec30009860e6b/4:3/w_2044,h_1533,c_limit/Science_ventilator_1206950101.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBniiq1pb--FUaDzXjF2nzncQY1esQfpyMQ&usqp=CAU" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicesGallery;