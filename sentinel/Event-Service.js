Web3 = require('web3')
conf= require('./resources/config')

web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.0.11:4000'));
web3.eth.defaultAccount= web3.eth.accounts[0];
const ECC =new  web3.eth.Contract(conf.EC.abi,conf.EC.address);

class Event{
    constructor(timestamp,data){
    this.timestamp=timestamp;
    this.data=data
    }   
}

var lengthEvents=0;
var threshold=5;
var stringEvent="";

addEvent=function(event){
    lengthEvents++;
    stringEvent+=event.timestamp+"$"+event.data+"#"
    console.log(stringEvent)
    if (lengthEvents === threshold) {
        ECC.methods.createEvent(Date.now(),stringEvent).send({from: '0xe9c86e3422248980dae41e2524326c85b5466fa2',gas:300000})
        .then((result) => {
            console.log(result)
        })
        .catch((error)=>
            console.log(error)
        )
        string=""
    }
}

addEvent({timestamp:Date.now(),data:"DOS Attack"})
addEvent({timestamp:Date.now(),data:"Untrustable ping"})
addEvent({timestamp:Date.now(),data:"SOME ELSE"})
addEvent({timestamp:Date.now(),data:"SOME ELSE"})
addEvent({timestamp:Date.now(),data:"SOME EVENT"})
