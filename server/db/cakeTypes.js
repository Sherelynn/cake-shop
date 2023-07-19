const connection = require('./connection')

const getCakeTypes = (db = connection) => db('cake_types').select()

const getCakeTypeById = (id, db = connection) =>
  db('cake_types').where({ id }).select('id', 'cakeTypes', 'price').first()

const addCakeType = (newCakeType, db = connection) =>
  db('cake_types').insert(newCakeType, ['id'])

const updateCakeType = (id, updatedCaketype, db = connection) =>
  db('cake_types').where({ id }).update(updatedCaketype)

const deleteCakeType = (id, db = connection) =>
  db('cake_types').where({ id }).delete()

module.exports = {
  getCakeTypes,
  getCakeTypeById,
  addCakeType,
  updateCakeType,
  deleteCakeType,
}
