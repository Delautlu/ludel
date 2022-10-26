
function GetInteger(){
    interger=prompt("Veuillez entrer un nombre entier");	
	while(interger!=parseInt(interger)){
		  interger=prompt("Erreur");
	}
}
console.log(GetInteger());

function InitTab (){
	tableau=Array(interger);
}
InitTab();

function SaisieTab(){
	for (i = 0; i < interger; i++) {
    tableau[i]=prompt("Saisir un nom");
    }
}
SaisieTab();

function AfficheTab(){
	for (i = 0; i < interger; i++) {
    console.log(tableau[i]);
}
}
AfficheTab();

function RechercheTab(){
	rang=prompt("Veuillez entrer un nombre ");
	console.log(tableau[rang]);
}
RechercheTab();

function InfoTab(){
	var max=0;
	var resultat=0;
	var som=0;

    for (i=0; i < interger; i++) {
     som = som + parseInt(tableau[i]);
	 console.log(som);
	if (max<tableau[i]){
		max=tableau[i];
	   }
    }
 	 resultat= som / interger;
   	 alert("La moyenne est :  "+resultat);
	 console.log(max);
}
InfoTab();