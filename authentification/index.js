const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('./model/User')

mongoose.connect('mongodb+srv://admin:admin@cluster0.8mjfx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Middleware qui permet de lire les réponse POST

app.use(express.json())

app.post('/api/signup', (req, res)=>{
  console.log(req.body)
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        login: req.body.login,
        password: hash
      });

      user.save()
      .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
      .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
})

app.post('/api/login',(req, res)=>{
  console.log(req.body)
  User.findOne({ login: req.body.login })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: 'TOKEN'
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));


})




app.listen(8080, () => {
  console.log('server up')
})