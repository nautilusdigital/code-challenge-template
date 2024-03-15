export type UsersIndexOutputType = {
  id: string
  name: string
  email: string
};

export interface IUsersIndexUseCase {
  execute(): Promise<UsersIndexOutputType[]>;
}
