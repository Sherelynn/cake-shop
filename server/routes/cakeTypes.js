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

router.post('/', (req, res) => {
  db.addCakeType(req.body)
    .then(([{ id }]) => {
      return db.getCakeTypeById(id)
    })
    .then((cakeType) => {
      res.json(cakeType)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ errorMessage: 'Something went wrong' })
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const updatedCakeType = req.body
  db.updateCakeType(id, updatedCakeType)
    .then(() => {
      return db.getCakeTypeById(id)
    })
    .then((cakeType) => {
      res.json(cakeType)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ errorMessage: 'Something went wrong' })
    })
})

router.delete('/:id', (req, res) => {
  db.deleteCakeType(req.params.id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ errorMessage: 'Something went wrong' })
    })
})

module.exports = router
