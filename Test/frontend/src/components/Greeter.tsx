import { useWeb3React } from '@web3-react/core';
import { Contract, ethers, Signer, utils } from 'ethers';
import {
  ChangeEvent,
  MouseEvent,
  ReactElement,
  useEffect,
  useState
} from 'react';
import styled from 'styled-components';

import HuskyArtifact from '../artifacts/contracts/ERC721Token.sol/ERC721Token.json';
import ERC20Artifact from '../artifacts/contracts/ERC20Token.sol/ERC20Token.json';
import DutchAuctionArtifact from '../artifacts/contracts/DutchAuction.sol/DutchAuction.json';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { Provider } from '../utils/provider';
import { getAddress } from 'ethers/lib/utils';
import { Title } from 'react-bootstrap/lib/Modal';

const StyledDeployContractButton = styled.button`
  width: 180px;
  height: 2rem;
  border-radius: 1rem;
  margin-left:80%;
  border-color: blue;
  cursor: pointer;
  place-self: center;
`;

// const InputButon = styled.submit`
//   margin-left: 80%;
// `;

const StyledActivateButton = styled.button`
background-color: #337AB7; /* Blue */
border: none;
margin-left: 90%;
height: 5rem;
width:600px;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin-top :20px;
`;

const ColoredLine = styled.hr`
          color: black;
          backgroundColor: black;
          height: 5`;
  

const StyledGreetingDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 135px 2.7fr 1fr;
  grid-gap: 10px;
  place-self: center;
  align-items: center;
`;

const title = styled.h3`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 135px 2.7fr 1fr;
  grid-gap: 10px;
  place-self: center;
  align-items: center;
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 0.4rem 0.6rem;
  line-height: 2fr;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 2rem;
  border-radius: 1rem;
  margin-left:40px;
  cursor: pointer;
`;

export function Greeter(): ReactElement {
  const context = useWeb3React<Provider>();
  const { library, active } = context;

  const [signer, setSigner] = useState<Signer>();
  const [greeterContract, setGreeterContract] = useState<Contract>();
  const [dutchAuctionContract, setDutchAuctionContract] = useState<Contract>();
  const [erc20Contracts, setErc20Contracts] = useState<Contract>();
  const [huskyContract, setHuskyContract] = useState<Contract>();
  const [greeterContractAddr, setGreeterContractAddr] = useState<string>('');
  const [huskyContractAddr, setHuskyContractAddr] = useState<string>('');
  const [erc20ContractAddr, setERC20ContractAddr] = useState<string>();
  const [dutchAuctionContractAddress, setDutchAuctionContractAddress] =
    useState<string>();
  const [greeting, setGreeting] = useState<string>('');
  const [greetingInput, setGreetingInput] = useState<string>('');
  const[currentERCBalance,setCurrentERCBalance] =useState<string>('');
  // Extra input to handle from the event
  const [nftId, setNFTId] = useState<string>('');
  //const [nftId, setNFTId] = useState(0);
  const [reservePriceInput, setReservePriceInput] = useState<string>('');
  const [numberOfBlockInput, setNumberOfBlockInput] = useState<string>('');
  const [offerPriceDecrementInput, setOfferPriceDecrementInput] =
    useState<string>('');
  const [totalNumberOfTokenInput, setTotalNumberOfTokenInput] =
    useState<string>('');
  const [bidAmountInput, setBidAmountInput] = useState<string>('');
  const [auctionWinner, setAuctionWinner] = useState<string>('');
  const [creationPrice, setCreationPrice] = useState<string>('');
  const [owner, setOwner] = useState<string>('');

  useEffect((): void => {
    if (!library) {
      setSigner(undefined);
      return;
    }

    setSigner(library.getSigner());
  }, [library]);

  function handleDeployContract(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (!signer) {
      window.alert('No Signer.');
      console.log('No Signer.');
      return;
    }

    async function deployGreeterContract(signer: Signer): Promise<void> {


      const HuskyMint = new ethers.ContractFactory(
        HuskyArtifact.abi,
        HuskyArtifact.bytecode,
        signer
      );

      const ERC20 = new ethers.ContractFactory(
        ERC20Artifact.abi,
        ERC20Artifact.bytecode,
        signer
      );

      const DutchAuction = new ethers.ContractFactory(
        DutchAuctionArtifact.abi,
        DutchAuctionArtifact.bytecode,
        signer
      );

      try {

        const erc20Contract = await ERC20.deploy(100000);
        await erc20Contract.deployed();
     erc20Contract.transfer(
          '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',
          1000000
        );
  
     erc20Contract.transfer(
          '0xdD2FD4581271e230360230F9337D5c0430Bf44C0',
          1000000
        
        );
        setErc20Contracts(erc20Contract);

        const huskyContract = await HuskyMint.deploy();
        await huskyContract.deployed();
        const testing = await huskyContract.safeMint(signer.getAddress());
        const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
        const txReceipt = await provider.waitForTransaction(testing.hash);
        const nfttokenId = parseInt((txReceipt.logs[0].topics[3]));
        setNFTId('0');
       // console.log('NFT Token ID: ' + testing.v);
        setHuskyContract(huskyContract);
        setERC20ContractAddr(erc20Contract.address);
        setHuskyContractAddr(huskyContract.address);

        const dutchAuctionContract = await DutchAuction.deploy(
          erc20Contract.address,
          huskyContract.address,
          0,
          reservePriceInput,
          numberOfBlockInput,
          offerPriceDecrementInput
        );

        await dutchAuctionContract.deployed();
        huskyContract.approve(dutchAuctionContract.address, nfttokenId);
        setDutchAuctionContractAddress(dutchAuctionContract.address);
        setDutchAuctionContract(dutchAuctionContract);
        const creationBlock = await dutchAuctionContract.getPrice();
        const owner = await dutchAuctionContract.getAddressOfOwner();

        setCreationPrice(creationBlock.toString());
        setOwner(owner);


        window.alert(
          'Dutch Auction deployed to: ' + dutchAuctionContract.address
        );
        // setGreeterContractAddr(greeterContract.address);
       // setDutchAuctionContractAddress(dutchAuctionContract.address);
      } catch (error: any) {
        window.alert(
          'Error!' + (error && error.message ? `\n\n${error.data.message}` : '')
        );
      }
    }
    deployGreeterContract(signer);
  }

  async function handleERCBalance(
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    event.preventDefault();

    if (!signer) {
      window.alert('No Signer.');
      return;
    }

    if (!erc20Contracts) {
      window.alert('Undefined erc20Balance');
      return;
    }

    const balance = await erc20Contracts.balanceOf(signer.getAddress());
    setCurrentERCBalance(balance.toString());
  }


 

  function handleReservePriceChange(
    event: ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();
    setReservePriceInput(event.target.value);
  }

  function handleNumberOfBlockOpenChange(
    event: ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();
    setNumberOfBlockInput(event.target.value);
  }

  function handleOfferPriceDecrementChange(
    event: ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();
    setOfferPriceDecrementInput(event.target.value);
  }

  function handleTotalTokens(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setTotalNumberOfTokenInput(event.target.value);
  }



  function handleBidAmountInput(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setBidAmountInput(event.target.value);
  }

  async function handleGreetingSubmit(
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    event.preventDefault();

    if (!signer) {
      window.alert('No Signer.');
      return;
    }

    if (!dutchAuctionContract) {
      window.alert('Undefined DutchAuctionContract');
      return;
    }

    if (owner === (await signer.getAddress())) {
      window.alert('Owner cant bid.');
      return;
    }

    

    async function submitGreeting(
      signer: Signer,
      dutchAuctionContract: Contract
    ): Promise<void> {
      // handling the ERC20
      try {
        if (!erc20Contracts) {
          return;
        }
       

        await erc20Contracts.approve(
          dutchAuctionContractAddress,
          bidAmountInput
        );
      } catch (error: any) {
        window.alert(
          'Error!' + (error && error.message ? `\n\n${error.data.message}` : '')
        );
      }

      try {
        try {
          const bid = await dutchAuctionContract
            .connect(signer)
            .bid(bidAmountInput);
          console.log('before await');
          await bid.wait();
          console.log('The bid', bid);
        } catch (error: any) {
          window.alert(
            'Error! New' +
              (error && error.message ? `\n\n${error.data.message}` : '')
          );
        }
        setAuctionWinner(await dutchAuctionContract.getWinnerAddress());
      } catch (error: any) {
        window.alert(
          'Error! old' + (error && error.message ? `\n\n${error.data.message}` : '')
        );
      }
    }

    submitGreeting(signer, dutchAuctionContract);
  }

  async function handleSellNFT(
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    event.preventDefault();

    if (!signer) {
      window.alert('No Signer.');
      return;
    }

    if (!dutchAuctionContract) {
      window.alert('Undefined DutchAuctionContract');
      return;
    }
    if (owner !== (await signer.getAddress())) {
      window.alert('Only owner can sell NFT');
      return;
    }

    async function sellNFT(
      signer: Signer,
      dutchAuctionContract: Contract
    ): Promise<void> {
      try {
        try {
          const sell = await dutchAuctionContract.connect(signer).sell();
          await sell.wait();
          console.log('The sell', sell);
        } catch (error: any) {
          window.alert(
            'Error! New' +
              (error && error.message ? `\n\n${error.data.message}` : '')
          );
        }
        setAuctionWinner(await dutchAuctionContract.getWinnerAddress());
      } catch (error: any) {
        window.alert(
          'Error! old' + (error && error.message ? `\n\n${error.data.message}` : '')
        );
      }
    }

    sellNFT(signer, dutchAuctionContract);
  }

  async function handleGetPrice(
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    event.preventDefault();

    if (!signer) {
      window.alert('No Signer.');
      return;
    }

    if (!dutchAuctionContract) {
      window.alert('Undefined DutchAuctionContract');
      return;
    }

    const price = await dutchAuctionContract.getPrice();
    setCreationPrice(price.toString());
  }


  async function showOwner(
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    event.preventDefault();

    if (!signer) {
      window.alert('No Signer.');
      return;
    }
    if (!huskyContract) {
      window.alert('Undefined DutchAuctionContract');
      return;
    }

    try {
      const owner = await huskyContract.ownerOf(nftId);
      window.alert('Owner of the NFT is : '+owner.toString());
    } catch (error: any) {
      window.alert(
        'Error!' + (error && error.message ? `\n\n${error.data.message}` : '')
      );
    }
  }

  return (
 <form>
 

  
 <div className="jumbotron jumbotron-fluid">
  <div className="container">
   <div  className="form-row">
   <div className="col-md-12">

   <blockquote className="blockquote text-center"> 
  <p className="mb-0"><h3><b>Dutch Auction Contract</b></h3></p>

 
</blockquote>
  </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
      <label htmlFor="inputEmail4">ERC20 Address</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="ERC721 Address" value={
                  erc20ContractAddr
                    ? erc20ContractAddr
                    : `<Contract not yet deployed>`
                }/>
               
    </div>
    
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
      <label htmlFor="inputEmail4"> ERC721 Address</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="ERC20 Address" value={
                  huskyContractAddr
                    ? huskyContractAddr
                    : `<Contract not yet deployed>`
                }/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
      <label htmlFor="inputEmail4">  Token ID</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Token Id" value=
                 {nftId ? nftId : `<NFT is not minted yet>`}/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
      <label htmlFor="inputEmail4"> Reserve Price</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder=" Reserve Price" onChange={handleReservePriceChange}/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
      <label htmlFor="inputEmail4"> Number of blocks open for auction</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="1000" onChange={handleNumberOfBlockOpenChange}/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
      <label htmlFor="inputEmail4"> Offer Price Decrement</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="10" onChange={handleOfferPriceDecrementChange}/>
    </div>
  </div>
  <div className="form-row text-center">
    <div className="form-group col-md-12 ">
    
    <button type="submit" className="btn btn-primary btn-lg"   onClick={handleDeployContract}>Deploy Dutch Auction Contract</button> 
    </div>
  </div>
 </div>
 </div>
  <br/>
  <div  className="form-row">
   <div className="col-md-12">

   <blockquote className="blockquote text-center"> 
  <p className="mb-0"><h3> <b>Submit a Bid</b></h3></p>

 
</blockquote>
  </div>
  </div>

    
 <div className="jumbotron jumbotron-fluid">
  <div className="container">

  <div className="form-row">
    <div className="form-group col-md-4">
        <label htmlFor="inputEmail4"> Dutch Contract Address</label>
        <input type="text" className="form-control" id="inputEmail4" placeholder="Dutch Contract Address" value={
                   dutchAuctionContractAddress
                   ? dutchAuctionContractAddress
                   : `<Contract not yet deployed>`
                  }/>
      
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-4">

      
        <label htmlFor="inputEmail4"> Current Price</label>
        <input type="text" className="form-control" id="inputEmail4" placeholder="Current Price:" value={creationPrice ? creationPrice : `<Current Price>`}/>
    
    </div>
  </div>


  <div className="form-row">
    <div className="form-group col-md-4">
        <label htmlFor="inputEmail4"> Bid Amount</label>
        <input type="text" className="form-control" id="inputEmail4" placeholder="Enter Bid Amount" onChange={handleBidAmountInput}/>
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-4">
        <label htmlFor="inputEmail4"> Winning Address of the Auction</label>
        <input type="text" className="form-control" id="inputEmail4" placeholder="Auction Winner" value={auctionWinner ? auctionWinner : `<No winner yet>`}/>
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-4 ">
    <label htmlFor="inputEmail4"> ERC20Token Balance :</label>
    <input type="text" className="form-control" id="inputEmail4" placeholder="Current ERC20Token Balance" value={currentERCBalance ? currentERCBalance : `<ERC 20 Balance>`}/>
    
    </div>
  </div>

  <div className="form-row text-center">
    <div className="form-group col-md-12 ">
   
    <p> Auction Buttons for the Bidder</p>
 
    </div>
  </div> 
 

  <div className="form-row text-center">
    <div className="form-group col-md-3 ">
   
    <button type="submit" className="btn btn-primary btn-lg"   onClick={handleERCBalance}>Current ERC-20 Balance</button>
 
    </div>
  </div> 
 


  <div className="form-row text-center">
    <div className="form-group col-md-3 ">
    
    <button type="submit" className="btn btn-primary btn-lg"   onClick={handleGreetingSubmit}>Submit Bid for the Contract</button> 
    </div>
  </div>
 
  <div className="form-row text-center">
    <div className="form-group col-md-3 ">
    
    <button type="submit" className="btn btn-primary btn-lg"   onClick={showOwner}>Owner Address of the NFT</button> 
    </div>
  </div>    
  <div className="form-row text-center">
    <div className="form-group col-md-3">
    
    <button type="submit" className="btn btn-primary btn-lg"   onClick={handleGetPrice}>Get Current Price of NFT</button> 
    </div>
  </div>  
  </div>
  </div>
  </form>
   
  );
}
