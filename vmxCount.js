console.log("WTF");
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

  for(var x in detections){
    if(detections[x].score > MIN_CONFIDENCE){
      VMX.storage.ledger[modelName] = parseInt(x,10) + 1;
    } else {
      break;
    }
  }

  console.log(VMX.storage.ledger);
}
 
