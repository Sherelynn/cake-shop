const validateCakeType = (req, res, next) => {
  const validCakeTypes = [
    'Royal Icing',
    'Glace Icing',
    'Fondant',
    'Buttercream',
    'Frosting',
    'Semi-Fondant',
    'Cream Cheese',
    'Ganache',
    'Whipped Cream',
    'Meringue',
  ]

  const { cakeTypes: newCake, price } = req.body

  // Check if cakeType is missing or empty
  if (!newCake || newCake.trim() === '') {
    return res.status(400).json({ error: 'Cake type is required.' })
  }

  // Check if cakeType is one of the valid cake types
  if (!validCakeTypes.includes(newCake)) {
    return res.status(400).json({ error: 'Invalid cake type.' })
  }

  // Check if price is valid
  if (!price > 0 || price === '') {
    return res.status(400).json({ error: 'Invalid pricing.' })
  }

  // If validation passes, call next() to continue processing the request
  next()
}

module.exports = validateCakeType
