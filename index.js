<<<<<<< HEAD
var katzDeliLine = [];

takeAnumber (katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");

nowServing (katzDeliLine);

currentLine (katzDeliLine);

=======
takeAnumber (katzDeliLine, "Ada");
nowServing (katzDeliLine);

>>>>>>> 5be1a7c9ad78d54e34a25a8ab852c18180ab8990
function takeANumber (katzDeliLine, name){

 katzDeliLine.push(name);
 return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");


}

function nowServing (katzDeliLine){
<<<<<<< HEAD
if (katzDeliLine.length === 0) {
return ("There is nobody waiting to be served!");
}
else {
var front = katzDeliLine[0];
katzDeliLine.shift();
return ("Currently serving " + front + ".");
}
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length === 0){
    return ("The line is currently empty.");
  }
  else{
    var deliline = [];
    var i;
    for (i = 0; i < katzDeliLine.length; i++){
      var n = i+1;
      if (i===0){
      deliline.push(n + ". " + katzDeliLine[i]);  
      }
      else{
       deliline.push(" " + n + ". " + katzDeliLine[i]);
      }
      
    }
    
    return ("The line is currently: " + deliline);
  }
=======
  
  if (length.katzDeliLine === 0) 
  return ()
  return ("Currently serving " + katzDeliLine[0] + ".");
  
>>>>>>> 5be1a7c9ad78d54e34a25a8ab852c18180ab8990
}