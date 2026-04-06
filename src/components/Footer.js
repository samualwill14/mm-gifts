import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MMfreegifts.de</h3>
            <p className="text-gray-400">
              Find and Collect Daily Match Masters Free Gifts, Coins, Boosters, perks and More. Updated daily
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-blue-500">Home</Link></li>
              <li><Link href="/tips-&-tricks" className="text-gray-400 hover:text-blue-500">Tips & Tricks</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-gray-400 hover:text-blue-500">About Us</Link></li>
              <li><Link href="/contact-us" className="text-gray-400 hover:text-blue-500">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-blue-500">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 MMfreegifts - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
