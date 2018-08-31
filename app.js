
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
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
//     geocode.geocodeAddress(argv.address,(errorMessage, results) => {
//         if (errorMessage){
//             console.log(errorMessage);
//         }else {
//             console.log(JSON.stringify(results, undefined , 2))
//         }
//     });
    // const request = require('request');
    // request({
    //     url:'https://api.darksky.net/forecast/da0f2bb1f2eee88cdff46139a203ead2/12.9727878,-77.60824629999999',
    //     json : true
    // }, (error, response,body)=>{
    //     if(error){
    //         console.log('Unable to connect to forecast.io server');
    //     }else if(response.statusCode === 400){
    //         console.log('unable to fetch weather');
    //     }else if(!error && response.statusCode === 200){
    //         console.log(body.currently.temperature);
    //     }else{
    //         console.log('OOPS!!!! sorry something went wrong ');
    //     }
    // });
    //lat,long,call
geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
    if(errorMessage){
        console.log(errorMessage);
    }else {
        console.log(results.address);
        weather.getWeather(results.latitude,results.longitude, (errorMessage,weatherResults) =>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemprature}`);
            }
        });
    }
});






