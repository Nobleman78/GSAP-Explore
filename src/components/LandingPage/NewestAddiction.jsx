import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"
import NewsOne from '../../assets/News/NewsOne.avif'
import NewsTwo from '../../assets/News/NewsTwo.avif'
import NewsThree from '../../assets/News/NewsThree.avif'

export default function TelletInspiredPage() {
    const [activeSection, setActiveSection] = useState('insights')

    return (
        <div className="min-h-screen max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
            {/*Header  */}
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                className="w-full lg:w-[700px] text-3xl md:text-4xl lg:text-5xl text-[#623728] poppins font-semibold">
                The newest addition to your research toolkit.
            </motion.h2>

            {/* Main Content */}
            <main className="poppins mt-8 md:mt-12 lg:mt-15">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 md:space-y-10 lg:space-y-15 order-2 lg:order-1">

                        {/* Insights Section */}
                        <div
                            className="relative cursor-pointer transition-opacity duration-300 hover:opacity-100"
                            style={{ opacity: activeSection === 'insights' ? 1 : 0.4 }}
                            onClick={() => setActiveSection('insights')}>
                            {activeSection === 'insights' && (
                                <motion.div
                                    layoutId="activeBar"
                                    className="absolute left-0 top-0 bottom-0 w-2 bg-[#ff6f98] rounded-full"
                                />
                            )}
                            <div className="pl-4 md:pl-6">
                                <h1 className="text-2xl md:text-3xl font-bold text-[#623728] leading-tight">
                                    Insights in hours, not weeks.
                                </h1>
                                {activeSection === 'insights' && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-purple-900 mt-3 md:mt-4 text-base md:text-lg">
                                        Gather the rich insights of qual interviews, at the speed and scale of quant surveys. Get detailed analysis in one click.
                                    </motion.p>
                                )}
                            </div>
                        </div>

                        {/* Deep insights section */}
                        <div
                            className="relative cursor-pointer transition-opacity duration-300 hover:opacity-100"
                            style={{ opacity: activeSection === 'deep' ? 1 : 0.4 }}
                            onClick={() => setActiveSection('deep')}>
                            {activeSection === 'deep' && (
                                <motion.div
                                    layoutId="activeBar"
                                    className="absolute left-0 top-0 bottom-0 w-2 bg-[#ff6f98] rounded-full"
                                />
                            )}
                            <div className="pl-4 md:pl-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#623728]  leading-tight">
                                    Deep insights, without deep pockets.
                                </h2>
                                {activeSection === 'deep' && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-purple-900 mt-3 md:mt-4 text-base md:text-lg">
                                        Converse with hundreds of customers at once, at a fraction of the cost of traditional qualitative methods.
                                    </motion.p>
                                )}
                            </div>
                        </div>

                        {/* Transcripts section */}
                        <div
                            className="relative cursor-pointer transition-opacity duration-300 hover:opacity-100"
                            style={{ opacity: activeSection === 'transcripts' ? 1 : 0.4 }}
                            onClick={() => setActiveSection('transcripts')}>
                            {activeSection === 'transcripts' && (
                                <motion.div
                                    layoutId="activeBar"
                                    className="absolute left-0 top-0 bottom-0 w-2 bg-[#ff6f98] rounded-full"
                                />
                            )}
                            <div className="pl-4 md:pl-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#623728]  leading-tight">
                                    Transcripts you can talk to.
                                </h2>
                                {activeSection === 'transcripts' && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-purple-900 mt-3 md:mt-4 text-base md:text-lg">
                                        Ask the research questions that come up months later. Tellet's AI Search lets you talk to your transcripts with questions like 'How important is sustainability to our customers?'
                                    </motion.p>
                                )}
                            </div>
                        </div>
                        <button className="bg-[#096946] text-white px-8 md:px-10 py-3 md:py-4 cursor-pointer text-base md:text-lg rounded-full w-full sm:w-auto">
                            Learn More
                        </button>
                    </div>

                    {/* Right Image/Visual Section */}
                    <div className="relative order-1 lg:order-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSection}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="relative">
                                {/* Main Image Container */}
                                <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
                                    <div className="text-6xl md:text-7xl lg:text-8xl">
                                        {activeSection === 'insights' && (
                                            <div>
                                                <img src={NewsOne} alt="newsone-image" className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover" />
                                            </div>
                                        )}
                                        {activeSection === 'deep' && (
                                            <div>
                                                <img src={NewsTwo} alt="newstwo-image" className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover" />
                                            </div>
                                        )}
                                        {activeSection === 'transcripts' && (
                                            <div>
                                                <img src={NewsThree} alt="news-three" className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Floating Cards based on section */}
                                {activeSection === 'insights' && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 left-4 sm:left-6 md:left-8 lg:left-12 bg-purple-900 text-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-xl">
                                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">8<span className="text-xl sm:text-2xl md:text-3xl">/10</span></div>
                                            <div className="text-xs md:text-sm mt-1 md:mt-2 opacity-90">Net Promoter<br />Score</div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="absolute top-16 sm:top-20 md:top-24 lg:top-32 right-2 sm:right-4 md:right-6 lg:right-8 bg-purple-900 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-xl">
                                            <div className="text-white text-xs sm:text-sm md:text-base font-semibold mb-2 md:mb-3">Brand associations</div>
                                            <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
                                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 sm:border-6 md:border-8 border-pink-400 relative overflow-hidden">
                                                    <div className="absolute top-0 left-0 w-1/2 h-full bg-pink-400"></div>
                                                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-green-300"></div>
                                                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-emerald-600"></div>
                                                </div>
                                                <div className="space-y-1 hidden sm:block">
                                                    <div className="text-[10px] sm:text-xs bg-white px-2 py-1 rounded">Premium 40%</div>
                                                    <div className="text-[10px] sm:text-xs bg-white px-2 py-1 rounded">Sustainable 30%</div>
                                                    <div className="text-[10px] sm:text-xs bg-white px-2 py-1 rounded">Affordable 20%</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </>
                                )}

                                {activeSection === 'deep' && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 left-4 sm:left-6 md:left-8 lg:left-12 bg-purple-900 text-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-xl">
                                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">87.6%</div>
                                            <div className="text-xs md:text-sm mt-1 md:mt-2 opacity-90">Completion<br />rate</div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 right-4 sm:right-6 md:right-8 lg:right-12 bg-purple-900 text-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-xl">
                                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">328</div>
                                            <div className="text-xs md:text-sm mt-1 md:mt-2 opacity-90">Completed<br />interviews</div>
                                        </motion.div>
                                    </>
                                )}

                                {activeSection === 'transcripts' && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="absolute top-24 sm:top-32 md:top-36 lg:top-48 left-4 sm:left-6 md:left-8 lg:left-12 bg-green-300 text-emerald-900 rounded-full px-4 py-2 md:px-5 md:py-3 shadow-xl flex items-center gap-2 font-semibold text-sm md:text-base">
                                            <span>AI search</span>
                                            <span className="text-lg md:text-xl">✨</span>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 bg-emerald-700 text-white rounded-full px-4 py-3 md:px-6 md:py-4 shadow-xl flex items-center gap-2 md:gap-3 w-[90%] sm:w-auto sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px]">
                                            <span className="text-base md:text-lg">🔍</span>
                                            <span className="text-xs sm:text-sm font-medium">How important is sustainability to our customers?</span>
                                        </motion.div>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
    )
}