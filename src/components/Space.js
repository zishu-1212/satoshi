import './Space.css';

import SpaceProject from '../assets/media/space-project.png';

function Space() {
    return(
        <>
            <section id="space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            <h2 className="section-title">Satoshi Space Program</h2>
                            <div className="space-img py-3 text-center"><img src={SpaceProject} alt="" /></div>
                            <p className="description">Satoshi Airlines is looking for crew members who will travel to the moon and represent the company in space. The trip is free, so grab the opportunity while you can!</p>
                            <p className="description">The requirements and other details about this program will be announced later.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Space;