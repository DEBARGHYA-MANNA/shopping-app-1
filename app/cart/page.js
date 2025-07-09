'use client'

import { useCart } from '../../context/CartContext'
import CartItem from '../../components/CartItem'
import Modal from '../../components/Modal'
import { useState } from 'react'

export default function CartPage() {
    const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart()
    const [selectedItem, setSelectedItem] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const handleRemove = (item) => {
        setSelectedItem(item)
        setShowModal(true)
    }

    const confirmRemove = () => {
        removeFromCart(selectedItem.id)
        setShowModal(false)
        setSelectedItem(null)
    }

    return (
        <main className="bg-[#FFFBDE] p-6 flex-grow">
            <h1 className=" text-2xl font-semibold mb-6">Your Cart</h1>

            {cart.length === 0 ? (
                <div className="flex items-center justify-center h-[60vh]">
                    <p className="text-[#1E293B] font-semibold font-sans text-4xl">Your cart is empty.</p>
              </div>
            ) : (
                <div className="space-y-4">
                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onIncrease={() => updateQuantity(item.id, 1)}
                            onDecrease={() => updateQuantity(item.id, -1)}
                            onRemove={() => handleRemove(item)}
                        />
                    ))}

                        <div className="mt-6 mr-4 text-right text-[#1E293B] text-lg font-bold">
                            Total: ₹{getTotalPrice().toFixed(2)}
                    </div>
                </div>
            )}

            {showModal && selectedItem && (
                <Modal
                    title="Remove Item"
                    message={`Remove "${selectedItem.title}" from your cart?`}
                    onConfirm={confirmRemove}
                    onCancel={() => setShowModal(false)}
                />
            )}
        </main>
    )
}
