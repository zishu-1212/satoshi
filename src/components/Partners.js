import './Partners.css';

import SodaPlay from '../assets/partners/soda-play.png';
import RootOne from '../assets/partners/root-one.png';
import ToTheMoon from '../assets/partners/to-the-moon.png';
import MetaCube from '../assets/partners/metacube.png';


function Partners() {
    return (
        <>
            <section id="partners">
                <div className="container">
                    <div className="row pb-md-5 pb-3">
                        <div className="col">
                            <h2 className="section-title text-center">Partners</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <img src={SodaPlay} alt="" />
                            <img src={RootOne} alt="" />
                            <img src={ToTheMoon} alt="" />
                            <img src={MetaCube} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Partners;