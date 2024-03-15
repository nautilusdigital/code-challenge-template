export type ContactIndexInputType = {
  firstName?: string
  lastName?: string
  phone?: string
};

export type ContactIndexOutputType = {
  id: string
  category: string
  firstName: string
  lastName: string
  age: number
  email: string
  phone: string
  city: string
  region: string
};

export interface IContactIndexUseCase {
  execute(data: ContactIndexInputType): Promise<ContactIndexOutputType[]>;
}
