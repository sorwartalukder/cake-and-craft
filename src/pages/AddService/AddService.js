import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useSetTitle from '../../hooks/useSetTitle';

const AddService = () => {
    const navigate = useNavigate()
    useSetTitle('Add Service - Cake & Craft')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    //add product
    const handleAddItem = data => {
        //image hosting
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then((imgData) => {
                const service = {
                    title: data.name,
                    img: imgData.data.url,
                    price: data.price,
                    description: data.description,
                    ingredient: [data.ingredient1, data.ingredient2, data.ingredient3, data.ingredient4, data.ingredient5, data.ingredient6, data.ingredient7]
                }
                fetch('https://cake-and-craft-server.vercel.app/services', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(service)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success('added service')
                            navigate('/services')
                        }
                    })
            })


    }

    return (
        <div>
            <div className='services-container '>
                <div className=' mx-auto my-24 bg-gray-900 p-16 text-white rounded-xl'>
                    <form onSubmit={handleSubmit(handleAddItem)}>
                        <div >
                            <h2 className="text-4xl pb-8 text-center font-semibold text-blue-500">Add Service</h2>
                            <div className='grid grid-cols-1 gap-4'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    {/* service name */}
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Service Name"
                                            className="input input-ghost w-full input-bordered mb-4 md:mr-4"
                                            {...register("name", {
                                                required: 'Name is required'
                                            })}
                                        />
                                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                                    </div>
                                    {/* price */}
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Price"
                                            className="input input-ghost w-full input-bordered "
                                            {...register("price", {
                                                required: 'Price is required'
                                            })}
                                        />
                                        {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                                    </div>
                                </div>

                                {/* image */}
                                <input
                                    type="file"
                                    className="input input-ghost w-full input-bordered "
                                    {...register("image", {
                                        required: 'image is required'
                                    })}
                                />
                                {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                                {/* Ingredient */}
                                <label className='text-xl  font-semibold text-blue-500'>Ingredient (Must add 5 Ingredient)</label>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Ingredient-1"
                                            className="input input-ghost w-full input-bordered "
                                            {...register("ingredient1", {
                                                required: 'ingredient is required'
                                            })}
                                        />
                                        {errors.ingredient1 && <p className='text-red-600'>{errors.ingredient1?.message}</p>}
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Ingredient-2"
                                            className="input input-ghost w-full input-bordered "
                                            {...register("ingredient2", {
                                                required: 'ingredient is required'
                                            })}
                                        />
                                        {errors.ingredient2 && <p className='text-red-600'>{errors.ingredient2?.message}</p>}
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Ingredient-3"
                                            className="input input-ghost w-full input-bordered "
                                            {...register("ingredient3", {
                                                required: 'ingredient is required'
                                            })}
                                        />
                                        {errors.ingredient3 && <p className='text-red-600'>{errors.ingredient3?.message}</p>}
                                    </div>

                                    <div>
                                        <input
                                            type="text" placeholder="Ingredient-4"
                                            className="input input-ghost w-full input-bordered "
                                            {...register("ingredient4", {
                                                required: 'ingredient is required'
                                            })}
                                        />
                                        {errors.ingredient4 && <p className='text-red-600'>{errors.ingredient4?.message}</p>}
                                    </div>


                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Ingredient-5"
                                            className="input input-ghost w-full input-bordered"
                                            {...register("ingredient5", {
                                                required: 'ingredient is required'
                                            })}
                                        />
                                        {errors.ingredient5 && <p className='text-red-600'>{errors.ingredient5?.message}</p>}
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Ingredient-6"
                                        className="input input-ghost w-full input-bordered "
                                        {...register("ingredient6")}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Ingredient-7"
                                        className="input input-ghost w-full input-bordered "
                                        {...register("ingredient7")}
                                    />
                                </div>
                                {/* Description */}
                                <textarea
                                    placeholder="Description"
                                    className="input input-ghost input-bordered h-24 w-full mt-4"
                                    {...register("description", {
                                        required: 'Description is required'
                                    })}
                                ></textarea>
                                {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}

                            </div>
                            <input className='btn btn-active btn-primary mt-8 block mx-auto md:px-24 px-12 hover:shadow-md hover:shadow-white' type="submit" value="add Service" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;