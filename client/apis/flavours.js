import request from 'superagent'

const rootUrl = '/api/v1/menu/flavours/'

const getFlavours = async () => {
  try {
    const res = await request.get(rootUrl)
    return res.body
  } catch (err) {
    return Promise.reject(`Error fetching flavours: ${err.message}`)
  }
}

export { getFlavours }
