export interface ICreateCustomer {
  [key: string]: any
  date: Date | string
  numberOfTravelers: number
  total: number
  travelForm: string
  travelDestination:string
  assured: IAssuredSchema[]
  houseNo: string
  villageNo: string
  villageOrBuilding: string
  lane: string
  road: string
  postcode: string
  subDistrict: string
  district: string
  province: string
}
export interface IAssuredSchema {
  [key: string]: any
  [index: number]: any
  no: number
  idCardNumber: string
  title: string
  firstName: string
  lastName: string
  gender:string
  dateOfBirth: Date | string
  phone?: string
  email?: string
  occupation?: string
  travelPurpose?: string
  beneficiaryOptions: string
  beneficiaryTitle: string
  beneficiaryFirstName: string
  beneficiaryLastName: string
  relationship: string
}

export interface IQrPayment {
  [key: string]: any
  referenceNo: string
  amount: number
  backgroundUrl: string
  detail?: string
  customerName: string
  customerEmail: string | undefined
  customerTelephone: string | undefined
  customerAddress: string
}
