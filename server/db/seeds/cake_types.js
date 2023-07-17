/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('cake_types').del()
  await knex('cake_types').insert([
    { id: 1, cakeTypes: 'Buttercream', price: 60 },
    { id: 2, cakeTypes: 'Semi-Fondant', price: 70 },
    { id: 3, cakeTypes: 'Fondant', price: 80 },
  ])
}
