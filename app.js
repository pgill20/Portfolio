const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('This is my portfolio website. - PG')
})

app.listen(port, () => {
    console.log(`Portfolio site listening on ${port}...`)
})