console.log("ontopofcount");
vmxparams.list_ui_params()[0].value=1000;
vmxparams.list_ui_params()[0].current_value=1000;
VMX.cron = function(){
  var now = new Date();

  for(var m in VMX.storage.ledger){
    model = VMX.storage.ledger[m];
    var diff = now - model.last_seen;
    if(diff > 700){
      VMX.storage.ledger[m].count = 0;
    }
  }
}
