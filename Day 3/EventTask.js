//! OBJECTIVE 
//* CREATE A PROGRAM USING NODE JS EVENTMITTER THAT:

//? LISTENS FOR MULTIPLE TYPES OF USER EVENTS (E.G., 'login', 'logout', 'Purchase') AND PROFILE UPDATES..
//? TRACKS HOW MANY TIMES EACH EVENT IS EMITTED.
//? LOGS A SUMMARY OF EVENTS OCCURRED A SPECIAL SUMMARY EVENT TRIGGERED BY USER.



//! REQUIREMENTS


// ? create at least four custom events (e.g., 'login', 'logout', 'purchase', 'profileUpdate').
// ? emit these events multiple times with relevant data (e.g., user info, timestamps).
// ? track and store the count of each event type.
// ? difine a summary event that, that logs a details report of how many times each event triggered.










const EventEmitter= require('events');
const fs = require('fs');
const { json } = require('stream/consumers');



const userEmitter = new EventEmitter();

// Event tracking
let eventCounts = {
    LOGIN: 0,
    LOGOUT: 0,
    PURCHASE: 0,
    PROFILE_UPDATE: 0
};
// Event Tracking file


// Load existing event counts from file if exists
const logFile = 'event_summary.json';
if (fs.existsSync(logFile)) {
    const data = fs.readFileSync(logFile , 'utf-8');
    Object.assign(eventCounts , JSON.parse(data));
}


// Function to persist counts to file

function saveCounts(){
fs.writeFileSync(logFile , JSON.stringify(eventCounts ,null , 2))

}




//* Event Creating 
userEmitter.on('login', (user) => {
    eventCounts.LOGIN++;
    console.log(`${user} logged in ✅.`);
saveCounts()
});

userEmitter.on('logout', (user) => {
    eventCounts.LOGOUT++;
    console.log(`${user} logged out ❌.`);
    saveCounts()
}); 

userEmitter.on('purchase', (user, item) => {
    eventCounts.PURCHASE++;
    console.log(`${user} purchased ${item}.`);

    saveCounts()
});

userEmitter.on('profileUpdate', (user) => {
    eventCounts.PROFILE_UPDATE++;
    console.log(`${user} updated their profile.`);
    saveCounts()
});


userEmitter.on('summary', () => {
    console.log('Event Summary:');
    console.log(eventCounts);
    fs.writeFileSync(logFile , JSON.stringify(eventCounts , null , 2));
    console.log(`Event summary written to ${logFile}`);
    saveCounts()
});

//* Emitting Events
userEmitter.emit('login', 'Pankaj Gour');
userEmitter.emit('purchase', 'Pankaj', 'Laptop');
userEmitter.emit('profileUpdate', 'Pankaj');
userEmitter.emit('purchase', 'Pankaj', 'Smartphone');
userEmitter.emit('profileUpdate', 'Alice');
userEmitter.emit('logout', 'Alice');
userEmitter.emit('summary')


