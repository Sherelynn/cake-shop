const connection = require('./connection')

const getTreats = (db = connection) => db('treats').select()

const getTreatById = (id, db = connection) =>
  db('treats').where({ id }).select('id', 'treats', 'price').first()

const addTreat = (newTreat, db = connection) =>
  db('treats').insert(newTreat, ['id'])

const updateTreat = (id, updatedTreat, db = connection) =>
  db('treats').where({ id }).update(updatedTreat)

const deleteTreat = (id, db = connection) => db('treats').where({ id }).delete()

module.exports = {
  getTreats,
  getTreatById,
  addTreat,
  updateTreat,
  deleteTreat,
}
