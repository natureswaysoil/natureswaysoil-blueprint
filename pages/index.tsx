import { GetStaticProps } from 'next'
import Image from 'next/image'
import { Product, exampleProducts } from '@/data/products'

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Premium Organic Soil
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Transform your garden with our nutrient-rich, sustainable soil and compost products. 
              Crafted by nature, perfected for your plants.
            </p>
            <div className="mt-10">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Why Choose Nature&apos;s Way Soil?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We&apos;re committed to sustainable gardening and healthy plant growth
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">100% Organic</h3>
            <p className="mt-2 text-gray-600">
              Certified organic materials with no synthetic chemicals or harmful additives
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <span className="text-2xl">♻️</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Sustainable</h3>
            <p className="mt-2 text-gray-600">
              Environmentally responsible production using recycled organic matter
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Fast Delivery</h3>
            <p className="mt-2 text-gray-600">
              Quick and reliable delivery to get your garden growing faster
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover our premium selection of organic soil and compost
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Product Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {product.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-primary-600">
                      ${product.price}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="text-primary-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button className="btn-primary w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Ready to Transform Your Garden?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of satisfied customers who trust Nature&apos;s Way Soil
            </p>
            <div className="mt-8">
              <button className="btn-primary text-lg px-8 py-3">
                Browse All Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      products: exampleProducts,
    },
  }
}