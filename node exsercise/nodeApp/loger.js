const url = 'dasoidoasuds'

const EventEmiter = require('events') /// this is module that is A CLASS
const emitter = new EventEmiter() // this is an object that is used in apps

function log (message) {
    console.log(message)
    emitter.emit('code for logger','MADE BY LOGGER MODUL')
}


module.exports.log = log;
module.exports.emitter = emitter
