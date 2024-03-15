export type ContactIndexRepositoryInputType = {
  firstName?: string
  lastName?: string
  phone?: string
}

export type ContactIndexRepositoryOutputType = {
  id: string
  category: string
  firstName: string
  lastName: string
  age: number
  email: string
  phone: string
  city: string
  region: string
}

export interface IContactIndexRepository {
  index(data: ContactIndexRepositoryInputType): Promise<ContactIndexRepositoryOutputType[]>
}
