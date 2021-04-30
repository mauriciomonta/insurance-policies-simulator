function prueba() {
	let prueba = console.log('funciona');
}
function prueba2() {
	let prueba2 = console.log('tambien funciona');
}

let nombreUsuario = document.getElementById('nombreUsuario');
let apellidoUsuario = document.getElementById('apellidoUsuario');
let cantVehElegido = document.getElementById('optVeh');
let marcaVehiculo = document.getElementById('marcaVehiculo');
let modeloVehiculo = document.getElementById('modeloVehiculo');
let yearVehiculo = document.getElementById('vehiculoYear');
let valorVehiculo = document.getElementById('valorVehiculo');
let btnCargar = document.getElementById('cargarVehiculo');
let cambiarCant = document.getElementById('cambiarCantidad');

function cantidadElegida() {
	if (cantVehElegido.value >= 1) {
		cambiarCant.innerHTML = `${cantVehElegido.value}`;
	}
}

class vehiculo {
	constructor(marca, modelo, year, valor) {
		this.marca = marcaVehiculo.value;
		this.modelo = modeloVehiculo.value;
		this.year = yearVehiculo.value;
		this.valor = valorVehiculo.value;
	}
}

vehiculos = [ 0 ];
let i = 0;

function reset() {
	i = 0;
	let cantidadAgregada = document.getElementById('cantidadCargada');
	cantidadAgregada.innerHTML = `${i}`;
}
function cargarVehiculo() {
	i++;

	if (i > cantVehElegido.value) {
		$('#marcaVehiculo').val('selectmarca');
		$('#modeloVehiculo').val('');
		$('#vehiculoYear').val('selectyear');
		$('#valorVehiculo').val('');
		$('#cargarVehiculo').attr('disabled', true).removeClass('btn-success').addClass('btn-light');
		$('#cantidadCargadaAlerta').text(`${i}`);
		$('#cantidadCargar').text(`${cantVehElegido.value}`);
		$('#alertaCantidadCompleta').fadeIn(2000).delay(2000).fadeOut(2000);
		i = cantVehElegido.value;
	} else {
		let newVeh = new vehiculo(marcaVehiculo.value, modeloVehiculo.value, yearVehiculo.value);
		vehiculos.push(newVeh);

		$('#marcaVehiculo').val('selectmarca');
		$('#modeloVehiculo').val('');
		$('#vehiculoYear').val('selectyear');
		$('#valorVehiculo').val('');

		$('#cantidadCargadaAlerta').text(`${i}`);
		$('#cantidadCargar').text(`${cantVehElegido.value}`);
		$('#addedVeh').text(`${cantVehElegido.value}`);
		$('#alertaRestantes').fadeIn(2000).delay(2000).fadeOut(2000);
	}
	cantidadAgregada();
}

function check() {
	let restantes = cantVehElegido.value - i;

	if (i < cantVehElegido.value) {
		$('#cantidadRestante').text(`${restantes}`);
		$('#alertaCargar').fadeIn(2000).delay(2000).fadeOut(2000);
	}
	if (restantes == 0) {
		$('#datosVehiculos').fadeOut(2000);
		$('#polizas').delay(2000).fadeIn('slow');
		let circulo4 = document.getElementById('circulo4');
		circulo4.classList.remove('dotted');
		let circulo5 = document.getElementById('circulo5');
		circulo5.classList.add('dotted');
	}
}

function cantidadAgregada() {
	let cantidadAgregada = document.getElementById('cantidadCargada');
	cantidadAgregada.innerHTML = `${i}`;
}
let clickSig = 1;
function mostrarAnt() {
	if (cantVehElegido.value > clickSig) {
		clickSig++;
		console.log(clickSig);
	}
	if (clickSig >= 2) {
		let btnAnt = document.getElementById('antVeh');
		btnAnt.classList.add('visible');
	}
	if (clickSig == cantVehElegido.value) {
		let btnAnt = document.getElementById('sigVeh');
		btnAnt.classList.remove('visible');
	}
	mostrarValores();
}

function quitarAnt() {
	if (clickSig > 1) {
		clickSig--;
		console.log(clickSig);
	}
	if (clickSig == 1) {
		let btnAnt = document.getElementById('antVeh');
		btnAnt.classList.remove('visible');
	}
	let btnAnt = document.getElementById('sigVeh');
	btnAnt.classList.add('visible');
	mostrarValores();
}

function mostrarSig() {
	let cantidadAgregada = document.getElementById('cantidadCargada');
	if (i > 1) {
		let btnSig = document.getElementById('sigVeh');
		btnSig.classList.add('visible');
	}
}

function mostrarValores() {
	ClickSig = 1;
	let nroVehiculo = document.getElementById('nroVehiculo');
	nroVehiculo.innerHTML = `${clickSig}`;
	let marcaMostrar = document.getElementById('marcaMostrar');
	marcaMostrar.innerHTML = `${vehiculos[clickSig].marca}`;
	let modeloMostrar = document.getElementById('modeloMostrar');
	modeloMostrar.innerHTML = `${vehiculos[clickSig].modelo}`;
	let yearMostrar = document.getElementById('yearMostrar');
	yearMostrar.innerHTML = `${vehiculos[clickSig].year}`;
	let valuadoMostrar = document.getElementById('cotizadoEn');
	valuadoMostrar.innerHTML = `$${vehiculos[clickSig].valor}`;

	let valorveh = vehiculos[clickSig].valor;
	let valorAsegurado = valorveh * 85 / 100;
	let cotizadoMostrar = document.getElementById('aseguradoEn');
	cotizadoMostrar.innerHTML = `$${valorAsegurado.toLocaleString()}`;
}
function limpiarArray() {
	vehiculos.splice(1, 10);
}

function cargarNombre() {
	let nombre = document.getElementById('nombreCliente');
	nombre.innerHTML = `<h1>${nombreUsuario.value}, </h1>`;
}

function checkUsuario() {
	if (nombreUsuario.value == '' || apellidoUsuario.value == '') {
		$('#alertaUsuario').fadeIn(2000).delay(2000).fadeOut(2000);
	} else {
		cantidadVehiculos();
	}
}

function checkCant() {
	if (cantVehElegido.value == 'elegir') {
		$('#alertaCantidad').fadeIn(2000).delay(2000).fadeOut(2000);
	} else {
		datosVehiculos();
	}
}

function checkVehiculos() {
	if (
		marcaVehiculo.value == 'selectmarca' ||
		modeloVehiculo.value == '' ||
		yearVehiculo.value == 'selectyear' ||
		valorVehiculo.value == '' ||
		valorVehiculo.value < 0
	) {
		$('#alertaDatosVeh').fadeIn(2000).delay(2000).fadeOut(2000);
	} else {
		cargarVehiculo();
	}
}

$('#dbtn').click(() => {
	$('#dbtn').fadeOut();
	$('#wbtn').fadeIn();

	$('body').css({ backgroundColor: 'rgb(12,12,12)' });
	$('#bienvenidaMsj').removeClass('text-dark').addClass('text-light');
	$('.datosUsuario').css({ backgroundColor: 'rgb(12,12,12)' });
	$('.carta').removeClass('text-dark').addClass('text-light');
	$('.carta2').removeClass('text-dark').addClass('text-light');
	$('.carta2').css({ backgroundColor: 'rgb(12,12,12)' });
	$('.cantVehiculos').css({ backgroundColor: 'rgb(12,12,12)' });
	$('.carta').css('box-shadow', '1px 1px 20px transparent');
	$('.carta2').css('box-shadow', '1px 1px 20px transparent');
	$('.carta3').removeClass('text-dark').addClass('text-light');
	$('.carta3').css({ backgroundColor: 'rgb(12,12,12)' });
	$('.carta3').css('box-shadow', '1px 1px 20px transparent');
	$('.datosVehiculos').css({ backgroundColor: 'rgb(12,12,12)' });
	$('.cartafinal').css({ backgroundColor: 'rgb(12,12,12)' });
	$('.cartafinal').css('box-shadow', '1px 1px 20px transparent');
	$('.cartafinal').removeClass('text-dark').addClass('text-light');
	$('.polizas').css({ backgroundColor: 'rgb(12,12,12)' });
	$('#sigVeh').removeClass('btn-dark').addClass('btn-light');
	$('#antVeh').removeClass('btn-dark').addClass('btn-light');
	$('#btnReiniciar').removeClass('text-dark').addClass('text-light');
});

$('#wbtn').click(() => {
	$('#wbtn').fadeOut();
	$('#dbtn').fadeIn();

	$('body').css({ backgroundColor: 'white' });
	$('#bienvenidaMsj').removeClass('text-light').addClass('text-dark');
	$('.datosUsuario').css({ backgroundColor: 'white' });
	$('.carta').removeClass('text-light').addClass('text-dark');
	$('.carta2').removeClass('text-light').addClass('text-dark');
	$('.carta').css('box-shadow', '1px 1px 20px rgb(235 235 235)');
	$('.carta2').css({ backgroundColor: 'white' });
	$('.carta2').css('box-shadow', '1px 1px 20px rgb(235 235 235');
	$('.carta3').css('box-shadow', '1px 1px 20px rgb(235 235 235');
	$('.carta3').css({ backgroundColor: 'white' });
	$('.carta3').removeClass('text-light').addClass('text-dark');
	$('.cantVehiculos').css({ backgroundColor: 'white' });
	$('.datosVehiculos').css({ backgroundColor: 'white' });
	$('.cartafinal').css({ backgroundColor: 'white' });
	$('.cartafinal').css('box-shadow', '1px 1px 20px rgb(235 235 235');
	$('.cartafinal').removeClass('text-light').addClass('text-dark');
	$('.polizas').css({ backgroundColor: 'white' });
	$('#sigVeh').removeClass('btn-light').addClass('btn-dark');
	$('#antVeh').removeClass('btn-light').addClass('btn-dark');
	$('#btnReiniciar').removeClass('text-light').addClass('text-dark');
});
