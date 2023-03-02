// const express = require('express');
// const app = express();
// const PORT = 8080;
// app.use(express.json())

// app.get('/first',(req, res)=>{
//     res.status(200).send({
//        tshirt:'👩‍🦰',
//        size: 'large'
//     })
//    });
//    app.post('/first/:id',(req,res)=>{
//     const {id}= req.params;
//     const {logo}= req.body;
//     if (!logo) {
//         res.status(418).send({message:'we need a logo'})
//     }
//     res.send({
//         tshirt:`👩‍🦰 your logo is ${logo} and id is ${id}`
//     })
//    });
// app.listen(
//     PORT,
//     ()=>console.log(`it's live on http://localhost:${PORT}`)
// ) 
