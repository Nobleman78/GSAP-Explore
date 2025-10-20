import React from 'react';

const Quote = () => {
    return (
        <div className='bg-[#096846] pt-15 lg:pt-30'>
            <section className='text-center poppins max-w-2xl mx-auto space-y-5 text-white'>
                <h2 className='text-2xl lg:text-5xl font-semibold'>Get your quote</h2>
                <p className=' text-lg lg:text-2xl'>
                    We'll get back to you within 24 hours. Have a question or need assistance? Contact us directly.
                </p>

            </section>

            {/* Form Div */}
            <div className='bg-white rounded-t-[70px] p-10 lg:p-20 poppins my-20 space-y-6 text-left'>
                <form className='space-y-5 max-w-7xl mx-auto'>
                    <div>
                        <label className='block text-gray-700 text-lg font-medium mb-2'>Full Name</label>
                        <input
                            type='text'
                            placeholder='Enter your full name'
                            className='w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#096846]'
                        />
                    </div>

                    <div>
                        <label className='block text-gray-700 text-lg font-medium mb-2'>Email Address</label>
                        <input
                            type='email'
                            placeholder='Enter your email address'
                            className='w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#096846]'
                        />
                    </div>

                    <div>
                        <label className='block text-gray-700 text-lg font-medium mb-2'>Phone Number</label>
                        <input
                            type='tel'
                            placeholder='Enter your phone number'
                            className='w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#096846]'
                        />
                    </div>

                    <div>
                        <label className='block text-gray-700 text-lg font-medium mb-2'>Message</label>
                        <textarea
                            rows='4'
                            placeholder='Describe your project or request...'
                            className='w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#096846]'
                        ></textarea>
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-[#096846] text-white text-xl py-4 rounded-xl font-semibold hover:bg-[#0b8153] transition duration-300'>
                        Request Quote
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Quote;
