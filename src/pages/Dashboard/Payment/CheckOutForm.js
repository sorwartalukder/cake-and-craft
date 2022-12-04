import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckOutForm = ({ payProduct }) => {
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { _id, customerName, email, price } = payProduct

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://cake-and-craft-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.error(error)
            setCardError(error.message)
        } else {
            console.log(paymentMethod)
            setCardError('')
        }
        setSuccess('')
        setProcessing(true)
        setTransactionId('')
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return
        }
        if (paymentIntent.status === "succeeded") {
            // store payment info in the database
            const payment = {
                ProductID: _id,
                price,
                email,
                transactionID: paymentIntent.id
            }
            fetch('https://cake-and-craft-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setSuccess('Congrats! your payment completed');
                    setTransactionId(paymentIntent.id);
                })


        }
        setProcessing(false)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className='bg-white p-3 rounded-md'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-primary bg-gradient-to-r from-slate-900 to-yellow-600 border-0 btn-sm px-6 text-white  block mx-auto mt-11"
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success && <div>
                    <p className="text-green-500">{success}</p>
                    <p>Your Transaction ID: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;