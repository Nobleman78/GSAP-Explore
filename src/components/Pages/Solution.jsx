import Lottie from 'lottie-react';
import AiLottie from '../../assets/Solution/AI data.json'
import Customer from '../../assets/Solution/customer support.json'
import AISearch from '../../assets/Solution/AISearch.avif'
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Testimonials from '../LandingPage/Testimonials';
import CTA from '../LandingPage/CTA';
import gsap from 'gsap';

const Solution = () => {
    const [activeButton, setActiveButton] = useState('interview')
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const textRefTwo = useRef(null)
    const imageRefTwo = useRef(null)

    // First Div text and image animation (using gsap for scroll-triggered entrance)
    useEffect(() => {
        // Animation for text coming from the left
        gsap.fromTo(
            textRef.current,
            {
                x: -100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        )
        // Animation for image coming from the right
        gsap.fromTo(
            imageRef.current,
            {
                x: 100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        )

    }, []) // Added empty dependency array for cleanup, though ScrollTrigger usually manages its own cleanup

    // Second image animation (using gsap for scroll-triggered entrance)
    useEffect(() => {
        // Animation for text coming from the right
        gsap.fromTo(
            textRefTwo.current,
            {
                x: 100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textRefTwo.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        )
        // Animation for image coming from the left
        gsap.fromTo(
            imageRefTwo.current,
            {
                x: -100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textRefTwo.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        )

    }, []) // Added empty dependency array for cleanup

    // Framer Motion variants for content transition
    const contentVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <div>
            {/* Heading section - Responsive Typography */}
            <section className='bg-gray-50 p-6 sm:p-8 md:p-12 lg:p-20'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="lg:max-w-5xl lg:mx-auto w-full text-center space-y-3 sm:space-y-4 md:space-y-5 poppins px-4">
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] text-[#36121c] lg:tracking-tight lg:leading-18 flex items-center justify-center leading-tight'>
                        Make better decisions, faster, with Tellet's AI-led customer research interviews.
                    </h2>
                    <p className="max-w-2xl mx-auto text-[#943d56] text-lg sm:text-xl md:text-2xl leading-relaxed">
                        Tellet gets you customer opinions, motivations and emotions you never thought you'd have access to, and analyses them faster than you ever thought possible.
                    </p>
                </motion.div>
            </section>

            {/* Effort section - Responsive Layout and Typography */}
            <section className="bg-[#096846] rounded-t-[50px] sm:rounded-t-[70px] lg:rounded-t-[100px] py-8 sm:py-12 md:py-16 lg:py-20 poppins">
                {/* Top Div */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: false, amount: 0.9 }}
                    className="text-center lg:max-w-3xl lg:mx-auto text-white space-y-3 sm:space-y-4 md:space-y-5 px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-semibold lg:leading-15 leading-tight">
                        Faster, deeper and more affordable customer insights.
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl leading-relaxed">
                        With Tellet, you'll have a dashboard with full insights and reporting tools, including AI search for in-depth views.
                    </p>
                </motion.div>

                {/* Bottom Div (Features) */}
                <div className="bg-white p-5 sm:p-8 md:p-12 lg:p-20 rounded-3xl sm:rounded-4xl m-4 sm:m-6 md:m-10 lg:m-20 space-y-12 sm:space-y-16 lg:space-y-20">

                    {/* 1st div - Effortless analysis. */}
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-16'>
                        <div ref={textRef} className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-5">
                            <h2 className="text-[#064a31] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight">
                                Effortless analysis.
                            </h2>
                            <p className="text-[#075539] text-base sm:text-lg md:text-xl leading-relaxed">
                                Analysing transcripts used to take days, weeks or even months. But with a single click Tellet becomes your analysis co-pilot, highlighting key themes, emerging patterns, opportunities and recommendations that go much deeper than simple summaries.
                            </p>
                        </div>
                        <div ref={imageRef} className="w-full lg:w-1/2">
                            <Lottie animationData={AiLottie} className='w-full h-auto max-w-lg mx-auto' />
                        </div>
                    </div>

                    {/* 2nd div - The voice of the customer. */}
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-16'>
                        <div ref={imageRefTwo} className="w-full lg:w-1/2 order-2 lg:order-1">
                            <Lottie animationData={Customer} className='w-full h-auto max-w-lg mx-auto' />
                        </div>
                        <div ref={textRefTwo} className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-5 order-1 lg:order-2">
                            <h2 className="text-[#064a31] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight">
                                The voice of the customer. Literally.
                            </h2>
                            <p className="text-[#075539] text-base sm:text-lg md:text-xl leading-relaxed">
                                Tellet's conversational AI interview tool revolutionizes the way you conduct interviews. With natural conversation style and probing questions, you'll gain in-depth insights like never before.
                            </p>
                        </div>
                    </div>

                    {/* 3rd div - Research so good it has an encore. */}
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-16'>
                        <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-5">
                            <h2 className="text-[#064a31] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight">
                                Research so good it has an encore.
                            </h2>
                            <p className="text-[#075539] text-base sm:text-lg md:text-xl leading-relaxed">
                                We know that research questions don't stop when the interviews end. So you talk to your transcripts with questions like 'How did our customers with families feel about the new design?'
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={AISearch} alt="ai-search" className="rounded-2xl sm:rounded-3xl w-full h-auto max-w-lg mx-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Search Section - Key focus on Responsive Toggle Buttons */}
            <section className='bg-[#ff6f98] p-6 sm:p-8 md:p-12 lg:p-20'>
                {/* Top Div */}
                <div className="lg:text-center lg:max-w-[850px] mx-auto text-white space-y-3 sm:space-y-4 md:space-y-5 poppins px-4">
                    <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#632738] font-semibold'>
                        More and effective research.
                    </h3>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-semibold lg:leading-15 leading-tight">
                        Take the grind out of research, for you and your participants.
                    </h2>
                    <p className="lg:max-w-2xl lg:mx-auto text-lg sm:text-xl md:text-2xl leading-relaxed">
                        Relaxed participants lead to detailed, more expressive responses. And detailed, more expressive responses lead to relaxed researchers.
                    </p>
                </div>

                <div className="bg-white rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] p-6 sm:p-10 md:p-12 lg:p-20 my-10 sm:my-12 md:my-16 lg:my-20 poppins">

                    {/* Toggle Buttons: flex-col (vertical) by default, lg:flex-row (horizontal) on desktop */}
                    <div className={`relative flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-0 px-1 sm:px-1 md:px-1 py-1 sm:py-1 md:py-1 max-w-full lg:max-w-md rounded-3xl lg:rounded-full mx-auto ${activeButton === "interview" ? "bg-[#c0ffca]" : "bg-[#ffd1dc]"}`}>

                        <button
                            onClick={() => setActiveButton("interview")}
                            // w-full on mobile/tablet, lg:w-1/2 on desktop
                            className={`relative z-10 w-full lg:w-1/2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-colors duration-300 ${activeButton === "interview"
                                ? 'bg-[#096846] text-white'
                                : 'bg-transparent text-[#096846] lg:text-[#632738]' // Text color changes based on active state
                                }`}
                        >
                            For interviewers
                        </button>

                        <button
                            onClick={() => setActiveButton("participant")}
                            // w-full on mobile/tablet, lg:w-1/2 on desktop
                            className={`relative z-10 w-full lg:w-1/2 py-3 sm:py-4 px-4 sm:px-6 md:px-8 rounded-full font-semibold text-base sm:text-lg transition-colors duration-300 ${activeButton === "participant"
                                ? 'bg-[#ff6f98] text-white'
                                : 'bg-transparent text-[#632738]' // Text color changes based on active state
                                }`}
                        >
                            For participants
                        </button>
                    </div>

                    {/* Use AnimatePresence to enable exit animations for content */}
                    <AnimatePresence mode="wait">
                        {/* Interviewer Content */}
                        {activeButton === 'interview' && (
                            <motion.div
                                key="interviewContent"
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                className='flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 my-10 sm:my-12 md:my-16 lg:my-20 items-center justify-center'>
                                <div className='w-full lg:w-1/2'>
                                    <p className='text-base sm:text-lg md:text-xl leading-relaxed'>
                                        Conducting research interviews used to be arduous work – now it's as simple as sending a link. Analysing those interviews could take weeks of transcription and coding – now detailed reports can be produced in a single click. And those random questions from management you used to have to say no to? Spin up a new interview in minutes, or use Tellet's AI Search to ask your existing transcripts.
                                    </p>
                                </div>
                                <div className='w-full lg:w-1/2'>
                                    <img className='rounded-2xl sm:rounded-3xl lg:rounded-4xl w-full h-auto max-w-lg mx-auto' src="https://framerusercontent.com/images/6jD6Dk9sREd1pmSSZs4PThfMLQE.jpg?scale-down-to=1024" alt="interviewer" />
                                </div>
                            </motion.div>
                        )}

                        {/* Participant Content */}
                        {activeButton === 'participant' && (
                            <motion.div
                                key="participantContent"
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                className='flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 my-10 sm:my-12 md:my-16 lg:my-20 items-center justify-center'>
                                <div className='w-full lg:w-1/2 order-2 lg:order-1'>
                                    <img className='rounded-2xl sm:rounded-3xl lg:rounded-4xl w-full h-auto max-w-lg mx-auto' src="https://framerusercontent.com/images/MKx4FNhFr2gO2yMlcWM3C08jVao.png?scale-down-to=1024" alt="participant" />
                                </div>
                                <div className='w-full lg:w-1/2 order-1 lg:order-2'>
                                    <p className='text-base sm:text-lg md:text-xl leading-relaxed'>
                                        There's a reason why people send a voice note instead of a message – sometimes you just need to express yourself properly. Tellet takes this observation and applies it for your participants' benefit. Freed from pecking away at the tiny keyboard, their responses become much more interesting. They feel they're being listened to, and they feel able to tell it like it is
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            <Testimonials />
            <CTA />
        </div>
    );
};

export default Solution;