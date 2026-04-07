import Head from 'next/head';
import NotificationBar from '@/components/NotificationBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Lightbulb, Target, Trophy, Zap, Coins, Star, Users, ShieldAlert } from 'lucide-react';

export default function TipsTricksIndex() {
  const articles = [
    {
      slug: "how-to-get-free-coins-on-match-masters",
      title: "How to Get Free Coins on Match Masters? (9 Ways Explained)",
      description: "Learn the most effective ways to farm coins daily. From lucky spins to tournament rewards, we cover every legitimate method.",
      image: "/mm-free-coins-guide.webp",
      date: "April 05, 2026"
    },
    {
      slug: "get-free-stickers-match-masters",
      title: "How to Get Free Stickers on Match Masters?",
      description: "Complete your albums faster! Discover how to find rare stickers, trade with friends, and unlock massive seasonal rewards.",
      image: "/mm-stickers-guide.webp",
      date: "April 03, 2026"
    },
    {
      slug: "match-masters-perks-guide",
      title: "Match Masters Perks Guide (How to Get, Use, All Perks)",
      description: "Master the use of Perks to gain an edge in every match. A complete breakdown of all perk types and when to activate them.",
      image: "/mm-perks-guide.webp",
      date: "April 01, 2026"
    }
  ];

  return (
    <>
      <Head>
        <title>Match Masters Tips & Tricks | Master Your Game</title>
        <meta name="description" content="Expert strategies for Match Masters. Learn how to get free coins, stickers, and master all perks with our professional guides." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mmfreegifts.de/tips-&-tricks/" />        
        <meta property="og:title" content="Match Masters Tips & Tricks | Pro Winning Strategies" />
        <meta property="og:description" content="Master your Match Masters game with expert guides on free coins, rare stickers, and booster management." />
        <meta property="og:url" content="https://mmfreegifts.de/tips-&-tricks/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="mmfreegifts" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MM Free Gifts" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <NotificationBar
        text="🎁 NEW: Legendary Booster Rewards are Live!"
        buttonText="Claim Now"
        buttonLink="https://www.google.com/url?q=https://eccisland.is/mm-gifts&usg=AOvVaw1iP6IL6JKul_mDyI9YDonZ"
        backgroundColor="#1e40af"
        textColor="#FFFFFF"
        buttonColor="#FACC15"
      />

      <div className="mt-12 flex-grow flex flex-col min-h-screen font-sans">
        <Navbar />
        
        <main className="flex-grow bg-slate-50 pb-16">
          
          <section className="bg-slate-900 pt-20 pb-32 px-4 text-center shadow-lg relative overflow-hidden"
             style={{
               backgroundImage: "linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9)), url('/match-masters-bg.jpg')",
               backgroundSize: "cover",
               backgroundPosition: "center",
             }}
          >
            <div className="absolute top-10 left-10 opacity-20 animate-pulse text-white"><Zap size={48} /></div>
            <div className="absolute bottom-10 right-10 opacity-20 animate-bounce text-white"><Coins size={48} /></div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 drop-shadow-2xl uppercase tracking-tighter">
              Tips & Tricks
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium drop-shadow-md italic">
              Level up your strategy with expert Match Masters guides. Win more matches and claim massive daily rewards.
            </p>
          </section>

          <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {articles.map((article, index) => (
                <article 
                  key={index}
                  className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col group"
                >
                  <Link href={`/tips-&-tricks/${article.slug}/`} className="flex flex-col h-full">
                    <div className="relative w-full pt-[60%] overflow-hidden bg-slate-200">
                      <Image 
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center text-xs text-blue-700 font-bold mb-4 bg-blue-50 w-fit px-4 py-1.5 rounded-full uppercase tracking-widest">
                        <Calendar className="w-3.5 h-3.5 mr-2" />
                        <time>{article.date}</time>
                      </div>
                      
                      <h2 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                        {article.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-8 line-clamp-3 flex-grow leading-relaxed text-base">
                        {article.description}
                      </p>
                      
                      <div className="mt-auto flex items-center text-blue-600 font-black uppercase text-sm tracking-widest">
                        Read Here 
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-slate-950 border border-blue-800 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden text-white">
              
              <Trophy className="absolute -right-10 -top-10 w-72 h-72 text-blue-600 opacity-20 rotate-12 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col items-center text-center mb-12">
                  <div className="bg-yellow-400 p-4 rounded-2xl shadow-lg text-blue-950 mb-6 inline-block">
                    <Lightbulb className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">
                    Match Masters Golden Rules
                  </h2>
                  <p className="text-blue-100 mt-2 max-w-2xl text-lg opacity-80 italic">
                    Follow these 4 essential rules to dominate the leaderboard and never run out of boosters.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Tip 1 */}
                  <div className="flex items-start gap-5 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group">
                    <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                      <Zap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 uppercase">Save High-Tier Boosters</h3>
                      <p className="text-blue-100 leading-relaxed opacity-80">Don't waste Diamond or Legendary boosters on easy matches. Save them for high-stakes tournaments where the coin rewards are massive.</p>
                    </div>
                  </div>

                  {/* Tip 2 */}
                  <div className="flex items-start gap-5 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group">
                    <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center text-blue-950 flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                      <Star className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 uppercase">Complete Daily Spins</h3>
                      <p className="text-blue-100 leading-relaxed opacity-80">Log in daily to use your free lucky spins. It's the most consistent way to earn free perks and small coin bundles without playing a single match.</p>
                    </div>
                  </div>

                  {/* Tip 3 */}
                  <div className="flex items-start gap-5 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group">
                    <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                      <Users className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 uppercase">Join an Active Team</h3>
                      <p className="text-blue-100 leading-relaxed opacity-80">Teams allow you to request stickers and chat about strategies. Being in a top-tier team unlocks exclusive group rewards and bonus coins.</p>
                    </div>
                  </div>

                  {/* Tip 4 */}
                  <div className="flex items-start gap-5 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group">
                    <div className="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                      <ShieldAlert className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 uppercase">Manage Your Moves</h3>
                      <p className="text-blue-100 leading-relaxed opacity-80">Always prioritize blue pieces to charge your booster faster. A charged booster is often the difference between winning and losing a tight match.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      <style jsx global>{`
        body {
          background-color: #f8fafc;
        }
      `}</style>
    </>
  );
}
