export type ContactCreateRepositoryInputType = {
  email: string
  firstName: string
  lastName: string
  age: number
  phone: string
  city: string
  regionId: string
  regionOther?: string
  category: string
}

export type ContactCreateRepositoryOutputType = {
  id: string
}

export interface IContactCreateRepository {
  create(data: ContactCreateRepositoryInputType): Promise<ContactCreateRepositoryOutputType>
}
