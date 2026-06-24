var express = require('express');
var mysql = require('mysql');
var cors = require('cors');

var app = express();

//Especifiacion de que usamos JSON
app.use(express.json());
//Especificacion de uso de CORS
app.use(cors());

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
            res.send(fila);
            //res.send(fila[0].descripcion);
        }
    });
});
app.get('/', function (req, res) {
    res.send('Ruta de inicio del servidor');
});


app.post('/api/articulos', (req, res) => {

    let data = {descripcion:req.body.descripcion,precio:req.body.precio,stock:req.body.stock};
    let sql = "Insert into articulos SET ?";
    connection.query(sql,data,function (error, results) {
        if (error) {
            throw error; 
        }else{
            res.send(results);
      
        }
    });
});

//METODO EDITAR (UPDATE) ARTICULO PUT

app.put('/api/articulos/:id', (req, res) => {
    let id = req.params.id;
    let descripcion = req.body.descripcion;
    let precio = req.body.precio;
    let stock = req.body.stock;
    let sql = "UPDATE articulos set descrpcion =  ?, precio = ?, stock = ? WHERE id = ?";
    connection.query(sql, [descripcion, precio, stock, id], function (error, results) {
        if (error) {
            throw error; 
        }else{
            res.send(results);
        }
    });

});

//METODO ELIMINAR ARTICULO DELETE
app.delete('/api/articulos/:id', (req, res) => {
   connection.query ("DELETE FROM articulos WHERE id = ?",[req.params.id],function (error, filas) {

        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});
























const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
    console.log(`Servidor operativo en el puerto ${puerto} ^_^`);
});
