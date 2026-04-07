import Head from 'next/head';
import NotificationBar from '@/components/NotificationBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm'; 
import { Mail, Share2, Link as LinkIcon, MessageCircle } from 'lucide-react';

const FacebookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us - mmfreegifts</title>
        <meta name="description" content="Have questions about Match Masters free Gifts links? Need support? We're always here to help you out!" />
        <link rel="canonical" href="https://mmfreegifts.de/contact-us/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Us - mmfreegifts" />
        <meta property="og:description" content="Have questions about Match Masters free Gifts links? Need support? We're always here to help you out!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mmfreegifts.de/contact-us/" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="SGH Free Coins" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <NotificationBar
        text="🎲 FREE Match Masters Gifts (Fastest Updates)"
        buttonText="Collect Now"
        buttonLink="https://www.google.com/url?q=https%3A%2F%2Fmonopoly.modapk48.com%2F&sa=D&sntz=1&usg=AOvVaw3TubdLbpnBrAWqKNnrAOTI"
        backgroundColor="#1e3a8a"
        textColor="#FFFFFF"
        buttonColor="#FFFFFF"
      />

      <div className="mt-12 flex-grow flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow bg-gray-50 pb-16">
          <section className="bg-gradient-to-r from-blue-500 to-cyan-600 pt-20 pb-32 px-4 text-center shadow-lg"
             style={{
               backgroundImage: "linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(8, 145, 178, 0.8)), url('/bg-img.jpg')",
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat"
             }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-2xl">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md">
              Have questions about Match Masters free Gifts links? Need support? We're always here to help you out!
            </p>
          </section>

          <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {/* Email Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition-transform hover:-translate-y-2 border-b-4 border-blue-600">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-blue-600 font-semibold mb-2 hover:underline cursor-pointer">
                  support@mmfreegifts.de
                </p>
                <p className="text-gray-500 text-sm">We'll respond within 24-48 hours</p>
              </div>

              {/* Follow Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition-transform hover:-translate-y-2 border-b-4 border-cyan-500">
                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Share2 className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="p-3 bg-gray-50 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors shadow-sm">
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-gray-50 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-colors shadow-sm">
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-gray-50 rounded-full text-indigo-500 hover:bg-indigo-500 hover:text-white transition-colors shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Links Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition-transform hover:-translate-y-2 border-b-4 border-blue-600">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LinkIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Links</h3>
                <p className="text-gray-700 mb-2 font-medium">Get free Gifts daily</p>
                <p className="text-gray-500 text-sm">Updated every single day</p>
              </div>
            </div>

            {/* Message Form Box */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
              <div className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
                  <p className="text-gray-500 mt-2">Fill out the form below and we will get back to you.</p>
                </div>
                
                <ContactForm />

              </div>
            </div>

            <div className="mt-12 text-center pb-8">
              <p className="text-gray-500 text-sm font-medium bg-white shadow-sm border border-gray-200 inline-block px-6 py-3 rounded-full">
                For urgent inquiries about expired links, please email us directly.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
