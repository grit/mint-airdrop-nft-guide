const friends = [
    "0x179F15f55a734f3001325eeA4F0D0d6CbA5e1657",
    "0xc922DD36Fe6f1b5c2Ad216fc10CaeDdA680Ec2A6",
];
const existingContractAddr = "0x32aFF24597c7c11C44eBA50a207FB063fB1dd9f5";

async function main() {
  const nft = await hre.ethers.getContractAt("ProxyNFT", existingContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  for(let i = 0; i < friends.length; i++) {
    const tokenURI = "https://gateway.ipfs.io/ipfs/QmXBZqR571xMPqr5ZuoHVKfsAsk8CGP5uU2RNNd8xiKkzc";
    await nft.awardItem(friends[i], tokenURI,  {
      nonce: nonce + i
    });
  }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
