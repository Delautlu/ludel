function exer1(){
	var nom = window.prompt("Entrez votre nom");

	var prenom = window.prompt("Entrez votre prénom");
   
	var sexe = window.prompt("homme ou femme");
   
   if(sexe=="homme")
	 { if (window.confirm("Vous êtes un homme"))
	 ident="Monsieur"
	 }
   else if(sexe=="femme")
	{ if (window.confirm("Vous êtes une femme"))
	ident ="Madame"
	}
window.alert("Bonjour"+ident+" "+nom+" "+prenom+ "\nBienvenue sur notre site web!");
}
var ex1=document.getElementById("bout1");
ex1.addEventListener("click",function(){
	exer1();
});

function exer2(){
	var t = "Ceci est une chaîne de caractères :";
	var a = "100";
	var b = a--;
	var c = 1.00 + 100;
	var d = Boolean(1);

window.alert(t+" "+ a);
alert(b);
alert(c);
alert(!d); 
}
var ex2=document.getElementById("bout2");
ex2.addEventListener("click",function(){
	exer2();
});


function exer3(){
	var chiffre= prompt("Indiquez un chiffre");
	var resultat= parseInt(chiffre)%2;
		
	if(resultat==0){
			alert("chiffre pair");
}
		  else {
			alert("chiffre impair");
}
}
var ex3=document.getElementById("bout3");
ex3.addEventListener("click",function(){
	exer3();
});



function exer4(){
	var birthYear= prompt("Indiquez votre année de naissance");
	var today= new Date();
	var todayYear = today.getFullYear();
	var age = todayYear - birthYear;

 	if(age >=18){ 
	alert("Vous êtes majeur");
}
 else {
	alert("Vous êtes mineur");
 }
}
var ex4=document.getElementById("bout4");
ex4.addEventListener("click",function(){
	exer4();
});
