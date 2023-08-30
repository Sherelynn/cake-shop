const express = require('express')
const db = require('../db/flavours')
const router = express.Router()
const handleErrors = require('./handleErrors')

router.get('/', async (req, res) => {
  try {
    const flavours = await db.getFlavours()
    res.json(flavours)
  } catch (err) {
    handleErrors(res, err)
  }
})

router.post('/', async (req, res) => {
  try {
    const id = await db.addFlavour(req.body)
    const flavour = await db.getFlavourById(id)
    res.json(flavour)
  } catch (err) {
    handleErrors(res, err)
  }
})

router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const updatedFlavour = req.body
  try {
    await db.updateFlavour(id, updatedFlavour)
    const flavour = await db.getFlavourById(id)
    res.json(flavour)
  } catch (err) {
    handleErrors(res, err)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await db.deleteFlavour(req.params.id)
    res.sendStatus(200)
  } catch (err) {
    handleErrors(res, err)
  }
})

module.exports = router
