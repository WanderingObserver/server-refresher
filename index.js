const express = require('express')
const app = express()
require('./routes/authRoutes')(app)
const mongoose = require('mongoose')
require('./models/User')
const passport = require('passport')
require('./services/passport')
const cookieSession = require('cookie-session')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)

app.use(cookieSession({ 
  maxAge: 30 * 24 * 60 * 60 * 1000, 
  keys: [keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  res.send({ 
    hi: "You're probably getting hacked right now ;). JK!~ Or am I? Sleep with one eye open. Unless you're one eye'd Jack. Jack-o-lantern. Carve ye another eye and a heart. Tear my heart open just to feel.",
    papa_roach: "Drunk and I'm feeling down. And I just want to be alone.",
    sora: "I've been having these weird thoughts lately. Like is any of this real or not?", 
    hikaru_utada: "When we are older you'll understand. What I meant when I said, 'いいえ、人生はそれほど単純ではないと思います.'"
  })
})

const PORT = process.env.PORT || 5001
app.listen(PORT)
