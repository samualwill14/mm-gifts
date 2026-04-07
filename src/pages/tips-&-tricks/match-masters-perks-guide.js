import Head from 'next/head';
import NotificationBar from '@/components/NotificationBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  ChevronRight, 
  User, 
  Zap, 
  Trophy, 
  Target, 
  Gamepad2, 
  CheckCircle2, 
  Star,
  Info,
  Lightbulb,
  MousePointer2
} from 'lucide-react';

// Custom Social Icons
const FacebookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TwitterIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

export default function MatchMastersPerksGuide() {
  return (
    <>
      <Head>
        <title>Match Masters Perks Guide (How to Get, Use, All Perks)</title>
        <meta name="description" content="An ultimate guide to Match Masters perks. Learn how to get perks, usage, trophy unlock levels, and professional strategies to win every match." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mmfreegifts.de/tips-&-tricks/match-masters-perks-guide/" />
        <meta property="og:title" content="Match Masters Perks Guide (How to Get, Use, All Perks)" />
        <meta property="og:image" content="/mm-perks-guide.webp" />
        <meta property="og:description" content="Master all Match Masters perks. Detailed guide on unlocking Mini Cleo, Detonator, and effective usage strategies." />
        <meta property="og:url" content="https://mmfreegifts.de/tips-&-tricks/match-masters-perks-guide/" />
        <meta property="og:type" content="article" />
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
        text="⚡ NEW: Collect Free Perks & Boosters (Daily Update)"
        buttonText="Get Now"
        buttonLink="https://www.google.com/url?q=https://eccisland.is/mm-gifts&usg=AOvVaw1iP6IL6JKul_mDyI9YDonZ"
        backgroundColor="#1e40af"
        textColor="#FFFFFF"
        buttonColor="#FACC15"
      />

      <div className="mt-12 flex-grow flex flex-col min-h-screen font-sans text-slate-900">
        <Navbar />

        <main className="flex-grow bg-[#f8fafc] pb-20">
          
          <section className="bg-slate-900 pt-16 pb-40 px-4 shadow-inner relative overflow-hidden"
            style={{
               backgroundImage: "linear-gradient(to right, rgba(30, 58, 138, 0.9), rgba(67, 56, 202, 0.85)), url('/bg.webp')",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="flex items-center justify-center space-x-2 text-blue-100 text-sm font-medium mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/tips-&-tricks" className="hover:text-white transition-colors">Tips & Tricks</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white opacity-70">Perks Guide</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-2xl leading-tight uppercase tracking-tight">
                An ultimate guide to Match Masters perks
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-6 text-blue-50 font-medium">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 opacity-80" />
                  <span>By MM Pro Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 opacity-80" />
                  <time>April 01, 2026</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 opacity-80" />
                  <span>7 min read</span>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-4xl mx-auto px-4 -mt-24 relative z-10">
            
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-10 bg-white border-4 border-white relative aspect-video">
              <Image 
                src="/mm-perks-guide.webp" 
                alt="Match Masters Perks Ultimate Guide" 
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-blue-50">
              
              <div className="prose prose-lg max-w-none text-gray-700">
                
                <h2 className="text-2xl md:text-3xl font-black text-blue-900 mb-6 leading-tight italic border-l-8 border-blue-600 pl-6">
                  How to get perks, usage, and everything about them?
                </h2>
                <p className="text-lg leading-relaxed mb-10">
                  Perks are single-use, passive, and strategic tools that provide tactical edge. There are some perks available for free, but there are some powerful and premium perks that must be earned or purchased using coins. Let’s know about the Match Master’s perks.
                </p>

                <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 uppercase tracking-tight border-b-4 border-blue-100 pb-2">
                  Match Masters All Perks!
                </h2>

                <div className="grid gap-6 mb-12">
                  {[
                    { name: "Mini Cleo", text: "The perk provides you with an opportunity to get lots of perks. It unlocks at 30,000 trophies. It releases a scarab that scatters multiple copies of a selected piece." },
                    { name: "Energy boost", text: "For one turn, any color match you make will charge your booster. The perk unlocks at 3,400 trophies." },
                    { name: "Checkerboard", text: "It changes the whole board to create a checkerboard pattern. It unlocks at 15,000 trophies." },
                    { name: "Create lightning", text: "It adds two lightning strikes at random spots on the board. The perk unlocks at 1,500 trophies." },
                    { name: "Remove Cross", text: "It removes the entire row and column based on the selected piece. Generally, the perk unlocks at 2,950 trophies." },
                    { name: "Mini Cobra", text: "Select a column and clone it to the right if it is on the left and vice versa. It unlocks at 15,000 trophies." },
                    { name: "Mini Wand", text: "Remove a random color from the board. It creates a chance to make more matches. It unlocks at 2,425 trophies." },
                    { name: "Mini Mastermind", text: "Make special matches by rearranging some board pieces. The perk unlocks at 675 trophies." },
                    { name: "Bomb Delivery", text: "Place a bomb in the middle of the board to explore all around pieces. It gets unlocked at 900 trophies." },
                    { name: "Teleport", text: "Swaps the position of any two pieces on the board. Also, create blue special pieces. It gets unlocked at 6,000 trophies." },
                    { name: "Star Maker", text: "Add blue stars for more blue pieces to match. It activates the booster as well. It also creates some special blue pieces." },
                    { name: "Detonator", text: "The perk activates all the special pieces on the board. The perk becomes available around 2,950 trophies. It gets unlocked in the 15,000-plus trophy range or even higher. It is an advanced perk like checkerboard." },
                    { name: "Shuffle", text: "It shuffles all the current pieces on the board and creates new combinations. It is a basic or free perk." },
                    { name: "Hammer", text: "It removes any single piece on the board. It is a basic perk." }
                  ].map((perk, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-md transition-all group">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Zap size={24} />
                      </div>
                      <div>
                        <h4 className="font-black text-xl text-blue-900 mb-1">{perk.name}</h4>
                        <p className="text-gray-600 font-medium leading-relaxed">{perk.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6 uppercase tracking-tight">
                  How to get perks in Match Masters?
                </h2>
                <p className="mb-8 font-medium">You can get perks in Match masters by focusing on completing the sticker albums, seasonal events, trophy milestones, completing daily missions, and so on. Have a look at these:</p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Claim Match masters daily free links",
                    "Special tournaments",
                    "Coin purchases",
                    "Social media giveaways",
                    "Events",
                    "Album rewards"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-400 transition-all">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-gray-800 font-bold">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 p-6 rounded-[2rem] border-l-8 border-amber-400 mb-10">
                   <p className="text-amber-900 font-bold mb-4 flex items-center gap-2 italic">
                     <Info size={20} /> Note: Be sure you utilize your daily free links and also keep an eye on the social media community of Match Masters to maximize your perks to reach hard milestones with ease.
                   </p>
                   <p className="text-slate-800 font-black">
                     New premium perks get unlocked at around 3,800 trophies.
                   </p>
                </div>

                <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6 uppercase tracking-tight">
                  How to use perks in Match Masters effectively?
                </h2>
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 mb-16">
                  <p className="mb-6 leading-relaxed">
                    In every match, you will get two perks to use. One perk can be used at a time. You can use them by touching their icon, which you can find at the bottom of the left corner.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    To use perks effectively, you have to combine them with the booster activations, prioritizing blue star matches that charge boosters and saving high-value perks. To get the maximum points, you can pair perks like checkerboard and detonator.
                  </p>
                  <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-xl flex items-start gap-4">
                    <Lightbulb className="shrink-0 text-yellow-300" size={28} />
                    <p className="font-bold leading-relaxed">
                      Make sure you create a perfect strategy and use perks at the right time to create the best effect. Stay focused and keep playing.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-800 to-indigo-950 p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group text-white">
                  <Trophy className="absolute -right-10 -bottom-10 w-72 h-72 text-yellow-400 opacity-10 group-hover:rotate-12 transition-transform duration-1000" />
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight leading-tight">
                      Conclusion: Collecting stickers is all about your strategy of trading and consistency in the game!
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-10 italic">
                      Boost your collection of stickers by smart trading, playing games consistently, and community engagement. Create a steady coin collection by inviting friends, joining a team, and winning levels.
                    </p>
                    <Link href="/" className="inline-flex items-center gap-3 bg-yellow-400 text-blue-950 font-black py-4 px-10 rounded-full hover:bg-yellow-300 transition-all hover:scale-105 shadow-xl uppercase tracking-widest text-sm">
                      Free Match masters Gifts Links <ChevronRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>

                <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                    <span className="text-gray-900 font-black uppercase text-sm tracking-widest">Share Pro Perks Guide:</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#1DA1F2] text-white rounded-2xl hover:opacity-90 transition-all font-black shadow-md text-sm">
                      <TwitterIcon className="w-4 h-4" /> Twitter
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#4267B2] text-white rounded-2xl hover:opacity-90 transition-all font-black shadow-md text-sm">
                      <FacebookIcon className="w-4 h-4" /> Facebook
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800;900&display=swap');
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>
    </>
  );
}
