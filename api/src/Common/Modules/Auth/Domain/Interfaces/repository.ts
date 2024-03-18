export type GetOneByIdOutputType = {
  id: string
}

export interface IAuthMiddlewareRepository {
  getOneById: (id: string) => Promise<GetOneByIdOutputType | undefined>
}
