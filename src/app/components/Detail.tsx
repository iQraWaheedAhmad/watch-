// Detail.tsx
"use client";


 
export default function Detail() {
  return (
    <div
      className="bg-black min-h-screen text-white flex items-center justify-center px-6 py-10"
      style={{
        backgroundImage: "url(/img2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="bg-black bg-opacity-60 p-6 rounded-lg text-center max-w-2xl">
        <h1 className="text-3xl font-bold text-yellow-400">
          Investment & Withdrawal Policy
        </h1>

        <p className="text-lg mt-4">
          📌 <strong>Profit Withdrawal:</strong> You can withdraw your earnings
          { }
          **Every 3 hours** throughout the day.
        </p>

        <p className="text-lg">
          📌 <strong>Initial Investment:</strong> Your actual investment amount
          can be withdrawn after <strong>15 days</strong>.
        </p>

        <p className="text-lg">
          ⚠️ <strong>Policy Notice:</strong> Withdrawals are available
          { }
          **every 2 hours**. Make sure to follow the schedule to avoid any delays.
        </p>
      </div>
    </div>
  );}