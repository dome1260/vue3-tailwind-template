import HttpRequest from './HttpRequest'
import { ICreateCustomer , IQrPayment } from '@/models/request/RequestUser.model'
import { IBaseSuccessResponse } from '@/models/response/Response.model'

export interface IUserProvider {
  createCustomers(payload: ICreateCustomer): Promise<IBaseSuccessResponse>
  qrPayment(payload: IQrPayment): Promise<IBaseSuccessResponse>
}

class UserProvider extends HttpRequest implements IUserProvider {
  private urlPrefix: string = '/v1/customers'

  public async createCustomers (payload: ICreateCustomer): Promise<IBaseSuccessResponse> {
    const response: IBaseSuccessResponse = await this.post(this.urlPrefix, payload)
    return response
  }
  // http://localhost:3001/v1/payments/gen/generate-qr
  public async qrPayment (payload: IQrPayment): Promise<IBaseSuccessResponse> {
    const response: IBaseSuccessResponse = await this.post('/v1/gbprimepay/gen/generate-qr', payload)
    return response
  }
}

export default UserProvider
