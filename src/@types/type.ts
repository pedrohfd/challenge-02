import Stripe from 'stripe'

export interface GetUserLocationResponse {
  city: string
  region: string
}

export interface ProductCardProps {
  id: string
  name: string
  description: string
  amount: number
  type: Stripe.Product.MarketingFeature[]
  image: string[]
  defaultPriceId: string
}

export interface CartProps {
  id: string
  name: string
  description: string
  amount: number
  type: Stripe.Product.MarketingFeature[]
  image: string[]
  defaultPriceId: string
  quantity: number
}

export interface AddressProps {
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}
