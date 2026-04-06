import { useState, useEffect } from 'react';
import RewardCard from './RewardCard';

export default function RewardSection() {
  const [rewards, setRewards] = useState([]);
  const [coinsSum, setCoinsSum] = useState(0);
  const [todayOthers, setTodayOthers] = useState([]); // Stickers, Boosters etc.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://eccisland.is/mm-gifts/api/rewards.php')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setRewards(data.rewards);
          
          // 📊 LOGIC: Filtering for Today Only
          const todayStr = new Date().toISOString().split('T')[0];
          const todayRewards = data.rewards.filter(r => r.created_at.startsWith(todayStr));
          
          // 1. Calculate Today's Coins Total
          const totalCoins = todayRewards
            .filter(r => r.type.toLowerCase().includes('coin'))
            .reduce((sum, r) => sum + (parseInt(r.amount) || 0), 0);
          setCoinsSum(totalCoins);

          // 2. Identify Other Gifts (Unique types like Sticker, Perk, Booster)
          const others = todayRewards
            .filter(r => !r.type.toLowerCase().includes('coin'))
            .map(r => r.type);
          
          setTodayOthers([...new Set(others)]); // Unique types only
        }
        setLoading(false);
      });
  }, []);

  const todayDisplayDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* 🏆 H2 TITLE UPAR 🏆 */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-[1000] text-[#0f172a] tracking-tight mb-2 uppercase">
  Today's Match Masters Rewards
</h2>
        <p className="text-blue-600 font-black text-xs uppercase tracking-[0.25em] italic">
          Last Update: {todayDisplayDate}
        </p>
      </div>

      {/* 🚀 GLOSSY HORIZONTAL BANNER (UPDATED WITH TAGS) 🚀 */}
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
            
            {/* 🏷️ TAGS LOGIC: Showing 1 Booster, 1 Sticker etc. */}
            {todayOthers.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                {todayOthers.map((gift, index) => (
                  <span key={index} className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/20 shadow-sm">
                    1 {gift}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 md:mt-0 relative z-10">
  <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold py-2.5 px-5 rounded-full shadow-md hover:translate-y-[2px] transition-all text-sm md:text-base uppercase">

    {/* Download Icon */}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-4 h-4"
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l-4-4m4 4l4-4M4 20h16" />
    </svg>

    Download & Collect
  </button>
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