require('dotenv').config()
const express = require('express')

// import express from 'express'
const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/About', (req, res) => {
  res.send('We are in About Page')
})

app.get('/contact', (req, res) => {
  res.send('<h1>We are in Contact Page</h1>')
})

app.get('/service', (req, res) => {
  res.send('We are in Service Page')
})




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})