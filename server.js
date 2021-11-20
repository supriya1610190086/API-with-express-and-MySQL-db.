const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const course = require("./routes/course.js")
const port = process.env.PORT || 8000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/course', course)

app.listen(port, () => {
    console.log(`server listening req at http://localhost:${port}/`);
})