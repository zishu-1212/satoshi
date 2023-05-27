import { loadWeb3 } from "../../utility/contect";
import { ActionTypes } from "../types";
import axios from "axios";
import {
  FETCH_NFTS_REQUEST,
  FETCH_NFTS_SUCCESS,
  FETCH_NFTS_FAILURE,
} from "../types";
import {
  abiConstants,
  addressConstants,
} from "../../components/contract/contract";
export const connectionAction = () => {
  return async (dispatch) => {
    let acc = await loadWeb3();
    let myAcc;
    if (acc === "No Wallet") {
      myAcc = "No Wallet";
    } else if (acc === "Wrong Network") {
      myAcc = "Wrong Network";
    } else {
      myAcc = acc;
    }
    await dispatch({ type: ActionTypes.CONNECT, payload: myAcc });
  };
};

export const fetchNFTsData = (addr) => {
  return (dispatch) => {
    dispatch(fetchNFTs(addr));
  };
};

export const fetchNFTsRequest = () => ({
  type: FETCH_NFTS_REQUEST,
});

export const fetchNFTsSuccess = (nftData) => ({
  type: FETCH_NFTS_SUCCESS,
  payload: nftData,
});

export const fetchNFTsFailure = (error) => ({
  type: FETCH_NFTS_FAILURE,
  payload: error,
});

export const fetchNFTs = (addr) => {
  return async (dispatch) => {
    try {
      dispatch(fetchNFTsRequest());

      const web3 = window.web3;
      let nftContractOf = new web3.eth.Contract(abiConstants, addressConstants);

      let walletOfOwner = await nftContractOf.methods
        .walletOfOwner(addr)
        .call();
      let walletLength = walletOfOwner.length;

      let nftDataArray = [];

      for (let i = 0; i < walletLength; i++) {
        try {
          await nftContractOf.methods.tokenURI(i).call();
          const res = await axios.get(
            `https://gateway.pinata.cloud/ipfs/QmYL1hUhUsSFtXD88GFU6Zz5Nn6fHsDpNZrjjMMtau3rLD/nft5.json/`
          );
          let img = res.data.image;
          let description = res.data.description;
          const tokenid = walletOfOwner[i];
          nftDataArray.push({
            imageUrl: img,
            tokenid: tokenid,
            descrip: description,
          });
        } catch (e) {
          console.log("Error while Fetching API", e);
        }
      }

      dispatch(fetchNFTsSuccess(nftDataArray));
    } catch (error) {
      dispatch(fetchNFTsFailure(error.message));
    }
  };
};
