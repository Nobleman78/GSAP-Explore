import { FaRegHeart, FaUsers } from 'react-icons/fa';
import { IoLanguageOutline } from 'react-icons/io5';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: <FaRegHeart />,
        title: 'You\'re at the heart of decision-making.',
        des: 'You\'ve never said yes to so many research requests. Your colleagues and clients are making smarter decisions, thanks to clearer insights.'
    },
    {
        icon: <IoLanguageOutline />,
        title: 'You\'re at the heart of decision-making.',
        des: 'You create your discussion guides in English, and let your participants choose whichever language they\'re most comfortable with. You get insights without barriers.'
    },
    {
        icon: <FaUsers />,
        title: 'You\'re at the heart of decision-making.',
        des: 'No longer tapping out tiny replies on tiny keyboards, participants answer your questions with a clear voice. Your organisation gets unfiltered opinions, motivations and emotions.'
    },
];

const WhyTellet = () => {
    const horizontalSectionRef = useRef(null);
    const horizontalContentRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const element = horizontalContentRef.current;
        const trigger = triggerRef.current;

        if (!element || !trigger) return;

        // Calculate how much to scroll horizontally
        const distanceToScroll = element.scrollWidth - window.innerWidth;

        const tween = gsap.to(element, {
            x: () => -distanceToScroll,
            ease: "none",
            scrollTrigger: {
                trigger: trigger,
                start: "top top",
                end: () => `+=${distanceToScroll}`,
                pin: true,
                scrub: 0,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, []);

    return (
        <div className='bg-[#f55e89] py-30 overflow-hidden'>
            {/* Info Section */}
            <div className='flex flex-col gap-3 text-center poppins text-white mb-10 lg:mb-20'>
                <h2 className='text-lg lg:text-2xl text-black font-semibold'>Just imagine…</h2>
                <p className='text-2xl lg:text-5xl font-semibold'>One year from now.</p>
                <p className='text-lg lg:text-2xl font-light'>
                    You did it. You chose Tellet. What does research life look like now?
                </p>
            </div>

            {/* Grid Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 poppins px-5 lg:px-20 py-10 mb-20'>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-4xl py-10 px-5 flex flex-col gap-3'>
                        <span className='text-5xl text-pink-500'>{feature.icon}</span>
                        <h2 className='text-[#632738] text-2xl font-semibold'>
                            {feature.title}
                        </h2>
                        <p className='text-[#943d56] text-lg'>{feature.des}</p>
                    </div>
                ))}
            </div>

            {/* Learn More Button */}
            <button className='flex items-center justify-center w-[200px] mx-auto bg-[#096846] px-5 py-3 text-white font-semibold rounded-full text-xl poppins'>
                Learn More
            </button>
            {/* Horizontal Scroll Section  */}
            <section ref={horizontalSectionRef} className="relative hidden md:block">
                <div
                    ref={triggerRef}
                    className="h-screen bg-[#f55e89] flex items-center overflow-hidden">
                    <div
                        ref={horizontalContentRef}
                        className="flex items-center whitespace-nowrap will-change-transform">
                        <div className="flex items-center gap-8 flex-shrink-0">
                            <h2 className='text-[6rem] font-semibold text-white  px-8 poppins'>
                                Elevate your research, not your blood pressure.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyTellet;