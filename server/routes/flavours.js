const express = require('express')

const db = require('../db/flavours')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFlavours()
    .then((flavours) => {
      res.json(flavours)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ errorMessage: 'Something went wrong' })
    })
})

module.exports = router
