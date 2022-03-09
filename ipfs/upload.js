const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "ProxyNFT on Rinkeby",
      attributes: [
        {
          "trait_type": "Strength",
          "value": "5"
        },
        {
          "trait_type": "Dexterity",
          "value": "3"
        },
        {
          "trait_type": "Intellect",
          "value": "1"
        }
      ],
      // if you want to upload your own IPFS image, you can do so here:
      // https://github.com/ChainShot/IPFS-Upload
      image: "https://gateway.ipfs.io/ipfs/QmYNMdcSumomqKeamzMasyY2j9yfx3BD3Qxpr8y4fhj4Ru",
      description: "You are one constant in a sea of variables."
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
