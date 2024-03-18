export type SignUpOperationType = {
  firstName: string
  lastName: string
  email: string
  password: string
  userType: string
}

export interface ISignUpRepository {
  signUp(data: SignUpOperationType): Promise<void>
}
