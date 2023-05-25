import React, { useEffect, useState } from "react";
import pinkPlane from "../assets/lightRedPlane.png";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify'
import close from "../assets/Group_632-removebg-preview-removebg-preview.png"
import {
  abiConstants,
  addressConstants,
} from "../components/contract/contract";
import { useDispatch, useSelector } from "react-redux";
const NftTransferModel = ({
  walletAddress,
  connect,
  renderWalletAddress,
  selectedTokenId,
  selectedNFTImg,
  isUpdated,
  setIsUpdated,
}) => {
  // const buttonText = walletAddress ? renderWalletAddress() : "CONNECT WALLET";
  const [transferSuccess, setTransferSuccess] = useState(false);
  const dispatch = useDispatch();
  const addr = useSelector((state) => state.connected.connection);
  let [imageArray, setImageArray] = useState([]);
  const [tokn, setTokn] = useState("");
  const [call, setCall] = useState();
  const allImagesNfts = async () => {
    try {
      const web3 = window.web3;
      let nftContractOf = new web3.eth.Contract(abiConstants, addressConstants);

      let simplleArray = [];
      let walletOfOwner = await nftContractOf.methods
        .walletOfOwner(addr)
        .call();
      // console.log("walletOfOwner:", walletOfOwner);
      if (!walletOfOwner) {
        // Handle the case where walletOfOwner is undefined or empty
        toast.error("Wallet of owner is undefined or empty")
        console.log("Wallet of owner is undefined or empty");
        return;
      }

      let walletLength = walletOfOwner.length;
      // console.log("walletLength", walletLength);

      for (let i = 0; i < walletLength; i++) {
        try {
          const uri = await nftContractOf.methods.tokenURI(i).call();

          let tokenid = walletOfOwner[i];

          setTokn(tokenid);
          // console.log("tttttt",tokn);
          simplleArray = [...simplleArray, { imageUrl: uri, tokenid: tokenid }];
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching Api", e);
        }
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const transferNFT = async () => {
    try {
      const web3 = window.web3;
      let nftContractOf = new web3.eth.Contract(abiConstants, addressConstants);
      let approve = await nftContractOf.methods
        .approve(call, selectedTokenId)
        .send({ from: addr });
      console.log("approve", approve);
      let transfer = await nftContractOf.methods
        .transferFrom(addr, call, selectedTokenId)
        .send({ from: addr });
      console.log(transfer);
      toast.success('NFT Transfer Success')
      setTransferSuccess(true);
      setIsUpdated(true); // Trigger page update
    } catch (error) {
      toast.error('Error while Fetching NFT Contract')
      console.log("Error while Fetching NFT Contract", error);
    }
  };

  // console.log("tokan id",imageArray.tokenid);
  useEffect(() => {
    allImagesNfts();
    setIsUpdated(false);
  }, [isUpdated]);
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
          <div className="modal-dialog modal-lg">
            <div className="modal-content bgNftImg rounded bgNftClr bg-mynft-color ">
            <div className="d-flex justify-content-end m-3 ">
       
        <button type="button" className="btn-close p-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
              <div className=" ">
                <div className=" ">
                  <div className="">
                    <div className="container ">
                   
                      <div className="row  justify-content-center align-items-center p-3">
                        <div className="col-sm-12 col-md-7  nft-transfer-card   ">
                          <div className="d-flex justify-content-end  py-2">
                           
                          </div>
                          <div className="px-4">
                            <p className="text-center fs-3 fw-bold pb-2">
                              NFT TRANSFER
                            </p>

                            <div className="card nft-transfer-img-card ">
                              <img
                                src={selectedNFTImg}
                                className="card-img-top img-fluid"
                                alt="..."
                              />
                              <div className="card-body d-flex nftTRansfer-card-body flex-column justify-content-between align-items-center">
                                <h6 className="card-text fw-bold pt-1">
                                  COMMON
                                </h6>
                                <h6 className="card-title fw-bold">
                                  {selectedTokenId}
                                </h6>
                              </div>
                            </div>

                            <div className="pt-3">
                              <p className="fw-bold mb-1">To:</p>
                              <input
                                type="text"
                                className="w-100 nft-Transfer-Input "
                                onChange={(e) => setCall(e.target.value)}
                              />
 
                              <div>
                                {transferSuccess ? (
                                 <div className="text-center mt-2 ">
                                 <BsFillCheckCircleFill className="icon-color"/>
                               <p className="text-success mt-2 fs-6 ">
                                 Card Successfully Transferred!
                               </p></div>
                                ) : (
                                  <button
                                    className="px-3  py-2 text-uppercase connectWalletBtn w-100 mt-2 fw-bold"
                                    onClick={() => {
                                      transferNFT();
                                    }}
                                  >
                                    Transfer NFT
                                  </button>
                                )}
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
      <ToastContainer />
    </div>
  );
};

export default NftTransferModel;
