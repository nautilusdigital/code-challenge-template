export type AuthUseCaseInputType = {
  email: string
  password: string
}

export type AuthUseCaseOutputType = {
  user: {
    id: string
    email: string
    name: string
    userType: string
    createdAt: string
  }
  tokens: {
    accessToken: string
  }
}

export interface IAuthUseCase {
  execute(data: AuthUseCaseInputType): Promise<AuthUseCaseOutputType>
}
