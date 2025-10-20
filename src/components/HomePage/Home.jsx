import CTA from "../LandingPage/CTA";
import Guidence from "../LandingPage/Guidence";
import Inside from "../LandingPage/Inside";
import NewestAddiction from "../LandingPage/NewestAddiction";
import News from "../LandingPage/News";
import Quote from "../LandingPage/Quote";
import Testimonials from "../LandingPage/Testimonials";
import WhyTellet from "../LandingPage/WhyTellet";
import Header from "../Layout/Header";

const Home = () => {
    return (
        <div className=''>
            {/* <Overlay /> */}
            <Header />
            <Quote />
            <NewestAddiction />
            <Inside />
            <Guidence />
            <WhyTellet />
            <Testimonials />
            <News />
            <CTA />
        </div>
    );
};

export default Home;