var n=1;

function frente(){
	n++;
	if (n>5) 
		n=1;

	var galaxy = document.getElementById("galaxy");
	galaxy.src="galaxy"+n+".jpg";
	
	}

	function atras(){
		n --;
		if (n <1) 
			n = 5;
	var galaxy = document.getElementById("galaxy");
	galaxy.src="galaxy"+n+".jpg";
		
	}

    	
function aumenta(imagem){
    imagem.height=imagem.height*2;
	imagem.width=imagem.width*2;
}

function diminui(imagem){
	imagem.height=imagem.height/2;
	imagem.width=imagem.width/2;
}

