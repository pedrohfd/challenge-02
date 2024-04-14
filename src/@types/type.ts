export interface GetUserLocationResponse {
  city: string
  region: string
}

export interface ProductCartProps {
  name: string
  description: string
  amount: number
  type: Array<string>
  image: string
}
