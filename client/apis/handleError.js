const handleError = (err) => {
  return Promise.reject(`Error: ${err.message}`)
}

export default handleError