import { useState } from 'react';
import RewardCard from './RewardCard';
// 1. Static data ko import karein
import { staticRewards } from '../data/static-rewards'; 

export default function RewardSection() {
  // 2. Fetching aur Loading ki zarurat nahi hai, seedha static data use karein
  const [rewards] = useState(staticRewards);

  // 📅 LOGIC: Get Today (6th) and Yesterday (5th)
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const tStr = today.toISOString().split('T')[0];
  const yStr = yesterday.toISOString().split('T')[0];

  // Banner ke liye filter (Sirf Aaj aur Kal)
  const recentRewards = rewards.filter(r => 
    r.created_at.startsWith(tStr) || r.created_at.startsWith(yStr)
  );
  
  // Coins Total
  const coinsSum = recentRewards
    .filter(r => r.type.toLowerCase().includes('coin'))
    .reduce((sum, r) => sum + (parseInt(r.amount) || 0), 0);

  // Gift Counts
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
          Match Masters Daily Rewards
        </h2>
        <p className="text-blue-600 font-black text-xs uppercase tracking-[0.25em] italic">
          Last Verified Update: {todayDisplayDate}
        </p>
      </div>

      {/* 🚀 BANNER (Ab ye bina loading ke instant dikhega) 🚀 */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-[40px] p-6 md:p-10 mb-20 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between group border-b-8 border-b-blue-900">
        <div className="flex items-center gap-8 relative z-10">
          <div className="bg-white p-4 rounded-2xl">
             <img src="/gift-box.png" alt="Gifts" className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl" />
          </div>
          <div className="text-white text-center md:text-left">
            <h3 className="text-4xl md:text-6xl font-[1000] italic uppercase leading-none tracking-tighter mb-2">
              {coinsSum > 0 ? `${coinsSum}+` : 'NEW'} FREE COINS &
            </h3>
            <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
              {Object.entries(giftCounts).map(([type, count], index) => (
                <span key={index} className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/20 shadow-sm">
                  {count} {type}{count > 1 ? 'S' : ''}
                </span>
              ))}
            </div>
          </div>
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
