import NotificationBar from '@/components/NotificationBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, User, Monitor, Cookie, Share2, Mail, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: "Privacy Policy - mmfreegifts",
  description: "Privacy Policy for Match Masters Free Gifts - Learn how we collect, use, and protect your personal information when using our website.",
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Top Notification Bar */}
      <NotificationBar
        text="🎲 FREE Match Masters Gifts(Fastest Updates)"
        buttonText="Collect Now"
        buttonLink="https://www.google.com/url?q=https%3A%2F%2Fmonopoly.modapk48.com%2F&sa=D&sntz=1&usg=AOvVaw3TubdLbpnBrAWqKNnrAOTI"
        backgroundColor="#1e3a8a"
        textColor="#FFFFFF"
        buttonColor="#FFFFFF"
      />

      <div className="mt-12 flex-grow flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        <main className="flex-grow bg-gray-50 pb-16">
          
          {/* Hero Section matching Match Masters Theme (Blue to Cyan) */}
          <section className="bg-gradient-to-r from-blue-500 to-cyan-600 pt-20 pb-32 px-4 text-center shadow-lg"
             style={{
               backgroundImage: "linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(8, 145, 178, 0.8)), url('/bg-img.jpg')",
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat"
             }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-2xl">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md">
              Learn how we collect, use, and protect your personal information when using our website.
            </p>
          </section>

          {/* Main Content inside a beautifully floating card */}
          <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              
              <div className="text-center mb-10 border-b border-gray-100 pb-8">
                <p className="text-gray-500 font-medium inline-block bg-gray-50 px-4 py-1 rounded-full border border-gray-200">
                  Last updated: March 25, 2026
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-6 text-left">
                  This Privacy Policy controls the system in which mmfreegifts collects and maintains information collected from users (each, a "User") of the <a href="https://mmfreegifts.de/" className="text-blue-600 hover:underline font-medium">https://mmfreegifts.de/</a> website ("Site"). This privacy policy applies to the Site and all services offered by mmfreegifts.
                </p>
              </div>

              <div className="space-y-12">
                
                {/* Personal Information */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      <User className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed ml-2 border-l-4 border-blue-50 pl-4">
                    We may collect personal information from Users, with their Compliance, when Users visit our site, register on the site, and in connection with other activities, services, features, or resources that we make available on our Site. Users may be asked for, as correct, name, email address. Users may, still, visit our Site anonymously. We will collect personal information from Users only if they are submitting such information to us. Users can always reject to supply personal information, except that it may obstruct them from being attractive in certain Site related activities.
                  </p>
                </div>

                {/* Non-personal Information */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-cyan-100 p-2 rounded-lg text-cyan-600">
                      <Monitor className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Non-personal Identification Information</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed ml-2 border-l-4 border-cyan-50 pl-4">
                    We may be collect non-personal information about Users whenever they interact with our website. Non-personal information may include the browser name and technical information about Users means of connection to our Sites, such as the operating system and other similar information.
                  </p>
                </div>

                {/* Cookies */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      <Cookie className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Cookies</h2>
                  </div>
                  <div className="text-gray-700 text-lg leading-relaxed space-y-4 ml-2 border-l-4 border-blue-50 pl-4">
                    <p>
                      Our website may be used "cookies" to enhance the User experience. User's web browser places cookies on their hard drive for record-keeping intention. Users may choose to set their web browser to reject cookies or be too aware when cookies are being sent. If they do so, note that some parts of the website may not operate properly.
                    </p>
                    <p>
                      The services that may use cookies on this site include Google Analytics, Google+, Twitter, Facebook, and YouTube integrations, advertisements, embeds for YouTube, Twitter, etc.
                    </p>
                    <p className="bg-gray-50 p-3 rounded-lg border border-gray-100 inline-block text-base">
                      How to control the cookies in your computer: <a href="https://www.aboutcookies.org/" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 font-semibold hover:underline">https://www.aboutcookies.org/</a>
                    </p>
                  </div>
                </div>

                {/* Sharing Information */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-cyan-100 p-2 rounded-lg text-cyan-600">
                      <Share2 className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Sharing Your Private Information</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed ml-2 border-l-4 border-cyan-50 pl-4">
                    We do not sell or rent Users' personal or private information to third-party websites and others. We may share generic aggregated demographic information not linked to any personal information concerning visitors and users with our business partners and advertisers for the purposes outlined above. By accessing the services and/or fulfilling the registration process for our website, you represent that you are 18 years of age. In simple words, you have to be at least 18 years old to access our website.
                  </p>
                </div>

                {/* Contact Us */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                  </div>
                  <div className="text-gray-700 text-lg leading-relaxed ml-2 border-l-4 border-blue-50 pl-4">
                    <p>
                      We are committed to providing a secure and clear experience to our Users. Maintaining our users' privacy and data is extremely important to us. If you have any queries about this Privacy Policy or your dealings with this site, please contact us at:
                    </p>
                    <p className="mt-2 font-medium">
                      Email: <a href="mailto:support@mmfreegifts.de" className="text-blue-600 hover:underline">support@mmfreegifts.de</a>
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Disclaimer</h2>
                  </div>
                  <div className="text-gray-700 text-lg leading-relaxed ml-2 border-l-4 border-orange-50 pl-4">
                    <p>
                      This site [mmfreegifts] is for educational purposes. This site uses information that is freely available on the web. This site has not any right to videos or photos which you have downloaded - the only right of respected users and all the copyright and trademark goes to them. Match Masters and Scopely are trademarks and the copyright of Scopely.
                    </p>
                    <p className="mt-3">
                      If you have an issue then contact us. We remove the content from our website. Thanks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary Box (Premium Design) */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-8 shadow-sm mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white p-2 rounded-lg shadow-sm text-blue-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">Summary of Our Privacy Practices</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">No selling of personal info</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Cookies used for UX enhancement</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Full control via browser settings</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">18+ age restriction applies</span>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center text-gray-500 text-sm mt-10">
                <p>By using our website, you consent to our Privacy Policy and agree to its terms.</p>
              </div>

            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}