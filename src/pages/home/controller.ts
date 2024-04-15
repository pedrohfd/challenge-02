import { ProductCardProps } from '@/@types/type'
import { coffeeAtom } from '@/atoms/global'
import { api } from '@/lib/api'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

export const useHomeController = () => {
  const [coffees, setCoffees] = useAtom<ProductCardProps[]>(coffeeAtom)

  const getCoffees = async () => {
    const { data } = await api.get('/coffees')

    setCoffees(data)
  }

  useEffect(() => {
    getCoffees()
  }, [])

  return {
    coffees,
  }
}
