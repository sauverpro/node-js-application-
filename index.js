import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'

const app = express();
const PORT= 7898;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/',(req, res)=>res.send('hello from Homepage'));

app.listen(PORT, () =>{
    console.log(`Server is Running on Port: http://localhost:${PORT}`)
});

