import { useState, useEffect } from 'react';
import { Timer, CheckCircle2, MousePointer2 } from 'lucide-react';

export default function RewardCard({ reward }) {
  const [isCollected, setIsCollected] = useState(false);

  useEffect(() => {
    const collected = localStorage.getItem(`mm_reward_${reward.id}`);
    if (collected) setIsCollected(true);
  }, [reward.id]);

  const handleCollect = () => {
    setIsCollected(true);
    localStorage.setItem(`mm_reward_${reward.id}`, 'true');
  };

  // 🎨 COLORS FIX: Wahi original 3D shadow aur glossy gradients
  const getTheme = (type) => {
    const t = type?.toLowerCase() || '';
    
    // Coins = Yellow
    if (t.includes('coin')) return { 
        bg: 'from-[#fbc02d] to-[#f9a825]', 
        shadow: 'shadow-[0_8px_0_#b45309]', 
        label: 'COLLECT COINS' 
    };
    
    // Boosters = Purple
    if (t.includes('booster')) return { 
        bg: 'from-[#a855f7] to-[#7e22ce]', 
        shadow: 'shadow-[0_8px_0_#581c87]', 
        label: 'COLLECT BOOSTER' 
    };
    
    // Perks = Green
    if (t.includes('perk')) return { 
        bg: 'from-[#22c55e] to-[#15803d]', 
        shadow: 'shadow-[0_8px_0_#14532d]', 
        label: 'COLLECT PERKS' 
    };

    // Others (Stickers, Gems etc) = Blue/Pink
    if (t.includes('sticker')) return { 
        bg: 'from-[#ec4899] to-[#be185d]', 
        shadow: 'shadow-[0_8px_0_#831843]', 
        label: 'COLLECT STICKER' 
    };

    return { 
        bg: 'from-[#3b82f6] to-[#2563eb]', 
        shadow: 'shadow-[0_8px_0_#1e3a8a]', 
        label: 'COLLECT REWARD' 
    };
  };

  const theme = getTheme(reward.type);
  
  const formattedDate = new Date(reward.created_at).toLocaleString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true
  });

  return (
    <div className="bg-white rounded-[35px] shadow-sm border border-gray-100 p-6 flex flex-col items-center relative transition-all hover:shadow-md border-b-4 border-b-gray-200">
      
      {/* Header Metadata */}
      <div className="w-full flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 shadow-inner overflow-hidden">
    {/* Always showing gift.png from public folder */}
    <img 
      src="/gift-box.png" 
      alt="Gift Icon" 
      className="w-10 h-10 object-contain" 
    />
  </div>
  <div>
    <h3 className="text-lg font-black text-[#1a1a1a] leading-none mb-1 uppercase italic tracking-tighter">
      {reward.amount} FREE {reward.type}
    </h3>
    <div className="flex items-center gap-1">
      <span className="text-[9px] font-black text-green-600 uppercase tracking-widest">Verified Gift</span>
      <span className="text-[9px] text-blue-500 font-bold flex items-center gap-0.5 whitespace-nowrap">
        • <MousePointer2 size={8}/> {reward.clicks || Math.floor(Math.random() * 50) + 20} clicks
      </span>
    </div>
  </div>
</div>
        
        <div className="bg-gray-50 px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-gray-100 shadow-inner">
           <Timer size={12} className="text-green-500" />
           <span className="text-[10px] font-bold text-gray-500 uppercase italic whitespace-nowrap">
             {reward.timeAgo || 'Active'}
           </span>
        </div>
      </div>

      {/* 🚀 THE ORIGINAL 3D BUTTON (DESIGN UNCHANGED) 🚀 */}
      <a
        href={reward.reward_link}
        target="_blank"
        rel="nofollow noopener noreferrer"
        onClick={handleCollect}
        className={`w-full py-4 rounded-full font-black text-white text-sm transition-all text-center no-underline flex items-center justify-center gap-2 border-t-2 border-white/30 ${
          isCollected 
            ? 'bg-emerald-500 shadow-none translate-y-[4px] opacity-80' 
            : `bg-gradient-to-r ${theme.bg} ${theme.shadow} hover:brightness-105 active:shadow-none active:translate-y-[8px]`
        }`}
      >
        {isCollected ? <><CheckCircle2 size={18}/> COLLECTED</> : theme.label}
      </a>

      <p className="mt-5 text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">
        {formattedDate}
      </p>
    </div>
  );
}