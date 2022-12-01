/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Token, TokenInterface } from "../Token";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600581526020017f546f6b656e0000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f544b4e310000000000000000000000000000000000000000000000000000000081525081600390805190602001906200009692919062000284565b508060049080519060200190620000af92919062000284565b505050620000f233620000c7620000f860201b60201c565b60ff16600a620000d8919062000474565b6064620000e69190620005b1565b6200010160201b60201c565b620006e6565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000174576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200016b906200036c565b60405180910390fd5b62000188600083836200027a60201b60201c565b80600260008282546200019c9190620003bc565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001f39190620003bc565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200025a91906200038e565b60405180910390a362000276600083836200027f60201b60201c565b5050565b505050565b505050565b82805462000292906200061c565b90600052602060002090601f016020900481019282620002b6576000855562000302565b82601f10620002d157805160ff191683800117855562000302565b8280016001018555821562000302579182015b8281111562000301578251825591602001919060010190620002e4565b5b50905062000311919062000315565b5090565b5b808211156200033057600081600090555060010162000316565b5090565b600062000343601f83620003ab565b91506200035082620006bd565b602082019050919050565b620003668162000612565b82525050565b60006020820190508181036000830152620003878162000334565b9050919050565b6000602082019050620003a560008301846200035b565b92915050565b600082825260208201905092915050565b6000620003c98262000612565b9150620003d68362000612565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200040e576200040d62000652565b5b828201905092915050565b6000808291508390505b60018511156200046b5780860481111562000443576200044262000652565b5b6001851615620004535780820291505b80810290506200046385620006b0565b945062000423565b94509492505050565b6000620004818262000612565b91506200048e8362000612565b9250620004bd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620004c5565b905092915050565b600082620004d75760019050620005aa565b81620004e75760009050620005aa565b81600181146200050057600281146200050b5762000541565b6001915050620005aa565b60ff84111562000520576200051f62000652565b5b8360020a9150848211156200053a576200053962000652565b5b50620005aa565b5060208310610133831016604e8410600b84101617156200057b5782820a90508381111562000575576200057462000652565b5b620005aa565b6200058a848484600162000419565b92509050818404811115620005a457620005a362000652565b5b81810290505b9392505050565b6000620005be8262000612565b9150620005cb8362000612565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000607576200060662000652565b5b828202905092915050565b6000819050919050565b600060028204905060018216806200063557607f821691505b602082108114156200064c576200064b62000681565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60008160011c9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61197580620006f66000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806342966c681161008c578063a457c2d711610066578063a457c2d71461025f578063a9059cbb1461028f578063dd62ed3e146102bf578063f851a440146102ef576100ea565b806342966c68146101f557806370a082311461021157806395d89b4114610241576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b57806339509351146101a957806340c10f19146101d9576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f761030d565b6040516101049190611297565b60405180910390f35b61012760048036038101906101229190611006565b61039f565b604051610134919061127c565b60405180910390f35b6101456103c2565b6040516101529190611419565b60405180910390f35b61017560048036038101906101709190610fb7565b6103cc565b604051610182919061127c565b60405180910390f35b6101936103fb565b6040516101a09190611434565b60405180910390f35b6101c360048036038101906101be9190611006565b610404565b6040516101d0919061127c565b60405180910390f35b6101f360048036038101906101ee9190611006565b61043b565b005b61020f600480360381019061020a9190611042565b6104d9565b005b61022b60048036038101906102269190610f52565b6104e6565b6040516102389190611419565b60405180910390f35b61024961052e565b6040516102569190611297565b60405180910390f35b61027960048036038101906102749190611006565b6105c0565b604051610286919061127c565b60405180910390f35b6102a960048036038101906102a49190611006565b610637565b6040516102b6919061127c565b60405180910390f35b6102d960048036038101906102d49190610f7b565b61065a565b6040516102e69190611419565b60405180910390f35b6102f76106e1565b6040516103049190611261565b60405180910390f35b60606003805461031c9061157d565b80601f01602080910402602001604051908101604052809291908181526020018280546103489061157d565b80156103955780601f1061036a57610100808354040283529160200191610395565b820191906000526020600020905b81548152906001019060200180831161037857829003601f168201915b5050505050905090565b6000806103aa610707565b90506103b781858561070f565b600191505092915050565b6000600254905090565b6000806103d7610707565b90506103e48582856108da565b6103ef858585610966565b60019150509392505050565b60006012905090565b60008061040f610707565b9050610430818585610421858961065a565b61042b919061146b565b61070f565b600191505092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c290611359565b60405180910390fd5b6104d58282610be7565b5050565b6104e33382610d47565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461053d9061157d565b80601f01602080910402602001604051908101604052809291908181526020018280546105699061157d565b80156105b65780601f1061058b576101008083540402835291602001916105b6565b820191906000526020600020905b81548152906001019060200180831161059957829003601f168201915b5050505050905090565b6000806105cb610707565b905060006105d9828661065a565b90508381101561061e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610615906113d9565b60405180910390fd5b61062b828686840361070f565b60019250505092915050565b600080610642610707565b905061064f818585610966565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561077f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610776906113b9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e6906112f9565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108cd9190611419565b60405180910390a3505050565b60006108e6848461065a565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109605781811015610952576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094990611319565b60405180910390fd5b61095f848484840361070f565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109cd90611399565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3d906112b9565b60405180910390fd5b610a51838383610f1e565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610ad7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ace90611339565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b6a919061146b565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bce9190611419565b60405180910390a3610be1848484610f23565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4e906113f9565b60405180910390fd5b610c6360008383610f1e565b8060026000828254610c75919061146b565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cca919061146b565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d2f9190611419565b60405180910390a3610d4360008383610f23565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610db7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dae90611379565b60405180910390fd5b610dc382600083610f1e565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e40906112d9565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610ea091906114c1565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f059190611419565b60405180910390a3610f1983600084610f23565b505050565b505050565b505050565b600081359050610f3781611911565b92915050565b600081359050610f4c81611928565b92915050565b600060208284031215610f6457600080fd5b6000610f7284828501610f28565b91505092915050565b60008060408385031215610f8e57600080fd5b6000610f9c85828601610f28565b9250506020610fad85828601610f28565b9150509250929050565b600080600060608486031215610fcc57600080fd5b6000610fda86828701610f28565b9350506020610feb86828701610f28565b9250506040610ffc86828701610f3d565b9150509250925092565b6000806040838503121561101957600080fd5b600061102785828601610f28565b925050602061103885828601610f3d565b9150509250929050565b60006020828403121561105457600080fd5b600061106284828501610f3d565b91505092915050565b611074816114f5565b82525050565b61108381611507565b82525050565b60006110948261144f565b61109e818561145a565b93506110ae81856020860161154a565b6110b78161160d565b840191505092915050565b60006110cf60238361145a565b91506110da8261161e565b604082019050919050565b60006110f260228361145a565b91506110fd8261166d565b604082019050919050565b600061111560228361145a565b9150611120826116bc565b604082019050919050565b6000611138601d8361145a565b91506111438261170b565b602082019050919050565b600061115b60268361145a565b915061116682611734565b604082019050919050565b600061117e600a8361145a565b915061118982611783565b602082019050919050565b60006111a160218361145a565b91506111ac826117ac565b604082019050919050565b60006111c460258361145a565b91506111cf826117fb565b604082019050919050565b60006111e760248361145a565b91506111f28261184a565b604082019050919050565b600061120a60258361145a565b915061121582611899565b604082019050919050565b600061122d601f8361145a565b9150611238826118e8565b602082019050919050565b61124c81611533565b82525050565b61125b8161153d565b82525050565b6000602082019050611276600083018461106b565b92915050565b6000602082019050611291600083018461107a565b92915050565b600060208201905081810360008301526112b18184611089565b905092915050565b600060208201905081810360008301526112d2816110c2565b9050919050565b600060208201905081810360008301526112f2816110e5565b9050919050565b6000602082019050818103600083015261131281611108565b9050919050565b600060208201905081810360008301526113328161112b565b9050919050565b600060208201905081810360008301526113528161114e565b9050919050565b6000602082019050818103600083015261137281611171565b9050919050565b6000602082019050818103600083015261139281611194565b9050919050565b600060208201905081810360008301526113b2816111b7565b9050919050565b600060208201905081810360008301526113d2816111da565b9050919050565b600060208201905081810360008301526113f2816111fd565b9050919050565b6000602082019050818103600083015261141281611220565b9050919050565b600060208201905061142e6000830184611243565b92915050565b60006020820190506114496000830184611252565b92915050565b600081519050919050565b600082825260208201905092915050565b600061147682611533565b915061148183611533565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156114b6576114b56115af565b5b828201905092915050565b60006114cc82611533565b91506114d783611533565b9250828210156114ea576114e96115af565b5b828203905092915050565b600061150082611513565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561156857808201518184015260208101905061154d565b83811115611577576000848401525b50505050565b6000600282049050600182168061159557607f821691505b602082108114156115a9576115a86115de565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f6f6e6c792061646d696e00000000000000000000000000000000000000000000600082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61191a816114f5565b811461192557600080fd5b50565b61193181611533565b811461193c57600080fd5b5056fea26469706673582212205888e30c048cf9cde96f8c531da51801612b189cac9ce36dc7cea9c7dbbec13d64736f6c63430008040033";

export class Token__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token> {
    return super.deploy(overrides || {}) as Promise<Token>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Token {
    return super.attach(address) as Token;
  }
  connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}