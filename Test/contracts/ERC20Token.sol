pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract ERC20Token is ERC20, Ownable {
  uint256 amount;

  constructor(uint256 _amount) ERC20('ERC20', 'Dcoins') {
    amount = _amount;
    _mint(msg.sender, amount * 10**decimals());
  }
}
