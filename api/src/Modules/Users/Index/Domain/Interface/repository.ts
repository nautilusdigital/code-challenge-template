export type UsersIndexRepositoryOutputType = {
  id: string
  name: string
  email: string
}

export interface IUsersIndexRepository {
  index(): Promise<UsersIndexRepositoryOutputType[]>
}
