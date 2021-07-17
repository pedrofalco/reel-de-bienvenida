//SERVER

const express = require('express'); //importar express

const app = express(); //crear app

const server = app.listen(8000, () => console.log('listening at 8000')); // abrir un escuchador y hacer un call back function
app.use(express.static('public')); //uso express para hostear archivos estaticos
app.use(express.json({
	limit: '1mb'
})); //uso express para analizar informacion que entra del cliente