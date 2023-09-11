const validateTreat = (req, res, next) => {
  const validTreats = [
    'Cake Pops',
    'Cupcakes',
    'Cake Jars',
    'Mousse Shots',
    'Leche Flan',
    'Crinkles',
    'Dream Cake',
    'Squares',
    'Muffins',
    'Cookies',
    'Fudge',
  ]
  const { treats: treat, price } = req.body

  // Check if cakeType is missing or empty
  if (!treat === String || treat.trim() === '') {
    return res.status(400).json({ error: 'Treat is required.' })
  }

  // Check if treat is one of the valid treats
  if (!validTreats.includes(treat)) {
    return res.status(400).json({ error: 'Invalid treat' })
  }

  // Check if price is valid
  else if (Math.sign(Number(price)) === 0 || Math.sign(Number(price)) === -1) {
    return res.status(400).json({ error: 'Invalid pricing.' })
  }

  // If validation passes, call next() to continue processing the request
  next()
}

module.exports = validateTreat
