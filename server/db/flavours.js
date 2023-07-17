const config = require('./knexfile').development

const connection = require('knex')(config)

const getFlavours = (db = connection) => db('flavours').select()

const getFlavourById = (id, db = connection) =>
  db('flavours').where({ id }).select('id', 'flavours').first()

const addFlavour = (newFlavour, db = connection) =>
  db('flavours').insert(newFlavour, ['id'])

module.exports = {
  getFlavours,
  getFlavourById,
  addFlavour,
}
