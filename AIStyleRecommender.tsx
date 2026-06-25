"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AIStyleRecommender() {
  const [preference, setPreference] = useState('');
  const [result, setResult] = useState<{ style: string, description: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('https://space-crafters-2.onrender.com/recommend-style/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preferences: preference }),
      });
      const data = await res.json();
      setResult({ style: data.recommended_style, description: data.description });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-style" className="py-20 bg-white dark:bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AI Style Recommender</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Describe your dream space, and let our ML model recommend the perfect style.</p>
        </div>

        <div className="bg-gray-50 dark:bg-[#2c2c2c] rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="preference" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                What elements do you love? (e.g., "Wood, natural light, clean lines")
              </label>
              <textarea
                id="preference"
                rows={4}
                className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#c29b76] focus:ring-[#c29b76] sm:text-sm p-3 bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white"
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#c29b76] hover:bg-[#b08965] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c29b76]"
            >
              {loading ? 'Analyzing...' : 'Get Recommendation'}
            </button>
          </form>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-white dark:bg-[#1e1e1e] border border-[#c29b76] rounded-xl text-center"
            >
              <h3 className="text-2xl font-bold text-[#c29b76] mb-2">{result.style}</h3>
              <p className="text-gray-700 dark:text-gray-300">{result.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
