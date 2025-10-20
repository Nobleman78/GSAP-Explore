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
        title: "You're at the heart of decision-making.",
        des: "You've never said yes to so many research requests. Your colleagues and clients are making smarter decisions, thanks to clearer insights."
    },
    {
        icon: <IoLanguageOutline />,
        title: "You're breaking language barriers.",
        des: "You create your discussion guides in English, and let your participants choose whichever language they're most comfortable with. You get insights without barriers."
    },
    {
        icon: <FaUsers />,
        title: "You're hearing every voice clearly.",
        des: "No longer tapping out tiny replies on tiny keyboards, participants answer your questions with a clear voice. Your organisation gets unfiltered opinions, motivations and emotions."
    },
];

const WhyTellet = () => {
    const horizontalSectionRef = useRef(null);
    const horizontalContentRef = useRef(null);
    const triggerRef = useRef(null);
    const scrollTriggerInstance = useRef(null);

    useEffect(() => {
        const element = horizontalContentRef.current;
        const trigger = triggerRef.current;
        const section = horizontalSectionRef.current;

        if (!element || !trigger) return;

        // Kill any existing ScrollTrigger with this ID first
        const existing = ScrollTrigger.getById("whyTelletScroll");
        if (existing) {
            existing.kill(true);
        }

        // Reset transforms
        gsap.set(element, { x: 0, clearProps: "transform" });
        gsap.set(trigger, { clearProps: "all" });
        if (section) {
            gsap.set(section, { clearProps: "all" });
        }

        // Small delay to ensure DOM is ready
        const initTimer = setTimeout(() => {
            // Calculate how much to scroll horizontally
            const distanceToScroll = element.scrollWidth * 1.7 - window.innerWidth;

            scrollTriggerInstance.current = gsap.to(element, {
                x: () => -distanceToScroll,
                ease: "none",
                scrollTrigger: {
                    id: "whyTelletScroll",
                    trigger: trigger,
                    start: "bottom bottom",
                    end: () => `+=${distanceToScroll}`,
                    pin: true,
                    scrub: 0.5,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    onRefresh: () => {
                        // Ensure element is at start position on refresh
                        if (element) {
                            gsap.set(element, { x: 0 });
                        }
                    }
                },
            });
        }, 50);

        return () => {
            clearTimeout(initTimer);

            // Comprehensive cleanup
            if (scrollTriggerInstance.current) {
                scrollTriggerInstance.current.kill();
                scrollTriggerInstance.current = null;
            }

            const existingTrigger = ScrollTrigger.getById("whyTelletScroll");
            if (existingTrigger) {
                existingTrigger.kill(true);
            }

            // Kill all tweens on the element
            gsap.killTweensOf(element);

            // Reset all transforms and styles
            if (element) {
                gsap.set(element, { clearProps: "all" });
            }
            if (trigger) {
                gsap.set(trigger, { clearProps: "all" });
            }
            if (section) {
                gsap.set(section, { clearProps: "all" });
            }

            // Refresh all ScrollTrigger instances
            setTimeout(() => {
                ScrollTrigger.refresh(true);
            }, 50);
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

            {/* Feature Grid Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 poppins px-5 lg:px-20 py-10 mb-20'>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-4xl py-10 px-5 flex flex-col gap-3 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                        <span className='text-5xl text-pink-500'>{feature.icon}</span>
                        <h2 className='text-[#632738] text-2xl font-semibold'>{feature.title}</h2>
                        <p className='text-[#943d56] text-lg'>{feature.des}</p>
                    </div>
                ))}
            </div>

            {/* Learn More Button */}
            <button className='flex items-center justify-center w-[200px] mx-auto bg-[#096846] px-5 py-3 text-white font-semibold rounded-full text-xl poppins hover:bg-[#075a3b] transition-colors'>
                Learn More
            </button>

            {/* Horizontal Scroll Section */}
            <section ref={horizontalSectionRef} className="relative hidden md:block">
                <div
                    ref={triggerRef}
                    className="h-screen bg-[#f55e89] flex items-center overflow-hidden">
                    <div
                        ref={horizontalContentRef}
                        className="flex items-center whitespace-nowrap will-change-transform">
                        <div className="flex items-center gap-8 flex-shrink-0">
                            <h2 className='text-[6rem] font-semibold text-white px-8 poppins'>
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