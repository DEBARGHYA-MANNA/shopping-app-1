import '../styles/globals.css'
import { CartProvider } from '../context/CartContext'
import Navbar from '../components/Nav'
import Footer from '../components/Foot'

export const metadata = {
  title: 'Shopping Cart App',
  description: 'Simple Next.js shopping cart with localStorage',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#FFFBDE] text-gray-900">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
