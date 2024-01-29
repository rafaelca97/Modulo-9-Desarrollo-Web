const express = require('express');
const app = express();
const Car = require('../models/car');

app.get(`/`, async (req, res) => {
    try {
        const cars = await Car.find({});
        res.status(200).json({
            message: 'ok',
            cars
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            message: 'Database error'
        });
    }
});

app.post('/', async (req, res) => {
    try {
        const car = new Car({
            marca: req.body.marca,
            modelo: req.body.modelo,
            año: req.body.año
        });

        const carSaved = await car.save();
        console.log('Coche guardado correctamente:', carSaved);
        res.status(200).json({
            message: 'Ok',
            car: carSaved
        });
    } catch (err) {
        console.error('Error en la base de datos:', err);
        res.status(500).json({
            message: 'Error en la base de datos'
        });
    }
});


module.exports = app;
