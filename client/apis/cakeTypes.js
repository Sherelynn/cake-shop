import request from 'superagent'

const rootUrl = '/api/v1/menu/cakeTypes/'

const getCakeTypes = async () => {
  try {
    const res = await request.get(rootUrl)
    return res.body
  } catch (err) {
    return Promise.reject(`Error fetching types of cake: ${err.message}`)
  }
}

export { getCakeTypes }
