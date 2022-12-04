import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useSetTitle from '../../../hooks/useSetTitle';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const payProduct = useLoaderData()
    useSetTitle('Payment- Cake & Craft')
    return (
        <div className='max-w-[1440px] min-h-screen mx-auto my-14 bg-slate-200 p-7 rounded-xl font-bold'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {/* product name  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Name</span></label>
                    <input disabled
                        defaultValue={payProduct.productName}
                        type="text"
                        className="input input-bordered w-full max-w-xs"

                    />
                </div>

                {/*price  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Price</span></label>
                    <input disabled
                        defaultValue={payProduct.price}
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                {/*delivery date */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Delivery date</span></label>
                    <input disabled
                        defaultValue={payProduct.deliveryDate}
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>

            </div>
            <div className='w-96 my-12 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        payProduct={payProduct}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;