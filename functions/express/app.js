const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const indexRouter = require('./routes/index')
const redirectRouter = require('./routes/redirect')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, "public")))

app.use('/', indexRouter)
app.use('/redirect', redirectRouter)

// ERROR 404
app.use((req, res) => {
  res.status(404)

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' })
    return
  }

  // default to plain-text. send()
  res.type('txt').send('Not found')
})

module.exports = app
