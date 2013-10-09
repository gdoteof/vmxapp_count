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

  mcc.clearRect(0,0,mcc.width,mcc.height);
  mcc.fillStyle = "blue";
  mcc.font = "bold 16px Arial";
  var y = 0;
  var output =[];
  for (var name in VMX.storage.ledger){
    line = name + ': ' + VMX.storage.ledger[name] + "\n";
    mcc.fillText(line,  0, y)
    y += 50;
    output.push(line);
  }

  mcc.fillText(output, 100, 100)

  console.log(VMX.storage.ledger);
  console.log(output);
}
 
