const path = require('path') // preexisting modul for finding dirnames, filenames and paths
const os = require('os')//os module for information of the device
const fs = require('fs')// file sistem module
const EventEmiter = require('events') /// this is module that is A CLASS
const emitter = new EventEmiter() // this is an object that is used in apps
const logger = require('./loger') // implementing selfcreated modules\
const http = require('http')



/// this is my try on emmiters, better done in other files with class
logger.emitter.on('code for logger', (e) => {
    console.log(e)
})




let pathObj = path.parse(__filename)

logger.log('write something') // writeinh something with method from created module

logger.log(pathObj)

logger.log(`Total memory of this computer is ${os.totalmem()}, free memory is  ${os.freemem()}`) // using some methods of os module


////////////////////////////////////    Reading of the files in wanted dir

const files = fs.readdirSync('./')
/////// this is synchronus and blocks the tread
logger.log(files)

//////////////////////////////////
fs.readdir('./', (err, readfiles) => {
    if (err) {
        console.log(err)                         /// This is asynch and how to use it
    } else {
        console.log(`Result`, readfiles)
    }
})

// registrating an listener  /////////////// Listerner MUST BE ADDED BEFORE EMITTER

emitter.on('message Logged!', arg => {                 //arg or e od eventArg  === data that has been sent
    console.log(arg)
})

/// emiterr , it is emitting and makeing a noice and signaling that an event is happening

emitter.emit('message Logged!', { id: 1, url: 'http://' })   /*first argument is what is emitting for (registrator to register) and secod is
                                                              data that you want to send*/


const server = http.createServer((req,res)=> {
     if(req ='/'){
        res.write('hello world')
        res.end()
     }
})

server.listen(3000)
console.log('listening on 3000')