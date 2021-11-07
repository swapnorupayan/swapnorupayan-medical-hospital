import React from 'react';
import doctor1 from '../../../images/Doctor/doctor-1.jpg';
import doctor2 from '../../../images/Doctor/doctor-2.jpg';
import doctor3 from '../../../images/Doctor/doctor-3.jpg';
import doctor4 from '../../../images/Doctor/doctor-4.jpg';
import doctor5 from '../../../images/Doctor/doctor-5.jpg';
import doctor6 from '../../../images/Doctor/doctor-6.jpg';
import doctor7 from '../../../images/Doctor/doctor-7.jpg';
import Doctor from '../Doctor/Doctor';


const doctors = [
    {
        img: doctor1,
        name: 'Dr. Ali Haydar',
        expertize: 'Medicine Specialist'
    },
    {
        img: doctor2,
        name: 'Dr. Saidul Islam',
        expertize: 'Neoro Specialist'
    },
    {
        img: doctor3,
        name: 'Dr. Tanjina Akter',
        expertize: 'Skin Specialist'
    },
    {
        img: doctor4,
        name: 'Dr. Khorshed Alam',
        expertize: 'Eye Specialist'
    },
    {
        img: doctor5,
        name: 'Dr. Hamidur Rahman',
        expertize: 'Orthopaedics Specialist'
    },
    {
        img: doctor6,
        name: 'Dr. Arfat khan',
        expertize: 'Dental Specialist'
    },
    {
        img: doctor7,
        name: 'Eshita Islam',
        expertize: 'Dr. Gyni Specialist'
    },
]

const Doctors = () => {
    return (
        <div id="doctors" className="container">
            <h2 className="text-primary mt-5 bg-dark">Our Doctors</h2>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    >

                    </Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;