'use client'

export default function ProductCard({ product, onAdd }) {
    return (
        <div className="bg-[#14B8A6] shadow-md rounded-lg p-4 flex flex-col justify-between h-full text-[#1E293B]">
            <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto mb-4"
            />

            <h2 className="text-md text-[#1E293B] font-semibold mb-2 line-clamp-2">
                {product.title}
            </h2>

            <p className="text-sm text-[#1E293B] mb-2">{product.description}</p>

            <div className="text-sm font-bold text-[#1E293B] mb-3 flex justify-between items-center">
                ⭐ {product.rating?.rate} / 5 &nbsp;·&nbsp; {product.rating?.count} reviews
                <p className="font-bold text-[#1E293B] mb-3">₹{product.price.toFixed(2)}</p>
            </div>

            

            <button
                onClick={onAdd}
                className="mt-auto bg-[#0D9488] text-white px-4 py-2 rounded hover:bg-[#1E293B] transition"
            >
                Add to Cart
            </button>
        </div>
    )
}
