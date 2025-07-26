import React from 'react'
import {WifiOff} from 'lucide-react';


const Online = () => {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 flex flex-col items-center justify-center p-6">
      <WifiOff className="w-16 h-16 text-red-600 mb-4" />
      <h1 className="text-3xl font-bold mb-2">You're Offline</h1>
      <p className="text-center text-lg mb-4">
        Please check your internet connection and try again.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="bg-yellow-600 text-white px-6 py-2 rounded-md shadow hover:bg-yellow-700 transition"
      >
        Retry
      </button>

      <p className="text-sm mt-4 text-gray-500">Amazon-style fallback page</p>
    </div>
  )
}

export default Online
