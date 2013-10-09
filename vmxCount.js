VMX.config.useMagicCanvas = true;
VMX.callback = function(detections){
  if (! ( mc = VMX.getMagicCanvas() ) ){
    return; //canvas not open 
  };
  var modelName = detections[0].cls;

  var mcc = mc.getContext('2d');

  for(var x in detections){
    if(detections[x].score > MIN_CONFIDENCE){
      VMX.storage.ledger[modelName] = (x+1);
    } else {
      break;
    }
  }

  console.log(VMX.storage.ledger);
}
 
