import QuoteImage from '../../assets/Quote/Qoute.avif'

import { AiOutlineAudio } from 'react-icons/ai';
import Marquee from 'react-fast-marquee';
import { GrSecure } from 'react-icons/gr';
import { FaFileAlt } from 'react-icons/fa';
import { IoLanguageOutline } from 'react-icons/io5';
import { BiDetail } from 'react-icons/bi';
import { CgTranscript } from 'react-icons/cg';

const marqueeContent = [
    {
        icon: <GrSecure />,
        text: 'Secure Customer Data'
    },
    {
        icon: <FaFileAlt />,
        text: 'OverView in One Dashboard'
    },
    {
        icon: <CgTranscript />,
        text: 'Automated Transcription'
    },
    {
        icon: <BiDetail />,
        text: 'Detailes analysis in one click'
    },
    {
        icon: <IoLanguageOutline />,
        text: 'Interview in 56 Languages'
    },
]

const Quote = () => {
    return (
        <div className='bg-[#096846] py-10 sm:py-12 md:py-16 lg:py-30 poppins'>
            {/* Main Content */}
            <div className='max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 mx-auto flex gap-6 sm:gap-8 md:gap-10 flex-col lg:flex-row items-center'>
                {/* Left Section */}
                <section className='w-full lg:w-1/2 relative px-4 sm:px-0'>
                    <img
                        src={QuoteImage}
                        alt="qoute-image"
                        className='relative rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] w-full'
                    />
                    <div className='bg-green-900 flex justify-around items-center text-white absolute bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2 w-[70%] sm:w-[280px] md:w-[300px] py-3 sm:py-4 lg:py-5 rounded-full shadow-lg'>
                        <div className="flex gap-1.5 sm:gap-2 animate-pulse">
                            <span className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border border-pink-300 rounded-full bg-pink-300"></span>
                            <span className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border border-pink-300 rounded-full bg-pink-300"></span>
                            <span className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border border-pink-300 rounded-full bg-pink-300"></span>
                            <span className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border border-pink-300 rounded-full bg-pink-300"></span>
                        </div>

                        <AiOutlineAudio className="text-xl sm:text-2xl md:text-3xl" />
                    </div>
                </section>

                {/* Right Section */}
                <section className='w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-0'>
                    <div className='lg:max-w-md mx-auto lg:mx-0 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
                        <h2 className='poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#c1ecc5] leading-tight'>
                            It's not magic, it's Tellet.
                        </h2>
                        <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#c1ecc5] font-semibold leading-relaxed'>
                            Conduct hundreds of interviews at once. Have participants reply freely with voice, video or photos. Let the AI ask follow-up questions. Analyse it all in one click. Oh, and ask your transcripts that question you thought of 6 months later.
                        </p>
                    </div>
                </section>
            </div>

            {/* Marquee */}
            <Marquee gradient={false} speed={50}>
                {marqueeContent.map((item, index) => (
                    <div key={index} className='flex mt-6 sm:mt-8 md:mt-10 items-center gap-2 sm:gap-3 bg-green-900 px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 rounded-full mx-2'>
                        <span className='text-2xl sm:text-3xl md:text-4xl text-pink-500 flex-shrink-0'>{item.icon}</span>
                        <p className='text-white poppins text-sm sm:text-base whitespace-nowrap'>{item.text}</p>
                    </div>
                ))}
            </Marquee>
            <Marquee direction='right' gradient={false} speed={50}>
                {marqueeContent.map((item, index) => (
                    <div key={index} className='flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-10 bg-green-900 px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 rounded-full mx-2'>
                        <span className='text-2xl sm:text-3xl md:text-4xl text-pink-500 flex-shrink-0'>{item.icon}</span>
                        <p className='text-white poppins text-sm sm:text-base whitespace-nowrap'>{item.text}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Quote;