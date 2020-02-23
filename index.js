const express= require('express');
const app=express();

app.listen(process.env.PORT,()=>{
    console.log("Started listening on port ",process.env.PORT);
});
