const express = require('express')

const db = require('../db/treats')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTreats()
    .then((treats) => {
      res.json(treats)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ errorMessage: 'Something went wrong' })
    })
})

module.exports = router
