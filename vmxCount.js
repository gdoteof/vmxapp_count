console.log("WTF");
var MIN_CONFIDENCE = .5;
VMX.config.useMagicCanvas = true;
console.log("RE STARTING COUNTER");

VMX.callback = function(detections){
  console.log("eh..?");
  if (! ( mc = VMX.getMagicCanvas() ) ){
    return; //canvas not open 
  };
  var modelName = detections[0].cls;
  console.log("ok...");
/*
  var mcc = mc.getContext('2d');
  console.log("VMX..",VMX);

  for(var x in detections){
    if(detections[x].score > MIN_CONFIDENCE){
//      VMX.storage.ledger[modelName] = (x+1);
    } else {
      break;
    }
  }

  console.log(VMX.storage.ledger);
  */
}
 
