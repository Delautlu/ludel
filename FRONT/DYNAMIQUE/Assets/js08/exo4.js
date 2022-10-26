var n=parseInt(prompt("Saisir n"));
var x=parseInt(prompt("Saisir x"));
var cpt=1;
var resultat=0;

for(cpt;cpt<=n;cpt++)
{
	resultat=cpt*x;
	console.log(cpt+" x "+x+" = "+resultat);
}