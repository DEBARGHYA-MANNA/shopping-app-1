'use client'

import { useEffect, useState } from 'react'
import { useCart } from '../../context/CartContext'
import ProductCard from '../../components/ProductBox'
import Modal from '../../components/Modal'

export default function ProductsPage() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [sortBy, setSortBy] = useState('default')
    const [searchTerm, setSearchTerm] = useState('')

    const { addToCart } = useCart()

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json()
                setProducts(data)
            } catch (error) {
                console.error('Failed to fetch products:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    const handleAdd = (product) => {
        setSelectedProduct(product)
        setShowModal(true)
    }

    const confirmAdd = () => {
        addToCart(selectedProduct)
        setShowModal(false)
        setSelectedProduct(null)
    }

    const filteredProducts = products.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price
        if (sortBy === 'price-desc') return b.price - a.price
        if (sortBy === 'az') return a.title.localeCompare(b.title)
        if (sortBy === 'za') return b.title.localeCompare(a.title)
        return 0
    })

    return (
        <main className="bg-[#FFFBDE] p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <h1 className="text-[#4682A9] text-2xl ml-10 font-semibold">Products</h1>

                    <input
                        type="text"
                        placeholder="Search products..."
                    className="border border-[#1E293B] text-[#1E293B] rounded px-3 py-2 text-sm w-full sm:w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <select
                    className="border border-[#1E293B] text-[#1E293B] rounded px-3 py-2 text-sm"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                    <option className='bg-[#FFFBDE] text-[#1E293B]' value="default">Sort by</option>
                    <option className='bg-[#FFFBDE] text-[#1E293B]' value="price-asc">Price: Low to High</option>
                    <option className='bg-[#FFFBDE] text-[#1E293B]' value="price-desc">Price: High to Low</option>
                    <option className='bg-[#FFFBDE] text-[#1E293B]' value="az">Name: A–Z</option>
                    <option className='bg-[#FFFBDE] text-[#1E293B]' value="za">Name: Z–A</option>
                    </select>
            </div>

            {loading ? (
                <p>Loading products...</p>
            ) : sortedProducts.length === 0 ? (
                <p className="text-center text-gray-600">No products match your search.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {sortedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAdd={() => handleAdd(product)}
                        />
                    ))}
                </div>
            )}

            {showModal && selectedProduct && (
                <Modal
                    title="Add to Cart"
                    message={`Add "${selectedProduct.title}" to cart?`}
                    onConfirm={confirmAdd}
                    onCancel={() => setShowModal(false)}
                />
            )}
        </main>
    )
}
