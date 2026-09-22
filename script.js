/* =========================================================
   LUXE SALON — MODULAR JAVASCRIPT ENGINE
   Pure Client-Side Frontend Architecture for Envato
   ========================================================= */

// --- BASELINE CATALOG DATA WITH OPTIMIZED LOCAL IMAGES ---
const LUXE_DATA = {
  services: [
    {
      id: 'srv-1',
      category: 'haircuts',
      categoryName: 'Haircuts & Styling',
      name: 'Precision Haircut & Signature Blowout',
      tagline: 'Custom shaping, botanical cleanse, scalp massage & glossy finish',
      duration: 60,
      price: 85,
      image: 'images/haircut-blowout.jpg',
      description: 'A tailored haircut crafted specifically for your bone structure, hair density, and daily styling routine. Includes a relaxing botanical scalp treatment, shampoo ritual, and high-shine blowout.',
      popular: true,
      addOns: [
        { id: 'add-1', name: 'Deep Conditioning Moisture Masque', price: 25, duration: 15 },
        { id: 'add-2', name: 'Scalp Detox & Micro-Exfoliation', price: 30, duration: 20 },
        { id: 'add-3', name: 'Split-End Sealing Gloss Treatment', price: 35, duration: 15 }
      ]
    },
    {
      id: 'srv-2',
      category: 'color',
      categoryName: 'Color & Balayage',
      name: 'Dimensional Balayage & Toning Gloss',
      tagline: 'Sun-kissed transitions, root melt & bond-protecting glaze',
      duration: 150,
      price: 180,
      image: 'images/color-highlights.jpg',
      description: 'Hand-painted lightener creating seamless natural dimension and low-maintenance regrowth. Formulated with bond-building plex technology and finished with a bespoke gloss for mirror-like shine.',
      popular: true,
      addOns: [
        { id: 'add-4', name: 'Olaplex Intensive Repair Shield', price: 40, duration: 15 },
        { id: 'add-5', name: 'Shadow Root Melt Refinement', price: 45, duration: 20 },
        { id: 'add-6', name: 'Post-Color Scalp Calming Ritual', price: 25, duration: 10 }
      ]
    },
    {
      id: 'srv-3',
      category: 'color',
      categoryName: 'Color & Balayage',
      name: 'Full Single-Process Color & High-Shine Glaze',
      tagline: 'Rich all-over pigment, grey coverage & protective seal',
      duration: 90,
      price: 120,
      image: 'images/gallery-2.jpg',
      description: 'Custom ammonia-free permanent or demi-permanent rich color application. Imparts vibrant depth, 100% translucent grey coverage, and nourishing oils for supreme softness.',
      popular: false,
      addOns: [
        { id: 'add-1', name: 'Deep Conditioning Moisture Masque', price: 25, duration: 15 },
        { id: 'add-4', name: 'Olaplex Intensive Repair Shield', price: 40, duration: 15 }
      ]
    },
    {
      id: 'srv-4',
      category: 'skin',
      categoryName: 'Facials & Skin Revival',
      name: 'Luxe Botanical Radiance & Sculpting Facial',
      tagline: 'Enzyme exfoliation, ultrasonic hydration & lymphatic contouring',
      duration: 75,
      price: 135,
      image: 'images/facial-skin-revival.jpg',
      description: 'A deeply rejuvenating facial customized to your skin barrier needs. Features triple-phase cleansing, gentle fruit enzymes, ultrasonic serum infusion, ice globe contouring, and cold-pressed botanical oils.',
      popular: true,
      addOns: [
        { id: 'add-7', name: 'LED Phototherapy Rejuvenation Mask', price: 35, duration: 15 },
        { id: 'add-8', name: 'Collagen Eye & Lip Plumping Treatment', price: 25, duration: 10 },
        { id: 'add-9', name: 'Neck & Decollete Lifting Infusion', price: 40, duration: 15 }
      ]
    },
    {
      id: 'srv-5',
      category: 'nails',
      categoryName: 'Nails & Hand Rituals',
      name: 'Signature Gel Manicure & Botanical Hand Spa',
      tagline: 'Precision cuticle grooming, exfoliation & long-wear mineral polish',
      duration: 50,
      price: 65,
      image: 'images/manicure-pedicure.jpg',
      description: 'Comprehensive nail shaping, detailed cuticle treatment, sweet almond sugar scrub, warm herbal wrap, and non-toxic long-lasting gel application cured under soft LED light.',
      popular: false,
      addOns: [
        { id: 'add-10', name: 'Paraffin Warm Wax Moisture Dip', price: 20, duration: 15 },
        { id: 'add-11', name: 'French Tip or Minimalist Nail Art', price: 25, duration: 15 }
      ]
    },
    {
      id: 'srv-6',
      category: 'nails',
      categoryName: 'Nails & Hand Rituals',
      name: 'Restorative Deluxe Pedicure & Reflexology',
      tagline: 'Sea salt soak, callus smoothing, mask wrap & tension-release massage',
      duration: 65,
      price: 85,
      image: 'images/gallery-3.jpg',
      description: 'An indulgent foot sanctuary ritual. Includes eucalyptus mineral soak, smoothing scrub, restorative clay mask with heated booties, and a 20-minute acupressure foot massage.',
      popular: false,
      addOns: [
        { id: 'add-10', name: 'Paraffin Warm Wax Moisture Dip', price: 20, duration: 15 }
      ]
    },
    {
      id: 'srv-7',
      category: 'bridal',
      categoryName: 'Bridal & Occasions',
      name: 'Couture Bridal Hair & Makeup Trial',
      tagline: 'Comprehensive styling session, veil placement & longevity setting',
      duration: 120,
      price: 210,
      image: 'images/bridal-styling.jpg',
      description: 'Detailed pre-wedding consultation exploring updo architectures, textured waves, veil and accessory positioning, plus a full camera-tested luxury makeup application.',
      popular: true,
      addOns: [
        { id: 'add-12', name: 'Silk Lash Cluster Application', price: 30, duration: 15 },
        { id: 'add-13', name: 'Clip-In Hair Extension Custom Blending', price: 50, duration: 25 }
      ]
    }
  ],

  staff: [
    {
      id: 'stf-1',
      name: 'Elena Rostova',
      role: 'Creative Director & Master Stylist',
      experience: '12+ Years Experience',
      bio: 'Former Paris Fashion Week stylist specializing in architectural cuts, effortless movement, and modern textured silhouettes.',
      image: 'images/person1.jpg',
      rating: 4.98,
      specialties: ['Precision Haircut', 'Textured Bob', 'Editorial Styling']
    },
    {
      id: 'stf-2',
      name: 'Marcus Vance',
      role: 'Master Colorist & Balayage Specialist',
      experience: '9 Years Experience',
      bio: 'Renowned for seamless melt balayage, creamy blondes, and rich warm brunette tones with zero harsh demarcation.',
      image: 'images/person5.jpg',
      rating: 4.95,
      specialties: ['Dimensional Balayage', 'Color Correction', 'Gloss Treatments']
    },
    {
      id: 'stf-3',
      name: 'Chloe Chen',
      role: 'Aesthetics & Skin Health Specialist',
      experience: '8 Years Experience',
      bio: 'Certified clinical aesthetician focusing on holistic skin barrier restoration, deep hydration, and lymphatic drainage.',
      image: 'images/person6.jpg',
      rating: 4.96,
      specialties: ['Botanical Facials', 'Skin Barrier Revival', 'LED Phototherapy']
    },
    {
      id: 'stf-4',
      name: 'Sophia Laurent',
      role: 'Master Nail Artist & Spa Director',
      experience: '7 Years Experience',
      bio: 'Creator of bespoke minimalist nail designs, organic spa rituals, and long-wear precision cuticle care.',
      image: 'images/person7.jpg',
      rating: 4.92,
      specialties: ['Gel Manicures', 'Deluxe Pedicures', 'Nail Art']
    },
    {
      id: 'stf-5',
      name: 'David Sterling',
      role: 'Senior Barber & Texture Specialist',
      experience: '10 Years Experience',
      bio: 'Expert in tailored grooming, classic scissor over comb techniques, hot towel treatments, and natural beard sculpture.',
      image: 'images/person8.jpg',
      rating: 4.94,
      specialties: ['Precision Haircut', 'Texture Styling', 'Beard Grooming']
    },
    {
      id: 'stf-6',
      name: 'Amara Diallo',
      role: 'Bridal & Occasion Artistry Lead',
      experience: '11 Years Experience',
      bio: 'Crafts ethereal, long-lasting wedding day beauty looks, romantic waves, and camera-ready luxury finishes.',
      image: 'images/person9.jpg',
      rating: 4.99,
      specialties: ['Bridal Styling', 'Occasion Waves', 'Luxury Makeup']
    }
  ],

  gallery: [
    {
      id: 'gal-1',
      category: 'hair',
      title: 'Parisian Layered Movement',
      desc: 'Precision Cut & Styling by Elena Rostova',
      image: 'images/gallery-1.jpg',
      large: true
    },
    {
      id: 'gal-2',
      category: 'color',
      title: 'Sun-Kissed Dimensional Balayage',
      desc: 'Color Artistry by Marcus Vance',
      image: 'images/color-highlights.jpg',
      large: false
    },
    {
      id: 'gal-3',
      category: 'skin',
      title: 'Botanical Radiance Glow',
      desc: 'Skin Health & Revival by Chloe Chen',
      image: 'images/facial-skin-revival.jpg',
      large: false
    },
    {
      id: 'gal-4',
      category: 'skin',
      title: 'Minimalist Gel Manicure & Hand Spa',
      desc: 'Nail Artistry by Sophia Laurent',
      image: 'images/manicure-pedicure.jpg',
      large: false
    },
    {
      id: 'gal-5',
      category: 'color',
      title: 'Rich Mocha Hair Glaze & Bond Repair',
      desc: 'Color Care by Marcus Vance',
      image: 'images/gallery-2.jpg',
      large: false
    },
    {
      id: 'gal-6',
      category: 'hair',
      title: 'Couture Bridal Chignon & Soft Waves',
      desc: 'Bridal Artistry by Amara Diallo',
      image: 'images/bridal-styling.jpg',
      large: true
    },
    {
      id: 'gal-7',
      category: 'hair',
      title: 'Architectural Textured Bob',
      desc: 'Precision Cut by Elena Rostova',
      image: 'images/gallery-4.jpg',
      large: false
    },
    {
      id: 'gal-8',
      category: 'skin',
      title: 'Restorative Mineral Foot Spa & Pedicure',
      desc: 'Holistic Spa Care by Sophia Laurent',
      image: 'images/gallery-3.jpg',
      large: false
    }
  ],

  reviews: [
    {
      id: 'rev-1',
      author: 'Isabella Moreau',
      avatar: 'images/person1.jpg',
      rating: 5,
      service: 'Dimensional Balayage & Toning Gloss',
      date: 'August 14, 2026',
      text: 'Elena and Marcus transformed my dull hair into the most luminous, sun-kissed blonde I have ever had. The consultation was thorough, the space is peaceful, and the finish lasts weeks.'
    },
    {
      id: 'rev-2',
      author: 'Julian Thorne',
      avatar: 'images/person8.jpg',
      rating: 5,
      service: 'Precision Haircut & Signature Blowout',
      date: 'August 08, 2026',
      text: 'Impeccable attention to detail. David understood exactly how my thick hair behaves and shaped it with flawless symmetry. The scalp massage with botanical oils is worth it alone.'
    },
    {
      id: 'rev-3',
      author: 'Claire Sterling',
      avatar: 'images/person6.jpg',
      rating: 5,
      service: 'Luxe Botanical Radiance Facial',
      date: 'July 29, 2026',
      text: 'My skin was visibly glowing for days following Chloe’s radiance facial. The gentle ice globes and lymphatic drainage relieved so much facial tension. A truly five-star experience.'
    },
    {
      id: 'rev-4',
      author: 'Maya Lin',
      avatar: 'images/person7.jpg',
      rating: 5,
      service: 'Signature Gel Manicure',
      date: 'July 19, 2026',
      text: 'Sophia’s cuticle precision is second to none. Four weeks later and my gel polish is completely chip-free with zero damage to my natural nail bed. Clean, elegant, and serene environment.'
    }
  ],

  blog: [
    {
      id: 'blog-1',
      slug: 'art-of-post-summer-hair-revival',
      title: 'The Art of Post-Summer Hair Revival: Repairing Sun, Salt & Heat',
      excerpt: 'How targeted botanical masques, bond-rebuilding glazes, and micro-trims restore deep moisture and elasticity to sun-exposed hair.',
      content: `After months of UV exposure, pool chlorine, and outdoor warmth, hair fibers naturally lose moisture, lipid protection, and surface sheen. At Luxe Salon, our philosophy revolves around preventative restoration.

### 1. Rebuilding Moisture & Lipids
Direct sunlight oxidizes the natural melanin in your hair shafts while lifting the protective cuticle scale. We recommend replacing standard conditioners twice weekly with a cold-pressed lipid masque enriched with camellia and marula oils.

### 2. The Power of Acidic Color Glazes
A sheer demi-permanent gloss seals lifted cuticles, re-aligns light reflection, and neutralizes unwanted brassy undertones without lifting your natural base.

### 3. Scalp Reset & Micro-Exfoliation
Healthy strands begin with a balanced scalp biome. Bi-weekly gentle enzyme exfoliation removes mineral buildup from hard water and allows active botanical serums to penetrate deeply into follicles.`,
      category: 'Hair Care',
      author: 'Elena Rostova',
      readTime: '4 min read',
      date: 'Aug 10, 2026',
      image: 'images/color-highlights.jpg'
    },
    {
      id: 'blog-2',
      slug: 'morning-rituals-for-radiant-skin',
      title: 'Morning Rituals for Radiant Skin: Beyond the Surface Glow',
      excerpt: 'Clinical aesthetician Chloe Chen reveals the 4 essential steps for balancing your skin barrier and maintaining all-day luminosity.',
      content: `Radiant skin is not about layering ten different cosmetic products—it is the result of skin barrier integrity, vascular stimulation, and targeted hydration.

### Step 1: Gentle Non-Stripping Cleanse
Never start the day with harsh foaming surfactants. Lukewarm water combined with a milky botanical cleanser preserves your lipid mantle while removing overnight cellular turnover.

### Step 2: Hyaluronic Layering on Damp Skin
Always apply humectants while your skin is still misted with rose water or thermal essence. This allows high- and low-molecular weight hyaluronic acid to bind hydration deep within epidermis layers.

### Step 3: Lymphatic Ice Sculpting
Gently sweeping cooled cryo globes along jawline and under eyes moves stagnant fluid, depuffs contours, and immediately sharpens facial definition.

### Step 4: Broad Spectrum Mineral Protection
Even on overcast days, UVA wavelengths penetrate window glass. Finish with a non-comedogenic zinc oxide veil rich in antioxidants like Vitamin E and Green Tea extract.`,
      category: 'Skin Wellness',
      author: 'Chloe Chen',
      readTime: '5 min read',
      date: 'Aug 02, 2026',
      image: 'images/facial-skin-revival.jpg'
    },
    {
      id: 'blog-3',
      slug: '2026-bridal-beauty-timeline',
      title: 'The Modern Bride’s 6-Month Countdown to Effortless Elegance',
      excerpt: 'Your comprehensive scheduling blueprint for hair color sessions, skin treatments, and makeup trials leading to wedding day perfection.',
      content: `Flawless wedding day beauty requires thoughtful timing. Rushing treatments within weeks of the ceremony risks unpredictable reactions or color shifts.

### 6 Months Out: The Diagnostic Consultation
Meet with your stylist to establish hair health goals, assess texture, and outline desired tone dimension. Begin a monthly scalp treatment routine.

### 3 Months Out: Hair & Makeup Trial
Schedule your trial on the morning of an engagement shoot or celebratory dinner. This provides the ideal real-world test for wear longevity, lighting, and movement.

### 2 Weeks Out: Final Color Glaze & Micro-Trim
Perform your final balayage refinement or gloss. This allows the shade to settle into its softest, most natural dimension.

### 4 Days Out: Barrier Restoring Hydrafacial & Gel Spa
A non-invasive glow facial delivers dewy skin without redness, followed by detailed cuticle grooming and long-lasting gel application.`,
      category: 'Bridal Guide',
      author: 'Amara Diallo',
      readTime: '6 min read',
      date: 'Jul 22, 2026',
      image: 'images/bridal-styling.jpg'
    }
  ]
};

// --- GLOBAL APPLICATION STATE ---
const AppState = {
  theme: localStorage.getItem('luxe_theme') || 'light',
  currency: localStorage.getItem('luxe_currency') || 'USD',
  exchangeRates: {
    USD: 1,
    KES: 130,
    EUR: 0.92,
    GBP: 0.78
  },
  user: JSON.parse(localStorage.getItem('luxe_auth_user') || 'null'),
  bookings: JSON.parse(localStorage.getItem('luxe_saved_bookings') || '[]')
};

// Seed initial demo booking if empty
if (AppState.bookings.length === 0) {
  AppState.bookings = [
    {
      id: 'LX-78901',
      serviceId: 'srv-2',
      serviceName: 'Dimensional Balayage & Toning Gloss',
      specialistId: 'stf-2',
      specialistName: 'Marcus Vance',
      date: '2026-08-28',
      time: '11:00 AM',
      clientName: 'Isabella Moreau',
      clientEmail: 'isabella.moreau@example.com',
      clientPhone: '+1 (555) 234-5678',
      totalPriceUSD: 220,
      depositPaidUSD: 66,
      status: 'confirmed',
      paymentMethod: 'deposit_mpesa'
    }
  ];
  localStorage.setItem('luxe_saved_bookings', JSON.stringify(AppState.bookings));
}

// --- CURRENCY CONVERTER ---
function formatPrice(amountUSD) {
  const currency = AppState.currency;
  const rate = AppState.exchangeRates[currency] || 1;
  const converted = Math.round(amountUSD * rate);

  switch (currency) {
    case 'KES':
      return `KSh ${converted.toLocaleString()}`;
    case 'EUR':
      return `€${converted}`;
    case 'GBP':
      return `£${converted}`;
    default:
      return `$${converted}`;
  }
}

function updateAllPricesInDOM() {
  document.querySelectorAll('[data-price-usd]').forEach(el => {
    const usd = parseFloat(el.getAttribute('data-price-usd'));
    if (!isNaN(usd)) {
      el.textContent = formatPrice(usd);
    }
  });
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'error' : ''}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- NAVIGATION & THEME INIT ---
function initNavigationAndTheme() {
  // Apply saved theme
  document.documentElement.setAttribute('data-theme', AppState.theme);

  // Theme Toggle Button
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', AppState.theme);
      localStorage.setItem('luxe_theme', AppState.theme);
    });
  }

  // Currency Selectors
  const currencySelects = document.querySelectorAll('#currencySelect, #mobileCurrencySelect, #footerCurrencySelect');
  currencySelects.forEach(sel => {
    if (sel) {
      sel.value = AppState.currency;
      sel.addEventListener('change', (e) => {
        AppState.currency = e.target.value;
        localStorage.setItem('luxe_currency', AppState.currency);
        currencySelects.forEach(s => s.value = AppState.currency);
        updateAllPricesInDOM();
        // Trigger custom currency changed event for booking wizard
        document.dispatchEvent(new CustomEvent('currencyChanged'));
      });
    }
  });

  // Mobile & Tablet Menu Toggle & Dropdown Handling
  const menuToggle = document.getElementById('menuToggle');
  const mobilePanel = document.getElementById('mobilePanel');
  const topbar = document.getElementById('topbar');

  if (menuToggle && mobilePanel) {
    // Toggle on menu button click
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobilePanel.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on any internal link click
    mobilePanel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobilePanel.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside of header and panel
    document.addEventListener('click', (e) => {
      if (mobilePanel.classList.contains('is-open')) {
        if (!mobilePanel.contains(e.target) && !menuToggle.contains(e.target) && !topbar?.contains(e.target)) {
          mobilePanel.classList.remove('is-open');
          menuToggle.classList.remove('is-active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobilePanel.classList.contains('is-open')) {
        mobilePanel.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close when resizing window past 1080px
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1080 && mobilePanel.classList.contains('is-open')) {
        mobilePanel.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scroll Header Effect
  if (topbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        topbar.classList.add('scrolled');
      } else {
        topbar.classList.remove('scrolled');
      }
    });
  }

  // Update Auth Button in Navigation
  const navUserName = document.getElementById('navUserName');
  const userNavLink = document.getElementById('userNavLink');
  if (navUserName) {
    if (AppState.user) {
      const firstName = (AppState.user.firstName || AppState.user.name || 'Client').split(' ')[0];
      navUserName.textContent = firstName;
      if (userNavLink) {
        userNavLink.href = 'booking.html#lookup';
        userNavLink.title = `Signed in as ${AppState.user.name} — Click to view bookings`;
      }
    } else {
      navUserName.textContent = 'Sign In';
      if (userNavLink) {
        userNavLink.href = 'login.html';
        userNavLink.title = 'Sign In to Client Account';
      }
    }
  }
}

// --- RENDER SERVICES ---
function renderServices(gridElementId, filterCategory = 'all', limit = null) {
  const container = document.getElementById(gridElementId);
  if (!container) return;

  let services = LUXE_DATA.services;
  if (filterCategory !== 'all') {
    services = services.filter(s => s.category === filterCategory);
  }
  if (limit) {
    services = services.slice(0, limit);
  }

  container.innerHTML = services.map(svc => `
    <div class="service-card" id="${svc.id}">
      <div class="service-img-wrap">
        <img src="${svc.image}" alt="${svc.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='images/placeholder.svg';" />
        <span class="service-category-tag">${svc.categoryName}</span>
      </div>
      <div class="service-body">
        <div class="service-meta">
          <span class="service-duration">⏱ ${svc.duration} mins</span>
          <span class="service-price" data-price-usd="${svc.price}">${formatPrice(svc.price)}</span>
        </div>
        <h3 class="service-title">${svc.name}</h3>
        <p class="service-desc">${svc.description}</p>
        <div class="service-addons-summary">
          <strong>Includes:</strong> ${svc.addOns.map(a => a.name).join(' · ')}
        </div>
        <div class="service-footer">
          <a href="booking.html?service=${svc.id}" class="btn btn-primary w-full">Book Service</a>
        </div>
      </div>
    </div>
  `).join('');
}

// --- RENDER TEAM ---
function renderTeam(gridElementId, limit = null) {
  const container = document.getElementById(gridElementId);
  if (!container) return;

  let staff = LUXE_DATA.staff;
  if (limit) staff = staff.slice(0, limit);

  container.innerHTML = staff.map(stf => `
    <div class="team-card" id="${stf.id}">
      <div class="team-photo-wrap">
        <img src="${stf.image}" alt="${stf.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='images/placeholder.svg';" />
      </div>
      <div class="team-card-body">
        <h3>${stf.name}</h3>
        <p class="team-role">${stf.role}</p>
        <p class="team-bio">${stf.bio}</p>
        <div class="team-specialties">
          ${stf.specialties.map(s => `<span class="specialty-tag">${s}</span>`).join('')}
        </div>
        <a href="booking.html?specialist=${stf.id}" class="btn btn-secondary btn-sm w-full">Book With ${stf.name.split(' ')[0]}</a>
      </div>
    </div>
  `).join('');
}

// --- RENDER GALLERY & LIGHTBOX ---
function renderGallery(gridElementId, filter = 'all') {
  const container = document.getElementById(gridElementId);
  if (!container) return;

  let items = LUXE_DATA.gallery;
  if (filter !== 'all') {
    items = items.filter(g => g.category === filter);
  }

  container.innerHTML = items.map(item => `
    <div class="gallery-item ${item.large ? 'large' : ''}" data-category="${item.category}" data-img="${item.image}" data-title="${item.title}" data-desc="${item.desc}">
      <img src="${item.image}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='images/placeholder.svg';" />
      <div class="gallery-overlay">
        <h4>${item.title}</h4>
        <span>${item.desc}</span>
      </div>
    </div>
  `).join('');

  // Attach Lightbox click listeners
  container.querySelectorAll('.gallery-item').forEach(el => {
    el.addEventListener('click', () => {
      openLightbox(el.getAttribute('data-img'), el.getAttribute('data-title'), el.getAttribute('data-desc'));
    });
  });
}

function openLightbox(imgSrc, title, desc) {
  let lightbox = document.getElementById('lightboxModal');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightboxModal';
    lightbox.className = 'lightbox-modal';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" id="lightboxClose">&times;</button>
        <div class="lightbox-img-wrap">
          <img id="lightboxImg" src="" alt="" referrerpolicy="no-referrer" />
        </div>
        <div class="lightbox-caption">
          <h3 id="lightboxTitle"></h3>
          <p id="lightboxDesc" style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px;"></p>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);

    lightbox.querySelector('#lightboxClose').addEventListener('click', () => {
      lightbox.classList.remove('is-open');
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('is-open');
    });
  }

  document.getElementById('lightboxImg').src = imgSrc;
  document.getElementById('lightboxTitle').textContent = title;
  document.getElementById('lightboxDesc').textContent = desc;
  lightbox.classList.add('is-open');
}

// --- RENDER REVIEWS ---
function renderReviews(gridElementId) {
  const container = document.getElementById(gridElementId);
  if (!container) return;

  container.innerHTML = LUXE_DATA.reviews.map(rev => `
    <div class="review-card">
      <div class="review-header">
        <img src="${rev.avatar}" alt="${rev.author}" class="review-avatar" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='images/placeholder.svg';" />
        <div class="review-author">
          <h4>${rev.author}</h4>
          <span class="review-service-tag">${rev.service}</span>
        </div>
      </div>
      <div class="stars-row" style="margin-bottom: 8px;">★★★★★</div>
      <p class="review-text">"${rev.text}"</p>
      <span class="review-date">${rev.date}</span>
    </div>
  `).join('');
}

// --- RENDER BLOG ---
function renderBlog(gridElementId, limit = null) {
  const container = document.getElementById(gridElementId);
  if (!container) return;

  let posts = LUXE_DATA.blog;
  if (limit) posts = posts.slice(0, limit);

  container.innerHTML = posts.map(post => `
    <div class="blog-card" id="${post.id}">
      <div class="blog-img-wrap">
        <img src="${post.image}" alt="${post.title}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='images/placeholder.svg';" />
      </div>
      <div class="blog-card-body">
        <div class="blog-meta">
          <span class="blog-category">${post.category}</span>
          <span>${post.readTime}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <button class="btn btn-secondary btn-sm read-article-btn" data-blog-id="${post.id}">Read Full Article</button>
      </div>
    </div>
  `).join('');

  // Attach reader triggers
  container.querySelectorAll('.read-article-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const blogId = btn.getAttribute('data-blog-id');
      const post = LUXE_DATA.blog.find(b => b.id === blogId);
      if (post) openArticleModal(post);
    });
  });
}

function openArticleModal(post) {
  let modal = document.getElementById('articleModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'articleModal';
    modal.className = 'article-modal';
    modal.innerHTML = `
      <div class="article-modal-card">
        <button class="lightbox-close" id="articleModalClose" style="top: 18px; right: 18px;">&times;</button>
        <span class="eyebrow" id="articleCategory"></span>
        <h2 id="articleTitle" style="font-size: 2rem; margin-bottom: 12px;"></h2>
        <div style="display: flex; gap: 16px; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px; border-bottom: 1px solid var(--accent-border); padding-bottom: 12px;">
          <span id="articleAuthor"></span>
          <span id="articleDate"></span>
          <span id="articleReadTime"></span>
        </div>
        <div id="articleContent" style="color: var(--text-secondary); line-height: 1.8; font-size: 0.96rem; white-space: pre-line;"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('#articleModalClose').addEventListener('click', () => {
      modal.classList.remove('is-open');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('is-open');
    });
  }

  document.getElementById('articleCategory').textContent = post.category;
  document.getElementById('articleTitle').textContent = post.title;
  document.getElementById('articleAuthor').textContent = `By ${post.author}`;
  document.getElementById('articleDate').textContent = post.date;
  document.getElementById('articleReadTime').textContent = post.readTime;
  document.getElementById('articleContent').textContent = post.content;

  modal.classList.add('is-open');
}

// --- INTERACTIVE BOOKING WIZARD ---
const BookingWizard = {
  currentStep: 1,
  selectedService: null,
  selectedAddOns: [],
  selectedSpecialist: null,
  selectedDate: null,
  selectedTime: null,
  clientData: {},
  paymentOption: 'deposit_30',
  gateway: 'mpesa',

  init() {
    if (!document.getElementById('bookingWizard')) return;

    // Check URL Parameters for pre-selection
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    const specialistParam = urlParams.get('specialist');

    if (serviceParam) {
      this.selectedService = LUXE_DATA.services.find(s => s.id === serviceParam);
    } else {
      this.selectedService = LUXE_DATA.services[0];
    }

    if (specialistParam) {
      this.selectedSpecialist = LUXE_DATA.staff.find(s => s.id === specialistParam);
    }

    this.renderStep1Services();
    this.renderStep2Specialists();
    this.initCalendar();
    this.bindEvents();
    this.updateSummary();
    this.goToStep(1);

    // Auto-fill client if logged in
    if (AppState.user) {
      const nameParts = (AppState.user.name || '').split(' ');
      const fnameInput = document.getElementById('clientFirstName');
      const lnameInput = document.getElementById('clientLastName');
      const emailInput = document.getElementById('clientEmail');
      const phoneInput = document.getElementById('clientPhone');

      if (fnameInput) fnameInput.value = nameParts[0] || '';
      if (lnameInput) lnameInput.value = nameParts.slice(1).join(' ') || '';
      if (emailInput) emailInput.value = AppState.user.email || '';
      if (phoneInput) phoneInput.value = AppState.user.phone || '';
    }

    // Listen for currency updates
    document.addEventListener('currencyChanged', () => {
      this.updateSummary();
      this.renderStep1Services();
    });
  },

  renderStep1Services() {
    const container = document.getElementById('wizardServicesList');
    if (!container) return;

    container.innerHTML = LUXE_DATA.services.map(s => {
      const isSelected = this.selectedService && this.selectedService.id === s.id;
      return `
        <div class="service-choice-card ${isSelected ? 'selected' : ''}" data-service-id="${s.id}" style="border: 1.5px solid ${isSelected ? 'var(--accent-rose)' : 'var(--accent-border)'}; background: ${isSelected ? 'var(--accent-soft)' : 'var(--bg-card)'}; border-radius: var(--radius-sm); padding: 16px; margin-bottom: 12px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
          <div>
            <h4 style="font-size: 1.15rem; margin-bottom: 4px;">${s.name}</h4>
            <div style="font-size: 0.82rem; color: var(--text-muted);">⏱ ${s.duration} mins · ${s.categoryName}</div>
          </div>
          <div style="text-align: right;">
            <strong style="font-family: var(--font-serif); font-size: 1.3rem; color: var(--accent-rose);">${formatPrice(s.price)}</strong>
          </div>
        </div>
      `;
    }).join('');

    // Attach click handlers
    container.querySelectorAll('.service-choice-card').forEach(card => {
      card.addEventListener('click', () => {
        const sid = card.getAttribute('data-service-id');
        this.selectedService = LUXE_DATA.services.find(s => s.id === sid);
        this.selectedAddOns = [];
        this.renderStep1Services();
        this.renderStep1AddOns();
        this.updateSummary();
      });
    });

    this.renderStep1AddOns();
  },

  renderStep1AddOns() {
    const container = document.getElementById('wizardAddOnsList');
    if (!container || !this.selectedService) return;

    container.innerHTML = `
      <h4 style="font-size: 1rem; margin: 18px 0 10px;">Recommended Add-Ons for ${this.selectedService.name}:</h4>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${this.selectedService.addOns.map(add => {
          const isChecked = this.selectedAddOns.some(a => a.id === add.id);
          return `
            <label style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: var(--bg-card); border: 1px solid var(--accent-border); border-radius: var(--radius-sm); cursor: pointer;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <input type="checkbox" class="addon-checkbox" data-addon-id="${add.id}" ${isChecked ? 'checked' : ''} style="accent-color: var(--accent-rose);" />
                <span style="font-size: 0.88rem; font-weight: 500;">${add.name} (+${add.duration} mins)</span>
              </div>
              <strong style="font-size: 0.9rem; color: var(--accent-rose);">${formatPrice(add.price)}</strong>
            </label>
          `;
        }).join('')}
      </div>
    `;

    container.querySelectorAll('.addon-checkbox').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const addId = cb.getAttribute('data-addon-id');
        const addon = this.selectedService.addOns.find(a => a.id === addId);
        if (e.target.checked) {
          if (!this.selectedAddOns.some(a => a.id === addId)) this.selectedAddOns.push(addon);
        } else {
          this.selectedAddOns = this.selectedAddOns.filter(a => a.id !== addId);
        }
        this.updateSummary();
      });
    });
  },

  renderStep2Specialists() {
    const container = document.getElementById('wizardSpecialistsList');
    if (!container) return;

    const anySelected = !this.selectedSpecialist;

    container.innerHTML = `
      <div class="specialist-choice-card ${anySelected ? 'selected' : ''}" data-specialist-id="any">
        <div style="width: 70px; height: 70px; border-radius: 50%; background: var(--accent-soft); color: var(--accent-rose); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 10px; font-weight: 700;">★</div>
        <h4>Any Available Artist</h4>
        <p style="font-size: 0.78rem; color: var(--text-muted);">First available master specialist</p>
      </div>
      ${LUXE_DATA.staff.map(stf => {
        const isSel = this.selectedSpecialist && this.selectedSpecialist.id === stf.id;
        return `
          <div class="specialist-choice-card ${isSel ? 'selected' : ''}" data-specialist-id="${stf.id}">
            <img src="${stf.image}" alt="${stf.name}" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='images/placeholder.svg';" />
            <h4>${stf.name}</h4>
            <p style="font-size: 0.78rem; color: var(--accent-rose);">${stf.role.split('&')[0]}</p>
          </div>
        `;
      }).join('')}
    `;

    container.querySelectorAll('.specialist-choice-card').forEach(card => {
      card.addEventListener('click', () => {
        const stfId = card.getAttribute('data-specialist-id');
        if (stfId === 'any') {
          this.selectedSpecialist = null;
        } else {
          this.selectedSpecialist = LUXE_DATA.staff.find(s => s.id === stfId);
        }
        this.renderStep2Specialists();
        this.updateSummary();
      });
    });
  },

  initCalendar() {
    const calGrid = document.getElementById('calendarDaysGrid');
    const calMonthLabel = document.getElementById('calMonthLabel');
    if (!calGrid || !calMonthLabel) return;

    const today = new Date();
    calMonthLabel.textContent = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    // Generate upcoming 14 days
    let daysHtml = `
      <div class="cal-day-header">Su</div>
      <div class="cal-day-header">Mo</div>
      <div class="cal-day-header">Tu</div>
      <div class="cal-day-header">We</div>
      <div class="cal-day-header">Th</div>
      <div class="cal-day-header">Fr</div>
      <div class="cal-day-header">Sa</div>
    `;

    const startDay = today.getDay();
    for (let i = 0; i < startDay; i++) {
      daysHtml += `<div class="cal-day-btn disabled"></div>`;
    }

    for (let d = 0; d < 14; d++) {
      const dateObj = new Date(today);
      dateObj.setDate(today.getDate() + d);
      const dayNum = dateObj.getDate();
      const dateStr = dateObj.toISOString().split('T')[0];
      const isSelected = this.selectedDate === dateStr || (d === 0 && !this.selectedDate);

      if (d === 0 && !this.selectedDate) {
        this.selectedDate = dateStr;
      }

      daysHtml += `
        <button type="button" class="cal-day-btn ${isSelected ? 'selected' : ''}" data-date="${dateStr}">
          ${dayNum}
        </button>
      `;
    }

    calGrid.innerHTML = daysHtml;

    calGrid.querySelectorAll('.cal-day-btn:not(.disabled)').forEach(btn => {
      btn.addEventListener('click', () => {
        calGrid.querySelectorAll('.cal-day-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedDate = btn.getAttribute('data-date');
        this.updateSummary();
      });
    });

    // Time Slots
    const timeSlots = ['9:00 AM', '10:15 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:15 PM', '6:30 PM'];
    const timeGrid = document.getElementById('timeSlotsGrid');
    if (timeGrid) {
      if (!this.selectedTime) this.selectedTime = timeSlots[1];

      timeGrid.innerHTML = timeSlots.map(time => `
        <button type="button" class="time-slot-btn ${this.selectedTime === time ? 'selected' : ''}" data-time="${time}">
          ${time}
        </button>
      `).join('');

      timeGrid.querySelectorAll('.time-slot-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          timeGrid.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          this.selectedTime = btn.getAttribute('data-time');
          this.updateSummary();
        });
      });
    }
  },

  calculateTotalUSD() {
    let total = this.selectedService ? this.selectedService.price : 0;
    this.selectedAddOns.forEach(a => total += a.price);
    return total;
  },

  calculateDepositUSD() {
    const total = this.calculateTotalUSD();
    if (this.paymentOption === 'deposit_30') return Math.round(total * 0.3);
    if (this.paymentOption === 'full_100') return total;
    return 0; // pay_at_salon
  },

  updateSummary() {
    const totalUSD = this.calculateTotalUSD();
    const depositUSD = this.calculateDepositUSD();

    const summaryService = document.getElementById('summaryServiceName');
    const summarySpecialist = document.getElementById('summarySpecialistName');
    const summaryDateTime = document.getElementById('summaryDateTime');
    const summaryTotal = document.getElementById('summaryTotalPrice');
    const summaryDeposit = document.getElementById('summaryDepositDue');

    if (summaryService && this.selectedService) {
      summaryService.textContent = this.selectedService.name;
    }
    if (summarySpecialist) {
      summarySpecialist.textContent = this.selectedSpecialist ? this.selectedSpecialist.name : 'Any Available Specialist';
    }
    if (summaryDateTime) {
      summaryDateTime.textContent = `${this.selectedDate || 'Select Date'} at ${this.selectedTime || 'Select Time'}`;
    }
    if (summaryTotal) {
      summaryTotal.textContent = formatPrice(totalUSD);
    }
    if (summaryDeposit) {
      summaryDeposit.textContent = formatPrice(depositUSD);
    }
  },

  bindEvents() {
    // Next / Prev Buttons
    document.querySelectorAll('.wizard-next-btn').forEach(btn => {
      btn.addEventListener('click', () => this.goToStep(this.currentStep + 1));
    });

    document.querySelectorAll('.wizard-prev-btn').forEach(btn => {
      btn.addEventListener('click', () => this.goToStep(this.currentStep - 1));
    });

    // Step Header clicks
    document.querySelectorAll('.step-indicator').forEach(ind => {
      ind.addEventListener('click', () => {
        const step = parseInt(ind.getAttribute('data-step'));
        if (step < this.currentStep) this.goToStep(step);
      });
    });

    // Payment Option Radios
    document.querySelectorAll('input[name="paymentOption"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.paymentOption = e.target.value;
        document.querySelectorAll('.pay-option-card').forEach(c => c.classList.remove('active'));
        e.target.closest('.pay-option-card').classList.add('active');
        this.updateSummary();
      });
    });

    // Payment Gateway Tabs
    document.querySelectorAll('.gateway-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.gateway-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.gateway = tab.getAttribute('data-gateway');

        const mpesaBox = document.getElementById('mpesaGatewayBox');
        const cardBox = document.getElementById('cardGatewayBox');
        if (this.gateway === 'mpesa') {
          if (mpesaBox) mpesaBox.style.display = 'block';
          if (cardBox) cardBox.style.display = 'none';
        } else {
          if (mpesaBox) mpesaBox.style.display = 'none';
          if (cardBox) cardBox.style.display = 'block';
        }
      });
    });

    // Complete Booking Form Submit
    const confirmBtn = document.getElementById('completeBookingBtn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => this.processBooking());
    }
  },

  goToStep(step) {
    if (step < 1 || step > 6) return;
    this.currentStep = step;

    // Update Header Indicators
    document.querySelectorAll('.step-indicator').forEach(ind => {
      const s = parseInt(ind.getAttribute('data-step'));
      ind.classList.remove('active', 'completed');
      if (s === step) ind.classList.add('active');
      if (s < step) ind.classList.add('completed');
    });

    // Update Step Contents
    document.querySelectorAll('.wizard-step-content').forEach(content => {
      content.classList.remove('active');
    });
    const activeContent = document.getElementById(`wizardStep${step}`);
    if (activeContent) activeContent.classList.add('active');

    this.updateSummary();
    window.scrollTo({ top: document.getElementById('bookingWizard').offsetTop - 100, behavior: 'smooth' });
  },

  processBooking() {
    // Validate Client Details
    const fname = (document.getElementById('clientFirstName') || {}).value || '';
    const lname = (document.getElementById('clientLastName') || {}).value || '';
    const email = (document.getElementById('clientEmail') || {}).value || '';
    const phone = (document.getElementById('clientPhone') || {}).value || '';

    if (!fname || !email || !phone) {
      showToast('Please fill in your name, email, and phone number in Step 4.', 'error');
      this.goToStep(4);
      return;
    }

    const totalUSD = this.calculateTotalUSD();
    const depositUSD = this.calculateDepositUSD();
    const bookingId = 'LX-' + Math.floor(10000 + Math.random() * 90000);

    const newBooking = {
      id: bookingId,
      serviceId: this.selectedService.id,
      serviceName: this.selectedService.name,
      specialistId: this.selectedSpecialist ? this.selectedSpecialist.id : 'any',
      specialistName: this.selectedSpecialist ? this.selectedSpecialist.name : 'Any Master Specialist',
      date: this.selectedDate,
      time: this.selectedTime,
      clientName: `${fname} ${lname}`.trim(),
      clientEmail: email,
      clientPhone: phone,
      totalPriceUSD: totalUSD,
      depositPaidUSD: depositUSD,
      status: 'confirmed',
      paymentMethod: this.paymentOption + '_' + this.gateway,
      createdAt: new Date().toISOString()
    };

    // If M-Pesa is chosen and deposit > 0, trigger interactive simulation
    if (this.gateway === 'mpesa' && depositUSD > 0) {
      this.showMpesaSimulation(newBooking);
    } else {
      this.finalizeBooking(newBooking);
    }
  },

  showMpesaSimulation(booking) {
    const kesAmount = Math.round(booking.depositPaidUSD * AppState.exchangeRates.KES);
    let modal = document.getElementById('mpesaModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'mpesaModal';
      modal.className = 'mpesa-modal';
      modal.innerHTML = `
        <div class="mpesa-phone-frame">
          <div class="mpesa-screen">
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #666; font-weight: 700; margin-bottom: 12px;">
              <span>SAFARICOM</span>
              <span>●●● LTE</span>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
              <span style="font-size: 0.75rem; background: #008751; color: #fff; padding: 2px 8px; border-radius: 4px; font-weight: 800;">M-PESA STK PUSH</span>
              <div style="font-size: 1.4rem; font-weight: 800; color: #008751; margin: 8px 0 4px;" id="mpesaSimAmount"></div>
              <div style="font-size: 0.85rem; color: #334155;">Pay to: <strong>Luxe Salon (Paybill 174379)</strong></div>
              <div style="font-size: 0.82rem; color: #64748b;">Account: <strong id="mpesaSimRef"></strong></div>
            </div>
            <div style="margin-bottom: 16px;">
              <label style="font-size: 0.82rem; font-weight: 600; color: #333; display: block; margin-bottom: 4px;">Enter M-Pesa PIN to Authorize:</label>
              <input type="password" id="mpesaPinInput" maxlength="4" placeholder="••••" style="width: 100%; padding: 10px; font-size: 1.2rem; text-align: center; letter-spacing: 6px; border: 1.5px solid #008751; border-radius: 8px; outline: none;" value="1234" />
            </div>
            <button id="mpesaSimConfirmBtn" class="btn w-full" style="background: #008751; color: #ffffff; font-weight: 700; padding: 12px;">Authorize KES Payment</button>
            <button id="mpesaSimCancelBtn" style="width: 100%; margin-top: 8px; font-size: 0.82rem; color: #64748b; padding: 6px;">Cancel</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    document.getElementById('mpesaSimAmount').textContent = `KSh ${kesAmount.toLocaleString()}`;
    document.getElementById('mpesaSimRef').textContent = booking.id;
    modal.classList.add('is-open');

    const confirmBtn = document.getElementById('mpesaSimConfirmBtn');
    const cancelBtn = document.getElementById('mpesaSimCancelBtn');

    confirmBtn.onclick = () => {
      confirmBtn.textContent = 'Verifying Transaction...';
      setTimeout(() => {
        modal.classList.remove('is-open');
        confirmBtn.textContent = 'Authorize KES Payment';
        this.finalizeBooking(booking);
      }, 1200);
    };

    cancelBtn.onclick = () => {
      modal.classList.remove('is-open');
      showToast('M-Pesa authorization was cancelled.', 'error');
    };
  },

  finalizeBooking(booking) {
    // Save to AppState and LocalStorage
    AppState.bookings.unshift(booking);
    localStorage.setItem('luxe_saved_bookings', JSON.stringify(AppState.bookings));

    // Populate Confirmation Screen
    const refEl = document.getElementById('confirmedBookingRef');
    const detailsEl = document.getElementById('confirmedBookingDetails');

    if (refEl) refEl.textContent = booking.id;
    if (detailsEl) {
      detailsEl.innerHTML = `
        <div style="background: var(--bg-card); border: 1px solid var(--accent-border); border-radius: var(--radius-sm); padding: 20px; text-align: left; max-width: 500px; margin: 0 auto 20px;">
          <div style="margin-bottom: 8px;"><strong>Treatment:</strong> ${booking.serviceName}</div>
          <div style="margin-bottom: 8px;"><strong>Specialist:</strong> ${booking.specialistName}</div>
          <div style="margin-bottom: 8px;"><strong>Date & Time:</strong> ${booking.date} at ${booking.time}</div>
          <div style="margin-bottom: 8px;"><strong>Client:</strong> ${booking.clientName} (${booking.clientEmail})</div>
          <div style="margin-bottom: 8px;"><strong>Total Price:</strong> ${formatPrice(booking.totalPriceUSD)}</div>
          <div><strong>Deposit Paid:</strong> ${formatPrice(booking.depositPaidUSD)}</div>
        </div>
      `;
    }

    // Bind Calendar ICS Export
    const icsBtn = document.getElementById('downloadCalendarBtn');
    if (icsBtn) {
      icsBtn.onclick = () => this.downloadIcsFile(booking);
    }

    showToast(`Appointment ${booking.id} reserved successfully!`);
    this.goToStep(6);
  },

  downloadIcsFile(booking) {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Luxe Salon//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Luxe Salon: ${booking.serviceName}`,
      `DESCRIPTION:Appointment with ${booking.specialistName}. Booking Reference: ${booking.id}`,
      'LOCATION:Luxe Salon Sanctuary, 24 Beauty Avenue, Central City',
      `DTSTART:${booking.date.replace(/-/g, '')}T090000Z`,
      `DTEND:${booking.date.replace(/-/g, '')}T110000Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${booking.id}-appointment.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

// --- APPOINTMENT LOOKUP & MANAGEMENT ---
function initAppointmentLookup() {
  const searchBtn = document.getElementById('searchBookingBtn');
  const queryInput = document.getElementById('bookingLookupInput');
  const resultsContainer = document.getElementById('bookingLookupResults');

  if (!searchBtn || !queryInput || !resultsContainer) return;

  searchBtn.addEventListener('click', () => {
    const query = queryInput.value.trim().toLowerCase();
    if (!query) {
      showToast('Please enter your Reference ID (e.g. LX-78901) or Email.', 'error');
      return;
    }

    const matches = AppState.bookings.filter(b => 
      b.id.toLowerCase() === query || 
      b.clientEmail.toLowerCase() === query ||
      b.clientPhone.replace(/\D/g, '').includes(query.replace(/\D/g, ''))
    );

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 30px; background: var(--bg-card); border-radius: var(--radius-sm); border: 1px solid var(--accent-border);">
          <p style="color: var(--text-muted); margin-bottom: 12px;">No reservations found matching "<strong>${query}</strong>".</p>
          <a href="booking.html" class="btn btn-primary btn-sm">Book New Appointment</a>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map(b => `
      <div style="background: var(--bg-card); border: 1px solid var(--accent-border); border-radius: var(--radius-sm); padding: 22px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <strong style="font-size: 1.15rem; color: var(--accent-rose);">${b.id}</strong>
            <span style="font-size: 0.75rem; background: ${b.status === 'confirmed' ? 'var(--status-confirmed-bg)' : 'var(--status-cancelled-bg)'}; color: ${b.status === 'confirmed' ? 'var(--status-confirmed)' : 'var(--status-cancelled)'}; padding: 2px 8px; border-radius: 4px; font-weight: 700; text-transform: uppercase;">${b.status}</span>
          </div>
          <h4 style="font-size: 1.1rem; margin-bottom: 4px;">${b.serviceName}</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted);">With ${b.specialistName} · ${b.date} at ${b.time}</p>
        </div>
        <div style="display: flex; gap: 10px;">
          ${b.status === 'confirmed' ? `
            <button class="btn btn-secondary btn-sm cancel-booking-btn" data-id="${b.id}">Cancel</button>
          ` : ''}
        </div>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.cancel-booking-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const booking = AppState.bookings.find(x => x.id === id);
        if (booking) {
          booking.status = 'cancelled';
          localStorage.setItem('luxe_saved_bookings', JSON.stringify(AppState.bookings));
          showToast(`Appointment ${id} has been cancelled.`);
          searchBtn.click();
        }
      });
    });
  });

  // If URL has #lookup, activate tab automatically
  if (window.location.hash === '#lookup') {
    const lookupTabBtn = document.getElementById('lookupTabBtn');
    if (lookupTabBtn) lookupTabBtn.click();
  }
}

// --- AUTH LOGIC (LOGIN & REGISTER) ---
function initAuthScreens() {
  // Retrieve registered users store
  let registeredUsers = JSON.parse(localStorage.getItem('luxe_registered_users') || '[]');

  // Seed demo client if empty
  if (registeredUsers.length === 0) {
    registeredUsers = [
      {
        id: 'usr-demo-1',
        name: 'Isabella Moreau',
        firstName: 'Isabella',
        lastName: 'Moreau',
        email: 'isabella.moreau@example.com',
        phone: '+1 (555) 234-5678',
        password: 'password123'
      },
      {
        id: 'usr-demo-2',
        name: 'Elena Rostova',
        firstName: 'Elena',
        lastName: 'Rostova',
        email: 'elena.rostova@example.com',
        phone: '+1 (555) 345-6789',
        password: 'password123'
      }
    ];
    localStorage.setItem('luxe_registered_users', JSON.stringify(registeredUsers));
  }

  // Get redirect target from query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const redirectTarget = urlParams.get('redirect') || 'index.html';

  // --- PASSWORD VISIBILITY TOGGLE BUTTONS ---
  const toggleButtons = document.querySelectorAll('.password-toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      const input = targetId ? document.getElementById(targetId) : btn.closest('.password-field-wrap')?.querySelector('input');
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';

      const openEye = btn.querySelector('.eye-open');
      const closedEye = btn.querySelector('.eye-closed');

      if (openEye && closedEye) {
        openEye.style.display = isPassword ? 'none' : 'block';
        closedEye.style.display = isPassword ? 'block' : 'none';
      }

      btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
      btn.setAttribute('title', isPassword ? 'Hide password' : 'Show password');
    });
  });

  // --- VALIDATION HELPERS ---
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;

  function setFieldError(inputEl, errorEl, message) {
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.opacity = '1';
    }
    if (inputEl) {
      inputEl.classList.add('is-invalid');
      inputEl.classList.remove('is-valid');
    }
  }

  function clearFieldError(inputEl, errorEl) {
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.style.opacity = '0';
    }
    if (inputEl) {
      inputEl.classList.remove('is-invalid');
      if (inputEl.value && inputEl.value.trim().length > 0) {
        inputEl.classList.add('is-valid');
      } else {
        inputEl.classList.remove('is-valid');
      }
    }
  }

  // --- PASSWORD STRENGTH CALCULATOR ---
  function computePasswordStrength(pass) {
    if (!pass) return { score: 0, label: 'Enter at least 8 characters' };
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) score += 1;
    if (/\d/.test(pass)) score += 1;
    if (/[^a-zA-Z0-9]/.test(pass)) score += 1;

    let label = 'Weak';
    if (score === 1) label = 'Weak (add numbers & mixed case)';
    else if (score === 2) label = 'Fair (add capital letters & symbols)';
    else if (score === 3) label = 'Good (strong security combination)';
    else if (score === 4) label = 'Sanctuary Grade (Excellent strength)';

    return { score, label };
  }

  function updateStrengthMeter(password) {
    const segments = [
      document.getElementById('strengthSeg1'),
      document.getElementById('strengthSeg2'),
      document.getElementById('strengthSeg3'),
      document.getElementById('strengthSeg4')
    ];
    const textEl = document.getElementById('strengthText');
    if (!textEl || !segments[0]) return;

    const { score, label } = computePasswordStrength(password);
    const colors = ['#dc2626', '#ea580c', '#ca8a04', '#16a34a'];

    segments.forEach((seg, index) => {
      if (seg) {
        if (index < score) {
          seg.style.backgroundColor = colors[score - 1];
        } else {
          seg.style.backgroundColor = 'var(--accent-border)';
        }
      }
    });

    textEl.innerHTML = `Password Strength: <span style="color:${score > 0 ? colors[score - 1] : 'var(--text-secondary)'}">${label}</span>`;
  }

  // --- SOCIAL AUTH BUTTONS HANDLER ---
  const googleAuthBtns = document.querySelectorAll('#googleAuthBtn');
  const appleAuthBtns = document.querySelectorAll('#appleAuthBtn');

  function handleSocialAuth(providerName) {
    showToast(`Connecting securely to ${providerName}...`);
    setTimeout(() => {
      const socialUser = {
        id: 'usr-social-' + Date.now(),
        name: providerName === 'Google' ? 'Elena Rostova' : 'Isabella Moreau',
        firstName: providerName === 'Google' ? 'Elena' : 'Isabella',
        lastName: providerName === 'Google' ? 'Rostova' : 'Moreau',
        email: providerName === 'Google' ? 'elena.rostova@gmail.com' : 'isabella.moreau@icloud.com',
        phone: '+1 (555) 234-5678',
        provider: providerName.toLowerCase()
      };

      // Save to registered list
      registeredUsers = registeredUsers.filter(u => u.email.toLowerCase() !== socialUser.email.toLowerCase());
      registeredUsers.push(socialUser);
      localStorage.setItem('luxe_registered_users', JSON.stringify(registeredUsers));

      // Set active session
      AppState.user = socialUser;
      localStorage.setItem('luxe_auth_user', JSON.stringify(socialUser));

      showToast(`Authenticated via ${providerName}! Welcome back, ${socialUser.firstName}.`);
      setTimeout(() => {
        window.location.href = redirectTarget;
      }, 800);
    }, 600);
  }

  googleAuthBtns.forEach(btn => {
    btn.addEventListener('click', () => handleSocialAuth('Google'));
  });

  appleAuthBtns.forEach(btn => {
    btn.addEventListener('click', () => handleSocialAuth('Apple'));
  });

  // --- LOGIN FORM VALIDATION & SUBMIT ---
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    const emailError = document.getElementById('loginEmailError');
    const passwordError = document.getElementById('loginPasswordError');
    const rememberMe = document.getElementById('rememberMe');

    // Live validation on inputs
    if (emailInput) {
      emailInput.addEventListener('input', () => {
        const val = emailInput.value.trim();
        if (!val) {
          setFieldError(emailInput, emailError, 'Email address is required.');
        } else if (!emailRegex.test(val)) {
          setFieldError(emailInput, emailError, 'Please enter a valid email format (e.g. name@domain.com).');
        } else {
          clearFieldError(emailInput, emailError);
        }
      });
    }

    if (passwordInput) {
      passwordInput.addEventListener('input', () => {
        const val = passwordInput.value;
        if (!val) {
          setFieldError(passwordInput, passwordError, 'Password is required.');
        } else if (val.length < 6) {
          setFieldError(passwordInput, passwordError, 'Password must be at least 6 characters.');
        } else {
          clearFieldError(passwordInput, passwordError);
        }
      });
    }

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = emailInput ? emailInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value : '';
      let hasError = false;

      // Validate Email
      if (!email) {
        setFieldError(emailInput, emailError, 'Email address is required.');
        hasError = true;
      } else if (!emailRegex.test(email)) {
        setFieldError(emailInput, emailError, 'Please enter a valid email address.');
        hasError = true;
      } else {
        clearFieldError(emailInput, emailError);
      }

      // Validate Password
      if (!password) {
        setFieldError(passwordInput, passwordError, 'Password is required.');
        hasError = true;
      } else if (password.length < 6) {
        setFieldError(passwordInput, passwordError, 'Password must be at least 6 characters.');
        hasError = true;
      } else {
        clearFieldError(passwordInput, passwordError);
      }

      if (hasError) {
        showToast('Please correct the highlighted form errors before continuing.', 'error');
        return;
      }

      // Check registered users or authenticate
      const existingUser = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      let user;

      if (existingUser) {
        user = existingUser;
      } else {
        // Create client account from email
        const namePart = email.split('@')[0].replace(/[._-]/g, ' ');
        const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        user = {
          id: 'usr-' + Date.now(),
          name: formattedName || 'Valued Client',
          firstName: formattedName || 'Valued',
          lastName: 'Client',
          email: email,
          phone: '+1 (555) 000-0000',
          password: password
        };
        registeredUsers.push(user);
        localStorage.setItem('luxe_registered_users', JSON.stringify(registeredUsers));
      }

      AppState.user = user;
      localStorage.setItem('luxe_auth_user', JSON.stringify(user));
      if (rememberMe && rememberMe.checked) {
        localStorage.setItem('luxe_remember_email', email);
      } else {
        localStorage.removeItem('luxe_remember_email');
      }

      showToast(`Welcome back, ${user.firstName || user.name}! Redirecting...`);
      setTimeout(() => {
        window.location.href = redirectTarget;
      }, 900);
    });

    // Auto-fill remembered email if available
    const savedEmail = localStorage.getItem('luxe_remember_email');
    if (savedEmail && emailInput && !emailInput.value) {
      emailInput.value = savedEmail;
      if (rememberMe) rememberMe.checked = true;
    }

    // Demo Login Button
    const demoLoginBtn = document.getElementById('demoLoginBtn');
    if (demoLoginBtn) {
      demoLoginBtn.addEventListener('click', () => {
        if (emailInput) {
          emailInput.value = 'isabella.moreau@example.com';
          clearFieldError(emailInput, emailError);
        }
        if (passwordInput) {
          passwordInput.value = 'password123';
          clearFieldError(passwordInput, passwordError);
        }
        loginForm.dispatchEvent(new Event('submit'));
      });
    }

    // Forgot Password Link
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    if (forgotPasswordLink) {
      forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        const currentEmail = emailInput?.value.trim() || 'your email';
        showToast(`A secure password reset link has been dispatched to ${currentEmail}.`);
      });
    }
  }

  // --- REGISTER FORM VALIDATION & SUBMIT ---
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    const fnameInput = document.getElementById('firstName');
    const lnameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('registerEmail');
    const phoneInput = document.getElementById('registerPhone');
    const passInput = document.getElementById('registerPassword');
    const confirmPassInput = document.getElementById('confirmPassword');
    const termsCheck = document.getElementById('termsCheck');

    const fnameError = document.getElementById('firstNameError');
    const lnameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('registerEmailError');
    const phoneError = document.getElementById('registerPhoneError');
    const passError = document.getElementById('registerPasswordError');
    const confirmPassError = document.getElementById('confirmPasswordError');
    const termsError = document.getElementById('termsCheckError');

    // Real-time password strength meter listener
    if (passInput) {
      passInput.addEventListener('input', () => {
        const val = passInput.value;
        updateStrengthMeter(val);
        if (!val) {
          setFieldError(passInput, passError, 'Password is required.');
        } else if (val.length < 8) {
          setFieldError(passInput, passError, 'Password must be at least 8 characters.');
        } else {
          clearFieldError(passInput, passError);
        }

        // Also re-check confirm password if already typed
        if (confirmPassInput && confirmPassInput.value) {
          if (confirmPassInput.value !== val) {
            setFieldError(confirmPassInput, confirmPassError, 'Passwords do not match.');
          } else {
            clearFieldError(confirmPassInput, confirmPassError);
          }
        }
      });
    }

    // Live validation for other register inputs
    if (fnameInput) {
      fnameInput.addEventListener('input', () => {
        const val = fnameInput.value.trim();
        if (!val) {
          setFieldError(fnameInput, fnameError, 'First name is required.');
        } else if (val.length < 2) {
          setFieldError(fnameInput, fnameError, 'First name must be at least 2 characters.');
        } else {
          clearFieldError(fnameInput, fnameError);
        }
      });
    }

    if (lnameInput) {
      lnameInput.addEventListener('input', () => {
        const val = lnameInput.value.trim();
        if (!val) {
          setFieldError(lnameInput, lnameError, 'Last name is required.');
        } else if (val.length < 2) {
          setFieldError(lnameInput, lnameError, 'Last name must be at least 2 characters.');
        } else {
          clearFieldError(lnameInput, lnameError);
        }
      });
    }

    if (emailInput) {
      emailInput.addEventListener('input', () => {
        const val = emailInput.value.trim();
        if (!val) {
          setFieldError(emailInput, emailError, 'Email address is required.');
        } else if (!emailRegex.test(val)) {
          setFieldError(emailInput, emailError, 'Please enter a valid email format.');
        } else {
          clearFieldError(emailInput, emailError);
        }
      });
    }

    if (phoneInput) {
      phoneInput.addEventListener('input', () => {
        const val = phoneInput.value.trim();
        if (!val) {
          setFieldError(phoneInput, phoneError, 'Phone number is required for SMS booking alerts.');
        } else if (!phoneRegex.test(val)) {
          setFieldError(phoneInput, phoneError, 'Please enter a valid phone number (e.g. +1 555-234-5678).');
        } else {
          clearFieldError(phoneInput, phoneError);
        }
      });
    }

    if (confirmPassInput) {
      confirmPassInput.addEventListener('input', () => {
        const val = confirmPassInput.value;
        const mainVal = passInput ? passInput.value : '';
        if (!val) {
          setFieldError(confirmPassInput, confirmPassError, 'Please confirm your password.');
        } else if (val !== mainVal) {
          setFieldError(confirmPassInput, confirmPassError, 'Passwords do not match.');
        } else {
          clearFieldError(confirmPassInput, confirmPassError);
        }
      });
    }

    if (termsCheck) {
      termsCheck.addEventListener('change', () => {
        if (!termsCheck.checked) {
          if (termsError) termsError.textContent = 'You must accept the sanctuary terms & policies to proceed.';
        } else {
          if (termsError) termsError.textContent = '';
        }
      });
    }

    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fname = fnameInput ? fnameInput.value.trim() : '';
      const lname = lnameInput ? lnameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const password = passInput ? passInput.value : '';
      const confirmPassword = confirmPassInput ? confirmPassInput.value : '';
      const termsAccepted = termsCheck ? termsCheck.checked : true;

      let hasError = false;

      // Validate First Name
      if (!fname || fname.length < 2) {
        setFieldError(fnameInput, fnameError, 'First name must be at least 2 characters.');
        hasError = true;
      } else {
        clearFieldError(fnameInput, fnameError);
      }

      // Validate Last Name
      if (!lname || lname.length < 2) {
        setFieldError(lnameInput, lnameError, 'Last name must be at least 2 characters.');
        hasError = true;
      } else {
        clearFieldError(lnameInput, lnameError);
      }

      // Validate Email
      if (!email || !emailRegex.test(email)) {
        setFieldError(emailInput, emailError, 'A valid email address is required.');
        hasError = true;
      } else {
        clearFieldError(emailInput, emailError);
      }

      // Validate Phone
      if (!phone || !phoneRegex.test(phone)) {
        setFieldError(phoneInput, phoneError, 'A valid phone number is required.');
        hasError = true;
      } else {
        clearFieldError(phoneInput, phoneError);
      }

      // Validate Password
      if (!password || password.length < 8) {
        setFieldError(passInput, passError, 'Password must be at least 8 characters long.');
        hasError = true;
      } else {
        clearFieldError(passInput, passError);
      }

      // Validate Confirm Password
      if (!confirmPassword || confirmPassword !== password) {
        setFieldError(confirmPassInput, confirmPassError, 'Passwords do not match.');
        hasError = true;
      } else {
        clearFieldError(confirmPassInput, confirmPassError);
      }

      // Validate Terms Checkbox
      if (!termsAccepted) {
        if (termsError) termsError.textContent = 'You must accept the sanctuary terms & policies to proceed.';
        hasError = true;
      } else {
        if (termsError) termsError.textContent = '';
      }

      if (hasError) {
        showToast('Please resolve the highlighted validation errors.', 'error');
        return;
      }

      const fullName = `${fname} ${lname}`.trim();
      const newUser = {
        id: 'usr-' + Date.now(),
        name: fullName,
        firstName: fname,
        lastName: lname,
        email: email,
        phone: phone,
        password: password
      };

      // Add to registered users list
      registeredUsers = registeredUsers.filter(u => u.email.toLowerCase() !== email.toLowerCase());
      registeredUsers.push(newUser);
      localStorage.setItem('luxe_registered_users', JSON.stringify(registeredUsers));

      // Activate session
      AppState.user = newUser;
      localStorage.setItem('luxe_auth_user', JSON.stringify(newUser));

      showToast(`Account successfully created! Welcome to Luxe Salon, ${fname}.`);
      setTimeout(() => {
        window.location.href = redirectTarget;
      }, 1000);
    });
  }
}

// --- CONTACT & NEWSLETTER HANDLERS ---
function initContactAndNewsletter() {
  const contactForm = document.getElementById('contactInquiryForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your concierge inquiry has been received. We will respond within 2 hours.');
      contactForm.reset();
    });
  }

  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you for subscribing to Luxe Salon Beauty Editorial.');
      form.reset();
    });
  });
}

// --- GLOBAL DOCUMENT READY ---
document.addEventListener('DOMContentLoaded', () => {
  initNavigationAndTheme();
  initContactAndNewsletter();
  initAuthScreens();
  updateAllPricesInDOM();

  // Booking Wizard
  BookingWizard.init();
  initAppointmentLookup();
});
