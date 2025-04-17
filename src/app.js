const express = require('express')

const app = express();

// app.use( 'route' , ["RH1" , "RH2" , "RH3"])

app.use('/user',
    [(req, res, next) => {
        console.log("Handling the Router1...")
        next()
        //res.send("1User Response...")

    },
    (req, res, next) => {
        console.log("Handling the Router2...")
        next()
        //res.send("2User Response...")

    },
    (req, res, next) => {
        console.log("Handling the Router3...")
        next()
        //res.send("3User Response...")
    },
    (req, res, next) => {
        console.log("Handling the Router4...")
        res.send("4User Response...")
        //next()

    }]


),


    app.listen(3000, () => {
        console.log("Server is running at port 3000...")
    })