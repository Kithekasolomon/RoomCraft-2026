import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="relative h-96 bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero/slide4.jpg)' }}
        />
        <div className="absolute inset-0  bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">About Roomcraft</h1>
            <p className="text-xl md:text-2xl text-gray-100">Crafting beautiful interiors in Nairobi since 2020</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Roomcraft Interior Solutions is a passionate Nairobi-based interior design and installation company dedicated to transforming spaces into beautiful, functional homes and offices. 
            Founded with a vision to bring affordable luxury to every Kenyan home, we combine creativity, precision craftsmanship, and premium materials to deliver stunning results.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Our Mission</h3>
              <p className="text-gray-600">To create inspiring interiors that reflect your personality while staying within budget and timeline.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Our Vision</h3>
              <p className="text-gray-600">To be Nairobi's most trusted name in modern, high-quality interior solutions.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Our Promise</h3>
              <p className="text-gray-600">Clean work, transparent pricing, timely delivery, and complete customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Let's Bring Your Vision to Life</h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center mt-10">
            <a href="tel:+254700000000" className="flex items-center justify-center gap-3 text-lg">
              <Phone className="w-8 h-8 text-amber-600" /> +254 700 000 000
            </a>
            <a href="mailto:info@roomcraft.co.ke" className="flex items-center justify-center gap-3 text-lg">
              <Mail className="w-8 h-8 text-amber-600" /> info@roomcraft.co.ke
            </a>
            <div className="flex items-center justify-center gap-3 text-lg">
              <MapPin className="w-8 h-8 text-amber-600" /> Nairobi, Kenya
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;