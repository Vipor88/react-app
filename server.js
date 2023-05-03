const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const { Sequelize, Model, DataTypes } = require("sequelize");

const { golfclubs } = require('./models')
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.get('/products', async(req, res) => {

      // let todoList = await db.manyOrNone('SELECT * FROM todoList')
      const clubs = await golfclubs.findAll()
  
      //res.render loads the ejs file
      // res.render('webpage', { list : todos})
      res.send(clubs)
  })
app.listen(port, () => console.log(`Listening on port ${port}`));