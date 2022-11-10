
//1. Exportamos las dependencias que necesitamos
const express = require('express');
const mysql = require('mysql2');

//2. Creo una variable para ejecutar las funciones de express
const app = express();

//3. Creo el puerto para recibir las peticiones o escuchar al cliente
const PORT = 3001;

// Conectamos a la Base de Datos
const conexion = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Chevy-1970'
})

conexion.connect((error)=>{
    if(error){
        console.log(`El error es: ${error}`);
    }else{
        console.log(`Conectado a la Base de Datos`);
    }
})

//5. Creo las respuestas al cliente
app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    res.send(`<h1>Bienvenidos a mi App </h1>`)
}); //select sql


// 6. Respuestas HTTP del servidor
/*
app.post(); //insert sql
app.update(); //update sql
app.delete(); //delete sql
*/

//6 Más respuestas al cliente
app.get('/home', (req, res) => {
    //console.log(req);
    console.log(req.url);
    console.log(req.method);
    res.send('Hiciste click en home');    
});

app.get('/datos', (req, res) =>{
    res.json({ 
        usuario: 'Berni',
        dni: 123456789,
        orden: false
    })
})

app.get('/index', (req, res) => {
    res.sendFile('index.html', { 
        root: __dirname + '/public'
    });
})

app.get('/productos', (req, res) => {
    res.sendFile('productos.html', { 
        root: __dirname + '/public'
    });
});

console.log(__dirname + '/public');

let contador = 0;

app.get('/contador', (req, res) =>{
    contador++;
    console.log(contador);
    res.send(`La cantidad de visitas a esta API es: ${contador}`)
})

//4. Llamo a la función que activa el servidor y lo tiene listo para peticiones
app.listen(PORT, () => {
    console.log(`Servidor trabajando en el Puerto ${PORT}`);
    console.log('Servidor trabajando en el Puerto ' + PORT);
    console.log('Servidor trabajando en el Puerto ', PORT);
});

