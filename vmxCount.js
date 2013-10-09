var MIN_CONFIDENCE = .5;
VMX.config.useMagicCanvas = true;
VMX.storage.ledger = {}
console.log("RE STARTING COUNTER");

VMX.callback = function(detections){
  if (! ( mc = VMX.getMagicCanvas() ) ){
    return; //canvas not open 
  };
  var modelName = detections[0].cls;

  var mcc = mc.getContext('2d');
  console.log(VMX);

  for(var x in detections){
    if(detections[x].score > MIN_CONFIDENCE){
      VMX.storage.ledger[modelName] = (x+1);
    } else {
      break;
    }
  }

  console.log(VMX.storage.ledger);
}
 
