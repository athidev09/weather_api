const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true},
    
    (error, response, body) => { 
        if(error){
            callback('Unable to connect to google services');    
        }else if(body.status === 'ZERO_RESULTS'){
            console.log('unable to find the address');
        }else if(body.status === 'OK') {
            callback(undefined, {
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitutude:body.results[0].geometry.location.lng
            });
        }
    });
};
module.exports.geocodeAddress = geocodeAddress;