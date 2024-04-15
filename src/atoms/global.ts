import { CartProps, ProductCardProps } from '@/@types/type'
import { atom } from 'jotai'

export const cartAtom = atom<CartProps[]>([])

export const coffeeAtom = atom<ProductCardProps[]>([])
