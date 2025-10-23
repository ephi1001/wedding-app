const Services = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        {/* Wedding Planning */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-4">Wedding Planning</h2>
            <p className="text-gray-600 mb-6">
              Our comprehensive wedding planning service covers every aspect of your special day. From initial consultations to the final dance,
              we handle all the details so you can focus on celebrating your love.
            </p>
            <h3 className="text-xl font-semibold mb-2">What We Offer:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Full wedding planning and coordination</li>
              <li>Timeline management and day-of coordination</li>
              <li>Vendor selection and contract negotiation</li>
              <li>Budget planning and financial management</li>
              <li>Guest list management and seating arrangements</li>
            </ul>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Pricing:</h4>
              <p className="text-gray-600">Starting at $2,500 - Contact us for a personalized quote</p>
            </div>
          </div>
        </section>

        {/* Premarital Counseling */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-4">Premarital Counseling</h2>
            <p className="text-gray-600 mb-6">
              Prepare for a lifetime of love with our premarital counseling services. We use evidence-based approaches to help couples
              build strong foundations for their marriage.
            </p>
            <h3 className="text-xl font-semibold mb-2">Our Approach:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>6-8 week comprehensive program</li>
              <li>Communication skills development</li>
              <li>Conflict resolution strategies</li>
              <li>Financial planning for couples</li>
              <li>Intimacy and expectations discussion</li>
            </ul>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Includes:</h4>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Workbook and resource materials</li>
                <li>Homework assignments</li>
                <li>Follow-up support</li>
              </ul>
              <p className="text-gray-600">Pricing: $150 per couple for 6 weeks</p>
            </div>
          </div>
        </section>

        {/* Event Coordination */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-4">Event Coordination</h2>
            <p className="text-gray-600 mb-6">
              For couples who want professional coordination without full planning, our day-of coordination service ensures
              everything runs smoothly on your wedding day.
            </p>
            <h3 className="text-xl font-semibold mb-2">Day-Of Services:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>On-site coordination from setup to cleanup</li>
              <li>Vendor management and communication</li>
              <li>Timeline adherence and cue management</li>
              <li>Problem-solving and contingency planning</li>
              <li>Photography timeline coordination</li>
            </ul>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Pricing:</h4>
              <p className="text-gray-600">$1,200 for 8-10 hour coordination</p>
            </div>
          </div>
        </section>

        {/* Customization Options */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-4">Customization Options</h2>
            <p className="text-gray-600 mb-6">
              Mix and match services to create the perfect package for your needs. We offer a la carte options for specific services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Floral Arrangements</h3>
                <p className="text-gray-600 mb-2">Custom floral design and vendor coordination</p>
                <p className="font-semibold">$500+</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Catering Coordination</h3>
                <p className="text-gray-600 mb-2">Menu planning and vendor management</p>
                <p className="font-semibold">$300+</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Photography</h3>
                <p className="text-gray-600 mb-2">Photographer selection and timeline coordination</p>
                <p className="font-semibold">$400+</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Venue Selection</h3>
                <p className="text-gray-600 mb-2">Venue research and booking assistance</p>
                <p className="font-semibold">$250+</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Schedule a consultation to discuss your vision and create a personalized plan.</p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition duration-300">
            Schedule Consultation
          </button>
        </section>
      </div>
    </div>
  );
};

export default Services;