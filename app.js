const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/order', (req, res) => {
    res.send([
      {
        orderId: '1',
        price: 100
      },
      {
        productId: '2',
        price: 150
      }
    ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})