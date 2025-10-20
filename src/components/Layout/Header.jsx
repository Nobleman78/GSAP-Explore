import Hero from "../LandingPage/Hero";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="relative">
            {/* Pink Section on Top */}
            <div className="bg-pink-200 h-auto lg:h-[750px] relative rounded-b-[70px] z-10 overflow-hidden">
                <Hero />
            </div>
            {/* Green Background */}
            <div className="bg-[#096846] absolute bottom-[-20px] left-0 w-full h-[100px] z-0"></div>
        </div>
    );
};

export default Header;
