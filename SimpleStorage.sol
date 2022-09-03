// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleStorage {
    uint8 favNumber;

    function addNumber(uint8 _number) public {
        favNumber = _number;
    }

    function getNumber() public view returns (uint8) {
        return favNumber;
    }
}
