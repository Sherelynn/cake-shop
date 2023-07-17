const config = require('./knexfile').development

const connection = require('knex')(config)

const getCakeTypes = (db = connection) => db('cake_types').select()

module.exports = {
  getCakeTypes,
}
