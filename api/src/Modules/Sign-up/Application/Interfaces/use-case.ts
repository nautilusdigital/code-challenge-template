export type SignUpUseCaseInputType = {
  firstName: string
  lastName: string
  email: string
  password: string
  userType: string
}

export interface ISignUpUseCase {
  execute(data: SignUpUseCaseInputType): Promise<void>
}
