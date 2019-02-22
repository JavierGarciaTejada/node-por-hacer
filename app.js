const { argv } = require('./config/yargs');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let tareas = porHacer.getListado(argv.completado);
        for (let tarea of tareas) {
            console.log('======== Por hacer ========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==========================='.green);
        }
        break;

    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;

    case 'borrar':
        let eliminar = porHacer.eliminar(argv.descripcion);
        console.log(eliminar);
        break;

    default:
        console.log("Comando no reconocido");

}