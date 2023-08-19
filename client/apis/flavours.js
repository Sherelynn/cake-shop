import request from 'superagent'
import handleError from './handleError'

const rootUrl = '/api/v1/menu/flavours/'

const getFlavours = async () => {
  try {
    const res = await request.get(rootUrl)
    return res.body
  } catch (err) {
    return handleError(err)
  }
}

const addFlavour = async (newFlavour) => {
  try {
    const res = await request.post(rootUrl).send({ flavours: newFlavour })
    return res.body
  } catch (err) {
    return handleError(err)
  }
}

const updateFlavour = async (flavourId, updatedFlavour) => {
  try {
    const res = await request
      .patch(rootUrl + flavourId)
      .send({ flavours: updatedFlavour })
    return res.body
  } catch (err) {
    return handleError(err)
  }
}

const deleteFlavour = async (flavourId) => {
  try {
    const res = await request.del(rootUrl + flavourId)
    return res.status
  } catch (err) {
    return handleError(err)
  }
}

export { getFlavours, addFlavour, updateFlavour, deleteFlavour }
