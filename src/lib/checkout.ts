import { env } from '@/env'
import { stripe } from './stripe'

interface CheckoutProps {
  price: string
  quantity: number
}

export const checkout = async (items: CheckoutProps[]) => {
  const successUrl = `${env.VITE_URL}/success`
  const cancelUrl = `${env.VITE_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl,
    success_url: successUrl,
    mode: 'payment',
    line_items: items,
  })

  return checkoutSession.url
}
