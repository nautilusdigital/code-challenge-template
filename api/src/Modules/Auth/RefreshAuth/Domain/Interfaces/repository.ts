export type RefreshAuthRepositoryInputType = {
  id: string
}

export type RefreshAuthRepositoryOutputType = {
  id: string
  email: string
  password: string
  name: string
  userType: string
  createdAt: string
}

export interface IRefreshAuthRepository {
  getOneById(data: RefreshAuthRepositoryInputType): Promise<RefreshAuthRepositoryOutputType>
}
