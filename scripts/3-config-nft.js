import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x876Bee52C86a63FA17449c426Ae2e07665916467",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Metal Invader",
        description: "This NFT will give you access to MetalDAO!",
        image: readFileSync("scripts/assets/metal.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()