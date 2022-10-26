
 
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

	window.alert("Bonjour "+ident+" "+nom+" "+prenom+ "\nBienvenue sur notre site web!");