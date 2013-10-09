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

  var output = '';
  for (var name in VMX.storage.ledger){
    output += name + ': ' + VMX.storage.ledger[name] + "\n";
  }

 mcc.fillStyle = "blue";
 mcc.font = "bold 16px Arial";
 mcc.fillText(output, 100, 100)

  console.log(VMX.storage.ledger);
  console.log(output);
}
 
