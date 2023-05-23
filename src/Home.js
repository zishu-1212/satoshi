import './Home.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNFT from "./components/MyNFT/MyNFT";
import { myNftCardData } from "./components/MyNFT/MyNftData";
import Landing from './components/Landing';
import Header from './components/Header';
import Preloader from './components/Preloader';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Story from './components/Story';
import PlaneNFT from './components/PlaneNFT';
import NodeAirPort from './components/NodeAirPort';
import Token from './components/Token';
import Tokenomics from './components/Tokenomics';
import HowToPlay from './components/HowToPlay';
import Space from './components/Space';
import Roadmap from './components/Roadmap';
import Featured from './components/Featured';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Homeland from './components/Homeland/Homeland';
import MyNftEmpty from './components/MyNftEmpty/MyNftEmpty';
import { useDispatch, useSelector } from "react-redux";
import { connectionAction } from "./redux/connection/actions";
function Home() {
  const dispatch = useDispatch();
  const addr = useSelector((state) => state.connected.connection);
  return (
      <div className="Home">

<BrowserRouter>
       <Header/>
        <Routes>
        

          <Route
            exact
            path="/"
            element={
             
                <>
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
                </>
            }
            
               
           
            
          />
          <Route
            exact
            path="/myNft"
            element={
              connectionAction?
               ( <MyNFT myNftCardData={myNftCardData}  />):(<MyNftEmpty/>)
            }
            
               
           
            
          />
   
        </Routes>
        
      </BrowserRouter>
        
    </div>
  );
}

export default Home;
