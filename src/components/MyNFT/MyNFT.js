import React, { createContext, useState ,useEffect } from "react";
import "./MyNft.css";
import Web3 from "web3";
import axios from 'axios';
import { abiConstants, addressConstants } from "../contract/contract";
import pinkPlane from "../../assets/blackPlane.png";
import NftTransferModel from "../../Model/NftTransferModel";
import { useDispatch, useSelector } from "react-redux";
const MyNFT = ({ myNftCardData, connect, address }) => {
  const [mintedNFTs, setMintedNFTs] = useState([]);
  const [count, setCount] = useState(0);
  const [img, setImg]=useState ("")
  const dispatch = useDispatch();
  const addr = useSelector((state) => state.connected.connection);


  let [imageArray, setImageArray] = useState([]);
   

  const allImagesNfts = async () => {
    try {
      const web3 = window.web3;
      let nftContractOf = new web3.eth.Contract(abiConstants, addressConstants);
  
      let walletOfOwner = await nftContractOf.methods.walletOfOwner(addr).call();
      let walletLength = walletOfOwner.length;
  
      console.log("walletLength", walletLength);
      let simplleArray = [];
  
      for (let i = 0; i < walletLength; i++) {
        try {
          const uri = await nftContractOf.methods.tokenURI(i).call();
        
          const tokenid = walletOfOwner[i];
  console.log("dnjdfk",uri);
          simplleArray = [...simplleArray, { imageUrl: uri, tokenid: tokenid }];
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching API", e);
        }
      }
    } catch (error) {
      console.log("Error while Fetching NFT Contract", error);
    }
  };




  
   
    useEffect(() => {
        allImagesNfts()
    },[]);
  return (
    <div className="bg-mynft-color  pt-5 ">
      
      <div className="bgNftImg">
        <div className="container py-5 relative ">
          <div className="row justify-content-center align-items-center  ">
            <div className="col-10 col-lg-11 bg-mynft-box rounded" >
             
                

                <h3 className="text-center fw-bold mt-3">MY NFT</h3>
                <div className="row  mx-auto pt-4">
                  { imageArray.map((items, index) => {
                                    return (
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 gx-5 gy-3 mx-auto"
                      key={index}
               
                    > 
                      <div className="card card-withd ">
                     
                      <img src={items.imageUrl} className="card-img-top img-fluid"/>
    
                        <div className="card-body d-flex justify-content-between ">
                          <div className="">
                            <h5 className="card-title fw-bold">NFT ID:{items.tokenid}</h5>
                            <p className="card-text fw-bold">description</p>
                          </div>
                          <div className="">
                            <a
                              href="#"
                              class="btn nft-transfer-btn fw-bold"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModale"
                              
                            >
                              Transfer
                            </a>
                          </div>
                        </div>  
                      </div>
                    </div>  )
                                })}
               

                <div className="pt-3 d-flex justify-content-center">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item ">
                        <a
                          className="page-link pg-previous"
                          href="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          ...
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          10
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link pg-previous"
                          href="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NftTransferModel
      // {/* // address={walletAddress}
      // // walletAddress={address}
      // // connect={connected}
      // // renderWalletAddress={renderWalletAddress} */}
    /> 
    </div>
  );
};

export default MyNFT;
