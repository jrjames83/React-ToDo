var moment = require('moment');

// Current time
//console.log(moment().format()); // 2016-09-17T19:48:16-06:00

// Unix TimeStamps - Since 1/1/70 at 12am  which is 0
// Unix TimeStamps - Since 1/1/70 at 12:01am  which is 60

var now = moment();


// Will store the unix time for the todo, can always convert it
//console.log('current time: ', now.unix())

var timestamp = 1474165203;

// How to convert it?

var currentMoment = moment.unix(timestamp)
console.log(currentMoment.format("MMM, D, Y @ h:ma"))

//console.log(moment().unix())