// Generate key pair for the admin stellax wallet
// and fund with friendbot (10K xlm)
import * as StellarSdk from "@stellar/stellar-sdk";
import axios from "axios";

export async function createAndFundWallet() {
  const pair = StellarSdk.Keypair.random();

  console.log(`Public Key: ${pair.publicKey()}`);
  console.log(`Private Key: ${pair.secret()}`);

  const response = await axios.get(
    `https://friendbot.stellar.org?addr=${encodeURIComponent(pair.publicKey())}`
  );

  if (response.data.successful) {
    console.log("Account created and funded with 10,000 test XLM successfully");
  } else {
    console.log("Something went wrong. Please try again later.");
  }
}
