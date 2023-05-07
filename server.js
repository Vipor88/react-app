const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;


const { Sequelize, Model, DataTypes } = require("sequelize");

const { golfclubs } = require('./models')
app.use(bodyParser.json());

app.get('/products', async(req, res) => {
      const clubs = await golfclubs.findAll()
      res.send(clubs)
  })
app.listen(port, () => console.log(`Listening on port ${port}`));