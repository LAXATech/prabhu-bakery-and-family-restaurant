import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Phone, MessageCircle, Utensils, Cake, Sparkles, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_INFO } from '../data/mockData';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  const navLinks = [
    { path: '/menu', label: 'Menu', icon: Utensils },
    { path: '/custom-cakes', label: 'Custom Cakes', icon: Cake },
    { path: '/parties', label: 'Parties', icon: Sparkles },
    { path: '/contact', label: 'Contact', icon: MapPin },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF6EF]/95 backdrop-blur-md border-b border-[#3B2418]/10 transition-colors">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              src="/logo.png"
              alt="Prabhu Bakery & Family Restaurant logo"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-[#D98E32] shadow-xs group-hover:scale-105 transition-transform bg-[#3B2418] shrink-0"
            />
            <div className="flex flex-col justify-center">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#3B2418] leading-none">
                Prabhu
              </span>
              <span className="text-[9px] sm:text-[11px] tracking-wider uppercase font-semibold text-[#8D6347] mt-0.5 leading-tight">
                Bakery &amp; Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (Untouched desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[15px] font-medium transition-colors relative py-1 ${
                    active
                      ? 'text-[#C8402E] font-semibold'
                      : 'text-[#3B2418] hover:text-[#D98E32]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8402E] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Cart (Untouched desktop) */}
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-full bg-white border border-[#3B2418]/15 text-[#3B2418] hover:border-[#D98E32] hover:text-[#D98E32] shadow-sm transition-all"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C8402E] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls: Clean, Sleek Cart & Hamburger Menu */}
          <div className="flex md:hidden items-center gap-1 shrink-0">
            {/* Clean Mobile Cart Icon */}
            <button
              onClick={openCart}
              className="relative p-2 text-[#3B2418] hover:text-[#D98E32] active:scale-95 transition-all"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2]" />
              {totalItems > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#C8402E] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#3B2418] hover:text-[#D98E32] active:scale-95 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 stroke-[2.2]" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Slide-Out Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/45 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-xs h-full bg-[#FAF6EF] shadow-2xl z-10 flex flex-col justify-between p-6">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-[#3B2418]/10">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/logo.png"
                    alt="Prabhu Bakery & Family Restaurant logo"
                    className="w-9 h-9 rounded-full object-cover border-2 border-[#D98E32] bg-[#3B2418]"
                  />
                  <div>
                    <span className="font-serif text-lg font-bold text-[#3B2418] block leading-none">Prabhu</span>
                    <span className="text-[10px] text-[#8D6347] font-semibold uppercase tracking-wider block mt-0.5">
                      Bakery &amp; Restaurant
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-[#3B2418]/70 hover:text-[#3B2418] active:bg-[#3B2418]/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-5 flex flex-col gap-1.5">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-btn font-medium transition-colors ${
                    location.pathname === '/'
                      ? 'bg-[#D98E32]/15 text-[#3B2418] font-bold'
                      : 'text-[#3B2418] hover:bg-[#3B2418]/5'
                  }`}
                >
                  <span>Home</span>
                </Link>

                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-btn font-medium transition-colors ${
                        active
                          ? 'bg-[#D98E32]/15 text-[#3B2418] font-bold'
                          : 'text-[#3B2418] hover:bg-[#3B2418]/5'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-[#D98E32]" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom info inside drawer */}
            <div className="pt-5 border-t border-[#3B2418]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open Now • Closes 11:00 PM</span>
              </div>
              <p className="text-xs text-[#8D6347] leading-relaxed">
                Vettuvenni Junction, Marthandam, Tamil Nadu
              </p>
              <div className="flex gap-2 pt-1">
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-btn bg-white border border-[#3B2418]/15 text-xs font-bold text-[#3B2418] shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D98E32]" />
                  <span>Call</span>
                </a>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-btn bg-[#25D366] text-white text-xs font-bold shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
