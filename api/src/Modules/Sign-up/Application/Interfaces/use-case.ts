export type SignUpUseCaseType = {
  firstName: string
  lastName: string
  email: string
  password: string
  address: string
  unitNumber?: string
  postalCode: string
  phoneNumber: string
}

export interface ISignUpUseCase {
  execute(data: SignUpUseCaseType): Promise<void>
}
