import { format } from 'date-fns';
import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useSetTitle from '../../../hooks/useSetTitle'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BuyNow = () => {
    const selectProduct = useLoaderData();
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { _id, title, price, img } = selectProduct;
    useSetTitle('Buy Now - Cake & Craft')
    const navigate = useNavigate()

    const currentDate = new Date();
    const orderDate = format(currentDate, 'PP');
    const handleOrder = data => {
        const { name, phone, address, date } = data;
        const order = {
            productID: _id,
            productName: title,
            img,
            price,
            customerName: name,
            email: user.email,
            customerNumber: phone,
            address,
            deliveryDate: date,
            orderDate
        }
        fetch('https://cake-and-craft-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(d => {

                if (d.acknowledged) {
                    navigate('/dashboard/my-orders')
                }
            })
    }
    return (
        <div className='max-w-[1440px] min-h-screen mx-auto my-14 bg-slate-200 p-7 rounded-xl'>
            <form onSubmit={handleSubmit(handleOrder)}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    {/* product name  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Product Name</span></label>
                        <input disabled
                            defaultValue={title}
                            type="text"
                            className="input input-bordered w-full max-w-xs"

                        />
                    </div>

                    {/*price  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Price</span></label>
                        <input disabled
                            defaultValue={price}
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>

                    {/* Name  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Your Name</span></label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: 'Name is required'

                            })}
                        />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    {/* Mobile number  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Your Mobile Number</span></label>
                        <input
                            type="phone"
                            className="input input-bordered w-full max-w-xs"
                            {...register("phone", {
                                required: 'Mobile number is required'

                            })}
                        />
                        {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                    </div>
                    {/* Address */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Your Address</span></label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            {...register("address", {
                                required: 'Address is required'

                            })}
                        />
                        {errors.address && <p className='text-red-600'>{errors.address?.message}</p>}
                    </div>
                    {/* delivery */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Delivery Date</span></label>
                        <input
                            type="date"
                            className="input input-bordered w-full max-w-xs"
                            {...register("date", {
                                required: 'Delivery Date is required'

                            })}
                        />
                        {errors.date && <p className='text-red-600'>{errors.date?.message}</p>}
                    </div>

                </div>
                <input className='btn bg-gradient-to-r from-slate-900 to-yellow-600 border-0 px-11 mt-11 block mx-auto hover:shadow-md hover:shadow-yellow-600' value='Submit' type="submit" />
            </form>

        </div>
    );
};

export default BuyNow;