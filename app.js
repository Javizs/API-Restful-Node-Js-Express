var express = require('express');
var mysql = require('mysql');


var app = express();
// Configuración de la conexión a la base de datos MySQL
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'articulosbd'
});
// Conexión a la base de datos
connection.connect(function (error) {
    if (error) {
        throw error;
    }else {
        console.log('Conexión exitosa a la base de datos MySQL :D');
    }
});

//METODO GET (MOSTRAR ARTICULOS)
 app.get('/api/articulos', (req, res) => {
    connection.query('SELECT * FROM articulos', (error, filas) => {
        if (error) {
            throw error; 
        }else{
            res.send(filas);
        }
    });
});
//METODO GET (MOSTRAR un ARTICULO)
 app.get('/api/articulos/:id', (req, res) => {
    connection.query('SELECT * FROM articulos WHERE id=?',[req.params.id], (error, fila) => {
        if (error) {
            throw error; 
        }else{
            //res.send(fila[0]);
            res.send(fila[0].descripcion);
        }
    });
});
app.get('/', function (req, res) {
    res.send('Ruta de inicio del servidor');
});

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
    console.log(`Servidor operativo en el puerto ${puerto} ^_^`);
});
