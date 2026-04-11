import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Free Gifts' },
    { href: '/tips-&-tricks/how-to-get-free-coins-on-match-masters', label: 'Free Coins' },
    { href: '/tips-&-tricks/get-free-stickers-match-masters', label: 'Free Stickers' },
    { href: '/contact-us/', label: 'Contact Us' },
    { href: '/privacy-policy/', label: 'Privacy Policy' },
  ];

  return (
    <nav className="w-full bg-white shadow-lg z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <img alt="Match Masters Logo" fetchPriority="high" width="150" height="40" decoding="async" className="object-contain" src="/logo.png" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} className="text-gray-700 hover:text-blue-500" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-500 focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          {navLinks.map((link) => (
            <Link key={link.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
