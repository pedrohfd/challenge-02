import { Outlet, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/home'
import { Header } from '@/components/header'
import { Cart } from '@/pages/cart'

export function Router() {
  return (
    <Routes>
      <Route
        element={
          <>
            <Header />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}
