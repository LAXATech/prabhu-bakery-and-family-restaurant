import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, PartyPopper } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import { useCart } from '../context/CartContext';

export const MobileStickyBar: React.FC = () => {
  const { getWhatsAppOrderUrl } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF6EF]/95 backdrop-blur-md border-t border-[#3B2418]/15 px-3 py-2.5 shadow-[0_-4px_20px_rgba(59,36,24,0.08)]">
      <div className="flex items-center gap-2">
        {/* Order on WhatsApp */}
        <a
          href={getWhatsAppOrderUrl()}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-btn bg-[#25D366] text-white text-xs font-bold shadow-xs hover:bg-[#20ba59] active:scale-[0.98] transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href={`tel:${STORE_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-btn bg-white border border-[#3B2418]/20 text-[#3B2418] text-xs font-bold shadow-2xs hover:bg-[#FAF6EF] active:scale-[0.98] transition-all"
        >
          <Phone className="w-4 h-4 text-[#D98E32] shrink-0" />
          <span className="truncate">Call</span>
        </a>

        {/* Book Party */}
        <Link
          to="/parties"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-btn bg-[#D98E32] text-white text-xs font-bold shadow-xs hover:bg-[#C47A22] active:scale-[0.98] transition-all"
        >
          <PartyPopper className="w-4 h-4 shrink-0" />
          <span className="truncate">Book Party</span>
        </Link>
      </div>
    </div>
  );
};
