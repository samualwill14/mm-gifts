import { useState, useEffect } from 'react';
import RewardCard from './RewardCard';

export default function RewardSection() {
  const [rewards, setRewards] = useState([]);
  const [coinsSum, setCoinsSum] = useState(0);
  const [giftCounts, setGiftCounts] = useState({}); // Stores counts like { Booster: 2, Perk: 2 }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://eccisland.is/mm-gifts/api/rewards.php')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setRewards(data.rewards);
          
          // 📅 LOGIC: Get Today (6th) and Yesterday (5th) date strings
          const today = new Date();
          const yesterday = new Date();
          yesterday.setDate(today.getDate() - 1);

          const tStr = today.toISOString().split('T')[0]; // "2024-04-06"
          const yStr = yesterday.toISOString().split('T')[0]; // "2024-04-05"

          // 1. Filter rewards for ONLY these 2 days
          const recentRewards = data.rewards.filter(r => 
            r.created_at.startsWith(tStr) || r.created_at.startsWith(yStr)
          );
          
          // 2. Sum actual Coins for these 2 days
          const totalCoins = recentRewards
            .filter(r => r.type.toLowerCase().includes('coin'))
            .reduce((sum, r) => sum + (parseInt(r.amount) || 0), 0);
          setCoinsSum(totalCoins);

          // 3. Count other Gifts (Boosters, Perks, etc.) correctly
          const counts = {};
          recentRewards
            .filter(r => !r.type.toLowerCase().includes('coin'))
            .forEach(r => {
              const type = r.type;
              counts[type] = (counts[type] || 0) + 1;
            });
          
          setGiftCounts(counts); // Ab counts mein { "Booster": 2, "Perk": 2 } jaisa data hoga
        }
        setLoading(false);
      });
  }, []);

  const todayDisplayDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* 🏆 TITLE 🏆 */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-[1000] text-[#0f172a] tracking-tight mb-2 uppercase">
          Match Masters Daily Rewards
        </h2>
        <p className="text-blue-600 font-black text-xs uppercase tracking-[0.25em] italic">
          Last Verified Update: {todayDisplayDate}
        </p>
      </div>

      {/* 🚀 BANNER 🚀 */}
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
              {/* Actual Sum dikhega (Jaise 200+ FREE COINS) */}
              {coinsSum > 0 ? `${coinsSum}+` : 'NEW'} FREE COINS &
            </h3>
            
            {/* 🏷️ TAGS LOGIC: Showing actual counts */}
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
    className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold py-2.5 px-5 rounded-full shadow-md hover:translate-y-[2px] transition-all text-sm md:text-base uppercase"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4v10m0 0l-4-4m4 4l4-4M4 20h16"
      />
    </svg>
    Download & Collect
  </a>
</div>
      </div>

      {/* REWARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {loading ? (
          [1,2,3].map(i => <div key={i} className="h-64 bg-gray-100 rounded-[35px] animate-pulse"></div>)
        ) : (
          rewards.map((reward) => <RewardCard key={reward.id} reward={reward} />)
        )}
      </div>
    </section>
  );
}
