const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Plan Your Perfect Wedding Today</h1>
          <p className="text-xl mb-8">Let us make your special day unforgettable with our expert wedding planning services.</p>
          <div className="space-x-4">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              Book a Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition duration-300">
              Start Planning
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Wedding Planning</h3>
              <p className="text-gray-600">Comprehensive planning from engagement to reception.</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premarital Counseling</h3>
              <p className="text-gray-600">Prepare for marriage with expert guidance and resources.</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Event Coordination</h3>
              <p className="text-gray-600">Seamless coordination for your special day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Browse our services or get in touch to begin planning your dream wedding.</p>
          <div className="space-x-4">
            <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition duration-300">
              Browse Services
            </button>
            <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">"Our wedding was absolutely perfect thanks to this amazing team. They handled every detail with care and professionalism."</p>
              <p className="font-semibold">- Sarah & John</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">"The premarital counseling helped us build a stronger foundation for our marriage. Highly recommend!"</p>
              <p className="font-semibold">- Emily & Michael</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">"From planning to execution, everything was seamless. Our day was magical."</p>
              <p className="font-semibold">- Jessica & David</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-lg">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-lg">info@weddingplanner.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;