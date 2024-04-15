import { ProductCardProps } from '@/@types/type'
import { InputNumber } from './input-number'
import { AddToCartIcon } from '@/assets/icon/add-to-cart'
import { useAtomValue, useSetAtom } from 'jotai'
import { cartAtom, coffeeAtom } from '@/atoms/global'
import { useState } from 'react'
import { toast } from 'sonner'

export const ProductCard = ({
  id,
  name,
  description,
  amount,
  type,
  image,
}: ProductCardProps) => {
  const setCart = useSetAtom(cartAtom)
  const coffees = useAtomValue(coffeeAtom)

  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  const handleIncreaseQuantity = () => {
    setCoffeeQuantity((prevState) => prevState + 1)
  }

  const handleDecreaseQuantity = () => {
    if (coffeeQuantity === 1) return

    setCoffeeQuantity((prevState) => prevState - 1)
  }

  const handleAddToCart = (id: string) => {
    const coffee = coffees.find((coffee) => coffee.id === id)

    if (!coffee) return

    setCart((prevState) => {
      if (prevState.find((item) => item.id === id)) {
        return prevState.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + coffeeQuantity }
            : item,
        )
      }

      return [...prevState, { ...coffee, quantity: coffeeQuantity }]
    })

    toast.success('Café adicionado ao carrinho')
  }

  return (
    <div className="flex flex-col items-center rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-base-card pb-5">
      <img src={image} alt="foto do café" className="-mt-5 size-32" />

      <section className="mt-3 flex items-center gap-1">
        {type.map((type) => (
          <span key={type} className="rounded-full bg-yellow-weak px-2 py-1">
            <p className="font-roboto text-[0.625rem] font-bold uppercase text-yellow-strong">
              {type}
            </p>
          </span>
        ))}
      </section>

      <p className="mt-4 font-baloo text-xl font-bold text-base-subtitle">
        {name}
      </p>

      <p className="mt-2 w-52 text-center font-roboto text-sm font-normal text-base-label">
        {description}
      </p>

      <section className="mt-8 flex w-full items-center justify-between px-6">
        <p className="font-roboto text-sm font-normal text-base-text">
          R${' '}
          <span className="font-baloo text-2xl font-extrabold">
            {amount.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </span>
        </p>

        <span className="flex items-center gap-2">
          <InputNumber
            increaseFn={handleIncreaseQuantity}
            decreaseFn={handleDecreaseQuantity}
            coffeeQuantity={coffeeQuantity}
          />

          <button
            onClick={() => handleAddToCart(id)}
            className="flex size-[2.375rem] items-center justify-center rounded-md bg-violet-strong p-2 transition-colors hover:bg-violet-default"
          >
            <AddToCartIcon />
          </button>
        </span>
      </section>
    </div>
  )
}
