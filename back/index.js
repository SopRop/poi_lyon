import express from 'express';
import bodyParser from 'body-parser';
import data from './data/data.json';
var cors = require('cors')

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/poi/:code_postal', cors(), (req, res) => {
    const code_postal = parseInt(req.params.code_postal, 10);
 
    const result = Array.from(data.features).filter(e => Number(e.properties.codepostal) === code_postal);
    if (result === undefined) {
        return res.status(404).send({
          success: 'false',
          message: 'poi does not exist',
         });
    }
    return res.status(200).send({
        success: 'true',
        message: 'poi retrieved successfully',
        result,
    });
  });

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});