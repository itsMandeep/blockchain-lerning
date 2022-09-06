// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract FavoriteNumbers {
  uint8[] public favoriteNumbers;

  function addFavoriteNumber(uint8 _number) public {
    favoriteNumbers.push(_number);
  }

  function getFavoriteNumbers() public view returns (uint8[] memory) {
    return favoriteNumbers;
  }
}
