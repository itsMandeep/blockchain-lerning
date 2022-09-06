const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("FavoriteNumbers", function () {
  let FavoriteNumbersFactory, favoriteNumbers;
  beforeEach(async function () {
    FavoriteNumbersFactory = await ethers.getContractFactory("FavoriteNumbers");
    favoriteNumbers = await FavoriteNumbersFactory.deploy();
  });

  it("Should not have any numbers into the list", async function () {
    const initialNumbers = [];
    const numbers = favoriteNumbers.getFavoriteNumbers();

    assert(numbers, initialNumbers);
  });

  it("Should add new number when addNewNumber function called", async function () {
    const newNumberArray = [12];
    const numbers = favoriteNumbers.addFavoriteNumber(12);

    assert(numbers, newNumberArray);
  });
});

// yarn hardhat test --grep string
