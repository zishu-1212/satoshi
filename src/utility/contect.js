// const buyUsdt = async () => {
//     const web3 = window.web3;
//     try {
//       if (acc == "No Wallet") {
//         toast.info("No Wallet");
//       } else if (acc == "Wrong Network") {
//         toast.info("Wrong Wallet");
//       } else if (acc == "Connect Wallet") {
//         toast.info("Connect Wallet");
//         // console.log("Connect Wallet");
//       } else {
//         let usdtToken = new web3.eth.Contract(usdtTokenAbi, usdtTokenAdd);
//         let balOfUsdt = await usdtToken.methods.balanceOf(acc).call();
//         balOfUsdt = web3.utils.fromWei(balOfUsdt);
//         console.log("usdaceBalance", balOfUsdt);
//         if (usdtUnit > 0 && usdtUnit <= 100) {
//           if (parseFloat(balOfUsdt) >= parseFloat(usdtCost)) {
//             console.log("cost", usdtCost);
//             let costValue = web3.utils.toWei(usdtCost);
//             console.log("costValue", costValue);
//             await usdtToken.methods
//               .approve(contractAddress, costValue)
//               .send({ from: acc });
//             let unitValue = web3.utils.toWei(usdtUnit);
//             console.log("unitValue", unitValue);
//             let contract = new web3.eth.Contract(
//               contractAddressAbi,
//               contractAddress
//             );
//             await contract.methods
//               .buy(usdtTokenAdd, costValue, unitValue)
//               .send({ from: acc });
//               toast.info("Transcation Succseefull")
//           } else {
//             console.log("token lessx");
//           }
//         } else {
//           console.log("value does not match");
//         }
//         // if (usdtUnit == 0 || usdtUnit == "") {
//         //   setusdtCost(0);
//         // } else {
//         //   if (usdtUnit > 0 && usdtUnit <= 100) {
//         //     let valueUsd = web3.utils.toWei(usdtUnit);
//         //     console.log("valueUsd", valueUsd);
//         //     let checkinputUsdt = await contract.methods
//         //       .checkPrice(valueUsd)
//         //       .call();
//         //     console.log("checkinputUsdt", checkinputUsdt);
//         //     let valueUsdt = web3.utils.fromWei(checkinputUsdt);
//         //     setusdtCost(valueUsdace);
//         //   } else {
//         //     toast.info("Enter your Value  0 to 100");
//         //   }
//         // }
//       }
//     } catch (e) {
//       console.log("Error While Buying Tokens", e);
//     }
//   };
  
  
  import Web3 from "web3";
  let isItConnected = false;
  const networks = {
    bsc: {
      // chainId: `0x${Number(56).toString(16)}`,
      chainId: `0x${Number(97).toString(16)}`,
      chainName: "Binance smart chain testnet",
      nativeCurrency: {
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: [
        "https://data-seed-prebsc-1-s1.binance.org:8545/",
        "https://bsc-dataseed1.binance.org",
        "https://bsc-dataseed2.binance.org",
        "https://bsc-dataseed3.binance.org",
        "https://bsc-dataseed4.binance.org",
        "https://bsc-dataseed1.defibit.io",
        "https://bsc-dataseed2.defibit.io",
        "https://bsc-dataseed3.defibit.io",
        "https://bsc-dataseed4.defibit.io",
        "https://bsc-dataseed1.ninicoin.io",
        "https://bsc-dataseed2.ninicoin.io",
        "https://bsc-dataseed3.ninicoin.io",
        "https://bsc-dataseed4.ninicoin.io",
        "wss://bsc-ws-node.nariox.org",
      ],
      blockExplorerUrls: ["https://bscscan.com"],
    },
  };
  const changeNetwork = async ({ networkName }) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName],
          },
        ],
      });
    } catch (err) {
      console.log("not found");
    }
  };
  const handleNetworkSwitch = async (networkName) => {
    await changeNetwork({ networkName });
  };
  let accounts;
  const getAccounts = async () => {
    const web3 = window.web3;
    try {
      accounts = await web3.eth.getAccounts();
      return accounts;
    } catch (error) {
      console.log("Error while fetching acounts: ", error);
      return null;
    }
  };
  export const disconnectWallet = async () => {
    await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [{ eth_accounts: {} }],
    });
    console.log("disconnect");
  };
  export const loadWeb3 = async () => {
    try {
      let net_id;
  
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        await window.web3.eth.getChainId((err, netId) => {
          switch (netId.toString()) {
            // case "56":
            case "97": 
              isItConnected = true;
              net_id = netId;
              break;
  
            default:
            //   handleNetworkSwitch("bsc");
              isItConnected = false;
          }
        });
        if (isItConnected == true) {
          let accounts = await getAccounts();
          let ar = accounts[0];
          return ar;
        } else {
          let res = "Wrong Network";
          return res;
        }
      } else {
        let res = "No Wallet";
        return res;
      }
    } catch (error) {
      let res = "No Wallet";
      return res;
    }
  };