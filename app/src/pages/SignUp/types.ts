export type SignupBasicPropTypes = {
  email: string
  password: string
  firstName: string
  lastName: string
}

export type SignupAddressPropTypes = {
  address: string
  unitNumber: string
  city: string
  province: { label: string, id: string }
  postalCode: string
  phoneNumber: string
}
