import React from 'react';
import ImgAbout from '../../../assets/images/cake & craft.png'

const HomeAbout = () => {
    return (
        <div className='services-container py-24'>
            <div className="bg-white text-black rounded-lg ">
                <div className=' flex justify-center '>
                    <img className='w-1/4' src={ImgAbout} alt="" />
                </div>
                <hr style={{ border: '2px solid' }} />
                <div className="mt-6 p-5" style={{ textAlign: 'justify' }}>
                    <h2
                        className="font-bold text-3xl">Israt Jahan
                    </h2>
                    <h2
                        className="font-bold text-xl">Chef
                    </h2>
                    <p className='text-lg'>  Chef Israt Jahan, a native of Bangladeshi, developed a love for cooking while watching his mother and father cook when he was a child. He noticed how they would always cook things from scratch, and they would use fresh ingredients. His family and friends soon discovered that he had a special gift when it came to cooking and encouraged him to pursue a career in culinary arts.



                        In order to enhance his gift of cooking, after high school, Chef Miller enrolled in Runaway Bay Art Academy in Runaway Bay, Jamaica. Chef Miller later moved to England and joined the British Army. While in the army, he studied culinary arts extensively. Years later Chef Miller moved to the United States. In order to augment his cooking skills even more, he enrolled in Le Cordon Bleu College of Culinary Arts in Miami, FL. He graduated with honors after a successful internship at The Breakers.



                        Upon graduation, he worked at Four Seasons. However, he longed to have his own restaurant. He wanted a restaurant where he could utilize all of the cooking skills that he had learned from his parents and culinary arts schools. He wanted people to experience the authentic taste of the Caribbean islands.



                        In 2011, Chef Miller opened Out of Many Cafe. The name comes from Jamaica’s national motto, “Out of Many, One People.”



                        Chef Miller believes in creating dishes with the best, highest quality products. When asked what makes his food different, his answer was simply, “the love that I put in the food.”</p>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;