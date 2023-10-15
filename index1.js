let REITokenABI = [

  {

    "inputs": [],

    "stateMutability": "nonpayable",

    "type": "constructor"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "owner",

        "type": "address"

      },

      {

        "indexed": true,

        "internalType": "address",

        "name": "approved",

        "type": "address"

      },

      {

        "indexed": true,

        "internalType": "uint256",

        "name": "tokenId",

        "type": "uint256"

      }

    ],

    "name": "Approval",

    "type": "event"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "owner",

        "type": "address"

      },

      {

        "indexed": true,

        "internalType": "address",

        "name": "operator",

        "type": "address"

      },

      {

        "indexed": false,

        "internalType": "bool",

        "name": "approved",

        "type": "bool"

      }

    ],

    "name": "ApprovalForAll",

    "type": "event"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "to",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "tokenId",

        "type": "uint256"

      }

    ],

    "name": "approve",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "to",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "tokenId",

        "type": "uint256"

      }

    ],

    "name": "safeMint",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "to",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "tokenId",

        "type": "uint256"

      },

      {

        "internalType": "string",

        "name": "data",

        "type": "string"

      }

    ],

    "name": "safeMint",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "from",

        "type": "address"

      },

      {

        "internalType": "address",

        "name": "to",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "tokenId",

        "type": "uint256"

      }

    ],

    "name": "safeTransferFrom",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "from",

        "type": "address"

      },

      {

        "internalType": "address",

        "name": "to",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "tokenId",

        "type": "uint256"

      },

      {

        "internalType": "bytes",

        "name": "data",

        "type": "bytes"

      }

    ],

    "name": "safeTransferFrom",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "operator",

        "type": "address"

      },

      {

        "internalType": "bool",

        "name": "approved",

        "type": "bool"

      }

    ],

    "name": "setApprovalForAll",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "anonymous": false,

    "inputs": [

      {

        "indexed": true,

        "internalType": "address",

        "name": "from",

        "type": "address"

      },

      {

        "indexed": true,

        "internalType": "address",

        "name": "to",

        "type": "address"

      },

      {

        "indexed": true,

        "internalType": "uint256",

        "name": "tokenId",

        "type": "uint256"

      }

    ],

    "name": "Transfer",

    "type": "event"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "from",

        "type": "address"

      },

      {

        "internalType": "address",

        "name": "to",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "tokenId",

        "type": "uint256"

      }

    ],

    "name": "transferFrom",

    "outputs": [],

    "stateMutability": "nonpayable",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "owner",

        "type": "address"

      }

    ],

    "name": "balanceOf",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "tokenId",

        "type": "uint256"

      }

    ],

    "name": "getApproved",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "owner",

        "type": "address"

      },

      {

        "internalType": "address",

        "name": "operator",

        "type": "address"

      }

    ],

    "name": "isApprovedForAll",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "name",

    "outputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "tokenId",

        "type": "uint256"

      }

    ],

    "name": "ownerOf",

    "outputs": [

      {

        "internalType": "address",

        "name": "",

        "type": "address"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "bytes4",

        "name": "interfaceId",

        "type": "bytes4"

      }

    ],

    "name": "supportsInterface",

    "outputs": [

      {

        "internalType": "bool",

        "name": "",

        "type": "bool"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "symbol",

    "outputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "index",

        "type": "uint256"

      }

    ],

    "name": "tokenByIndex",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "address",

        "name": "owner",

        "type": "address"

      },

      {

        "internalType": "uint256",

        "name": "index",

        "type": "uint256"

      }

    ],

    "name": "tokenOfOwnerByIndex",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [

      {

        "internalType": "uint256",

        "name": "tokenId",

        "type": "uint256"

      }

    ],

    "name": "tokenURI",

    "outputs": [

      {

        "internalType": "string",

        "name": "",

        "type": "string"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  },

  {

    "inputs": [],

    "name": "totalSupply",

    "outputs": [

      {

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

      }

    ],

    "stateMutability": "view",

    "type": "function"

  }

];

let REITokenContractAddress =  '0xdBFcf2F8ECF128fC76C27c87E272a8Ec63A584C8';

let test1abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "data",
				"type": "string"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
let test1address = '0x1a9C5fD1717991d78D4fe621DdbEFCB0e32dFEdE';


let test2abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "data",
				"type": "string"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
let test2address = '0x1F6aA500bc911DdE74cAfDdB4D6b49B7Ae8E2770';

let test1155abi =  [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "contractURI",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tokenURIPrefix",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "_approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address[]",
				"name": "recipients",
				"type": "address[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "bps",
				"type": "uint256[]"
			}
		],
		"name": "SecondarySaleFees",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "SignerAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "SignerRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "_ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "_values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "_value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_owners",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "creators",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "fees",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getFeeBps",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getFeeRecipients",
		"outputs": [
			{
				"internalType": "address payable[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isSigner",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceSigner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "_ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_values",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "contractURI",
				"type": "string"
			}
		],
		"name": "setContractURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tokenURIPrefix",
				"type": "string"
			}
		],
		"name": "setTokenURIPrefix",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenURIPrefix",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "addSigner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "removeSigner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			},
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "recipient",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"internalType": "struct ERC1155Base.Fee[]",
				"name": "fees",
				"type": "tuple[]"
			},
			{
				"internalType": "uint256",
				"name": "supply",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "address payable",
						"name": "recipient",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"internalType": "struct ERC1155Base.Fee[]",
				"name": "fees",
				"type": "tuple[]"
			},
			{
				"internalType": "uint256",
				"name": "supply",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"name": "mintNovrs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

let test3abi= [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "data",
				"type": "string"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
let test3address= '0xd9145CCE52D386f254917e481eB44e9943F39138';
let test3metajson = 'bzz-raw://9592152a05cd0ac1ff75027181c3cb4483be76730d710f0518b56930ee0c5681';


let test4abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

let abiList = [test4abi, test4abi, test4abi, test4abi];
let addressList = ['0x5b4182587d0cd1ae2ed09102d257a778139f5f20', REITokenContractAddress, test1address, test2address];

var tokenContract = null;


function checkContract(){
  let from =  web3.eth.defaultAccount;
  console.log('from++++++++++=', from)
}

function deployContract(){
  let MyTokenABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "setname",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "addr",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getname",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  let MyTokenBIN = '608060405234801561001057600080fd5b5061021e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063767800de14610046578063c6ea59b914610064578063cfec094c14610082575b600080fd5b61004e61009e565b60405161005b919061017f565b60405180910390f35b61006c6100c2565b604051610079919061017f565b60405180910390f35b61009c60048036038101906100979190610143565b6100eb565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008135905061013d816101d1565b92915050565b600060208284031215610159576101586101cc565b5b60006101678482850161012e565b91505092915050565b6101798161019a565b82525050565b60006020820190506101946000830184610170565b92915050565b60006101a5826101ac565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6101da8161019a565b81146101e557600080fd5b5056fea264697066735822122043debe639a420c5a3ae90b6469b776200f23698ce84d4e3840d139f3686a79f464736f6c63430008070033';

  var tokenContract = new web3.eth.Contract(MyTokenABI)
  // let transferContract = web3.eth.contract(transferCompiled);

  //使用deploy方法部署合约的时候需要指定两个参数。data表示bytecode，arguments是合约构造函数的参数，它是一个数组。
  // 部署完成后，记得调用send方法发起一个创建合约的交易。
  // 同样它也指定了两个参数。from代表创建合约的帐号，gas是油的数量。因为默认的gas比较少，为了让交易创建成功，建议设置gas的值高一点。
  tokenContract.deploy({
    data: MyTokenBIN,
  }).send({
    from: '0x0F836a0fde58BEE81b1fd97A5A732400364d7598',
    gas: 1500000,
    gasPrice: '30000000000000'
  }, function(error, transactionHash){
      console.log("deploy tx hash:")
      console.log("deploy tx hash error:")
      console.log("deploy tx hash transactionHash:"+transactionHash)
  })
  .on('error', function(error){ console.log('deploy--error', error) })
  .on('transactionHash', function(transactionHash){ console.log("deploy--hash:",transactionHash)})
  .on('receipt', function(receipt){
    console.log('deploy--receipt', receipt)
    console.log(receipt.contractAddress) // contains the new contract address
  })
  .on('confirmation', function(confirmationNumber, receipt){console.log("deploy--confirmation,",receipt)})
  .then(function(newContractInstance){
      console.log('deploy-----ok', newContractInstance)
      console.log(newContractInstance.options.address) // instance with the new contract address
  });


}

async function ContractSetFunc(){
  let MyTokenABI =[
    {
      "inputs": [
        {
          "internalType": "contract TransferProxy",
          "name": "_transferProxy",
          "type": "address"
        },
        {
          "internalType": "contract TransferProxyForDeprecated",
          "name": "_transferProxyForDeprecated",
          "type": "address"
        },
        {
          "internalType": "contract ERC20TransferProxy",
          "name": "_erc20TransferProxy",
          "type": "address"
        },
        {
          "internalType": "contract ExchangeState",
          "name": "_state",
          "type": "address"
        },
        {
          "internalType": "contract ExchangeOrdersHolder",
          "name": "_ordersHolder",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_buyerFeeSigner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sellToken",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "sellTokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sellValue",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "buyToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "buyTokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "buyValue",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "salt",
          "type": "uint256"
        }
      ],
      "name": "Buy",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sellToken",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "sellTokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "buyToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "buyTokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "salt",
          "type": "uint256"
        }
      ],
      "name": "Cancel",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "beneficiary",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "buyerFeeSigner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "erc20TransferProxy",
      "outputs": [
        {
          "internalType": "contract ERC20TransferProxy",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "ordersHolder",
      "outputs": [
        {
          "internalType": "contract ExchangeOrdersHolder",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "state",
      "outputs": [
        {
          "internalType": "contract ExchangeState",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "transferProxy",
      "outputs": [
        {
          "internalType": "contract TransferProxy",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "transferProxyForDeprecated",
      "outputs": [
        {
          "internalType": "contract TransferProxyForDeprecated",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "newBeneficiary",
          "type": "address"
        }
      ],
      "name": "setBeneficiary",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newBuyerFeeSigner",
          "type": "address"
        }
      ],
      "name": "setBuyerFeeSigner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "salt",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "tokenId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "enum ExchangeDomain.AssetType",
                      "name": "assetType",
                      "type": "uint8"
                    }
                  ],
                  "internalType": "struct ExchangeDomain.Asset",
                  "name": "sellAsset",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "tokenId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "enum ExchangeDomain.AssetType",
                      "name": "assetType",
                      "type": "uint8"
                    }
                  ],
                  "internalType": "struct ExchangeDomain.Asset",
                  "name": "buyAsset",
                  "type": "tuple"
                }
              ],
              "internalType": "struct ExchangeDomain.OrderKey",
              "name": "key",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "selling",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "buying",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sellerFee",
              "type": "uint256"
            }
          ],
          "internalType": "struct ExchangeDomain.Order",
          "name": "order",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "internalType": "struct ExchangeDomain.Sig",
          "name": "sig",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "buyerFee",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "internalType": "struct ExchangeDomain.Sig",
          "name": "buyerFeeSig",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        }
      ],
      "name": "exchange",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "salt",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "enum ExchangeDomain.AssetType",
                  "name": "assetType",
                  "type": "uint8"
                }
              ],
              "internalType": "struct ExchangeDomain.Asset",
              "name": "sellAsset",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "enum ExchangeDomain.AssetType",
                  "name": "assetType",
                  "type": "uint8"
                }
              ],
              "internalType": "struct ExchangeDomain.Asset",
              "name": "buyAsset",
              "type": "tuple"
            }
          ],
          "internalType": "struct ExchangeDomain.OrderKey",
          "name": "key",
          "type": "tuple"
        }
      ],
      "name": "cancel",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "salt",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "tokenId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "enum ExchangeDomain.AssetType",
                      "name": "assetType",
                      "type": "uint8"
                    }
                  ],
                  "internalType": "struct ExchangeDomain.Asset",
                  "name": "sellAsset",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "tokenId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "enum ExchangeDomain.AssetType",
                      "name": "assetType",
                      "type": "uint8"
                    }
                  ],
                  "internalType": "struct ExchangeDomain.Asset",
                  "name": "buyAsset",
                  "type": "tuple"
                }
              ],
              "internalType": "struct ExchangeDomain.OrderKey",
              "name": "key",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "selling",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "buying",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sellerFee",
              "type": "uint256"
            }
          ],
          "internalType": "struct ExchangeDomain.Order",
          "name": "order",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        }
      ],
      "name": "prepareBuyerFeeMessage",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "salt",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "tokenId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "enum ExchangeDomain.AssetType",
                      "name": "assetType",
                      "type": "uint8"
                    }
                  ],
                  "internalType": "struct ExchangeDomain.Asset",
                  "name": "sellAsset",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "tokenId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "enum ExchangeDomain.AssetType",
                      "name": "assetType",
                      "type": "uint8"
                    }
                  ],
                  "internalType": "struct ExchangeDomain.Asset",
                  "name": "buyAsset",
                  "type": "tuple"
                }
              ],
              "internalType": "struct ExchangeDomain.OrderKey",
              "name": "key",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "selling",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "buying",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sellerFee",
              "type": "uint256"
            }
          ],
          "internalType": "struct ExchangeDomain.Order",
          "name": "order",
          "type": "tuple"
        }
      ],
      "name": "prepareMessage",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    }
  ];// abi参数
  let ContractAddress =  '0xfB1855c3Bb17539BbEF3154537A133906019A7a9'; //合约地址

  var tokenContract = new web3.eth.Contract( MyTokenABI, ContractAddress );
	
  await tokenContract.methods.exchange([
			[
				"0xbe763cd5ce9ade30cb02f509a50f9bb8540771f3",
				"32707273816361330072819723235962760755227766442393866208737214848990598523448",
				[
					"0xdbfcf2f8ecf128fc76c27c87e272a8ec63a584c8",
					"17",
					2
				],
				[
					"0x0000000000000000000000000000000000000000",
					"0",
					0
				]
			],
			"1",
			"10000000000000",
			"250"
		], [
			27,
			"0x660435cc616fc7d77aa38abfb202ab96e57b37641ff0b682f0f8951f6329f1b1",
			"0x467e97bde0f8cdca63f19cb736a693d580b23cd6e0e6c0c659ce0a116c5a5f7b"
		], '250' , [
			"27",
			"0x9167e3ce8bda770d07d66e21bddf67aea4cdf7c78f94e8cb3ffb723c12fa2e2d",
			"0x78eda4142dbb44228d028099c4ccc4a6e2533f26e940d1f7989ec32d1692e598"
		],1,'0x0000000000000000000000000000000000000000')
	.send( { from: walletAddress, value: "10250000000000" }, function(error, transactionHash){
    console.log('-transactionHash-', transactionHash)
  }).on('error', function(error){ //错误
    console.log('--error-', error)
  }) 
  .then(function(receipt){
    console.log('--then-', receipt)
  });  
  
  

  // send Transaction          // 发送交易
  // sendSignedTransaction     // 发送已签名的交易
  // signTransaction           // 签名交易，由address指定对应的账户进行签名。
  // sign                      // 使用指定账户对数据进行签名
  // call                      // 执行一个消息调用交易，消息调用交易直接在节点旳 VM 中而不需要通过区块链挖矿来执行。
  // new contract              // 生成合约实例，若不设置address参数，则部署新的合约实例到网络中。
  // methods.myMethod.call     // 将在不发送交易的情况下调用该“常量”方法并在 EVM 中执行其智能合约方法。注意此种调用方式无法改变智能合约状态。
  // methods.myMethod.send     // 向合约发送交易来执行其方法。注意这会改变合约状态。
  // signTransaction           // 使用给定的私钥签名以太坊交易。

  // var signTransaction =  web3.eth.signTransaction(functionEncode, ContractAddress ,
  //   function(error, hash){
  //     console.log('error', error)
  //     console.log('hash', hash)
  //   }
  // )
}

async function ContractSetFunc1(){
  let MyTokenABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "setname",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "addr",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getname",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];// abi参数
  let ContractAddress =  '0x5e72E082e25C9d80B56dB68D770b94906b1cd588'; //合约地址
  let owner1 = '0x0F836a0fde58BEE81b1fd97A5A732400364d7598'; //参数1
  let owner2 = '0xfb3c173ec35ef24b7ba2b642d185a5119ce90f80'; //参数2
  let owner3 = '0xBE763Cd5ce9AdE30Cb02f509a50F9Bb8540771f3'; //参数3
  let privateKey = 'dbc80f0e4be188665bb0f6c77ecf7e16f2beb0d28c7d1dc42041d72de11f03d8';//私钥

  var tokenContract = new web3.eth.Contract( MyTokenABI, ContractAddress );
  // var functionEncode = await tokenContract.methods.setname( owner2 ).encodeABI();
  var functionEncode = await tokenContract.methods.setname( owner3 ).send( { from: owner1 }, function(error, transactionHash){
    console.log('send')
    console.log('error', error)
    console.log('transactionHash', transactionHash)
  })

  // send Transaction          // 发送交易
  // sendSignedTransaction     // 发送已签名的交易
  // signTransaction           // 签名交易，由address指定对应的账户进行签名。
  // sign                      // 使用指定账户对数据进行签名
  // call                      // 执行一个消息调用交易，消息调用交易直接在节点旳 VM 中而不需要通过区块链挖矿来执行。
  // new contract              // 生成合约实例，若不设置address参数，则部署新的合约实例到网络中。
  // methods.myMethod.call     // 将在不发送交易的情况下调用该“常量”方法并在 EVM 中执行其智能合约方法。注意此种调用方式无法改变智能合约状态。
  // methods.myMethod.send     // 向合约发送交易来执行其方法。注意这会改变合约状态。
  // signTransaction           // 使用给定的私钥签名以太坊交易。
}

function ContractGetFunc(){
  let MyTokenABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "setname",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "addr",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getname",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  let ContractAddress =  '0x5e72E082e25C9d80B56dB68D770b94906b1cd588';
  let owner = '0x0F836a0fde58BEE81b1fd97A5A732400364d7598';

  var tokenContract = new web3.eth.Contract(MyTokenABI, ContractAddress);
  console.log('tokenContract', tokenContract);

  tokenContract.methods.getname().call(null,function(error,result){
    console.log("getname "+result);
  })
}


async function testMint(){
  let owner = '0x0F836a0fde58BEE81b1fd97A5A732400364d7598'; //参数
  var tokenContract = new web3.eth.Contract(test2abi, test2address);

  let data = {name:'测试202',desc:'测试202'}
  await tokenContract.methods.safeMint( owner, 2, data )
  .send( { from: owner }, function(error, transactionHash){
    console.log('send')
    console.log('error', error) 
    console.log('transactionHash', transactionHash)
  })
  .on('confirmation', function(confirmationNumber, receipt){console.log("deploy--confirmation,",receipt)})
}

async function getAllTokenVO(){
  return new Promise((resolve, reject) => {
    this.axios.get(`https://scan.rei.network/api?module=account&action=tokenlist&address=${ walletAddress }`) 
    .then(res=>{
      resolve(res.data)
    })
  }) 
}

function tokenOfOwnerByIndex(index, tokenContract){
	if( index === undefined){
		var tokenContract = new web3.eth.Contract( REITokenABI, '0x1f6aa500bc911dde74cafddb4d6b49b7ae8e2770' );

		tokenContract.methods.tokenOfOwnerByIndex( walletAddress, 2 ).call(null,function(error,result){
			console.log("tokenOfOwnerByIndex", result);
		})
		return false;
	}

	return new Promise((resolve, reject) => {
		tokenContract.methods.tokenOfOwnerByIndex( walletAddress, index ).call(null,function(error,result){
			resolve(result);
		})
	})
}

var tokenList = []; //所有token

async function getWalletAllToken(){
  let walletTokenVo = await this.getAllTokenVO(); //<array> vo.result 

	let walletTokenVo1 = {
		"message": "OK",
		"result": [
			{
				"balance": "2",
				"contractAddress": "0x1a9c5fd1717991d78d4fe621ddbefcb0e32dfede",
				"decimals": "",
				"name": "MyCopyOpenzeppelin721",
				"symbol": "MCO721",
				"type": "ERC-721"
			},
			{
				"balance": "3",
				"contractAddress": "0x1f6aa500bc911dde74cafddb4d6b49b7ae8e2770",
				"decimals": "",
				"name": "MyCopyOpenzeppelin721",
				"symbol": "MCO721",
				"type": "ERC-721"
			},
			{
				"balance": "28",
				"contractAddress": "0x5b4182587d0cd1ae2ed09102d257a778139f5f20",
				"decimals": "",
				"name": "DemoTest",
				"symbol": "ERC20",
				"type": "ERC-721"
			},
			{
				"balance": "2",
				"contractAddress": "0xdbfcf2f8ecf128fc76c27c87e272a8ec63a584c8",
				"decimals": "",
				"name": "MyCopyOpenzeppelin721",
				"symbol": "MCO721",
				"type": "ERC-721"
			}
		],
		"status": "1"
	}

	console.log('walletTokenVo1', walletTokenVo1)
	
  if( walletTokenVo.message != 'OK' || walletTokenVo.result.length === 0 ){
    alert('get contractAddress fail!!')
    return false;
  }
	
  for(var i = 0; i < walletTokenVo.result.length; i++ ){
		if( walletTokenVo.result[i].id === '12' ){
			await this.getContractToken( walletTokenVo.result[i].contractAddress, walletTokenVo.result[i].balance );
		}
  }
}

async function getContractToken( contractAddress, holdNumber ){
	for(var i = 0; i < holdNumber; i++ ){
		this.getOneData(contractAddress, i)
	}
}

async function getOneData( contractAddress, index ){
	var tokenContract = await new web3.eth.Contract( abiList[0], contractAddress )
	var tokenId = await this.tokenOfOwnerByIndex(index, tokenContract);
	var data = await this.getTokenData(tokenId, tokenContract)
	tokenList.push(data)
	console.log( '账号可用合约全部token', tokenList );
}

async function getContractTokenOld( contractAddress, holdNumber ){
    // let contractAllTokenNumber =  await this.totalToken(contractAddress); //单个合约总token数量

		// let time1 = new Date().getTime()
    var tokenData = [];
    for(var i = 0; i < holdNumber; i++ ){
			var tokenId = await this.tokenOfOwnerByIndex(i);
			var data = await this.getTokenData(tokenId)
			tokenData.push(data)
    }

		let time2 = new Date().getTime();
    // console.log( 'tokenData', (time2 - time1) + 'ms', tokenData );
    return tokenData;
}

async function getContractTokenOld( contractAddress, holdNumber ){
    let contractAllTokenNumber =  await this.totalToken(contractAddress); //单个合约总token数量
    console.log( '目前合约总token数', contractAllTokenNumber );

    var tokenData = [];

		let time1 = new Date().getTime();
    for(var i = 0; i < contractAllTokenNumber; i++ ){

      let tokenId = await this.tokenByIndex( i ); //return tokenId
      let tokenIdOwner = await this.ownerOf( tokenId ); // return token owner

      if( walletAddress.toLowerCase() == tokenIdOwner.toLowerCase() ){ 
        var data = await this.getTokenData(tokenId)
				data.contractAddress = contractAddress
        tokenData.push(data)
      }
    }

		let time2 = new Date().getTime();
    console.log( 'tokenData', (time2 - time1) + 'ms', tokenData );
    return tokenData;
}


async function totalToken(contractAddress){ //所有token
  if(!contractAddress){
    var tokenContract = new web3.eth.Contract(REITokenABI, REITokenContractAddress);

    tokenContract.methods.totalSupply().call(null,function(error,result){
      console.log("AlltokenNumber", result);
    })
    return false;
  }

  let that = this;
  return new Promise((resolve, reject) => {
    // var tokenContract = new web3.eth.Contract(test2abi, test2address);
    that.tokenContract.methods.totalSupply().call(null,function(error,result){
      resolve(result)
    })
  })
}

async function tokenByIndex(index){
  if( index == undefined  ){
    var token_index = 2;
    var tokenContract = new web3.eth.Contract(test2abi, test2address);

    tokenContract.methods.tokenByIndex(token_index).call(null,function(error,result){
      console.log("tokenId "+result);
    })
    return false;
  }
  
  var token_index = index.toString();

  let that = this
  return new Promise((resolve, reject) => {
    that.tokenContract.methods.tokenByIndex(token_index).call(null,function(error,result){
      resolve(result)
    })
  })
}

async function getTokenData(tokenId, tokenContract){
  if( tokenId == undefined ){
    let tokenId = '12';
    var tokenContract = new web3.eth.Contract( test1155abi, '0xb027c962382eac42cb95e1cb6523dc8b847b886e');
		console.log('tokenContract', tokenContract.methods.uri);
    tokenContract.methods.uri(tokenId).call(null,function(error,result){
      if( !result ){
        result = '空的tokenData'
      }
      console.log("tokenData "+result);
    })
    return false;
  }

  let that = this;
  return new Promise((resolve, reject) => {
    tokenContract.methods.tokenURI(tokenId).call(null,function(error,result){
      console.log('token符合', tokenId, result)
      if( !result ){ result = '空的tokenData' }
			var data = {
				'tokenId':tokenId,
				'desc': result,
			}
      resolve(data)
    })
  })
}

async function dataMint(){
  let owner = '0x0F836a0fde58BEE81b1fd97A5A732400364d7598'

	let address = '0xdbfcf2f8ecf128fc76c27c87e272a8ec63a584c8'
  var tokenContract = new web3.eth.Contract( REITokenABI, address );

	let metadata = 'name:123123'
  
  await tokenContract.methods.safeMint( owner, 20, metadata ).send( { from: owner }, function(error, transactionHash){
    console.log('send')
    console.log('error', error)
    console.log('transactionHash', transactionHash)
  })
}

async function transfer(){
  let from = '0x0F836a0fde58BEE81b1fd97A5A732400364d7598'
  let to = '0xBE763Cd5ce9AdE30Cb02f509a50F9Bb8540771f3'

  var tokenContract = new web3.eth.Contract( REITokenABI, REITokenContractAddress );
  
  await tokenContract.methods.safeTransferFrom( from, to, 1 ).send( { from: from }, function(error, transactionHash){
    console.log('send')
    console.log('error', error)
    console.log('transactionHash', transactionHash)
  })
}

async function ownerOf(tokenId){
  if(tokenId == undefined){
    let id = '1087345033881881270318309943302125791160134234611'
    var tokenContract = new web3.eth.Contract( REITokenABI, REITokenContractAddress );
    
    await tokenContract.methods.ownerOf( id ).call(null,function(error,result){
      console.log('ownerOf', result)
    })
    return false;
  }

  let that =this
  return new Promise((resolve, reject) => {
    that.tokenContract.methods.ownerOf( tokenId ).call(null, function(error,result){
      resolve( result );
    })
  })
}

/**
 * 合约下资产分布
 */
function getAssetAllocation(contractaddress){
	let defaultAccount = '0xb027c962382eac42cb95e1cb6523dc8b847b886e'
	axios.get(`https://scan.rei.network/api?module=token&action=getTokenHolders&contractaddress=${defaultAccount}`)
	.then(res=>{
		console.log('合约下资产分布', res)
	})
}

/**
 * getWalletAllContract
 * 地址下所有项目合约
 */
function getWalletAllContract(){
	axios.get(`https://scan.rei.network/api?module=account&action=tokenlist&address=${ walletAddress }`) 
	.then(res=>{
		console.log( '地址下所有项目合约', res)
	})
}



