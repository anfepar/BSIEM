exports.EC={
	"address":"0xe3503B4b876F70Ec2584e9d50945Cd2AF2Fc4232",
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
				},
				{
					"name": "_event_type",
					"type": "uint8"
				}
			],
			"name": "createEvent",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
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
				},
				{
					"indexed": false,
					"name": "event_type",
					"type": "uint8"
				}
			],
			"name": "newEventCreated",
			"type": "event"
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
				},
				{
					"name": "event_type",
					"type": "uint8"
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
