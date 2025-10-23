const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

        {/* Mission & Values */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To create unforgettable wedding experiences that celebrate love, honor traditions, and bring families together.
            We believe every couple deserves a wedding that reflects their unique story and love.
          </p>
        </section>

        {/* Team Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-32 h-32 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-amber-600 mb-2">Lead Wedding Planner</p>
              <p className="text-gray-600 mb-4">
                With over 10 years of experience, Sarah has planned over 200 weddings. She specializes in destination weddings
                and has a passion for creating magical moments.
              </p>
              <p className="text-sm text-gray-500">Certified Wedding Planner, MBA in Event Management</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-32 h-32 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-amber-600 mb-2">Premarital Counselor</p>
              <p className="text-gray-600 mb-4">
                Michael holds a Master's in Marriage and Family Therapy. He helps couples build strong foundations
                for their marriage through evidence-based counseling.
              </p>
              <p className="text-sm text-gray-500">Licensed Marriage and Family Therapist, PhD in Counseling</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-32 h-32 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
              <p className="text-amber-600 mb-2">Event Coordinator</p>
              <p className="text-gray-600 mb-4">
                Emily brings creativity and attention to detail to every event. She specializes in day-of coordination
                and has a talent for problem-solving under pressure.
              </p>
              <p className="text-sm text-gray-500">Certified Event Planner, BA in Hospitality Management</p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
                <p className="text-gray-600">
                  We take the time to understand your vision, preferences, and budget. Every wedding is unique,
                  and we tailor our services to create an experience that perfectly matches your dreams.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Professional Excellence</h3>
                <p className="text-gray-600">
                  Our team brings years of experience and industry knowledge to every project. We stay current
                  with the latest trends and best practices in wedding planning.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Attention to Detail</h3>
                <p className="text-gray-600">
                  From the smallest detail to the grand vision, we ensure nothing is overlooked. Our meticulous
                  planning guarantees a smooth and stress-free experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Vendor Relationships</h3>
                <p className="text-gray-600">
                  We maintain strong relationships with the best vendors in the industry, ensuring you get
                  quality service and competitive pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold mb-2">Award-Winning</h3>
              <p className="text-gray-600 text-sm">Recognized by the wedding industry for excellence</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="font-semibold mb-2">100% Success Rate</h3>
              <p className="text-gray-600 text-sm">Every wedding we plan exceeds expectations</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold mb-2">Personal Touch</h3>
              <p className="text-gray-600 text-sm">We treat every couple like family</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold mb-2">Budget Friendly</h3>
              <p className="text-gray-600 text-sm">Transparent pricing with no hidden fees</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">Let's discuss how we can make your wedding dreams come true.</p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition duration-300">
            Get Started Today
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;