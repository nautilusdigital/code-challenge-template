export type SignUpOperationType = {
  firstName: string
  lastName: string
  email: string
  password: string
  address: string
  unitNumber?: string
  postalCode: string
  phoneNumber: string
}

export interface ISignUpRepository {
  signUp(data: SignUpOperationType): Promise<void>
}
