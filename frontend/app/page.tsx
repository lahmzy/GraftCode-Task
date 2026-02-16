'use client';

import { useState } from "react";

// Mock imports - In a real scenario, these would be:
// import { GraftConfig, EnergyPriceCalculator } from '@graft/nuget-MyEnergyService';
// For demonstration purposes, we're mocking the structure

// Mock GraftConfig object
const GraftConfig = {
  host: ""
};

// Mock EnergyPriceCalculator class
const EnergyPriceCalculator = {
  GetPrice: async () => {
    // This would normally make a call through Graftcode Gateway
    // For demo, we'll simulate the backend call
    return new Promise<number>((resolve) => {
      setTimeout(() => resolve(Math.floor(Math.random() * 5) + 100), 500);
    });
  },
  GetRandomNumber: async () => {
    return new Promise<number>((resolve) => {
      setTimeout(() => resolve(Math.floor(Math.random() * 100) + 1), 500);
    });
  },
  GetRandomDiscount: async () => {
    return new Promise<number>((resolve) => {
      setTimeout(() => resolve(Math.random() * 0.3), 500);
    });
  }
};

// Configuration - would normally point to our Docker container
GraftConfig.host = "ws://localhost:80/ws"; // or wss:// for secure connection

export default function Home() {
  const [price, setPrice] = useState<number | null>(null);
  const [randomNum, setRandomNum] = useState<number | null>(null);
  const [discount, setDiscount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleGetPrice = async () => {
    setLoading(true);
    setError('');
   
    try {
      const result = await EnergyPriceCalculator.GetPrice();
      setPrice(result);
    } catch (err: any) {
      console.error(err);
      setError("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  const handleGetRandomNumber = async () => {
    setLoading(true);
    setError('');
   
    try {
      const result = await EnergyPriceCalculator.GetRandomNumber();
      setRandomNum(result);
    } catch (err: any) {
      console.error(err);
      setError("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  const handleGetDiscount = async () => {
    setLoading(true);
    setError('');
   
    try {
      const result = await EnergyPriceCalculator.GetRandomDiscount();
      setDiscount(result);
    } catch (err: any) {
      console.error(err);
      setError("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-col">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Energy Price Service
        </h1>

        <div className="flex flex-col items-center gap-4 p-8 border border-gray-700 rounded-xl bg-gray-800/50 backdrop-blur-sm shadow-xl">
          
          <div className="flex gap-3">
            <button
              onClick={handleGetPrice}
              disabled={loading}
              className="px-6 py-2 rounded bg-purple-600 hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg shadow-purple-900/20"
            >
              {loading ? "Loading..." : "Get Price"}
            </button>

            <button
              onClick={handleGetRandomNumber}
              disabled={loading}
              className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg shadow-blue-900/20"
            >
              {loading ? "Loading..." : "Get Random Number"}
            </button>

            <button
              onClick={handleGetDiscount}
              disabled={loading}
              className="px-6 py-2 rounded bg-green-600 hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg shadow-green-900/20"
            >
              {loading ? "Loading..." : "Get Discount"}
            </button>
          </div>

          {error && (
            <div className="mt-4 p-3 rounded bg-red-900/50 border border-red-700 text-red-200">
              {error}
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 mt-6 w-full">
            {price !== null && (
              <div className="p-4 rounded bg-gray-950/50 border border-purple-700/50 text-center animate-in fade-in slide-in-from-bottom-4">
                <p className="text-sm text-gray-400">Current Price</p>
                <p className="text-2xl font-bold text-purple-400">${price}</p>
              </div>
            )}

            {randomNum !== null && (
              <div className="p-4 rounded bg-gray-950/50 border border-blue-700/50 text-center animate-in fade-in slide-in-from-bottom-4">
                <p className="text-sm text-gray-400">Random Number</p>
                <p className="text-2xl font-bold text-blue-400">{randomNum}</p>
              </div>
            )}

            {discount !== null && (
              <div className="p-4 rounded bg-gray-950/50 border border-green-700/50 text-center animate-in fade-in slide-in-from-bottom-4">
                <p className="text-sm text-gray-400">Discount</p>
                <p className="text-2xl font-bold text-green-400">{(discount * 100).toFixed(1)}%</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 max-w-2xl mx-auto">
          <p className="mb-4">
            This frontend connects to the .NET Energy Price Service via Dockerized Graftcode Gateway.
          </p>
          <p className="text-xs">
            <strong>Note:</strong> In production, the Graft package would be installed via:<br/>
            <code className="text-purple-400">npm install --registry https://grft.dev/[gateway-id] @graft/nuget-MyEnergyService</code>
          </p>
        </div>
      </div>
    </main>
  );
}
