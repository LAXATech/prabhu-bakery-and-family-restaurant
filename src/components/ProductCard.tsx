import React from 'react';
import { Plus, Check } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, language, cart } = useCart();
  const [justAdded, setJustAdded] = React.useState(false);

  const cartItem = cart.find((item) => item.product.id === product.id);
  const qtyInCart = cartItem ? cartItem.quantity : 0;

  const handleAdd = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  };

  return (
    <div className="group bg-white rounded-card border border-[#3B2418]/10 shadow-soft hover:shadow-soft-md transition-all duration-300 flex flex-col overflow-hidden h-full">
      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full bg-[#F4ECE0] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Most Popular Badge */}
        {product.isPopular && (
          <div className="absolute top-3 left-3 bg-[#D98E32] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs tracking-wide">
            {language === 'en' ? 'Most Popular' : 'பிரபலமானது'}
          </div>
        )}

        {/* Veg / Non-Veg Indicator */}
        <div className="absolute top-3 right-3 bg-white/95 p-1 rounded-sm shadow-xs backdrop-blur-xs">
          {product.isVeg ? (
            <div className="veg-badge" title="Vegetarian" />
          ) : (
            <div className="non-veg-badge" title="Non-Vegetarian" />
          )}
        </div>

        {/* In-cart counter indicator if already in cart */}
        {qtyInCart > 0 && (
          <div className="absolute bottom-2 left-2 bg-[#3B2418]/85 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs">
            {qtyInCart} in cart
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          <h3 className="font-serif font-bold text-base text-[#3B2418] group-hover:text-[#D98E32] transition-colors line-clamp-1">
            {language === 'en' ? product.name : product.nameTa}
          </h3>
          <p className="text-xs text-[#8D6347] line-clamp-2 mt-1 leading-relaxed">
            {language === 'en' ? product.description : product.descriptionTa}
          </p>
        </div>

        {/* Price & Add Action */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-baseline gap-1">
            <span className="font-serif font-extrabold text-lg text-[#3B2418]">
              ₹{product.price}
            </span>
            {product.pieces && (
              <span className="text-[11px] text-[#8D6347]">/ {product.pieces}</span>
            )}
          </div>

          <button
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            className={`w-9 h-9 rounded-btn flex items-center justify-center transition-all ${
              justAdded
                ? 'bg-[#16A34A] text-white scale-105'
                : 'bg-[#D98E32] hover:bg-[#C47A22] text-white active:scale-95 shadow-xs'
            }`}
          >
            {justAdded ? (
              <Check className="w-5 h-5 stroke-[2.5]" />
            ) : (
              <Plus className="w-5 h-5 stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
