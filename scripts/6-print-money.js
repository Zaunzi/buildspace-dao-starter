import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
    "0xE118bC4e26dcd6134777C4B1C50d81864571e392"
);

(async () => {
    (async () => {
        try {
          // What's the max supply you want to set? 1,000,000 is a nice number!
          const amount = 1_000_000;
          // We use the util function from "ethers" to convert the amount
          // to have 18 decimals (which is the standard for ERC20 tokens).
          const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
          // Interact with your deployed ERC-20 contract and mint the tokens!
          await tokenModule.mint(amountWith18Decimals);
          const totalSupply = await tokenModule.totalSupply();

        console.log(
        "✅ There now is",
        ethers.utils.formatUnits(totalSupply, 18),
        "$Metal in circulation",
        );

    } catch (error) {
        console.error("Failed to print money", error);
    }
})();