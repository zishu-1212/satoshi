import './Intro.css'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Intro1 from '../assets/media/intro-1-min.png';
import Intro2 from '../assets/media/intro-2-min.png';
import Intro3 from '../assets/media/intro-3-min.png';

function Intro() {

    const options1 = {
        autoplay: true,
        autoplayhoverpause: "true",
        autoplaytimeout: 100,
        items: 1,
        nav: false,
        dots: true,
        loop: true,
    }

    return (
        <>
            <section id="intro">
                <div className="container">
                    <div className="row">
                        <div className="col">
                           <OwlCarousel className="owl-theme" {...options1}>
                                <div className="item">
                                    <div className="col-sm-6 pt-4 px-3 px-md-5">
                                        <h2 className="heading">Welcome To The Satoshi Airlines Of Fly2Earn</h2>
                                        <p className="pt-2 paragraph">A FLY2EARN platform with Social-Fi and Game-Fi elements. Earn token rewards when traveling by air and generate earnings by renting your own planes!</p>
                                    </div>
                                    <div className="col-sm-6 d-flex justify-content-center align-items-center">
                                        <img src={Intro1} className="img" alt="Satoshi Airlines" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="col-sm-6 pt-4 px-3 px-md-5">
                                        <h2 className="heading">Satoshi Airlines: The First Ascent!</h2>
                                        <p className="pt-2 paragraph">Satoshi Airlines is a story and community-driven, Fly To Earn NFT collection that has been summoned on the ARBITRUM blockchain.</p>
                                    </div>
                                    <div className="col-sm-6 d-flex justify-content-center align-items-center">
                                        <img src={Intro2} className="img" alt="Satoshi Airlines" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="col-sm-6 pt-4 px-3 px-md-5">
                                        <h2 className="heading">URANUS <br/>TRAVEL AI CHAT BOT !</h2>
                                        <p className="pt-2 paragraph">Booking flights, customizing travel plans, and enjoying the app will become better and more advanced! Using AI chat bots should help Satoshi Airlines continue with its upward trend.</p>
                                    </div>
                                    <div className="col-sm-6 d-flex justify-content-center align-items-center">
                                        <img src={Intro3} className="img" alt="Satoshi Airlines" />
                                    </div>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Intro;