'use client';

import { useState } from 'react';
// In a real integration, you would import this from the generated package
// import { GraftConfig, HelloWorldService } from '@graft/nuget-EnergyPriceService';
import { HelloWorldService } from '@/lib/graft-client';

export default function Home() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGreet = async () => {
    if (!name) return;
    setLoading(true);
    try {

      // GraftConfig.host = "http://localhost:81";

      const result = await HelloWorldService.Greet(name);
      setGreeting(result);
    } catch (error) {
      console.error(error);
      setGreeting("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-col">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Graftcode Hello World
        </h1>

        <div className="flex flex-col items-center gap-4 p-8 border border-gray-700 rounded-xl bg-gray-800/50 backdrop-blur-sm shadow-xl">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded bg-gray-950 border border-gray-600 focus:outline-none focus:border-purple-500 w-64"
          />

          <button
            onClick={handleGreet}
            disabled={loading || !name}
            className="px-6 py-2 rounded bg-purple-600 hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg shadow-purple-900/20"
          >
            {loading ? "Calling Backend..." : "Greet Me!"}
          </button>

          {greeting && (
            <div className="mt-6 p-4 rounded bg-gray-950/50 border border-gray-700 w-full text-center animate-in fade-in slide-in-from-bottom-4">
              <p className="text-xl text-green-400">{greeting}</p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center text-gray-500 max-w-md mx-auto">
          <p>
            This frontend is ready to connect to your .NET backend via Graftcode Gateway.
          </p>
          <p className="mt-2 text-xs">
            See keys in <code className="bg-gray-800 px-1 rounded">SETUP_INSTRUCTIONS.md</code>
          </p>
        </div>
      </div>
    </main>
  );
}
