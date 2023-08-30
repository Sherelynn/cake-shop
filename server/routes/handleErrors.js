const handleErrors = (res, err) => {
  console.error(err)
  res.status(500).json({errorMessage: 'Something went wrong'})
}

module.exports = handleErrors