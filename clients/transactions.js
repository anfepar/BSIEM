var Web3 = require('web3')
var fs = require('fs'); 
var XLSX = require('xlsx');

conf= require('./resources/config')
var count=0;
var entries_limit=20;
var entries=[]
web3 = new Web3(new Web3.providers.WebsocketProvider('ws://192.168.0.11:4002'));
web3.eth.defaultAccount= web3.eth.accounts[0];

web3.eth.subscribe('pendingTransactions',{ address:conf.EC.address},(err,event)=>{
    web3.eth.getTransaction(event).then(
        resp => { console.log(resp)}
    )
    //entries.push(event);
    //console.log(event); // same results as the optional callback above
    //toExcel(entries);
})
.on('data', (event) => {
    count++;
    entries.push(event);
    console.log(event); // same results as the optional callback above
    toExcel(entries);
    console.log("excel saved")
})
.on('changed', (event) => {
    // remove event from local database
})
.on('error', console.error);

toExcel = function(data){
    var excelSheet =XLSX.utils.json_to_sheet(data);
    var wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb,excelSheet,"Block-Headers");
    XLSX.writeFile(wb, './resp.xlsx') 
}
