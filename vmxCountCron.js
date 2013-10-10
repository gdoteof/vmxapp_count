console.log("ontopofcount");
VMX.cron = function(){
  var now = new Date();

  for(var m in VMX.storage.ledger){
    model = VMX.storage.ledger[m];
    var diff = now - model.last_seen;
    console.log("its been ", diff, "since we've seen", model.name);
    if(diff > 2000){
      console.log("been too long");
      VMX.storage.ledger[m].count = 0;
    }
  }
}
