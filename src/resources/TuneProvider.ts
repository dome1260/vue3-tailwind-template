import HttpRequest from './HttpRequest'
import { IBaseSuccessResponse } from '@/models/response/Response.model'

export interface ITuneProvider {
  createTune(payload: any): Promise<IBaseSuccessResponse>
  getTuneValidate(query: any): Promise<IBaseSuccessResponse>
}

class TuneProvider extends HttpRequest implements ITuneProvider {
  private urlPrefix: string = '/v1/tune'

  public async createTune (payload: any): Promise<IBaseSuccessResponse> {
    const response: IBaseSuccessResponse = await this.post(this.urlPrefix, payload)
    return response
  }

  public async getTuneValidate (query: any): Promise<IBaseSuccessResponse> {
    const { idCardNumber, travelForm, travelDestination, date } = query

    const queryParams = [
      `idCardNumber=${idCardNumber}`,
      `travelForm=${travelForm}`,
      `travelDestination=${travelDestination}`,
      `date=${date}`
    ].join('&')

    const response: IBaseSuccessResponse = await this.get(`${this.urlPrefix}/validate?${queryParams}`, {})
    return response
  }
}

export default TuneProvider
