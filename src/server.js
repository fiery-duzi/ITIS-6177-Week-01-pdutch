const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Hello, all you system integrators out there!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})