import * as nearAPI from "near-api-js";
import getConfig from "../configs/config.js";
import { isClientDevMode } from "../utils/Env.ts";


if (isClientDevMode) {
  window.tmp__NearAPI = nearAPI;
}

// Initializing contract
async function initContract() {
  const nearConfig = getConfig(process.env.NODE_ENV || "testnet");

  // Initializing connection to the NEAR TestNet
  const near = await nearAPI.connect({
    deps: {
      keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
    },
    ...nearConfig,
  });

  // Needed to access wallet
  const walletConnection = new nearAPI.WalletConnection(near);
  window.walletConnection = walletConnection;

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId();
  window.account = window.walletConnection.account();

  // Load in account data
  let currentUser;
  if (walletConnection.getAccountId()) {
    currentUser = {
      accountId: walletConnection.getAccountId(),
      balance: (await walletConnection.account().state()).amount,
    };
  }

  // Initializing our contract APIs by contract name and configuration
  const contract = await new nearAPI.Contract(
    walletConnection.account(),
    nearConfig.contractName,
    {
      // View methods are read-only – they don't modify the state, but usually return some value
      viewMethods: ["get"],
      // Change methods can modify the state, but you don't receive the returned value when called
      changeMethods: ["create", "update", "del"],
      // Sender is the account ID to initialize transactions.
      // getAccountId() will return empty string if user is still unauthorized
      sender: walletConnection.getAccountId(),
    }
  );

  const contractFT = await new nearAPI.Contract(
    window.walletConnection.account(),
    nearConfig.ftTokenContractName,
    {
      // View methods are read only. They don't modify the state, but usually return some value.
      viewMethods: [
        "storage_balance_of",
        "ft_metadata",
        "ft_balance_of",
        "ft_total_supply",
      ],
      // Change methods can modify the state. But you don't receive the returned value when called.
      changeMethods: [
        "storate_deposit",
        "claim_testnet_token",
        "ft_transfer_call",
      ],
    }
  );
  window.contractFT = contractFT;

  const contractIdo = await new nearAPI.Contract(
    window.walletConnection.account(),
    nearConfig.idoContractName,
    {
      // View methods are read only. They don't modify the state, but usually return some value.
      viewMethods: [
        "get_projects",
        "get_project",
      ],
      // Change methods can modify the state. But you don't receive the returned value when called.
      changeMethods: [],
    }
  );
  window.contractIdo = contractIdo;

  const contractStaking = await new nearAPI.Contract(
    window.walletConnection.account(),
    nearConfig.stakingContractName,
    {
      // View methods are read only. They don't modify the state, but usually return some value.
      viewMethods: [
        "get_account_info",
        "get_account_reward",
        "get_pool_info",
        "storage_balance_of",
      ],
      // Change methods can modify the state. But you don't receive the returned value when called.
      changeMethods: [
        "unstake",
        "lock",
        "unlock",
        "withdraw",
        "harvest"
      ],
    }
  );
  window.contractStaking = contractStaking;

  return {
    contract,
    contractFT,
    contractIdo,
    currentUser,
    nearConfig,
    walletConnection,
    contractStaking,
  };
}

export default initContract;
