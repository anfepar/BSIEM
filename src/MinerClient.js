var Web3 = require('web3')
var fs = require('fs');
conf= require('./variables/config')

web3 = new Web3(new Web3.providers.WebsocketProvider('ws://192.168.0.11:4002'));
web3.eth.defaultAccount= web3.eth.accounts[0];
const ECC =new  web3.eth.Contract(conf.EC.abi,conf.EC.address);

ECC.events.newEventCreated({ fromBlock: 'latest' },(err,event)=>{
    console.log(event);
})
.on('data', (event) => {
    splitEvents(event);
    console.log(event.returnValues); // same results as the optional callback above
})
.on('changed', (event) => {
    // remove event from local database
})
.on('error', console.error);

var splitEvents=function(events){
    var arrayEvents = events.returnValues._data.split("#");
    console.log(arrayEvents)
    for(event in arrayEvents){
        var arrayEvent = arrayEvents[event].split("$");
        console.log(arrayEvent)
        if(!(arrayEvent[0]==undefined || arrayEvent[1]==undefined))
            writeFile(arrayEvent[0]+":"+arrayEvent[1])
    }
}

var writeFile = function(line){
    fs.appendFile("/tmp/events.txt", line+'\n', function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}
