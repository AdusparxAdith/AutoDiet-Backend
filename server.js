const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/api', (_, res) => {
  console.debug('Hello')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})