import React, { createContext, useState, useEffect } from "react";
import "./MyNft.css";
import Web3 from "web3";
import axios from "axios";
import { abiConstants, addressConstants } from "../contract/contract";
import pinkPlane from "../../assets/blackPlane.png";
import NftTransferModel from "../Model/NftTransferModel";
import { useDispatch, useSelector } from "react-redux";

const MyNFT = ({ myNftCardData, connect, address }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [count, setCount] = useState(0);
  const [tokn, setTokn] = useState("");
  const [img, setImg] = useState("");
  const [selectedNFT, setSelectedNFT] = useState(null); // State variable for selected NFT
  const [selectedNFTImg, setSelectedNFTImg] = useState(null); // State variable for selected NFT
  const dispatch = useDispatch();
  const addr = useSelector((state) => state.connected.connection);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  let [imageArray, setImageArray] = useState([]);

  const allImagesNfts = async () => {
    try {
      const web3 = window.web3;
      let nftContractOf = new web3.eth.Contract(abiConstants, addressConstants);

      let walletOfOwner = await nftContractOf.methods.walletOfOwner(addr).call();
      let walletLength = walletOfOwner.length;

      let simplleArray = [];

      for (let i = 0; i < walletLength; i++) {
        try {
          await nftContractOf.methods.tokenURI(i).call();
          const res = await axios.get(
            `https://gateway.pinata.cloud/ipfs/QmYL1hUhUsSFtXD88GFU6Zz5Nn6fHsDpNZrjjMMtau3rLD/nft5.json/`
          );
          let img = res.data.image;
          let description = res.data.description;
          const tokenid = walletOfOwner[i];
          setTokn(tokenid);
          simplleArray = [...simplleArray, { imageUrl: img, tokenid: tokenid, descrip: description }];
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching API", e);
        }
      }
    } catch (error) {
      console.log("Error while Fetching NFT Contract", error);
    }
  };

  const handleTransferNFT = (tokenid, imageUrl) => {
    setSelectedNFT(tokenid);
    setSelectedNFTImg(imageUrl);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    allImagesNfts();
  }, []);

  // Calculate the index of the first and last item in the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = imageArray.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(imageArray.length / itemsPerPage);

  // Generate the page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return(

    <div className="bg-mynft-color pt-5 ">
    <div className="bgNftImg">
      <div className="container py-5 relative ">
        <div className="row justify-content-center align-items-center  ">
          <div className="col-12  bg-mynft-box rounded">
            <h3 className="text-center fw-bold mt-3">MY NFT</h3>
            <div className="row  mx-auto pb-5">
              {currentItems.map((items, index) => {
                return (
                  <div
                    className="col-sm-12 col-md-6 col-lg-4 gx-5 gy-3 mx-auto"
                    key={index}
                  >
                    <div className="card  nft-transfer-img-card w-100">
                      <img src={items.imageUrl} className="card-img-top img-fluid" />
                      <div className="card-body d-flex justify-content-between ">
                        <div className="">
                          <h5 className="card-title fw-bold">NFT ID:{items.tokenid}</h5>
                          <p className="card-text fw-bold">{items.descrip}</p>
                        </div>
                        <div className="">
                          <a
                            href="#"
                            className="btn nft-transfer-btn fw-bold nft-button-shadow"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModale"
                            onClick={() => handleTransferNFT(items.tokenid, items.imageUrl)}
                          >
                            Transfer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pt-3 d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <a
                      className="page-link pg-previous "
                      href="#"
                      aria-label="Previous"
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  {pageNumbers.map((pageNumber) => (
                    <li
                      className={`page-item ${pageNumber === currentPage ? "active" : ""}`}
                      key={pageNumber}
                    >
                      <a
                        className="page-link"
                        href="#"
                        onClick={() => handlePageChange(pageNumber)}
                      >
                        {pageNumber}
                      </a>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <a
                      className="page-link pg-next"
                      href="#"
                      aria-label="Next"
                      onClick={() => handlePageChange(currentPage + 1)}
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
    <NftTransferModel
      selectedTokenId={selectedNFT}
      selectedNFTImg={selectedNFTImg}
      isUpdated={isUpdated}
      setIsUpdated={setIsUpdated}
    />
  </div>
);
};

export default MyNFT;


