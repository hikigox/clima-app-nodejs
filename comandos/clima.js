const axion = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axion.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f1f526948d8f6e007159bdfeef374edd`);
    if (resp.data.main.temp === null) {
        throw new Error(`No se encontro`);


    } else {
        return resp.data.main.temp;

    }




}

module.exports = {
    getClima
}