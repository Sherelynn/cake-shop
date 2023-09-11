const validateFlavour = (req, res, next) => {
  const validFlavours = [
    'Chocolate',
    'Vanilla',
    'Banana',
    'Strawberry',
    'Orange',
    'Lemon',
    'Mocha',
    'Durian',
    'Purple Yam',
    'Buko Pandan',
    'Mango',
    'Tiramisu',
    'Red Velvet',
    'Carrot',
    'Sprinkles',
    'Cheesecake',
    'Rainbow',
    'Butterscotch',
    'Pineapple',
    'Black Forest',
    'Caramel',
  ]

  const { flavours: newFlavour } = req.body

  // Check if cakeType is missing or empty
  if (!newFlavour || newFlavour.trim() === '') {
    return res.status(400).json({ error: 'Flavour is required.' })
  }

  // Check if cakeType is one of the valid cake types
  if (!validFlavours.includes(newFlavour)) {
    return res.status(400).json({ error: 'Invalid flavour.' })
  }

  // If validation passes, call next() to continue processing the request
  next()
}

module.exports = validateFlavour
