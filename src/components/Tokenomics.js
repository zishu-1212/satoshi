import './Tokenomics.css';

import TokenomicsImage from '../assets/media/tokenomics.png';

function Tokenomics() {
    return (
        <>
            <section id="tokenomics">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="section-title text-center"> Tokenomics </h2>

                            <div className="pt-5 tokenomics-img text-center">
                                <img src={TokenomicsImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tokenomics;