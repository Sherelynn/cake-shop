const connection = require('./connection')

const getFlavours = async (db = connection) => await db('flavours').select()

const getFlavourById = async (id, db = connection) =>
  await db('flavours').where({ id }).select('id', 'flavours').first()

const addFlavour = async (newFlavour, db = connection) => {
  // Check if a flavour with the same name already exists
  const existingFlavour = await db('flavours')
    .where('flavours', newFlavour.flavours)
    .first()

  if (existingFlavour) {
    throw new Error('Flavour with this name already exists.')
  }

  // If it doesn't exist insert the new flavour
  const [id] = await db('flavours').insert(newFlavour)
  return id
}

const updateFlavour = async (id, updatedFlavour, db = connection) =>
  await db('flavours').where({ id }).update(updatedFlavour)

const deleteFlavour = async (id, db = connection) =>
  await db('flavours').where({ id }).delete()

module.exports = {
  getFlavours,
  getFlavourById,
  addFlavour,
  updateFlavour,
  deleteFlavour,
}
