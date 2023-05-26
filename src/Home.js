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
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import {
  abiConstants,
  addressConstants,
} from "./components/contract/contract";
function Home() {
  let [imageArray, setImageArray] = useState([]);
 const [send,setSend]=useState("");
  const [tokn, setTokn] = useState("");
  const [call, setCall] = useState();
  const dispatch = useDispatch();
  const addr = useSelector((state) => state.connected.connection);
 

  const allImagesNfts = async () => {
    try {
      const web3 = window.web3;
      let nftContractOf = new web3.eth.Contract(
        abiConstants,
        addressConstants
      );

      let simplleArray = [];
      let walletOfOwner = await nftContractOf.methods
        .walletOfOwner(addr)
        .call();
      
      if (!walletOfOwner) {
        toast.error('Wallet of owner is undefined or empty');
        console.log('Wallet of owner is undefined or empty');
        return;
      }

      let walletLength = walletOfOwner.length;

      for (let i = 0; i < walletLength; i++) {
        try {
          const uri = await nftContractOf.methods.tokenURI(i).call();
          let tokenid = walletOfOwner[i];
          setSend(tokenid)
          simplleArray = [
            ...simplleArray,
            { imageUrl: uri, tokenid: tokenid },
          ];
          setImageArray(simplleArray);
        } catch (e) {
          console.log('Error while Fetching Api', e);
        }
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="Home">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Preloader />
                <Banner />
                <Intro />
                <Story />
                <PlaneNFT />
                <NodeAirPort />
                <Token />
                <Tokenomics />
                <HowToPlay />
                <Homeland send={send} />
                <Space />
                <Roadmap />
                <Featured />
                <Faq />
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
