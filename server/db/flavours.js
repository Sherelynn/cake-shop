const config = require('./knexfile').development

const connection = require('knex')(config)

const getFlavours = (db = connection) => db('flavours').select()

module.exports = {
  getFlavours,
}
