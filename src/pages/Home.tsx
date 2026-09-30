import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Star, Users, Phone, MapPin, Cake, UtensilsCrossed, ChevronRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, REVIEWS, STORE_INFO } from '../data/mockData';
import { useCart } from '../context/CartContext';

export const Home: React.FC = () => {
  const { getWhatsAppOrderUrl } = useCart();

  // The 4 official bestsellers from the design brief
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-24 pb-16">
      
      {/* ==================================================
          CINEMATIC FULL-WIDTH HERO SECTION
          ONE single full-width image with dark gradient on left
         ================================================== */}
      <section className="relative w-full min-h-[500px] sm:min-h-[580px] md:min-h-[640px] flex items-center overflow-hidden">
        {/* Full-width Background Image */}
        <img
          src="/images/hero-dining.jpg"
          alt="Prabhu Bakery & Restaurant Dining Table with Cake, Broasted Chicken and Pizza"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />

        {/* Dark-to-transparent overlay on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 md:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:hidden" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-xl text-white space-y-4 sm:space-y-6">
            
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase text-amber-200">
              <span className="w-2 h-2 rounded-full bg-[#D98E32]" />
              <span>Marthandam’s Favorite Taste</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Fresh Bakes.<br />
              Family Feasts.<br />
              <span className="text-[#D98E32]">Every Celebration.</span>
            </h1>

            {/* Subtext */}
            <p className="text-xs sm:text-base text-gray-200 leading-relaxed font-light max-w-lg">
              Freshly baked treats, delicious meals, and memorable moments — all under one roof.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              {/* Primary: Order on WhatsApp */}
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-btn bg-[#D98E32] hover:bg-[#C47A22] text-[#3B2418] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-soft hover:shadow-soft-lg transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 text-[#3B2418]" />
                <span>Order on WhatsApp</span>
              </a>

              {/* Secondary: Explore Menu */}
              <Link
                to="/menu"
                className="px-6 py-3.5 rounded-btn bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SLIM TRUST BAR
          ★★★★★ 4.2+ Google Rating | Open Now | Family Dining & Party Hall
         ================================================== */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-card p-4 sm:p-5 border border-[#3B2418]/10 shadow-soft flex flex-col sm:flex-row items-center justify-around gap-3.5 sm:gap-4 text-center sm:text-left">
          
          {/* Rating */}
          <div className="flex items-center gap-2.5">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
              ))}
            </div>
            <div>
              <span className="font-serif font-bold text-[#3B2418] text-xs sm:text-sm">4.3+ Rating</span>
              <span className="text-[11px] sm:text-xs text-[#8D6347] ml-1.5">(1,400+ Reviews)</span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-6 bg-[#3B2418]/15" />

          {/* Open Now status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-600"></span>
            </span>
            <span className="font-semibold text-xs sm:text-sm text-emerald-800">
              Open Now • 6:00 AM – 11:00 PM
            </span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-[#3B2418]/15" />

          {/* Dining feature */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-serif font-bold text-[#3B2418]">
            <Users className="w-4 h-4 text-[#D98E32]" />
            <span>Family Dining &amp; Party Hall</span>
          </div>

        </div>
      </section>

      {/* ==================================================
          BESTSELLERS SECTION
          Four product cards with food image, price, veg dot, add button
         ================================================== */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#3B2418]">
              Our Bestsellers
            </h2>
            <p className="text-xs sm:text-sm text-[#8D6347] mt-1">
              Handcrafted fresh daily by our master bakers &amp; culinary chefs
            </p>
          </div>
          <Link
            to="/menu"
            className="text-xs sm:text-sm font-semibold text-[#D98E32] hover:text-[#C47A22] flex items-center gap-1 group shrink-0"
          >
            <span>View all</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ==================================================
          CATEGORY SECTION
          Two equal-sized compact category tiles with simple icons
         ================================================== */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Bakery Tile */}
          <Link
            to="/menu"
            className="group bg-white p-5 sm:p-6 rounded-card border border-[#3B2418]/10 shadow-soft hover:shadow-soft-md hover:border-[#D98E32]/40 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-btn bg-[#FBF2E4] border border-[#D98E32]/20 flex items-center justify-center text-[#D98E32] group-hover:scale-110 transition-transform shrink-0">
                <Cake className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3B2418] group-hover:text-[#D98E32] transition-colors">
                  Bakery
                </h3>
                <p className="text-xs text-[#8D6347] mt-0.5">
                  Fresh bakes, cakes &amp; more
                </p>
              </div>
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF6EF] group-hover:bg-[#D98E32] group-hover:text-white flex items-center justify-center text-[#3B2418] transition-colors shrink-0">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </Link>

          {/* Restaurant Tile */}
          <Link
            to="/menu"
            className="group bg-white p-5 sm:p-6 rounded-card border border-[#3B2418]/10 shadow-soft hover:shadow-soft-md hover:border-[#D98E32]/40 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-btn bg-[#FDF2F0] border border-[#C8402E]/20 flex items-center justify-center text-[#C8402E] group-hover:scale-110 transition-transform shrink-0">
                <UtensilsCrossed className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3B2418] group-hover:text-[#C8402E] transition-colors">
                  Restaurant
                </h3>
                <p className="text-xs text-[#8D6347] mt-0.5">
                  Tasty meals, great vibes
                </p>
              </div>
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF6EF] group-hover:bg-[#C8402E] group-hover:text-white flex items-center justify-center text-[#3B2418] transition-colors shrink-0">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </Link>

        </div>
      </section>

      {/* ==================================================
          BIRTHDAY PARTY TEASER
          High-quality party photo, heading, description, Book a Party button
         ================================================== */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-card overflow-hidden bg-white border border-[#3B2418]/10 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Party Image */}
            <div className="lg:col-span-7 h-56 sm:h-80 lg:h-96 w-full overflow-hidden relative">
              <img
                src="/images/party-hall.jpg"
                alt="Prabhu Bakery Party Hall Celebration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
            </div>

            {/* Content Card */}
            <div className="lg:col-span-5 p-5 sm:p-10 space-y-3 sm:space-y-4">
              <span className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-[#D98E32]">
                Private Party Hall
              </span>
              <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#3B2418] leading-tight">
                Make Their Birthday Extra Special
              </h2>
              <p className="text-xs sm:text-sm text-[#6C4834] leading-relaxed">
                Make their day extra special with our private party hall, custom thematic cakes, and delicious feast packages. Perfect for birthdays, baby showers &amp; family reunions.
              </p>
              
              <div className="pt-2">
                <Link
                  to="/parties"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-btn bg-[#D98E32] hover:bg-[#C47A22] text-white font-bold text-xs sm:text-sm shadow-soft transition-all active:scale-[0.98]"
                >
                  <span>Book a Party</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          CUSTOMER REVIEWS
          Three review cards with star rating, customer name, short review
         ================================================== */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#3B2418]">
              What Our Customers Say
            </h2>
            <p className="text-xs sm:text-sm text-[#8D6347] mt-1">
              Loved by thousands of happy families in Marthandam &amp; Kanyakumari
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-5 sm:p-6 rounded-card border border-[#3B2418]/10 shadow-soft flex flex-col justify-between"
            >
              <div className="space-y-2.5 sm:space-y-3">
                {/* Star rating */}
                <div className="flex text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                {/* Review text */}
                <p className="text-xs sm:text-sm text-[#543625] italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-3 sm:pt-4 border-t border-[#3B2418]/10 mt-3 sm:mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#3B2418]">{rev.name}</h4>
                  <span className="text-[11px] sm:text-xs text-[#8D6347]">{rev.location}</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#8D6347]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          LOCATION STRIP
          Address, Call Store button, Map Preview
         ================================================== */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-card p-5 sm:p-8 border border-[#3B2418]/10 shadow-soft">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
            
            {/* Address */}
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-btn bg-[#FBF2E4] border border-[#D98E32]/20 flex items-center justify-center text-[#D98E32] shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#3B2418]">
                  Vettuvenni Junction, Marthandam
                </h3>
                <p className="text-xs sm:text-sm text-[#8D6347] mt-0.5">
                  Kanyakumari District, Tamil Nadu – 629165
                </p>
                <div className="flex items-center gap-2 mt-1.5 text-xs font-semibold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open Daily: 6:00 AM – 11:00 PM</span>
                </div>
              </div>
            </div>

            {/* Actions: Call Store & View Map */}
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="flex-1 sm:flex-initial px-2.5 sm:px-5 py-2.5 sm:py-3 rounded-btn bg-[#FAF6EF] border border-[#3B2418]/20 hover:border-[#D98E32] hover:text-[#D98E32] text-[#3B2418] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-colors shadow-2xs whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="whitespace-nowrap">Call Store</span>
              </a>

              <Link
                to="/contact"
                className="flex-1 sm:flex-initial px-2.5 sm:px-5 py-2.5 sm:py-3 rounded-btn bg-[#D98E32] hover:bg-[#C47A22] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 shadow-soft transition-all whitespace-nowrap"
              >
                <span className="whitespace-nowrap hidden min-[370px]:inline">Find Us on Map</span>
                <span className="whitespace-nowrap min-[370px]:hidden">View Map</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
