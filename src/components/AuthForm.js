import React, { useState } from 'react';
import '../App.css';
import img1 from '../image/login.jpg'; 
function AuthForm() {
  const [activeTab, setActiveTab] = useState('login');

  const showTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#f8f3ef] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* Right Side - Auth Forms */}
        <div className="glass-effect rounded-3xl p-8 shadow-xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold fashion-font">Welcome</h2>
            <p className="text-gray-600 mt-2">Join our fashion community</p>
          </div>

          <div className="tabs">
            <div className="tabs-list grid grid-cols-2 gap-4 w-full mb-8">
              <button onClick={() => showTab('login')} className={`tab-trigger fashion-font py-2 border-b-2 border-black text-lg ${activeTab === 'login' ? 'active-tab' : ''}`}>
                Sign In
              </button>
              <button onClick={() => showTab('register')} className={`tab-trigger fashion-font py-2 border-b-2 ${activeTab === 'register' ? 'border-black' : 'border-transparent text-gray-400'}`}>
                Register
              </button>
            </div>

            {activeTab === 'login' && (
              <div className="tab-content space-y-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" placeholder="your@email.com" 
                      className="input-focused block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" placeholder="••••••••" 
                      className="input-focused block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm text-sm" 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <button className="text-sm text-black hover:underline">Forgot password?</button>
                  </div>
                  <button type="submit" className="fashion-button w-full bg-black text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-900">
                    Sign In
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'register' && (
              <div className="tab-content space-y-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="reg-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="reg-name" placeholder="John Doe" 
                      className="input-focused block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="reg-email" placeholder="your@email.com" 
                      className="input-focused block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="reg-password" placeholder="••••••••" 
                      className="input-focused block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm text-sm" 
                    />
                  </div>
                  <button type="submit" className="fashion-button w-full bg-black text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-900">
                    Create Account
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Left Side - Background Image or Promotion */}
        <div 
          className="hidden md:flex flex-col justify-center p-12 bg-black rounded-3xl text-white space-y-8 relative overflow-hidden"
        >
          <img 
            src={img1} 
            alt="Fashion Promo" 
            className="absolute inset-0 h-full w-full object-cover opacity-40" 
          />
          <div className="relative z-10">
            {/* <h1 className="text-5xl font-bold fashion-font mb-4">CHICIFY</h1>
            <p className="text-xl opacity-90 font-light">Discover the latest in fashion trends.</p> */}
            <div className="mt-12 space-y-6">
              <div className="flex items-center space-x-4">
                
                <div>
                  {/* <h3 className="font-semibold text-lg">VIP Shopping</h3>
                  <p className="text-sm opacity-75">Exclusive member benefits await you.</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
