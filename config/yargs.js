const descripcion = {
    descripcion: {
        alias: 'd',
        demand: true
    }
}

const completado = {
    completado: {
        alias: 'c',
        default: true
    }
}


const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza una tarea por hacer', { descripcion, completado })
    .command('listar', 'Lista todas las tareas por hacer', { completado })
    .command('borrar', 'Elimina una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}