import { useLocation } from "react-router-dom";

const CTA = () => {
    const location = useLocation()
    const isSolutionPage = location.pathname.includes('/solution')
    return (
        <div className='relative'>
            {/* Green CTA background */}
            <div className={`bg-[#096846] ${isSolutionPage ?'py-10':''} py-30 rounded-b-[70px] relative z-10`}>
                <div className='bg-[#ff6f98] mx-5 lg:mx-20 relative z-20 flex flex-col lg:flex-row justify-between rounded-[4rem]'>
                    <div className='p-10 lg:p-20 poppins space-y-5 lg:space-y-10 lg:w-2/3'>
                        <h2 className='text-[#fff7f9] text-xl lg:text-5xl font-bold'>
                            Ready for faster, cheaper, deeper insights?
                        </h2>
                        <p className='text-white text-lg lg:text-2xl'>
                            Get in touch and we’ll set you up with a Tellet demo.
                        </p>
                        <button className='bg-[#096846] px-10 py-5 text-white rounded-full text-xl cursor-pointer'>
                            Talk a Greg
                        </button>
                    </div>
                    <img
                        className='p-5 rounded-[4rem] lg:w-1/2'
                        src='https://framerusercontent.com/images/eZcvZs5JdBVrlvUtqKJtOHJzsVY.jpg?scale-down-to=512&width=2200&height=2200'
                        alt=''
                    />
                </div>
            </div>

            {/* Bottom bg */}
            <div className='bg-[#632738] absolute w-full h-[100px] bottom-[-30px] z-0'></div>
        </div>

    );
};

export default CTA;