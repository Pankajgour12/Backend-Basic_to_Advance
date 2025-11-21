# 🧠 Node.js OS Module – Interview Q&A (Short Notes)

---

### **1. What is the OS module in Node.js?**
- It's a **core module** that provides information about the **system** (OS type, CPU, memory, network, etc.)  
- No installation needed — built-in with Node.js.
2. Why is the OS module used?
-To get system-level info for monitoring or logging.

Helps in building cross-platform Node.js apps.
```js
const os = require("os");
```


```js
os.arch(); // e.g., 'x64'
```



| Method                   | Description              |
| ------------------------ | ------------------------ |
| `os.arch()`              | Returns CPU architecture |
| `os.platform()`          | Returns OS platform      |
| `os.type()`              | Returns OS name          |
| `os.release()`           | OS version               |
| `os.uptime()`            | System uptime            |
| `os.totalmem()`          | Total memory             |
| `os.freemem()`           | Free memory              |
| `os.hostname()`          | Hostname                 |
| `os.homedir()`           | Home directory           |
| `os.userInfo()`          | Current user info        |
| `os.networkInterfaces()` | Network details          |
| `os.cpus()`              | CPU core details         |
| `os.endianness()`        | CPU byte order           |
3. How to get CPU architecture?
js


###


3. How to get CPU architecture?
```js

os.arch(); // e.g., 'x64'
```
4. How to get Operating System platform and type?
```js
Copy code
os.platform(); // 'win32', 'linux', 'darwin'
os.type();  
```
   // 'Windows_NT', 'Linux'
5. How to get system uptime?
js
Copy code
os.uptime(); // in seconds
💡 Convert to hours:

js
Copy code
(os.uptime() / 3600).toFixed(2);
6. How to get total and free memory?
js
Copy code
os.totalmem(); // total memory in bytes
os.freemem();  // free memory in bytes
💡 Used for memory monitoring.

7. How to check system hostname?
js
Copy code
os.hostname(); // system name
8. How to get current logged-in user info?
js
Copy code
os.userInfo();
9. How to get home directory path?
js
Copy code
os.homedir();
10. How to get temporary directory path?
js
Copy code
os.tmpdir();
11. How to get network interface details?
js
Copy code
os.networkInterfaces();
💡 You can find system’s IP address from this.

12. How to get CPU details?
js
Copy code
os.cpus();
Returns an array of CPU core info (model, speed, etc.)

Used for performance monitoring or clustering.

13. What does os.endianness() return?
CPU byte order → 'BE' (Big Endian) or 'LE' (Little Endian)

14. Difference between os.type() and os.platform()
os.type()	os.platform()
Returns full OS name	Returns short platform code
e.g., 'Windows_NT'	e.g., 'win32'

15. How can OS module help in scaling Node.js apps?
Use os.cpus().length to get CPU cores.

Helps decide number of worker processes for clustering or PM2 setup.

16. Real Use Case Question
Q: “How can you monitor a Node.js server’s health using the OS module?”
A: By checking:

os.uptime() → server running time

os.freemem() and os.totalmem() → memory usage

os.cpus() → CPU load info

17. Common Tricky Question
Q: “Is OS module synchronous or asynchronous?”
A: All methods in os module are synchronous, because they just read system info quickly.

18. Common Output-Based Question
Q: What will be output of:

js
Copy code
console.log(os.platform(), os.arch());
A: Example →
win32 x64

19. How to get OS version?
js
Copy code
os.release();
20. Example Mini Script (for quick demo)
js
Copy code
console.log("OS:", os.type());
console.log("Platform:", os.platform());
console.log("CPU Cores:", os.cpus().length);
console.log("Free Memory:", os.freemem());
console.log("Uptime (hr):", (os.uptime()/3600).toFixed(2));