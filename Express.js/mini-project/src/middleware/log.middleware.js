import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

//* Handle ES Modules __dirname and __filename 
const __filename = fileURLToPath(import.meta.url);  
const __dirname = path.dirname(__filename);


//* Middleware to log all requests

const LogMiddleware = (req, res, next) => {

    const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`
    const logFile = path.join(__dirname, '../logs/request.log');
    fs.appendFile(logFile, log, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
    next();

}

export default LogMiddleware;



