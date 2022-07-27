export interface UserRaw {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
  phone: string
  company: {
    name: string
  }
}

export interface User {
  id: number
  username: string
  position?: number
  tableData: {
    name: string
    email: string
    phoneNumber: string
    completeAddress: string
    city: string
    company: string
  }
}
