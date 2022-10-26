var a=prompt("Indiquez un nombre entier A");
var b=prompt("Indiquez un nombre entier B");


a=parseInt(a);
b=parseInt(b);

switch (prompt("Saissisez un opérateur"))
{   
  case "+" :
     alert(a+b);  
     break; 

  case "-" :
     alert(a-b); 
     break;  

  case "*" :
     alert(a*b);
     break;

  case "/" :
	
  if(b==0)
	{
		alert("Aucun résultat possible");
	}
	else{
		alert(a/b);
	}
		break;
	
default:
	alert("erreur sur l'opérateur");
} 