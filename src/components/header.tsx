import { GetUserLocationResponse } from '@/@types/type'
import { LogoImage } from '@/assets/image/logo'
import { PinIcon } from '@/assets/icon/pin'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CartIcon } from '@/assets/icon/cart'
import { Link } from 'react-router-dom'
import { cartAtom } from '@/atoms/global'
import { useAtomValue } from 'jotai'
import { toast } from 'sonner'

export const Header = () => {
  const [userLocation, setUserLocation] = useState<GetUserLocationResponse>()
  const cart = useAtomValue(cartAtom)

  const getUserLocation = async () => {
    const { data } = await axios.get<GetUserLocationResponse>(
      'http://ip-api.com/json?fields=city,region',
    )

    setUserLocation(data)
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  return (
    <header className="flex items-center justify-between bg-base-surface px-40 py-8">
      <Link to={'/'}>
        <LogoImage />
      </Link>

      <section className="flex items-center gap-3">
        <span className="flex items-center justify-center gap-1 rounded-md bg-violet-weak p-2 font-roboto text-sm font-normal text-violet-strong">
          <PinIcon />
          {userLocation?.city}, {userLocation?.region}
        </span>
        <button
          onClick={() => toast.success('Carrinho aberto')}
          className="relative flex items-center justify-center gap-1 rounded-md bg-yellow-weak p-2 text-yellow-strong"
        >
          {cart.length > 0 && (
            <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-yellow-strong ">
              <p className="font-roboto text-xs font-bold text-base-white">
                {cart.length}
              </p>
            </span>
          )}
          <CartIcon />
        </button>
      </section>
    </header>
  )
}
