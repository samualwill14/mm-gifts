import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function RedirectPage() {
  const router = useRouter();
  const { url } = router.query;
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!url) return;

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Direct redirect - NO POPUP BLOCKER
          window.location.href = url;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [url]);

  return (
    <>
      <Head>
        <title>Redirecting to Match Masters Free Gift...</title>
        <meta name="description" content="You are being redirected to your Match Masters free gift. Please wait..." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center">
          {/* Loader GIF */}
          <div className="flex justify-center mb-6">
            <img 
              src="/loader.gif" 
              alt="Loading..." 
              className="w-28 h-28 object-contain"
            />
          </div>
          
          {/* Countdown */}
          <div className="mb-4">
            <span className="text-6xl font-bold text-blue-600">{countdown}</span>
            <span className="text-xl text-gray-600 ml-2">seconds</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
            <div 
              className="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${((5 - countdown) / 5) * 100}%` }}
            ></div>
          </div>
          
          {/* SEO Content */}
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            🎁 Preparing Your Free Gift!
          </h2>
          <p className="text-gray-600 mb-4">
            Please wait while we redirect you to your <strong className="text-blue-600">Match Masters</strong> reward page.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            You will receive <strong>FREE Coins, Boosters & Stickers</strong> instantly!
          </p>
          
          {/* SEO Keywords */}
          <div className="flex flex-wrap justify-center gap-2 mb-4 pt-3 border-t border-gray-100">
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">#FreeMatchMastersGifts</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">#DailyCoins</span>
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">#FreeBoosters</span>
          </div>
          
          <p className="text-xs text-gray-400">
            Don't forget to bookmark mmfreegifts.de for daily rewards!
          </p>
        </div>
      </div>
    </>
  );
}
