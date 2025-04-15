import Axios from 'axios'
import type { CurrencyObject } from '@/types'

export class CurrencyEndpoint {
  async getCurrency(): Promise<CurrencyObject> {
    const res = await Axios.get<CurrencyObject>(`https://status.neuralgeneration.com/api/currency`)
    return res.data
  }
}
