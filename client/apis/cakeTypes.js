import request from 'superagent'
import handleError from './handleError'

const rootUrl = '/api/v1/menu/cakeTypes/'

const getCakeTypes = async () => {
  try {
    const res = await request.get(rootUrl)
    return res.body
  } catch (err) {
    return handleError(err)
  }
}

const addCakeType = async (newCake, newPrice) => {
  try {
    const res = await request
      .post(rootUrl)
      .send({ cakeTypes: newCake, price: newPrice })
    return res.body
  } catch (err) {
    return handleError(err)
  }
}

export { getCakeTypes, addCakeType }
