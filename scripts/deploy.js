async function main() {
  const ProxyNFT = await hre.ethers.getContractFactory("ProxyNFT");
  const nft = await ProxyNFT.deploy();

  await nft.deployed();

  console.log("ProxyNFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
