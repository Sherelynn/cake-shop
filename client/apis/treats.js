import request from 'superagent'

const rootUrl = '/api/v1/menu/treats'

const getTreats = async () => {
  try {
    const res = await request.get(rootUrl)
    return res.body
  } catch (err) {
    return Promise.reject(`Error fetching treats: ${err.message}`)
  }
}

export { getTreats }
