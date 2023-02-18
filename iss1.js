// Spotter 1

// const request = require('request');

// /**
//  * Makes a single API request to retrieve the user's IP address.
//  * Input:
//  *   - A callback (to pass back an error or the IP string)
//  * Returns (via Callback):
//  *   - An error, if any (nullable)
//  *   - The IP address as a string (null if error). Example: "162.245.144.188"
//  */
// const fetchMyIP = function(callback) {
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     if (error) return callback(error, null);

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
//       return;
//     }

//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };

// module.exports = { fetchMyIP };

// Spotter 2

//   inside the request callback ...
//   error can be set if invalid domain, user is offline, etc.
// const fetchCoordsByIP = function (ip, callback) {  // Define the fetchCoordsByIP function. It should take in two arguments: ip (string) and callback 
//   request(`http://ipwho.is/${ip}`, (error, response, body) => {
//   if (error) {
//      callback(error, null);
//      return;
//     }
//  parse the returned body so we can check its information
//   const parseBody = JSON.parse(body);

  // if (!parsedBody.success) {
  //   const message = 'Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}';
  //   callback(Error(message), null);
  //   return;
  // }
  //   const { latitude, longitude } = parsedBody;

  //   callback(null, {latitude, longitude});
  // });
  // };

    // Don't need to export the other function since we are not testing it right now.
    // module.exports = { fetchCoordsByIP };

//  Spotter 3

// const fetchISSFlyOverTimes = function(coords, callback) {
//   const url = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

//   request(url, (error, response, body) => {
//   if (error) {
//     callback(error, null)
//     return;
//   }

//   if (Response.statusCode !== 200) {
//     callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
//     return;
//   }
//   const passes = JSON.parse(body).Response;
//   callback(null, passes);
// });
// };

// module.exports = { fetchISSFlyOverTimes };