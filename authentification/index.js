const express = require('express')
const app = express()
const users = require('./user.json')

// Middleware qui permet de lire les réponse POST

app.use(express.json())

app.get('/api/user', (req, res)=>{
  res.status(200).json(users)
})

app.post('/api/user', (req, res)=>{
  console.log(req.body)
  res.status(200).json(users)
})


app.listen(8080, () => {
  console.log('server up')
})