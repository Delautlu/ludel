//exercice 2

var birthYear= prompt("Indiquez votre année de naissance");

var today= new Date();
var todayYear = today.getFullYear();
var age = todayYear - birthYear;

 if(age >=18)
{ 
	alert("Vous êtes majeur");
}
 else {
	alert("Vous êtes mineur");
 }


