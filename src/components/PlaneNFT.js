import './PlaneNFT.css';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Plane1 from '../assets/plane-nft/plane-1.png';
import Plane2 from '../assets/plane-nft/plane-2.png';
import Plane3 from '../assets/plane-nft/plane-3.png';
import Plane4 from '../assets/plane-nft/plane-4.png';
import Plane5 from '../assets/plane-nft/plane-5.png';
import Plane6 from '../assets/plane-nft/plane-6.png';
import Plane7 from '../assets/plane-nft/plane-7.png';
import Plane8 from '../assets/plane-nft/plane-8.png';
import Plane9 from '../assets/plane-nft/plane-9.png';
import OpenseaButton from '../assets/media/opensea-button.png';

function PlaneNFT() {

    const options3 = {
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 7,
        nav: false,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 2,
                dots: true
            },
            769: {
                items: 4,
                dots: true
            },
            1200: {
                items: 5,
                dots: true
            },
            1400: {
                items: 7,
                dots: true
            }
        }
        }

    return(
        <>
            <section id="nft">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className="section-title text-center">Plane NFT Cards</h2>
                            <p className="description text-center">
                                Airplane NFTs allow you to mine tokens when traveling by air. <br /> Airplane cardholders can rent airplanes for periods when they are not traveling. 
                            </p>

                            <a href="#blank"><img className='opensea-btn' src={OpenseaButton} alt="" /></a>
                            
                            <div className="nft-carousel pt-4 text-center">
                                <OwlCarousel className="owl-theme" {...options3} >
                                    <div className="item m-1"><img src={Plane1} alt="" /></div>
                                    <div className="item m-1"><img src={Plane2} alt="" /></div>
                                    <div className="item m-1"><img src={Plane3} alt="" /></div>
                                    <div className="item m-1"><img src={Plane4} alt="" /></div>
                                    <div className="item m-1"><img src={Plane5} alt="" /></div>
                                    <div className="item m-1"><img src={Plane6} alt="" /></div>
                                    <div className="item m-1"><img src={Plane7} alt="" /></div>
                                    <div className="item m-1"><img src={Plane8} alt="" /></div>
                                    <div className="item m-1"><img src={Plane9} alt="" /></div>
                                </OwlCarousel>

                                

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlaneNFT;