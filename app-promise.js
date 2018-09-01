
const yargs = require('yargs');
const axios = require('axios');

// const geocode = require('./geocode/geocode');
// const weather = require('./weather/weather');
const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'address to fetch weather for',
            string:true
        }
    })
    .help()
    .alias('help','h')
    .argv;

    var encodedAddress = encodeURIComponent(argv.address);
    var geocodeURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

    axios.get(geocodeURL).then((response) =>{
        if(response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find the address');
        }
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var  weatherUrl = `https://api.darksky.net/forecast/da0f2bb1f2eee88cdff46139a203ead2/${lat},${lng}`;
        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl);
    }).then((response) => {
        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`Its currently ${temperature}. It feels like ${apparentTemperature}.`);
    }).catch((e) => {
        if(e.code === 'ENOTFOUND'){
            console.log('Unable to connect to API ');
        }
    });