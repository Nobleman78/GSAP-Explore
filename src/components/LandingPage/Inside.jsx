import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedSection = ({ activeIndex, section, i, isLast }) => {
    const opacity = useTransform(
        activeIndex,
        isLast ? [i - 1, i] : [i - 0.5, i, i + 0.5],
        isLast ? [0, 1] : [0, 1, 0]
    );
    const scale = useTransform(
        activeIndex,
        isLast ? [i - 0.6, i] : [i - 0.3, i, i + 0.3],
        isLast ? [1, 1] : [1, 1, 1]
    );

    return (
        <motion.div
            key={i}
            className="absolute bg-[#096846] w-[95%] sm:w-[90%] md:w-[85%] p-5 sm:p-6 md:p-8 lg:p-10 rounded-3xl md:rounded-4xl"
            style={{
                opacity,
                scale,
            }}>
            {section.content}
        </motion.div>
    );
};

const Inside = () => {
    const sectionRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    const { scrollYProgress } = useScroll({
        target: isDesktop ? sectionRef : undefined,
        offset: ["start start", "end end"],
    });

    const activeIndex = useTransform(
        scrollYProgress,
        [0, 0.6, 0.6, 1],
        [0, 0, 1, 1]
    );

    if (!mounted) {
        return null;
    }

    const sections = [
        {
            title: "Interview brief",
            content: (
                <div className='h-[350px] sm:h-[380px] md:h-[400px]'>
                    <div>
                        <h2 className="text-2xl sm:text-3xl text-white mb-3 sm:mb-5">Interview Brief</h2>
                        <div className="w-full h-2 bg-[#97e0c7] mb-2 sm:mb-3 rounded"></div>
                        <div className="w-[200px] sm:w-[250px] md:w-[300px] h-2 bg-[#97e0c7] rounded"></div>
                    </div>
                    <div className="text-white mt-6 sm:mt-8 md:mt-10 mb-4 sm:mb-5">
                        <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-5">Questions</h2>
                        <ol start={1} className="flex flex-col gap-1.5 sm:gap-2 text-sm sm:text-base">
                            <ul>What is ML/AI?</ul>
                            <ul>What is Web Development?</ul>
                            <ul>What is React.js/Next.js?</ul>
                        </ol>
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl text-white mb-3 sm:mb-4">Language</h2>
                        <select
                            name=""
                            id=""
                            className="w-full border bg-white border-white py-1 sm:py-1.5 px-2 rounded outline-none text-sm sm:text-base" >
                            <option value="english">English</option>
                            <option value="chakma">Chakma</option>
                            <option value="bangla">Bangla</option>
                        </select>
                    </div>
                </div>
            ),
            rightTitle: "Design.",
            rightDesc:
                "Give your AI interviewer an objective, some questions, and a brief with additional useful context, just as you would with a human researcher.",
        },
        {
            title: "Panel integration",
            content: (
                <div className='h-[350px] sm:h-[380px] md:h-[400px]'>
                    <h2 className="text-2xl sm:text-3xl text-white mb-3 sm:mb-5">Panel integration</h2>
                    <div className='flex flex-col gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10'>
                        <div className='flex flex-col gap-1.5 sm:gap-2'>
                            <h2 className='text-white poppins text-sm sm:text-base'>Integration link</h2>
                            <div className='bg-[#97e0c7] py-1.5 sm:py-2 px-2 rounded-xl sm:rounded-2xl'>
                                <div className="w-full h-2 bg-[#04573a] rounded"></div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1.5 sm:gap-2'>
                            <h2 className='text-white poppins text-sm sm:text-base'>Provider Name</h2>
                            <div className='bg-[#97e0c7] py-1.5 sm:py-2 px-2 rounded-xl sm:rounded-2xl'>
                                <div className="w-[200px] sm:w-[250px] md:w-[300px] h-2 bg-[#04573a] rounded"></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1.5 sm:gap-2'>
                        <h2 className='text-white poppins text-sm sm:text-base'>Embedded</h2>
                        <div className='bg-green-900 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl text-white space-y-2 poppins'>
                            <p className='text-xs sm:text-sm md:text-base'>Someone is talking something very much important. </p>
                            <button className='bg-[#096846] rounded-xl sm:rounded-2xl text-white px-2.5 sm:px-3 py-1 text-xs sm:text-sm'>Copy Code</button>
                        </div>
                    </div>
                    <h2 className='text-white text-lg sm:text-xl md:text-2xl mt-3 sm:mt-4 md:mt-5'>QR Code</h2>
                </div>
            ),
            rightTitle: "Share.",
            rightDesc:
                "Send the interview link to your customers, or let us find participants for you — we integrate with panel providers globally.",
        },
    ];

    return (
        <div>
            <div className='py-12 sm:py-16 md:py-20 lg:py-30 relative bg-[#096846] poppins px-4 sm:px-6 md:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false, amount: 0.5 }}
                    className='text-center mb-12 sm:mb-16 md:mb-20'>
                    <h2 className='text-[#C0FFCA] text-lg sm:text-xl md:text-2xl poppins font-semibold'>
                        Effective insights in 1, 2, 3, 4…
                    </h2>
                    <p className='text-[#f9fffa] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold poppins mb-6 sm:mb-8 md:mb-10 mt-3 sm:mt-4 px-4'>
                        Here's how it works
                    </p>
                    <p className='text-[#ebffed] max-w-xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl poppins px-4'>
                        Understand the voice of your customer and get to the why fast. Get rich insights in real time.
                    </p>
                </motion.div>

                <div className='bg-white rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[110px] w-full pb-4 sm:pb-5'>
                    {/* Desktop Version - With Animation */}
                    {isDesktop ? (
                        <section ref={sectionRef} className="flex relative flex-col lg:flex-row">
                            {/* Left side - Animated cards */}
                            <div className="w-full lg:w-1/2 sticky top-10 h-screen flex items-center justify-center px-4 sm:px-6">
                                {sections.map((s, i) => (
                                    <AnimatedSection
                                        key={i}
                                        activeIndex={activeIndex}
                                        section={s}
                                        i={i}
                                        isLast={i === sections.length - 1}
                                    />
                                ))}
                            </div>

                            {/* Right side - Content */}
                            <div className="w-full lg:w-1/2 flex flex-col px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
                                {sections.map((s, i) => (
                                    <div key={i} className="h-screen flex flex-col justify-center">
                                        <h2 className="text-[#ff6f98] text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                                            {s.rightTitle}
                                        </h2>
                                        <p className="text-[#075539] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                                            {s.rightDesc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ) : (
                        /* Mobile/Tablet Version - Simple Stack Layout */
                        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
                            {sections.map((s, i) => (
                                <div key={i} className="flex flex-col gap-6 sm:gap-8">
                                    {/* Card */}
                                    <div className="bg-[#096846] w-full p-5 sm:p-6 md:p-8 rounded-3xl">
                                        {s.content}
                                    </div>
                                    
                                    {/* Description */}
                                    <div className="px-2">
                                        <h2 className="text-[#ff6f98] text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                                            {s.rightTitle}
                                        </h2>
                                        <p className="text-[#075539] text-base sm:text-lg md:text-xl leading-relaxed">
                                            {s.rightDesc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    <button className='flex items-center w-[160px] sm:w-[180px] md:w-[200px] mx-auto justify-center bg-[#ff6f98] text-white py-2.5 sm:py-3 poppins rounded-full text-sm sm:text-base hover:bg-[#ff5a83] transition-colors'>
                        Book a demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Inside;