class CarForm {
    constructor() {
        this.marca = '';
        this.modelo = '';
        this.año = '';
    }

    setMarca(marca) {
        this.marca = marca;
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }

    setAño(año) {
        this.año = año;
    }

    getData() {
        return {
            marca: this.marca,
            modelo: this.modelo,
            año: this.año
        };
    }
}

async function submitForm() {
    const carForm = new CarForm();

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const año = document.getElementById("año").value;

    if (!marca || !modelo || !año) {
        console.error('Por favor, completa todos los campos del formulario.');
        return;
    }

    carForm.setMarca(marca);
    carForm.setModelo(modelo);
    carForm.setAño(año);

    const data = carForm.getData();

    try {
        const response = await fetch('http://localhost:3000/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Coche agregado correctamente');
            fetchCarList();
        } else {
            console.error('Error al agregar el coche');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
    event.preventDefault();
}


/*document.addEventListener("DOMContentLoaded", () => {
    fetchCarList();
});*/
