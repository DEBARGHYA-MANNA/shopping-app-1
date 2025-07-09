'use client'

export default function ProductCard({ product, onAdd }) {
    return (
        <div className="bg-[#14B8A6] shadow-md rounded-lg p-4 flex flex-col justify-between h-full">
            <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto mb-4"
            />
            <h2 className=" text-[#1E293B] text-md font-semibold mb-2 line-clamp-2">{product.title}</h2>
            <p className="text-[#1E293B] font-bold mb-4">₹{product.price.toFixed(2)}</p>

            <button
                onClick={onAdd}
                className="mt-auto bg-[#0D9488] text-white px-4 py-2 rounded hover:bg-[#1E293B] transition"
            >
                Add to Cart
            </button>
        </div>
    )
}
