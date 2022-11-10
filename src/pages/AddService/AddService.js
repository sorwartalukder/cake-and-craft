import React from 'react';
import toast from 'react-hot-toast';
import useSetTitle from '../../hooks/useSetTitle';

const AddService = () => {
    useSetTitle('Add Service - Cake & Craft')

    const handleAddItem = event => {
        event.preventDefault()
        const form = event.target;
        const serviceName = form.name.value;
        const serviceImage = form.photoURL.value;
        const price = form.price.value;

        const ingredient1 = form.ingredient1.value;
        const ingredient2 = form.ingredient2.value;
        const ingredient3 = form.ingredient3.value;
        const ingredient4 = form.ingredient4.value;
        const ingredient5 = form.ingredient5.value;
        const ingredient6 = form.ingredient6.value;
        const ingredient7 = form.ingredient7.value;

        const description = form.description.value;

        const service = {
            title: serviceName,
            img: serviceImage,
            price,
            description,
            ingredient: [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7]
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
                    form.reset()
                }
            })

    }

    return (
        <div>
            <div className='services-container '>
                <div className=' mx-auto my-24 bg-gray-900 p-16 text-white rounded-xl'>
                    <form onSubmit={handleAddItem}>
                        <div >
                            <h2 className="text-4xl pb-8 text-center font-semibold text-blue-500">Add Service</h2>
                            <div className='grid grid-cols-1 gap-4'>
                                <div className='md:flex'>
                                    <input required name='name' type="text" placeholder="Service Name" className="input input-ghost w-full input-bordered mb-4 md:mr-4" />
                                    <input required name='price' type="text" placeholder="Price" className="input input-ghost w-full input-bordered " />
                                </div>


                                <input required name='photoURL' type="text" placeholder="Image URL" className="input input-ghost w-full input-bordered " />





                                <label className='text-xl  font-semibold text-blue-500'>Ingredient (Must add 7 Ingredient)</label>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <input required name='ingredient1' type="text" placeholder="Ingredient-1" className="input input-ghost w-full input-bordered " />
                                    <input required name='ingredient2' type="text" placeholder="Ingredient-2" className="input input-ghost w-full input-bordered " />
                                    <input required name='ingredient3' type="text" placeholder="Ingredient-3" className="input input-ghost w-full input-bordered " />
                                    <input required name='ingredient4' type="text" placeholder="Ingredient-4" className="input input-ghost w-full input-bordered " />
                                    <input required name='ingredient5' type="text" placeholder="Ingredient-5" className="input input-ghost w-full input-bordered " />
                                    <input required name='ingredient6' type="text" placeholder="Ingredient-6" className="input input-ghost w-full input-bordered " />
                                    <input required name='ingredient7' type="text" placeholder="Ingredient-7" className="input input-ghost w-full input-bordered " />
                                </div>




                                <textarea required name='description' className="input input-ghost input-bordered h-24 w-full mt-4" placeholder="Description" >
                                </textarea>
                            </div>
                            <input className='btn btn-active btn-primary mt-8 block mx-auto px-24' type="submit" value="add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;