import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, title, img, description, price } = service


    return (
        <div>
            <div className="card bg-base-100 border shadow-xl" >

                <PhotoProvider >
                    <PhotoView src={img}>
                        <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>

                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description.slice(0, 97
                    )}...</p>
                    <h4 className="card-title">Price:<span style={{ color: 'darkorange' }}>{price}TK</span></h4>
                    <div className="card-actions justify-between">
                        <Link to={`/services/${_id}`}><button className="badge badge-outline px-5 text-blue-900">Details</button></Link>
                        <Link ><button className="badge badge-outline px-5 text-blue-900 ">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;