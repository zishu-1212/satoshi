import './Featured.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import DigitalJournal from '../assets/media/digital-journal.png';
import MarketWatch from '../assets/media/market-watch.png';
import ABNews from '../assets/media/ab-news-wire.png';
import Benzinga from '../assets/media/benzinga.png';
import AP from '../assets/media/ap.png';
import ReadButton from '../assets/media/read-btn.png';


function Featured() {

    const FeaturedOwl1 = {
        autoplay: false,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 7,
        nav: false,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            769: {
                items: 2,
                dots: true
            },
            1200: {
                items: 3,
                dots: true
            },
            1400: {
                items: 5,
                dots: true
            }
        }
        }

    return(
        <>
          <section id="featured">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col">
                            <h2 className="section-title text-center">Featured In</h2>
                            <p className="description text-center">Social-FI and Game-FI & Fly to earn, Travel to earn!</p>
                        </div>
                    </div>
                    
                    <OwlCarousel className="owl-theme" {...FeaturedOwl1} >
                        
                        <div class="box m-2 d-flex justify-content-center align-items-center flex-column">
                            <img src={DigitalJournal} className="logo mb-4" alt="DigitalJournal" />
                            <a href="https://www.digitaljournal.com/pr/news/satoshi-airlines-the-first-fly-to-earn-app-web3-air-travel-lifestyle-application" target="_blank" rel="noreferrer"><img src={ReadButton} alt="Button" className='btn' /></a>
                        </div>
                        
                        <div className="box m-2 d-flex justify-content-center align-items-center flex-column">
                            <img src={MarketWatch} className="logo mb-4" alt="MarketWatch" />
                            <a href="https://www.marketwatch.com/press-release/satoshi-airlines-problems-and-solutions-for-the-fly-to-earn-model-2023-02-23" target="_blank" rel="noreferrer"><img src={ReadButton} alt="Button" className='btn' /></a>
                        </div>
                        
                        
                        <div className="box m-2 d-flex justify-content-center align-items-center flex-column">
                            <img src={ABNews} className="logo mb-4" alt="ABNews" />
                            <a href="https://www.abnewswire.com/pressreleases/satoshi-airlines-new-web3-gamified-flytoearn-and-traveltoearn-business-model_640049.html" target="_blank" rel="noreferrer"><img src={ReadButton} alt="Button" className='btn' /></a>
                        </div>

                        <div className="box m-2 d-flex justify-content-center align-items-center flex-column">
                            <img src={Benzinga} className="logo mb-4" alt="Benzinga" />
                            <a href="https://www.benzinga.com/pressreleases/23/02/ab31054558/satoshi-airlines-new-web3-gamified-fly-to-earn-and-travel-to-earn-business-model" target="_blank" rel="noreferrer"><img src={ReadButton} alt="Button" className='btn' /></a>
                        </div>
                        
                        
                        <div className="box m-2 d-flex justify-content-center align-items-center flex-column">
                            <img src={AP} className="logo-alt mb-4" alt="AP" />
                            <a href="https://apnews.com/press-release/prodigy-news/sap-se-prodigy-news-indonesia-bali-business-c25d4db6905cc6eb8c434c9fb3aa9c56" target="_blank" rel="noreferrer" ><img src={ReadButton} alt="Button" className='btn' /></a>
                        </div>
                        
                    </OwlCarousel>

                </div>
          </section>
        </>

    )

    }

export default Featured;