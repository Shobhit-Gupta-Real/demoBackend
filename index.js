const express = require('express')
const app = express()
const port = 8000
app.get('/', (req,res)=>{
    try {
        return res.status(200).json("Route working perfectly!")
    } catch (error) {
        return res.status(500).json(`Internal server error ${error.message}`)
    }
})


app.listen(port, ()=>{
    console.log('Serving on the port ', port)
})