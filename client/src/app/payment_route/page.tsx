'use client'
import { useRouter } from 'next/navigation';

const PaymentGateway = () => {
  const router = useRouter();

  const handlePayment = (service: string) => {
    // Simulate payment gateway redirect
    console.log(`Redirecting to ${service}...`);
    router.push(`/payment/${service.toLowerCase()}`);
    <script src="http://localhost:8097"></script>
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Choose Your Payment Method
      </h1>
      <p className="text-gray-700 text-center max-w-2xl mb-8">
        To complete your registration, please select your preferred payment gateway. Start earning with minimal investment by using one of the trusted platforms below!
      </p>

      {/* Payment Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
        {/* JazzCash */}
        <div
          onClick={() => handlePayment('JazzCash')}
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
        >
          <img
            src="/jazzcash-logo.png"
            alt="JazzCash Logo"
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">JazzCash</h2>
        </div>

        {/* EasyPaisa */}
        <div
          onClick={() => handlePayment('EasyPaisa')}
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
        >
          <img
            src="/easypaisa-logo.png"
            alt="EasyPaisa Logo"
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">EasyPaisa</h2>
        </div>

        {/* Bank Transfer */}
        <div
          onClick={() => handlePayment('Bank Transfer')}
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
        >
          <img
            src="/bank-transfer-logo.png"
            alt="Bank Transfer Logo"
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">Bank Transfer</h2>
        </div>

        {/* PayPal */}
        <div
          onClick={() => handlePayment('PayPal')}
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
        >
          <img
            src="/paypal-logo.png"
            alt="PayPal Logo"
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">PayPal</h2>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
