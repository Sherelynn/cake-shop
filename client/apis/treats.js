import request from 'superagent'
import handleError from './handleError'

const rootUrl = '/api/v1/menu/treats/'

const getTreats = async () => {
  try {
    const res = await request.get(rootUrl)
    return res.body
  } catch (err) {
    return handleError(err)
  }
}

const addTreat = async (newTreat, newPrice) => {
  try {
    const res = await request
      .post(rootUrl)
      .send({ treats: newTreat, price: newPrice })
    return res.body
  } catch (err) {
    return handleError(err)
  }
}

export { getTreats, addTreat }
