const EventEmitter= require('events');


const customEmitter = new EventEmitter();


// on -> listen for an event
customEmitter.on('response', (args)=>{
    console.log(`data received user ${args.username} with id: ${args.id}`);
});
 

// emit -> emit an event
customEmitter.emit('response', {username: 'john', id: "lfdohodfojlmcl"});

// customEmitter.on('response', ()=>{
//     console.log(`some other logic here`);
// });

