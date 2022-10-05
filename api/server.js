const express = require('express')
const axios = require('axios').default;
const cors = require('cors')
const app = express()

app.use(cors());

const API_BASE_URL = "https://dev-api.confidence.org/v2/confidence/locations";
const port = 4040

app.get('/api', (req, res) => {
    axios.post(API_BASE_URL, {
        start: 0,
        limit: 100,
      },{
        headers: {
          Username: "amitphatak$r5labs.com",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(function (response) {
        res.send({result: response?.data})
      })
      .catch(function (error) {
        res.send({result: 'Oh no!'})
      });

})

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
