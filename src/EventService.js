

Web3 = require('web3')
conf= require('./variables/config')

web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.0.25:4000'));
web3.eth.defaultAccount= web3.eth.accounts[0];
const ECC =new  web3.eth.Contract(conf.EC.abi,conf.EC.address);

class Event{
    constructor(timestamp,data){
    this.timestamp=timestamp;
    this.data=data
    }   
}

var lengthEvents=0;
var threshold=1;
var stringEvent="";

addEvent= function(event){
    lengthEvents++;
    stringEvent+=event.timestamp+"$"+event.data+"#"
    if (lengthEvents === threshold) {
        ECC.methods.createEvent(Date.now(),stringEvent,0).send({from:'aadc894954fbee09c0cc3c4780a05412d15daa65'})
        .then((result) => {
            console.log(result)
        })
        .catch((error)=>
            console.log(error)
        )
        stringEvent="";
        lengthEvents=0;
    }
}



addEvent({timestamp:Date.now(),data:"transport tcp prueba"})
