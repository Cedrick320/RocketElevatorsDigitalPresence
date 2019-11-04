
//Variables box  types d'immeubles

var resid = document.getElementById("residential");
var com = document.getElementById("commercial");
var corp = document.getElementById("corp");
var hybrid = document.getElementById("hybrid");
// Variables affichage des prix/ nombre d'ascenseur && calculs généraux
var lift = document.getElementById("numb-lift");
var totalPrice = document.getElementById("final-price");
var getInstallFee = document.getElementById("instal-fees")
//var boutton radio\\
var standard = document.getElementById("standard");
var premium = document.getElementById("premium");
var excelium = document.getElementById("excelium");
//fin var pour boutton radio\\



// Affichage des box appropriée\\



var on_change = function () {
    var select = document.getElementById("selector").value;
    //residential
    if (select == "1") {
        resid.style.display = 'block';
        com.style.display = 'none';
        corp.style.display = 'none';
        hybrid.style.display = 'none';
    }
    // commercial
    else if (select == "2") {
        com.style.display = 'block';
        resid.style.display = 'none';
        corp.style.display = 'none';
        hybrid.style.display = 'none';
    }
    //corporative
    if (select == "3") {
        corp.style.display = 'block';
        resid.style.display = 'none';
        com.style.display = 'none';
        hybrid.style.display = 'none';


    }
    //hybrid
    else if (select == "4") {
        hybrid.style.display = 'block';
        com.style.display = 'none';
        corp.style.display = 'none';
        resid.style.display = 'none';
    }
    // building type (defalt)\\
    else if (select == "0") {
        hybrid.style.display = 'none';
        com.style.display = 'none';
        corp.style.display = 'none';
        resid.style.display = 'none';
    }

};

/*var radioButton = function(){
    var standard = document.getElementById("standard");
    var premium = document.getElementById("premium");
    var excelium = document.getElementById("excelium");
    var installFee = null
    var price = null


}
    */

//Commercial

var calcCommercial = function () {
var comCage = document.getElementById("nb-lift-comm").value;    
var instalFee = null;
var cagePrice = null ;
var price = null;

  

if (standard.checked == true){
cagePrice = 7565;
instalFee = 1.10;
price = cagePrice*comCage*instalFee;
totalPrice.innerHTML = price.toFixed(2);
getInstallFee.innerHTML = (cagePrice*comCage*0.10).toFixed(2);
lift.innerHTML = comCage;  
}
 else if (premium.checked == true){
cagePrice = 12345;
instalFee = 1.13;
price = cagePrice*comCage*instalFee;
totalPrice.innerHTML = price.toFixed(2); 
getInstallFee.innerHTML = (cagePrice*comCage*0.13).toFixed(2);
lift.innerHTML = comCage;  
}


else if (excelium.checked == true){
cagePrice = 15400;
instalFee = 1.16;
price = cagePrice*comCage*instalFee;
totalPrice.innerHTML = price.toFixed(2);
getInstallFee.innerHTML = (cagePrice*comCage*0.16).toFixed(2);
lift.innerHTML = comCage;  
}
else {
totalPrice.innerHTML = "0.00";
getInstallFee.innerHTML = "0.00";
lift.innerHTML = comCage;  
}
};
     

//Résidentiel


var calcResid= function(){
var residFloor = document.getElementById("nb-floor-resid").value;
var appResid = document.getElementById("nb-app-resid").value
var approxCage =  Math.ceil((appResid/residFloor)/6);
var instalFee = null;
var numColumnRes = residFloor/20;
var residCage = Math.ceil(approxCage*numColumnRes);
var cagePrice = null ;
var price = null;
console.log(residCage)
console.log(approxCage)
console.log(numColumnRes) 
if (standard.checked == true && residFloor>0 && appResid>0){
instalFee = 1.10;
cagePrice = 7565;
price = residCage*cagePrice*instalFee;
getInstallFee.innerHTML = residCage*cagePrice*0.10;
 totalPrice.innerHTML= price.toFixed(2);
 lift.innerHTML = residCage;
}

else if (premium.checked == true && residFloor>0 && appResid>0){
    instalFee = 1.13;
    cagePrice = 12345;
    price = price = residCage*cagePrice*instalFee;
    getInstallFee.innerHTML =(residCage*cagePrice*0.13).toFixed(2);
     totalPrice.innerHTML= price.toFixed(2);
     lift.innerHTML = residCage;
    }
    else if (excelium.checked == true && residFloor>0 && appResid>0){
        instalFee = 1.16;
        cagePrice = 15400;
        price = price = residCage*cagePrice*instalFee;
        getInstallFee.innerHTML = (residCage*cagePrice*0.16).toFixed(2);
         totalPrice.innerHTML= price.toFixed(2);
         lift.innerHTML = residCage;
        }
        else if (residFloor<= 0|| appResid <=0) {
            getInstallFee.innerHTML = "0.00";
            totalPrice.innerHTML = "0.00" 
            lift.innerHTML = "0.00";
        }

    };


var calcCorp = function(){
//valeurs nombre de sous-sols
var corpBasement = document.getElementById("nb-bsmnt-corp").value;
//valeurs nombre d'étage hors terre
var corpFloor = document.getElementById("nb-floor-corp").value  ;
// total des sous-sols et étages additionné
var corpTotalFloor = corpFloor+corpBasement;
// valeur quantitée maximun de personnes par étage
var corpPpl = document.getElementById("nb-ppl-corp").value;
//valeur quantitée maximum de personnes dans l'immeuble
var corpMaxPpl = corpPpl*corpTotalFloor;
//nombre d'ascenseur requis
var corpLift = Math.ceil(corpMaxPpl/1000);
//nombre de collonnes d'ascenseurs requise
var corpColumn = corpTotalFloor/20;
//nombre final d'ascenseur recommandé
var finalLiftAmmount = Math.ceil(corpLift/corpColumn);
// variables ayant un rapport direct avec le prix
var instalFee = null
var cagePrice = null
var price = null

if(standard.checked == true && corpBasement >= 0 && corpFloor > 0 && corpPpl > 0){
    instalFee= 1.10;
    cagePrice= 7565;
    price = finalLiftAmmount*cagePrice*instalFee;
   getInstallFee.innerHTML = finalLiftAmmount*cagePrice*0.10;
   totalPrice.innerHTML = price.toFixed(2);
   lift.innerHTML = finalLiftAmmount
}
 
else if(premium.checked == true && corpBasement >= 0 && corpFloor > 0 && corpPpl > 0){
    instalFee= 1.13;
    cagePrice= 12345;
    price = finalLiftAmmount*cagePrice*instalFee;
   getInstallFee.innerHTML = (finalLiftAmmount*cagePrice*0.13).toFixed(2);
   totalPrice.innerHTML = price.toFixed(2);
   lift.innerHTML = finalLiftAmmount
}
else if (excelium.checked == true && corpBasement >= 0 && corpFloor > 0 && corpPpl > 0){
    instalFee= 1.16;
    cagePrice= 15400;
    price = finalLiftAmmount*cagePrice*instalFee;
   getInstallFee.innerHTML = (finalLiftAmmount*cagePrice*0.16).toFixed(2);
   totalPrice.innerHTML = price.toFixed(2);

   lift.innerHTML = finalLiftAmmount}

else {
    getInstallFee.innerHTML = "0.00";
    totalPrice.innerHTML = "0.00";
lift.innerHTML = "0"}



}

var calcHybrid = function(){
    //valeurs nombre de sous-sols
    var hybBasement = document.getElementById("nb-bsmnt-hybrid").value;
    //valeurs nombre d'étage hors terre
    var hybFloor = document.getElementById("nb-floor-hybrid").value  ;
    // total des sous-sols et étages additionné
    var hybTotalFloor = Math.ceil(hybFloor + hybBasement);
    // valeur quantitée maximun de personnes par étage
    var hybPpl = document.getElementById("nb-ppl-hybrid").value;
    //valeur quantitée maximum de personnes dans l'immeuble
    var hybMaxPpl = hybPpl*hybTotalFloor;
    //nombre d'ascenseur requis
    var hybLift = Math.ceil(hybMaxPpl/1000);
    //nombre de collonnes d'ascenseurs requise
    var hybColumn = hybTotalFloor/20;
    //nombre final d'ascenseur recommandé
    var finalLiftAmmount = Math.ceil(hybLift/hybColumn);
    // variables ayant un rapport direct avec le prix
   console.log(hybColumn);
   console.log(hybMaxPpl);
   console.log(finalLiftAmmount);
   console.log(hybPpl);
   console.log(hybFloor)
   console.log(hybBasement)
    var instalFee = null
    var cagePrice = null
    var price = null
    lift.innerHTML = finalLiftAmmount
    if(standard.checked == true && hybBasement >= 0 && hybFloor > 0 && hybPpl > 0){
        instalFee= 1.10;
        cagePrice= 7565;
        price = finalLiftAmmount*cagePrice*instalFee;
       getInstallFee.innerHTML = (finalLiftAmmount*cagePrice*0.10).toFixed(2);
       totalPrice.innerHTML = price.toFixed(2);
       lift.innerHTML = finalLiftAmmount
    }
     
    else if(premium.checked == true && hybBasement >= 0 && hybFloor > 0 && hybPpl > 0){
        instalFee= 1.13;
        cagePrice= 12345;
        price = finalLiftAmmount*cagePrice*instalFee;
       getInstallFee.innerHTML = finalLiftAmmount*cagePrice*0.13;
       totalPrice.innerHTML = price;
       lift.innerHTML = finalLiftAmmount
    }
    else if (excelium.checked == true && hybBasement >= 0 && hybFloor > 0 && hybPpl > 0){
        instalFee= 1.16;
        cagePrice= 15400;
        price = finalLiftAmmount*cagePrice*instalFee;
       getInstallFee.innerHTML = (finalLiftAmmount*cagePrice*0.16).toFixed(2);
       totalPrice.innerHTML = price.toFixed(2);
       lift.innerHTML = finalLiftAmmount
    }
    
    else {
        getInstallFee.innerHTML = "0.00";
        totalPrice.innerHTML = "0.00";
   
        lift.innerHTML = "0";
    }
    
    
    };

    
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
