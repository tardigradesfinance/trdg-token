let isDebug = false;

function msg(m) {
  if (isDebug) {
    console.log(m);
  }
}

const TRDG_BSC_ADDRESS = "0x92a42db88ed0f02c71d439e55962ca7cab0168b5";
const TRDG_ETH_ADDRESS = "0x92a42db88ed0f02c71d439e55962ca7cab0168b5";
const WBNB_ADDRESS = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const PCSV1_POOL_ADDRESS = "0xC5c0Be18218182bF33e2585a6D9A2e6d7324BC0E";
const UNISWAP_POOL_ADDRESS = "0xc2367025716cf1109321e4cb96f47c0e3f9beb05";
const DONATION_WALLET_ADDRESS = "0xface884c4bcaedf27ae1f31199726c67e711d8dd";
const BURN_WALLET_ADDRESS = "0x000000000000000000000000000000000000dead";
const GOLDFARM_ADDRESS = "0xb97591b3a5a7017a8e92e24f75eb28106dd94f0a";

const MAX_SUPPLY = 100000 * 10 ** 12;

// getTrdgBalance();
// getBscAccountBalanceByContractAddress(PCSV1_POOL_ADDRESS, TRDG_BSC_ADDRESS);

// These objects are constantly populated from fetched data.
// Also, UI element values are updated from the objects
const lastPrices = {
  pcsV1: "",
  fegExBsc: "",
  uniSwap: "",
  fegExEth: "",
  wbnbPrice: "",
  wethPrice: ""
};

const lastPoolBalances = {
  pcsV1Wbnb: "",
  pcsV1Trdg: "",
  uniSwapWeth: "",
  uniSwapTrdg: ""
};

const lastBurnValues = {
  bscBurned: "",
  ethBurned: ""
};

const lastCirculatingSupply = {
  bscCirculatingSupply: "",
  ethCirculatingSupply: ""
};

const walletData = {
  bsc: {
    address: "",
    balance: "",
    rewards: "",
    transfers: {}
  },
  eth: {
    address: "",
    balance: "",
    rewards: "",
    transfers: {}
  }
};

//----------------------------
//----- Helper functions -----
//----------------------------

function toCurrencyFormat(value, maximumFractionDigits) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: maximumFractionDigits
  });
  return formatter.format(value).replace("$", "");
}

// Check if a string is a valid (looking) ETH/BSC address -> return true or false
function isValidAddress(address) {
  return Web3.utils.isAddress(address);
}

/**
 * Throttles the execution of a function by delaying subsequent calls.
 *
 * @param {function} mainFunction - The function to be throttled.
 * @param {number} delay - The delay in milliseconds between function calls.
 * @return {function} - A throttled version of the main function.
 */
function throttle(mainFunction, delay) {
  let timerFlag = null; // Variable to keep track of the timer

  // Returning a throttled version
  return (...args) => {
    if (timerFlag === null) {
      // If there is no timer currently running
      mainFunction(...args); // Execute the main function
      timerFlag = setTimeout(() => {
        // Set a timer to clear the timerFlag after the specified delay
        timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
      }, delay);
    }
  };
}

const wait = (timer) => new Promise((resolve) => setTimeout(resolve, timer));

//-----------------------------------
//----- "Fetch data" -functions -----
//-----------------------------------

async function getBscAccountBalanceByContractAddress(
  contractAddress,
  walletAddress
) {
  const bscApiKey = "2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET";
  // Get BEP-20 Token Account Balance by ContractAddress
  // https://docs.bscscan.com/api-endpoints/tokens#get-bep-20-token-account-balance-by-contractaddress
  const bscUrl = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${walletAddress}&tag=latest&apikey=${bscApiKey}`;
  // https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x92a42db88ed0f02c71d439e55962ca7cab0168b5&address=0xC5c0Be18218182bF33e2585a6D9A2e6d7324BC0E&tag=latest&apikey=2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET`;
  PCSV1_POOL_ADDRESS;
  balance = await fetch(bscUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (balance) {
      return balance.result;
    });
  return balance;
}

async function getEthAccountBalanceByContractAddress(
  contractAddress,
  walletAddress
) {
  const ethApiKey = "U4GW7GB7GYNZESDYSUH9GKPJ3VQZCGVSK2";
  // Get ERC20-Token Account Balance for TokenContractAddress
  // https://docs.etherscan.io/api-endpoints/tokens#get-erc20-token-account-balance-for-tokencontractaddress
  const ethUrl = `https://api.etherscan.com/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${walletAddress}&tag=latest&apikey=${ethApiKey}`;

  balance = await fetch(ethUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (balance) {
      return balance.result;
    });
  return balance;
}

async function getBscWalletTrdgBalance() {
  const walletAddress = walletData.bsc.address;
  if (walletAddress === "") {
    return;
  }
  const transferData = walletData.bsc.transfers;
  const bscApiKey = "2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET";
  // Get BEP-20 Token Account Balance by ContractAddress
  // https://docs.bscscan.com/api-endpoints/tokens#get-bep-20-token-account-balance-by-contractaddress
  const bscUrl =
    "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=" +
    TRDG_BSC_ADDRESS +
    "&address=" +
    walletAddress +
    "&tag=latest&apikey=" +
    bscApiKey;

  await fetch(bscUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (trdgBalance) {
      calculateBscTrdgRewards(transferData, walletAddress, trdgBalance.result);
    });
}

async function getEthWalletTrdgBalance() {
  const walletAddress = walletData.eth.address;
  if (walletAddress === "") {
    return;
  }
  const transferData = walletData.eth.transfers;
  const ethApiKey = "U4GW7GB7GYNZESDYSUH9GKPJ3VQZCGVSK2";
  // Get ERC20-Token Account Balance for TokenContractAddress
  // https://docs.etherscan.io/api-endpoints/tokens#get-erc20-token-account-balance-for-tokencontractaddress
  const ethUrl =
    "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=" +
    TRDG_ETH_ADDRESS +
    "&address=" +
    walletAddress +
    "&tag=latest&apikey=" +
    ethApiKey;

  await fetch(ethUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (trdgBalance) {
      calculateEthTrdgRewards(transferData, walletAddress, trdgBalance.result);
    });
}

async function getBscWalletTrdgTransfers() {
  const walletAddress = walletData.bsc.address;
  if (walletAddress === "") {
    return;
  }
  // Apply shortened address to wallet card header
  document.getElementById("bscWalletAddressHeader").innerHTML =
    "Wallet: " +
    walletAddress.slice(0, 6) +
    "..." +
    walletAddress.slice(walletAddress.length - 4);
  // walletData.bsc.address = walletAddress;
  // const transferData = walletData.bsc.transfers;
  const bscApiKey = "2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET";
  // Get a list of 'BEP-20 Token Transfer Events' by Address
  // https://docs.bscscan.com/api-endpoints/accounts#get-a-list-of-bep-20-token-transfer-events-by-address
  const bscUrl =
    "https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=" +
    TRDG_BSC_ADDRESS +
    "&address=" +
    walletAddress +
    "&page=1&offset=10000&startblock=0&endblock=999999999&sort=asc&apikey=" +
    bscApiKey;
  await fetch(bscUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (trdgTransfers) {
      // buildTable(tokenInfoJson.result);
      localStorage.setItem(
        "bscWalletTransfers",
        JSON.stringify(trdgTransfers.result)
      );
      walletData.bsc.transfers = trdgTransfers.result;
      // console.log("getBscWalletTrdgTransfers ready");
      getBscWalletTrdgBalance();
    });
}

async function getEthWalletTrdgTransfers() {
  const walletAddress = walletData.eth.address;
  if (walletAddress === "") {
    return;
  }
  // Apply shortened address to wallet card header
  document.getElementById("ethWalletAddressHeader").innerHTML =
    "Wallet: " +
    walletAddress.slice(0, 6) +
    "..." +
    walletAddress.slice(walletAddress.length - 4);
  const ethApiKey = "U4GW7GB7GYNZESDYSUH9GKPJ3VQZCGVSK2";
  // Get a list of 'ERC20 - Token Transfer Events' by Address
  // https://docs.etherscan.io/api-endpoints/accounts#get-a-list-of-erc20-token-transfer-events-by-address
  const ethUrl =
    "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=" +
    TRDG_ETH_ADDRESS +
    "&address=" +
    walletAddress +
    "&page=1&offset=10000&startblock=0&endblock=999999999&sort=asc&apikey=" +
    ethApiKey;
  await fetch(ethUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (trdgTransfers) {
      // buildTable(tokenInfoJson.result);
      localStorage.setItem(
        "ethWalletTransfers",
        JSON.stringify(trdgTransfers.result)
      );
      walletData.eth.transfers = trdgTransfers.result;
      // console.log("getEthWalletTrdgTransfers ready");
      getEthWalletTrdgBalance();
    });
}

async function calculateBscTrdgRewards(
  transferData,
  walletAddress,
  walletTrdgBalance
) {
  let tax = 5;
  let currentBalance = walletTrdgBalance;
  let totalRewards = 0;
  let trdgIn = 0;
  let trdgOut = 0;
  let addr = walletAddress.toLowerCase();
  for (var i = 0; i < transferData.length; i++) {
    let transferValue = transferData[i].value * 1;
    if (transferData[i].to.toLowerCase() === addr) {
      trdgIn += transferValue;
    } else {
      trdgOut += transferValue;
    }
  }
  totalRewards = (
    currentBalance -
    (trdgIn - trdgOut / (1 - tax / 100))
  ).toString();
  walletData.bsc.balance = currentBalance;
  walletData.bsc.rewards = totalRewards;
  uiSetBscWalletValues();
}

async function calculateEthTrdgRewards(
  transferData,
  walletAddress,
  walletTrdgBalance
) {
  let tax = 5; // tax %
  let currentBalance = walletTrdgBalance;
  let totalRewards = 0;
  let trdgIn = 0;
  let trdgOut = 0;
  let addr = walletAddress.toLowerCase();
  for (var i = 0; i < transferData.length; i++) {
    let transferValue = transferData[i].value * 1;
    if (transferData[i].to.toLowerCase() === addr) {
      // calculatedBalanceWithoutRewards += transferValue * 1;
      trdgIn += transferValue;
    } else {
      trdgOut += transferValue;
    }
  }
  // console.log("transfers", transferData);
  totalRewards = (
    currentBalance -
    (trdgIn - trdgOut / (1 - tax / 100))
  ).toString();
  walletData.eth.balance = currentBalance;
  walletData.eth.rewards = totalRewards;
  uiSetEthWalletValues();
}

// function buildTable(data) {
//   var table = document.getElementById("myTable");
//   msg(data.length);
//   for (var i = 0; i < data.length; i++) {
//     var row = `<tr>
//             <td>${(data[i].value / 10 ** 12).toFixed(2)}</td>
//           </tr>`;
//     table.innerHTML += row;
//   }
// }

// Get burn wallet balance BSC
async function getBurnWalletBalanceBsc() {
  const bscApiKey = "2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET";
  const bscUrl =
    "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x92a42db88ed0f02c71d439e55962ca7cab0168b5&address=0x000000000000000000000000000000000000dead&tag=latest&apikey=" +
    bscApiKey;
  await fetch(bscUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (balanceJson) {
      // const balance = Moralis.Units.FromWei(balanceJson.result, 9);
      const balance = balanceJson.result / 10 ** 9;
      if (balance > lastBurnValues.bscBurned) {
        toggleFadeInText("bscBurned"); // Apply fade-in every time when the value changes
        lastBurnValues.bscBurned = balance;
      }
      msg("Burned (BSC side): " + balance);
      document.getElementById("bscBurned").innerHTML = toCurrencyFormat(
        balance,
        0
      );
    });
}

// async function getTrdgBalance(contractAddress) {
//   const bscApiKey = "2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET";
//   let balance = 0;
//   // Get BEP-20 Token Account Balance by ContractAddress
//   // https://docs.bscscan.com/api-endpoints/tokens#get-bep-20-token-account-balance-by-contractaddress
//   const bscUrl =
//     "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=" +
//     TRDG_BSC_ADDRESS +
//     "&address=" +
//     contractAddress +
//     "&tag=latest&apikey=" +
//     bscApiKey;
//   await fetch(bscUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (balanceJson) {
//       balance = balanceJson.result / 10 ** 9;
//       document.body.innerHTML = balance;
//     });
//   return balance * 1; // returns a number, not a string
// }

function getCirculatingSupplyBsc() {
  let trdgInReserveWallet = 0;
  Promise.all([
    getTrdgBalance(BURN_WALLET_ADDRESS),
    getTrdgBalance(GOLDFARM_ADDRESS),
    getTrdgBalance(DONATION_WALLET_ADDRESS)
  ]).then((balances) => {
    for (let i = 0; i < balances.length; i++) {
      trdgInReserveWallet += balances[i];
    }
    // console.log(balances);
    document.body.innerHTML = MAX_SUPPLY - trdgInReserveWallet;
  });
}

async function getBurnWalletBalanceEth() {
  const ethApiKey = "U4GW7GB7GYNZESDYSUH9GKPJ3VQZCGVSK2";
  const ethUrl =
    "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x92a42Db88Ed0F02c71D439e55962Ca7CAB0168b5&address=0x000000000000000000000000000000000000dead&tag=latest&apikey=" +
    ethApiKey;
  await fetch(ethUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (balanceJson) {
      // const balance = Moralis.Units.FromWei(balanceJson.result, 9);
      const balance = balanceJson.result / 10 ** 9;
      if (balance > lastBurnValues.ethBurned) {
        toggleFadeInText("ethBurned"); // Apply fade-in every time when the value changes
        lastBurnValues.ethBurned = balance;
      }
      msg("Burned (ETH side): " + balance);
      document.getElementById("ethBurned").innerHTML = toCurrencyFormat(
        balance,
        0
      );
    });
}

// async function getWbnbPrice() {
//   let priceWbnb = await Moralis.Web3API.token.getTokenPrice({
//     address: WBNB_ADDRESS,
//     chain: "bsc",
//     exchange: "PancakeSwapv2"
//   });
//   lastPrices.wbnbPrice = priceWbnb.usdPrice.toString();
//   return priceWbnb.usdPrice;
// }

async function getWbnbPrice() {
  const bscApiKey = "2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET";
  // Get BNB Last Price
  // https://docs.bscscan.com/api-endpoints/stats-1#get-bnb-last-price
  const bscUrl = `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=${bscApiKey}`;

  await fetch(bscUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (wbnbPrice) {
      lastPrices.wbnbPrice = wbnbPrice.result.ethusd;
    });
}

async function getWethPrice() {
  // Get Ether Last Price
  // https://docs.etherscan.io/api-endpoints/stats-1#get-ether-last-price
  const ethApiKey = "U4GW7GB7GYNZESDYSUH9GKPJ3VQZCGVSK2";
  const ethUrl = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${ethApiKey}`;

  await fetch(ethUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (wethPrice) {
      lastPrices.wethPrice = wethPrice.result.ethusd;
    });
}

async function getTrdgBalance() {
  const bscApiKey = "2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET";
  // Get BEP-20 Token Account Balance by ContractAddress
  // https://docs.bscscan.com/api-endpoints/tokens#get-bep-20-token-account-balance-by-contractaddress
  const bscUrl = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${TRDG_BSC_ADDRESS}&address=${PCSV1_POOL_ADDRESS}&tag=latest&apikey=${bscApiKey}`;
  bscApiKey;
  await fetch(bscUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (balanceJson) {
      balance = balanceJson.result / 10 ** 9;
      document.body.innerHTML = balance;
    });
  return balance * 1; // returns a number, not a string
}

// Get token price (PancakeSwap V1 BSC)
async function getTokenPricePcsV1() {
  const basePairBalance = await getBasePairBalanceFromPool("bsc");
  lastPoolBalances.pcsV1Wbnb = basePairBalance * 10 ** -18;
  await wait(500);
  const tokenbalance = await getTokenBalanceFromPool("bsc");
  lastPoolBalances.pcsV1Trdg = tokenbalance * 10 ** -9;
  const wbnbPrice = lastPrices.wbnbPrice;
  const price =
    (basePairBalance * 10 ** -18 * wbnbPrice) / (tokenbalance * 10 ** -9);
  return price;
}

// Get token price (Uniswap V2 ETH)
async function getTokenPriceUniswap() {
  const basePairBalance = await getBasePairBalanceFromPool("eth");
  lastPoolBalances.uniSwapWeth = basePairBalance * 10 ** -18;
  await wait(500);
  const tokenbalance = await getTokenBalanceFromPool("eth");
  lastPoolBalances.uniSwapTrdg = tokenbalance * 10 ** -9;
  const wethPrice = lastPrices.wethPrice;
  const price =
    (basePairBalance * 10 ** -18 * wethPrice) / (tokenbalance * 10 ** -9);
  return price;
}

// // Get token price (Uniswap V2 ETH)
// async function getTokenPriceUniswap() {
//   let uniSwapPrice = await Moralis.Web3API.token.getTokenPrice({
//     address: TRDG_ETH_ADDRESS,
//     chain: "eth",
//     exchange: "Uniswapv2"
//   });
//   return uniSwapPrice;
// }

async function getData() {
  // console.log("getData called");
  await getTokenPricePcsV1().then((priceV1) => {
    // Apply PCSv1 market cap value to "trdgPcsV1MarketCap" element
    document.getElementById("trdgPcsV1MarketCap").innerHTML =
      "$" + ((MAX_SUPPLY - lastBurnValues.bscBurned) * priceV1).toFixed(0);
    priceV1 = priceV1.toFixed(16);
    // Apply text color (green or red) to "trdgPricePcsV1" element
    if (priceV1 > lastPrices.pcsV1) {
      document.getElementById("trdgBscPrice").style.color = "#00ff00";
    } else if (priceV1 < lastPrices.pcsV1) {
      document.getElementById("trdgBscPrice").style.color = "red";
    }
    // document.getElementById("trdgPricePcsV1").innerHTML = "$" + priceV1;
    document.getElementById("trdgPricePcsV1PerT").innerHTML =
      "$" + (10 ** 12 * priceV1).toFixed(2);
    document.getElementById("trdgBscPrice").innerHTML = "$" + priceV1;
    // Copy color from another element
    // document.getElementById("trdgBscPrice").style.color =
    //   document.getElementById("trdgPricePcsV1").style.color;
    lastPrices.pcsV1 = priceV1;
    msg("Price PCSv1" + priceV1);
  });

  await getTokenPriceUniswap().then((uniSwapPrice) => {
    // Apply Uniswap market cap value to "trdgUniswapMarketCap" element
    document.getElementById("trdgUniswapMarketCap").innerHTML =
      "$" + ((MAX_SUPPLY - lastBurnValues.ethBurned) * uniSwapPrice).toFixed(0);
    console.log(uniSwapPrice.usdPrice);
    // console.log("uniSwapPrice: ", uniSwapPrice);
    uniSwapPrice = uniSwapPrice.toFixed(16);
    // Apply text color (green or red) to "trdgPriceUniswap" element
    if (uniSwapPrice > lastPrices.uniSwap) {
      document.getElementById("trdgEthPrice").style.color = "#00ff00";
    } else if (uniSwapPrice < lastPrices.uniSwap) {
      document.getElementById("trdgEthPrice").style.color = "red";
    }
    // document.getElementById("trdgPriceUniswap").innerHTML =
    // "Uniswap V2: $" + uniSwapPrice;
    document.getElementById("trdgPriceUniswapPerT").innerHTML =
      "$" + (10 ** 12 * uniSwapPrice).toFixed(2);
    document.getElementById("trdgEthPrice").innerHTML = "$" + uniSwapPrice;
    // document.getElementById("trdgEthPrice").style.color =
    //   document.getElementById("trdgPriceUniswap").style.color;
    lastPrices.uniSwap = uniSwapPrice;
  });

  // Get data -> Update UI
  getWbnbPrice().then(() => {
    uiSetWbnbPrice();
  });

  getWethPrice().then(() => {
    uiSetWethPrice();
  });

  document.getElementById("trdgPcsV1Liquidity").innerHTML =
    "$" + (lastPoolBalances.pcsV1Wbnb * lastPrices.wbnbPrice).toFixed(0);

  document.getElementById("trdgUniswapLiquidity").innerHTML =
    "$" + (lastPoolBalances.uniSwapWeth * lastPrices.wethPrice).toFixed(0);

  msg("trdgPricePcsV1PerTCSv1 price:", lastPrices.pcsV1);
  msg("TRDG FEGex BSC price:", lastPrices.fegExBsc);
  msg("TRDG UniswapV2 price:", lastPrices.uniSwap);
  msg("TRDG FEGex ETH price:", lastPrices.fegExEth);
  msg("\n");
  uiSetBscWalletValues();
  uiSetEthWalletValues();
  return true;
}

async function getBasePairBalanceFromPool(chain) {
  if (chain === "bsc") {
    // console.log("chain: ", chain);
    const bal = await getBscAccountBalanceByContractAddress(
      WBNB_ADDRESS,
      PCSV1_POOL_ADDRESS
    );
    return bal;
  } else if (chain === "eth") {
    const bal = await getEthAccountBalanceByContractAddress(
      WETH_ADDRESS,
      UNISWAP_POOL_ADDRESS
    );
    return bal;
  }
}

async function getTokenBalanceFromPool(chain) {
  if (chain === "bsc") {
    // console.log("chain: ", chain);
    const bal = await getBscAccountBalanceByContractAddress(
      TRDG_BSC_ADDRESS,
      PCSV1_POOL_ADDRESS
    );
    return bal;
  } else if (chain === "eth") {
    const bal = await getEthAccountBalanceByContractAddress(
      TRDG_ETH_ADDRESS,
      UNISWAP_POOL_ADDRESS
    );
    return bal;
  }
}

async function getTrdgBalance(contractAddress) {
  const bscApiKey = "2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET";
  let balance = 0;
  // Get BEP-20 Token Account Balance by ContractAddress
  // https://docs.bscscan.com/api-endpoints/tokens#get-bep-20-token-account-balance-by-contractaddress
  const bscUrl =
    "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=" +
    TRDG_BSC_ADDRESS +
    "&address=" +
    contractAddress +
    "&tag=latest&apikey=" +
    bscApiKey;
  await fetch(bscUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (balanceJson) {
      balance = balanceJson.result / 10 ** 9;
      document.body.innerHTML = balance;
    });
  return balance * 1; // returns a number, not a string
}

// Select the button
// const btn = document.querySelector(".btn-toggle");

// Listen for a click on the button
// btn.addEventListener("click", function () {
//   // Then toggle (add/remove) the .dark-theme class to the body
//   document.body.classList.toggle("dark-theme");
// });

// "Add new wallet" modal's OK-button callback function (BSC)
function storeBscWalletData() {
  const addr = document.getElementById("inputBscWalletAddress").value;
  if (!isValidAddress(addr)) {
    // alert("Not a valid address");
    msg("storeBscWalletData() -> Not a valid address");
    return;
  }
  walletData.bsc.address = addr;
  localStorage.setItem(
    "bscWalletAddress",
    JSON.stringify(walletData.bsc.address)
  );
  document.getElementById("bscWalletAddressHeader").innerHTML =
    "Wallet: " + addr.slice(0, 6) + "..." + addr.slice(addr.length - 4);
  walletData.bsc.address = addr;
  // console.log("storeBscWalletData ready");
  // togglePulseImage("bscWalletImage");
  getBscWalletTrdgTransfers();
}

// "Add new wallet" modal's OK-button callback function (ETH)
function storeEthWalletData() {
  const addr = document.getElementById("inputEthWalletAddress").value;
  if (!isValidAddress(addr)) {
    // alert("Not a valid address");
    msg("storeEthWalletData() -> Not a valid address");
    return;
  }
  walletData.eth.address = addr;
  localStorage.setItem(
    "ethWalletAddress",
    JSON.stringify(walletData.eth.address)
  );
  document.getElementById("ethWalletAddressHeader").innerHTML =
    "Wallet: " + addr.slice(0, 6) + "..." + addr.slice(addr.length - 4);
  walletData.eth.address = addr;
  // console.log("storeEthWalletData ready");
  // togglePulseImage("ethWalletImage");
  getEthWalletTrdgTransfers();
}

function bscWalletDataOnCancel() {
  // msg("Cancel clicked");
  const inputElem = document.getElementById("inputBscWalletAddress");
  // If valid address -> return and keep the input text (wallet address)
  // if (isValidAddress(inputAddress.value)) {
  if (walletData.bsc.address === inputElem.value) {
    return;
  }
  // (Else) Clear input element
  inputElem.value = "";
}

function ethWalletDataOnCancel() {
  // msg("Cancel clicked");
  const inputElem = document.getElementById("inputEthWalletAddress");
  // If valid address -> return and keep the input text (wallet address)
  // if (isValidAddress(inputAddress.value)) {
  if (walletData.eth.address === inputElem.value) {
    return;
  }
  // (Else) Clear input element
  inputElem.value = "";
}

function deleteBscWalletData() {
  // msg("deleteBscWalletData clicked");
  // Clear input element
  const inputElem = document.getElementById("inputBscWalletAddress");
  inputElem.value = "";
  document.getElementById("bscWalletAddressHeader").innerHTML = "Wallet";

  walletData.bsc.address = "";
  walletData.bsc.balance = "";
  walletData.bsc.rewards = "";
  walletData.bsc.transfers = {};

  document.getElementById("userTrdgBalanceBsc").innerHTML = "";
  document.getElementById("userTrdgValueBsc").innerHTML = "";
  document.getElementById("userTrdgRewardsBsc").innerHTML = "";
  document.getElementById("userTrdgRewardsValueBsc").innerHTML = "";

  // Delete key/value pairs from Localstorage
  localStorage.removeItem("bscWalletAddress");
  localStorage.removeItem("bscWalletTransfers");
  // togglePulseImage("bscWalletImage");
  // console.log("deleteBscWalletData()");
}

function deleteEthWalletData() {
  // msg("deleteEthWalletData clicked");
  // Clear input element
  const inputElem = document.getElementById("inputEthWalletAddress");
  // inputElem.disabled = false;
  inputElem.value = "";
  // inputElem.style.display = "block";
  document.getElementById("ethWalletAddressHeader").innerHTML = "Wallet";

  walletData.eth.address = "";
  walletData.eth.balance = "";
  walletData.eth.rewards = "";
  walletData.eth.transfers = {};

  document.getElementById("userTrdgBalanceEth").innerHTML = "";
  document.getElementById("userTrdgValueEth").innerHTML = "";
  document.getElementById("userTrdgRewardsEth").innerHTML = "";
  document.getElementById("userTrdgRewardsValueEth").innerHTML = "";

  // Delete key/value pairs from Localstorage
  localStorage.removeItem("ethWalletAddress");
  localStorage.removeItem("ethWalletTransfers");
  // togglePulseImage("ethWalletImage");
  // console.log("deleteEthWalletData()");
}

// Restore BSC wallet data
async function restoreBscWalletData() {
  // Always expand "Price & Total Burned Tokens" -card when opening the page
  const burnedAndPrice = document.getElementById("burnedAndPriceContentBsc");
  burnedAndPrice.style.maxHeight = burnedAndPrice.scrollHeight + "px";
  document.getElementById("burnedAndPriceHeaderBsc").classList.toggle("active");

  if (localStorage.getItem("bscWalletAddress") !== null) {
    // console.log("restoreBscWalletData() -> Valid address");
    const walletAddress = await JSON.parse(
      localStorage.getItem("bscWalletAddress")
    );
    if (!isValidAddress(walletAddress)) {
      msg("restoreBscWalletData() -> Not a valid address");
      return;
    }
    // console.log(walletAddress);
    walletData.bsc.address = walletAddress;
    document.getElementById("inputBscWalletAddress").value = walletAddress;

    const walletElementContent = document.getElementById("bscWalletContent");
    walletElementContent.style.maxHeight =
      walletElementContent.scrollHeight + "px";
    addPulseImage("bscWalletImage");

    const walletHeader = document.getElementById("bscWalletAddressHeader");
    walletHeader.classList.toggle("active");
    walletHeader.innerHTML =
      "Wallet: " +
      walletAddress.slice(0, 6) +
      "..." +
      walletAddress.slice(walletAddress.length - 4);

    //walletData.bsc.address = addr;
    // console.log(walletData);
    // console.log("restoreBscWalletData ok");
    return;
  }
  // No wallet address in Local storage -> hide "OK" and "Delete" buttons
  hideModalOkButtonBsc();
  hideModalDeleteButtonBsc();
  // console.log("restoreBscWalletData() -> Not a valid address");
  // togglePulseImage("bscWalletImage");
  // console.log("restoreBscWalletData not ok");
}

// Restore ETH wallet data
async function restoreEthWalletData() {
  // Always expand "Price & Total Burned Tokens" -card when opening the page
  const burnedAndPrice = document.getElementById("burnedAndPriceContentEth");
  burnedAndPrice.style.maxHeight = burnedAndPrice.scrollHeight + "px";
  document.getElementById("burnedAndPriceHeaderEth").classList.toggle("active");

  if (localStorage.getItem("ethWalletAddress") !== null) {
    const walletAddress = await JSON.parse(
      localStorage.getItem("ethWalletAddress")
    );
    if (!isValidAddress(walletAddress)) {
      msg("restoreEthWalletData() -> Not a valid address");
      return;
    }
    // console.log(walletAddress);
    walletData.eth.address = walletAddress;
    document.getElementById("inputEthWalletAddress").value = walletAddress;

    const walletElementContent = document.getElementById("ethWalletContent");
    walletElementContent.style.maxHeight =
      walletElementContent.scrollHeight + "px";
    addPulseImage("ethWalletImage");
    const walletHeader = document.getElementById("ethWalletAddressHeader");
    walletHeader.classList.toggle("active");
    walletHeader.innerHTML =
      "Wallet: " +
      walletAddress.slice(0, 6) +
      "..." +
      walletAddress.slice(walletAddress.length - 4);
    // console.log("restoreEthWalletData ok");
    return;
  }
  // No wallet address in Local storage -> hide "OK" and "Delete" buttons
  hideModalOkButtonEth();
  hideModalDeleteButtonEth();
  // togglePulseImage("ethWalletImage");
  // console.log("restoreEthWalletData not ok");
}

//------------------------
//----- UI FUNCTIONS -----
//------------------------

function uiSetWbnbPrice(value = lastPrices.wbnbPrice) {
  msg(lastPrices.wbnbPrice);
  document.getElementById("bscMainCardBody").innerHTML =
    "$" + toCurrencyFormat(value);
}

function uiSetWethPrice(value = lastPrices.wethPrice) {
  msg(lastPrices.wethPrice);
  document.getElementById("ethMainCardBody").innerHTML =
    "$" + toCurrencyFormat(value);
}

function uiSetBscWalletValues() {
  if (walletData.bsc.address === "") {
    return;
  }
  let userBalance = (walletData.bsc.balance / 10 ** 9).toFixed(0);
  totalRewards = (walletData.bsc.rewards / 10 ** 9).toFixed(0);
  document.getElementById("userTrdgBalanceBsc").innerHTML = toCurrencyFormat(
    userBalance,
    0
  );
  document.getElementById("userTrdgValueBsc").innerHTML =
    "=$" + toCurrencyFormat(userBalance * lastPrices.pcsV1, 2);
  document.getElementById("userTrdgRewardsBsc").innerHTML = toCurrencyFormat(
    totalRewards,
    0
  );
  document.getElementById("userTrdgRewardsValueBsc").innerHTML =
    "=$" + toCurrencyFormat(totalRewards * lastPrices.pcsV1, 2);
}

function uiSetEthWalletValues() {
  if (walletData.eth.address === "") {
    return;
  }
  let userBalance = (walletData.eth.balance / 10 ** 9).toFixed(0);
  totalRewards = (walletData.eth.rewards / 10 ** 9).toFixed(0);
  document.getElementById("userTrdgBalanceEth").innerHTML = toCurrencyFormat(
    userBalance,
    0
  );
  document.getElementById("userTrdgValueEth").innerHTML =
    "=$" + toCurrencyFormat(userBalance * lastPrices.uniSwap, 2);
  document.getElementById("userTrdgRewardsEth").innerHTML = toCurrencyFormat(
    totalRewards,
    0
  );
  document.getElementById("userTrdgRewardsValueEth").innerHTML =
    "=$" + toCurrencyFormat(totalRewards * lastPrices.uniSwap, 2);
}

// "Show/hide" -functions for the buttons in the modal
function hideModalOkButtonBsc() {
  document.getElementById("btnBscWalletAddressOk").style.display = "none";
}

function hideModalOkButtonEth() {
  document.getElementById("btnEthWalletAddressOk").style.display = "none";
}

function showModalOkButtonBsc() {
  document.getElementById("btnBscWalletAddressOk").style.display = "block";
}

function showModalOkButtonEth() {
  document.getElementById("btnEthWalletAddressOk").style.display = "block";
}

function hideModalDeleteButtonBsc() {
  document.getElementById("btnBscWalletAddressDelete").style.display = "none";
}

function hideModalDeleteButtonEth() {
  document.getElementById("btnEthWalletAddressDelete").style.display = "none";
}

function showModalDeleteButtonBsc() {
  document.getElementById("btnBscWalletAddressDelete").style.display = "block";
}

function showModalDeleteButtonEth() {
  document.getElementById("btnEthWalletAddressDelete").style.display = "block";
}

// Show OK button when a user has typed a valid address (BSC)
function bscWalletAddressOnInput() {
  const inputAddress = document.getElementById("inputBscWalletAddress");
  if (isValidAddress(inputAddress.value)) {
    showModalOkButtonBsc();
  } else {
    hideModalOkButtonBsc();
  }
  // msg(isValidAddress(this.value));
}

// Show OK button when a user has typed a valid address (ETH)
function ethWalletAddressOnInput() {
  const inputAddress = document.getElementById("inputEthWalletAddress");
  if (isValidAddress(inputAddress.value)) {
    showModalOkButtonEth();
  } else {
    hideModalOkButtonEth();
  }
  // msg(isValidAddress(this.value));
}

// This is called when the modal is about to be shown (show/hide buttons, depending on address validity)
// BSC
function bscWalletModalOnShow() {
  const inputAddress = document.getElementById("inputBscWalletAddress");
  const bscModalHeader = document.getElementById("bscModalHeader");
  hideModalOkButtonBsc();
  if (isValidAddress(inputAddress.value)) {
    msg("bscWalletModalOnShow");
    inputAddress.readOnly = true;
    // inputAddress.style.display = "none";
    bscModalHeader.innerHTML = "Delete current wallet";
    showModalDeleteButtonBsc();
  } else {
    inputAddress.readOnly = false;
    hideModalDeleteButtonBsc();
    bscModalHeader.innerHTML = "Add new wallet";
  }
}
// ETH
function ethWalletModalOnShow() {
  const inputAddress = document.getElementById("inputEthWalletAddress");
  const ethModalHeader = document.getElementById("ethModalHeader");
  hideModalOkButtonEth();
  if (isValidAddress(inputAddress.value)) {
    msg("ethWalletModalOnShow");
    inputAddress.readOnly = true;
    // inputAddress.style.display = "none";
    ethModalHeader.innerHTML = "Delete current wallet";
    showModalDeleteButtonEth();
  } else {
    inputAddress.readOnly = false;
    hideModalDeleteButtonEth();
    ethModalHeader.innerHTML = "Add new wallet";
  }
}

// Make all card elements that has a "collapsible" -class collapsible
function applyEventListenersToCollapsibles() {
  const coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      let currElemId = content.id;
      if (content.style.maxHeight) {
        // Collapse
        content.style.maxHeight = null;
        // Remove animations (wallet icons)
        if (currElemId === "bscWalletContent") {
          removePulseImage("bscWalletImage");
        } else if (currElemId === "ethWalletContent") {
          removePulseImage("ethWalletImage");
        }
      } else {
        // Expand
        content.style.maxHeight = content.scrollHeight + "px";
        // Add animations (wallet icons)
        if (currElemId === "bscWalletContent") {
          addPulseImage("bscWalletImage");
        } else if (currElemId === "ethWalletContent") {
          addPulseImage("ethWalletImage");
        }
      }
    });
  }
}

// Fade in animation for elements (Burn wallet value texts)
function toggleFadeInText(elemId) {
  var element = document.getElementById(elemId);
  element.classList.toggle("fadePopInAndStay");
}

// // Toggle pulse animation for images (see styles.css file)
// function togglePulseImage(elemId) {
//   var element = document.getElementById(elemId);
//   element.classList.toggle("pulse-image");
// }

// "Add pulse animation" for images (see styles.css file)
function addPulseImage(elemId) {
  var element = document.getElementById(elemId);
  element.classList.add("pulse-image");
}

// "Remove pulse animation" for images (see styles.css file)
function removePulseImage(elemId) {
  var element = document.getElementById(elemId);
  element.classList.remove("pulse-image");
}

// "Shake animation" for images (see styles.css file)
function toggleShakeImage(elemId) {
  var element = document.getElementById(elemId);
  element.classList.toggle("shake-image");
}

// TODO
// Burn wallet progress bar -> move
function progressBarMove(elemId) {
  var element = document.getElementById(elemId);
  element.classList.toggle("burnedProgressBarMove");
  element.value = ((lastBurnValues.bscBurned * 1) / MAX_SUPPLY) * 100;
  // alert(element.value);
  element.style.width = element.value;
}

function setColors() {
  const red = document.getElementById("redSlider").value;
  const green = document.getElementById("greenSlider").value;
  const blue = document.getElementById("blueSlider").value;
  const alpha = document.getElementById("alphaSlider").value / 255;
  let color = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
  // console.log(color);
  cardBodies = document.getElementsByClassName("content");
  // console.log(cardBodies.length);

  for (let i = 0; i < cardBodies.length; i++) {
    // console.log(cardBodies[i].id);
    cardBodies[i].style.backgroundColor = color;
    // Exclude cards in the settings window
    // if (cardBodies[i].id !== "settingsCardBody") {
    //   cardBodies[i].style.backgroundColor = color;
    // }
  }
  // backgroundColor
}

function dimBackGround() {
  const alpha = document.getElementById("dimBgSlider").value / 255;
  let color = "rgba(0,0,0," + alpha + ")";
  document.body.style.backgroundColor = color;
}

// function ethWalletOnAddressDrop(e) {
//   e.preventDefault();
//   console.log("ethWalletonAddressDrop");
//   console.log(e);
// }

function ethWalletOnAddressDrop(e) {
  e.preventDefault();
  let address = e.dataTransfer.getData("text");
  let addr = address.match(/0x[a-fA-F0-9]{40}/g);
  for (let i = 0; i < addr.length; i++) {
    let currAddr = addr[i].toLowerCase();
    if (currAddr !== TRDG_ETH_ADDRESS.toLowerCase()) {
      document.getElementById("inputEthWalletAddress").value = currAddr;
      storeEthWalletData();
    }
  }
}

function ethWalletOnAddressDragEnter(e) {
  e.preventDefault();
}

function ethWalletOnAddressDragOver(e) {
  e.preventDefault();
}

document
  .getElementById("ethWalletImage")
  .addEventListener("drop", ethWalletOnAddressDrop);
document
  .getElementById("ethWalletImage")
  .addEventListener("dragenter", ethWalletOnAddressDragEnter);
document
  .getElementById("ethWalletImage")
  .addEventListener("dragover", ethWalletOnAddressDragOver);

// Update the current slider value (each time you drag the slider handle)
document.getElementById("redSlider").addEventListener("input", setColors);
document.getElementById("greenSlider").addEventListener("input", setColors);
document.getElementById("blueSlider").addEventListener("input", setColors);
document.getElementById("alphaSlider").addEventListener("input", setColors);

document.getElementById("dimBgSlider").addEventListener("input", dimBackGround);

function randomBg() {
  var imgCount = 4;
  var dir = "images/";
  /* background-image: url("images/Alien\ landscape.jpg"); */
  /* background-image: url("images/Stars.jpg"); */
  /* background-image: url("images/MilkyWay.jpg"); */
  /* background-image: url("images/DeepSpaceDark.jpg"); */
  // I changed your random generator
  //floor: helps getting a random integer
  var randomCount = Math.floor(Math.random() * imgCount);
  // console.log("background-image: url(" + dir + images[randomCount] + ");");
  // I changed your array to the literal notation. The literal notation is preferred.
  var images = [
    // "TRDGlogo.png",
    "Stars.jpg",
    "Alien landscape.jpg",
    "MilkyWay.jpg",
    "DeepSpaceDark.jpg"
  ];
  // I changed this section to just define the style attribute the best way I know how.
  let url = "url('" + dir + images[randomCount] + "')";
  document.body.style.backgroundImage = url;
}

// Set a random background image
// randomBg();
// setColors();

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("sideNavSettings").style.width = "200px";
  // document.getElementById("main").style.marginLeft = "200px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sideNavSettings").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
}

//----------------
//----- INIT -----
//----------------

// Make card bodies collapsible
applyEventListenersToCollapsibles();

// Apply eventlisteners to wallet-modal elements
// BSC
// Modal (show.bs.modal occurs when the modal is about to be shown)
document
  .getElementById("addNewBscWalletModal")
  .addEventListener("show.bs.modal", bscWalletModalOnShow);
// Input element (wallet address input)
document
  .getElementById("inputBscWalletAddress")
  .addEventListener("input", bscWalletAddressOnInput);
// OK-button
document
  .getElementById("btnBscWalletAddressOk")
  .addEventListener("click", storeBscWalletData);
// Delete-button
document
  .getElementById("btnBscWalletAddressDelete")
  .addEventListener("click", deleteBscWalletData);
// Cancel-button
document
  .getElementById("btnBscWalletAddressCancel")
  .addEventListener("click", bscWalletDataOnCancel);

// ETH
// Modal (show.bs.modal occurs when the modal is about to be shown)
document
  .getElementById("addNewEthWalletModal")
  .addEventListener("show.bs.modal", ethWalletModalOnShow);
// Input element (wallet address input)
document
  .getElementById("inputEthWalletAddress")
  .addEventListener("input", ethWalletAddressOnInput);
// OK-button
document
  .getElementById("btnEthWalletAddressOk")
  .addEventListener("click", storeEthWalletData);
// Delete-button
document
  .getElementById("btnEthWalletAddressDelete")
  .addEventListener("click", deleteEthWalletData);
// Cancel-button
document
  .getElementById("btnEthWalletAddressCancel")
  .addEventListener("click", ethWalletDataOnCancel);

// Fetch initial data (to quickly show wallet balance and value)
// Get data -> Update UI
getWbnbPrice().then(() => {
  uiSetWbnbPrice();
});

getWethPrice().then(() => {
  uiSetWethPrice();
});

restoreBscWalletData().then(() => {
  getBscWalletTrdgTransfers();
});

restoreEthWalletData().then(() => {
  getEthWalletTrdgTransfers();
});

getData().then(() => {
  uiSetBscWalletValues();
  uiSetEthWalletValues();
});

getBurnWalletBalanceBsc();
getBurnWalletBalanceEth();

const throttledGetData = throttle(getData, 500);
const throttledGetBscWalletTrdgTransfers = throttle(
  getBscWalletTrdgTransfers,
  500
);
const throttledGetEthWalletTrdgTransfers = throttle(
  getEthWalletTrdgTransfers,
  500
);
const throttledGetBurnWalletBalanceBsc = throttle(getBurnWalletBalanceBsc, 500);
const throttledGetBurnWalletBalanceEth = throttle(getBurnWalletBalanceEth, 500);

// Start fetching data
function startFetchingData() {
  setInterval(throttledGetData, 1000 * 30);
  setInterval(throttledGetBscWalletTrdgTransfers, 1000 * 30);
  setInterval(throttledGetEthWalletTrdgTransfers, 1000 * 30);
  setInterval(throttledGetBurnWalletBalanceBsc, 1000 * 30);
  setInterval(throttledGetBurnWalletBalanceEth, 1000 * 30);
}

startFetchingData();
