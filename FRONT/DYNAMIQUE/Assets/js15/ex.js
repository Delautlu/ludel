document.getElementById("textBox1").value="";

function nbmagical(max, min) {
	return Math.floor(Math.random() * (max - min) ) + min;
  }

  let y = nbmagical(50, 0);
  console.log(y);

function verif(){
	
	var nb=document.getElementById("textBox1").value;
    if (nb<y){
		document.getElementById("label1").innerHTML = "Trop petit";
	}else if(nb > y){
		document.getElementById("label1").innerHTML = "Trop grand";	
	}
	else{
		document.getElementById("label1").innerHTML = "Gagné!";
	}
}
document.getElementById('button1').onclick=function(){
	verif();
};
