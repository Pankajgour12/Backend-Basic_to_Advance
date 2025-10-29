# 🚀 Express.js Interview Notes — HTTP Methods (GET, POST, PUT, PATCH, DELETE)

---

## 🔹 1. What is Express.js?

- **Express.js** is a minimal and flexible **Node.js web framework** used to build **REST APIs** and **web servers**.
- It simplifies handling **routes**, **requests**, and **responses**.
- Express provides easy ways to handle **HTTP methods** like `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.

### ✨ Key Features
- Middleware support  
- Routing system  
- Request & Response handling  
- Integration with databases and templates  

---

## 🔹 2. What are HTTP Methods in Express.js?

| Method | Purpose | Example Endpoint |
|--------|----------|------------------|
| **GET** | Fetch data | `/users` |
| **POST** | Create new data | `/users` |
| **PUT** | Replace existing data | `/users/:id` |
| **PATCH** | Update part of existing data | `/users/:id` |
| **DELETE** | Remove data | `/users/:id` |

---

## 🔹 3. GET Request

### 📘 Purpose
Used to **retrieve data** from the server.

```js
app.get('/users', (req, res) => {
  res.json(users);
});
🧩 Example with Route Parameter
js
Copy code
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

```
## 🧠 Interview Questions
Q: What is a **GET** request used for?

A: To fetch data from the server.

Q: Difference between req.params and req.query?
A:

req.params: Used for dynamic route parameters (like /users/:id).

req.query: Used for query strings (like /users?name=John).

Q: Can GET requests send a body?
A: No, GET requests should not send a body.

🔹 4. POST Request
📘 Purpose
Used to send data to the server (Create operation).

js
Copy code
```app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});
```
🧠 Interview Questions
Q: What’s the difference between GET and POST?
A:

GET: Fetches data.

POST: Sends data to create a resource.

Q: Why is express.json() middleware required?
A: It parses incoming JSON request bodies so we can access req.body.

Q: What status code indicates a successful POST request?
A: 201 Created.

🔹 5. PUT Request
📘 Purpose
Used to replace an existing resource completely.

```js

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).send('User not found');

  users[index] = { id, name, email }; // Replace full object
  res.json(users[index]);
});
```
## Interview Questions
Q: What’s the main difference between PUT and PATCH?
A:

PUT: Replaces the entire object.

PATCH: Updates only specific fields.

Q: Is PUT idempotent?
A: Yes — multiple identical PUT requests give the same result.

Q: What if the resource doesn’t exist?
A: Usually returns a 404, or can create a new resource depending on design.

🔹 6. PATCH Request
📘 Purpose
Used to update part of a resource (partial update).

js
Copy code
app.patch('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).send('User not found');

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
});
🧠 Interview Questions
Q: When should PATCH be used?
A: When you want to update only part of an object (e.g., update only email).

Q: Is PATCH idempotent?
A: Not necessarily — multiple PATCH calls can lead to different results.

Q: Which is faster — PUT or PATCH?
A: PATCH can be more efficient as it sends less data.

🔹 7. DELETE Request
📘 Purpose
Used to delete data from the server.

js
Copy code
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).send('User not found');

  const deletedUser = users.splice(index, 1);
  res.json(deletedUser);
});
🧠 Interview Questions
Q: What status code should be returned after successful DELETE?
A: 200 OK or 204 No Content.

Q: Are DELETE requests idempotent?
A: Yes — deleting the same resource multiple times has the same result.

Q: What if the resource doesn’t exist?
A: Return 404 Not Found.

🔹 8. Summary Table
Method	Description	Body Allowed	Idempotent	Success Code	Example
GET	Fetch data	❌	✅	200	/users
POST	Create new data	✅	❌	201	/users
PUT	Replace entire resource	✅	✅	200	/users/:id
PATCH	Partially update resource	✅	❌	200	/users/:id
DELETE	Remove resource	❌	✅	200 / 204	/users/:id

🔹 9. Express Request Object Properties
Property	Description	Example
req.params	Route parameters	/users/:id → req.params.id
req.query	Query string parameters	/users?name=John → req.query.name
req.body	JSON body data (via express.json)	{ "name": "Alice" }
req.method	Current HTTP method	"GET", "POST" etc.
req.url	Full URL of the request	/users/3?sort=desc

🔹 10. Important HTTP Status Codes
Code	Meaning	Used For
200	OK	Success
201	Created	After POST
204	No Content	After DELETE
400	Bad Request	Invalid input
404	Not Found	Resource missing
500	Server Error	Internal issues

🔹 11. Key Takeaways
✅ GET → Retrieve
✅ POST → Create
✅ PUT → Replace
✅ PATCH → Update partially
✅ DELETE → Remove

Tip: Always test your API endpoints in Postman or Thunder Client.

🔹 12. Final Interview Tips
Express routes are matched top to bottom — order matters.

Use proper status codes and JSON responses.

Always validate incoming data before saving.

Learn to use tools like Postman, Insomnia, and curl for testing.

Remember: REST APIs are stateless — each request is independent.

🧩 Revision Shortcut:

“GET = Read | POST = Create | PUT = Replace | PATCH = Modify | DELETE = Remove”