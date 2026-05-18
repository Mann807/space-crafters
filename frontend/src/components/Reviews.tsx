"use client";

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const API_URL = "https://space-crafters.onrender.com";

interface Review {
  id: number;
  author: string;
  rating: number;
  content: string;
  created_at: string;
  source: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Form State
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);

  // Fetch reviews from backend on load
  const fetchReviews = async () => {
    try {
      const res = await fetch(`${API_URL}/reviews/`);
      if (res.ok) {
        const data = await res.json();
        setReviews(data.reverse()); // newest first
      }
    } catch (err) {
      console.log("Backend not available, reviews will appear once server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
    // Auto-refresh reviews every 30 seconds
    const interval = setInterval(fetchReviews, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/reviews/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: author.trim(),
          rating,
          content: content.trim(),
          source: "website",
        }),
      });

      if (res.ok) {
        // Reset Form
        setAuthor('');
        setContent('');
        setRating(5);
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);
        // Refresh reviews list
        await fetchReviews();
      }
    } catch (err) {
      alert("Could not submit review. Please make sure the server is running.");
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50 dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Reviews</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Read what our clients say, or leave your own experience!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Write a Review Form */}
          <div className="lg:col-span-1 bg-white dark:bg-[#1e1e1e] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 h-fit">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Write a Review</h3>
            
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Review submitted successfully! Thank you.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c29b76]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => setRating(star)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star 
                        className={`w-8 h-8 ${star <= (hoveredRating || rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Review</label>
                <textarea 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Tell us about your experience..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c29b76] resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-[#754436] hover:bg-[#62382c] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors text-lg"
              >
                {submitting ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? (
                <div className="col-span-full flex items-center justify-center py-20">
                  <div className="w-8 h-8 border-2 border-[#c29b76] border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <>
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
                      <div className="flex items-center mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-700'}`} 
                            />
                          ))}
                        </div>
                        <span className="ml-auto text-xs text-gray-500">
                          {formatDate(review.created_at)}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-wrap">&quot;{review.content}&quot;</p>
                      <div className="font-medium text-gray-900 dark:text-white">- {review.author}</div>
                    </div>
                  ))}

                  {reviews.length === 0 && (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-gray-300 dark:border-gray-800 rounded-2xl h-full">
                      <Star className="w-12 h-12 text-gray-400 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">No Reviews Yet</h3>
                      <p className="text-gray-500">Be the first to leave a review using the form!</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
