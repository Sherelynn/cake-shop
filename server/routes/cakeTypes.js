const express = require('express')

const db = require('../db/cakeTypes')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCakeTypes()
    .then((cakeTypes) => {
      res.json(cakeTypes)
    })
    .catch((err) => {
      console.error(err)
      res.send(500).json({ errorMessage: 'Something went wrong' })
    })
})

module.exports = router
