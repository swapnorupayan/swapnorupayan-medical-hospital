import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, img, expertize } = doctor;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img style={{ width: "400px", borderRadius: '20px' }} src={img} alt="" />
            <h3>{name}</h3>
            <h3 className="text-primary">{expertize}</h3>
        </div>
    );
};

export default Doctor;