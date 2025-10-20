import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#632738] p-6 sm:p-8 md:p-10 lg:p-20'>
            <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-12'>
                {/* Left side */}
                <section className='text-left'>
                    <h2 className='playwrite text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] text-[#ff6f98]'>
                        Tellet
                    </h2>
                </section>

                {/* Right Side */}
                <section className='flex flex-col sm:flex-row poppins gap-8 sm:gap-12 md:gap-16 lg:gap-20 justify-start'>
                    <div className='text-left'>
                        <h2 className='text-[#db6687] mb-3 sm:mb-4 font-semibold text-base sm:text-lg'>
                            Quick Links
                        </h2>
                        <ul className='text-[#ffd1dc] space-y-1.5 sm:space-y-2 text-sm sm:text-base'>
                            <li className='hover:text-white transition-colors cursor-pointer'>Home</li>
                            <li className='hover:text-white transition-colors cursor-pointer'>Solution</li>
                            <li className='hover:text-white transition-colors cursor-pointer'>Resources</li>
                            <li className='hover:text-white transition-colors cursor-pointer'>Contact</li>
                            <li className='hover:text-white transition-colors cursor-pointer'>Book a meeting</li>
                            <li className='hover:text-white transition-colors cursor-pointer'>Login</li>
                        </ul>
                    </div>
                    <div className='text-left'>
                        <h2 className='text-[#db6687] mb-3 sm:mb-4 font-semibold text-base sm:text-lg'>
                            Legal
                        </h2>
                        <ul className='text-[#ffd1dc] space-y-1.5 sm:space-y-2 text-sm sm:text-base'>
                            <li className='hover:text-white transition-colors cursor-pointer'>Terms of service</li>
                            <li className='hover:text-white transition-colors cursor-pointer'>Privacy policy</li>
                            <li className='hover:text-white transition-colors cursor-pointer'>Interview interms</li>
                            <li className='hover:text-white transition-colors cursor-pointer'>Cookie policy</li>
                            <li className='hover:text-white transition-colors cursor-pointer'>Cookie settings</li>
                        </ul>
                    </div>
                </section>
            </div>

            <div className=' text-white mt-8 sm:mt-10 poppins space-y-2 sm:space-y-3 text-sm sm:text-base'>
                <p className='lg:text-center'>© Tellet. Copyright 2025.</p>
                <p className='text-center py-5'>
                    Developed By{' '}
                    <a
                        className='text-[#d34ea0] hover:text-[#ff6f98] transition-colors underline'
                        href="https://github.com/Nobleman78"
                        target="_blank"
                        rel="noopener noreferrer" >
                        Nobleman78
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;