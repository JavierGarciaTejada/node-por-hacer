const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    let file = 'db/data.json';
    fs.writeFile(file, data, err => {
        if (err) throw new Error(`No fue posible grabar en ${file}`);
    });

}

const cargaDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargaDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;

}

const getListado = (completado) => {

    cargaDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargaDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const eliminar = (descripcion) => {

    cargaDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        //let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}