$('.bienvenida').show();
$('#bienvenidaMsj').hide().delay(2000).fadeIn(2000);
$('#bienvenidaBtn').hide().delay(3000).fadeIn(3000);

$('#dmodebtn').delay(1000).fadeIn(3000).delay(2000).fadeOut(1000);

$('#dbtn').click(() => {
	$('#dmodebtn').hide();
});

function datosUsuario() {
	$('.bienvenida').fadeOut(2000);
	$('#datosUsuarios').delay(2000).fadeIn('slow');

	let circulo1 = document.getElementById('circulo1');
	circulo1.classList.remove('dotted');
	let circulo2 = document.getElementById('circulo2');
	circulo2.classList.add('dotted');
}

function cantidadVehiculos() {
	$('#datosUsuarios').fadeOut(2000);
	$('#cantVehiculos').delay(2000).fadeIn('slow');

	let circulo2 = document.getElementById('circulo2');
	circulo2.classList.remove('dotted');
	let circulo3 = document.getElementById('circulo3');
	circulo3.classList.add('dotted');
}

function volverUsuario() {
	$('#cantVehiculos').fadeOut(2000);
	$('#datosUsuarios').delay(2000).fadeIn('slow');

	let circulo3 = document.getElementById('circulo3');
	circulo3.classList.remove('dotted');
	let circulo2 = document.getElementById('circulo2');
	circulo2.classList.add('dotted');
}

function datosVehiculos() {
	$('#cantVehiculos').fadeOut(2000);
	$('#datosVehiculos').delay(2000).fadeIn('slow');

	let circulo3 = document.getElementById('circulo3');
	circulo3.classList.remove('dotted');
	let circulo4 = document.getElementById('circulo4');
	circulo4.classList.add('dotted');
	cantidadElegida();
}

function volverCantidad() {
	$('#cargarVehiculo').delay(3000).attr('disabled', false).removeClass('btn-light').addClass('btn-success');
	$('#marcaVehiculo').delay(3000).val('selectmarca');
	$('#modeloVehiculo').delay(3000).val('');
	$('#vehiculoYear').delay(3000).val('selectyear');
	$('#valorVehiculo').delay(3000).val('');
	$('#datosVehiculos').fadeOut(2000);
	$('#cantVehiculos').delay(2000).fadeIn('slow');

	let circulo4 = document.getElementById('circulo4');
	circulo4.classList.remove('dotted');
	let circulo3 = document.getElementById('circulo3');
	circulo3.classList.add('dotted');
	limpiarArray();
	reset();
}

function finalizar() {
	check();
	mostrarValores();
	mostrarSig();
}

function volverVeh() {
	$('#polizas').fadeOut(2000);
	$('#datosVehiculos').delay(2000).fadeIn('slow');
	let circulo4 = document.getElementById('circulo4');
	circulo4.classList.add('dotted');
	let circulo5 = document.getElementById('circulo5');
	circulo5.classList.remove('dotted');

	let btnSig = document.getElementById('sigVeh');
	btnSig.classList.remove('visible');
}
function sigVeh() {
	mostrarAnt();
}
function antVeh() {
	quitarAnt();
}

function saludar() {
	let circulo = document.getElementById('circulos');
	circulo.classList.remove('visible');

	$('#polizas').fadeOut(2000);
	$('#mensajeCliente').delay(2000).fadeIn('slow');
	cargarNombre();
}
