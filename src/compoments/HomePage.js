import React from 'react';
import { 
  
  Heart, 
 
  Filter,
  
  MapPin,
  Star
} from 'lucide-react';
import Header from './Header';
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white px-4 py-2 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>Free shipping on orders over $100</p>
          <div className="flex gap-4">
            <button href="#" className="hover:text-gray-300">Track Order</button>
            <button href="#" className="hover:text-gray-300">Help</button>
          </div>
        </div>
      </div>
      
      <Header></Header>
  

      {/* Main Content */}
      <main className="flex flex-1 bg-gray-50 p-6">
        {/* Sidebar Filter */}
        <aside className="w-1/4 p-6 bg-white rounded-xl shadow-sm mr-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Filters</h2>
            <Filter className="h-5 w-5 text-gray-600" />
          </div>
          <div className="space-y-6">
            {['Skin Tone', 'Size', 'Category', 'Brand'].map((filter) => (
              <div key={filter}>
                <label className="block font-medium text-gray-700 mb-2">{filter}</label>
                <select className="w-full border rounded-lg p-2.5 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Select {filter}</option>
                </select>
              </div>
            ))}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Body Measurements</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Height (cm)"
                  className="border rounded-lg p-2.5 bg-gray-50"
                />
                <input
                  type="text"
                  placeholder="Weight (kg)"
                  className="border rounded-lg p-2.5 bg-gray-50"
                />
              </div>
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </label>
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full border rounded-lg p-2.5 bg-gray-50"
              />
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">New Arrivals</h2>
            <select className="border rounded-lg p-2 bg-white">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <ProductCard key={item} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400">Your trusted fashion destination for unique and stylish clothing.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Contact Us</li>
              <li>Shipping Policy</li>
              <li>Returns & Exchanges</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Sale</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-white mb-2"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Fashion Shop. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src="/api/placeholder/300/400"
          alt="Product"
          className="w-full h-72 object-cover"
        />
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-full bg-white text-gray-900 py-2 rounded-lg font-medium hover:bg-gray-100">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Trendy Summer Dress</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">4.5</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-2">Light and comfortable for summer days</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold text-lg">$79.99</span>
          <span className="text-sm text-gray-500">20 sold</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;