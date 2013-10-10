console.log("ontopofcount");
VMX.cron = function(){
  var now = new Date();

  for(var model in VMX.storage.ledger){
    var diff = now - model.last_seen;
    console.log("its been ", diff, "since we've seen", model.name);
    if(now - model.last_seen > 2000){
      delete VMX.storage[model];
    }
  }
}
