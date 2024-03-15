export type ContactCreateUseCaseInputType = {
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

export type ContactCreateUseCaseOutputType = {
  id: string
}

export interface IContactCreateUseCase {
  execute(data: ContactCreateUseCaseInputType): Promise<ContactCreateUseCaseOutputType>
}
