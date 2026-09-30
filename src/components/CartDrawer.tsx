import React from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_INFO } from '../data/mockData';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalItems,
    getWhatsAppOrderUrl,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer Container (Desktop right slide-in / Mobile full drawer) */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF6EF] shadow-2xl flex flex-col justify-between border-l border-[#3B2418]/10 animate-fade-in">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#3B2418]/10 bg-white/60 backdrop-blur-xs flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#D98E32]" />
              <h2 className="font-serif font-bold text-lg sm:text-xl text-[#3B2418]">
                Your Cart
              </h2>
              <span className="text-xs bg-[#D98E32]/15 text-[#3B2418] font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-[#8D6347] hover:text-[#C8402E] transition-colors px-2 py-1"
                >
                  Clear
                </button>
              )}
              <button
                onClick={closeCart}
                className="p-1.5 rounded-full hover:bg-[#3B2418]/5 text-[#3B2418] transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F4ECE0] flex items-center justify-center text-[#D98E32]">
                  <ShoppingBag className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#3B2418]">
                    Your cart is empty
                  </h3>
                  <p className="text-xs text-[#8D6347] mt-1 max-w-xs">
                    Explore our freshly prepared cakes, hot crispy puffs, broasted chicken, and delicious meals.
                  </p>
                </div>
                <button
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn bg-[#D98E32] text-white text-xs font-bold hover:bg-[#C47A22] transition-colors shadow-xs"
                >
                  <span>Browse Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 sm:gap-4 bg-white p-3 sm:p-3.5 rounded-card border border-[#3B2418]/10 shadow-2xs"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover bg-[#F4ECE0] shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      {item.product.isVeg ? (
                        <div className="veg-badge shrink-0" />
                      ) : (
                        <div className="non-veg-badge shrink-0" />
                      )}
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-[#3B2418] truncate">
                        {item.product.name}
                      </h4>
                    </div>
                    <div className="text-xs font-bold text-[#8D6347]">
                      ₹{item.product.price}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-1.5 sm:mt-2">
                      <div className="flex items-center border border-[#3B2418]/15 rounded-md bg-[#FAF6EF]">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="p-1 hover:bg-[#3B2418]/10 text-[#3B2418] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 sm:w-7 text-center text-xs font-bold text-[#3B2418]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="p-1 hover:bg-[#3B2418]/10 text-[#3B2418] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1 text-[#8D6347] hover:text-[#C8402E] transition-colors ml-auto"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="font-serif font-bold text-xs sm:text-sm text-[#3B2418] shrink-0 self-center">
                    ₹{item.product.price * item.quantity}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Checkout */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-[#3B2418]/10 bg-white space-y-3 sm:space-y-4">
              {/* Total Calculation */}
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold text-[#8D6347]">
                  Total
                </span>
                <span className="font-serif font-bold text-xl sm:text-2xl text-[#3B2418]">
                  ₹{subtotal}
                </span>
              </div>

              {/* Primary WhatsApp Order CTA */}
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 sm:py-3.5 px-4 rounded-btn bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-soft hover:shadow-soft-md transition-all active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                <span>Order on WhatsApp</span>
              </a>

              {/* Delivery Partner Buttons */}
              <div>
                <p className="text-[10px] sm:text-[11px] text-center text-[#8D6347] font-medium mb-1.5 sm:mb-2">
                  Or order online via food apps:
                </p>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  <a
                    href={STORE_INFO.swiggyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 sm:py-2.5 px-3 rounded-btn bg-[#FC8019] hover:bg-[#e87010] text-white text-xs font-bold flex items-center justify-center transition-colors shadow-2xs"
                  >
                    Swiggy
                  </a>
                  <a
                    href={STORE_INFO.zomatoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 sm:py-2.5 px-3 rounded-btn bg-[#E23744] hover:bg-[#c92e3a] text-white text-xs font-bold flex items-center justify-center transition-colors shadow-2xs"
                  >
                    Zomato
                  </a>
                </div>
              </div>

              <p className="text-[10px] text-center text-[#8D6347] leading-tight">
                📍 Store: Vettuvenni Junction, Marthandam • Fresh delivery &amp; pickup
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
