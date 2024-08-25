// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract TokenTransferController {
    address public owner;
    IERC20 public token;

    event TokensTransferred(address to, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor(address _token) {
        owner = msg.sender;
        token = IERC20(_token);
    }

    function transferTokens(address recipient, uint256 amount) external onlyOwner {
        require(token.transfer(recipient, amount), "Token transfer failed");
        emit TokensTransferred(recipient, amount);
    }
}
