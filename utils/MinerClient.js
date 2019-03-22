var Web3 = require('web3')
var fs = require('fs'); 
conf= require('./resources/config')

web3 = new Web3(new Web3.providers.WebsocketProvider('ws://192.168.0.19:4001'));
web3.eth.defaultAccount= web3.eth.accounts[0];
const ECC =new  web3.eth.Contract(conf.EC.abi,conf.EC.address);

web3.eth.subscribe('newBlockHeaders',{ address:conf.EC.address},(err,event)=>{
    
    console.log(event);
})
.on('data', (event) => {
    console.log(event); // same results as the optional callback above
})
.on('chaned', (event) => {
    // remove event from local database
})
.on('error', console.error);

