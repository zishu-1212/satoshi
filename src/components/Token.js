import './Token.css';

import SatToken from '../assets/media/sat-token.png';
import SapToken from '../assets/media/sap-token.png';
import DualToken from '../assets/media/dual-token.png';
import BuySAT from '../assets/media/buy-sat.png';
import DexTools from '../assets/media/dextools.png';

function Token(){
    return(
        <>
         <section id="token">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="section-title text-center">The Token</h2>

                        <div className="token-area pt-4 d-flex justify-content-center">
                            <div className="token-box px-4 text-center">
                                <img src={SatToken} alt="" />
                                <h5 className="token-name pt-3">SAT</h5>
                                <p className="token-desc">TOTAL SUPPLY 5 BILLION</p>
                            </div>
                            <div className="token-box px-4 text-center">
                                <img src={SapToken} alt="" />
                                <h5 className="token-name pt-3">SAP</h5>
                                <p className="token-desc">UNLIMITED SUPPLY</p>
                            </div>
                        </div>
                        <div className="pt-5 dual-token text-center"> <img src={DualToken} alt="" /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-3 dual-btn">

                        <div className="buy-btn p-2"><a href="https://app.uniswap.org/#/swap" target="_blank" > <img src={BuySAT} alt="BuySAT" /></a></div>
                         <div className="dex-btn p-2"><a href="https://www.dextools.io/app/en/arbitrum/pair-explorer/0xbda48c79636ff32aabf4efc5b6c7ef8a4d2848b2" target="_blank" ><img src={DexTools} alt="DEXTOOLS" /></a></div> 

                    </div>
                </div>
            </div>
         </section>
        </>
    )
}

export default Token;