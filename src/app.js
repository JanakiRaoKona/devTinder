const express = require('express')

const app = express();

app.get("/user/:userId", (req, res) => {
    console.log(req.params)
    res.send({ firstName: "Janaki Rao", lastName: "Kona" })
}

)

app.listen(3000, () => {
    console.log("Server is running at port 3000...")
})