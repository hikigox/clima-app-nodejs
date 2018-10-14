const axios = require('axios');


const getLugarLatLng = async(direccion) => {


    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if (resp.data.status === `ZERO_RESULTS`) {
        throw new Error(`Direccion no encontrada`);

    } else {
        let location = resp.data.results[0];
        let coors = location.geometry.location;
        resp = {
            direccion: location.formatted_address,
            lat: coors.lat,
            lng: coors.lng,

        }
        return resp;

    }

}

module.exports = {
    getLugarLatLng

}