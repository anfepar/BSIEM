exports.EC={
	"address":"0xa0b3aba30946a3ad4dc4bbf3bc910805bfc36893",
	"abi":[
		{
			"constant": false,
			"inputs": [
				{
					"name": "timestamp",
					"type": "uint256"
				},
				{
					"name": "_data",
					"type": "string"
				}
			],
			"name": "createEvent",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_threshold",
					"type": "uint256"
				}
			],
			"name": "setThreshold",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"name": "_threshold",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "timestamp",
					"type": "uint256"
				},
				{
					"indexed": false,
					"name": "_data",
					"type": "string"
				}
			],
			"name": "newEventCreated",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				},
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "events",
			"outputs": [
				{
					"name": "timestamp",
					"type": "uint256"
				},
				{
					"name": "data",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "identifiers",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "threshold",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		}
	]}
var  SIEMC={
	"address":"0x6d7982d81616b95aab8df442a729d8ff3ce90687",
	"abi": [
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "threats",
			"outputs": [
				{
					"name": "id",
					"type": "uint256"
				},
				{
					"name": "liability",
					"type": "uint256"
				},
				{
					"name": "title",
					"type": "string"
				},
				{
					"name": "description",
					"type": "string"
				},
				{
					"name": "timestamp",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "title",
					"type": "string"
				},
				{
					"name": "liability",
					"type": "uint256"
				},
				{
					"name": "description",
					"type": "string"
				},
				{
					"name": "timestamp",
					"type": "uint256"
				}
			],
			"name": "addThreat",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "siem",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "id",
					"type": "uint256"
				},
				{
					"indexed": false,
					"name": "liability",
					"type": "uint256"
				},
				{
					"indexed": false,
					"name": "title",
					"type": "string"
				},
				{
					"indexed": false,
					"name": "description",
					"type": "string"
				},
				{
					"indexed": false,
					"name": "timestamp",
					"type": "uint256"
				}
			],
			"name": "threatShare",
			"type": "event"
		}
	]
}



