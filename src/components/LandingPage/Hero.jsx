import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// import welcomeLottie from '../../assets/Lottie/Rainbow wave.json'
import AI from '../../assets/Lottie/Robot Futuristic Ai animated.json'
import Lottie from "lottie-react";

const marqueeLogo = [
    { name: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" },
    { name: "Oracle", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Oracle_Logo.svg/2560px-Oracle_Logo.svg.png" },
    { name: "NVIDIA", img: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png" },
    { name: "Amazon", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" },
    { name: "Logitech", img: "https://logos-world.net/wp-content/uploads/2020/11/Logitech-Emblem.png" },
    { name: "PayPal", img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" },
    { name: "Adobe", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/1200px-Adobe_Corporate_logo.svg.png" },
    { name: "Facebook", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" },
];


const Hero = () => {
    const [hoveredLogo, setHoveredLogo] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const [x, setX] = useState(0);
    const heading = "Customer insights.";
    const paragraph =
        "Tellet is the AI interview platform trusted by companies of all sizes to help them understand what customers think, feel and do.";

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setX(prev => {
                const newX = prev - 1;
                return newX <= -1600 ? 0 : newX;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [isPaused]);

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative min-h-screen overflow-hidden poppins">
            {/* Animated Curve Background */}
            <div className="absolute top-0 left-0 right-0 bottom-0 z-0 opacity-20">
                {/* <Lottie animationData={welcomeLottie} /> */}
            </div>
            <div className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
                <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
                    {/* Hero Text Content */}
                    <div className="w-full lg:w-2/3 px-4 sm:px-6 md:px-8 lg:px-5 flex flex-col gap-4 sm:gap-5 md:gap-6">
                        <motion.h2
                            className="text-[#064A31] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6rem] flex flex-wrap"
                            variants={container}
                            initial="hidden"
                            animate="visible">
                            {heading.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    className="mr-2 sm:mr-3 md:mr-4 inline-block"
                                    variants={child}>
                                    {word}
                                </motion.span>
                            ))}
                        </motion.h2>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#943D56] font-bold poppins">
                            Faster. Cheaper. Deeper.
                        </p>
                        <motion.p
                            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-[850px] text-[#632738] flex flex-wrap poppins leading-relaxed"
                            variants={container}
                            initial="hidden"
                            animate="visible">
                            {paragraph.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    className="mr-1 sm:mr-1.5 inline-block"
                                    variants={child}>
                                    {word}
                                </motion.span>
                            ))}
                        </motion.p>
                        <div className="flex items-start mt-2 sm:mt-4">
                            <button className="bg-green-900 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-base sm:text-lg rounded-full font-bold poppins text-white hover:bg-green-800 transition-colors duration-300">
                                Give it a try
                            </button>
                        </div>
                    </div>
                    {/* AI Content */}
                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 px-4 sm:px-6 lg:px-0">
                        <Lottie animationData={AI} className="max-w-full h-auto" />
                    </div>
                </section>

                {/* Marquee / Ticker Section*/}
                <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-15 overflow-hidden whitespace-nowrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                    <div
                        className="inline-flex items-center transition-transform duration-75 ease-linear"
                        style={{ transform: `translateX(${x}px)` }}>
                        {/* First set of logos */}
                        {marqueeLogo.map((logo, index) => (
                            <div
                                key={index}
                                className="relative inline-flex items-center justify-center mx-3 sm:mx-4 md:mx-6 lg:mx-8 cursor-pointer"
                                style={{
                                    width: window.innerWidth < 640 ? '80px' : window.innerWidth < 768 ? '100px' : '120px',
                                    height: window.innerWidth < 640 ? '40px' : window.innerWidth < 768 ? '50px' : '60px'
                                }}
                                onMouseEnter={() => {
                                    setHoveredLogo(index);
                                    setIsPaused(true);
                                }}
                                onMouseLeave={() => {
                                    setHoveredLogo(null);
                                    setIsPaused(false);
                                }}>
                                <img
                                    src={logo.img}
                                    alt={logo.name}
                                    className="max-w-full max-h-full object-contain transition-opacity duration-200"
                                    style={{ opacity: hoveredLogo === index ? 0.7 : 1 }}
                                />
                                {hoveredLogo === index && (
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-90 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base font-semibold whitespace-nowrap z-10 pointer-events-none">
                                        {logo.name}
                                    </div>
                                )}
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {marqueeLogo.map((logo, index) => (
                            <div
                                key={`duplicate-${index}`}
                                className="relative inline-flex items-center justify-center mx-3 sm:mx-4 md:mx-6 lg:mx-8 cursor-pointer"
                                style={{
                                    width: window.innerWidth < 640 ? '80px' : window.innerWidth < 768 ? '100px' : '120px',
                                    height: window.innerWidth < 640 ? '40px' : window.innerWidth < 768 ? '50px' : '60px'
                                }}
                                onMouseEnter={() => {
                                    setHoveredLogo(`duplicate-${index}`);
                                    setIsPaused(true);
                                }}
                                onMouseLeave={() => {
                                    setHoveredLogo(null);
                                    setIsPaused(false);
                                }}>
                                <img
                                    src={logo.img}
                                    alt={logo.name}
                                    className="max-w-full max-h-full object-contain transition-opacity duration-200"
                                    style={{ opacity: hoveredLogo === `duplicate-${index}` ? 0.7 : 1 }}
                                />
                                {hoveredLogo === `duplicate-${index}` && (
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-90 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base font-semibold whitespace-nowrap z-10 pointer-events-none">
                                        {logo.name}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;