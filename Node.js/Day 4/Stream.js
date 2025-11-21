const {Readable,Writable} = require('stream');

const ReadableStream = new Readable({
    read(){},
})


const writableStream = new Writable({
    write(){
    
    }
})







ReadableStream.on('data',(chunk)=>{

console.log("Chunk", chunk.toString())

writableStream.write(chunk)

})


ReadableStream.push("Hello Pankaj Bhahi ")