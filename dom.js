
//Variables box  types d'immeubles

var resid = document.getElementById("residential");
var com= document.getElementById("commercial");
var corp= document.getElementById("corp");
var hybrid= document.getElementById("hybrid");



// Affichage des box appropriée\\



var on_change = function() {
    var select = document.getElementById("selector").value;
 //residential
if (select=="1"){
     resid.style.display='block';
     com.style.display='none';
     corp.style.display='none';
     hybrid.style.display='none';
 }
 // commercial
 else if(select=="2"){
    com.style.display='block';
    resid.style.display='none';
    corp.style.display='none';
    hybrid.style.display='none';
}
 //corporative
if(select=="3"){
    corp.style.display='block';
    resid.style.display='none';
    com.style.display='none'; 
    hybrid.style.display='none';


}
//hybrid
else if (select == "4"){
    hybrid.style.display='block';
    com.style.display='none';
    corp.style.display='none';
    resid.style.display='none';
}
    // building type (defalt)\\
else if(select == "0"){
    hybrid.style.display='none';
    com.style.display='none';
    corp.style.display='none';
    resid.style.display='none';
}

};
  // fin de la fonction \\
/*

Standard: Le service retourne $7,565
			* 
Premium: Le service retourne $12,345
			* 
Excelium: Le service retourne $15,400
                    *
Standard: Frais d’Installation de 10%
					* 
Premium: Frais d’Installation de 13%
					* 
Excelium: Frais d’Installation de 16%

*/
/*




*/

//variables pour le service residentiel
    var residApp = document.getElementById("nb-app-resid").value;

var residFloor = document.getElementById("nb-floor-resid").value;

var residBasement = document.getElementById("nb-bsmnt-resid").value;

// variables pour le service commercial

var comercialCage = document.getElementById("nb-lift-comm")

//variables pour les services corporatif

var corpPeople = document.getElementById("nb-ppl-corp").value;

var corpFloor = document.getElementById ("nb-floor-corp").value

var corpBasement = document.getElementById("nb-bsmnt-corp").value;

//variables pour les services hybrides

var hybridPeople = document.getElementById("nb-ppl-hybrid").value;

var hybridFloor = document.getElementById ("nb-floor-hybrid").value

var hybridBasement = document.getElementById("nb-bsmnt-hybrid").value;


