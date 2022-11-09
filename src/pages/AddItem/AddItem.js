import React from 'react';

const AddItem = () => {
    return (
        <div>
            <div className='services-container '>
                <div className='w-11/12 md:w-2/3 lg:w-1/3 mx-auto my-24 bg-gray-900 p-16 text-white rounded-xl'>
                    <form >
                        <div >
                            <h2 className="text-4xl pb-8 text-center font-semibold text-blue-500">Add Item</h2>
                            <div className='grid grid-cols-1 gap-4'>
                                <input name='name' type="text" placeholder="Your Name" className="input input-ghost w-full input-bordered " />
                                <input name='photoURL' type="text" placeholder="Your Photo URL" className="input input-ghost w-full input-bordered " />
                                <input name='email' type="email" placeholder="Your Email" className="input input-ghost w-full input-bordered " />
                                <input name='password' type="password" placeholder="Your Password" className="input input-ghost w-full input-bordered " />
                                <textarea name='message' className="input input-ghost input-bordered h-24 w-full mt-4" placeholder="Your message" >
                                </textarea>
                            </div>
                            <input className='btn btn-active btn-primary mt-8 block mx-auto px-14' type="submit" value="add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;