import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem, Product, Language } from '../types';
import { STORE_INFO } from '../data/mockData';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedWeight?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  getWhatsAppOrderUrl: () => string;
  toastMessage: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const addToCart = (product: Product, quantity = 1, selectedWeight?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedWeight }];
    });
    showToast(
      language === 'en'
        ? `Added ${product.name} to cart`
        : `${product.nameTa} கார்ட்டில் சேர்க்கப்பட்டது`
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ta' : 'en'));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const getWhatsAppOrderUrl = () => {
    if (cart.length === 0) {
      const defaultMsg = language === 'en'
        ? "Hello Prabhu Bakery & Family Restaurant, I would like to inquire about your menu and daily specials."
        : "வணக்கம் பிரபு பேக்கரி & ரெஸ்டாரன்ட், இன்றைய மெனு மற்றும் சிறப்பு உணவுகள் பற்றி அறிய விரும்புகிறேன்.";
      return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(defaultMsg)}`;
    }

    let message = language === 'en'
      ? `Hello Prabhu Bakery & Family Restaurant,\nI would like to place an order:\n\n`
      : `வணக்கம் பிரபு பேக்கரி & ரெஸ்டாரன்ட்,\nநான் பின்வரும் உணவுகளை ஆர்டர் செய்ய விரும்புகிறேன்:\n\n`;

    cart.forEach((item) => {
      const name = language === 'en' ? item.product.name : item.product.nameTa;
      const weightInfo = item.selectedWeight ? ` (${item.selectedWeight})` : '';
      message += `• ${item.quantity} x ${name}${weightInfo} — ₹${item.product.price * item.quantity}\n`;
    });

    message += `\nTotal: ₹${subtotal}\nStore: Vettuvenni Junction, Marthandam\n\nPlease confirm availability and delivery/pickup time. Thank you!`;

    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  // Lock body scroll when cart is open on mobile
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        openCart,
        closeCart,
        language,
        toggleLanguage,
        setLanguage,
        getWhatsAppOrderUrl,
        toastMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
