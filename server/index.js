const express = require('express')
const { connectToDb, getDb } = require('./db')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

app.use(cors());
app.use(bodyParser.json());

let db

connectToDb((err) => {
    if (!err) {
        app.listen(5001, () => {console.log("Server Running")})
    }
    db = getDb()
})

app.get('/featured', (req, res) => {
    db.collection('restaurants')
    .find()
    .toArray()
    .then(restaurants => {
      res.status(200).json(restaurants);
        })
        .catch(() => {
            res.status(500).json({"error": "Something went wrong"})
        })
})
 
app.get('/getDesi', (req, res) => {
    db.collection('desi')
    .find()
    .toArray()
    .then(desiRestaurants => {
        res.status(200).json(desiRestaurants);
    })
    .catch(() => {
        res.status(500).json({"error": "Something went wrong"})
    })
})

app.get('/getArab', (req, res) => {
    db.collection('arab')
    .find()
    .toArray()
    .then(arabRestaurants => {
        res.status(200).json(arabRestaurants);
    })
    .catch(() => {
        res.status(500).json({"error": "Something went wrong"})
    })
})

app.get('/getWestern', (req, res) => {
    db.collection('western')
    .find()
    .toArray()
    .then(westernRestaurants => {
        res.status(200).json(westernRestaurants);
    })
    .catch(() => {
        res.status(500).json({"error": "Something went wrong"})
    })
})

app.post('/restaurantInfo', async (req, res) => {

    const { category, name } = req.body;
    db.collection(`${category}`)
    .findOne({title: `${name}`})
    .then(restaurant => {
        res.status(200).json(restaurant);
    })

})
