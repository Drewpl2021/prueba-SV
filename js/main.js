var audio = document.getElementById("click");

// Configurar volumen inicial al 50%
audio.volume = 0.8;

// Función para bajar el volumen progresivamente
function bajarVolumen() {
    if (audio.volume > 0.1) {
        audio.volume -= 0.1; // Disminuye el volumen en 0.1
    } else {
        audio.volume = 0; // Si el volumen es muy bajo, lo pone en silencio
    }
}


function PlayAudio() {
    audio.play();
    document.getElementById("img").classList.add("girar");

    setTimeout(function() {
        document.getElementById("titulo").classList.add("tranparencia_titulo");
    }, 1000);



	// document.getElementById("titulo").classList.add("a");
	setInterval(function(){
		document.getElementById("titulo").classList.add("a");
	}, 1000);

	setTimeout(function() {
		document.getElementById("textoA").classList.add("textoA1");
	}, 2500);

	setTimeout(function() {
		document.getElementById("textoB").classList.add("textoB1");
	}, 6000);

	setTimeout(function() {
		document.getElementById("textoC").classList.add("textoC1");
	}, 10000);

	setTimeout(function() {
		document.getElementById("textoD").classList.add("textoD1");
	}, 14000);

	setTimeout(function() {
		document.getElementById("img2").classList.add("texto1_imagen_mod");
	}, 10000);

	setInterval(function(){
		document.getElementById("ctnr").classList.add("desvan");
	}, 17300);

	setInterval(function(){
		document.getElementById("img2").classList.add("desvan");
	}, 30000);

	setTimeout(function() {
		document.getElementById("texto2").classList.add("b");
	}, 24200);

	setInterval(function(){
		document.getElementById("texto2").classList.remove("b");
	}, 35000);

	setTimeout(function() {
		document.getElementById("img3").classList.add("texto1_imagen_mod");
	}, 50000);
	
	setTimeout(function() {
		document.getElementById("texto_A").classList.add("texto_A1");
	}, 17500);

	setTimeout(function() {
		document.getElementById("texto_B").classList.add("texto_B1");
	}, 21500);

	setTimeout(function() {
		document.getElementById("texto_C").classList.add("texto_C1");
	}, 25200);

	setTimeout(function() {
		document.getElementById("texto_D").classList.add("texto_D1");
	}, 28000);

	setInterval(function(){
		document.getElementById("img3").classList.add("desvan");
	}, 90000);

	setTimeout(function() {
		document.getElementById("texto_E").classList.add("texto_E1");
	}, 31700);

	setTimeout(function() {
		document.getElementById("texto_F").classList.add("texto_F1");
	}, 33500);

	setInterval(function(){
		document.getElementById("ctnr2").classList.add("desvan");
	}, 35600);

	setTimeout(function() {
		document.getElementById("texto_A_A").classList.add("texto_A_A1");
	}, 36200);

	setTimeout(function() {
		document.getElementById("texto_B_B").classList.add("texto_B_B1");
	}, 40300);

	setTimeout(function() {
		document.getElementById("texto_C_C").classList.add("texto_C_C1");
	}, 48200);

	setTimeout(function() {
		document.getElementById("texto_D_D").classList.add("texto_D_D1");
	}, 51500);

	setTimeout(function() {
		document.getElementById("texto_E_E").classList.add("texto_E_E1");
	}, 55400);
	
	setTimeout(function() {
		document.getElementById("texto_F_F").classList.add("texto_F_F1");
	}, 57300);

	setInterval(function(){
		document.getElementById("ctnr3").classList.add("desvan");
	}, 62000);

	setTimeout(function() {
		document.getElementById("texto_uno").classList.add("texto_uno1");
	}, 62300);

	setTimeout(function() {
		document.getElementById("texto_dos").classList.add("texto_dos1");
	}, 66000);

	setTimeout(function() {
		document.getElementById("texto_tres").classList.add("texto_tres1");
	}, 69100);

	setTimeout(function() {
		document.getElementById("texto_cuatro").classList.add("texto_cuatro1");
	}, 73900);

	setTimeout(function() {
		document.getElementById("texto_cinco").classList.add("texto_cinco1");
	}, 77500);

	setTimeout(function() {
		document.getElementById("texto_seis").classList.add("texto_seis1");
	}, 78900);

	setInterval(function(){
		document.getElementById("ctnr4").classList.add("desvan");
	}, 80000);

	setTimeout(function() {
		document.getElementById("ag").classList.add("ag1");
	}, 80200);
	setTimeout(function() {
		document.getElementById("ar").classList.add("ar1");
	}, 84000);

	setTimeout(function() {
		document.getElementById("fu").classList.add("fu1");
	}, 86000);

	setTimeout(function() {
		document.getElementById("ti").classList.add("ti1");
	}, 89900);

	setInterval(function(){
		document.getElementById("ctnr5").classList.add("desvan");
	}, 95000);

	setTimeout(function() {

		document.getElementById("ctnr7").classList.add("c");


	}, 95500);
	

}



