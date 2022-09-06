// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main() {
  const FavoriteNumbers = await ethers.getContractFactory("FavoriteNumbers");
  const favoriteNumbers = await FavoriteNumbers.deploy();

  await favoriteNumbers.deployed();

  console.log("Deployed Contract", favoriteNumbers.address);

  await favoriteNumbers.addFavoriteNumber(3);
  await favoriteNumbers.addFavoriteNumber(7);
  await favoriteNumbers.addFavoriteNumber(12);
  const currentFavNumbers = await favoriteNumbers.getFavoriteNumbers();

  console.log("Current Favorite Numbers");
  currentFavNumbers.map((number) => {
    console.log("\n", number);
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
