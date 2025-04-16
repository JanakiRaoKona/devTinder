const express = require('express')

const app = express();

app.use('/', (req, res) => {
    res.send("Hello here is the server")

})


app.listen(3000, () => {
    console.log("Server is running at PORT 3000")
})