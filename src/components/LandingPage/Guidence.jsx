import GuideImage from '../../assets/Guide/Guide.avif'
import { motion } from 'framer-motion';
const Guidence = () => {
    return (
        <div className='max-w-7xl mx-auto py-30'>
            <div className='border-rose-200 border overflow-hidden flex gap-5 flex-col lg:flex-row rounded-[3rem] px-10 pt-15 bg-pink-50'>
                {/* Left Side */}
                <div className='w-full lg:w-1/2 flex flex-col gap-5'>
                    <h2 className='text-[#36121c] text-2xl lg:text-6xl poppins  font-semibold'>A guide to conversational AI research.</h2>
                    <p className='text-lg lg:text-xl'>Get our guide to spending time, budget and effort on the research tasks that matter. Then leave it on your manager’s desk.</p>
                    <button className='bg-[#ff6f98] self-start px-5 py-3 text-white rounded-full poppins font-semibold'>Download Now</button>
                </div>
                {/* Right Side */}
                <motion.div
                    className='w-full lg:w-1/2 flex justify-end '
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}>
                    <img src={GuideImage} alt="guide-image" className='rounded-2xl' />
                </motion.div>
            </div>
        </div>
    );
};

export default Guidence;