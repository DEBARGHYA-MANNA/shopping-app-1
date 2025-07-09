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

    return (
        <main className="bg-[#FFFBDE] p-6">
            <h1 className="text-[#4682A9] text-2xl font-semibold mb-4">Products</h1>

            {loading ? (
                <p>Loading products...</p>
            ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product) => (
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
