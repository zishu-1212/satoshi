import './Roadmap.css';

import Map from '../assets/media/roadmap.png';

function Roadmap() {
    return (
        <>
            <section id="roadmap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title text-center">Roadmap</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 map text-center">
                            <img className="img img-fluid" src={Map} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Roadmap;