import Axios from 'axios'

export class Currency {
  /** Get modeling result from the specified project snapshot */
  async getCurrency() {
    const res = await Axios.get(`https://status.neuralgeneration.com/api/currency`)
    return res.data
  }
}
