/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('treats').del()
  await knex('treats').insert([
    { id: 1, treats: 'Cupcakes', price: 3 },
    { id: 2, treats: 'Cake Jars', price: 10 },
    { id: 3, treats: 'Crinkles', price: 20 },
    { id: 4, treats: 'Mousse Shots', price: 25 },
    { id: 5, treats: 'Leche Flan', price: 25 },
    { id: 6, treats: 'Dream Cake', price: 30 },
  ])
}
