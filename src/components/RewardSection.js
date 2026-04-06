import { useState } from 'react';
import RewardCard from './RewardCard';
import { staticRewards } from '@/data/static-rewards';

export default function RewardSection() {
  const [rewards] = useState(staticRewards || []);

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

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-[1000] text-[#0f172a] tracking-tight mb-2 uppercase">
          Today's Match Masters Rewards
        </h2>
        <p className="text-blue-600 font-black text-xs uppercase tracking-[0.25em] italic">
          Last Verified Update: {todayDisplayDate}
        </p>
      </div>

      {/* 🚀 ORIGINAL GLOSSY BANNER (Size & Design Restored) 🚀 */}
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

      {/* REWARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {rewards.map((reward) => (
          <RewardCard key={reward.id} reward={reward} />
        ))}
      </div>
    </section>
  );
}
