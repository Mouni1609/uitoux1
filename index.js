import mysql from 'mysql'
import express from 'express'

const connection = mysql.createConnection({
    host:"localhost",
    database:"uitoux",
    user:"root",
    password:"Mounika16"
});

const app = express();

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log('SERVER : http://localhost:${PORT}');
    connection.connect((err)=> {
        if(err) throw err;
        console.log("DATABASE CONNECTED");
    })
})

app.use("/all",(req, res)=>{
const sql_query = 'select * from uitoux.iteams'
connection.query(sql_query,(err,result)=>{
    if(err) throw err;
    res.send(result);
})
})