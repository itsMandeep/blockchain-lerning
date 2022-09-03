const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("deploying....");

  const contract = await contractFactory.deploy();
  const deploymentReceipt = await contract.deployTransaction.wait(1);

  const favNumber = await contract.getNumber();
  await contract.addNumber(3);
  const newFavNumber = await contract.getNumber();

  console.log(
    `FavNumber is ${favNumber} and updated favNumber is ${newFavNumber}`
  );

  return contract.deployTransaction;
}

main()
  .then((res) => {
    console.log("new contract deployed", res.hash);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
