const config = require('./knexfile').development

const connection = require('knex')(config)

const getTreats = (db = connection) => db('treats').select()

const getTreatById = (id, db = connection) =>
  db('treats').where({ id }).select('id', 'treats', 'price').first()

const addTreat = (newTreat, db = connection) =>
  db('treats').insert(newTreat, ['id'])

module.exports = {
  getTreats,
  getTreatById,
  addTreat,
}
