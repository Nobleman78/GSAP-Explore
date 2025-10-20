import React from 'react';
import GuideImage from '../../assets/Guide/Guide.avif'
import { motion } from 'framer-motion';
import News from '../LandingPage/News';
const Resource = () => {
    return (
        <div>
            <section className='bg-[#096846] pt-15 lg:pt-30'>
                <h2 className='text-center text-2xl lg:text-6xl w-[300px] lg:w-[700px] mx-auto text-white lg:leading-15 poppins font-semibold '>Discover helpful resources & articles.</h2>
                <section className='bg-white lg:p-20 rounded-t-[70px] mt-20'>
                    <div className='border-rose-200 border overflow-hidden flex flex-col lg:flex-row gap-5 rounded-[3rem] px-10 pt-15 bg-pink-50'>
                        {/* Left Side */}
                        <div className='lg:w-1/2 flex flex-col  gap-5'>
                            <h2 className='text-[#36121c] text-2xl lg:text-6xl poppins  font-semibold'>A guide to conversational AI research.</h2>
                            <p className='text-xl'>Get our guide to spending time, budget and effort on the research tasks that matter. Then leave it on your manager’s desk.</p>
                            <button className='bg-[#ff6f98] self-start px-5 py-3 text-white rounded-full poppins font-semibold'>Download Now</button>
                        </div>
                        {/* Right Side */}
                        <motion.div
                            className='lg:w-1/2 flex justify-end '
                            initial={{ x: 200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}>
                            <img src={GuideImage} alt="guide-image" className='rounded-2xl' />
                        </motion.div>
                    </div>
                </section>
            </section>


            {/* Other components */}
            <News />

        </div>
    );
};

export default Resource;