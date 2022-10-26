var resultat2;
var x=parseInt(prompt("entrez un nombre"));
var y=parseInt(prompt("Entrez un multiplicateur"));
var resultat;



function produit (a,b)
{
  	resultat=a*b;
	document.getElementById("calcul1").innerHTML="le produit de "+a+" x "+b+" est égal à "+resultat; 
  
}

produit(x,y);
console.log("produit "+resultat);


function Cube(a)
{
   resultat2= a*a*a;
   document.getElementById("calcul2").innerHTML=" Le cube de "+a+" est égal à " +resultat2; 
}

Cube(x);
console.log("cube "+resultat2);


function imgpapi ()
{
   var imagep=document.createElement("img");
   imagep.src="papillon.jpg";
   var papi= document.getElementById("pa");
   papi.appendChild(imagep);
}
imgpapi();