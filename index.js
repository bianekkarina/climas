const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const API_KEY = require('./keys')

app.get('/clima', async (req, res) => {
    let response = await axios.get()
})