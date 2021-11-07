import React from 'react';
import a1 from '../../images/afflite/a1.jpg';
import a2 from '../../images/afflite/a2.jpg';
import a3 from '../../images/afflite/a3.jpg';
import a4 from '../../images/afflite/a4.jpg';
import a5 from '../../images/afflite/aboutpic.jpg';

const AboutUs = () => {
    return (
        <div className='container'>
            <h2 className='my-4' style={{ color: 'blue' }}>Swapnorupayan Medical Hospital</h2>
            <br /><br />
            <div className='text-justify row'>
                <p className='col-12'>Swapnorupayan Medical Hospital is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment to improve the lives of people through utmost service excellence since its inception on 16th December, 2006. Square Hospital is one of the ventures of Square Group which is the top business group of the country.</p>

                <p className='col-12'>The reputation of Swapnorupayan Medical Hospital is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Thus, Square Hospitals strives to meet patients’ standards through quality healthcare and making a difference in their lives.</p>
            </div>

            <div className='row'>Haydar Medical has almost all departments of medical service under one roof which enable us to deliver proper integrated services to our patients.</div><br />

            <div className='row text justify my-5'>
                <div className="row" style={{ color: 'blue' }}>
                    <h2>A Few Word of Swapnorupayan Medical Hospital</h2> <br />
                </div>
                <div className="col-lg-8 col-12">
                    <p>Swapnorupayan Medical Hospital is an organization with equal emphasis on leadership, technology, quality and passion. It believes in continuous innovation and progress. Its endeavor is to bring the best minds together in a uniquely rich and stimulating environment.</p>
                    <p>Swapnorupayan Medical Hospital drives for excellence; the urge to never stand still, to never slow down and to never stop thinking. Square is a corporate giant active in divergent business and industrial fields. Its present unassailable status is the outcome of its successful diversification. Square holds a very strong position as a business leader in this country, and have earned trusted brand image to the people of Bangladesh.</p>
                    <p>When asked Mr. Samason H Chowdhury, why the name SQUARE was chosen, he remembered - "We named it SQUARE because it was started by four friends and also because it signifies accuracy and perfection meaning quality"</p>
                </div>
                <div className="col-lg-4 col-12">
                    <img style={{ width: '100%' }} src={a5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;