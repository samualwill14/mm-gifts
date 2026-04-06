import { useState } from 'react';
import RewardCard from './RewardCard';
import { staticRewards } from '@/data/static-rewards';

export default function RewardSection() {
  // 1. Static Data Setup
  const [rewards] = useState(staticRewards);

  // 2. Logic: Aaj aur Kal ke Rewards Filter karna (Banner Calculation ke liye)
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const tStr = today.toISOString().split('T')[0]; // "2024-04-06"
  const yStr = yesterday.toISOString().split('T')[0]; // "2024-04-05"

  const recentRewards = rewards.filter(r => 
    r.created_at.startsWith(tStr) || r.created_at.startsWith(yStr)
  );

  // 3. Coins ka Total Sum (Sirf Aaj aur Kal ka)
  const coinsSum = recentRewards
    .filter(r => r.type.toLowerCase().includes('coin'))
    .reduce((sum, r) => sum + (parseInt(r.amount) || 0), 0);

  // 4. Baki Gifts ka Count (Boosters, Perks etc.)
  const giftCounts = {};
  recentRewards
    .filter(r => !r.type.toLowerCase().includes('coin'))
    .forEach(r => {
      const type = r.type;
      giftCounts[type] = (giftCounts[type] || 0) + 1;
    });

  return (
    <section id="rewards-section" className="py-16 px-4 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title Area */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight uppercase">
            Today's Match Masters Rewards
          </h2>
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            Last Verified: {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric'
            })}
          </p>
        </div>

        {/* 🚀 GLOSSY BANNER (Match Masters Blue Theme) 🚀 */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-6 md:p-10 rounded-[40px] shadow-2xl mb-20 relative overflow-hidden border-b-8 border-indigo-900 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          {/* Decorative Sparkle SVG (Matches MM vibe better than leaf) */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none rotate-12">
             <svg width="250" height="250" viewBox="0 0 24 24" fill="white"><path d="M12,2L14.5,9.5L22,12L14.5,14.5L12,22L9.5,14.5L2,12L9.5,9.5L12,2Z"/></svg>
          </div>

          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
              <div className="bg-white/10 backdrop-blur-xl p-2 rounded-[35px] border border-white/20 shadow-2xl">
                <div className="bg-white p-4 rounded-[28px]">
                  <img 
                    alt="Match Masters Rewards" 
                    width="100" 
                    height="100" 
                    className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-xl" 
                    src="/gift-box.png" 
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-4xl md:text-6xl font-[1000] text-white mb-4 italic uppercase leading-none tracking-tighter">
                {coinsSum > 0 ? `${coinsSum}+` : 'NEW'} FREE COINS & <br/>
                <span className="text-yellow-400">DAILY GIFTS</span>
              </h3>
              
              {/* Actual Gift Tags */}
              <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                {Object.entries(giftCounts).length > 0 ? (
                  Object.entries(giftCounts).map(([type, count], index) => (
                    <span key={index} className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/20 shadow-sm">
                      {count} {type}{count > 1 ? 'S' : ''}
                    </span>
                  ))
                ) : (
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/20 shadow-sm">
                    Stickers & Boosters Live
                  </span>
                )}
              </div>
              
              <a
                href="https://www.google.com/url?q=https://eccisland.is/mm-gifts&usg=AOvVaw1iP6IL6JKul_mDyI9YDonZ"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-black py-4 px-10 rounded-full transition-all transform hover:translate-y-[-2px] shadow-xl uppercase tracking-wider text-sm md:text-base border-t-4 border-white/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
                <span>Download & Collect</span>
              </a>
            </div>
          </div>
        </div>

        {/* REWARDS GRID */}
        {rewards.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[40px] border-4 border-dashed border-slate-100">
            <p className="text-slate-400 font-bold text-xl uppercase tracking-widest">Scanning for new rewards...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rewards.map((reward) => (
              <RewardCard key={reward.id} reward={reward} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
