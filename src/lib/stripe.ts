import { env } from '@/env'
import Stripe from 'stripe'

export const stripe = new Stripe(env.VITE_SECRET_STRIPE_KEY, {
  apiVersion: '2024-04-10',
  appInfo: {
    name: 'Coffee Delivery',
    version: '1.0.0',
  },
})
