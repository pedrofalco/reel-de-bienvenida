const removeAccents = (str) => {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function paginas() {

	let input = removeAccents(document.getElementById('input').value.toLowerCase());
	// console.log(input)


	if (input == 'nube' || input == 'nubes') {

		window.location.href = "../html/nube.html";

	} else if (input == 'generador de nubes' || input == 'generador de nube' || input == 'generador') {

		window.location.href = "../html/generador-nubes.html";

	} else if (input == 'clasificacion de nubes' || input == 'clasificacion de nube' || input == 'clasificacion') {

		window.location.href = "../html/clasificacion-nubes.html";

	} else if (input === 'twitch') {

		window.location.href = "../html/twitch.html";

	} else if (input === 'sentido') {

		window.location.href = "../html/sentido-nubes.html";

	} else {

		console.log('error');
	}

	input = ''

	return false;
}