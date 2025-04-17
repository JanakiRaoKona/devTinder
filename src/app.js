const express = require('express')

const app = express();


app.get('/user', (req, res) => {
    res.send({ firstName: "Janaki Rao", lastName: "Kona" })
}

)
app.post('/user', (req, res) => {
    res.send("Data saved successfulyy..")
})

app.use('/test', (req, res) => {
    res.send("Test here is the server")

})


app.listen(3000, () => {
    console.log("Server is running at port 3000...")
})