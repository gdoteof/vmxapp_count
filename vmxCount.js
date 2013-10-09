VMX.config.useMagicCanvas = true;
VMX.callback = function(detections){
  var mc = VMX.getMagicCanvas();
  var mcc = mc.getContext('2d');
  console.log(detections);
}
 
