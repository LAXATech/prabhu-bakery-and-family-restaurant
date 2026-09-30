import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Trash2 } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, STORE_INFO } from '../data/mockData';
import { useCart } from '../context/CartContext';
import type { CategoryType, SubCategoryType } from '../types';

export const MenuPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryType>('bakery');
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategoryType>('all');
  const {
    cart,
    subtotal,
    totalItems,
    getWhatsAppOrderUrl,
    updateQuantity,
    removeFromCart,
    openCart,
  } = useCart();

  const bakerySubCategories: { id: SubCategoryType; label: string }[] = [
    { id: 'all', label: 'All Bakery' },
    { id: 'cakes', label: 'Cakes' },
    { id: 'puffs', label: 'Puffs & Savories' },
    { id: 'snacks', label: 'Snacks & Chips' },
  ];

  const restaurantSubCategories: { id: SubCategoryType; label: string }[] = [
    { id: 'all', label: 'All Restaurant' },
    { id: 'pizzas', label: 'Pizzas' },
    { id: 'broasted', label: 'Broasted Chicken' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'desserts', label: 'Falooda & Desserts' },
  ];

  const currentChips = activeTab === 'bakery' ? bakerySubCategories : restaurantSubCategories;

  // Filter products by main tab & subcategory
  const filteredProducts = PRODUCTS.filter((p) => {
    if (p.category !== activeTab) return false;
    if (selectedSubCategory !== 'all' && p.subCategory !== selectedSubCategory) return false;
    return true;
  });

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3B2418]">
          Our Menu
        </h1>
        <p className="text-xs sm:text-sm text-[#8D6347] mt-1.5 sm:mt-2">
          Freshly prepared. Always delicious.
        </p>

        {/* Main Bakery / Restaurant Toggle Tabs */}
        <div className="inline-flex p-1.5 bg-[#F4ECE0] rounded-full border border-[#3B2418]/10 mt-5 sm:mt-6 shadow-2xs">
          <button
            onClick={() => {
              setActiveTab('bakery');
              setSelectedSubCategory('all');
            }}
            className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'bakery'
                ? 'bg-[#D98E32] text-white shadow-xs'
                : 'text-[#3B2418] hover:text-[#D98E32]'
            }`}
          >
            Bakery
          </button>
          <button
            onClick={() => {
              setActiveTab('restaurant');
              setSelectedSubCategory('all');
            }}
            className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'restaurant'
                ? 'bg-[#D98E32] text-white shadow-xs'
                : 'text-[#3B2418] hover:text-[#D98E32]'
            }`}
          >
            Restaurant
          </button>
        </div>

        {/* Subcategory Chips */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {currentChips.map((chip) => (
            <button
              key={chip.id}
              onClick={() => setSelectedSubCategory(chip.id)}
              className={`px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold transition-all border ${
                selectedSubCategory === chip.id
                  ? 'bg-[#3B2418] text-white border-[#3B2418] shadow-2xs'
                  : 'bg-white text-[#543625] border-[#3B2418]/15 hover:border-[#D98E32]'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Products on Left (lg:col-span-8), Desktop Cart on Right (lg:col-span-4) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Products Column */}
        <div className="lg:col-span-8 space-y-8">
          
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-card p-12 text-center border border-[#3B2418]/10 shadow-soft">
              <p className="text-sm text-[#8D6347]">
                No items in this category currently.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </div>

        {/* Desktop Sticky Cart Card (Untouched desktop layout) */}
        <div className="hidden lg:block lg:col-span-4 sticky top-28">
          <div className="bg-white rounded-card border border-[#3B2418]/10 shadow-soft p-5 space-y-4">
            
            {/* Cart Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#3B2418]/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#D98E32]" />
                <h3 className="font-serif font-bold text-lg text-[#3B2418]">
                  Your Cart
                </h3>
              </div>
              <span className="text-xs bg-[#F4ECE0] text-[#3B2418] font-bold px-2 py-0.5 rounded-full">
                {totalItems} items
              </span>
            </div>

            {/* Cart Item List */}
            <div className="max-h-[360px] overflow-y-auto space-y-3 pr-1">
              {cart.length === 0 ? (
                <div className="py-8 text-center text-xs text-[#8D6347]">
                  Your cart is empty. Click "+" to add food!
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-3 p-2 rounded-lg bg-[#FAF6EF] border border-[#3B2418]/5"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 rounded-md object-cover bg-white shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-xs text-[#3B2418] truncate">
                        {item.product.name}
                      </h4>
                      <span className="text-[11px] font-bold text-[#8D6347]">
                        ₹{item.product.price}
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#3B2418]/15 rounded bg-white">
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="px-1.5 py-0.5 text-xs text-[#3B2418] hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-1.5 text-xs font-bold text-[#3B2418]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="px-1.5 py-0.5 text-xs text-[#3B2418] hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-[#8D6347] hover:text-[#C8402E] p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Total */}
            <div className="pt-3 border-t border-[#3B2418]/10 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#8D6347]">
                Total
              </span>
              <span className="font-serif font-bold text-xl text-[#3B2418]">
                ₹{subtotal}
              </span>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-btn bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Secondary Food Delivery Apps */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={STORE_INFO.swiggyUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 rounded-btn bg-[#FC8019] hover:bg-[#e87010] text-white text-xs font-bold text-center transition-colors"
              >
                Swiggy
              </a>
              <a
                href={STORE_INFO.zomatoUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 rounded-btn bg-[#E23744] hover:bg-[#c92e3a] text-white text-xs font-bold text-center transition-colors"
              >
                Zomato
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Mobile Floating Sticky View Cart Bar (Sits nicely above bottom action bar on mobile) */}
      {totalItems > 0 && (
        <div className="lg:hidden fixed bottom-16 left-3 right-3 sm:left-4 sm:right-4 z-30 animate-fade-in">
          <button
            onClick={openCart}
            className="w-full bg-[#D98E32] text-white py-3 px-5 rounded-card shadow-soft-lg flex items-center justify-between active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span className="text-xs font-bold tracking-wide uppercase">
                View Cart ({totalItems})
              </span>
            </div>
            <span className="font-serif font-extrabold text-sm">
              ₹{subtotal} →
            </span>
          </button>
        </div>
      )}

    </div>
  );
};
