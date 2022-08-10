const express = require('express');

const app = express()
const port = 5000

app.get("/", (_req, res) => {
    res.send("Ramsey's Weather Application API")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})