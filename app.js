const express = require('express')
const app = express()
const port = 3000
const path = require("path")
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/views/home.html"))
})

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/register.html"))
})

app.post('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/home.html"))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/login.html"))
})

app.listen(process.env.PORT || 3000, ()=>{
  console.log('Servidor funcionando')
})