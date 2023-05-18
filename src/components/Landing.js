import React from 'react'
import Preloader from './Preloader';
import Header from './Header';
import Banner from './Banner';
import Intro from './Intro';
import Story from './Story';
import PlaneNFT from './PlaneNFT';
import NodeAirPort from './NodeAirPort';
import BoardingPass from './BoardingPass';
import Token from './Token';
import Tokenomics from './Tokenomics';
import HowToPlay from './HowToPlay';
import Space from './Space';
import Roadmap from './Roadmap';
import Faq from './Faq';
import Partners from './Partners';
import Footer from './Footer';
import Featured from './Featured';
import Homeland from './Homeland/Homeland'
function Landing() {
  return (
    <div>
               <Preloader/>
        
        <Banner />
        <Intro />
        <Story />
        <PlaneNFT />
        <NodeAirPort />
        {/* <BoardingPass /> */}
        <Token />
        <Tokenomics />
        <HowToPlay />
        <Homeland/>
        <Space />
        <Roadmap />
        <Featured />
        <Faq />
        {/* <Partners /> */}
        <Footer />
    </div>
  )
}

export default Landing