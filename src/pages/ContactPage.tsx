import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle2, Navigation } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const waText = `Hello Prabhu Bakery & Restaurant,\nMessage from: ${name} (${phone})\n\n"${message}"`;

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(waText)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 space-y-8 sm:space-y-10">
      
      {/* Page Heading */}
      <div className="text-center max-w-xl mx-auto space-y-1.5 sm:space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3B2418]">
          Find Us
        </h1>
        <p className="text-xs sm:text-sm text-[#8D6347]">
          Visit our bakery &amp; family restaurant at Vettuvenni Junction, Marthandam
        </p>
      </div>

      {/* Large Interactive Map Section */}
      <div className="bg-white rounded-card overflow-hidden border border-[#3B2418]/10 shadow-soft relative">
        <div className="w-full h-72 sm:h-96 md:h-[420px] relative">
          {/* Real Google Maps Embed for Vettuvenni Junction Marthandam */}
          <iframe
            title="Prabhu Bakery Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.083758368597!2d77.2185!3d8.3094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04535cecb5184b%3A0xe54e5658b1695e1e!2sMarthandam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating Map Location Pill on top of map */}
          <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-btn border border-[#3B2418]/10 shadow-soft-lg flex items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF6EF] border border-[#D98E32] flex items-center justify-center text-[#D98E32] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-serif font-bold text-xs sm:text-sm text-[#3B2418] block truncate">
                  Vettuvenni Junction, Marthandam
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#8D6347] block truncate">
                  Kanyakumari District, Tamil Nadu – 629165
                </span>
              </div>
            </div>

            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="px-2.5 sm:px-3 py-1.5 rounded-full bg-[#D98E32] text-white text-[11px] sm:text-xs font-bold shrink-0 hover:bg-[#C47A22] transition-colors flex items-center gap-1"
            >
              <Navigation className="w-3 h-3" />
              <span>Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Grid: Store Information Card (Left) & Send Us a Message Form (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Contact Information Card */}
        <div className="lg:col-span-6 bg-white rounded-card p-5 sm:p-8 border border-[#3B2418]/10 shadow-soft space-y-5 sm:space-y-6">
          
          <div className="flex items-center justify-between pb-4 border-b border-[#3B2418]/10">
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#3B2418]">
                Store Details
              </h2>
              <span className="text-xs text-[#8D6347]">
                Dine-In • Takeaway • Door Delivery
              </span>
            </div>

            {/* Open Now Pill */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] sm:text-xs font-bold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open Now</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3.5 sm:space-y-4">
            
            {/* Address */}
            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-btn bg-[#FAF6EF] border border-[#3B2418]/10 flex items-center justify-center text-[#D98E32] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8D6347] block">
                  Address
                </span>
                <p className="text-xs sm:text-sm text-[#3B2418] font-medium leading-relaxed mt-0.5">
                  Vettuvenni Junction, Marthandam,<br />
                  Kanyakumari District, Tamil Nadu – 629165
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-btn bg-[#FAF6EF] border border-[#3B2418]/10 flex items-center justify-center text-[#D98E32] shrink-0 mt-0.5">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8D6347] block">
                  Opening Hours
                </span>
                <p className="text-xs sm:text-sm text-[#3B2418] font-medium mt-0.5">
                  Mon – Sun: 6:00 AM – 11:00 PM
                </p>
                <span className="text-[11px] sm:text-xs text-[#8D6347]">
                  Kitchen closes at 10:45 PM
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-btn bg-[#FAF6EF] border border-[#3B2418]/10 flex items-center justify-center text-[#D98E32] shrink-0 mt-0.5">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8D6347] block">
                  Direct Phone
                </span>
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="text-xs sm:text-sm font-bold text-[#3B2418] hover:text-[#D98E32] transition-colors block mt-0.5"
                >
                  {STORE_INFO.phone}
                </a>
              </div>
            </div>

          </div>

          {/* Action Buttons: Call Store, WhatsApp, Swiggy, Zomato */}
          <div className="pt-2 border-t border-[#3B2418]/10 space-y-2">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#8D6347] block">
              Quick Actions
            </span>

            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="py-2.5 sm:py-3 px-3 sm:px-4 rounded-btn bg-[#D98E32] hover:bg-[#C47A22] text-[#3B2418] text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 sm:py-3 px-3 sm:px-4 rounded-btn bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>

              <a
                href={STORE_INFO.swiggyUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2 sm:py-2.5 px-3 sm:px-4 rounded-btn bg-[#FC8019] hover:bg-[#e87010] text-white text-xs font-bold flex items-center justify-center transition-colors"
              >
                Swiggy
              </a>

              <a
                href={STORE_INFO.zomatoUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2 sm:py-2.5 px-3 sm:px-4 rounded-btn bg-[#E23744] hover:bg-[#c92e3a] text-white text-xs font-bold flex items-center justify-center transition-colors"
              >
                Zomato
              </a>
            </div>
          </div>

        </div>

        {/* Send Us a Message Form */}
        <div className="lg:col-span-6 bg-white rounded-card p-5 sm:p-8 border border-[#3B2418]/10 shadow-soft">
          <div className="pb-3.5 sm:pb-4 border-b border-[#3B2418]/10 mb-5 sm:mb-6">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#3B2418]">
              Send Us a Message
            </h2>
            <p className="text-xs text-[#8D6347] mt-1">
              Have a custom inquiry, feedback, or catering query? Let us know!
            </p>
          </div>

          {submitted ? (
            <div className="py-10 sm:py-12 text-center space-y-3 sm:space-y-4 animate-fade-in">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#3B2418]">
                Message Sent Successfully!
              </h3>
              <p className="text-xs text-[#8D6347] max-w-xs mx-auto">
                Thank you for writing to Prabhu Bakery. Our team will get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-[#D98E32] hover:underline pt-2 block mx-auto"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#543625] block mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-btn border border-[#3B2418]/15 bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] focus:ring-1 focus:ring-[#D98E32] outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#543625] block mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-btn border border-[#3B2418]/15 bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] focus:ring-1 focus:ring-[#D98E32] outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#543625] block mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Type your message, query, or bulk order request..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-btn border border-[#3B2418]/15 bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] focus:ring-1 focus:ring-[#D98E32] outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 px-5 rounded-btn bg-[#D98E32] hover:bg-[#C47A22] text-[#3B2418] font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-soft hover:shadow-soft-md transition-all active:scale-[0.99]"
              >
                <Send className="w-4 h-4 text-[#3B2418]" />
                <span>Send Message</span>
              </button>
            </form>
          )}

        </div>

      </div>

    </div>
  );
};
