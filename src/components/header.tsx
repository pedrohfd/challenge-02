import { GetUserLocationResponse } from '@/@types/type'
import { LogoImage } from '@/assets/image/logo'
import { PinIcon } from '@/assets/icon/pin'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CartIcon } from '@/assets/icon/cart'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [userLocation, setUserLocation] = useState<GetUserLocationResponse>()

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
    <header className="flex items-center justify-between px-40 py-8">
      <Link to={'/'}>
        <LogoImage />
      </Link>

      <section className="flex items-center gap-3">
        <span className="flex items-center justify-center gap-1 rounded-md bg-violet-weak p-2 font-roboto text-sm font-normal text-violet-strong">
          <PinIcon />
          {userLocation?.city}, {userLocation?.region}
        </span>
        <button className="flex items-center justify-center gap-1 rounded-md bg-yellow-weak p-2">
          <CartIcon />
        </button>
      </section>
    </header>
  )
}
