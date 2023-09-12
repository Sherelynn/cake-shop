const connection = require('./connection')

const getTreats = async (db = connection) => await db('treats').select()

const getTreatById = async (id, db = connection) =>
  await db('treats').where({ id }).select('id', 'treats', 'price').first()

const addTreat = async (newTreat, db = connection) => {
  // Check if a treat with the same name already exists
  const existingTreat = await db('treats')
    .where('treats', newTreat.treats)
    .first()

  if (existingTreat) {
    throw new Error('Treat with this name already exists.')
  }

  // If it doesn't exist insert the new treat
  const [id] = await db('treats').insert(newTreat)
  return id
}

const updateTreat = async (id, updatedTreat, db = connection) =>
  await db('treats').where({ id }).update(updatedTreat)

const deleteTreat = async (id, db = connection) =>
  await db('treats').where({ id }).delete()

module.exports = {
  getTreats,
  getTreatById,
  addTreat,
  updateTreat,
  deleteTreat,
}
