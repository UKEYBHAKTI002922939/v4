/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxyInterface,
} from "../TransparentUpgradeableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052604051620018a9380380620018a98339818101604052810190620000299190620005ba565b82816200003f828260006200005b60201b60201c565b505062000052826200009e60201b60201c565b50505062000a6f565b6200006c83620000fc60201b60201c565b6000825111806200007a5750805b1562000099576200009783836200015360201b6200034f1760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620000cf6200018960201b60201c565b82604051620000e092919062000740565b60405180910390a1620000f981620001ed60201b60201c565b50565b6200010d81620002de60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60606200018183836040518060600160405280602781526020016200188260279139620003b460201b60201c565b905092915050565b6000620001c47fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b6200049860201b6200037c1760201c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000260576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002579062000791565b60405180910390fd5b806200029a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b6200049860201b6200037c1760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b620002f481620004a260201b620003861760201c565b62000336576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200032d90620007b3565b60405180910390fd5b80620003707f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6200049860201b6200037c1760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6060620003c784620004a260201b60201c565b62000409576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200040090620007d5565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405162000433919062000727565b600060405180830381855af49150503d806000811462000470576040519150601f19603f3d011682016040523d82523d6000602084013e62000475565b606091505b50915091506200048d828286620004c560201b60201c565b925050509392505050565b6000819050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315620004d7578290506200052a565b600083511115620004eb5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200052191906200076d565b60405180910390fd5b9392505050565b600062000548620005428462000820565b620007f7565b9050828152602081018484840111156200056157600080fd5b6200056e848285620008bc565b509392505050565b600081519050620005878162000a55565b92915050565b600082601f8301126200059f57600080fd5b8151620005b184826020860162000531565b91505092915050565b600080600060608486031215620005d057600080fd5b6000620005e08682870162000576565b9350506020620005f38682870162000576565b925050604084015167ffffffffffffffff8111156200061157600080fd5b6200061f868287016200058d565b9150509250925092565b620006348162000888565b82525050565b6000620006478262000856565b6200065381856200086c565b935062000665818560208601620008bc565b80840191505092915050565b60006200067e8262000861565b6200068a818562000877565b93506200069c818560208601620008bc565b620006a78162000957565b840191505092915050565b6000620006c160268362000877565b9150620006ce8262000968565b604082019050919050565b6000620006e8602d8362000877565b9150620006f582620009b7565b604082019050919050565b60006200070f60268362000877565b91506200071c8262000a06565b604082019050919050565b60006200073582846200063a565b915081905092915050565b600060408201905062000757600083018562000629565b62000766602083018462000629565b9392505050565b6000602082019050818103600083015262000789818462000671565b905092915050565b60006020820190508181036000830152620007ac81620006b2565b9050919050565b60006020820190508181036000830152620007ce81620006d9565b9050919050565b60006020820190508181036000830152620007f08162000700565b9050919050565b60006200080362000816565b9050620008118282620008f2565b919050565b6000604051905090565b600067ffffffffffffffff8211156200083e576200083d62000928565b5b620008498262000957565b9050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600062000895826200089c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015620008dc578082015181840152602081019050620008bf565b83811115620008ec576000848401525b50505050565b620008fd8262000957565b810181811067ffffffffffffffff821117156200091f576200091e62000928565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f455243313936373a206e65772061646d696e20697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b62000a608162000888565b811462000a6c57600080fd5b50565b610e038062000a7f6000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100675780634f1ef286146100905780635c60da1b146100ac5780638f283970146100d7578063f851a440146101005761005d565b3661005d5761005b61012b565b005b61006561012b565b005b34801561007357600080fd5b5061008e60048036038101906100899190610902565b610145565b005b6100aa60048036038101906100a5919061092b565b6101ac565b005b3480156100b857600080fd5b506100c161024a565b6040516100ce9190610a9f565b60405180910390f35b3480156100e357600080fd5b506100fe60048036038101906100f99190610902565b6102a2565b005b34801561010c57600080fd5b506101156102f7565b6040516101229190610a9f565b60405180910390f35b6101336103a9565b61014361013e610429565b610438565b565b61014d61045e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156101a05761019b816040518060200160405280600081525060006104b5565b6101a9565b6101a861012b565b5b50565b6101b461045e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023c576102378383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505060016104b5565b610245565b61024461012b565b5b505050565b600061025461045e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102965761028f610429565b905061029f565b61029e61012b565b5b90565b6102aa61045e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102eb576102e6816104e1565b6102f4565b6102f361012b565b5b50565b600061030161045e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156103435761033c61045e565b905061034c565b61034b61012b565b5b90565b60606103748383604051806060016040528060278152602001610da76027913961052d565b905092915050565b6000819050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6103b161045e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561041f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041690610b65565b60405180910390fd5b6104276105fa565b565b60006104336105fc565b905090565b3660008037600080366000845af43d6000803e8060008114610459573d6000f35b3d6000fd5b600061048c7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b61037c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6104be83610653565b6000825111806104cb5750805b156104dc576104da838361034f565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61050a61045e565b82604051610519929190610aba565b60405180910390a161052a816106a2565b50565b606061053884610386565b610577576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056e90610b45565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161059f9190610a88565b600060405180830381855af49150503d80600081146105da576040519150601f19603f3d011682016040523d82523d6000602084013e6105df565b606091505b50915091506105ef828286610783565b925050509392505050565b565b600061062a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61037c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61065c816107ea565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610712576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070990610b05565b60405180910390fd5b8061073f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b61037c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60608315610793578290506107e3565b6000835111156107a65782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107da9190610ae3565b60405180910390fd5b9392505050565b6107f381610386565b610832576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082990610b25565b60405180910390fd5b8061085f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61037c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000813590506108b281610d8f565b92915050565b60008083601f8401126108ca57600080fd5b8235905067ffffffffffffffff8111156108e357600080fd5b6020830191508360018202830111156108fb57600080fd5b9250929050565b60006020828403121561091457600080fd5b6000610922848285016108a3565b91505092915050565b60008060006040848603121561094057600080fd5b600061094e868287016108a3565b935050602084013567ffffffffffffffff81111561096b57600080fd5b610977868287016108b8565b92509250509250925092565b61098c81610bb7565b82525050565b600061099d82610b85565b6109a78185610b9b565b93506109b7818560208601610be9565b80840191505092915050565b60006109ce82610b90565b6109d88185610ba6565b93506109e8818560208601610be9565b6109f181610c1c565b840191505092915050565b6000610a09602683610ba6565b9150610a1482610c2d565b604082019050919050565b6000610a2c602d83610ba6565b9150610a3782610c7c565b604082019050919050565b6000610a4f602683610ba6565b9150610a5a82610ccb565b604082019050919050565b6000610a72604283610ba6565b9150610a7d82610d1a565b606082019050919050565b6000610a948284610992565b915081905092915050565b6000602082019050610ab46000830184610983565b92915050565b6000604082019050610acf6000830185610983565b610adc6020830184610983565b9392505050565b60006020820190508181036000830152610afd81846109c3565b905092915050565b60006020820190508181036000830152610b1e816109fc565b9050919050565b60006020820190508181036000830152610b3e81610a1f565b9050919050565b60006020820190508181036000830152610b5e81610a42565b9050919050565b60006020820190508181036000830152610b7e81610a65565b9050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610bc282610bc9565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015610c07578082015181840152602081019050610bec565b83811115610c16576000848401525b50505050565b6000601f19601f8301169050919050565b7f455243313936373a206e65772061646d696e20697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b7f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60008201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760208201527f6574000000000000000000000000000000000000000000000000000000000000604082015250565b610d9881610bb7565b8114610da357600080fd5b5056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a99836acdfd63577136b6974468f6bd8e958fa416e2d83e3f40ec0b4addddadb64736f6c63430008040033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

export class TransparentUpgradeableProxy__factory extends ContractFactory {
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
    _logic: string,
    admin_: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<TransparentUpgradeableProxy> {
    return super.deploy(
      _logic,
      admin_,
      _data,
      overrides || {}
    ) as Promise<TransparentUpgradeableProxy>;
  }
  getDeployTransaction(
    _logic: string,
    admin_: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  attach(address: string): TransparentUpgradeableProxy {
    return super.attach(address) as TransparentUpgradeableProxy;
  }
  connect(signer: Signer): TransparentUpgradeableProxy__factory {
    return super.connect(signer) as TransparentUpgradeableProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransparentUpgradeableProxyInterface {
    return new utils.Interface(_abi) as TransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransparentUpgradeableProxy;
  }
}