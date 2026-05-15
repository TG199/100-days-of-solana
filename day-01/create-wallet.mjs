import { generateKeyPairSigner,	createSolanaRpc, devnet, address } from "@solana/kit";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
const wallet = await generateKeyPairSigner();

console.log("Wallet address:", address("Hn5o3RqsAu2Ds8kp3jr4UhbmVykKeELqnoaTZrFGMFs7"));
console.log("\n--- Go to https://faucet.solana.com/ and airdrop SOL to this address ---");
console.log("--- Then run this script again with the same address to check the balance ---\n");

const { value: balance} = await rpc.getBalance(wallet.address).send();
const balanceInSol = Number(balance) / 1_000_000_000;


console.log(`Balance: ${balanceInSol} SOL`);
