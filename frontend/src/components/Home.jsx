const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0a1533] via-[#1e2b4a] to-[#b0592d] text-white min-h-screen flex items-center overflow-hidden z-0">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <p className="text-lg text-white/90 mb-3">
            Welcome to the leading agency of the century
          </p>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4">
            Damascus Marketing
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Premiering a global class solution for top companies over the world.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-4xl animate-pulse">💒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Wedding Planning</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Comprehensive planning from engagement to reception with meticulous attention to every detail.</p>
            </div>
            <div className="group text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-4xl animate-pulse">💍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Premarital Counseling</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Prepare for marriage with expert guidance and resources to build a strong foundation.</p>
            </div>
            <div className="group text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-4xl animate-pulse">🎉</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Event Coordination</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Seamless coordination ensuring your special day flows perfectly from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-gray-100 via-amber-50 to-gray-100 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="rings" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                <circle cx="7.5" cy="7.5" r="3" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#rings)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">Ready to Start Your Journey?</h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto">Browse our services or get in touch to begin planning your dream wedding. Let's create memories that will last a lifetime.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-amber-600 hover:to-amber-700">
              Browse Services
            </button>
            <button className="border-3 border-amber-600 text-amber-600 px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-amber-600 hover:text-white bg-white">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">"Our wedding was absolutely perfect thanks to this amazing team. They handled every detail with care and professionalism."</p>
              <p className="font-bold text-amber-600 text-lg">- Sarah & John</p>
              <div className="flex justify-center mt-4">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">"The premarital counseling helped us build a stronger foundation for our marriage. Highly recommend!"</p>
              <p className="font-bold text-amber-600 text-lg">- Emily & Michael</p>
              <div className="flex justify-center mt-4">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">"From planning to execution, everything was seamless. Our day was magical."</p>
              <p className="font-bold text-amber-600 text-lg">- Jessica & David</p>
              <div className="flex justify-center mt-4">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-amber-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="contact-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <circle cx="12.5" cy="12.5" r="2" fill="currentColor"/>
                <circle cx="12.5" cy="12.5" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-pattern)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Get in Touch</h2>
          <p className="text-xl mb-16 max-w-2xl mx-auto">Ready to turn your wedding dreams into reality? Contact us today and let's start planning your perfect day.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-4">Phone</h3>
              <p className="text-xl">(555) 123-4567</p>
              <p className="text-sm mt-2 opacity-80">Call us anytime for immediate assistance</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold mb-4">Email</h3>
              <p className="text-xl">info@weddingplanner.com</p>
              <p className="text-sm mt-2 opacity-80">Send us your inquiries and we'll respond promptly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;