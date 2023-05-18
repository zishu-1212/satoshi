import './Banner.css';
import Medium from '../assets/media/medium.png';
import Discord from '../assets/media/discord.png';
import Twitter from '../assets/media/twitter.png';
import Telegram from '../assets/media/telegram.png';
import Plane from '../assets/media/plane.png';

function Banner() {
    return (
        <>
            <section id="banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="social-links">
                                <a href="https://discord.gg/7pVTcHYHn7" className='d-none d-md-block' target="_blank" rel="noreferrer" ><img src={Discord} alt="" /></a>
                                <a href="https://twitter.com/Satoshiairlines" className='d-none d-md-block' target="_blank" rel="noreferrer" ><img src={Twitter} alt="" /></a>
                                <a href="https://t.me/satoshiairlines" className='d-none d-md-block' target="_blank" rel="noreferrer" ><img src={Telegram} alt="" /></a>
                                <a href="https://medium.com/@satoshiairlines" className='d-none d-md-block' target="_blank" rel="noreferrer" ><img src={Medium} alt="" /></a>
                            </div>
                            <div className="scroll-down slide-bottom">
                                <a href="#intro" className='d-none d-md-block'><img src={Plane} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;