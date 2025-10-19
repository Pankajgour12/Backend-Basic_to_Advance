

import express from 'express'
import userData from './Data/data.js'
const app = express();
const PORT = 3000



app.use(express.json());

// * GET Request ( it is for fetching data from server)

app.get('/',(req,res)=>{
  res.status(200).send("Hello World")
})





//? Industry Standards
app.get('/api/v1/users/',(req,res)=>{
    res.status(200).send(userData)
})




//? router params
app.get('/api/v1/users/:id',(req, res)=>{
    const {id} = req.params;
    const parseId = parseInt(id)
    const user = userData.find((user)=> user.id === parseId)
    if(!user){
        res.status(404).send("User not found")
    }
    res.status(200).send(user)
})



//* POST Request ( it is for sending data to server)


app.post('/api/v1/users/',(req, res)=>{
    const { name , displayname} =(req.body);




    const newUser = {
        id: userData.length + 1,
        name,
        displayname
    }
    userData.push(newUser)

    res.status(201).send(
{
message:"User created",
data: newUser

}
      
    )

    console.log(newUser);
})







// *3. PUT Request ( it is for updating All FIELDS)


app.put('/api/v1/users/:id', (req, res) => {
  const {
    body,
    params: { id }
  } = req;

  const parseId = Number(id); // ✅ safer conversion
  console.log("Incoming ID:", parseId);

  const userIndex = userData.findIndex((user) => user.id === parseId);
  console.log("Found index:", userIndex);

  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }

  userData[userIndex] = {
    ...userData[userIndex],
    ...body
  };

  res.status(201).send({
    message: 'User Updated successfully ',
    data: userData[userIndex]
  });
});



//*4. PATCH Request (it is for updating specific fields in an )

app.patch('/api/v1/users/:id', (req, res) => {
  const {
    body,
    params: { id }
  } = req;

  const parseId = Number(id); // ✅ safer conversion
  console.log("Incoming ID:", parseId);

  const userIndex = userData.findIndex((user) => user.id === parseId);
  console.log("Found index:", userIndex);

  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }

  userData[userIndex] = {
    ...userData[userIndex],
    ...body
  };

  res.status(201).send({
    message: 'User Updated successfully ',
    data: userData[userIndex]
  });
});






app.listen(PORT, () => { 
  console.log(`Server is running on the port ${PORT}`); 
})