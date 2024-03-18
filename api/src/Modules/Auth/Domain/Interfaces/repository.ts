export type AuthRepositoryInputType = {
  email: string
}

export type AuthRepositoryOutputType = {
  id: string
  email: string
  password: string
  name: string
  userType: string
  createdAt: string
}

export interface IAuthRepository {
  authenticate(data: AuthRepositoryInputType): Promise<AuthRepositoryOutputType | undefined>
}
