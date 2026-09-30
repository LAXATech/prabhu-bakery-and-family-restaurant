import type { Product, Review, PartyPackage } from '../types';

export const STORE_INFO = {
  name: "Prabhu Bakery & Family Restaurant",
  nameTa: "பிரபு பேக்கரி & ஃபேமிலி ரெஸ்டாரன்ட்",
  tagline: "Fresh Bakes. Family Feasts. Every Celebration.",
  taglineTa: "புதிய பேக்கிங். குடும்ப விருந்து. ஒவ்வொரு கொண்டாட்டம்.",
  phone: "+91 9443114612",
  whatsappNumber: "919443114612", // International format for wa.me link
  address: "Vettuvenni Junction, Marthandam, Kanyakumari District, Tamil Nadu – 629165",
  addressTa: "வெட்டுவென்னி சந்திப்பு, மார்த்தாண்டம், கன்னியாகுமரி மாவட்டம், தமிழ்நாடு – 629165",
  hours: "Mon–Sun: 6:00 AM – 11:00 PM",
  hoursTa: "திங்கள்–ஞாயிறு: காலை 6:00 – இரவு 11:00",
  rating: 4.3,
  reviewCount: 1420,
  googleMapsUrl: "https://maps.google.com/?q=Vettuvenni+Junction+Marthandam+Tamil+Nadu",
  swiggyUrl: "https://www.swiggy.com",
  zomatoUrl: "https://www.zomato.com",
};

export const PRODUCTS: Product[] = [
  // BESTSELLERS
  {
    id: "cake-choco-truffle",
    name: "Chocolate Truffle Cake",
    nameTa: "சாக்லேட் ட்ரஃபிள் கேக்",
    price: 450,
    category: "bakery",
    subCategory: "cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    isBestseller: true,
    isPopular: true,
    description: "Rich dark chocolate ganache layered between velvety soft chocolate sponge.",
    descriptionTa: "அடர்ந்த டார்க் சாக்லேட் மற்றும் மென்மையான சாக்லேட் ஸ்பாஞ்ச் கலந்த பிரீமியம் கேக்.",
    weightOptions: ["0.5 kg", "1 kg", "2 kg"]
  },
  {
    id: "rest-broasted-chicken",
    name: "Broasted Chicken (4 Pcs)",
    nameTa: "ப்ரோஸ்டட் சிக்கன் (4 துண்டுகள்)",
    price: 250,
    category: "restaurant",
    subCategory: "broasted",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
    isVeg: false,
    isBestseller: true,
    isPopular: true,
    description: "Crispy golden Southern spiced pressure-fried chicken, juicy and tender inside.",
    descriptionTa: "மொருமொருப்பான பொன்னிற வெளிப்புறமும், சுவையான மிருதுவான உட்புறமும் கொண்ட சிக்கன்.",
    pieces: "4 pcs"
  },
  {
    id: "rest-veg-pizza",
    name: "Farmhouse Veg Pizza",
    nameTa: "வெஜ் பீட்சா",
    price: 220,
    category: "restaurant",
    subCategory: "pizzas",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    isBestseller: true,
    description: "Stone-baked hand-stretched crust topped with fresh mozzarella, capsicum, corn and onions.",
    descriptionTa: "புதிய மொசரெல்லா சீஸ், குடைமிளகாய், சோளம் மற்றும் வெங்காயம் தூவப்பட்ட பீட்சா."
  },
  {
    id: "puff-chicken",
    name: "Crispy Chicken Puff",
    nameTa: "சிக்கன் பஃப்",
    price: 60,
    category: "bakery",
    subCategory: "puffs",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=600&q=80",
    isVeg: false,
    isBestseller: true,
    description: "Flaky golden layered pastry stuffed with slow-cooked spiced South Indian chicken.",
    descriptionTa: "காரசாரமான நாட்டுக்கோழி மசாலா அடைக்கப்பட்ட பொன்னிற மொறுமொறு பஃப்."
  },

  // CAKES
  {
    id: "cake-red-velvet",
    name: "Red Velvet Cake",
    nameTa: "ரெட் வெல்வெட் கேக்",
    price: 480,
    category: "bakery",
    subCategory: "cakes",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    isPopular: true,
    description: "Decadent crimson sponge complemented with smooth cream cheese frosting.",
    descriptionTa: "மென்மையான கிரீம் சீஸ் கலந்த அருமையான ரெட் வெல்வெட் கேக்.",
    weightOptions: ["0.5 kg", "1 kg", "2 kg"]
  },
  {
    id: "cake-black-forest",
    name: "Black Forest Cake",
    nameTa: "பிளாக் பாரஸ்ட் கேக்",
    price: 450,
    category: "bakery",
    subCategory: "cakes",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    description: "Classic German chocolate sponge with fresh whipped cream, dark cherries and chocolate shavings.",
    descriptionTa: "சாக்லேட் துண்டுகள், செர்ரி பழங்கள் மற்றும் பிரஷ் கிரீம் கொண்ட பாரம்பரிய கேக்.",
    weightOptions: ["0.5 kg", "1 kg", "2 kg"]
  },
  {
    id: "cake-butterscotch",
    name: "Butterscotch Crunch Cake",
    nameTa: "பட்டர்ஸ்காட்ச் கேக்",
    price: 430,
    category: "bakery",
    subCategory: "cakes",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    description: "Golden praline crunch layered in rich caramel cream and soft vanilla sponge.",
    descriptionTa: "கேரமல் சாஸ் மற்றும் மொறுமொறு நட்ஸ் நிரம்பிய பட்டர்ஸ்காட்ச் கேக்.",
    weightOptions: ["0.5 kg", "1 kg", "2 kg"]
  },
  {
    id: "cake-pineapple",
    name: "Fresh Pineapple Cake",
    nameTa: "பைனாப்பிள் கேக்",
    price: 400,
    category: "bakery",
    subCategory: "cakes",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    description: "Moist sponge layered with fresh Marthandam pineapple compote and vanilla cream.",
    descriptionTa: "சுவையான இயற்கை அன்னாசி பழக்கூழ் மற்றும் வெண்ணிலா கிரீம் சேர்ந்த கேக்.",
    weightOptions: ["0.5 kg", "1 kg", "2 kg"]
  },
  {
    id: "cake-vanilla",
    name: "Classic Vanilla Cake",
    nameTa: "வெண்ணிலா கேக்",
    price: 380,
    category: "bakery",
    subCategory: "cakes",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    description: "Light-as-air traditional vanilla sponge frosted with sweet buttercream.",
    descriptionTa: "மிருதுவான வெண்ணிலா ஸ்பாஞ்ச் மற்றும் பட்டர் கிரீம் அலங்காரம்.",
    weightOptions: ["0.5 kg", "1 kg", "2 kg"]
  },

  // PUFFS & SAVORIES
  {
    id: "puff-veg",
    name: "Fresh Veg Puff",
    nameTa: "வெஜ் பஃப்",
    price: 50,
    category: "bakery",
    subCategory: "puffs",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    description: "Golden buttery crust loaded with spiced potatoes, green peas and carrots.",
    descriptionTa: "உருளைக்கிழங்கு மற்றும் பட்டாணி மசாலா நிரப்பப்பட்ட சுவையான பஃப்."
  },
  {
    id: "savory-samosa",
    name: "Hot Punjabi Samosa (2 Pcs)",
    nameTa: "சூடான சமோசா (2 துண்டுகள்)",
    price: 40,
    category: "bakery",
    subCategory: "puffs",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    description: "Crispy pastry pockets filled with cumin potatoes and cashews, served with mint chutney.",
    descriptionTa: "புதினா சட்னியுடன் பரிமாறப்படும் சுடச்சுட உருளைக்கிழங்கு சமோசா."
  },
  {
    id: "savory-egg-puff",
    name: "Spiced Egg Puff",
    nameTa: "முட்டை பஃப்",
    price: 55,
    category: "bakery",
    subCategory: "puffs",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d62816dc?auto=format&fit=crop&w=600&q=80",
    isVeg: false,
    description: "Half boiled country egg wrapped in caramelized onion pepper masala inside flaky puff pastry.",
    descriptionTa: "வெங்காய மசாலா மற்றும் முட்டை சேர்ந்த மொருமொரு பஃப்."
  },

  // SNACKS & CHIPS
  {
    id: "snack-banana-chips",
    name: "Kerala Nendran Banana Chips",
    nameTa: "நேந்திரன் வாழைப்பழ சிப்ஸ்",
    price: 90,
    category: "bakery",
    subCategory: "snacks",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    description: "Fried in pure wood-pressed coconut oil, seasoned with a touch of turmeric and sea salt.",
    descriptionTa: "தூய தேங்காய் எண்ணெயில் வறுத்த பாரம்பரிய வாழைப்பழ சிப்ஸ்."
  },
  {
    id: "snack-butter-murukku",
    name: "Marthandam Butter Murukku",
    nameTa: "வெண்ணெய் முறுக்கு",
    price: 80,
    category: "bakery",
    subCategory: "snacks",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    description: "Melt-in-mouth rice flour spiral crisps made with fresh dairy farm butter.",
    descriptionTa: "நாட்டுக் கார வெண்ணெயில் தயாரிக்கப்பட்ட வாயில் கரையும் முறுக்கு."
  },

  // RESTAURANT: PIZZAS & BURGERS
  {
    id: "rest-chicken-bbq-pizza",
    name: "BBQ Chicken Pizza",
    nameTa: "பார்பிக்யூ சிக்கன் பீட்சா",
    price: 280,
    category: "restaurant",
    subCategory: "pizzas",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    isVeg: false,
    isPopular: true,
    description: "Smoky grilled shredded chicken, tangy BBQ sauce, red onions and stretchy mozzarella.",
    descriptionTa: "புகைத்த சிக்கன், பார்பிக்யூ சாஸ் மற்றும் மொசரெல்லா சீஸ் கூடிய பீட்சா."
  },
  {
    id: "rest-chicken-burger",
    name: "Crispy Chicken Burger",
    nameTa: "சிக்கன் பர்கர்",
    price: 160,
    category: "restaurant",
    subCategory: "burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    isVeg: false,
    isPopular: true,
    description: "Crunchy fried chicken fillet in toasted sesame bun with garlic mayo and fresh lettuce.",
    descriptionTa: "மொருமொரு சிக்கன், பிரஷ் லெட்யூஸ் மற்றும் மயோனைஸ் நிரம்பிய பர்கர்."
  },
  {
    id: "rest-veg-burger",
    name: "Aloo Tikki Veg Burger",
    nameTa: "ஆலு டிக்கி வெஜ் பர்கர்",
    price: 130,
    category: "restaurant",
    subCategory: "burgers",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    description: "Crispy spiced herb potato patty, cheddar slice, tomatoes and mint mayo.",
    descriptionTa: "ஆலு டிக்கி, சீஸ் மற்றும் தக்காளி நிறைந்த பிரஷ் வெஜ் பர்கர்."
  },

  // RESTAURANT: DESSERTS & FALOODA
  {
    id: "rest-royal-falooda",
    name: "Special Royal Falooda",
    nameTa: "ஸ்பெஷல் ராயல் ஃபாலூடா",
    price: 140,
    category: "restaurant",
    subCategory: "desserts",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    isPopular: true,
    description: "Layered with rose syrup, vermicelli, sabja seeds, dry fruits, and double scoops of ice cream.",
    descriptionTa: "ரோஸ் சிரப், சேமியா, சப்ஜா விதைகள், டிரை ஃப்ரூட்ஸ் மற்றும் ஐஸ்கிரீம் கலந்த சுவை."
  },
  {
    id: "rest-badam-milk",
    name: "Chilled Saffron Badam Milk",
    nameTa: "குளிர்ந்த பாதாம் பால்",
    price: 80,
    category: "restaurant",
    subCategory: "desserts",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
    isVeg: true,
    description: "Rich thickened milk infused with real almond slivers, cardamom and Kashmiri saffron.",
    descriptionTa: "பாதாம் பருப்பு, ஏலக்காய் மற்றும் குங்குமப்பூ சேர்த்த சுவையான பாதாம் பால்."
  }
];

export const PARTY_PACKAGES: PartyPackage[] = [
  {
    id: "pkg-basic",
    name: "Basic Celebration",
    nameTa: "அடிப்படை தொகுப்பு",
    price: 4999,
    guestCount: "Up to 15 guests",
    guestCountTa: "15 விருந்தினர்கள் வரை",
    features: [
      "1 kg Custom Birthday Cake (Flavor of choice)",
      "3 Bakery Snacks per guest (Puffs, Samosas, Cutlets)",
      "Welcome Soft Drinks / Fruit Punch",
      "Decorated Cake Table & Happy Birthday Banner",
      "2 Hours Reserved Party Hall Space"
    ],
    featuresTa: [
      "1 கிலோ விருப்பமான பிறந்தநாள் கேக்",
      "தலா 3 ஸ்நாக்ஸ் வகைகள் (பஃப்ஸ், சமோசா, கட்லெட்)",
      "வரவேற்பு பானம் (சாப்ட் டிரிங்க்ஸ்)",
      "கேக் டேபிள் அலங்காரம் & பேனர்",
      "2 மணி நேர பிரத்யேக பார்ட்டி ஹால்"
    ],
    isPopular: false,
    tagline: "Ideal for intimate family birthdays & small gatherings"
  },
  {
    id: "pkg-classic",
    name: "Classic Family Feast",
    nameTa: "பிரபலமான கிளாசிக் தொகுப்பு",
    price: 7999,
    guestCount: "Up to 30 guests",
    guestCountTa: "30 விருந்தினர்கள் வரை",
    features: [
      "2 kg Themed Tiered Celebration Cake",
      "5 Snacks & Savories per guest",
      "2 Signature Beverages (Mojito / Badam Milk)",
      "Balloon Arch & Festive Fairy Lights Ambience",
      "Surround Music System with Mic for Celebrations",
      "3 Hours Reserved Air-Conditioned Hall"
    ],
    featuresTa: [
      "2 கிலோ தீம் கொண்ட கேக்",
      "விருந்தினருக்கு 5 வகையான ஸ்நாக்ஸ்",
      "2 சிறப்பு பானங்கள் (மொஜித்தோ / பாதாம் பால்)",
      "பலூன் அலங்காரம் மற்றும் மின்விளக்குகள்",
      "மியூசிக் சிஸ்டம் மற்றும் மைக் வசதி",
      "3 மணி நேர குளிரூட்டப்பட்ட ஹால்"
    ],
    isPopular: true,
    tagline: "Our most requested party package for kids and anniversaries"
  },
  {
    id: "pkg-premium",
    name: "Grand Premium Banquet",
    nameTa: "கிராண்ட் பிரீமியம் தொகுப்பு",
    price: 12999,
    guestCount: "Up to 50 guests",
    guestCountTa: "50 விருந்தினர்கள் வரை",
    features: [
      "3 kg Multi-tier Designer Cake + Cupcake Tower",
      "8 Hot Snacks & Broasted Chicken / Veg Platters",
      "3 Beverages including Royal Falooda cups",
      "Complete Custom Thematic Decor & Entrance Arch",
      "Dedicated Hall Host & Audio-Visual Setup",
      "4 Hours Full Hall Access & Dining Service"
    ],
    featuresTa: [
      "3 கிலோ டிசைனர் கேக் + கப்கேக் டவர்",
      "8 ஸ்நாக்ஸ் & ப்ரோஸ்டட் சிக்கன் / வெஜ் தட்டுகள்",
      "ராயல் ஃபாலூடா உள்ளிட்ட 3 பானங்கள்",
      "முழுமையான தீம் அலங்காரம் & வரவேற்பு வளைவு",
      "பிரத்யேக சர்வீஸ் டீம் மற்றும் ஏ/வி செட்டப்",
      "4 மணி நேர முழு ஹால் முன்பதிவு"
    ],
    isPopular: false,
    tagline: "Complete luxury celebration with zero stress"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Priya S.",
    rating: 5,
    comment: "The best bakery in Marthandam! Cakes are always fresh, moist, and delicious. Ordered my daughter's first birthday cake here and everyone loved it.",
    commentTa: "மார்த்தாண்டத்தில் சிறந்த பேக்கரி! கேக்குகள் எப்போதும் ஃப்ரெஷ்ஷாகவும் சுவையாகவும் இருக்கும். என் மகளின் பிறந்தநாள் கேக் மிக அற்புதம்.",
    location: "Marthandam",
    date: "2 days ago"
  },
  {
    id: "rev-2",
    name: "Arun K.",
    rating: 5,
    comment: "Great food, friendly staff and clean ambience. Broasted chicken was crispy and tender, and the party hall is perfect for family dinners and get-togethers.",
    commentTa: "அருமையான உணவு, கனிவான உபசரிப்பு, தூய்மையான சூழல். ப்ரோஸ்டட் சிக்கன் மற்றும் பார்ட்டி ஹால் மிகவும் பிடித்திருந்தது.",
    location: "Kuzhithurai",
    date: "1 week ago"
  },
  {
    id: "rev-3",
    name: "Meenakshi R.",
    rating: 5,
    comment: "Ordered a custom cake and it was exactly as I wanted from the reference photo! Highly recommended for all celebration events.",
    commentTa: "நான் அனுப்பிய புகைப்படத்தைப் போலவே அழகாக கஸ்டம் கேக் செய்து தந்தார்கள். மிகவும் பரிந்துரைக்கிறேன்!",
    location: "Thuckalay",
    date: "2 weeks ago"
  }
];

export const CUSTOM_CAKE_GALLERY = [
  {
    id: "gal-1",
    title: "Double Chocolate Drip Cake",
    flavor: "Chocolate Truffle",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gal-2",
    title: "Pastel Floral Celebration Cake",
    flavor: "Vanilla & Strawberry",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gal-3",
    title: "Berry Velvet Birthday Delight",
    flavor: "Red Velvet Cream Cheese",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gal-4",
    title: "Black Forest Shavings Royale",
    flavor: "Authentic Black Forest",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gal-5",
    title: "Golden Butterscotch Crunch",
    flavor: "Butterscotch Praline",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gal-6",
    title: "Kids Cartoon Theme Cake",
    flavor: "Choco Berry",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
  }
];
