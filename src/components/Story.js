import './Story.css';

import Scene1 from '../assets/media/scene-1.png';
import Scene2 from '../assets/media/scene-2.png';
import Scene3 from '../assets/media/scene-3.png';
import Scene4 from '../assets/media/scene-4.png';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Story() {
   
    const options2 = {
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 1,
        nav: true,
        dots: false,
        loop: true,
    }

    return(
        <>
            <section id="story">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="section-title text-center">
                                Story
                            </h2>

                                <OwlCarousel className="owl-theme" {...options2}>
                                    <div className="item scene">
                                        <img src={Scene1} alt="" />
                                        <div className="scene-text">
                                            <h4 className="pt-3 text-center">Scene #1</h4>
                                            <p className="secene-story">The Martians are planning to invade Earth to resupply their dwindling resources. The first stage of the invasion plan was to scout and assess Earth’s defense against an alien attack. Unfortunately, the first hundreds of scouting ships collapsed right after they entered the Earth’s atmosphere. The Martians miscalculated Earth’s gravity which caused the ships to collapse upon entry.</p>
                                        </div>
                                    </div>
                                    <div className="item scene">
                                        <img src={Scene2} alt="" />
                                        <div className="scene-text">
                                            <h4 className="pt-3 text-center">Scene #2</h4>
                                            <p className="secene-story">Fortunately, the Martians had a backup plan. Their top-of-the-line scouting suits allowed them to disguise themselves as humans and survive on the surface. Now, they are planning to collect the remains of their UFOs’ wreckage to build a ship and return to Mars. But SATOSHI AIRLINE has already salvaged some of the wreckage, making the task difficult for the Martians. The only way to get their stuff back is to purchase them using SAT TOKENS.</p>
                                        </div>
                                    </div>
                                    <div className="item scene">
                                        <img src={Scene3} alt="" />
                                        <div className="scene-text">
                                            <h4 className="pt-3 text-center">Scene #3</h4>
                                            <p className="secene-story">The Martians collected SAT TOKENS through mining and were able to buy pieces of their UFOs from SATOSHI AIRLINE. After buying enough parts, the Martians built a ship suitable for Earth. Since the ship can only travel within the Earth, the Martians still cannot get back to Mars. They utilized the new ship to travel around Earth and find more SAT TOKENS. They were also able to persuade some humans to follow their commands as Martian overlords. The Martians used their human followers to mine SAT TOKENS more efficiently.</p>
                                        </div>
                                    </div>
                                    <div className="item scene">
                                        <img src={Scene4} alt="" />
                                        <div className="scene-text">
                                            <h4 className="pt-3 text-center">Scene #4</h4>
                                            <p className="secene-story">With the help of their human followers, the Martians built a new spaceship that can take them back to Mars. As for their human followers, they continued to mine SAT TOKENS on Earth under the command of the Martians. The human followers are also building relay towers and hidden bases to help the Martians once they invade the Earth.</p>
                                        </div>
                                    </div>
                                </OwlCarousel>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Story;