import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, title, img, description, price } = service


    return (
        <div className="card bg-base-100 border shadow-xl h-full hover:shadow-md hover:shadow-slate-900" >
            <PhotoProvider >
                <PhotoView src={img}>
                    <figure><img className='w-full h-64' src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <Link to={`/services/${_id}`}>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description.slice(0, 97
                    )}...</p>
                    <h4 className="card-title">Price:<span style={{ color: 'darkorange' }}>{price}TK</span></h4>
                    <div className="card-actions justify-between">
                        <button className="badge badge-outline px-5 text-blue-900 hover:shadow-md hover:shadow-slate-900">Details</button>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Service;