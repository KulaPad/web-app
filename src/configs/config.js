const CONTRACT_NAME = process.env.CONTRACT_NAME || 'dev-1643993185636-67848471782433';
const FT_TOKEN_CONTRACT_NAME = process.env.FT_TOKEN_CONTRACT_NAME ||'token-kulapad.testnet'
const STAKING_CONTRACT_NAME = process.env.STAKING_CONTRACT_NAME || 'staking-kulapad.testnet'
const IDO_CONTRACT_NAME = process.env.IDO_CONTRACT_NAME || 'v1-ido-kulapad.testnet'

function getConfig(env) {
  switch(env) {
    case 'mainnet':
      return {
        networkId: 'mainnet',
        nodeUrl: 'https://rpc.mainnet.near.org',
        contractName: CONTRACT_NAME,
        ftTokenContractName: FT_TOKEN_CONTRACT_NAME,
        stakingContractName: STAKING_CONTRACT_NAME,
        idoContractName: IDO_CONTRACT_NAME,
        walletUrl: 'https://wallet.near.org',
        helperUrl: 'https://helper.mainnet.near.org'
      };
    // This is an example app so production is set to testnet.
    // You can move production to mainnet if that is applicable.
    case 'production':
    case 'development':
    case 'testnet':
      return {
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        contractName: CONTRACT_NAME,
        ftTokenContractName: FT_TOKEN_CONTRACT_NAME,
        stakingContractName: STAKING_CONTRACT_NAME,
        idoContractName: IDO_CONTRACT_NAME,
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org'
      };
    default:
      throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`);
  }
}

module.exports = getConfig;