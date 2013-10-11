console.log("ontopofcount");
//Set params
console.log(vmxparams.list_ui_params());
console.log(vmxparams.list_detect_params());
vmxparams.list_detect_params()[0].value=3000;
vmxparams.list_detect_params()[0].current_value=3000;
vmxparams.list_ui_params()[0].value=1000;
vmxparams.list_ui_params()[0].current_value=1000;
vmxparams.list_ui_params()[2].value=0;
vmxparams.list_ui_params()[2].current_value=0;
VMX.cron = function(){
  var now = new Date();

  for(var m in VMX.storage.ledger){
    model = VMX.storage.ledger[m];
    var diff = now - model.last_seen;
    if(diff > 400){
      VMX.storage.ledger[m].count = 0;
    }
  }
}
