const PORT = 5000
const express = require('express')
const cors = require('cors')
const axios =require('axios')

require('dotenv').config({ path: 'config.env' })

const app = express()

app.use(cors())

app.get('/api/accounts', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api-sandbox.starlingbank.com/api/v2/accounts',
        headers: {
            'Accept': 'application/json',
            'Authorization': process.env.REACT_APP_SANDBOX_ACCESS_TOKEN
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
})

app.get('/api/feed', (req, res) => {

    let urlString = "https://api-sandbox.starlingbank.com/api/v2/feed/account/"
    urlString = urlString + req.params.accountUid
    urlString = urlString + "/category/"
    urlString = urlString + req.params.categoryUid

    const options = {
        method: 'GET',
        url: urlString,
        headers: {
            'Accept': 'application/json',
            'Authorization': process.env.REACT_APP_SANDBOX_ACCESS_TOKEN
        },
        params: {
            'changesSince': req.params.sinceDate,
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))