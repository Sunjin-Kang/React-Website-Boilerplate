const path = require('path')
const PORT = process.env.PORT || 1111
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
module.exports = app // I don't think this is required but leavingi it in case

const createApp = () => {
  app.use(morgan('dev'))

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use(express.static(path.join(__dirname, '../app/client/dist')))

  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(`${__dirname}../app/client/dist/index.html`))
  })

  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startApp = () => {
  const server = app.listen(PORT, () => {
    console.log(`~~~~~~~ Server Listening on ${PORT} ~~~~~~~`)
  })
}

createApp()
startApp()
