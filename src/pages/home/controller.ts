import { ProductCartProps } from '@/@types/type'
import { api } from '@/lib/api'
import { useEffect, useState } from 'react'

export const useHomeController = () => {
  const [coffees, setCoffees] = useState<ProductCartProps[]>([])
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
