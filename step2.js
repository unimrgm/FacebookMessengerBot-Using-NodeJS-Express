const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
	res.status(200).send("Hello. Donald Trump Speaking. How Can You Serve Me?")
});

app.listen(PORT, () => {
  console.log('Our BotApp is running on port %d in %s mode', server.address().port, app.settings.env);
});