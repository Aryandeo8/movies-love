import express from "express";  
import env from "dotenv";

const app=express();
env.config();
const port =process.env.PORT || 3000;



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
