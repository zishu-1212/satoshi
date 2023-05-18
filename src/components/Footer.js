import './Footer.css';
import { useState } from 'react';

import Medium from '../assets/media/medium.png';
import Discord from '../assets/media/discord.png';
import Twitter from '../assets/media/twitter.png';
import Telegram from '../assets/media/telegram.png';
import Plane from '../assets/media/scroll-top.png';
import FooterBanner from '../assets/media/footer-banner.png';

function Footer() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 order-md-1 order-1 p-3 d-flex justiy-content-center align-items-center">
                            <div className="footer-social">
                                <h5>Join The Satoshi Airlines Community!</h5>
                                <a href="https://discord.gg/7pVTcHYHn7" target="_blank" rel="noreferrer" ><img src={Discord} alt="" /></a>
                                <a href="https://twitter.com/Satoshiairlines" target="_blank" rel="noreferrer" ><img src={Twitter} alt="" /></a>
                                <a href="https://t.me/satoshiairlines" target="_blank" rel="noreferrer" ><img src={Telegram} alt="" /></a>
                                <a href="https://medium.com/@satoshiairlines" target="_blank" rel="noreferrer" ><img src={Medium} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-4 order-md-2 order-3 p-3">
                            <div className="footer-center">
                                <img src={FooterBanner} alt="" />
                                <p className='copyright pt-3'>© 2022 Satoshi Airlines. | All Rights Reserved | <a href="mailto:team@satoshiair.xyz">team@satoshiair.xyz</a></p>
                            </div>
                        </div>
                        <div className="col-md-4 order-md-3 order-2 p-3 d-flex justiy-content-center align-items-center">
                            <p className="description">
                                Catch us on twitter and discord to stay updated with the latest news and announcements!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='scroll-top'>
                <img src={Plane} onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} alt="" />
            </div> 

        </>
    )
}

export default Footer;