import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', projectType: '', services: [],
    propertyType: '', roomsCount: '', budget: '', timeline: '', location: '',
    projectDescription: '', hasDesign: ''
  });

  // Hero Slides (from public folder)
  const heroSlides = [
    '/images/hero/slide1.jpg',
    '/images/hero/slide2.jpg',
    '/images/hero/slide3.jpg',
    '/images/hero/slide4.jpg'
  ];

  // Services Preview
  const services = [
    { title: 'Gypsum Ceiling Installation', image: '/images/services/gypsum-ceiling.jpg' },
    { title: 'Acoustic Ceiling Installation', image: '/images/services/acoustic-ceiling.jpg' },
    { title: 'Laminate Flooring Services', image: '/images/services/laminate-flooring.jpg' },
    { title: 'Paint Work', image: '/images/services/paint-work.jpg' },
    { title: 'Wall Panels and Marble Fixing', image: '/images/services/wall-panels.jpg' },
    { title: 'TV Units', image: '/images/services/tv-units.jpg' },
    { title: 'Wardrobes and Kitchen Cabinets', image: '/images/services/wardrobes-cabinets.jpg' }
  ];

  const servicesList = services.map(s => s.title);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    alert('Thank you, Solomon! Your quote request has been submitted. We will contact you within 24 hours.');
    setShowQuoteModal(false);
    setFormData({
      fullName: '', email: '', phone: '', projectType: '', services: [],
      propertyType: '', roomsCount: '', budget: '', timeline: '', location: '',
      projectDescription: '', hasDesign: ''
    });
  };

  return (
    <>
      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        <div className="relative h-full overflow-hidden">
          {heroSlides.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0  bg-opacity-50" />
            </div>
          ))}

          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-5xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                Crafting Spaces That Feel Like Home
              </h1>
              <p className="text-xl md:text-3xl text-gray-100 mb-10 drop-shadow-lg">
                Professional Interior Solutions in Nairobi
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => setShowQuoteModal(true)}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-lg text-xl font-semibold transition transform hover:scale-105 shadow-2xl"
                >
                  Get Free Quote Today
                </button>
                <Link
                  to="/projects"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white px-10 py-5 rounded-lg text-xl font-semibold transition"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-4 rounded-full transition">
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-4 rounded-full transition">
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${index === currentSlide ? 'bg-amber-600 w-10' : 'bg-white/60 w-3'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Complete interior solutions with expert craftsmanship</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/services"
                className="group relative h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer transform transition hover:scale-105 hover:shadow-2xl"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold drop-shadow-lg">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-lg text-xl font-semibold transition shadow-lg"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">Real homes transformed across Nairobi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/services/gypsum-ceiling.jpg)' }} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-amber-400 uppercase text-sm">Residential</p>
                <h3 className="text-3xl font-bold">Modern Gypsum Ceiling - Westlands</h3>
              </div>
            </div>
            <div className="group relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/services/tv-units.jpg)' }} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-amber-400 uppercase text-sm">Living Room</p>
                <h3 className="text-3xl font-bold">Luxury TV Unit - Lavington</h3>
              </div>
            </div>
            <div className="group relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/services/wardrobes-cabinets.jpg)' }} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-amber-400 uppercase text-sm">Kitchen</p>
                <h3 className="text-3xl font-bold">Custom Cabinets - Karen</h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block border-2 border-amber-600 hover:bg-amber-600 text-amber-600 hover:text-white px-10 py-4 rounded-lg text-xl font-semibold transition"
            >
              View Full Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-10">Get a free consultation from Nairobi's trusted interior experts</p>
          <button
            onClick={() => setShowQuoteModal(true)}
            className="bg-white text-amber-600 hover:bg-gray-100 px-12 py-5 rounded-lg text-xl font-bold transition transform hover:scale-105 shadow-2xl"
          >
            Request Your Free Quote Now
          </button>
        </div>
      </section>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center p-8 border-b">
              <h2 className="text-3xl font-bold text-gray-800">Request a Free Quote</h2>
              <button onClick={() => setShowQuoteModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-8 h-8" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Keep your full form here - same as before */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name *" required className="w-full px-4 py-3 border rounded-lg" />
                <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number *" required className="w-full px-4 py-3 border rounded-lg" />
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Email *" required className="w-full px-4 py-3 border rounded-lg" />
                <input name="location" value={formData.location} onChange={handleInputChange} placeholder="Location (e.g. Westlands)" required className="w-full px-4 py-3 border rounded-lg" />
              </div>
              {/* Add more fields as needed... */}
              <div className="flex justify-end gap-4 pt-6">
                <button type="button" onClick={() => setShowQuoteModal(false)} className="px-8 py-3 border rounded-lg hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold">Submit Request</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;