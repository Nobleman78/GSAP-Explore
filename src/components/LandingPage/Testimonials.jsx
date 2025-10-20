import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        content: "This product has transformed the way we work. The team is responsive and the features are exactly what we needed.",
        avatar: "SJ",
        color: "#0cdcf7"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Designer, Creative Co",
        content: "Outstanding quality and attention to detail. I've recommended this to all my colleagues and friends.",
        avatar: "MC",
        color: "#7c3aed"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Marketing Director",
        content: "The ROI we've seen is incredible. Implementation was smooth and the support team went above and beyond.",
        avatar: "ER",
        color: "#ec4899"
    },
]

const Testimonials = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [direction, setDirection] = useState(1)

    function setSlide(newDirection) {
        let nextIndex = selectedIndex + newDirection

        // If index goes past the last slide, wrap to first
        if (nextIndex >= testimonials.length) {
            nextIndex = 0
        }

        // If index goes before the first slide, wrap to last
        if (nextIndex < 0) {
            nextIndex = testimonials.length - 1
        }
        setSelectedIndex(nextIndex)
        setDirection(newDirection)
    }

    const currentTestimonial = testimonials[selectedIndex]

    return (
        <div className="bg-[#096846] py-12 sm:py-16 md:py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-2 md:mb-12 lg:mb-16">
                    <h2 className="text-[#c0ffca] text-sm sm:text-base md:text-xl lg:text-3xl font-semibold poppins">
                        Don't just take our word for it.
                    </h2>
                    <p className="text-[#f9fffa] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold poppins">
                        Here's what our customers say.
                    </p>
                </div>

                {/* Slider */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                    <div className="relative poppins w-full max-w-2xl h-[420px] sm:h-96 md:h-80 overflow-hidden order-2 md:order-none">
                        <AnimatePresence custom={direction} initial={false} mode="popLayout">
                            <motion.div
                                key={currentTestimonial.id}
                                custom={direction}
                                initial={{ opacity: 0, x: direction * 300 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.2,
                                        type: "spring",
                                        duration: 0.6,
                                        bounce: 0.3,
                                    },
                                }}
                                exit={{ opacity: 0, x: direction * -300 }}
                                className="absolute inset-0 flex items-center justify-center px-2 sm:px-4">
                                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl max-w-xl w-full">
                                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                        <motion.div
                                            initial={false}
                                            animate={{ backgroundColor: currentTestimonial.color }}
                                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold flex-shrink-0">
                                            {currentTestimonial.avatar}
                                        </motion.div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                                                {currentTestimonial.name}
                                            </h3>
                                            <p className="text-sm sm:text-base text-gray-600">{currentTestimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                        {currentTestimonial.content}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex md:flex-col gap-3 md:gap-4 order-1 md:order-none">
                        <motion.button
                            initial={false}
                            animate={{ backgroundColor: currentTestimonial.color }}
                            aria-label="Previous"
                            className="w-12 h-12 rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
                            onClick={() => setSlide(-1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <IoIosArrowBack className="text-white text-xl sm:text-2xl cursor-pointer" />
                        </motion.button>

                        <motion.button
                            initial={false}
                            animate={{ backgroundColor: currentTestimonial.color }}
                            aria-label="Next"
                            className="w-12 h-12 rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
                            onClick={() => setSlide(1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <IoIosArrowForward className="text-white text-xl sm:text-2xl cursor-pointer" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials