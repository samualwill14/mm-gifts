import { useState, useEffect } from 'react';
import RewardCard from './RewardCard';
import { staticRewards } from '@/data/static-rewards';

export default function RewardSection() {
  const [rewards] = useState(staticRewards || []);
  const [redirectReward, setRedirectReward] = useState(null);

  // 📅 LOGIC: Banner calculation (Sirf Aaj aur Kal ka total)
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const tStr = today.toISOString().split('T')[0];
  const yStr = yesterday.toISOString().split('T')[0];

  const recentRewards = rewards.filter(r => 
    r.created_at.startsWith(tStr) || r.created_at.startsWith(yStr)
  );

  const coinsSum = recentRewards
    .filter(r => r.type.toLowerCase().includes('coin'))
    .reduce((sum, r) => sum + (parseInt(r.amount) || 0), 0);

  const giftCounts = {};
  recentRewards
    .filter(r => !r.type.toLowerCase().includes('coin'))
    .forEach(r => {
      const type = r.type;
      giftCounts[type] = (giftCounts[type] || 0) + 1;
    });

  const todayDisplayDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });

  // 🚀 REDIRECT TIMER LOGIC (same as solitaire version)
  useEffect(() => {
    if (!redirectReward) return;
    let seconds = 5;
    const interval = setInterval(() => {
      seconds--;
      const el = document.getElementById('countdownDisplay');
      const bar = document.getElementById('progressBar');
      if (el) el.textContent = seconds;
      if (bar) bar.style.width = `${((5 - seconds) / 5) * 100}%`;
      
      if (seconds <= 0) {
        clearInterval(interval);
        
        // Extract slug from reward_link
        const slug = redirectReward.reward_link.replace('https://eccisland.is/mm-gifts/reward-link-', '');
        
        // REAL DESTINATION URL (match your PHP structure)
        window.location.href = `https://eccisland.is/mm-gifts/reward-detail.php?slug=${slug}`;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [redirectReward]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 italic uppercase tracking-tighter">
          Today's Free Coin Links
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto font-medium text-lg">
          Click collect to claim your free Solitaire Grand Harvest coins. Links are daily updated.
        </p>
        <div className="mt-4 flex flex-col items-center gap-1">
          <p className="text-green-600 font-black text-xs uppercase tracking-widest">
            {displayRewards.length} rewards available — click Collect to claim
          </p>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            Last updated: {lastUpdateTime}
          </p>
          <div className="w-16 h-1 bg-green-500 rounded-full mt-2 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
        </div>
      </div>

      {/* GLOSSY BANNER - NO CHANGE */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-[40px] p-6 md:p-10 mb-20 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between group border-b-8 border-b-blue-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        <div className="flex items-center gap-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-xl p-1 rounded-3xl border border-white/20 shadow-2xl">
             <div className="bg-white p-4 rounded-2xl">
               <img src="/gift-box.png" alt="Gifts" className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl" />
             </div>
          </div>
          <div className="text-white text-center md:text-left">
            <h3 className="text-4xl md:text-6xl font-[1000] italic uppercase leading-none tracking-tighter mb-2">
              {coinsSum > 0 ? `${coinsSum}+` : 'NEW'} FREE COINS &<br/> 
            </h3>
            
            <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
              {Object.entries(giftCounts).length > 0 ? (
                Object.entries(giftCounts).map(([type, count], index) => (
                  <span key={index} className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/20 shadow-sm">
                    {count} {type}{count > 1 ? 'S' : ''}
                  </span>
                ))
              ) : (
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/20 shadow-sm">
                  NEW GIFTS LIVE
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-0 relative z-10">
          <a
            href="https://www.google.com/url?q=https://eccisland.is/mm-gifts&usg=AOvVaw1iP6IL6JKul_mDyI9YDonZ"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-black py-2.5 px-5 rounded-full shadow-md hover:translate-y-[2px] transition-all text-sm md:text-base uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
            Download & Collect
          </a>
        </div>
      </div>

      {/* REWARDS GRID - Pass onClaim handler */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {rewards.map((reward) => (
          <RewardCard 
            key={reward.id} 
            reward={reward} 
            onClaim={() => setRedirectReward(reward)} 
          />
        ))}
      </div>

      {/* 🔥 REDIRECT MODAL (same as solitaire, but design untouched) */}
      {redirectReward && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm font-sans">
          <div className="bg-white rounded-[40px] p-10 max-w-sm w-full text-center border-b-8 border-green-600 shadow-2xl relative overflow-hidden">
            
            <div className="flex justify-center mb-4">
               <img src="/gift.png" alt="Match Masters Free Gifts" className="w-24 h-24 object-contain animate-bounce" />
            </div>

            <h3 className="text-2xl font-black text-gray-900 uppercase italic">Preparing Link</h3>
            <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mt-2">
              Collecting {redirectReward.amount} {redirectReward.type}
            </p>
            
            <p className="text-6xl font-black text-green-600 my-6" id="countdownDisplay">5</p>
            
            <div className="w-full bg-gray-100 rounded-full h-3 mb-8 overflow-hidden">
              <div id="progressBar" className="bg-green-600 h-full transition-all duration-1000 ease-linear" style={{ width: '0%' }}></div>
            </div>
            
            <button onClick={() => setRedirectReward(null)} className="text-gray-400 font-black text-[10px] uppercase tracking-[0.3em] hover:text-red-500 transition-colors">
              Cancel Process
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
