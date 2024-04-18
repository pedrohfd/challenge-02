import { ProductCardProps } from '@/@types/type'
import { coffeeAtom } from '@/atoms/global'
import { stripe } from '@/lib/stripe'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import Stripe from 'stripe'

export const useHomeController = () => {
  const [coffees, setCoffees] = useAtom<ProductCardProps[]>(coffeeAtom)

  const getCoffees = async () => {
    const { data } = await stripe.products.list({
      limit: 20,
      expand: ['data.default_price'],
    })

    const products = data.map((product) => {
      const price = product.default_price as Stripe.Price

      return {
        id: product.id,
        name: product.name,
        description: product.description as string,
        amount: (price.unit_amount as number) / 100,
        type: product.marketing_features,
        image: product.images,
        defaultPriceId: price.id,
      }
    })

    setCoffees(products)
  }

  useEffect(() => {
    getCoffees()
  }, [])

  return {
    coffees,
  }
}
