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
  Coins, 
  Spade, 
  Leaf, 
  Dog, 
  Zap, 
  Trophy, 
  Star,
  Gamepad2,
  CheckCircle2
} from 'lucide-react';

// Custom Social Icons
const FacebookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TwitterIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

export default function HowToPlaySGH() {
  return (
    <>
      <Head>
        <title>How to Play Solitaire Grand Harvest [Master Farming Guide]</title>
        <meta name="description" content="Learn how to play Solitaire Grand Harvest effectively. Master TriPeaks Solitaire, build your farm, and get tips from experts to win free coins." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://solitairegrandharvestcoins.de/tips-&-tricks/how-to-play/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="How to Play Solitaire Grand Harvest [Master Farming Guide]" />
        <meta property="og:description" content="Master the art of Solitaire Grand Harvest. Complete guide for beginners and pro strategies to grow your farm." />
        <meta property="og:url" content="https://solitairegrandharvestcoins.de/tips-&-tricks/how-to-play/" />
        <meta property="og:image" content="https://solitairegrandharvestcoins.de/upload/sgh-guide-hero.png" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="SolitaireGrandHarvestCoins" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Play Solitaire Grand Harvest [Complete Guide]" />
        <meta name="twitter:image" content="https://solitairegrandharvestcoins.de/upload/sgh-guide-hero.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Notification Bar - Harvest Theme */}
      <NotificationBar
        text="🌽 FREE Solitaire Grand Harvest Coins (March 2026 Updates)"
        buttonText="Collect Now"
        buttonLink="/"
        backgroundColor="#166534"
        textColor="#FFFFFF"
        buttonColor="#FACC15"
      />

      <div className="mt-12 flex-grow flex flex-col min-h-screen font-sans">
        <Navbar />

        <main className="flex-grow bg-[#f0f9f1] pb-20">
          
          {/* Hero Header Section - Green Gradient */}
          <section className="bg-gradient-to-r from-green-700 to-emerald-600 pt-16 pb-40 px-4 shadow-inner"
            style={{
               backgroundImage: "linear-gradient(to right, rgba(22, 101, 52, 0.9), rgba(16, 185, 129, 0.85)), url('/farm-texture.jpg')",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Breadcrumbs */}
              <div className="flex items-center justify-center space-x-2 text-green-100 text-sm font-medium mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/tips-&-tricks" className="hover:text-white transition-colors">Tips & Tricks</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white opacity-70">How to Play Guide</span>
              </div>

              {/* Article Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
                How to Play Solitaire Grand Harvest [Master Guide]
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-green-50 font-medium">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 opacity-80" />
                  <span>By SGH Expert Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 opacity-80" />
                  <time>March 26, 2026</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 opacity-80" />
                  <span>8 min read</span>
                </div>
              </div>
            </div>
          </section>

          {/* Article Content Area */}
          <div className="max-w-4xl mx-auto px-4 -mt-24 relative z-10">
            
            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-10 bg-white border-4 border-white">
              <Image 
                src="/how-to-play-sgh.jpg"
                alt="How to Play Solitaire Grand Harvest Guide" 
                width={1024} 
                height={576} 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Content Box */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-green-50">
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-8 font-semibold text-green-800 italic border-l-4 border-green-500 pl-6">
                  "Solitaire Grand Harvest is a fun, relaxing, and rewarding game! Start playing today and build your dream farm with all of your new Solitaire friends."
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get to Know your Next Adventure</h2>
                <p className="mb-6">
                  Solitaire Grand Harvest blends classic TriPeaks Solitaire with a vast world of farming fun, offering a unique twist on the card game that reinvents the way you play Solitaire. Whether you’re a Solitaire pro or new to the game, get ready to flip cards, grow crops, meet vibrant characters, build an epic farm, and partake in exciting side-challenges.
                </p>

                <p className="mb-10">
                  This article, written by <strong>Lee (Solitaire Grand Harvest team member & expert)</strong>, has everything you need to kickstart your journey—from a step-by-step starter guide to advanced tips for mastering every level.
                </p>

                {/* Step-by-Step Guide Section */}
                <h2 className="text-3xl font-bold text-green-900 mt-12 mb-8 flex items-center gap-3">
                  <Gamepad2 className="text-green-600" /> How to Play – A Step-by-Step Guide
                </h2>
                
                <div className="space-y-6 mb-12">
                  {[
                    { step: "1", text: "You’ll start off on your personal map, guided by Sam the dog. Simply click on a level to start playing your first match." },
                    { step: "2", text: "Like classic Tripeaks, your goal is to clear the playing field. For every level, you’ll get a star rating (1-3) based on cards remaining and moves used." },
                    { step: "3", text: "The more levels you complete with three stars, the better your streak bonus and goodies will be in the long run." },
                    { step: "4", text: "Complete daily missions to win prizes. These rewards help you build and harvest more crops, growing your farm into a digital paradise." }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5 bg-green-50/50 p-6 rounded-2xl border border-green-100 hover:bg-green-50 transition-colors">
                      <span className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">{item.step}</span>
                      <p className="text-gray-800 font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* Tips & Tricks Section */}
                <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8 border-b-2 border-green-100 pb-4">
                  Expert Tips & Tricks for Mastering the Harvest
                </h2>

                <div className="grid gap-8">
                  <div className="bg-white border-2 border-dashed border-green-200 p-8 rounded-3xl">
                    <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2"><CheckCircle2 className="w-6 h-6" /> 1. Plan Every Move Carefully</h3>
                    <p>You’re not racing the clock, so take your time. Don’t just play the first available card. Choose the card that opens up more options or leads to longer streaks. If your current card is a 4 and you have a 3 or 5, choose the one that leads to a longer combo sequence.</p>
                  </div>

                  <div className="bg-white border-2 border-dashed border-green-200 p-8 rounded-3xl">
                    <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2"><CheckCircle2 className="w-6 h-6" /> 2. Focus on Streaks for Bigger Bonuses</h3>
                    <p>Watch the streak meter! It fills up when you play cards consecutively. Complete a full streak to earn bonus coins, credits, or boosters. Streaks also unlock level-specific goals, like bones for Sam.</p>
                  </div>

                  <div className="bg-white border-2 border-dashed border-green-200 p-8 rounded-3xl">
                    <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2"><CheckCircle2 className="w-6 h-6" /> 3. Choose Cards That Reveal More</h3>
                    <p>When faced with multiple playable cards, opt for the one that uncovers more face-down cards. This increases your chances of continuing streaks and finding the hidden cards you need to clear the board.</p>
                  </div>
                </div>

                {/* Table Section - Special Cards */}
                <h2 className="text-3xl font-bold text-gray-900 mt-20 mb-8">Special Twists at Solitaire Grand Harvest</h2>
                <div className="overflow-x-auto rounded-2xl border border-green-200 shadow-lg mb-12">
                  <table className="w-full text-left border-collapse bg-white">
                    <thead className="bg-green-700 text-white">
                      <tr>
                        <th className="p-5 font-bold">Icon/Type</th>
                        <th className="p-5 font-bold">Special Card</th>
                        <th className="p-5 font-bold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-green-50">
                      <tr>
                        <td className="p-5 text-green-600 font-bold"><Zap /></td>
                        <td className="p-5 font-bold">Windmill Cards</td>
                        <td className="p-5 text-gray-600">Wipe out three cards at the beginning of levels automatically.</td>
                      </tr>
                      <tr className="bg-green-50/30">
                        <td className="p-5 text-orange-500 font-bold"><Spade /></td>
                        <td className="p-5 font-bold">Wild Cards</td>
                        <td className="p-5 text-gray-600">Our jokers that can be played with any face-up card on the board.</td>
                      </tr>
                      <tr>
                        <td className="p-5 text-blue-500 font-bold"><Leaf /></td>
                        <td className="p-5 font-bold">Lily Pads</td>
                        <td className="p-5 text-gray-600">They block your path. Play cards right to make Hoppy jump away!</td>
                      </tr>
                      <tr className="bg-green-50/30">
                        <td className="p-5 text-red-500 font-bold">💣</td>
                        <td className="p-5 font-bold">Bombs</td>
                        <td className="p-5 text-gray-600">Clear the cards around the bomb before it goes off and ends your game.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* World of Features Section */}
                <h2 className="text-3xl font-bold text-green-900 mt-16 mb-8 flex items-center gap-3">
                  <Trophy className="text-amber-500" /> A World of Exciting Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                  {[
                    { title: "The Grand Album", desc: "Collect Album Packs to win the biggest prizes." },
                    { title: "MyTrail", desc: "Progress on your rewards trail by completing daily tasks." },
                    { title: "Dice Challenge", desc: "Collect dice and roll them over the rewards board." },
                    { title: "Tournament", desc: "Compete against other farmers for the top leaderboard spots." }
                  ].map((feat, idx) => (
                    <div key={idx} className="p-6 bg-gradient-to-br from-white to-green-50 border border-green-100 rounded-2xl flex items-start gap-4 shadow-sm">
                      <Star className="w-6 h-6 text-amber-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">{feat.title}</h4>
                        <p className="text-sm text-gray-600">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Farm Friends Section - CHARACTER GUIDE */}
                <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-10 text-center">Meet Your Farm Friends</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                  
                  {/* Sam the Dog */}
                  <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-xl hover:shadow-2xl transition-all group">
                    <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Dog className="w-12 h-12 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Sam the Dog</h3>
                    <p className="text-green-700 font-bold mb-4 italic">"The Farming Guide"</p>
                    <p className="text-gray-600">Sam will guide you on your farming adventure. <strong>Tip:</strong> Pet him when he’s not napping to earn extra credits randomly.</p>
                  </div>

                  {/* Mia the Cat */}
                  <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-xl hover:shadow-2xl transition-all group">
                    <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="text-4xl">🐱</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Mia the Cat</h3>
                    <p className="text-purple-700 font-bold mb-4 italic">"Album Leader"</p>
                    <p className="text-gray-600">Leader of the Grand Album adventure. <strong>Tip:</strong> Play levels with Higher Multipliers to score bigger Album Packs.</p>
                  </div>

                  {/* Peggy the Pig */}
                  <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-xl hover:shadow-2xl transition-all group">
                    <div className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="text-4xl">🐷</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Peggy the Pig</h3>
                    <p className="text-pink-700 font-bold mb-4 italic">"Savings Expert"</p>
                    <p className="text-gray-600">Saves extra credits for you in her piggy bank. Boost your progress by claiming her savings when the bank is full.</p>
                  </div>

                  {/* Carrie the Bunny */}
                  <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-xl hover:shadow-2xl transition-all group">
                    <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="text-4xl">🐰</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Carrie the Bunny</h3>
                    <p className="text-orange-700 font-bold mb-4 italic">"The Booster"</p>
                    <p className="text-gray-600">Hops out to boost your winnings with her carrots. <strong>Tip:</strong> Win levels consecutively to earn Carrie’s massive boost.</p>
                  </div>

                </div>

                {/* Final Words Highlight Box */}
                <div className="bg-gradient-to-br from-green-800 to-emerald-900 border-l-8 border-yellow-400 p-10 rounded-3xl shadow-2xl text-white">
                  <h3 className="text-3xl font-bold mb-4">Your Farm-tastic Adventure Awaits!</h3>
                  <p className="text-lg leading-relaxed opacity-90 mb-6">
                    Solitaire Grand Harvest is way more than just Solitaire; it’s a thriving, vibrant world where strategy meets fun. Every card flipped is another step toward building your epic farm. Whether you’re playing for fun, rewards, or to climb the leaderboard, there’s always something new to discover.
                  </p>
                  <Link href="/" className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 font-black py-4 px-10 rounded-full hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg uppercase tracking-wider">
                    Collect Free Coins Now <ChevronRight className="w-6 h-6" />
                  </Link>
                </div>

                {/* Share Article Section */}
                <div className="mt-16 pt-10 border-t border-green-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-gray-900 font-bold text-lg">Share this Farming Guide:</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#1DA1F2] text-white rounded-2xl hover:brightness-110 transition-all font-bold shadow-md">
                      <TwitterIcon className="w-5 h-5" /> Twitter
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#4267B2] text-white rounded-2xl hover:brightness-110 transition-all font-bold shadow-md">
                      <FacebookIcon className="w-5 h-5" /> Facebook
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
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap');
        body {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>
    </>
  );
}