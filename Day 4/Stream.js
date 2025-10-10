
const http = require('http');

const fs = require('fs');

const server = http.createServer((req , res)=>{

//? --------1----------
//! downloading file bad way ❌


// const file = fs.readFileSync("file.txt")
// res.end(file)

//* Downloading file in good way (steam)
/* 
const ReadableStream = fs.createReadStream("file.txt")

ReadableStream.pipe(res)
res.end() */



//? -------2-------
//! Copy file in a bad way 
/* 
const file = fs.readFileSync('file.txt')
fs.writeFileSync("output.txt",file)
res.end() */


//* Copy file in a Good way 


const readStream = fs.createReadStream('file.txt');
const writeStream = fs.createWriteStream('output.txt');


readStream.on('data',(chunk)=>{
writeStream.write(chunk)

})
















})



server.listen(3000,()=>{
    console.log("server in running on the port in 3000")
})
