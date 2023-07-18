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

router.post('/', (req, res) => {
  db.addTreat(req.body)
    .then(([{ id }]) => {
      return db.getTreatById(id)
    })
    .then((treat) => {
      res.json(treat)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ errorMessage: 'Something went wrong' })
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const updatedTreat = req.body
  db.updateTreat(id, updatedTreat)
    .then(() => {
      return db.getTreatById(id)
    })
    .then((treat) => {
      res.json(treat)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ errorMessage: 'Something went wrong' })
    })
})

router.delete('/:id', (req, res) => {
  db.deleteTreat(req.params.id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ errorMessage: 'Something went wrong' })
    })
})

module.exports = router
