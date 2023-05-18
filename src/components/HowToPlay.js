import './HowToPlay.css';
import { useState } from "react";

import MobileGif from '../assets/media/mobile-gif.gif';
import Store from '../assets/media/store-icons.png';
import MainImage from '../assets/media/main-img.png';
import Image2 from '../assets/media/details.png';
import Image3 from '../assets/media/img-3.png';
import Image4 from '../assets/media/img-4.gif';
import Image5 from '../assets/media/img-5.png';
import Image6 from '../assets/media/img-6.gif';
import Image7 from '../assets/media/img-7.png';
import Image8 from '../assets/media/img-8.png';
import Icon1 from '../assets/media/icon-1.png';
import Icon2 from '../assets/media/icon-2.png';
import Icon3 from '../assets/media/icon-3.png';
import Icon4 from '../assets/media/icon-4.png';
import Icon5 from '../assets/media/icon-5.png';
import Icon6 from '../assets/media/icon-6.png';
import Icon7 from '../assets/media/icon-7.png';
import Icon8 from '../assets/media/icon-8.png';

function HowToPlay() {

    let [image, setImage] = useState(MainImage);

    const handleImage = (param) => {

        // console.log("Before set Image Name:", image);

        setImage(param);

        // console.log("Param:", param);
        // console.log("After set Image Name:", image);

    };

    return (
        <>
            <section id="play">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className="section-title">How To Play</h2>
                            <img src={Store} className="google py-3" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 order-md-1 order-1">
                            <div className="icon-box text-center pt-4 pt-md-0" onMouseOver={() => handleImage(MainImage)}>
                                <div className="icon"> <img src={Icon1} alt="" /> </div>
                                <div className="title pt-2"><h5>1 Buy a Plan or Use a Boarding Pass</h5></div>
                                <div className="desc"><p>Buy a plane to fly passengers to their destinations or get a boarding pass to get a ride from other planes.</p></div>
                            </div>
                            <div className="icon-box text-center" onMouseOver={() => handleImage(Image2)}>
                                <div className="icon"> <img src={Icon2} alt="" /> </div>
                                <div className="title pt-2"><h5>2 Plane Information Page</h5></div>
                                <div className="desc"><p>Read information about a plane's status to help you choose which one to use.</p></div>
                            </div>
                            <div className="icon-box text-center" onMouseOver={() => handleImage(Image3)}>
                                <div className="icon"> <img src={Icon3} alt="" /> </div>
                                <div className="title pt-2"><h5>3 Book Flight</h5></div>
                                <div className="desc"><p>Book a flight through the app and earn rewards!</p></div>
                            </div>
                            <div className="icon-box text-center" onMouseOver={() => handleImage(Image4)}>
                                <div className="icon"> <img src={Icon4} alt="" /> </div>
                                <div className="title pt-2"><h5>4 Fly &amp; Earn Rewards</h5></div>
                                <div className="desc"><p>Get rewards based on the distance you traveled via airplane. The further you go the higher the rewards!</p></div>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 order-3 py-md-0 py-4 text-center d-flex align-items-center justify-content-center">
                            <img className='img img-fluid d-none d-md-block' src={image} alt="" />
                            <img className='img img-fluid d-block d-md-none' src={MobileGif} alt="" />
                        </div>
                        <div className="col-md-3 order-md-3 order-2 d-flex justify-content-center flex-column">
                            <div className="icon-box text-center" onMouseOver={() => handleImage(Image5)}>
                                <div className="icon"> <img src={Icon5} alt="" /> </div>
                                <div className="title pt-2"><h5>5 Rent Your Airplane</h5></div>
                                <div className="desc"><p> Earn more rewards during non-travel periods by renting your planes.</p></div>
                            </div>
                            <div className="icon-box text-center" onMouseOver={() => handleImage(Image6)}>
                                <div className="icon"> <img src={Icon6} alt="" /> </div>
                                <div className="title pt-2"><h5>6 Buy Runes and Other items to upgrade your plane</h5></div>
                                <div className="desc"><p>Upgrade your plane with better gear to earn more rewards.</p></div>
                            </div>
                            {/* <div className="icon-box text-center" onMouseOver={() => handleImage(Image7)}>
                                <div className="icon"> <img src={Icon7} alt="" /> </div>
                                <div className="title pt-2"><h5>7 Register for Virtual mining flights </h5></div>
                                <div className="desc"><p>Allow Boarding Pass Card Holders to mine on board and get extra reward.</p></div>
                            </div> */}
                            <div className="icon-box text-center" onMouseOver={() => handleImage(Image8)}>
                                <div className="icon"> <img src={Icon8} alt="" /> </div>
                                <div className="title pt-2"><h5>7 Breed Plane Card </h5></div>
                                <div className="desc"><p>it can be strengthened with UFO cards with a certain amount of SAT+SAP tokens.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowToPlay;