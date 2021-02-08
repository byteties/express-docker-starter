const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Test!' })
})

app.listen(8001, () => {
  console.log('Application is running on port 8001')
})