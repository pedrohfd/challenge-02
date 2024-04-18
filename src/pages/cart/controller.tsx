import { AddressProps } from '@/@types/type'
import { cartAtom } from '@/atoms/global'
import { checkout } from '@/lib/checkout'
import axios from 'axios'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export const useCartController = () => {
  const [cart, setCart] = useAtom(cartAtom)
  const [address, setAddress] = useState<AddressProps>()
  const [cep, setCep] = useState('')

  const handleIncreaseQuantity = (id: string) => {
    setCart((prevState) => {
      return prevState.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      )
    })
  }

  const handleDecreaseQuantity = (id: string, coffeeQuantity: number) => {
    if (coffeeQuantity === 1) {
      toast('Deseja remover o item do carrinho?', {
        action: {
          label: 'Confirmar',
          onClick: () => handleRemoveFromCart(id),
        },
        actionButtonStyle: {
          backgroundColor: '#F43f5e',
          fontFamily: 'Roboto',
          fontWeight: 'bold',
        },
        cancel: {
          label: 'Cancelar',
          onClick: () => {
            toast.dismiss()
          },
        },
        cancelButtonStyle: {
          backgroundColor: 'transparent',
          color: '#F43f5e',
          fontFamily: 'Roboto',
          fontWeight: 'bold',
        },
      })
      return
    }

    setCart((prevState) => {
      return prevState.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      )
    })
  }

  const handleRemoveFromCart = (id: string) => {
    setCart((prevState) => prevState.filter((item) => item.id !== id))
  }

  const formatToCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    })
  }

  const handleBuyProducts = async () => {
    try {
      const checkoutItems = cart.map((item) => ({
        price: item.defaultPriceId,
        quantity: item.quantity,
      }))

      const response = await checkout(checkoutItems)

      window.location.href = response as string
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao finalizar a compra, tente novamente mais tarde',
      )
    }
  }

  const getAddress = async () => {
    const { data } = await axios.get<AddressProps>(
      `https://viacep.com.br/ws/${cep}/json/`,
    )

    setAddress(data)
  }

  useEffect(() => {
    if (cep.length < 9) return

    getAddress()
  }, [cep])

  return {
    cart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveFromCart,
    formatToCurrency,
    cep,
    setCep,
    address,
    setAddress,
    handleBuyProducts,
  }
}
