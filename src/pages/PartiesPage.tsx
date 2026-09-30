import React, { useState } from 'react';
import { PartyPopper, Check, Users, Calendar, Clock, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { PARTY_PACKAGES, STORE_INFO } from '../data/mockData';

export const PartiesPage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState(PARTY_PACKAGES[1].id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guestCount, setGuestCount] = useState('25');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('6:00 PM – 9:00 PM (Evening)');
  const [occasion, setOccasion] = useState('Birthday Party');

  const activePkg = PARTY_PACKAGES.find((p) => p.id === selectedPackage) || PARTY_PACKAGES[1];

  const handleSelectPackage = (pkgId: string) => {
    setSelectedPackage(pkgId);
    const formElement = document.getElementById('reservation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const message =
      `Hello Prabhu Bakery & Family Restaurant,\nI would like to book the Party Celebration Hall:\n\n` +
      `• Package: ${activePkg.name} (₹${activePkg.price.toLocaleString('en-IN')})\n` +
      `• Guest Count: ${guestCount} guests\n` +
      `• Preferred Date: ${date || 'Not specified'}\n` +
      `• Time Slot: ${timeSlot}\n` +
      `• Occasion: ${occasion}\n` +
      `• Name: ${name || 'Customer'}\n` +
      `• Phone: ${phone || 'Not provided'}\n\n` +
      `Please confirm hall availability and timing for our celebration.`;

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Warm Hero Section with Large Party Hall Image */}
      <section className="relative w-full h-72 sm:h-96 md:h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/party-hall.jpg"
          alt="Prabhu Bakery Elegant Party Hall"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        <div className="relative z-10 text-center text-white px-4 max-w-2xl space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-amber-200">
            <PartyPopper className="w-4 h-4" />
            <span>Private Banquet &amp; Celebration Hall</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Parties &amp; Celebrations
          </h1>

          <p className="text-xs sm:text-base text-gray-200 font-light max-w-lg mx-auto leading-relaxed">
            Good food. Great company. Unforgettable moments.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 -mt-8 sm:-mt-10 relative z-20">
        
        {/* Packages Section */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2418]">
              Our Party Packages
            </h2>
            <p className="text-xs sm:text-sm text-[#8D6347] mt-1.5">
              All-inclusive packages crafted for birthdays, anniversaries, and family dinners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 items-stretch">
            {PARTY_PACKAGES.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;

              return (
                <div
                  key={pkg.id}
                  className={`relative bg-white rounded-card p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                    pkg.isPopular
                      ? 'border-[#D98E32] shadow-soft-lg md:scale-[1.02] z-10'
                      : 'border-[#3B2418]/10 shadow-soft hover:shadow-soft-md'
                  }`}
                >
                  {/* "Most Popular" Ribbon */}
                  {pkg.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D98E32] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider py-1 px-3 sm:px-4 rounded-full shadow-xs flex items-center gap-1.5 whitespace-nowrap">
                      <Sparkles className="w-3 h-3" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div>
                    {/* Title & Tagline */}
                    <div className="text-center pb-5 sm:pb-6 border-b border-[#3B2418]/10">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3B2418]">
                        {pkg.name}
                      </h3>
                      <div className="mt-2.5 sm:mt-3 flex items-baseline justify-center gap-1">
                        <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3B2418]">
                          ₹{pkg.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF6EF] text-[#8D6347] border border-[#3B2418]/10">
                        {pkg.guestCount}
                      </span>
                    </div>

                    {/* Features list */}
                    <div className="py-5 sm:py-6 space-y-2.5 sm:space-y-3">
                      <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#8D6347] block">
                        What’s Included:
                      </span>
                      <ul className="space-y-2 sm:space-y-2.5">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#543625]">
                            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <div className="pt-3 sm:pt-4 border-t border-[#3B2418]/10">
                    <button
                      onClick={() => handleSelectPackage(pkg.id)}
                      className={`w-full py-2.5 sm:py-3 px-4 rounded-btn text-xs sm:text-sm font-bold transition-all shadow-xs ${
                        isSelected || pkg.isPopular
                          ? 'bg-[#D98E32] hover:bg-[#C47A22] text-[#3B2418]'
                          : 'bg-[#FAF6EF] hover:bg-[#D98E32] hover:text-[#3B2418] text-[#3B2418] border border-[#3B2418]/15'
                      }`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RESERVATION FORM CARD */}
        <div id="reservation-form" className="max-w-2xl mx-auto bg-white rounded-card p-5 sm:p-10 border border-[#3B2418]/10 shadow-soft">
          <div className="text-center pb-5 sm:pb-6 border-b border-[#3B2418]/10 space-y-1.5 sm:space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3B2418]">
              Make a Reservation
            </h3>
            <p className="text-xs text-[#8D6347]">
              Selected: {activePkg.name} (₹{activePkg.price.toLocaleString('en-IN')})
            </p>
          </div>

          <form onSubmit={handleReserveWhatsApp} className="pt-5 sm:pt-6 space-y-3.5 sm:space-y-4">
            
            {/* Combo Selection */}
            <div>
              <label className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#8D6347] block mb-1.5">
                Combo Selection
              </label>
              <select
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full px-3.5 sm:px-4 py-2.5 rounded-btn border border-[#3B2418]/15 bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] outline-hidden"
              >
                {PARTY_PACKAGES.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name} — ₹{pkg.price.toLocaleString('en-IN')} ({pkg.guestCount})
                  </option>
                ))}
              </select>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="text-xs font-semibold text-[#543625] block mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-btn border border-[#3B2418]/15 bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] outline-hidden"
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
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-btn border border-[#3B2418]/15 bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] outline-hidden"
                />
              </div>
            </div>

            {/* Guests & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="text-xs font-semibold text-[#543625] block mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#D98E32]" />
                  <span>Number of Guests</span>
                </label>
                <input
                  type="number"
                  min="5"
                  max="100"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-btn border border-[#3B2418]/15 bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#543625] block mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D98E32]" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-btn border border-[#3B2418]/15 bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] outline-hidden"
                />
              </div>
            </div>

            {/* Time Slot & Occasion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="text-xs font-semibold text-[#543625] block mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D98E32]" />
                  <span>Preferred Time Slot</span>
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-btn border border-[#3B2418]/15 bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] outline-hidden"
                >
                  <option>11:00 AM – 2:00 PM (Lunch)</option>
                  <option>3:00 PM – 6:00 PM (Afternoon)</option>
                  <option>6:00 PM – 9:00 PM (Evening Celebration)</option>
                  <option>7:00 PM – 10:00 PM (Dinner Party)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#543625] block mb-1.5">
                  Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-btn border border-[#3B2418]/15 bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] outline-hidden"
                >
                  <option>Birthday Party</option>
                  <option>Wedding Anniversary</option>
                  <option>Baby Shower / Naming Ceremony</option>
                  <option>Family Reunion</option>
                  <option>Corporate / Friends Get-together</option>
                </select>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 px-5 sm:px-6 rounded-btn bg-[#D98E32] hover:bg-[#C47A22] text-[#3B2418] font-extrabold text-xs sm:text-base flex items-center justify-center gap-2 shadow-soft hover:shadow-soft-md transition-all active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3B2418]" />
                <span>Reserve on WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-[#8D6347] font-medium mt-2 sm:mt-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>We confirm within 2 hours.</span>
              </div>
            </div>

          </form>
        </div>

      </div>

    </div>
  );
};
