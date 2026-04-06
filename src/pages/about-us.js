import NotificationBar from '@/components/NotificationBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, HeartHandshake, ShieldCheck, Gamepad2, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: "About Us - MMfreegifts",
  description: "Learn about MMfreegifts - Your trusted source for daily free Gifts links, stickers, and rewards for Match Masters game.",
};

export default function AboutUs() {
  return (
    <>
      {/* Top Notification Bar */}
      <NotificationBar
        text="🎲 FREE Match Masters Gifts (Fastest Updates)"
        buttonText="Collect Now"
        buttonLink="https://www.google.com/url?q=https%3A%2F%2Fmonopoly.modapk48.com%2F&sa=D&sntz=1&usg=AOvVaw3TubdLbpnBrAWqKNnrAOTI"
        backgroundColor="#1e3a8a"
        textColor="#FFFFFF"
        buttonColor="#FFFFFF"
      />

      <div className="mt-12 flex-grow flex flex-col min-h-screen">
        {/* Same Navbar */}
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
              About Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md">
              Your trusted source for daily free Gifts links, stickers, and rewards for Match Masters.
            </p>
          </section>

          {/* Main Content inside a beautifully floating card */}
          <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              
              {/* Intro Section */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                    <HeartHandshake className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome to MMfreegifts!</h2>
                </div>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Hello! We are happy because you want to know something more about our site. Nowadays people are playing games on their phones and looking for different tricks and rewards. Our first wish is to provide you with a better solution to your problem.
                  </p>
                  <p>
                    Basically, lots of users play Match Masters mobile game which requires lots of Gifts and Stickers. So, we are going to provide daily free Gifts for Match Masters. Also, we are trying to provide useful & latest content that provides you with ideas about all updated information that's happening in the world.
                  </p>
                  <p className="bg-gray-50 p-4 rounded-xl border border-gray-200 inline-block mt-4">
                    If you have additional questions, do not hesitate to contact us through email at <a href="mailto:support@MMfreegifts.de" className="text-blue-600 font-semibold hover:underline">support@MMfreegifts.de</a>
                  </p>
                </div>
              </div>

              <hr className="border-gray-100 mb-10" />

              {/* Goal Section */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-cyan-100 p-3 rounded-xl text-cyan-600">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">What is Our Goal?</h2>
                </div>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    There are millions of websites created every day, also, there is much fake content and reward links for Match Masters spread on the internet. So, Our main goal is to provide you with <strong className="text-gray-900">100% Original and Safe content</strong> that provides you with a great and better experience on the World Wide Web.
                  </p>
                  <p>
                    We mainly focus on our service and improving it regularly to provide a better user experience to all users. Basically, we focus on providing Match Masters Free Gifts and Stickers reward links. So, users can claim the reward easily.
                  </p>
                </div>
              </div>

              <hr className="border-gray-100 mb-10" />

              {/* Services Section */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-700">
                    <Gamepad2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">What is our Service?</h2>
                </div>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    We are mainly focused on free Gifts links so, we try to share all the features and add more working Gifts reward links. Here you can get all the Match Masters free Gifts on a daily basis. You get Today as well as yesterday and the day before links as well. On our website MMfreegifts you can get all the useful information with the working and latest reward links for free Gifts.
                  </p>
                  <p>
                    Also, we provide a Notification update service - you can join by email and other Social Media Platforms, and all Links you can get on the Homepage. Visit now!
                  </p>
                  <p>
                    This Website was Created By the Match Masters Free Gifts Team to help people because many people are still spending hours of time getting exact information. So, this is the only motive for sharing free Gifts links to help people and provide them a better web experience.
                  </p>
                </div>
              </div>

              {/* Why Trust Us Section (Premium Box Design) */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white p-2 rounded-lg shadow-sm text-blue-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">Why Trust Us?</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Daily updated working reward links</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">100% tested and verified links</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Free and no registration required</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Instant notifications for new rewards</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>

        {/* Same Footer */}
        <Footer />
      </div>
    </>
  );
}