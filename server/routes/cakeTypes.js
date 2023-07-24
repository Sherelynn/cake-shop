const express = require('express')
const db = require('../db/cakeTypes')
const router = express.Router()
const handleErrors = require('./handleErrors')

router.get('/', async (req, res) => {
  try {
    const typesOfCake = await db.getCakeTypes()
    res.json(typesOfCake)
  } catch (err) {
    handleErrors(res, err)
  }
})

router.post('/', async (req, res) => {
  try {
    const id = await db.addCakeType(req.body)
    const typeOfCake = await db.getCakeTypeById(id)
    res.json(typeOfCake)
  } catch (err) {
    handleErrors(res, err)
  }
})

router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const updatedCakeType = req.body
  try {
    await db.updateCakeType(id, updatedCakeType)
    const typeOfCake = await db.getCakeTypeById(id)
    res.json(typeOfCake)
  } catch (err) {
    handleErrors(res, err)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await db.deleteCakeType(req.params.id)
    res.sendStatus(200)
  } catch (err) {
    handleErrors(res, err)
  }
})

module.exports = router
