var a;
var somme = 0;
var moyenne=0;
var cpt=0;

do{
	a=parseInt(prompt("Saisir nombre entier"));
    somme= somme+a;
	cpt++;
    
}while(a!=0);
    cpt=cpt-1;
    moyenne=somme/cpt;

console.log(somme);
console.log("moyenne : "+moyenne);