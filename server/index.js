const express = require('express')
const { connectToDb, getDb } = require('./db')
const cors = require('cors');

const app = express()

app.use(cors());

let db

connectToDb((err) => {
    if (!err) {
        app.listen(5001, () => {console.log("Server Running")})
    }
    db = getDb()
})

app.get('/featured', (req,res) => {
    db.collection('restaurants')
    .find()
    .toArray()
    .then(restaurants => {
      res.status(200).json(restaurants.slice(0,3));
        })
        .catch(() => {
            res.status(500).json({"error": "Something went wrong"})
        })
})
 

