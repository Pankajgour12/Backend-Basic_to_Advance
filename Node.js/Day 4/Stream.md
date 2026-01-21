# ⚡ Node.js Streams — Short & Smart Interview Answer

> **“Streams in Node.js are used to handle data efficiently in chunks rather than loading it all at once.  
> They make data processing faster and memory-efficient, especially for large files or continuous data like video streaming.”**

---


### 🔹 Why Streams?

> Because they allow **non-blocking, real-time data flow**, saving both **time and memory**.

---

### 🔹 Types of Streams

1. **Readable** – used to read data (e.g., `fs.createReadStream()`)
2. **Writable** – used to write data (e.g., `fs.createWriteStream()`)
3. **Duplex** – can read and write (e.g., `net.Socket()`)
4. **Transform** – can modify data while reading/writing (e.g., `zlib.createGzip()`)

---

### 🔹 Real-World Example

> Reading a large video file from disk and sending it to a client **bit-by-bit**,  
> without loading the entire file in memory — like how **YouTube or Netflix** streams videos.

---

### 🔹 One-Line Summary (Remember for life 😎)

> **“Stream means processing data _as it flows_, not after it finishes.”**

from pathlib import Path

# Define Markdown content for Node.js Streams Notes
md_content = """# 🌊 Node.js Streams — Complete Interview Notes

## 📘 What is a Stream in Node.js?
A **Stream** in Node.js is a continuous flow of data that can be read or written **piece by piece (chunk by chunk)** instead of reading or writing the whole data at once.

> Streams make Node.js faster, memory-efficient, and ideal for large-scale data processing.

---

## 🧠 Why Streams are Needed?
If you try to read a 1GB file using `fs.readFile()`, the entire file loads into memory, which may crash your system.
With **Streams**, data is processed in chunks — meaning:
- Less memory usage
- Faster performance
- Non-blocking I/O

---

## ⚙️ Types of Streams

| Type | Description | Example |
|------|--------------|----------|
| **Readable** | Used to read data from a source | `fs.createReadStream()` |
| **Writable** | Used to write data to a destination | `fs.createWriteStream()` |
| **Duplex** | Can read and write both | `net.Socket` |
| **Transform** | Duplex stream that can modify data | `zlib.createGzip()` |

---

## 🧩 Stream Events and Methods

### 🔹 Events
| Event | Description |
|--------|--------------|
| `data` | Fired when a chunk of data is available |
| `end` | Fired when no more data is left |
| `error` | Fired when an error occurs |
| `finish` | Fired when all data is written |

### 🔹 Methods
| Method | Description |
|--------|--------------|
| `pipe()` | Connect readable → writable |
| `read()` | Reads data from buffer |
| `write(chunk)` | Writes a chunk of data |
| `end()` | Closes the writable stream |
| `on(event, callback)` | Attaches event listener |

---

## 🧱 Example 1: Reading File with Stream

```js
const fs = require('fs');
const readStream = fs.createReadStream('input.txt', 'utf8');

readStream.on('data', (chunk) => console.log('Chunk:', chunk));
readStream.on('end', () => console.log('No more data.'));
readStream.on('error', (err) => console.error('Error:', err));
