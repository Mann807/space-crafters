import ScrollShowcase from '@/components/ScrollShowcase';
import Link from 'next/link';

export default function DesignHighlightsPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      {/* ─── Back Nav ─── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        style={{
          background: "rgba(13,13,13,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <span className="flex items-center gap-2 text-sm font-bold tracking-[0.3em] uppercase text-white">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto filter invert brightness-0" />
            Space Crafters
          </span>
        </div>
      </div>

      <div className="pt-20">
        <ScrollShowcase />
      </div>
    </main>
  );
}
