export type RefreshAuthUseCaseInputType = {
  id: string
}

export type RefreshAuthUseCaseOutputType = {
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

export interface IRefreshAuthUseCase {
  execute(data: RefreshAuthUseCaseInputType): Promise<RefreshAuthUseCaseOutputType>
}
