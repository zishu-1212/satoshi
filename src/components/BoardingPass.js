import './BoardingPass.css';

import SilverPass from '../assets/media/b-pass-silver.png';
import GoldPass from '../assets/media/b-pass-gold.png';
import MythicPass from '../assets/media/b-pass-mythic.png';
import OpenseaButton from '../assets/media/opensea-button.png';

function BoardingPass() {
    return (
        <>
            <section id="b-pass">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="section-title text-center">Boarding Pass NFT Cards</h2>
                            <p className="description text-center">
                                Boarding Pass NFTs allow you to virtual board planes and mine tokens when traveling at certain distances.<br />Receive better rewards with higher-level cards and by breeding Alien cards!
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="pass text-center pt-4">

                                <div className="single-pass text-center"><img src={SilverPass} alt="" /></div>
                                <div className="dual-pass">
                                    <img src={GoldPass} alt="" />
                                    <img src={MythicPass} alt="" />
                                </div>

                                <a href="#blank"><img className='opensea-btn' src={OpenseaButton} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BoardingPass;