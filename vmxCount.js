var MIN_CONFIDENCE = 1;
VMX.config.useMagicCanvas = true;
VMX.storage.ledger = {}


VMX.callback = function(detections){
  if (! ( mc = VMX.getMagicCanvas() ) ){
    return; //canvas not open 
  };
  var mcc = VMX.getMagicContext();
  if(!mcc) return;

  mcc.restore();
  mcc.clearRect(0,0,mc.width,mc.height);
  mc.width = mc.width;

  var modelName = detections[0].cls;

  for(var x in detections){
    if(detections[x].score > MIN_CONFIDENCE){
      if(! VMX.storage.ledger[modelName] ) { VMX.storage.ledger[modelName] = {} } 
      VMX.storage.ledger[modelName].count     = parseInt(x,10) + 1;
      VMX.storage.ledger[modelName].name      = detections[x].cls;
      VMX.storage.ledger[modelName].last_seen = new Date();
    } else {
      break;
    }
  }

  mcc.fillStyle = "blue";
  mcc.font = "bold 16px Arial";
  var coords = {x: 50, y:50};
  var output =[];
  for (var name in VMX.storage.ledger){
    line = name + ': ' + VMX.storage.ledger[name].count + "\n";
    mcc.fillText(line,  coords.x, coords.y)
    coords.y += 50;
    output.push(line);
  }


  //console.log(VMX.storage.ledger);
  //console.log(coords,output);
}
 
