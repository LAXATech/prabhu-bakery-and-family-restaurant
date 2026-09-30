import React, { useState } from 'react';
import { Upload, Calendar, Check, MessageCircle, Sparkles, AlertCircle } from 'lucide-react';
import { CUSTOM_CAKE_GALLERY, STORE_INFO } from '../data/mockData';

export const CustomCakesPage: React.FC = () => {
  // Form State
  const [flavor, setFlavor] = useState('Chocolate Truffle');
  const [weight, setWeight] = useState('1 kg');
  const [date, setDate] = useState('');
  const [cakeMessage, setCakeMessage] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [noticeMessage, setNoticeMessage] = useState<string | null>(null);

  const flavors = [
    { id: 'Black Forest', label: 'Black Forest' },
    { id: 'Red Velvet', label: 'Red Velvet' },
    { id: 'Chocolate Truffle', label: 'Chocolate' },
    { id: 'Vanilla', label: 'Vanilla' },
    { id: 'Butterscotch', label: 'Butterscotch' },
    { id: 'Fresh Pineapple', label: 'Pineapple' },
  ];

  const weights = ['0.5 kg', '1 kg', '2 kg', '3 kg+'];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePlaceOrder = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Validate required fields
    const errors: { [key: string]: string } = {};
    if (!customerName.trim()) {
      errors.name = 'Please enter your name';
    }
    if (!customerPhone.trim()) {
      errors.phone = 'Please enter your phone number';
    }
    if (!date) {
      errors.date = 'Please select required celebration date';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    const formattedDate = date
      ? new Date(date).toLocaleDateString('en-IN', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : 'Earliest Available';

    // Construct exact, detailed, non-generic pre-filled WhatsApp message
    let message = `🎂 *PRABHU BAKERY & FAMILY RESTAURANT*\n`;
    message += `📍 *Vettuvenni Junction, Marthandam*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📋 *NEW CUSTOM CAKE ORDER DETAILS:*\n`;
    message += `• *Product:* Custom Celebration Cake\n`;
    message += `• *Flavor:* ${flavor}\n`;
    message += `• *Size / Weight:* ${weight}\n`;
    message += `• *Quantity:* 1 Cake\n`;
    message += `• *Required Date:* ${formattedDate}\n`;
    message += `• *Message on Cake (Icing):* "${cakeMessage.trim() ? cakeMessage.trim() : 'No text requested'}"\n`;
    message += `• *Delivery / Pickup:* Prabhu Bakery Store (Vettuvenni Junction, Marthandam)\n\n`;

    message += `👤 *CUSTOMER INFORMATION:*\n`;
    message += `• *Customer Name:* ${customerName.trim()}\n`;
    message += `• *Phone Number:* ${customerPhone.trim()}\n\n`;

    if (selectedFile) {
      const fileSizeKb = Math.round(selectedFile.size / 1024);
      message += `📸 *REFERENCE CAKE DESIGN:*\n`;
      message += `• *Uploaded Reference Photo:* ${selectedFile.name} (${fileSizeKb} KB)\n`;
      message += `• *Status:* Customer design reference attached for custom decoration.\n\n`;
    } else {
      message += `📸 *REFERENCE DESIGN:* Standard bakery artisanal decoration requested.\n\n`;
    }

    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `Please confirm order acceptance, preparation schedule, and price estimate. Thank you!`;

    // If image file is attached, copy image to clipboard so customer can paste (Cmd+V / Ctrl+V) directly in WhatsApp
    if (selectedFile && navigator.clipboard && window.ClipboardItem) {
      try {
        if (selectedFile.type.startsWith('image/')) {
          await navigator.clipboard.write([
            new ClipboardItem({ [selectedFile.type]: selectedFile }),
          ]);
          setNoticeMessage('Photo copied to clipboard! Simply press Paste (Cmd+V / Ctrl+V) in WhatsApp.');
          setTimeout(() => setNoticeMessage(null), 5000);
        }
      } catch (_) {
        // Continue to open WhatsApp directly
      }
    }

    // Direct WhatsApp Universal URL (opens WhatsApp App if installed, or WhatsApp Web)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${STORE_INFO.whatsappNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Banner Hero */}
      <section className="relative w-full h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <img
          src="/images/custom-cakes-hero.jpg"
          alt="Prabhu Bakery Custom Cake Crafting"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-2xl space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Studio</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Custom Cakes
          </h1>
          <p className="text-xs sm:text-base text-gray-200 font-light">
            Your idea. Our baking magic.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 -mt-10 sm:-mt-12 relative z-20">
        
        {/* Polished Form Card */}
        <div className="bg-white rounded-card p-5 sm:p-10 border border-[#3B2418]/10 shadow-soft space-y-6 sm:space-y-8">
          
          {/* STEP 1: Flavor Selection */}
          <div className="space-y-2.5 sm:space-y-3">
            <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#8D6347]">
              01. Choose Your Flavor
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {flavors.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFlavor(f.id)}
                  className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-btn text-xs sm:text-sm font-bold border transition-all text-left flex items-center justify-between ${
                    flavor === f.id
                      ? 'border-[#D98E32] bg-[#FBF2E4] text-[#3B2418] shadow-2xs'
                      : 'border-[#3B2418]/15 bg-white text-[#543625] hover:border-[#D98E32]/60'
                  }`}
                >
                  <span className="truncate">{f.label}</span>
                  {flavor === f.id && <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D98E32] shrink-0 ml-1" />}
                </button>
              ))}
            </div>
          </div>

          {/* STEP 2: Weight Selection */}
          <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-[#3B2418]/10">
            <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#8D6347]">
              02. Select Weight
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {weights.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWeight(w)}
                  className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-btn text-xs sm:text-sm font-bold border text-center transition-all ${
                    weight === w
                      ? 'border-[#D98E32] bg-[#D98E32] text-white shadow-xs'
                      : 'border-[#3B2418]/15 bg-white text-[#543625] hover:border-[#D98E32]'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* STEP 3: Reference Image Upload */}
          <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-[#3B2418]/10">
            <div className="flex items-center justify-between">
              <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#8D6347]">
                03. Upload Reference Image (Optional)
              </label>
              <span className="text-[10px] sm:text-[11px] text-[#8D6347]">JPG, PNG up to 5MB</span>
            </div>

            <label className="border-2 border-dashed border-[#3B2418]/20 hover:border-[#D98E32] rounded-card p-5 sm:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-[#FAF6EF]/50">
              <input
                type="file"
                accept="image/png, image/jpeg, image/webp"
                className="hidden"
                onChange={handleImageUpload}
              />
              
              {previewImage ? (
                <div className="space-y-2.5">
                  <img
                    src={previewImage}
                    alt="Cake Reference Preview"
                    className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg shadow-soft mx-auto border border-white"
                  />
                  <span className="text-xs font-semibold text-emerald-700 block">
                    ✓ Image attached: {selectedFile?.name}. Click to replace.
                  </span>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-[#3B2418]/10 flex items-center justify-center mx-auto text-[#D98E32]">
                    <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-[#3B2418] block">
                      Click to upload or drag &amp; drop
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#8D6347]">
                      Upload a photo from Pinterest, Instagram, or family design
                    </span>
                  </div>
                </div>
              )}
            </label>
          </div>

          {/* STEP 4: Date & Customization Details */}
          <div className="space-y-3.5 sm:space-y-4 pt-4 border-t border-[#3B2418]/10">
            <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#8D6347]">
              04. Celebration Date &amp; Message
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="text-xs font-semibold text-[#543625] block mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D98E32]" />
                  <span>Required Date *</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    if (formErrors.date) setFormErrors({ ...formErrors, date: '' });
                  }}
                  className={`w-full px-3.5 sm:px-4 py-2.5 rounded-btn border bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] focus:ring-1 focus:ring-[#D98E32] outline-hidden ${
                    formErrors.date ? 'border-red-500' : 'border-[#3B2418]/15'
                  }`}
                />
                {formErrors.date && (
                  <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.date}
                  </span>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-[#543625] block mb-1.5">
                  Message on Cake
                </label>
                <input
                  type="text"
                  placeholder='e.g. "Happy 1st Birthday Ananya"'
                  value={cakeMessage}
                  onChange={(e) => setCakeMessage(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-btn border border-[#3B2418]/15 bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] focus:ring-1 focus:ring-[#D98E32] outline-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                  }}
                  className={`w-full px-3.5 sm:px-4 py-2.5 rounded-btn border bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] outline-hidden ${
                    formErrors.name ? 'border-red-500' : 'border-[#3B2418]/15'
                  }`}
                />
                {formErrors.name && (
                  <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.name}
                  </span>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number * (e.g. 98765 43210)"
                  value={customerPhone}
                  onChange={(e) => {
                    setCustomerPhone(e.target.value);
                    if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
                  }}
                  className={`w-full px-3.5 sm:px-4 py-2.5 rounded-btn border bg-white text-xs sm:text-sm text-[#3B2418] focus:border-[#D98E32] outline-hidden ${
                    formErrors.phone ? 'border-red-500' : 'border-[#3B2418]/15'
                  }`}
                />
                {formErrors.phone && (
                  <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.phone}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Notice Feedback Banner if active */}
          {noticeMessage && (
            <div className="p-3 rounded-btn bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{noticeMessage}</span>
            </div>
          )}

          {/* Primary CTA: Place Order on WhatsApp Button */}
          <div className="pt-2 sm:pt-4">
            <button
              onClick={handlePlaceOrder}
              className="w-full py-3.5 sm:py-4 px-5 sm:px-6 rounded-btn bg-[#D98E32] hover:bg-[#C47A22] text-[#3B2418] font-extrabold text-xs sm:text-base flex items-center justify-center gap-2 shadow-soft hover:shadow-soft-md transition-all active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3B2418]" />
              <span>Place Order on WhatsApp</span>
            </button>
            <p className="text-center text-[10px] sm:text-[11px] text-[#8D6347] mt-2">
              ⚡ Instant WhatsApp dispatch: Your custom cake details &amp; reference photo are forwarded directly to Prabhu Bakery.
            </p>
          </div>

        </div>

        {/* Gallery Section */}
        <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#3B2418]">
                Our Custom Cake Gallery
              </h2>
              <p className="text-xs sm:text-sm text-[#8D6347] mt-1">
                Real recent celebration cakes crafted for clients in Marthandam
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {CUSTOM_CAKE_GALLERY.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-card overflow-hidden border border-[#3B2418]/10 shadow-soft hover:shadow-soft-md transition-all"
              >
                <div className="aspect-square overflow-hidden bg-[#F4ECE0]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5 sm:p-4">
                  <h3 className="font-serif font-bold text-xs sm:text-sm text-[#3B2418] group-hover:text-[#D98E32] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#8D6347] mt-0.5">{item.flavor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
