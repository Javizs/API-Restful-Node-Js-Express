var express = require('express');
var mysql = require('mysql');


var app = express();

app.get('/', function (req, res) {
    res.send('Ruta de inicio del servidor');
});

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
    console.log(`Servidor operativo en el puerto ${puerto} ^_^`);
});
