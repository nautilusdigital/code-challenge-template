export type ContactIndexRepositoryInputType = {
  userId: string
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
  regionOther: string
}

export interface IContactIndexRepository {
  index(data: ContactIndexRepositoryInputType): Promise<ContactIndexRepositoryOutputType[]>
}
