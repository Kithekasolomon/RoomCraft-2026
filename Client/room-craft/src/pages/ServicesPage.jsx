import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Gypsum Ceiling Installation',
    description: 'Elegant and modern gypsum board ceilings that enhance acoustics, hide wiring, and add a sophisticated finish to any room. We handle everything from simple flat ceilings to intricate designs with lighting integration.',
    image: 'https://www.gypsumceilingkenya.co.ke/wp-content/uploads/Gypsum-Ceiling-Design-16-1-1024x670.jpg',
    features: ['Custom designs', 'LED lighting integration', 'Sound insulation', 'Fast & clean installation']
  },
  {
    title: 'Acoustic Ceiling Installation',
    description: 'Professional acoustic solutions for homes, offices, and commercial spaces. Reduce noise, improve sound quality, and create a peaceful environment with high-quality acoustic panels and tiles.',
    image: '/images/services/acoustic-ceiling.jpg',
    features: ['Superior noise reduction', 'Improved audio clarity', 'Fire-resistant materials', 'Multiple aesthetic options']
  },
  {
    title: 'Laminate Flooring Services',
    description: 'Durable, stylish, and affordable laminate flooring that mimics real wood or stone. Water-resistant options available – perfect for kitchens, living rooms, and high-traffic areas.',
    image: '/images/services/laminate-flooring.jpg',
    features: ['Water-resistant options', 'Scratch-resistant', 'Easy to clean', 'Wide range of wood & stone designs']
  },
  {
    title: 'Paint Work',
    description: 'Transform your space with professional interior and exterior painting. From color consultation to flawless application, we use premium paints for long-lasting, beautiful results.',
    image: '/images/services/paint-work.jpg',
    features: ['Free color consultation', 'Premium quality paints', 'Clean & professional work', 'Interior & exterior']
  },
  {
    title: 'Wall Panels and Marble Fixing',
    description: 'Luxurious 3D wall panels, PVC panels, and natural marble installations. Add texture, depth, and elegance to your walls with modern or classic designs.',
    image: 'https://rocksaltprints.com/wp-content/uploads/2022/05/Black-Marble-Stone-Cream-Acrylic-shower-panel.jpg',
    features: ['3D wall panels', 'PVC panels', 'Natural marble fixing', 'TV feature walls & accents']
  },
  {
    title: 'TV Units',
    description: 'Custom-designed TV units that combine functionality with style. Floating units, full-wall entertainment centers, or minimalist stands – built to fit your space perfectly.',
    image: 'https://5.imimg.com/data5/ANDROID/Default/2023/1/XX/MQ/OH/86992323/product-jpeg.jpg',
    features: ['Fully custom built', 'Smart cable management', 'Ample storage', 'Modern & classic styles']
  },
  {
    title: 'Wardrobes and Kitchen Cabinets',
    description: 'Fully customized wardrobes and modular kitchen cabinets designed for maximum storage and beauty. Soft-close hinges, premium materials, and smart organization systems.',
    image: '/images/services/wardrobes-cabinets.jpg',
    features: ['Custom sizes & layouts', 'Soft-close mechanisms', 'Premium hardware', 'Smart storage solutions']
  },
];

const ServicesPage = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen max-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero/slide3.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-opacity-60" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              Our Services
            </h1>
            <p className="text-xl md:text-3xl text-gray-100 mb-8 drop-shadow-lg">
              Expert interior solutions tailored for homes and offices in Nairobi
            </p>
            <button
              onClick={() => setShowQuoteModal(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-lg text-xl font-semibold transition transform hover:scale-105 shadow-2xl inline-flex items-center gap-3"
            >
              Get Free Quote <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Complete Interior Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From ceilings to flooring and custom cabinetry – we handle every detail with precision and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
              >
                <div className="h-72 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-700">
                        <ChevronRight className="w-5 h-5 text-amber-600 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowQuoteModal(true)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-lg transition shadow-md"
                  >
                    Request Quote for This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 mb-10">We're based in Nairobi and ready to bring your vision to life</p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <a href="tel:+254788313750" className="flex items-center gap-4 text-lg">
              <Phone className="w-10 h-10 text-amber-600" />
              <span>+254 788 313 750</span>
            </a>
            <a href="mailto:info@roomcraft.co.ke" className="flex items-center gap-4 text-lg">
              <Mail className="w-10 h-10 text-amber-600" />
              <span>info@roomcraft.co.ke</span>
            </a>
            <div className="flex items-center gap-4 text-lg">
              <MapPin className="w-10 h-10 text-amber-600" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          <button
            onClick={() => setShowQuoteModal(true)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-lg text-xl font-semibold transition transform hover:scale-105 shadow-2xl"
          >
            Get Your Free Consultation Today
          </button>
        </div>
      </section>

      {/* Simple Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-10 max-w-lg w-full text-center shadow-2xl">
            <button
              onClick={() => setShowQuoteModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-8 h-8" />
            </button>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Get Your Free Quote</h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today – we're ready to discuss your project!
            </p>
            <div className="space-y-4">
              <a
                href="tel:+254700000000"
                className="block w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg text-lg font-semibold transition"
              >
                Call Us Now
              </a>
              <a
                href="mailto:info@roomcraft.co.ke"
                className="block w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white py-4 rounded-lg text-lg font-semibold transition"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;