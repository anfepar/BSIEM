Web3 = require('web3')
conf= require('./resources/config')

web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.0.14:4001'));
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

addEvent=async function(event){
    lengthEvents++;
    stringEvent+=event.timestamp+"$"+event.data+"#"
    if (lengthEvents === threshold) {
        await ECC.methods.createEvent(Date.now(),stringEvent,0).send({from:'86cade96d8631bf9f1ead5e870ff9d0527dc25a3',gas:300000})
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

sendEvents= async function(cantEevents){
    for(var i=0;i<cantEevents;i++){
        await addEvent({timestamp:Date.now(),data:"transport tcp"})
        console.log("variable i + timestamp",i,Date.now())
    }
}


sendEvents(10);