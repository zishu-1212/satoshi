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
import homeHeaderImg from "../../assets/Group 773.png";
import Plane from "../../assets/Plane.png";
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
  const [img, setImg]=useState ("")
  const dispatch = useDispatch();
  const addr = useSelector((state) => state.connected.connection);

  const callNFT = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      const contract = new web3.eth.Contract(abiConstants, addressConstants);
      const tokenId = 13; // Provide the token ID for which you want to retrieve the URI
      const uri = await contract.methods.tokenURI(tokenId).call();
      console.log("Token URI:", uri);
      
  setImg(uri)
      // Handle the URI as needed
    } catch (error) {
      console.error("Error retrieving token URI:", error);
      // Handle the error appropriately
    }
  };

  useEffect(() => {
    callNFT();
  
  }, []);

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
                    <button className="card-btn" >
                      +
                    </button>
                    <input
                      type="text"
                      
                      className="input-field p-2 mx-3 text-center fw-bold "
                    />
                    <button className="card-btn" >
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
                          dispatch(connectionAction())}}
                        
                      >
                {addr}
                        {/* Connect Wallet */}
                       
                      </button>
                    </div>

                    <div className="d-flex justify-content-evenly   ">
                      <button className="homeCardBtn"onClick={()=>{callNFT()}} > MINT </button>
                      <Link to="/myNft">
                        <button
                          className="homeCardBtn"
                          // data-bs-toggle="modal"
                          // data-bs-target="#exampleModal"
                        >
                          MY NFT
                        </button>
                      </Link>
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
                <img src={img} width="200px"/>
                  {/* <Box sx={{ maxWidth: 400 }}>
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
                  </Box> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MyNftModel
    
      /> */}

      
     
    </div>
  );
};

export default Home;
