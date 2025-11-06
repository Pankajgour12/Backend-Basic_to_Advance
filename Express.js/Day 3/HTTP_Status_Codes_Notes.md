# 🌐 HTTP Status Codes — Complete Professional Notes (With Interview Insights)

---

## 🔹 1. What Are HTTP Status Codes?

🧠 **Definition:**
> HTTP Status Codes are 3-digit numbers sent by the server in response to a client’s request, indicating the result of that request.

They act like a **response message** from the server, telling the client what happened:
✅ Success?  
⚠️ Error?  
🔁 Redirected?  
💥 Or server problem?

---

## 🔹 2. Purpose of Status Codes

HTTP Status Codes help both **developers** and **browsers** understand:
- Whether the request succeeded or failed  
- Why it failed (client-side or server-side issue)  
- What action the client should take next  

🧩 Example:
```
HTTP/1.1 404 Not Found
Content-Type: text/html
```

Here:  
👉 `404` → status code  
👉 `Not Found` → status message  

---

## 🔹 3. Structure of HTTP Response

Each HTTP response has 3 key parts:

```
1️⃣ Status Line   →  e.g., HTTP/1.1 200 OK  
2️⃣ Headers       →  e.g., Content-Type: application/json  
3️⃣ Body          →  Actual response data
```

---

## 🔹 4. Categories of HTTP Status Codes

| Category | Range | Meaning | Responsibility |
|-----------|--------|----------|----------------|
| **1xx** | 100–199 | Informational | Server acknowledges request |
| **2xx** | 200–299 | Success | Request completed successfully |
| **3xx** | 300–399 | Redirection | Further action required |
| **4xx** | 400–499 | Client Error | Request issue from client side |
| **5xx** | 500–599 | Server Error | Problem from server side |

---

## 🔹 5. 1xx — Informational Responses

Used when the request is being processed, but not complete yet.

| Code | Meaning | Description |
|------|----------|-------------|
| **100 Continue** | Request received | Client can continue sending data |
| **101 Switching Protocols** | Protocol changed | Used in WebSocket handshake |
| **102 Processing** | Request accepted | Still being processed (WebDAV) |

🧠 Rarely used in Express apps, but important conceptually.

---

## 🔹 6. 2xx — Successful Responses

Used when the request was received, understood, and processed correctly.

| Code | Meaning | Description |
|------|----------|-------------|
| **200 OK** | Success | Standard success response |
| **201 Created** | Resource created | Used after POST request |
| **202 Accepted** | Accepted for processing | But not completed yet |
| **204 No Content** | Success but no data | Typically used after DELETE |
| **206 Partial Content** | Partial data | Used for range requests (videos) |

🧩 Example in Express:
```js
res.status(201).json({ message: 'User created successfully' });
```

---

## 🔹 7. 3xx — Redirection Responses

Used when the client must take additional action (like follow another URL).

| Code | Meaning | Description |
|------|----------|-------------|
| **301 Moved Permanently** | URL changed forever | Redirect to a new URL |
| **302 Found** | Temporary redirect | Resource temporarily moved |
| **304 Not Modified** | Cache response | Client can use cached data |
| **307 Temporary Redirect** | Redirect preserving method | POST remains POST |
| **308 Permanent Redirect** | Permanent redirect preserving method |

🧩 Example:
```js
res.redirect(301, 'https://newsite.com');
```

---

## 🔹 8. 4xx — Client Error Responses

Used when there’s a **problem in the request** sent by the client.

| Code | Meaning | Description |
|------|----------|-------------|
| **400 Bad Request** | Invalid input | Wrong syntax or data |
| **401 Unauthorized** | No valid credentials | Login/token missing |
| **403 Forbidden** | Access denied | Authenticated but not allowed |
| **404 Not Found** | Resource not found | Wrong endpoint or missing data |
| **405 Method Not Allowed** | Invalid HTTP method | e.g., POST on GET-only route |
| **408 Request Timeout** | Client took too long | Server closed connection |
| **409 Conflict** | Duplicate resource | Conflict in data (like same email) |
| **429 Too Many Requests** | Rate limit exceeded | Too many API calls |

🧩 Example:
```js
res.status(404).json({ error: 'User not found' });
```

---

## 🔹 9. 5xx — Server Error Responses

Used when the server fails to fulfill a valid request due to internal problems.

| Code | Meaning | Description |
|------|----------|-------------|
| **500 Internal Server Error** | Generic server error | Unexpected crash or failure |
| **501 Not Implemented** | Feature not supported | Endpoint not coded yet |
| **502 Bad Gateway** | Invalid response from upstream server | Proxy issue |
| **503 Service Unavailable** | Server temporarily overloaded | Maintenance mode |
| **504 Gateway Timeout** | Upstream server didn’t respond | Connection timeout |

🧩 Example:
```js
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});
```

---

## 🔹 10. Common Express Examples (All Categories)

```js
// ✅ 200 - OK
app.get('/success', (req, res) => {
  res.status(200).send('Request Successful');
});

// ✅ 201 - Created
app.post('/users', (req, res) => {
  res.status(201).json({ message: 'User created' });
});

// ⚠️ 400 - Bad Request
app.post('/register', (req, res) => {
  if (!req.body.name) return res.status(400).send('Name is required');
  res.send('Registered Successfully');
});

// 🚫 403 - Forbidden
app.get('/admin', (req, res) => {
  res.status(403).send('Access Denied');
});

// ❌ 404 - Not Found
app.get('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

// 💥 500 - Internal Server Error
app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong');
});
```

---

## 🔹 11. How to Choose Correct Status Code (Interview Logic)

| Situation | Best Status Code | Reason |
|------------|------------------|--------|
| Successful GET request | 200 | Data fetched successfully |
| POST request creates data | 201 | Resource created |
| Resource deleted | 204 | No content to return |
| Invalid input | 400 | Client-side issue |
| Missing token | 401 | Unauthorized |
| No permission | 403 | Forbidden |
| Resource missing | 404 | Not found |
| Duplicate data | 409 | Conflict |
| Server crash | 500 | Internal error |
| Maintenance | 503 | Temporarily down |

---

## 🔹 12. Real-Life Example: Login API

```js
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: 'Email and password required' });

  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).json({ error: 'User not found' });

  if (user.password !== password)
    return res.status(401).json({ error: 'Invalid credentials' });

  res.status(200).json({ message: 'Login successful' });
});
```

🧠 **Here’s what happens:**
- Missing data → `400 Bad Request`
- User not found → `404 Not Found`
- Wrong password → `401 Unauthorized`
- Success → `200 OK`

---

## 🔹 13. Key Interview Insights

**Q1:** What are status codes used for?  
➡ To communicate the result of a request between client and server.

**Q2:** How many types (categories) of status codes are there?  
➡ Five (1xx, 2xx, 3xx, 4xx, 5xx)

**Q3:** What is the difference between 401 and 403?  
➡ 401 = Not authenticated (no/invalid token)  
➡ 403 = Authenticated but not authorized

**Q4:** What’s the difference between 200 and 201?  
➡ 200 = Request success  
➡ 201 = New resource created (POST)

**Q5:** What does 204 mean?  
➡ Request was successful but no content to return (DELETE).

**Q6:** How does Express set status codes?  
➡ Using `res.status(code).send()` or `res.status(code).json()`.

**Q7:** What is the default status code in Express if none is set?  
➡ `200 OK`

---

## 🔹 14. Summary Table (Quick Revision)

| Code | Category | Meaning | Common Use |
|------|-----------|----------|-------------|
| 200 | Success | OK | Data fetched successfully |
| 201 | Success | Created | New record added |
| 204 | Success | No Content | After DELETE |
| 301 | Redirect | Moved Permanently | URL changed |
| 304 | Redirect | Not Modified | Cached data |
| 400 | Client Error | Bad Request | Invalid data |
| 401 | Client Error | Unauthorized | No token/login |
| 403 | Client Error | Forbidden | Not allowed |
| 404 | Client Error | Not Found | Invalid route/resource |
| 409 | Client Error | Conflict | Duplicate data |
| 500 | Server Error | Internal Error | Crash or bug |
| 503 | Server Error | Service Unavailable | Server busy or down |

---

## 🔹 15. Key Takeaways

✅ HTTP status codes help the client understand request results  
✅ Always choose the most accurate code for clarity  
✅ 4xx → Client fault, 5xx → Server fault  
✅ 201 = Created, 204 = No content  
✅ 401 vs 403 → Authentication vs Permission  
✅ Use proper codes for debugging and clean API design  

---

🧩 **Quick Revision Line:**
> “2xx = Success, 3xx = Redirect, 4xx = Client Error, 5xx = Server Error.”

---

✅ **End of Notes**
