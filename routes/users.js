import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

let users = [];
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => { // add user details
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(
    `user with name ${user.firstName} ${user.lastName} added to the database `
  );
});
router.get("/:id", (req, res) => { // get user details
    const { id }= req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});
router.delete('/:id', (req, res)=>{ // delete user details
    const { id }= req.params;
    users = users.filter((user) => user.id !== id)
    res.send(`id ${id} deleted well`);
});
router.patch('/:id', (req, res)=>{ // update user details
     const { id } = req.params;
     const { firstName, lastName, age }= req.body;
     const user = users.find((user)=> user.id == id);
     if (firstName) user.firstName = firstName;
     if (lastName) user.lastName = lastName
     if (age) user.age = age;
     res.send(`user with id ${id} updated well`);
});
export default router;
