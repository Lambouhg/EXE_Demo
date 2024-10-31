import React, { useState } from 'react';
import '../App.css'
const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý thanh toán tại đây
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Thanh Toán</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Họ Tên</label>
            <input type="text" required className="w-full px-3 py-2 border rounded" placeholder="Nhập họ tên" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Địa Chỉ Email</label>
            <input type="email" required className="w-full px-3 py-2 border rounded" placeholder="Nhập địa chỉ email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Địa Chỉ Giao Hàng</label>
            <input type="text" required className="w-full px-3 py-2 border rounded" placeholder="Nhập địa chỉ giao hàng" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phương Thức Thanh Toán</label>
            <select value={paymentMethod} onChange={handlePaymentMethodChange} className="w-full px-3 py-2 border rounded">
              <option value="credit-card">Thẻ Tín Dụng</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Chuyển Khoản Ngân Hàng</option>
            </select>
          </div>

          {paymentMethod === 'credit-card' && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Số Thẻ</label>
              <input type="text" required className="w-full px-3 py-2 border rounded" placeholder="Nhập số thẻ" />
              <div className="flex justify-between mt-2">
                <div className="w-1/2 mr-2">
                  <label className="block text-gray-700 mb-2">Ngày Hết Hạn</label>
                  <input type="text" required className="w-full px-3 py-2 border rounded" placeholder="MM/YY" />
                </div>
                <div className="w-1/2 ml-2">
                  <label className="block text-gray-700 mb-2">CVV</label>
                  <input type="text" required className="w-full px-3 py-2 border rounded" placeholder="CVV" />
                </div>
              </div>
            </div>
          )}

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
            Xác Nhận Thanh Toán
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;
