export type AuthMiddlewareUseCaseOutputType = {
  userId: string
}

export interface IAuthMiddlewareUseCase {
  execute: (accessToken: string) => Promise<AuthMiddlewareUseCaseOutputType>;
}
