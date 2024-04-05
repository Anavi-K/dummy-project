require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const mongodburi = process.env.MONGO_DB;

app.get('/ping', (req, res) => {
    res.send('pong');
  });

  //connecting mongodb
  mongoose.connect(mongodburi)

  //define a route to check MongoDB connetions status
  app.get('/mongodbconnection', (req, res) => {
    if(mongoose.connection.readyState === 1){
      res.status(200).json('MongoDB is connected successfully')
    }else{
      res.status(400).json('Error connecting to MongoDB')
    }
  });
  
  if (require.main === module) {
    app.listen(port, () => {
      console.log(`🚀 server running on PORT: ${port}`);
    });
  }

module.exports = app;