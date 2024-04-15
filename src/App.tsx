import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { Toaster } from 'sonner'

export function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Router />
    </BrowserRouter>
  )
}
