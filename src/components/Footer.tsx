import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF6EF] border-t border-[#3B2418]/10 pt-16 pb-24 md:pb-12 text-[#3B2418]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#3B2418]/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Prabhu Bakery & Family Restaurant logo"
                className="w-11 h-11 rounded-full object-cover border-2 border-[#D98E32] bg-[#3B2418]"
              />
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#3B2418] block leading-none">
                  Prabhu
                </span>
                <span className="text-[11px] tracking-wider uppercase font-semibold text-[#8D6347] block mt-1">
                  Bakery &amp; Family Restaurant
                </span>
              </div>
            </div>

            <p className="text-sm text-[#6C4834] leading-relaxed">
              Marthandam's landmark destination for fresh artisanal pastries, celebration cakes, and delicious family dining.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#3B2418]/15 flex items-center justify-center text-[#3B2418] hover:text-[#D98E32] hover:border-[#D98E32] transition-colors shadow-2xs"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#3B2418]/15 flex items-center justify-center text-[#3B2418] hover:text-[#D98E32] hover:border-[#D98E32] transition-colors shadow-2xs"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#3B2418]/15 flex items-center justify-center text-[#3B2418] hover:text-[#D98E32] hover:border-[#D98E32] transition-colors shadow-2xs"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#3B2418]/15 flex items-center justify-center text-[#25D366] hover:border-[#25D366] transition-colors shadow-2xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-serif font-bold text-[#3B2418] mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#6C4834]">
              <li>
                <Link to="/" className="hover:text-[#D98E32] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#D98E32] transition-colors">
                  Full Menu &amp; Ordering
                </Link>
              </li>
              <li>
                <Link to="/custom-cakes" className="hover:text-[#D98E32] transition-colors">
                  Custom Cake Studio
                </Link>
              </li>
              <li>
                <Link to="/parties" className="hover:text-[#D98E32] transition-colors">
                  Parties &amp; Celebrations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D98E32] transition-colors">
                  Find Us &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Location */}
          <div>
            <h3 className="text-base font-serif font-bold text-[#3B2418] mb-4">
              Our Location
            </h3>
            <div className="space-y-3 text-sm text-[#6C4834]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D98E32] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {STORE_INFO.address}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D98E32] shrink-0" />
                <p>{STORE_INFO.hours}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D98E32] shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-[#D98E32] transition-colors font-medium">
                  {STORE_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Delivery Partners & Highlights */}
          <div>
            <h3 className="text-base font-serif font-bold text-[#3B2418] mb-4">
              Delivery &amp; Orders
            </h3>
            <p className="text-sm text-[#6C4834] leading-relaxed mb-4">
              Order directly on WhatsApp for fresh pickup or find us on your favorite food delivery apps in Marthandam.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={STORE_INFO.swiggyUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-btn bg-[#FC8019] text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-2xs"
              >
                Swiggy
              </a>
              <a
                href={STORE_INFO.zomatoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-btn bg-[#E23744] text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-2xs"
              >
                Zomato
              </a>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-btn bg-[#25D366] text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-2xs flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8D6347] gap-4">
          <p>© 2026 Prabhu Bakery &amp; Family Restaurant. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-[#C8402E] text-[#C8402E]" />
            <span>for Marthandam &amp; Kanyakumari</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
