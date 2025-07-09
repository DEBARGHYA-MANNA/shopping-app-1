'use client'

import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { ShoppingCart } from 'lucide-react'

export default function Navbar() {
    const { cart } = useCart()
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <nav className="bg-[#14B8A6] shadow sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-[#FFFBDE]">MyShop</Link>

                <div className="flex items-center gap-6 text-[#FFFBDE] font-medium">
                    <Link href="/products" className="hover:text-black">Products</Link>

                    <Link href="/cart" className="flex items-center gap-1 hover:text-black">
                        <ShoppingCart size={20} />
                        Cart
                        {totalItems > 0 && (
                            <span className="ml-1 bg-[#FFFBDE] text-black hover:bg-black hover:text-[#FFFBDE] text-xs px-2 py-0.5 rounded-full">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    )
}
