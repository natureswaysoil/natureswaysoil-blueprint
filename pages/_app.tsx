import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nature&apos;s Way Soil - Premium Organic Soil & Compost</title>
        <meta name="description" content="Premium organic soil and compost products for your garden. Sustainable, nutrient-rich solutions for better plant growth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <span className="text-2xl font-bold text-primary-600">
                  Nature&apos;s Way Soil
                </span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Products
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  About
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </nav>
              <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                <button className="btn-primary">
                  Cart (0)
                </button>
              </div>
            </div>
          </div>
        </header>
        
        <main>
          <Component {...pageProps} />
        </main>
        
        <footer className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-300">
                © 2024 Nature&apos;s Way Soil. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}