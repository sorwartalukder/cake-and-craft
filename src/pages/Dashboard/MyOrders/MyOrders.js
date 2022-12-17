import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useSetTitle from '../../../hooks/useSetTitle';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    useSetTitle('My Orders- Cake & Craft')
    useEffect(() => {
        fetch(`https://cake-and-craft-server.vercel.app/orders/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('cake-and-craft-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [user?.email])
    const handleCancel = id => {
        fetch(`https://cake-and-craft-server.vercel.app/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)
                }
            })
    }
    return (
        <div className='mb-36'>
            <h2 className="text-3xl text-center bg-slate-900 text-white py-6">Total Orders: {orders?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra  w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Order date</th>
                            <th>Delivery date</th>
                            <th>Address</th>
                            <th>Remove</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <tr
                                key={order._id || i}
                            >
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-11 rounded-full">
                                            <img src={order.img} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>

                                <td>{order.customerName}</td>
                                <td>{order.customerNumber}</td>
                                <td>{order.orderDate}</td>
                                <td>{order.deliveryDate}</td>
                                <td>{order.address}</td>
                                <td>
                                    <label
                                        onClick={() => handleCancel(order._id)}
                                        className="btn btn-sm btn-error hover:shadow-md hover:shadow-red-500"
                                    >
                                        Cancel </label>
                                </td>
                                <td>
                                    {
                                        order.paid ?
                                            <label
                                                className="btn btn-active btn-primary btn-sm px-5 text-white hover:shadow-md hover:shadow-slate-900"
                                            >
                                                Paid</label>
                                            :
                                            <Link to={`/dashboard/my-orders/${order._id}`}>
                                                <label
                                                    className="btn btn-primary bg-gradient-to-r from-slate-900 to-yellow-600 border-0 btn-sm px-6 text-white hover:shadow-md hover:shadow-yellow-600"
                                                >
                                                    Pay</label>
                                            </Link>
                                    }

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;