// src/components/AuthForm.js
import React, { useState } from 'react';

import '../App.css';
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

            {/* Login Form */}
            {activeTab === 'login' && (
              <div className="tab-content space-y-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="relative">
                      <input type="email" id="email" placeholder="your@email.com"
                        className="input-focused block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none text-sm transition-all duration-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <input type="password" id="password" placeholder="••••••••"
                        className="input-focused block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none text-sm transition-all duration-300" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <button href="#" className="text-sm text-black hover:underline">Forgot password?</button>
                  </div>
                  <button type="submit" className="fashion-button w-full bg-black text-white py-3 px-4 rounded-xl text-sm font-semibold hover:bg-gray-900">
                    Sign In
                  </button>
                </form>
              </div>
            )}

            {/* Register Form */}
            {activeTab === 'register' && (
              <div className="tab-content space-y-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="reg-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <div className="relative">
                      <input type="text" id="reg-name" placeholder="John Doe"
                        className="input-focused block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none text-sm transition-all duration-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="relative">
                      <input type="email" id="reg-email" placeholder="your@email.com"
                        className="input-focused block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none text-sm transition-all duration-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <input type="password" id="reg-password" placeholder="••••••••"
                        className="input-focused block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none text-sm transition-all duration-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <div className="relative">
                      <input type="password" id="confirm-password" placeholder="••••••••"
                        className="input-focused block w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none text-sm transition-all duration-300" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">I agree to the <button href="#" className="text-black hover:underline">Terms of Service</button> and <button href="#" className="text-black hover:underline">Privacy Policy</button></span>
                  </div>
                  <button type="submit" className="fashion-button w-full bg-black text-white py-3 px-4 rounded-xl text-sm font-semibold hover:bg-gray-900">
                    Create Account
                  </button>
                </form>
              </div>
            )}

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#f8f3ef] text-gray-500">Or continue with</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="fashion-button w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-[#4285F4] hover:bg-gray-50 group">
                  {/* Google Icon */}
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.01v4.51h6.27c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.47-5.17 3.47-8.82z" />
                    <path fill="#34A853" d="M12.545 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.915 21.3 7.935 24 12.545 24z" />
                    <path fill="#FBBC05" d="M5.815 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z" />
                    <path fill="#EA4335" d="M12.545 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.545 0c-4.61 0-8.63 2.7-10.42 6.62h3.98c1.3-2.85 4.03-5.06 7.44-5.06z" />
                  </svg>
                  Sign in with Google
                </button>
                <button className="fashion-button w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-[#3B5998] hover:bg-gray-50 group">
                  {/* Facebook Icon */}
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#3B5998" d="M22.675 0h-21.35C.671 0 0 .671 0 1.325v21.351C0 23.329.671 24 1.325 24h21.351c.654 0 1.325-.671 1.325-1.325V1.325C24 .671 23.329 0 22.675 0zM12 0c6.627 0 12 5.373 12 12 0 6.627-5.373 12-12 12S0 18.627 0 12C0 5.373 5.373 0 12 0zm-2 17.333v-6h-2v-2h2v-1.6c0-2 1.2-3.3 3.1-3.3.9 0 1.9.2 1.9.2v2h-1.1c-1 0-1.2.4-1.2 1.1v1.6h2.3l-.2 2h-2.1v6h-2z" />
                  </svg>
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side - Background Image or Promotion */}

        <div className="hidden md:flex flex-col justify-center p-12 bg-black rounded-3xl text-white space-y-8 relative overflow-hidden">
        <div class="absolute inset-0 bg-opacity-50 bg-cover bg-center"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold fashion-font mb-4 text-white-300">CHICIFY</h1>
            <p className="text-xl opacity-90 font-light">Discover the latest in fashion trends.</p>
            <div className="mt-12 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl backdrop-blur-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">VIP Shopping</h3>
                  <p className="text-sm opacity-75">Exclusive member benefits await you.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 bg-white/10 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 fashion-font">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  {/* Thêm biểu tượng hoặc hình ảnh */}
                  <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 10-8 0m8 4a6 6 0 10-8 0" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-700">Email: support@chicify.com</p>
                  <p className="text-sm text-gray-700">Phone: +123-456-7890</p>
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
