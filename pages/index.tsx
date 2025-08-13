import { useState } from 'react'
import { products } from '../data/products'

type Product = {
  id: number
  name: string
  description: string
}

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-green-600 text-white p-6">
        <h1 className="text-3xl font-bold">Nature&apos;s Way Soil</h1>
        <p className="text-green-100">Premium organic soil solutions</p>
      </header>
      
      <main className="container mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-green-700 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button 
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  onClick={() => setSelectedProduct(product)}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>
        
        {selectedProduct && (
          <section className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-700">{selectedProduct.description}</p>
            <button 
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </section>
        )}
      </main>
    </div>
  )
}