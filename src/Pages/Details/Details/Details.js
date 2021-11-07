import { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('../../../services.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])
    let singleDetails = details.find(prod => parseInt(prod.id) === parseInt(serviceId))
    if (typeof (singleDetails) == 'undefined') {
        singleDetails = '';
    }
    console.log(singleDetails)
    return (
        <div className='container ' style={{ alignItems: 'center' }}>
            <h2>Service Details: {serviceId}</h2>

            <div class="card mb-3">
                <img src={singleDetails.img} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{singleDetails.name}</h5>
                    <p class="card-text">{singleDetails.description}</p>
                    <h4 class="card-text"><small class="text-muted">Visit :{singleDetails.price}</small></h4>
                </div>
            </div>


        </div>
    );
};

export default Details;