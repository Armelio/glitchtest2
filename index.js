const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Vonage = require('@vonage/server-sdk');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/' , async (req, res) => {
    const clientData = JSON.stringify(req.body);
    console.log(req.body);
    console.log(clientData);


    });


    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Le serveur est en cours d'écoute sur le port ${port}`);
    });
