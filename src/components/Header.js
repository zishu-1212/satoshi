import './Header.css';

import Logo from '../assets/media/logo.png';
import Icon from '../assets/media/hamburger-icon.png';
import Medium from '../assets/media/medium-min.png';
import Discord from '../assets/media/discord-min.png';
import Twitter from '../assets/media/twitter-min.png';
import Telegram from '../assets/media/telegram-min.png';

function Header() {
    return (
        <>
            <section id="header">
                <div className="container-fluid d-flex justify-content-between p-2 p-md-4 text-end">
                    <a href="/" className='logo-link'><img className='logo' src={Logo} alt="" /></a>
                    <img data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className='hamburger-icon' src={Icon} alt="" />

                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h4 id="offcanvasRightLabel" className='fw-800'>Menu</h4>
                            <button type="button" className="btn-close close-primary text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body" data-bs-dismiss="offcanvas">
                            <ul className='offcanvas-menu'>
                                <li><a href="#story" >STORY</a></li>
                                <li><a href="#nft">NFTs</a></li>
                                <li><a href="#node">AIRPORT NODE</a></li>
                                <li><a href="#tokenomics">TOKENOMICS</a></li>
                                <li><a href="#play">HOW TO PLAY</a></li>
                                <li><a href="#mint">Mint</a></li>
                                <li><a href="#space">SPACE PROGRAM</a></li>
                                <li><a href="#roadmap">ROADMAP</a></li>
                                <li><a href="https://satoshiair.gitbook.io/docs/" target="_blank" rel="noreferrer" >WHITEPAPER</a></li>
                                <li><a href="#faq">FAQs</a></li>
                                <li><a href="https://linktr.ee/satoshiairline" target="_blank" rel="noreferrer" >LINKTREE</a></li>
                                <li><a href="https://drive.google.com/file/d/1PnsXEPhC7O90mxStfTo5zfY_pCZSo4Lo/view" target="_blank" rel="noreferrer" >PITCH DECK</a></li>
                            </ul>
                            <div className="mt-5 social d-flex justify-content-between">
                                <a href="https://discord.gg/7pVTcHYHn7" target="_blank" rel="noreferrer" ><img src={Discord} alt="" /></a>
                                <a href="https://twitter.com/Satoshiairlines" target="_blank" rel="noreferrer" ><img src={Twitter} alt="" /></a>
                                <a href="https://t.me/satoshiairlines" target="_blank" rel="noreferrer" ><img src={Telegram} alt="" /></a>
                                <a href="https://medium.com/@satoshiairlines" target="_blank" rel="noreferrer" ><img src={Medium} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Header;