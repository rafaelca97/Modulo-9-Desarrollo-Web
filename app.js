const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const port = 3000;

const mongoURI = 'mongodb://localhost:27017/Cars';
const options = {};

app.use(cors());
mongoose.connect(mongoURI, options)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err));

const cars = require('./js/routes/cars');
app.use(express.json());
app.use('/cars', cars);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
