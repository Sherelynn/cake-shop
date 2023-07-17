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

router.post('/', (req, res) => {
  db.addFlavour(req.body)
    .then(([{ id }]) => {
      return db.getFlavourById(id)
    })
    .then((flavour) => {
      res.json(flavour)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ errorMessage: 'Something went wrong' })
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const updatedFlavour = req.body
  db.updateFlavour(id, updatedFlavour)
    .then(() => {
      return db.getFlavourById(id)
    })
    .then((flavour) => {
      res.json(flavour)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ errorMessage: 'Something went wrong' })
    })
})

router.delete('/:id', (req, res) => {
  db.deleteFlavour(req.params.id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ errorMessage: 'Something went wrong' })
    })
})

module.exports = router
