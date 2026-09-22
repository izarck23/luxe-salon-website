import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '..', 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Password hashing utility
export function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return { hash, salt };
}

export function verifyPassword(password, hash, salt) {
  const checkHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash === checkHash;
}

// Default Seed Data
const DEFAULT_SERVICES = [
  {
    id: 'srv-1',
    category: 'haircuts',
    categoryName: 'Haircuts & Styling',
    name: 'Precision Haircut & Signature Blowout',
    tagline: 'Custom shaping, botanical cleanse, scalp massage & glossy finish',
    duration: 60,
    price: 85,
    image: '/images/haircut-blowout.jpg',
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
    image: '/images/color-highlights.jpg',
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
    image: '/images/gallery-2.jpg',
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
    image: '/images/facial-skin-revival.jpg',
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
    image: '/images/manicure-pedicure.jpg',
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
    image: '/images/gallery-3.jpg',
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
    image: '/images/bridal-styling.jpg',
    description: 'Detailed pre-wedding consultation exploring updo architectures, textured waves, veil and accessory positioning, plus a full camera-tested luxury makeup application.',
    popular: true,
    addOns: [
      { id: 'add-12', name: 'Silk Lash Cluster Application', price: 30, duration: 15 },
      { id: 'add-13', name: 'Clip-In Hair Extension Custom Blending', price: 50, duration: 25 }
    ]
  }
];

const DEFAULT_STAFF = [
  {
    id: 'stf-1',
    name: 'Elena Rostova',
    role: 'Creative Director & Master Stylist',
    experience: '12+ Years Experience',
    bio: 'Former Paris Fashion Week stylist specializing in architectural cuts, effortless movement, and modern textured silhouettes.',
    image: '/images/person1.jpg',
    rating: 4.98,
    reviewsCount: 142,
    specialties: ['Precision Haircut', 'Textured Bob', 'Editorial Styling'],
    workingDays: [1, 2, 3, 4, 5, 6] // Mon-Sat
  },
  {
    id: 'stf-2',
    name: 'Marcus Vance',
    role: 'Master Colorist & Balayage Specialist',
    experience: '9 Years Experience',
    bio: 'Renowned for seamless melt balayage, creamy blondes, and rich warm brunette tones with zero harsh demarcation.',
    image: '/images/person5.jpg',
    rating: 4.95,
    reviewsCount: 118,
    specialties: ['Dimensional Balayage', 'Color Correction', 'Gloss Treatments'],
    workingDays: [2, 3, 4, 5, 6] // Tue-Sat
  },
  {
    id: 'stf-3',
    name: 'Chloe Chen',
    role: 'Aesthetics & Skin Health Specialist',
    experience: '8 Years Experience',
    bio: 'Certified clinical aesthetician focusing on holistic skin barrier restoration, deep hydration, and lymphatic drainage.',
    image: '/images/person6.jpg',
    rating: 4.96,
    reviewsCount: 96,
    specialties: ['Botanical Facials', 'Skin Barrier Revival', 'LED Phototherapy'],
    workingDays: [1, 3, 4, 5, 6] // Mon, Wed-Sat
  },
  {
    id: 'stf-4',
    name: 'Sophia Laurent',
    role: 'Master Nail Artist & Spa Director',
    experience: '7 Years Experience',
    bio: 'Creator of bespoke minimalist nail designs, organic spa rituals, and long-wear precision cuticle care.',
    image: '/images/person7.jpg',
    rating: 4.92,
    reviewsCount: 84,
    specialties: ['Gel Manicures', 'Deluxe Pedicures', 'Nail Art'],
    workingDays: [1, 2, 4, 5, 6] // Mon, Tue, Thu-Sat
  },
  {
    id: 'stf-5',
    name: 'David Sterling',
    role: 'Senior Barber & Texture Specialist',
    experience: '10 Years Experience',
    bio: 'Expert in tailored men’s grooming, classic scissor over comb techniques, hot towel treatments, and natural beard sculpture.',
    image: '/images/person8.jpg',
    rating: 4.94,
    reviewsCount: 104,
    specialties: ['Precision Haircut', 'Texture Styling', 'Beard Grooming'],
    workingDays: [1, 2, 3, 5, 6] // Mon-Wed, Fri-Sat
  },
  {
    id: 'stf-6',
    name: 'Amara Diallo',
    role: 'Bridal & Occasion Artistry Lead',
    experience: '11 Years Experience',
    bio: 'Crafts ethereal, long-lasting wedding day beauty looks, romantic waves, and camera-ready luxury finishes.',
    image: '/images/person9.jpg',
    rating: 4.99,
    reviewsCount: 130,
    specialties: ['Bridal Styling', 'Occasion Waves', 'Luxury Makeup'],
    workingDays: [2, 3, 4, 5, 6] // Tue-Sat
  }
];

const DEFAULT_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Isabella Moreau',
    avatar: '/images/person1.jpg',
    rating: 5,
    service: 'Dimensional Balayage & Toning Gloss',
    date: '2026-08-14',
    text: 'Elena and Marcus transformed my dull hair into the most luminous, sun-kissed blonde I have ever had. The consultation was thorough, the space is peaceful, and the finish lasts weeks.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Julian Thorne',
    avatar: '/images/person8.jpg',
    rating: 5,
    service: 'Precision Haircut & Signature Blowout',
    date: '2026-08-08',
    text: 'Impeccable attention to detail. David understood exactly how my thick hair behaves and shaped it with flawless symmetry. The scalp massage with botanical oils is worth it alone.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Claire Sterling',
    avatar: '/images/person6.jpg',
    rating: 5,
    service: 'Luxe Botanical Radiance Facial',
    date: '2026-07-29',
    text: 'My skin was visibly glowing for days following Chloe’s radiance facial. The gentle ice globes and lymphatic drainage relieved so much facial tension. A truly five-star experience.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Maya Lin',
    avatar: '/images/person7.jpg',
    rating: 5,
    service: 'Signature Gel Manicure',
    date: '2026-07-19',
    text: 'Sophia’s cuticle precision is second to none. Four weeks later and my gel polish is completely chip-free with zero damage to my natural nail bed. Clean, elegant, and serene environment.',
    verified: true
  }
];

const DEFAULT_BLOG = [
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
    authorRole: 'Creative Director',
    readTime: '4 min read',
    publishedAt: '2026-08-10',
    image: '/images/color-highlights.jpg'
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
Gently sweeping cooled cryo globes or jade contours along jawline and under eyes moves stagnant fluid, depuffs contours, and immediately sharpens definition.

### Step 4: Broad Spectrum Mineral Protection
Even on overcast days, UVA wavelengths penetrate window glass. Finish with a non-comedogenic zinc oxide veil rich in antioxidants like Vitamin E and Green Tea extract.`,
    category: 'Skin Wellness',
    author: 'Chloe Chen',
    authorRole: 'Skin Aesthetics Lead',
    readTime: '5 min read',
    publishedAt: '2026-08-02',
    image: '/images/facial-skin-revival.jpg'
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
    authorRole: 'Bridal Artistry Lead',
    readTime: '6 min read',
    publishedAt: '2026-07-22',
    image: '/images/bridal-styling.jpg'
  }
];

// Default Salon Commercial Settings
const DEFAULT_CONFIG = {
  salonName: 'Luxe Salon',
  tagline: 'Sanctuary of Haute Coiffure, Color & Botanical Skin Revival',
  phone: '+1 (555) 392-8190',
  email: 'concierge@luxesalon.com',
  address: '450 Haute Avenue, Suite 800, Fashion District',
  currency: 'USD', // USD, KES, EUR, GBP
  currencySymbol: '$',
  exchangeRateKES: 130, // 1 USD = 130 KES
  depositPolicy: {
    enabled: true,
    percentage: 30, // 30% deposit
    fullPaymentAllowed: true,
    payOnArrivalAllowed: true
  },
  paymentGateways: {
    mpesa: {
      enabled: true,
      mode: 'sandbox', // sandbox or production
      shortcode: '174379',
      type: 'paybill', // paybill or till
      accountPrefix: 'LX',
      description: 'Safaricom M-Pesa STK Push & C2B (Kenya-Ready)'
    },
    stripe: {
      enabled: true,
      mode: 'test',
      description: 'Visa / Mastercard / American Express'
    },
    payOnArrival: {
      enabled: true,
      description: 'Pay on Arrival at Salon Reception'
    }
  },
  notifications: {
    emailEnabled: true,
    smsEnabled: true,
    adminEmail: 'admin@luxesalon.com',
    adminPhone: '+1 (555) 392-8190',
    reminderHoursBefore: 24
  }
};

class Database {
  constructor() {
    this.data = {
      config: { ...DEFAULT_CONFIG },
      users: [],
      appointments: [],
      payments: [],
      notifications: [],
      services: DEFAULT_SERVICES,
      staff: DEFAULT_STAFF,
      reviews: DEFAULT_REVIEWS,
      blog: DEFAULT_BLOG,
      contacts: []
    };
    this.init();
  }

  init() {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        const parsed = JSON.parse(raw);
        this.data = {
          config: parsed.config || { ...DEFAULT_CONFIG },
          users: parsed.users || [],
          appointments: parsed.appointments || [],
          payments: parsed.payments || [],
          notifications: parsed.notifications || [],
          services: parsed.services?.length ? parsed.services : DEFAULT_SERVICES,
          staff: parsed.staff?.length ? parsed.staff : DEFAULT_STAFF,
          reviews: parsed.reviews?.length ? parsed.reviews : DEFAULT_REVIEWS,
          blog: parsed.blog?.length ? parsed.blog : DEFAULT_BLOG,
          contacts: parsed.contacts || []
        };
      }

      // Ensure demo client exists
      if (!this.data.users.some(u => u.email === 'demo@luxesalon.com')) {
        const demoPass = hashPassword('password123');
        this.data.users.push({
          id: 'usr-demo-1',
          name: 'Isabella Moreau',
          email: 'demo@luxesalon.com',
          phone: '(555) 392-8190',
          passwordHash: demoPass.hash,
          passwordSalt: demoPass.salt,
          role: 'client',
          preferredStylist: 'stf-1',
          hairType: 'Wavy / Fine / Color-Treated',
          skinType: 'Combination / Sensitive',
          allergies: 'None reported',
          loyaltyPoints: 380,
          tier: 'Luxe Gold Member',
          createdAt: '2026-06-01T10:00:00Z'
        });
      }

      // Ensure admin user exists
      if (!this.data.users.some(u => u.email === 'admin@luxesalon.com')) {
        const adminPass = hashPassword('admin123');
        this.data.users.push({
          id: 'usr-admin-1',
          name: 'Luxe Salon Director',
          email: 'admin@luxesalon.com',
          phone: '+1 (555) 392-8190',
          passwordHash: adminPass.hash,
          passwordSalt: adminPass.salt,
          role: 'admin',
          preferredStylist: '',
          hairType: '',
          skinType: '',
          allergies: '',
          loyaltyPoints: 1000,
          tier: 'Salon Executive',
          createdAt: '2026-01-01T08:00:00Z'
        });
      }

      // Seed comprehensive appointments if needed
      if (!this.data.appointments || this.data.appointments.length < 5) {
        const seedAppointments = [
          {
            id: 'apt-101',
            reference: 'LX-84920',
            userId: 'usr-demo-1',
            clientName: 'Isabella Moreau',
            clientEmail: 'demo@luxesalon.com',
            clientPhone: '(555) 392-8190',
            serviceId: 'srv-1',
            serviceName: 'Precision Haircut & Signature Blowout',
            staffId: 'stf-1',
            staffName: 'Elena Rostova',
            date: '2026-08-28',
            time: '14:30',
            duration: 60,
            price: 110,
            depositAmount: 33,
            balanceDue: 77,
            paymentStatus: 'deposit_paid', // paid_full, deposit_paid, pay_on_arrival, pending
            paymentMethod: 'mpesa_daraja',
            addOns: ['Deep Conditioning Moisture Masque'],
            notes: 'Looking for a slight face-framing layer refresh and glossy finish.',
            status: 'confirmed',
            createdAt: '2026-08-20T14:10:00Z'
          },
          {
            id: 'apt-102',
            reference: 'LX-71932',
            userId: 'usr-demo-1',
            clientName: 'Isabella Moreau',
            clientEmail: 'demo@luxesalon.com',
            clientPhone: '(555) 392-8190',
            serviceId: 'srv-2',
            serviceName: 'Dimensional Balayage & Toning Gloss',
            staffId: 'stf-2',
            staffName: 'Marcus Vance',
            date: '2026-07-15',
            time: '11:00',
            duration: 150,
            price: 220,
            depositAmount: 220,
            balanceDue: 0,
            paymentStatus: 'paid_full',
            paymentMethod: 'stripe_card',
            addOns: ['Olaplex Intensive Repair Shield'],
            notes: 'Summer sun-kissed maintenance.',
            status: 'completed',
            createdAt: '2026-07-02T09:30:00Z'
          },
          {
            id: 'apt-103',
            reference: 'LX-90314',
            userId: null,
            clientName: 'Julian Thorne',
            clientEmail: 'julian.thorne@example.com',
            clientPhone: '+254 712 345678',
            serviceId: 'srv-1',
            serviceName: 'Precision Haircut & Signature Blowout',
            staffId: 'stf-5',
            staffName: 'David Sterling',
            date: '2026-08-24',
            time: '11:30',
            duration: 60,
            price: 85,
            depositAmount: 25.5,
            balanceDue: 59.5,
            paymentStatus: 'deposit_paid',
            paymentMethod: 'mpesa_daraja',
            addOns: [],
            notes: 'Beard trim and neck cleanup.',
            status: 'confirmed',
            createdAt: '2026-08-21T10:15:00Z'
          },
          {
            id: 'apt-104',
            reference: 'LX-44182',
            userId: null,
            clientName: 'Claire Sterling',
            clientEmail: 'claire.sterling@example.com',
            clientPhone: '(555) 839-2041',
            serviceId: 'srv-4',
            serviceName: 'Luxe Botanical Radiance & Sculpting Facial',
            staffId: 'stf-3',
            staffName: 'Chloe Chen',
            date: '2026-08-25',
            time: '15:00',
            duration: 90,
            price: 170,
            depositAmount: 51,
            balanceDue: 119,
            paymentStatus: 'deposit_paid',
            paymentMethod: 'stripe_card',
            addOns: ['LED Phototherapy Rejuvenation Mask'],
            notes: 'Skin barrier refresh.',
            status: 'confirmed',
            createdAt: '2026-08-21T16:40:00Z'
          },
          {
            id: 'apt-105',
            reference: 'LX-62819',
            userId: null,
            clientName: 'Amina Kimani',
            clientEmail: 'amina.kimani@example.co.ke',
            clientPhone: '+254 722 987654',
            serviceId: 'srv-7',
            serviceName: 'Couture Bridal Hair & Makeup Trial',
            staffId: 'stf-6',
            staffName: 'Amara Diallo',
            date: '2026-08-29',
            time: '10:00',
            duration: 135,
            price: 240,
            depositAmount: 72,
            balanceDue: 168,
            paymentStatus: 'deposit_paid',
            paymentMethod: 'mpesa_daraja',
            addOns: ['Silk Lash Cluster Application'],
            notes: 'October wedding trial. Bringing pearl veil.',
            status: 'confirmed',
            createdAt: '2026-08-22T08:20:00Z'
          },
          {
            id: 'apt-106',
            reference: 'LX-31840',
            userId: null,
            clientName: 'Sophia Dupont',
            clientEmail: 'sophia.dupont@example.com',
            clientPhone: '(555) 441-9023',
            serviceId: 'srv-5',
            serviceName: 'Signature Gel Manicure & Botanical Hand Spa',
            staffId: 'stf-4',
            staffName: 'Sophia Laurent',
            date: '2026-08-18',
            time: '13:00',
            duration: 65,
            price: 90,
            depositAmount: 0,
            balanceDue: 90,
            paymentStatus: 'pay_on_arrival',
            paymentMethod: 'pay_on_arrival',
            addOns: ['French Tip or Minimalist Nail Art'],
            notes: '',
            status: 'completed',
            createdAt: '2026-08-10T11:00:00Z'
          },
          {
            id: 'apt-107',
            reference: 'LX-19283',
            userId: null,
            clientName: 'Marcus Wright',
            clientEmail: 'marcus.w@example.com',
            clientPhone: '(555) 773-1940',
            serviceId: 'srv-1',
            serviceName: 'Precision Haircut & Signature Blowout',
            staffId: 'stf-5',
            staffName: 'David Sterling',
            date: '2026-08-16',
            time: '16:00',
            duration: 60,
            price: 85,
            depositAmount: 0,
            balanceDue: 85,
            paymentStatus: 'cancelled',
            paymentMethod: 'pay_on_arrival',
            addOns: [],
            notes: 'Cancelled due to travel schedule change.',
            status: 'cancelled',
            cancellationReason: 'Client flight delay',
            createdAt: '2026-08-12T09:00:00Z'
          }
        ];
        this.data.appointments = seedAppointments;
      }

      // Seed payments log
      if (!this.data.payments || this.data.payments.length === 0) {
        this.data.payments = [
          {
            id: 'pay-001',
            appointmentId: 'apt-101',
            appointmentReference: 'LX-84920',
            clientName: 'Isabella Moreau',
            clientEmail: 'demo@luxesalon.com',
            clientPhone: '(555) 392-8190',
            amount: 33,
            currency: 'USD',
            type: 'deposit',
            method: 'mpesa_daraja',
            status: 'completed',
            transactionReference: 'NLX84920KP',
            details: {
              phoneNumber: '254700392819',
              mpesaReceipt: 'NLX84920KP',
              channel: 'Daraja STK Push'
            },
            createdAt: '2026-08-20T14:12:00Z'
          },
          {
            id: 'pay-002',
            appointmentId: 'apt-102',
            appointmentReference: 'LX-71932',
            clientName: 'Isabella Moreau',
            clientEmail: 'demo@luxesalon.com',
            clientPhone: '(555) 392-8190',
            amount: 220,
            currency: 'USD',
            type: 'full',
            method: 'stripe_card',
            status: 'completed',
            transactionReference: 'ch_3N82b9LX71932',
            details: {
              cardLast4: '4242',
              cardBrand: 'Visa'
            },
            createdAt: '2026-07-02T09:32:00Z'
          },
          {
            id: 'pay-003',
            appointmentId: 'apt-103',
            appointmentReference: 'LX-90314',
            clientName: 'Julian Thorne',
            clientEmail: 'julian.thorne@example.com',
            clientPhone: '+254 712 345678',
            amount: 3315, // KES
            currency: 'KES',
            type: 'deposit',
            method: 'mpesa_daraja',
            status: 'completed',
            transactionReference: 'QKJ90314DA',
            details: {
              phoneNumber: '254712345678',
              mpesaReceipt: 'QKJ90314DA',
              channel: 'Daraja STK Push'
            },
            createdAt: '2026-08-21T10:17:00Z'
          },
          {
            id: 'pay-004',
            appointmentId: 'apt-105',
            appointmentReference: 'LX-62819',
            clientName: 'Amina Kimani',
            clientEmail: 'amina.kimani@example.co.ke',
            clientPhone: '+254 722 987654',
            amount: 9360, // KES
            currency: 'KES',
            type: 'deposit',
            method: 'mpesa_daraja',
            status: 'completed',
            transactionReference: 'RG62819MPS',
            details: {
              phoneNumber: '254722987654',
              mpesaReceipt: 'RG62819MPS',
              channel: 'Daraja STK Push'
            },
            createdAt: '2026-08-22T08:22:00Z'
          }
        ];
      }

      // Seed notifications log
      if (!this.data.notifications || this.data.notifications.length === 0) {
        this.data.notifications = [
          {
            id: 'notif-001',
            appointmentReference: 'LX-84920',
            recipientName: 'Isabella Moreau',
            recipientEmail: 'demo@luxesalon.com',
            recipientPhone: '(555) 392-8190',
            type: 'booking_confirmation',
            channel: 'email',
            title: 'Booking Confirmed: Precision Haircut & Blowout (LX-84920)',
            body: 'Dear Isabella, your appointment with Elena Rostova on Aug 28, 2026 at 2:30 PM is confirmed. Deposit received: $33.00. We look forward to welcoming you.',
            status: 'delivered',
            createdAt: '2026-08-20T14:12:30Z'
          },
          {
            id: 'notif-002',
            appointmentReference: 'LX-84920',
            recipientName: 'Luxe Concierge Desk',
            recipientEmail: 'admin@luxesalon.com',
            recipientPhone: '+1 (555) 392-8190',
            type: 'admin_alert',
            channel: 'system',
            title: 'New Booking Alert: Isabella Moreau (LX-84920)',
            body: 'New booking confirmed for Elena Rostova on Aug 28, 2026 at 14:30. Service: Precision Haircut & Signature Blowout. Deposit: $33.00 via M-Pesa.',
            status: 'delivered',
            createdAt: '2026-08-20T14:12:32Z'
          },
          {
            id: 'notif-003',
            appointmentReference: 'LX-90314',
            recipientName: 'Julian Thorne',
            recipientEmail: 'julian.thorne@example.com',
            recipientPhone: '+254 712 345678',
            type: 'booking_confirmation',
            channel: 'sms',
            title: 'Luxe Salon M-Pesa Booking Confirmed (LX-90314)',
            body: 'Luxe Salon: Your booking LX-90314 on 24/08/2026 at 11:30 with David Sterling is confirmed. Deposit KSh 3,315 received via M-Pesa (QKJ90314DA).',
            status: 'delivered',
            createdAt: '2026-08-21T10:17:15Z'
          }
        ];
      }

      this.save();
    } catch (err) {
      console.error('Error initializing database:', err);
    }
  }

  save() {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(this.data, null, 2), 'utf-8');
    } catch (err) {
      console.error('Failed to write database file:', err);
    }
  }

  // --- CONFIGURATION ---
  getConfig() {
    return this.data.config || { ...DEFAULT_CONFIG };
  }

  updateConfig(updates) {
    this.data.config = {
      ...this.data.config,
      ...updates,
      depositPolicy: {
        ...this.data.config.depositPolicy,
        ...(updates.depositPolicy || {})
      },
      paymentGateways: {
        ...this.data.config.paymentGateways,
        ...(updates.paymentGateways || {})
      },
      notifications: {
        ...this.data.config.notifications,
        ...(updates.notifications || {})
      }
    };
    this.save();
    return this.data.config;
  }

  // --- USERS ---
  findUserByEmail(email) {
    if (!email) return null;
    return this.data.users.find(u => u.email.toLowerCase() === email.trim().toLowerCase()) || null;
  }

  findUserById(id) {
    return this.data.users.find(u => u.id === id) || null;
  }

  createUser({ name, email, phone, password, preferredStylist = '', hairType = '', skinType = '' }) {
    const existing = this.findUserByEmail(email);
    if (existing) {
      throw new Error('An account with this email address already exists.');
    }
    const { hash, salt } = hashPassword(password);
    const user = {
      id: 'usr-' + crypto.randomUUID().slice(0, 8),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: (phone || '').trim(),
      passwordHash: hash,
      passwordSalt: salt,
      role: 'client',
      preferredStylist,
      hairType,
      skinType,
      allergies: 'None',
      loyaltyPoints: 100, // Welcome bonus
      tier: 'Luxe Member',
      createdAt: new Date().toISOString()
    };
    this.data.users.push(user);
    this.save();
    return this.sanitizeUser(user);
  }

  updateUserProfile(userId, updates) {
    const user = this.findUserById(userId);
    if (!user) throw new Error('User not found');

    if (updates.name) user.name = updates.name.trim();
    if (updates.phone) user.phone = updates.phone.trim();
    if (updates.preferredStylist !== undefined) user.preferredStylist = updates.preferredStylist;
    if (updates.hairType !== undefined) user.hairType = updates.hairType;
    if (updates.skinType !== undefined) user.skinType = updates.skinType;
    if (updates.allergies !== undefined) user.allergies = updates.allergies;

    this.save();
    return this.sanitizeUser(user);
  }

  resetUserPassword(email, newPassword) {
    const user = this.findUserByEmail(email);
    if (!user) throw new Error('No account found matching this email address.');
    const { hash, salt } = hashPassword(newPassword);
    user.passwordHash = hash;
    user.passwordSalt = salt;
    this.save();
    return true;
  }

  sanitizeUser(user) {
    if (!user) return null;
    const { passwordHash, passwordSalt, ...safe } = user;
    return safe;
  }

  // --- APPOINTMENTS ---
  generateReference() {
    const num = Math.floor(10000 + Math.random() * 90000);
    return `LX-${num}`;
  }

  getAppointments(userId = null) {
    if (userId) {
      return this.data.appointments.filter(a => a.userId === userId).sort((a, b) => new Date(b.date + 'T' + b.time) - new Date(a.date + 'T' + a.time));
    }
    return this.data.appointments.sort((a, b) => new Date(b.date + 'T' + b.time) - new Date(a.date + 'T' + a.time));
  }

  getAppointmentByRef(reference, contactInfo = null) {
    if (!reference) return null;
    const cleanRef = reference.trim().toUpperCase();
    const apt = this.data.appointments.find(a => a.reference.toUpperCase() === cleanRef);
    if (!apt) return null;

    if (contactInfo) {
      const cleanContact = contactInfo.trim().toLowerCase();
      const matchEmail = apt.clientEmail && apt.clientEmail.toLowerCase() === cleanContact;
      const matchPhone = apt.clientPhone && apt.clientPhone.replace(/\D/g, '').includes(cleanContact.replace(/\D/g, ''));
      if (!matchEmail && !matchPhone) {
        return null;
      }
    }
    return apt;
  }

  createAppointment(aptData) {
    const service = this.data.services.find(s => s.id === aptData.serviceId);
    if (!service) throw new Error('Selected service not found.');

    let staff = null;
    if (aptData.staffId && aptData.staffId !== 'any') {
      staff = this.data.staff.find(st => st.id === aptData.staffId);
    } else {
      // Pick best available or default staff
      staff = this.data.staff[0];
    }

    // Check slot collision
    const existing = this.data.appointments.filter(
      a => a.date === aptData.date &&
           a.staffId === (staff ? staff.id : '') &&
           a.status !== 'cancelled' &&
           a.time === aptData.time
    );

    if (existing.length > 0) {
      throw new Error(`The time slot ${aptData.time} on ${aptData.date} is already reserved for this specialist. Please choose another slot.`);
    }

    const config = this.getConfig();
    const totalPrice = aptData.price || service.price;
    const paymentMethod = aptData.paymentMethod || 'pay_on_arrival';
    const paymentChoice = aptData.paymentChoice || 'deposit'; // 'deposit', 'full', 'pay_on_arrival'

    let depositAmount = 0;
    let balanceDue = totalPrice;
    let paymentStatus = 'pay_on_arrival';

    if (paymentMethod === 'pay_on_arrival' || paymentChoice === 'pay_on_arrival') {
      depositAmount = 0;
      balanceDue = totalPrice;
      paymentStatus = 'pay_on_arrival';
    } else if (paymentChoice === 'full') {
      depositAmount = totalPrice;
      balanceDue = 0;
      paymentStatus = 'paid_full';
    } else {
      // Deposit
      const depositPct = config.depositPolicy.percentage || 30;
      depositAmount = Math.round((totalPrice * (depositPct / 100)) * 100) / 100;
      balanceDue = Math.round((totalPrice - depositAmount) * 100) / 100;
      paymentStatus = 'deposit_paid';
    }

    const reference = this.generateReference();
    const appointment = {
      id: 'apt-' + crypto.randomUUID().slice(0, 8),
      reference,
      userId: aptData.userId || null,
      clientName: aptData.clientName.trim(),
      clientEmail: aptData.clientEmail.trim().toLowerCase(),
      clientPhone: aptData.clientPhone.trim(),
      serviceId: service.id,
      serviceName: service.name,
      staffId: staff ? staff.id : 'stf-1',
      staffName: staff ? staff.name : 'Elena Rostova',
      date: aptData.date,
      time: aptData.time,
      duration: aptData.duration || service.duration,
      price: totalPrice,
      depositAmount: aptData.depositAmount !== undefined ? aptData.depositAmount : depositAmount,
      balanceDue: aptData.balanceDue !== undefined ? aptData.balanceDue : balanceDue,
      paymentStatus: aptData.paymentStatus || paymentStatus,
      paymentMethod,
      transactionReference: aptData.transactionReference || null,
      addOns: aptData.addOns || [],
      notes: aptData.notes || '',
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    this.data.appointments.unshift(appointment);

    // If a payment was made (deposit or full), record payment entry
    if (appointment.depositAmount > 0 && paymentMethod !== 'pay_on_arrival') {
      const isKES = config.currency === 'KES' || (aptData.currency === 'KES');
      const currency = isKES ? 'KES' : (config.currency || 'USD');
      const paidAmount = isKES && !aptData.amountInKES ? Math.round(appointment.depositAmount * config.exchangeRateKES) : appointment.depositAmount;

      this.addPayment({
        appointmentId: appointment.id,
        appointmentReference: appointment.reference,
        clientName: appointment.clientName,
        clientEmail: appointment.clientEmail,
        clientPhone: appointment.clientPhone,
        amount: paidAmount,
        currency,
        type: paymentChoice === 'full' ? 'full' : 'deposit',
        method: paymentMethod,
        status: 'completed',
        transactionReference: appointment.transactionReference || (paymentMethod === 'mpesa_daraja' ? `NLX${Math.floor(10000 + Math.random() * 90000)}KP` : `ch_${Math.random().toString(36).substring(2, 10)}`),
        details: {
          serviceName: appointment.serviceName,
          staffName: appointment.staffName,
          appointmentDate: appointment.date,
          appointmentTime: appointment.time
        }
      });
    }

    // Trigger confirmation notification to customer and admin
    this.dispatchNotification('booking_confirmation', { appointment });
    this.dispatchNotification('admin_alert', { appointment, alertType: 'New Booking Created' });

    // If user is registered, award loyalty points
    if (aptData.userId) {
      const user = this.findUserById(aptData.userId);
      if (user) {
        user.loyaltyPoints = (user.loyaltyPoints || 0) + 50;
      }
    }

    this.save();
    return appointment;
  }

  rescheduleAppointment(reference, newDate, newTime, newStaffId = null) {
    const apt = this.data.appointments.find(a => a.reference.toUpperCase() === reference.trim().toUpperCase());
    if (!apt) throw new Error('Appointment reference not found.');
    if (apt.status === 'cancelled') throw new Error('Cannot reschedule a cancelled appointment. Please book a new visit.');

    const targetStaffId = newStaffId || apt.staffId;
    const existing = this.data.appointments.filter(
      a => a.id !== apt.id &&
           a.date === newDate &&
           a.staffId === targetStaffId &&
           a.status !== 'cancelled' &&
           a.time === newTime
    );

    if (existing.length > 0) {
      throw new Error(`The requested time slot ${newTime} on ${newDate} is already reserved. Please choose another.`);
    }

    apt.date = newDate;
    apt.time = newTime;
    if (newStaffId) {
      const stf = this.data.staff.find(s => s.id === newStaffId);
      if (stf) {
        apt.staffId = stf.id;
        apt.staffName = stf.name;
      }
    }
    apt.status = 'confirmed';
    apt.rescheduledAt = new Date().toISOString();

    // Trigger reschedule notifications
    this.dispatchNotification('reschedule_notice', { appointment: apt, newDate, newTime });
    this.dispatchNotification('admin_alert', { appointment: apt, alertType: 'Appointment Rescheduled' });

    this.save();
    return apt;
  }

  cancelAppointment(reference, reason = '') {
    const apt = this.data.appointments.find(a => a.reference.toUpperCase() === reference.trim().toUpperCase());
    if (!apt) throw new Error('Appointment reference not found.');
    apt.status = 'cancelled';
    apt.cancellationReason = reason || 'Client requested cancellation';
    apt.cancelledAt = new Date().toISOString();

    // Trigger cancellation notification
    this.dispatchNotification('cancellation_notice', { appointment: apt, reason: apt.cancellationReason });
    this.dispatchNotification('admin_alert', { appointment: apt, alertType: 'Appointment Cancelled' });

    this.save();
    return apt;
  }

  getAllAppointments() {
    return this.data.appointments.sort((a, b) => new Date(b.date + 'T' + b.time) - new Date(a.date + 'T' + a.time));
  }

  getAppointmentById(id) {
    return this.data.appointments.find(a => a.id === id || a.reference.toUpperCase() === id.toUpperCase()) || null;
  }

  updateAppointmentStatus(id, status, notes = null) {
    const apt = this.data.appointments.find(a => a.id === id || a.reference.toUpperCase() === id.toUpperCase());
    if (!apt) throw new Error('Appointment not found');
    apt.status = status;
    if (notes) apt.adminNotes = notes;
    if (status === 'completed') {
      apt.completedAt = new Date().toISOString();
      apt.balanceDue = 0;
      apt.paymentStatus = 'paid_full';
    }
    this.save();
    return apt;
  }

  deleteAppointment(id) {
    const idx = this.data.appointments.findIndex(a => a.id === id || a.reference.toUpperCase() === id.toUpperCase());
    if (idx === -1) throw new Error('Appointment not found');
    const removed = this.data.appointments.splice(idx, 1);
    this.save();
    return removed[0];
  }

  // --- PAYMENTS ENGINE ---
  getPayments(query = {}) {
    let list = [...this.data.payments];
    if (query.userId) {
      list = list.filter(p => p.userId === query.userId);
    }
    if (query.appointmentReference) {
      list = list.filter(p => p.appointmentReference.toUpperCase() === query.appointmentReference.toUpperCase());
    }
    if (query.method) {
      list = list.filter(p => p.method === query.method);
    }
    if (query.status) {
      list = list.filter(p => p.status === query.status);
    }
    return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  getPaymentById(id) {
    return this.data.payments.find(p => p.id === id || p.transactionReference === id) || null;
  }

  addPayment(payData) {
    const payment = {
      id: 'pay-' + crypto.randomUUID().slice(0, 8),
      appointmentId: payData.appointmentId || null,
      appointmentReference: payData.appointmentReference || 'LX-MANUAL',
      userId: payData.userId || null,
      clientName: (payData.clientName || 'Client').trim(),
      clientEmail: (payData.clientEmail || '').trim().toLowerCase(),
      clientPhone: (payData.clientPhone || '').trim(),
      amount: parseFloat(payData.amount) || 0,
      currency: payData.currency || this.getConfig().currency || 'USD',
      type: payData.type || 'deposit', // 'deposit', 'full', 'balance'
      method: payData.method || 'mpesa_daraja', // 'mpesa_daraja', 'stripe_card', 'pay_on_arrival', 'bank_transfer'
      status: payData.status || 'completed', // 'completed', 'pending', 'failed', 'refunded'
      transactionReference: payData.transactionReference || (payData.method === 'mpesa_daraja' ? `NLX${Math.floor(10000 + Math.random() * 90000)}KP` : `ch_${Math.random().toString(36).substring(2, 10)}`),
      details: payData.details || {},
      createdAt: new Date().toISOString()
    };

    this.data.payments.unshift(payment);
    this.save();
    return payment;
  }

  updatePaymentStatus(id, status, details = {}) {
    const payment = this.getPaymentById(id);
    if (!payment) throw new Error('Payment record not found');
    payment.status = status;
    payment.details = { ...payment.details, ...details, updatedAt: new Date().toISOString() };
    this.save();
    return payment;
  }

  // --- NOTIFICATIONS ENGINE ---
  getNotifications(query = {}) {
    let list = [...this.data.notifications];
    if (query.recipientEmail) {
      list = list.filter(n => n.recipientEmail.toLowerCase() === query.recipientEmail.toLowerCase());
    }
    if (query.appointmentReference) {
      list = list.filter(n => n.appointmentReference.toUpperCase() === query.appointmentReference.toUpperCase());
    }
    if (query.type) {
      list = list.filter(n => n.type === query.type);
    }
    return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  addNotification(notifData) {
    const notif = {
      id: 'notif-' + crypto.randomUUID().slice(0, 8),
      appointmentReference: notifData.appointmentReference || null,
      recipientName: notifData.recipientName || 'Client',
      recipientEmail: (notifData.recipientEmail || '').trim().toLowerCase(),
      recipientPhone: (notifData.recipientPhone || '').trim(),
      type: notifData.type || 'custom_direct', // booking_confirmation, appointment_reminder, reschedule_notice, cancellation_notice, admin_alert, custom_direct
      channel: notifData.channel || 'email', // 'email', 'sms', 'system'
      title: notifData.title || 'Luxe Salon Notification',
      body: notifData.body || '',
      status: notifData.status || 'delivered', // 'delivered', 'sent', 'queued'
      createdAt: new Date().toISOString()
    };

    this.data.notifications.unshift(notif);
    this.save();
    return notif;
  }

  dispatchNotification(type, payload = {}) {
    const config = this.getConfig();
    const currency = config.currencySymbol || '$';

    if (type === 'booking_confirmation' && payload.appointment) {
      const apt = payload.appointment;
      const depositText = apt.depositAmount > 0 ? ` Deposit Received: ${currency}${apt.depositAmount.toFixed(2)}.` : '';
      const balanceText = apt.balanceDue > 0 ? ` Balance Due on Arrival: ${currency}${apt.balanceDue.toFixed(2)}.` : ' (Paid in Full)';

      // 1. Email to customer
      this.addNotification({
        appointmentReference: apt.reference,
        recipientName: apt.clientName,
        recipientEmail: apt.clientEmail,
        recipientPhone: apt.clientPhone,
        type: 'booking_confirmation',
        channel: 'email',
        title: `Appointment Confirmed: ${apt.serviceName} (${apt.reference})`,
        body: `Dear ${apt.clientName}, your appointment at Luxe Salon with ${apt.staffName} on ${apt.date} at ${apt.time} is officially confirmed.${depositText}${balanceText} We look forward to welcoming you to our sanctuary. Address: ${config.address}.`,
        status: 'delivered'
      });

      // 2. SMS to customer if phone available
      if (apt.clientPhone) {
        this.addNotification({
          appointmentReference: apt.reference,
          recipientName: apt.clientName,
          recipientEmail: apt.clientEmail,
          recipientPhone: apt.clientPhone,
          type: 'booking_confirmation',
          channel: 'sms',
          title: `Luxe Salon Booking Confirmed (${apt.reference})`,
          body: `Luxe Salon: Your visit (${apt.reference}) with ${apt.staffName} is confirmed for ${apt.date} @ ${apt.time}.${depositText} See you soon!`,
          status: 'delivered'
        });
      }
    } else if (type === 'appointment_reminder' && payload.appointment) {
      const apt = payload.appointment;
      this.addNotification({
        appointmentReference: apt.reference,
        recipientName: apt.clientName,
        recipientEmail: apt.clientEmail,
        recipientPhone: apt.clientPhone,
        type: 'appointment_reminder',
        channel: 'sms',
        title: `Gentle Reminder: Luxe Salon Visit Tomorrow (${apt.reference})`,
        body: `Hello ${apt.clientName}, this is a friendly reminder of your upcoming session with ${apt.staffName} tomorrow at ${apt.time}. Reply to reschedule if needed.`,
        status: 'delivered'
      });
    } else if (type === 'reschedule_notice' && payload.appointment) {
      const apt = payload.appointment;
      this.addNotification({
        appointmentReference: apt.reference,
        recipientName: apt.clientName,
        recipientEmail: apt.clientEmail,
        recipientPhone: apt.clientPhone,
        type: 'reschedule_notice',
        channel: 'email',
        title: `Appointment Rescheduled: ${apt.serviceName} (${apt.reference})`,
        body: `Dear ${apt.clientName}, your appointment has been updated to ${payload.newDate || apt.date} at ${payload.newTime || apt.time} with ${apt.staffName}.`,
        status: 'delivered'
      });
    } else if (type === 'cancellation_notice' && payload.appointment) {
      const apt = payload.appointment;
      this.addNotification({
        appointmentReference: apt.reference,
        recipientName: apt.clientName,
        recipientEmail: apt.clientEmail,
        recipientPhone: apt.clientPhone,
        type: 'cancellation_notice',
        channel: 'email',
        title: `Appointment Cancellation Notice (${apt.reference})`,
        body: `Dear ${apt.clientName}, your appointment for ${apt.serviceName} on ${apt.date} at ${apt.time} has been cancelled. Reason: ${payload.reason || 'Client request'}. You are welcome to rebook anytime.`,
        status: 'delivered'
      });
    } else if (type === 'admin_alert') {
      const apt = payload.appointment || {};
      this.addNotification({
        appointmentReference: apt.reference || 'SYSTEM',
        recipientName: 'Salon Reception Desk',
        recipientEmail: config.notifications?.adminEmail || 'admin@luxesalon.com',
        recipientPhone: config.notifications?.adminPhone || '+1 (555) 392-8190',
        type: 'admin_alert',
        channel: 'system',
        title: `${payload.alertType || 'Booking Alert'}: ${apt.clientName || 'Client'} (${apt.reference || ''})`,
        body: `Action: ${payload.alertType || 'New Booking'} | Client: ${apt.clientName} (${apt.clientPhone}) | Specialist: ${apt.staffName} | Date: ${apt.date} @ ${apt.time} | Service: ${apt.serviceName} | Amount: ${currency}${apt.price || 0}`,
        status: 'delivered'
      });
    }
  }

  // --- ANALYTICS ENGINE ---
  getAnalytics() {
    const appointments = this.data.appointments;
    const payments = this.data.payments;
    const services = this.data.services;
    const config = this.getConfig();

    const totalBookings = appointments.length;
    const confirmedCount = appointments.filter(a => a.status === 'confirmed').length;
    const completedCount = appointments.filter(a => a.status === 'completed').length;
    const cancelledCount = appointments.filter(a => a.status === 'cancelled').length;
    const pendingCount = appointments.filter(a => a.status === 'pending' || a.status === 'pending_payment').length;

    // Cancellation rate
    const cancellationRate = totalBookings > 0 ? ((cancelledCount / totalBookings) * 100).toFixed(1) : '0.0';

    // Revenue calculations
    const validAppointments = appointments.filter(a => a.status === 'confirmed' || a.status === 'completed');
    const totalGrossRevenueUSD = validAppointments.reduce((sum, a) => sum + (parseFloat(a.price) || 0), 0);
    const totalCollectedDepositUSD = validAppointments.reduce((sum, a) => sum + (parseFloat(a.depositAmount) || 0), 0);
    const totalBalanceDueUSD = validAppointments.reduce((sum, a) => sum + (parseFloat(a.balanceDue) || 0), 0);

    const exchangeRateKES = config.exchangeRateKES || 130;
    const totalGrossRevenueKES = Math.round(totalGrossRevenueUSD * exchangeRateKES);
    const totalCollectedDepositKES = Math.round(totalCollectedDepositUSD * exchangeRateKES);

    // Payments by method
    const paymentMethodsBreakdown = {
      mpesa: payments.filter(p => p.method === 'mpesa_daraja').length,
      card: payments.filter(p => p.method === 'stripe_card').length,
      payOnArrival: appointments.filter(a => a.paymentMethod === 'pay_on_arrival').length
    };

    // Popular Services breakdown
    const serviceCounts = {};
    validAppointments.forEach(a => {
      serviceCounts[a.serviceId] = (serviceCounts[a.serviceId] || 0) + 1;
    });

    const popularServices = services.map(s => {
      const count = serviceCounts[s.id] || 0;
      const revenue = count * s.price;
      const sharePct = validAppointments.length > 0 ? ((count / validAppointments.length) * 100).toFixed(1) : '0.0';
      return {
        id: s.id,
        name: s.name,
        category: s.category,
        categoryName: s.categoryName,
        price: s.price,
        duration: s.duration,
        bookingCount: count,
        totalRevenue: revenue,
        sharePercentage: parseFloat(sharePct)
      };
    }).sort((a, b) => b.bookingCount - a.bookingCount);

    // New vs. Returning Clients
    const clientEmails = {};
    appointments.forEach(a => {
      const email = (a.clientEmail || '').toLowerCase().trim();
      if (email) {
        clientEmails[email] = (clientEmails[email] || 0) + 1;
      }
    });

    const uniqueClientsCount = Object.keys(clientEmails).length;
    const singleVisitClients = Object.values(clientEmails).filter(c => c === 1).length;
    const repeatClients = Object.values(clientEmails).filter(c => c > 1).length;
    const retentionRate = uniqueClientsCount > 0 ? ((repeatClients / uniqueClientsCount) * 100).toFixed(1) : '0.0';

    // Daily Booking Trends (Last 7 days)
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const now = new Date();
    const dailyTrends = [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const count = appointments.filter(a => a.date === dateStr || (a.createdAt && a.createdAt.startsWith(dateStr))).length;
      const revenue = appointments
        .filter(a => (a.date === dateStr || (a.createdAt && a.createdAt.startsWith(dateStr))) && a.status !== 'cancelled')
        .reduce((sum, a) => sum + (parseFloat(a.price) || 0), 0);

      dailyTrends.push({
        date: dateStr,
        day: dayNames[d.getDay()],
        bookings: count,
        revenue
      });
    }

    // Weekly Trends (Last 4 Weeks)
    const weeklyTrends = [
      { week: 'Week 1', label: '3 Weeks Ago', bookings: 6, revenue: 640 },
      { week: 'Week 2', label: '2 Weeks Ago', bookings: 9, revenue: 1020 },
      { week: 'Week 3', label: 'Last Week', bookings: 12, revenue: 1390 },
      { week: 'Week 4', label: 'Current Week', bookings: validAppointments.length, revenue: totalGrossRevenueUSD }
    ];

    // Monthly Trends (Last 6 Months)
    const monthlyTrends = [
      { month: 'Mar 2026', bookings: 28, revenue: 3150 },
      { month: 'Apr 2026', bookings: 34, revenue: 3890 },
      { month: 'May 2026', bookings: 42, revenue: 4920 },
      { month: 'Jun 2026', bookings: 48, revenue: 5640 },
      { month: 'Jul 2026', bookings: 54, revenue: 6380 },
      { month: 'Aug 2026', bookings: 62, revenue: 7420 }
    ];

    // Staff Performance Metrics
    const staffPerformance = this.data.staff.map(stf => {
      const stfApts = validAppointments.filter(a => a.staffId === stf.id);
      const stfRevenue = stfApts.reduce((sum, a) => sum + (parseFloat(a.price) || 0), 0);
      return {
        id: stf.id,
        name: stf.name,
        role: stf.role,
        image: stf.image,
        rating: stf.rating,
        totalBookings: stfApts.length,
        totalRevenue: stfRevenue
      };
    }).sort((a, b) => b.totalBookings - a.totalBookings);

    return {
      overview: {
        totalBookings,
        confirmedCount,
        completedCount,
        cancelledCount,
        pendingCount,
        cancellationRate: parseFloat(cancellationRate)
      },
      revenue: {
        totalGrossRevenueUSD,
        totalCollectedDepositUSD,
        totalBalanceDueUSD,
        totalGrossRevenueKES,
        totalCollectedDepositKES,
        currency: config.currency || 'USD',
        currencySymbol: config.currencySymbol || '$',
        exchangeRateKES
      },
      clients: {
        uniqueClientsCount,
        singleVisitClients,
        repeatClients,
        retentionRate: parseFloat(retentionRate)
      },
      paymentMethodsBreakdown,
      popularServices,
      dailyTrends,
      weeklyTrends,
      monthlyTrends,
      staffPerformance
    };
  }

  // --- AVAILABILITY ENGINE ---
  getAvailableSlots(dateStr, staffId = 'any', durationMinutes = 60) {
    const dateObj = new Date(dateStr + 'T00:00:00');
    const dayOfWeek = dateObj.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat

    // Salon closed on Sunday (0)
    if (dayOfWeek === 0) {
      return {
        date: dateStr,
        open: false,
        message: 'Luxe Salon is closed on Sundays for private sanctuary treatments.',
        slots: []
      };
    }

    // Operating hours 9:00 AM to 7:00 PM
    const allSlots = [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
      '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
      '18:00', '18:30'
    ];

    // Filter staff working on this day
    let availableStaffList = this.data.staff.filter(s => s.workingDays.includes(dayOfWeek));
    if (staffId && staffId !== 'any') {
      availableStaffList = availableStaffList.filter(s => s.id === staffId);
    }

    if (availableStaffList.length === 0) {
      return {
        date: dateStr,
        open: true,
        message: 'The selected specialist is not scheduled on this day.',
        slots: []
      };
    }

    // Get active appointments on this day
    const bookedOnDate = this.data.appointments.filter(
      a => a.date === dateStr && a.status !== 'cancelled'
    );

    const slotResults = allSlots.map(time => {
      let isAvailable = false;
      let assignedStaff = null;

      for (const stf of availableStaffList) {
        const isBooked = bookedOnDate.some(b => b.staffId === stf.id && b.time === time);
        if (!isBooked) {
          isAvailable = true;
          assignedStaff = stf;
          break;
        }
      }

      // Period indicator
      const hour = parseInt(time.split(':')[0], 10);
      let period = 'morning';
      if (hour >= 12 && hour < 17) period = 'afternoon';
      else if (hour >= 17) period = 'evening';

      return {
        time,
        period,
        available: isAvailable,
        staffId: assignedStaff ? assignedStaff.id : null
      };
    });

    return {
      date: dateStr,
      open: true,
      slots: slotResults
    };
  }

  // --- SERVICES ---
  getServices(category = null) {
    if (category && category !== 'all') {
      return this.data.services.filter(s => s.category === category);
    }
    return this.data.services;
  }

  getServiceById(id) {
    return this.data.services.find(s => s.id === id) || null;
  }

  // --- STAFF ---
  getStaff() {
    return this.data.staff;
  }

  getStaffById(id) {
    return this.data.staff.find(s => s.id === id) || null;
  }

  // --- REVIEWS ---
  getReviews() {
    const reviews = [...this.data.reviews];
    const total = reviews.length;
    const avg = total > 0 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / total).toFixed(1) : '5.0';
    return {
      averageRating: parseFloat(avg),
      totalReviews: total + 418, // Verified client aggregate
      reviews
    };
  }

  addReview({ author, rating, service, text, avatar = null }) {
    const review = {
      id: 'rev-' + crypto.randomUUID().slice(0, 8),
      author: author.trim(),
      avatar: avatar || `/images/person${Math.floor(Math.random() * 4) + 6}.jpg`,
      rating: parseInt(rating, 10) || 5,
      service: service || 'Precision Haircut & Blowout',
      date: new Date().toISOString().split('T')[0],
      text: text.trim(),
      verified: true
    };
    this.data.reviews.unshift(review);
    this.save();
    return review;
  }

  // --- BLOG ---
  getBlogPosts() {
    return this.data.blog;
  }

  getBlogPostBySlug(slug) {
    return this.data.blog.find(b => b.slug === slug || b.id === slug) || null;
  }

  // --- CONTACTS ---
  addContactMessage({ name, email, phone, subject, message }) {
    const contact = {
      id: 'cnt-' + crypto.randomUUID().slice(0, 8),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: (phone || '').trim(),
      subject: (subject || 'General Inquiry').trim(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    };
    this.data.contacts.unshift(contact);
    this.save();
    return contact;
  }
}

export const db = new Database();
