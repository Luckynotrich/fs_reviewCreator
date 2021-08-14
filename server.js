const express = require('express')
const path = require('path')
//const logger = require('./middleware/logger.js');

const app = express()
const PORT = process.env.PORT || 8080

app.use('/favicon.ico', express.static('./favicon.ico'))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

//express.static(root, [options])
app.use(express.static(path.resolve(__dirname, './public')))

//Category api routes
app.use('/api/categories', require('./routes/api/categories'), () => {
    let req
    console.log('api/cat', req.body)
})

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' })
    console.log('app.get', req.body)
})

//start the server
app.listen(
    PORT,
    console.log(`Something awesome is happening at http://localhost:${PORT}`)
)
