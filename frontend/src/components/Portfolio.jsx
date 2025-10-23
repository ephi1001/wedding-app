const Portfolio = () => {
  const galleryImages = [
    { id: 1, src: 'https://via.placeholder.com/400x300/FFB6C1/000000?text=Wedding+1', alt: 'Romantic garden wedding' },
    { id: 2, src: 'https://via.placeholder.com/400x300/FFC0CB/000000?text=Wedding+2', alt: 'Beach destination wedding' },
    { id: 3, src: 'https://via.placeholder.com/400x300/FF69B4/000000?text=Wedding+3', alt: 'Elegant ballroom reception' },
    { id: 4, src: 'https://via.placeholder.com/400x300/FF1493/000000?text=Wedding+4', alt: 'Intimate vineyard ceremony' },
    { id: 5, src: 'https://via.placeholder.com/400x300/DC143C/000000?text=Wedding+5', alt: 'Mountain lodge wedding' },
    { id: 6, src: 'https://via.placeholder.com/400x300/C71585/000000?text=Wedding+6', alt: 'Urban rooftop celebration' },
  ];

  const beforeAfterImages = [
    { id: 1, before: 'https://via.placeholder.com/300x200/808080/FFFFFF?text=Before', after: 'https://via.placeholder.com/300x200/FFB6C1/000000?text=After', description: 'Transformed barn venue' },
    { id: 2, before: 'https://via.placeholder.com/300x200/808080/FFFFFF?text=Before', after: 'https://via.placeholder.com/300x200/FFC0CB/000000?text=After', description: 'Garden makeover' },
    { id: 3, before: 'https://via.placeholder.com/300x200/808080/FFFFFF?text=Before', after: 'https://via.placeholder.com/300x200/FF69B4/000000?text=After', description: 'Ceremony setup' },
  ];

  const clientStories = [
    {
      id: 1,
      couple: 'Sarah & John',
      story: 'Our wedding was absolutely magical. The team handled every detail perfectly, from the floral arrangements to the timeline. We felt completely stress-free on our special day.',
      highlight: 'Featured in Wedding Magazine'
    },
    {
      id: 2,
      couple: 'Emily & Michael',
      story: 'The premarital counseling helped us communicate better and set realistic expectations. Our wedding planning experience was seamless and enjoyable.',
      highlight: 'Destination Wedding Success'
    },
    {
      id: 3,
      couple: 'Jessica & David',
      story: 'From the initial consultation to the final dance, everything was perfect. The attention to detail and personal touch made our day unforgettable.',
      highlight: 'Award-Winning Photography'
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>

        {/* Photo Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Wedding Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center px-4">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Before and After */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Before & After Transformations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterImages.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={item.before} alt="Before" className="w-full h-32 object-cover" />
                    <span className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 text-xs rounded">Before</span>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="After" className="w-full h-32 object-cover" />
                    <span className="absolute top-2 right-2 bg-pink-600 text-white px-2 py-1 text-xs rounded">After</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-center font-semibold">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Client Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientStories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-pink-600">{story.couple}</h3>
                  <p className="text-sm text-gray-500">{story.highlight}</p>
                </div>
                <p className="text-gray-600 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Weddings */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured Weddings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Romantic Garden Wedding</h3>
              <p className="mb-4">
                A beautiful outdoor ceremony followed by an elegant reception under twinkling lights.
                This couple's vision of a fairy-tale wedding came to life with our expert planning.
              </p>
              <div className="flex items-center">
                <span className="text-4xl mr-4">💐</span>
                <div>
                  <p className="font-semibold">Location: Botanical Gardens</p>
                  <p>Guest Count: 150</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Beach Destination Wedding</h3>
              <p className="mb-4">
                Sun, sand, and romance - this tropical paradise wedding was the perfect escape for this adventurous couple.
                From travel coordination to local vendors, we handled it all.
              </p>
              <div className="flex items-center">
                <span className="text-4xl mr-4">🏖️</span>
                <div>
                  <p className="font-semibold">Location: Hawaii</p>
                  <p>Guest Count: 75</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Inspired by Our Work?</h2>
          <p className="text-xl mb-8">Let's create something beautiful together. Contact us to start planning your dream wedding.</p>
          <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition duration-300">
            Start Your Story
          </button>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;