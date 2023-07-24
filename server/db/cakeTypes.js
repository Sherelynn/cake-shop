const connection = require('./connection')

const getCakeTypes = async (db = connection) => await db('cake_types').select()

const getCakeTypeById = async (id, db = connection) =>
  await db('cake_types')
    .where({ id })
    .select('id', 'cakeTypes', 'price')
    .first()

const addCakeType = async (newCakeType, db = connection) => {
  const [id] = await db('cake_types').insert(newCakeType)
  return id
}

const updateCakeType = async (id, updatedCaketype, db = connection) =>
  await db('cake_types').where({ id }).update(updatedCaketype)

const deleteCakeType = async (id, db = connection) =>
  await db('cake_types').where({ id }).delete()

module.exports = {
  getCakeTypes,
  getCakeTypeById,
  addCakeType,
  updateCakeType,
  deleteCakeType,
}
