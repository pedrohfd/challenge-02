export interface GetUserLocationResponse {
  city: string
  region: string
}

export interface ProductCardProps {
  id: string
  name: string
  description: string
  amount: number
  type: Array<string>
  image: string
}

export interface CartProps {
  id: string
  name: string
  description: string
  amount: number
  type: Array<string>
  image: string
  quantity: number
}
