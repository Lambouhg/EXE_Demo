import React, { useState } from 'react';
import Header from './Header';
import img3 from '../image/mau23.jpg'; 
const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Red');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: 1,
    name: "Áo yếm nhỏ mùa hè dành cho nữ có đệm ngực Áo khoác ngoài không tay Áo ngắn",
    description: "A stylish t-shirt made from high-quality materials, perfect for any occasion.",
    price: 25.99,
    originalPrice: 35.99,
    sold: 150,
    rating: 4.8,
    reviews: 124,
    imageUrl: "/api/placeholder/600/600",
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L", "XL"],
    brand: "FashionBrand",
    features: [
      "100% Premium Cotton",
      "Breathable fabric",
      "Machine washable",
      "Comfortable fit"
    ]
  };

  // Simple icon components
  const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  );

  const StarIcon = ({ filled }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 ${filled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  );

  return (
    
    <div className="max-w-7xl mx-auto p-4 bg-white min-h-screen">
   <Header></Header>
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <span>Home</span>
        <span>/</span>
        <span>Clothing</span>
        <span>/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image Section */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={img3}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
              <HeartIcon />
            </button>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShareIcon />
              </button>
            </div>
            
            {/* Rating */}
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < Math.floor(product.rating)} />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ${product.originalPrice}
            </span>
            <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-medium rounded">
              Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`
                    w-12 h-12 rounded-full border-2 flex items-center justify-center
                    ${selectedColor === color
                      ? 'border-blue-500'
                      : 'border-transparent'
                    }
                  `}
                  style={{
                    backgroundColor: color.toLowerCase(),
                    color: color.toLowerCase() === 'white' ? 'black' : 'white'
                  }}
                >
                  {selectedColor === color && '✓'}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    py-3 border rounded-lg text-sm font-medium
                    ${selectedSize === size
                      ? 'border-blue-500 bg-blue-50 text-blue-600'
                      : 'border-gray-200 text-gray-900 hover:bg-gray-50'
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center space-x-2">
              <CartIcon />
              <span>Add to Cart</span>
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50">
              Buy Now
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border-t pt-6">
            <div className="flex items-center space-x-3 text-gray-600">
              <TruckIcon />
              <span>Free delivery on orders over $50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Tabs */}
      <div className="mt-12">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            {['description', 'features', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 text-sm font-medium border-b-2 hover:text-gray-700 hover:border-gray-300 transition-colors ${
                  activeTab === tab
                    ? 'text-blue-600 border-blue-500'
                    : 'text-gray-500 border-transparent'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          {activeTab === 'description' && (
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          )}
          
          {activeTab === 'features' && (
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
          
          {activeTab === 'shipping' && (
            <p className="text-gray-600 leading-relaxed">
              We offer free standard shipping on all orders over $50. Delivery typically takes 3-5 business days.
              Express shipping options are available at checkout.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;