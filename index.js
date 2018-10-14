const axios = require('./comandos/lugar');
const clima = require('./comandos/clima');

const argv = require('./config/yargs').argv;

console.log(argv.direccion);

let getInfo = async(direccion) => {

    try {
        let getLugar = await axios.getLugarLatLng(direccion);

        let getClima = await clima.getClima(getLugar.lat, getLugar.lng);


        return `El Clima en ${getLugar.direccion} es de ${getClima}`;

    } catch (error) {
        return `No se pudo encontrar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));