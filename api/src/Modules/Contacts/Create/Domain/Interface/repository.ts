export type ContactCreateRepositoryInputType = {
  email: string
  firstName: string
  lastName: string
  age: number
  phone: string
  city: string
  regionId: string
  regionOther?: string
}

export type ContactCreateRepositoryOutputType = {
  id: string
}

export interface IContactCreateRepository {
  index(data: ContactCreateRepositoryInputType): Promise<ContactCreateRepositoryOutputType | undefined>
}
