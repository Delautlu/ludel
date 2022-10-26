var n=prompt("Veuillez saisir un nombre");
var str1="machin,bidule,truc,chose";
var str2=(",");

function strtok(a,b,c)
{
	var b=a.split(b);
	alert(b[c-1]);
}
strtok(str1,str2,n);

