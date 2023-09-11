const express = require('express')
const db = require('../db/treats')
const router = express.Router()
const handleErrors = require('./handleErrors')
const validateTreat = require('./validation/validateTreat')

router.get('/', async (req, res) => {
  try {
    const treats = await db.getTreats()
    res.json(treats)
  } catch (err) {
    handleErrors(res, err)
  }
})

router.post('/', validateTreat, async (req, res) => {
  try {
    const id = await db.addTreat(req.body)
    const treat = await db.getTreatById(id)
    res.json(treat)
  } catch (err) {
    handleErrors(res, err)
  }
})

router.patch('/:id', validateTreat, async (req, res) => {
  const id = req.params.id
  const updatedTreat = req.body
  try {
    await db.updateTreat(id, updatedTreat)
    const treat = await db.getTreatById(id)
    res.json(treat)
  } catch (err) {
    handleErrors(res, err)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await db.deleteTreat(req.params.id)
    res.sendStatus(200)
  } catch (err) {
    handleErrors(res, err)
  }
})

module.exports = router
