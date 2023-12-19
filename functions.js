const miniaturas = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const botonesFlecha = document.querySelectorAll(".modal button");
let rutasImg = [];
let imgActual = 0; //null -> deja un espacio mínimo posible

miniaturas.forEach( (miniatura,indice) =>{
	
	rutasImg.push(miniatura.getAttribute("href"));

	miniatura.addEventListener("click", event => {
		event.preventDefault(); //para que no se dispare el enlace
		
		imgActual = indice;
		imgModal.setAttribute("src",rutasImg[imgActual]);
		
		modal.classList.add("visible");
	});
});

modal.addEventListener("click",function(){
	this.classList.remove("visible");
});

botonesFlecha.forEach((boton,indice) => {
	boton.addEventListener("click",event => {
		event.stopPropagation();
		if(indice == 0){
			imgActual = imgActual > 0 ? imgActual - 1 : rutasImg.length -1;
		}else{
			imgActual = imgActual < rutasImg.length -1 ? imgActual + 1 : 0;
		}

	imgModal.setAttribute("src",rutasImg[imgActual]);
	});
});


/*
html
	head
	body
		section.galeria
			a
				img
		div.modal
			button
			img
			button
*/