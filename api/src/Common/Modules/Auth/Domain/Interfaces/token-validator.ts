export interface ITokenValidator {
  validate: <T = unknown>(token: string) => Promise<T>;
}
