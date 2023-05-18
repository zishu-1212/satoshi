import './Home.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNFT from "./components/MyNFT/MyNFT";
import { myNftCardData } from "./components/MyNFT/MyNftData";
import Landing from './components/Landing';
import Header from './components/Header';
function Home() {

  return (
      <div className="Home">

<BrowserRouter>
       <Header/>
        <Routes>
        

          <Route
            exact
            path="/"
            element={
             
                <Landing   />
            }
            
               
           
            
          />
          <Route
            exact
            path="/myNft"
            element={
             
                <MyNFT myNftCardData={myNftCardData}  />
            }
            
               
           
            
          />
   
        </Routes>
        
      </BrowserRouter>
        
    </div>
  );
}

export default Home;
