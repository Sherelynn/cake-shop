const config = require('./knexfile').development

const connection = require('knex')(config)

const getTreats = (db = connection) => db('treats').select()

module.exports = {
  getTreats,
}
