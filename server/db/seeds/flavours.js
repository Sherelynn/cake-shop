/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('flavours').del()
  await knex('flavours').insert([
    { id: 1, flavours: 'Chocolate' },
    { id: 2, flavours: 'Vanilla' },
    { id: 3, flavours: 'Tiramisu' },
    { id: 4, flavours: 'Cheesecake' },
    { id: 5, flavours: 'Rainbow' },
    { id: 6, flavours: 'Red Velvet' },
  ])
}
