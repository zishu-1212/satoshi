import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { connectionAction } from "../../redux/connection/actions";
import { abiConstants, addressConstants } from "../contract/contract";
import Web3 from "web3";
import "./Home.css"
import pinkPlane from "../../assets/pinkPlane.png";
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import homeHeaderImg from "../../assets/Group 773.png";
import Plane from "../../assets/yellowPlane.png";
import companyLogo from "../../assets/logo.png";
import cloudImg from "../../assets/cloud.png";
import largeCloudImg from "../../assets/largeCloud.png";
import blackPlane from "../../assets/Planee.png";
import { Link } from "react-router-dom";
const steps = [
  {
    label: "Sap Rewards Via Fly-to-Earn",
  },
  {
    label: "SAT Rewards via Travel-to-Earn",
  },
  {
    label: "Mint NFT Cards more with invite friends",
  },
  {
    label: "Breeding and Upgrading Cards",
  },
  {
    label: "Passive Income Through Airport Node",
  },
];

const Home = () => {
const [count, setCount] = useState(0);
const [showModal, setShowModal] = useState(false);

  const [img, setImg]=useState ("")
  const dispatch = useDispatch();
  const addr = useSelector((state) => state.connected.connection);

const increase=()=>{
  setCount(count+1)

}
const decreaing=()=>{
  setCount(count-1)
}




  const callNFT = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      const contract = new web3.eth.Contract(abiConstants, addressConstants);
    
      const jjwj=await contract.methods.Mint().send({
        from: addr,
        value: web3.utils.toWei("0.0003", "ether"),
        
      })
      
      console.log(jjwj);
      toast.success('minting successful ')
      setShowModal(true);
      } catch (error) {
        console.error("Error retrieving token URI:", error);
        toast.error('Error retrieving token URI ')
      }
    };
  
   
    


    useEffect(() => {
     
  },[]);
  return (
    <div className="bgHomeColor py-4 " id="mint">
       
      <div className="bgNftImg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-7 ">
              <div className="">
                <img src={homeHeaderImg} alt="" className="img-fluid" />
              </div>
              <div className="row justify-content-center pt-5">
                <div className="col-10 col-md-8 col-lg-6 card-bg p-4 text-center ">
                  <h5 className="fw-bold">MINT YOUR PLANE FOR FUTURE REWARD</h5>
                  <p>Price per Plane - 90 ARB Each</p>
                  <h1 className="text-white fw-bolder">0/3,333</h1>
                  <div className="d-flex  justify-content-center  align-items-center ">
                    <button className="card-btn" onClick={()=>{increase()}}>
                      +
                    </button>
                    <input
                      type="text"
                      value={count}
                      className="input-field p-2 mx-3 text-center fw-bold "
                    />
                    <button className="card-btn"onClick={()=>{
                      decreaing()
                    }}>
                      -
                    </button>
                  </div>
                  <p className="pt-2 lh-sm  mb-0">Total 90 Arb</p>
                  <p className="lh-sm ">5 Max</p>
                  <div className="button-width">
                    <div>
                    <button
        className="px-3 py-1 text-uppercase connectWalletBtn py-2 mb-3  fw-bold "
        onClick={() => {
          dispatch(connectionAction());
         
        }}
      >
                {addr
                ? addr?.substring(0, 4) +
                "..." +
                addr?.substring(addr?.length - 4):"Connect Wallet"} 
                
                        {/* Connect Wallet */}
                       
                      </button>
                    </div>

                    <div className="d-flex justify-content-evenly   ">
                      <button className="homeCardBtn"onClick={()=>{callNFT()}} > MINT </button>
                      <Link to="/myNft">
                        <button
                          className="homeCardBtn"
                         
                       
                        >
                          MY NFT
                        </button>
                      </Link>
                      <Modal show={showModal} onHide={() => setShowModal(false)}    centered > 
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
        <div className="container py-3 pb-5">
            <div className="row justify-content-center align-items-center">
              <div className="col-11 nft-transfer-card   ">
               
                <div className=" mx-auto text-center">
                  <h4 className="text-center fw-bold mb-2">Congratulations!</h4>
                  
                <p className="got-plane">You got a plane NFT card !</p>
                <div className="back-img ">
                  <div className="card nft-transfer-img-card width-set mx-auto" >
                    <img
                      src={Plane}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                    <div className="card-body d-flex nftTRansfer-card-body flex-column justify-content-between align-items-center">
                      <h6 className="card-text fw-bold pt-1">COMMON</h6>
                      <h6 className="card-title fw-bold">#0001</h6>
                    </div>
                  </div></div>

               
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        
      </Modal>
                    </div>
                  </div>
                </div>

                <div className="col-10 col-md-8 col-lg-5">
                  <img
                    src={blackPlane}
                    alt=""
                    className="img-fluid homePlaneImg"
                  />
                </div>
              </div>
            </div>
            <div className="col-10 col-lg-4 pt-5 pr-5">
              <div className="">
                <img
                  src={companyLogo}
                  className="pb-5"
                  style={{ width: "146px" }}
                  alt=""
                />
                <div className="">
                  <h4 className="fw-bold pb-5">NFT CARD OWNERSHIP FEATURES</h4>
                </div>
                <div className="">
               
                  <Box sx={{ maxWidth: 400 }}>
                    <Stepper orientation="vertical">
                      {steps.map((step, index) => (
                        <Step key={step.label}>
                          <StepLabel
                            className="gfgfgf"
                            optional={
                              index === 2 ? (
                                <Typography variant="caption"></Typography>
                              ) : null
                            }
                          >
                            {step.label}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {/* <MyNftModel
    
      /> */}

      
<ToastContainer />
    </div>
  );
};

export  default Home;
