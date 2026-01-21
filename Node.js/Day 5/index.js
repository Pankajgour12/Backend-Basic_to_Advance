


const crypto = require('crypto');

// 1. randomBytes 
const randomValues = crypto.randomBytes(100)

console.log(randomValues.toString('hex'));


// 2. createHash

const hashvalue = crypto.createHash('sha256').update('pankaj').digest('hex')

const inputValue = 'pankaj'

const matchValue = crypto.createHash('sha256').update(inputValue).digest('hex')


if(hashvalue === matchValue){
    console.log("You Can Login")
}
else{
    console.log("Something Went Wrong")
}

// THEY WANT TO SAY 

