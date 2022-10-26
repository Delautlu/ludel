document.getElementById("societe").value="";
document.getElementById("contactclt").value="";
document.getElementById("code_postal").value="";
document.getElementById("ville").value="";
document.getElementById("email").value="";

var checkbox = document.getElementById("bt1"); 
checkbox.addEventListener("click",f_valid);

//////////////////////////////////////////Nom de la soiété////////////////////////////////
function f_valid(e) {
	function soci(){
		var soci = document.getElementById("societe");
		var soci_m=document.getElementById("alert_soci");
		var soci_v= new RegExp("^[A-Za-z0-9]+$");
   if (soci.value === ""){
	   	e.preventDefault();
	   	soci_m.textContent = "manquant";
	   	soci_m.style.color = "red";	
   }else if(soci_v.test(soci.value) == false){
		e.preventDefault();
		soci_m.textContent="incorrect";
		soci_m.style.color="orange";
   }
}
soci();

//////////////////////////////////////Personne à contacter/////////////////////////////////
	function contact(){
		var contact=document.getElementById("contactclt");
		var contact_m=document.getElementById("alert_percont");
		var contact_v=new RegExp("^[A-Za-z]+$");
	if (contact.value===""){
		e.preventDefault();
		contact_m.textContent = "manquant";
		contact_m.style.color = "red";	
	}else if(contact_v.test(contact.value) == false){
		e.preventDefault();
		contact_m.textContent="incorrect";
		contact_m.style.color="orange";
	}
}
contact();

//////////////////////////////////////// Code Postal ///////////////////////////////////////

	function cdpo(){
		var cdpo=document.getElementById("code_postal");
		var cdpo_m=document.getElementById("alert_cdpo");
		var cdpo_v=new RegExp("^([0-9a-z]){5}$");
	if (cdpo.value===""){
		e.preventDefault();
		cdpo_m.textContent = "manquant";
		cdpo_m.style.color = "red";	
	}else if(cdpo_v.test(cdpo.value) == false){
		e.preventDefault();
		cdpo_m.textContent="incorrect";
		cdpo_m.style.color="orange";
	}
}
cdpo();

////////////////////////////////////////Ville///////////////////////////////////////////////
	function vil(){
		var vil=document.getElementById("ville");
		var vil_m=document.getElementById("alert_vil");
		var vil_v=new RegExp("^[A-Za-z]+$");
	if (vil.value===""){
		e.preventDefault();
		vil_m.textContent = "manquant";
		vil_m.style.color = "red";		
	}else if(vil_v.test(vil.value) == false){
		e.preventDefault();
		vil_m.textContent="incorrect";
		vil_m.style.color="orange";
	}
}
vil();

//////////////////////////////////////////////////////Email////////////////////////////////////
	function em(){
		var em=document.getElementById("email");
		var em_m=document.getElementById("alert_em");
		var em_v=new RegExp("^[a-z0-9]+@");
	if (em.value===""){
			e.preventDefault();
			em_m.textContent = "manquant";
			em_m.style.color = "red";		
	}else if(em_v.test(em.value) == false){
			e.preventDefault();
			em_m.textContent="incorrect";
			em_m.style.color="orange";
		}
	}
em();
}

///////////////////////////////////////////Choix dans le cadre/////////////////////////////////
projet.addEventListener("click",function(){
	if(projet.value=="Choisissez"){
		document.getElementById("text").value="";
	}else {
		document.getElementById("text").value= projet.value;
	}
});


