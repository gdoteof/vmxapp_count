console.log("ontopofcount");
VMX.cron = function(){
  var now = new Date();

  for(var m in VMX.storage.ledger){
    model = VMX.storage.ledger[m];
    var diff = now - model.last_seen;
    if(diff > 2000){
      VMX.storage.ledger[m].count = 0;
    }
  }
}
