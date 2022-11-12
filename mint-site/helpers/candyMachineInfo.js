export const candyMachineAddress = "0x7f842736da477ffc31c19810341c281556c1791d76668c078b92553f8bba24a1";

export const collectionName = "DR.RAINBOW"; // Case sensitive!
export const MaxMint = 3
export const COLLECTION_SIZE = 30

// To remove the background of the dapp to a solid color just delete the "collectionCoverUrl" url below
// Any hosted image can be used
export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs/QmW9Jd4yNpziQzSnCnmEYCW1V4GSNhrpGHgexghQv5Zdgj";
export const collectionBackgroundUrl = "";

export const mode = "dev"; // "dev" or "test" or "mainnet"
export let NODE_URL;
export const CONTRACT_ADDRESS = "0x5b71b400de0767bcec88464c33a0c74c839737206883a9379252f4907b8bf30e";
export const SERVICE_NAME = "ftmpad"
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
