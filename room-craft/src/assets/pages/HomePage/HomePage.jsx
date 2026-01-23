import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, X } from 'lucide-react';

// Import your images here
// Hero images
import heroSlide1 from '../../images/hero/slide1.jpg';
import heroSlide2 from '../../images/hero/slide2.jpg';
import heroSlide3 from '../../images/hero/slide3.jpg';
import heroSlide4 from '../../images/hero/slide4.jpg';

// Service images
import gypsumImage from '../../images/services/gypsum-ceiling.jpg';
import acousticImage from '../../images/services/acoustic-ceiling.jpg';
import laminateImage from '../../images/services/laminate-flooring.jpg';
import paintImage from '../../images/services/paint-work.jpg';
import wallPanelsImage from '../../images/services/wall-panels.jpg';
import tvUnitsImage from '../../images/services/tv-units.jpg';
import wardrobesImage from '../../images/services/wardrobes-cabinets.jpg';

const RoomcraftWebsite = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    services: [],
    propertyType: '',
    roomsCount: '',
    budget: '',
    timeline: '',
    location: '',
    projectDescription: '',
    hasDesign: ''
  });

  const heroSlides = [
    heroSlide1,
    heroSlide2,
    heroSlide3,
    heroSlide4
  ];

  const services = [
    {
      title: 'Gypsum Ceiling Installation',
      image: gypsumImage
    },
    {
      title: 'Acoustic Ceiling Installation',
      image: acousticImage
    },
    {
      title: 'Laminate Flooring Services',
      image: laminateImage
    },
    {
      title: 'Paint Work',
      image: paintImage
    },
    {
      title: 'Wall Panels and Marble Fixing',
      image: wallPanelsImage
    },
    {
      title: 'TV Units',
      image: tvUnitsImage
    },
    {
      title: 'Wardrobes and Kitchen Cabinets',
      image: wardrobesImage
    }
  ];

  const servicesList = [
    'Gypsum Ceiling Installation',
    'Acoustic Ceiling Installation',
    'Laminate Flooring Services',
    'Paint Work',
    'Wall Panels and Marble Fixing',
    'TV Units',
    'Wardrobes and Kitchen Cabinets'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

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
    alert('Thank you! Your quote request has been submitted. We will contact you within 24 hours.');
    setShowQuoteModal(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: '',
      services: [],
      propertyType: '',
      roomsCount: '',
      budget: '',
      timeline: '',
      location: '',
      projectDescription: '',
      hasDesign: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-800">
              Roomcraft <span className="text-amber-600">Interior Solutions</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition">Contact</a>
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section id="home" className="relative h-screen mt-16">
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
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
          
          {/* Hero Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                Crafting Spaces That Feel Like Home
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-md">
                Transforming your vision into stunning reality
              </p>
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-xl"
              >
                Get Free Quote
              </button>
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Slider Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition ${
                  index === currentSlide ? 'bg-amber-600 w-8' : 'bg-white bg-opacity-50 w-3'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Roomcraft Interior Solutions is a Nairobi-based design studio that's all about crafting spaces that feel like home. With a keen eye for detail and a passion for innovative design, our team of experts will work with you to bring your vision to life. From sleek, modern minimalism to cozy, eclectic vibes, we specialize in creating interiors that reflect your unique style and personality. Whether you're looking to revamp a single room or build your dream home from scratch, we're here to guide you every step of the way – with creativity, expertise, and a whole lot of heart.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Expert solutions for every aspect of your interior</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer transform transition hover:scale-105"
              >
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-300">Ready to transform your space? Let's talk!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+254 XXX XXX XXX</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@roomcraft.co.ke</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Roomcraft Interior Solutions. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-3xl w-full my-8">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-3xl font-bold text-gray-800">Request a Quote</h2>
              <button 
                onClick={() => setShowQuoteModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="Nairobi, Kenya"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Project Type *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                >
                  <option value="">Select project type</option>
                  <option value="new-construction">New Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="remodeling">Remodeling</option>
                  <option value="partial-upgrade">Partial Upgrade</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Services Needed * (Select all that apply)</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {servicesList.map(service => (
                    <label key={service} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-600"
                      />
                      <span className="text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Property Type *</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  >
                    <option value="">Select property type</option>
                    <option value="residential-home">Residential Home</option>
                    <option value="apartment">Apartment</option>
                    <option value="office">Office</option>
                    <option value="commercial">Commercial Space</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Number of Rooms</label>
                  <input
                    type="number"
                    name="roomsCount"
                    value={formData.roomsCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="e.g., 3"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Budget Range *</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500k">Under KES 500,000</option>
                    <option value="500k-1m">KES 500,000 - 1,000,000</option>
                    <option value="1m-2m">KES 1,000,000 - 2,000,000</option>
                    <option value="2m-5m">KES 2,000,000 - 5,000,000</option>
                    <option value="over-5m">Over KES 5,000,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Project Timeline *</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (Within 1 month)</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-plus-months">6+ months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Do you have existing designs/plans? *</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasDesign"
                      value="yes"
                      checked={formData.hasDesign === 'yes'}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-amber-600 border-gray-300 focus:ring-amber-600"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasDesign"
                      value="no"
                      checked={formData.hasDesign === 'no'}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-amber-600 border-gray-300 focus:ring-amber-600"
                    />
                    <span className="text-gray-700">No, need design consultation</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Project Description *</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  placeholder="Please provide details about your project, specific requirements, style preferences, or any other information that would help us provide an accurate quote..."
                ></textarea>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowQuoteModal(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomcraftWebsite;