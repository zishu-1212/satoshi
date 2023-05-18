import './NodeAirPort.css';

import NodeSys from '../assets/media/node-min.png';

function NodeAirPort() {

    return (

    <section id="node">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h2 className="section-title text-center">The NFT Airport Node System</h2>
                        <p className="description text-center">
                            Set up an Airport Node in high-traffic airports to passively earn reward tokens. <br />
                            The more travelers that check-in at the airport, the more rewards you can get from an Airport Node. 
                        </p>
                    <img className='img img-fluid pt-3' src={NodeSys} alt="" />
                </div>
            </div>
        </div>
    </section>

    );
}

export default NodeAirPort;