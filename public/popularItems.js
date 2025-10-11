// popularItems.js - Centralized data store for popular items

const popularItems = [
  {
    id: 81,
    title: "TIELBO Luxury Crystal Diamond Automatic Tourbillon Movement Man Watch Mechanical Watches for Men Waterproof Sapphire Wristwatch",
    price: 2548.96,
    rating: 4,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S522395cf4b7c4cfc8c994ad2453039dcz.jpg",
    url: "/index/spy.html?id=81",
    category: "Watches",
    description: "Luxury automatic tourbillon watch with crystal diamond detailing, mechanical movement, and sapphire crystal. Waterproof design perfect for sophisticated gentlemen."
  },
  {
    id: 52,
    title: "Pink Squat Machine for Home,Rodeo Core Exercise Machine,330lbs Foldable,Adjustable 4 Resistance Bands,Ride & Rowing",
    price: 59.79,
    rating: 5,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S2c13e6b24c4441e5b49cc33f7a7418e6X.jpg",
    url: "/index/index/spy/52.html",
    category: "Fitness",
    description: "Multi-functional home fitness equipment with 330lbs capacity. Features adjustable resistance bands, foldable design for easy storage, and combines riding and rowing exercises."
  },
  {
    id: 78,
    title: "COLMI R02 Smart Ring Military Grade Titanium Steel Shell Health Monitoring IP68 & 3ATM Waterproof Multi-sport Modes",
    price: 8.39,
    rating: 4,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S97e756bbbd104c64b1ce5282640c9596P.jpg",
    url: "/index/index/spy/78.html",
    category: "Smart Wearables",
    description: "Advanced smart ring with military-grade titanium steel construction. Features comprehensive health monitoring, IP68 waterproof rating, and multiple sport tracking modes."
  },
  {
    id: 63,
    title: "27 Inch 4K UHD(3840 * 2160) Monitor IPS Ultra-Thin Computer Monitor up to 70Hz with 90% DCI-P3 Displayport&HDMI VESA HDR10 (N07)",
    price: 117.53,
    rating: 4,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6a20fc4588d54efeb0a19465e6da8c9a3.jpg",
    url: "/index/index/spy/63.html",
    category: "Monitors",
    description: "Professional 4K UHD monitor with IPS panel technology. Features 90% DCI-P3 color gamut, 70Hz refresh rate, HDR10 support, and ultra-thin design."
  },
  {
    id: 80,
    title: "Neueste GTX1050/GTX 750 Computer Diy Desktop Cyberpunk High-End-Baugruppe Kompletter Satz wasser gek",
    price: 479.99,
    rating: 4,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Hf57f8a913087410590dbb7dcc0e9f728q.jpg",
    url: "/index/index/spy/80.html",
    category: "Gaming PC",
    description: "Complete cyberpunk-themed gaming desktop setup with GTX graphics card and water cooling system. DIY-friendly high-end configuration for gaming enthusiasts."
  },
  {
    id: 14,
    title: "Global Version Samsung Galaxy A55 128GB",
    price: 345.99,
    rating: 4,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8f083e4b58ad437da5b9322d500d1722C.jpg",
    url: "/index/index/spy/14.html",
    category: "Smartphones",
    description: "Samsung Galaxy A55 with 128GB storage. Global version with full warranty, featuring advanced camera system and long-lasting battery."
  },
  {
    id: 7,
    title: "Samsung Galaxy S24 12GB+512GB",
    price: 1231.69,
    rating: 4,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7385248a9836430eb981c6216b3c094bq.jpg",
    url: "/index/index/spy/7.html",
    category: "Smartphones",
    description: "Flagship Samsung Galaxy S24 with 12GB RAM and 512GB storage. Premium features including advanced AI capabilities and professional-grade camera system."
  },
  {
    id: 28,
    title: "QCY H3 ANC Wireless Headphones Bluetooth",
    price: 26.18,
    rating: 5,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S88c17eca352843e9aa8b1d0b79ddaba8V.jpg",
    url: "/index/index/spy/28.html",
    category: "Audio",
    description: "Premium wireless headphones with Active Noise Cancellation. Features Bluetooth connectivity, comfortable over-ear design, and exceptional sound quality."
  },
  {
    id: 71,
    title: "Feco/Rso Machine, All-Purpose Herb Cooker, Decarboxylator, Infuser, Extractor, with and Condenser",
    price: 267.83,
    rating: 4,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S650e3cb5f5ef447c88fd10786f8ab4d9y.jpg",
    url: "/index/index/spy/71.html",
    category: "Kitchen Appliances",
    description: "Multi-functional herb processing machine with decarboxylator, infuser, and extraction capabilities. Includes condenser for optimal results."
  },
  {
    id: 20,
    title: "New OPPO K12x 12GB+512GB",
    price: 259.99,
    rating: 4,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf83699505cdb432e90eb39350395f8f5a.jpg",
    url: "/index/index/spy/20.html",
    category: "Smartphones",
    description: "Latest OPPO K12x with generous 12GB RAM and 512GB storage. Features advanced performance and photography capabilities."
  },
  {
    id: 60,
    title: "Pet Carriers Backpack Portable Breathable Foldable Shoulder Bag Cat Dog Carrier Bags Outgoing Travel Pets Handbag Transport Bag",
    price: 23.99,
    rating: 5,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb9f506f6241c4753b3f0e593eded48fbb.jpg",
    url: "/index/index/spy/60.html",
    category: "Pet Supplies",
    description: "Comfortable and breathable pet carrier backpack. Foldable design perfect for traveling with cats and dogs, featuring multiple ventilation windows."
  },
  {
    id: 10,
    title: "Samsung Galaxy A15 8GB+256GB",
    price: 170.99,
    rating: 4,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S237387d8e97a49da9daa3ae95d55cfaeT.jpg",
    url: "/index/index/spy/10.html",
    category: "Smartphones",
    description: "Samsung Galaxy A15 with 8GB RAM and 256GB storage. Affordable option with reliable performance and quality camera system."
  },
  {
    id: 33,
    title: "HEZZO Electric Scooter for Adult 36v 350W 10.4Ah HS-04Pro 8.5 Self-Balance 15.6MPH Folding Kick Escooter Smart App Us Warehouse",
    price: 199.99,
    rating: 5,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6ea8bdd40a5a4117a32eb97294fd04d1P.jpg",
    url: "/index/index/spy/33.html",
    category: "Electric Scooters",
    description: "High-performance electric scooter with 350W motor and self-balancing technology. Reaches speeds up to 15.6MPH with smart app connectivity."
  },
  {
    id: 69,
    title: "Ankarsrum Original 6230 Black Chrome and Stainless Steel 7 Liter Stand Mixer",
    price: 526.59,
    rating: 4,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S21c6d3cdce1643be861659eb96524139O.jpg",
    url: "/index/index/spy/69.html",
    category: "Kitchen Appliances",
    description: "Premium Swedish stand mixer with 7-liter capacity. Features durable black chrome and stainless steel construction for professional baking."
  },
  {
    id: 37,
    title: "SoundPEATS Capsule3 Pro Wireless Earbuds with Hi-Res and LDAC, 43dB Hybrid ANC Bluetooth 5.3 Earphones with 6 Mics, Total 52 Hrs",
    price: 39.99,
    rating: 5,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sffc03669c2c844de968ad0dd7707d602m.jpg",
    url: "/index/index/spy/37.html",
    category: "Audio",
    description: "Advanced wireless earbuds with Hi-Res audio and LDAC support. Features 43dB hybrid ANC, 6 microphones, and impressive 52-hour total battery life."
  },
  {
    id: 13,
    title: "Global Version Samsung Galaxy A55 256GB",
    price: 387.99,
    rating: 5,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S78eaf77c81704c6794cd3bb32d2e8f76V.jpg",
    url: "/index/index/spy/13.html",
    category: "Smartphones",
    description: "Samsung Galaxy A55 with expanded 256GB storage. Global version with premium features and reliable performance."
  },
  {
    id: 62,
    title: "Gaming Chair Fabric with Pocket Spring Cushion, Massage Game Chairs Cloth with Headrest",
    price: 148.89,
    rating: 4,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S06c38285ee14420083d3d04d488b2e21D.jpg",
    url: "/index/index/spy/62.html",
    category: "Gaming Furniture",
    description: "Ergonomic gaming chair with pocket spring cushion technology. Features massage function, adjustable headrest, and premium fabric upholstery."
  },
  {
    id: 55,
    title: "PowMr 100AH 150AH 200AH 300AH Lifepo4 Battery 12.8V 25.6V Support 4 Units in Series With BMS",
    price: 230.75,
    rating: 4,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Aa019ea738a104deaa528837177c29f43y.jpg",
    url: "/index/index/spy/55.html",
    category: "Energy Storage",
    description: "High-capacity LiFePO4 battery with built-in BMS. Available in multiple capacities, supports series connection for expanded power systems."
  },
  {
    id: 75,
    title: "5 8GB Lossless Bluetooth MP3 Music Player, Zinc Alloy Body,Rotary Controls,Wireless Connection,FM Radio,Voice Recorder",
    price: 19.12,
    rating: 5,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd53343b4957d4a48a958696aaaa6eb64M.jpg",
    url: "/index/index/spy/75.html",
    category: "Audio",
    description: "Premium MP3 player with zinc alloy construction and lossless audio support. Features Bluetooth connectivity, FM radio, and voice recording."
  },
  {
    id: 77,
    title: "BRDRC Storage Bag for DJI Mini 3/3 Pro Drone Carrying Case Portable Handbag RC/RC N1 Remote Controler Box Shoulder Bag",
    price: 6.35,
    rating: 5,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6d6bee275b944718be15d240347ae56ar.jpg",
    url: "/index/index/spy/77.html",
    category: "Drone Accessories",
    description: "Protective storage solution for DJI Mini 3/3 Pro drones. Portable design with dedicated compartments for drone and remote controller."
  }
];

// Helper Functions

// Get product by ID
function getProductById(id) {
  return popularItems.find(item => item.id === parseInt(id));
}

// Get products by category
function getProductsByCategory(category) {
  return popularItems.filter(item => item.category === category);
}

// Get products by price range
function getProductsByPriceRange(minPrice, maxPrice) {
  return popularItems.filter(item => item.price >= minPrice && item.price <= maxPrice);
}

// Get products by rating
function getProductsByRating(minRating) {
  return popularItems.filter(item => item.rating >= minRating);
}

// Search products by title
function searchProducts(query) {
  const lowerQuery = query.toLowerCase();
  return popularItems.filter(item => 
    item.title.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery)
  );
}

// Generate star rating HTML
function generateStarRating(rating) {
  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= rating;
    starsHTML += `
      <div role="radio" class="van-rate__item" tabindex="0" aria-setsize="5" aria-posinset="${i}" aria-checked="${isFilled}">
        <i class="van-badge__wrapper van-icon van-icon-star van-rate__icon ${isFilled ? 'van-rate__icon--full' : ''} material-icons" 
           style="font-size: 12px${!isFilled ? '; color: lightgray' : ''}">star</i>
      </div>
    `;
  }
  return starsHTML;
}

// Generate product card HTML for listing page
function generateProductCard(product) {
  return `
    <div class="item">
      <a class="imd_fex" href="${product.url}">
        <img src="${product.image}" alt="${product.title}" />
        <div class="item-right">
          <div class="item-title">${product.title}</div>
          <div style="padding-top: 4px">
            Price: <span style="color: red; margin-left: 5px">$${product.price.toFixed(2)}</span>
          </div>
          <div role="radiogroup" class="van-rate van-rate--readonly" tabindex="0" aria-disabled="false" aria-readonly="true">
            ${generateStarRating(product.rating)}
          </div>
        </div>
      </a>
    </div>
  `;
}

// Render all products to listing page
function renderProductListing(containerId = 'news-list') {
  const container = document.querySelector(`.${containerId}`);
  if (!container) return;
  
  container.innerHTML = popularItems.map(product => generateProductCard(product)).join('');
}

// Get product details for detail page
function renderProductDetail(productId) {
  const product = getProductById(productId);
  if (!product) {
    return '<p>Product not found</p>';
  }
  
  return {
    title: product.title,
    price: product.price,
    rating: product.rating,
    image: product.image,
    category: product.category,
    description: product.description,
    starsHTML: generateStarRating(product.rating)
  };
}

// Initialize search functionality
function initializeSearch() {
  const searchInput = document.querySelector('#van-search-3-input');
  const searchButton = document.querySelector('.van-search__action');
  
  if (searchInput && searchButton) {
    searchButton.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        const results = searchProducts(query);
        displaySearchResults(results);
      }
    });
    
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          const results = searchProducts(query);
          displaySearchResults(results);
        }
      }
    });
  }
}

// Display search results
function displaySearchResults(results) {
  const container = document.querySelector('.news-list');
  if (!container) return;
  
  if (results.length === 0) {
    container.innerHTML = '<div style="text-align: center; padding: 40px;">No products found</div>';
  } else {
    container.innerHTML = results.map(product => generateProductCard(product)).join('');
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    popularItems,
    getProductById,
    getProductsByCategory,
    getProductsByPriceRange,
    getProductsByRating,
    searchProducts,
    generateStarRating,
    generateProductCard,
    renderProductListing,
    renderProductDetail,
    initializeSearch
  };
}