
//Variables box  types d'immeubles

var resid = document.getElementById("residential");
var com= document.getElementById("commercial");
var corp= document.getElementById("corp");
var hybrid= document.getElementById("hybrid");
resid.style.display='block';

var on_change = function() {
    var select = document.getElementById("selector").value;
 if (select=="1"){
     resid.style.display='block';
 }

};