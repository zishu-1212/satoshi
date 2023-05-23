import React, { useEffect, useState } from "react";
import pinkPlane from "../assets/lightRedPlane.png";
import { abiConstants, addressConstants } from "../components/contract/contract";
import { useDispatch, useSelector } from "react-redux";
const NftTransferModel = ({ walletAddress, connect, renderWalletAddress }) => {
  const buttonText = walletAddress ? renderWalletAddress() : "CONNECT WALLET";
  const dispatch = useDispatch();
  const addr = useSelector((state) => state.connected.connection);
  let [imageArray, setImageArray] = useState([]);
  const [call, setCall] = useState();
  const allImagesNfts = async () => {
    try {
      const web3 = window.web3;
      let nftContractOf = new web3.eth.Contract(abiConstants, addressConstants);
  
      let simplleArray = [];
      let walletOfOwner = await nftContractOf.methods.walletOfOwner(addr).call();
      console.log('walletOfOwner:', walletOfOwner);
      if (!walletOfOwner) {
        // Handle the case where walletOfOwner is undefined or empty
        console.log("Wallet of owner is undefined or empty");
        return;
      }
  
      let walletLength = walletOfOwner.length;
    console.log("walletLength", walletLength);
  
      for (let i = 0; i < walletLength; i++) {
        try {
          const uri = await nftContractOf.methods.tokenURI(i).call();
          
          let tokenid = walletOfOwner[i];
          simplleArray = [...simplleArray, { imageUrl: uri, tokenid: tokenid }];
          setImageArray(simplleArray);
        } catch (e) {
          console.log('Error while Fetching Api', e);
        }
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  
  

  const transferNFT = async () => {

    try {
      const web3 = window.web3;
      let nftContractOf = new web3.eth.Contract(abiConstants, addressConstants);
      let approve = await nftContractOf.methods.approve(call,"11").send( { from: addr });
      console.log("dhfhhhhhh",approve);
      let transfer = await nftContractOf.methods.transferFrom(addr,call,"11").send({ from: addr }
       
      );
      console.log(transfer);
    }
    catch (error) {
      console.log("Error while Fetching NFT Contract", error);
    }
  }
  useEffect(() => {
    allImagesNfts()
},[]);
  return (
    <div>
      <div>
        <div
          className="modal fade"
          id="exampleModale"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="bg-mynft-color  ">
                <div className="bgNftClr ">
                  <div className="bgNftImg">
                    <div className="container ">
                      <div className="row  justify-content-center align-items-center p-3">
                        <div className="col-8 col-md-8  nft-transfer-card   ">
                          <div className="d-flex justify-content-end  py-2">
                            <button
                              type="button"
                              className="btn-close nftTransfer-btnClose"
                              aria-label="Close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>
                          <div className="px-4">
                            <h5 className="text-center fw-bold pb-2">
                              NFT TRANSFER
                            </h5>
                            { imageArray.map((items, index) => {
                                    return (
                            <div className="card nft-transfer-img-card" key={index}>

                              <img
                                src={items.imageUrl}
                                className="card-img-top img-fluid"
                                alt="..."
                              />
                              <div className="card-body d-flex nftTRansfer-card-body flex-column justify-content-between align-items-center">
                                <h6 className="card-text fw-bold pt-1">
                                  COMMON
                                </h6>
                                <h6 className="card-title fw-bold">{items.tokenid}</h6>
                              </div>
                            </div>
                                    )})}
                            <div className="pt-3">
                              <p className="fw-bold">To:</p>
                              <input
                                type="text"
                                className="w-100 nft-Transfer-Input"
                                onChange={(e) => setCall(e.target.value)}
                              />

                              <div>
                                <button
                                  className="px-3 py-1 text-uppercase connectWalletBtn w-100 mt-2 fw-bold "
                                  onClick={()=>{transferNFT()}}
                                >
                                  {buttonText}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftTransferModel;
