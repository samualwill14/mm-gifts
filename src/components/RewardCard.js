import { useState, useEffect } from 'react';
import { Timer, CheckCircle2, MousePointer2, AlertCircle } from 'lucide-react';

export default function RewardCard({ reward }) {
  const [isCollected, setIsCollected] = useState(false);

  useEffect(() => {
    const collected = localStorage.getItem(`mm_reward_${reward.id}`);
    if (collected) setIsCollected(true);
  }, [reward.id]);

  const handleCollect = (e) => {
    if (!isActive) {
      e.preventDefault();
      return;
    }
    setIsCollected(true);
    localStorage.setItem(`mm_reward_${reward.id}`, 'true');
  };

  // 📅 DATE CALCULATION LOGIC
  const rewardDate = new Date(reward.created_at);
  const today = new Date();
  
  // Time ko reset kar rahe hain taaki sirf date compare ho
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const startOfReward = new Date(rewardDate.getFullYear(), rewardDate.getMonth(), rewardDate.getDate());
  
  const diffTime = startOfToday - startOfReward;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // 1. Agar link 5 din se purana hai toh dikhao hi mat
  if (diffDays > 4) return null; 

  // 2. Sirf Aaj (0) aur Kal (1) wale links ACTIVE honge
  const isActive = diffDays <= 1;

  const getTheme = (type) => {
    // Agar link Expired hai toh Gray theme
    if (!isActive) return { 
        bg: 'from-gray-400 to-gray-500', 
        shadow: 'shadow-[0_8px_0_#374151]', 
        label: 'LINK EXPIRED' 
    };

    const t = type?.toLowerCase() || '';
    if (t.includes('coin')) return { bg: 'from-[#fbc02d] to-[#f9a825]', shadow: 'shadow-[0_8px_0_#b45309]', label: 'COLLECT COINS' };
    if (t.includes('booster')) return { bg: 'from-[#a855f7] to-[#7e22ce]', shadow: 'shadow-[0_8px_0_#581c87]', label: 'COLLECT BOOSTER' };
    if (t.includes('perk')) return { bg: 'from-[#22c55e] to-[#15803d]', shadow: 'shadow-[0_8px_0_#14532d]', label: 'COLLECT PERKS' };
    if (t.includes('sticker')) return { bg: 'from-[#ec4899] to-[#be185d]', shadow: 'shadow-[0_8px_0_#831843]', label: 'COLLECT STICKER' };

    return { bg: 'from-[#3b82f6] to-[#2563eb]', shadow: 'shadow-[0_8px_0_#1e3a8a]', label: 'COLLECT REWARD' };
  };

  const theme = getTheme(reward.type);
  
  const formattedDate = new Date(reward.created_at).toLocaleString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true
  });

  return (
    <div className={`bg-white rounded-[35px] shadow-sm border border-gray-100 p-6 flex flex-col items-center relative transition-all border-b-4 border-b-gray-200 ${!isActive ? 'opacity-70 grayscale-[0.5]' : 'hover:shadow-md'}`}>
      
      {/* Header Metadata */}
      <div className="w-full flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 shadow-inner overflow-hidden">
            <img src="/gift-box.png" alt="Gift Icon" className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h3 className={`text-lg font-black leading-none mb-1 uppercase italic tracking-tighter ${!isActive ? 'text-gray-400' : 'text-[#1a1a1a]'}`}>
              {reward.amount} FREE {reward.type}
            </h3>
            <div className="flex items-center gap-1">
              <span className={`text-[9px] font-black uppercase tracking-widest ${isActive ? 'text-green-600' : 'text-gray-400'}`}>
                {isActive ? 'Verified Gift' : 'Expired'}
              </span>
              <span className="text-[9px] text-blue-500 font-bold flex items-center gap-0.5 whitespace-nowrap">
                • <MousePointer2 size={8}/> {reward.clicks || Math.floor(Math.random() * 50) + 20} clicks
              </span>
            </div>
          </div>
        </div>
        
        <div className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 border shadow-inner ${isActive ? 'bg-gray-50 border-gray-100' : 'bg-red-50 border-red-100'}`}>
           {isActive ? <Timer size={12} className="text-green-500" /> : <AlertCircle size={12} className="text-red-500" />}
           <span className={`text-[10px] font-bold uppercase italic whitespace-nowrap ${isActive ? 'text-gray-500' : 'text-red-500'}`}>
             {isActive ? 'Active' : 'Expired'}
           </span>
        </div>
      </div>

      {/* 🚀 THE 3D BUTTON (NOW CONDITIONAL) 🚀 */}
      <a
        href={isActive ? reward.reward_link : '#'}
        target={isActive ? "_blank" : "_self"}
        rel="nofollow noopener noreferrer"
        onClick={handleCollect}
        className={`w-full py-4 rounded-full font-black text-white text-sm transition-all text-center no-underline flex items-center justify-center gap-2 border-t-2 border-white/30 ${
          !isActive 
            ? 'bg-gray-400 cursor-not-allowed shadow-none translate-y-[4px]' 
            : isCollected 
              ? 'bg-emerald-500 shadow-none translate-y-[4px] opacity-80' 
              : `bg-gradient-to-r ${theme.bg} ${theme.shadow} hover:brightness-105 active:shadow-none active:translate-y-[8px]`
        }`}
      >
        {isCollected && isActive ? <><CheckCircle2 size={18}/> COLLECTED</> : theme.label}
      </a>

      <p className="mt-5 text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">
        {formattedDate}
      </p>
    </div>
  );
}
