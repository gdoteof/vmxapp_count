console.log("WTF");
var MIN_CONFIDENCE = 1;
VMX.config.useMagicCanvas = true;
VMX.storage.ledger = {}
console.log("RE STARTING COUNTER");

VMX.callback = function(detections){
  if (! ( mc = VMX.getMagicCanvas() ) ){
    return; //canvas not open 
  };
  var modelName = detections[0].cls;
  var mcc = mc.getContext('2d');
  mcc.clearRect(0,0,mc.width,mc.height);
  mcc.restore();
  console.log(mcc);
  console.log(mc);
  cnsole.log("canvas width is ", mc.width);

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
  var coords = {x: 50, y:50};
  var output =[];
  for (var name in VMX.storage.ledger){
    line = name + ': ' + VMX.storage.ledger[name] + "\n";
    mcc.fillText(line,  coords.x, coords.y)
    coords.y += 50;
    output.push(line);
  }

  mcc.fillText(output, 100, 100)

  console.log(VMX.storage.ledger);
  console.log(coords,output);
}
 
