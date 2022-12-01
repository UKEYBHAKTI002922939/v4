pragma solidity ^0.8.0;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/utils/introspection/IERC165.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract DutchAuction {
  // Required variables
  address payable addressOfOwner;
  address payable winnerAddress;
  uint256 reservePrice;
  uint256 numBlocksActionOpen;
  uint256 offerPriceDecrement;
  uint256 startBlockNumber;
  uint256 winningBidAmount;
  bool auctionEnded;
  bool confirmed;
  IERC20 public erc20TokenAddress;
  IERC721 public erc721TokenAddress;
  uint256 public nftTokenId;

  constructor(
    address _erc20TokenAddress,
    address _erc721TokenAddress,
    uint256 _nftTokenId,
    uint256 _reservePrice,
    uint256 _numBlocksAuctionOpen,
    uint256 _offerPriceDecrement
  ) {
    // iniitialize everything to a variable
    erc20TokenAddress = IERC20(_erc20TokenAddress);
    erc721TokenAddress = IERC721(_erc721TokenAddress);
    nftTokenId = _nftTokenId;
    reservePrice = _reservePrice;
    numBlocksActionOpen = _numBlocksAuctionOpen;
    offerPriceDecrement = _offerPriceDecrement;
    addressOfOwner = payable(msg.sender);
    startBlockNumber = block.number;
  }

  function bid(uint256 amount) external payable {
    console.log(amount);
    console.log(nftTokenId);
    console.log(address(this));
    console.log(block.number);
    console.log(startBlockNumber);
    console.log(numBlocksActionOpen);
    // check if the auction has ended
    require(!auctionEnded);
    console.log('It went here');
    // check if the block number is within the time limit
    //require(block.number < (startBlockNumber + numBlocksActionOpen));
    // check if the bid is higher than the reserve price
    console.log('It past here');
    require(
      amount >=
        (reservePrice +
          (offerPriceDecrement *
            (startBlockNumber + numBlocksActionOpen - block.number))),
      'Amount of _tokenIdCounter sent is less than the price of the token'
    );
    console.log('It present here');

    winnerAddress = payable(msg.sender);
    console.log('The winneraddr here');
    winningBidAmount = amount;
    console.log('Winning bid Amount');
    erc20TokenAddress.approve(address(this), amount);
    console.log('Insufficient balance');
    erc20TokenAddress.transferFrom(msg.sender, address(this), amount);
    console.log('Insufficient Transfer');
    erc721TokenAddress.transferFrom(addressOfOwner, winnerAddress, nftTokenId);
    
    // if the bid value is higher end the auction
    auctionEnded = true;
  }

  function getPrice() public view returns (uint256) {
    uint256 price = reservePrice +
      (offerPriceDecrement *
        (startBlockNumber + numBlocksActionOpen - block.number));
    return price;
  }

  function getReservePrice() public view returns (uint256) {
    return reservePrice;
  }

  function getNumBlocksOpen() public view returns (uint256) {
    return numBlocksActionOpen;
  }

  function getOfferPriceDecrement() public view returns (uint256) {
    return offerPriceDecrement;
  }

  function getAddressOfOwner() public view returns (address) {
    return addressOfOwner;
  }

  function getWinnerAddress() public view returns (address) {
    return winnerAddress;
  }

  function finalize() public payable {
    // using the finlalize to transfer the amount
    require(auctionEnded && !confirmed);
    require(msg.sender == winnerAddress);
    confirmed = true;
    addressOfOwner.transfer(winningBidAmount);
    // transfer nft here
    // erc20TokenAddress.transferFrom(addressOfOwner, msg.sender, winningBidAmount * 10 ** 18);
    // erc20TokenAddress.transfer(msg.sender, erc20TokenAddress.balanceOf(addressOfOwner));
    erc721TokenAddress.transferFrom(addressOfOwner, msg.sender, nftTokenId);
  }

  function refund(uint256 refundAmount) public payable {
    // initiate the refund amount
    require(auctionEnded && !confirmed);
    confirmed = true;
    winnerAddress.transfer(refundAmount);
  }

  //for testing framework
  function nop() public returns (bool) {
    return true;
  }
}