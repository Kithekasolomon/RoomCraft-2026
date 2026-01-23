import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="relative h-96 bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero/slide2.jpg)' }} />
        <div className="absolute inset-0 bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-10">
                We're here to answer your questions and discuss your project. Reach out today!
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <Phone className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl">Phone</h3>
                    <a href="tel:+254700000000" className="text-gray-700 text-lg">+254 700 000 000</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <Mail className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl">Email</h3>
                    <a href="mailto:info@roomcraft.co.ke" className="text-gray-700 text-lg">info@roomcraft.co.ke</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <MapPin className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl">Location</h3>
                    <p className="text-gray-700 text-lg">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <Clock className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl">Working Hours</h3>
                    <p className="text-gray-700 text-lg">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <p className="text-gray-600 mb-8">We'll respond within 24 hours</p>
              <a
                href="mailto:info@roomcraft.co.ke?subject=Project%20Inquiry"
                className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-center py-5 rounded-lg text-xl font-semibold transition"
              >
                Email Us Now
              </a>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 bg-green-600 hover:bg-green-700 text-white text-center py-5 rounded-lg text-xl font-semibold transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;