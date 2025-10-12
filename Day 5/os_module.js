// Importing os module
const os = require('os');

// ---------------------------
// 1. OS Info Methods
// ---------------------------

// Returns CPU architecture (x64, arm, etc.)
console.log('Architecture:', os.arch());

// Returns platform (win32, linux, darwin)
console.log('Platform:', os.platform());

// Returns OS name
console.log('OS Name:', os.type());

// Returns OS release/version
console.log('OS Release:', os.release());

// Returns OS uptime in seconds
console.log('Uptime (s):', os.uptime());

// Returns hostname of the system
console.log('Hostname:', os.hostname());

// Returns full OS version string
console.log('OS Version:', os.version());

// ---------------------------
// 2. CPU & Memory Methods
// ---------------------------

// Returns an array of CPU info objects
console.log('CPU Info:', os.cpus());

// Returns total system memory in bytes
console.log('Total Memory:', os.totalmem());

// Returns free system memory in bytes
console.log('Free Memory:', os.freemem());

// Returns system load average (Linux/macOS only)
console.log('Load Average (1,5,15 min):', os.loadavg());

// Returns system endianness ('LE' or 'BE')
console.log('Endianness:', os.endianness());

// ---------------------------
// 3. User & Network Methods
// ---------------------------

// Returns current user information
console.log('User Info:', os.userInfo());

// Returns network interfaces object
console.log('Network Interfaces:', os.networkInterfaces());

// ---------------------------
// 4. Path Methods
// ---------------------------

// Returns home directory of current user
console.log('Home Directory:', os.homedir());

// Returns OS temporary directory
console.log('Temp Directory:', os.tmpdir());

// ---------------------------
// 5. Constants
// ---------------------------

// OS signals
console.log('OS Signals:', os.constants.signals);

// OS error codes
console.log('OS Error Codes:', os.constants.errno);
