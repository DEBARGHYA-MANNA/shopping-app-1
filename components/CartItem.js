'use client'

import { Minus, Plus, Trash2 } from 'lucide-react'

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-[#14B8A6] shadow-sm rounded-md">
            <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
            />

            <div className="flex space-between w-full">
                <h2 className="text-[#1E293B] font-semibold text-lg line-clamp-2 mb-1">{item.title}</h2>
                <p className="text-[#1E293B]">₹{item.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center font-bold gap-2">
                <button
                    onClick={onDecrease}
                    className="px-2 py-1 bg-[#0D9488] text-white rounded hover:bg-gray-500"
                >
                    <Minus size={20} />
                </button>
                <span className="min-w-[24px] text-center">{item.quantity}</span>
                <button
                    onClick={onIncrease}
                    className="px-2 py-1 bg-[#0D9488] text-white rounded hover:bg-gray-500"
                >
                    <Plus size={20} />
                </button>
            </div>

            <button
                onClick={onRemove}
                className="text-red-500 hover:text-red-600 transition"
            >
                <Trash2 size={20} />
            </button>
        </div>
    )
}
