/* ==========================================================================
   Le Augem Cafe - "Bricks & Wood" Coffee Shop POS & Management System
   Universal Engine: Landing Portal, Separated POS vs Management Modes,
   Dynamic Subcategories, 0-Baseline Visual Charts, and Printable Reports.
   Compatible with file:/// browser execution and Node.js testing.
   ========================================================================== */

// --- Official Menu (Transcribed from In-Store Clipboard Menu) ---
const defaultProducts = [
  // COFFEE-BASED: Classic Favorites
  { id: 'americano-hot', name: 'Americano (Hot 8 oz)', category: 'Coffee-Based', variant: 'Hot', price: 100, emoji: '☕', detail: 'Rich espresso diluted with hot water' },
  { id: 'americano-iced', name: 'Americano (Iced 16 oz)', category: 'Coffee-Based', variant: 'Iced', price: 110, emoji: '🧊', detail: 'Bold espresso over cold water and ice' },
  { id: 'cafe-latte-hot', name: 'Café Latte (Hot 8 oz)', category: 'Coffee-Based', variant: 'Hot', price: 140, emoji: '☕', detail: 'Espresso with velvety steamed fresh milk' },
  { id: 'cafe-latte-iced', name: 'Café Latte (Iced 16 oz)', category: 'Coffee-Based', variant: 'Iced', price: 160, emoji: '🧋', detail: 'Chilled milk over double espresso and ice' },

  // COFFEE-BASED: Crafted Coffee
  { id: 'spanish-latte-hot', name: 'Spanish Latte (Hot 8 oz)', category: 'Coffee-Based', variant: 'Hot', price: 170, emoji: '☕', detail: 'Espresso with sweet condensed milk & steamed milk' },
  { id: 'spanish-latte-iced', name: 'Spanish Latte (Iced 16 oz)', category: 'Coffee-Based', variant: 'Iced', price: 190, emoji: '🧋', detail: 'Espresso, sweet condensed milk over chilled milk' },
  { id: 'mocha-latte-hot', name: 'Mocha Latte (Hot 8 oz)', category: 'Coffee-Based', variant: 'Hot', price: 170, emoji: '☕', detail: 'Espresso combined with rich Dutch dark cocoa' },
  { id: 'mocha-latte-iced', name: 'Mocha Latte (Iced 16 oz)', category: 'Coffee-Based', variant: 'Iced', price: 190, emoji: '🧋', detail: 'Iced espresso with artisanal chocolate milk' },
  { id: 'caramel-macchiato-hot', name: 'Caramel Macchiato (Hot 8 oz)', category: 'Coffee-Based', variant: 'Hot', price: 170, emoji: '☕', detail: 'Steamed milk marked with espresso & vanilla caramel drizzle' },
  { id: 'caramel-macchiato-iced', name: 'Caramel Macchiato (Iced 16 oz)', category: 'Coffee-Based', variant: 'Iced', price: 190, emoji: '🧋', detail: 'Chilled vanilla milk marked with espresso & caramel' },

  // COFFEE-BASED: Flavored Blends
  { id: 'irish-cream-hot', name: 'Irish Cream Latte (Hot 8 oz)', category: 'Coffee-Based', variant: 'Hot', price: 170, emoji: '☕', detail: 'Espresso infused with creamy Irish whiskey aromatics' },
  { id: 'irish-cream-iced', name: 'Irish Cream Latte (Iced 16 oz)', category: 'Coffee-Based', variant: 'Iced', price: 190, emoji: '🧋', detail: 'Iced latte infused with velvety Irish cream flavor' },
  { id: 'french-vanilla-hot', name: 'French Vanilla Latte (Hot 8 oz)', category: 'Coffee-Based', variant: 'Hot', price: 170, emoji: '☕', detail: 'Custard vanilla notes blended with rich espresso' },
  { id: 'french-vanilla-iced', name: 'French Vanilla Latte (Iced 16 oz)', category: 'Coffee-Based', variant: 'Iced', price: 190, emoji: '🧋', detail: 'Chilled French vanilla infused latte' },
  { id: 'vanilla-latte-hot', name: 'Vanilla Latte (Hot 8 oz)', category: 'Coffee-Based', variant: 'Hot', price: 170, emoji: '☕', detail: 'Classic Madagascar vanilla with steamed milk' },
  { id: 'vanilla-latte-iced', name: 'Vanilla Latte (Iced 16 oz)', category: 'Coffee-Based', variant: 'Iced', price: 190, emoji: '🧋', detail: 'Iced latte with sweet vanilla bean syrup' },
  { id: 'salted-caramel-hot', name: 'Salted Caramel Latte (Hot 8 oz)', category: 'Coffee-Based', variant: 'Hot', price: 170, emoji: '☕', detail: 'Buttery caramel syrup with a pinch of sea salt' },
  { id: 'salted-caramel-iced', name: 'Salted Caramel Latte (Iced 16 oz)', category: 'Coffee-Based', variant: 'Iced', price: 190, emoji: '🧋', detail: 'Iced espresso with salted caramel sweetness' },
  { id: 'cinnamon-latte-hot', name: 'Cinnamon Latte (Hot 8 oz)', category: 'Coffee-Based', variant: 'Hot', price: 170, emoji: '☕', detail: 'Warm aromatic Ceylon cinnamon over espresso' },
  { id: 'cinnamon-latte-iced', name: 'Cinnamon Latte (Iced 16 oz)', category: 'Coffee-Based', variant: 'Iced', price: 190, emoji: '🧋', detail: 'Iced latte with spice-infused sweet cinnamon' },
  { id: 'butterscotch-hot', name: 'Butterscotch Latte (Hot 8 oz)', category: 'Coffee-Based', variant: 'Hot', price: 170, emoji: '☕', detail: 'Brown sugar and butter notes with espresso' },
  { id: 'butterscotch-iced', name: 'Butterscotch Latte (Iced 16 oz)', category: 'Coffee-Based', variant: 'Iced', price: 190, emoji: '🧋', detail: 'Chilled sweet butterscotch latte' },
  { id: 'toffee-latte-hot', name: 'Toffee Latte (Hot 8 oz)', category: 'Coffee-Based', variant: 'Hot', price: 170, emoji: '☕', detail: 'Toasted buttery toffee nut flavor with espresso' },
  { id: 'toffee-latte-iced', name: 'Toffee Latte (Iced 16 oz)', category: 'Coffee-Based', variant: 'Iced', price: 190, emoji: '🧋', detail: 'Iced toffee nut latte' },

  // CHOCOLATE
  { id: 'double-choco-hot', name: 'Double Chocolate (Hot 8 oz)', category: 'Chocolate', variant: 'Hot', price: 140, emoji: '🍫', detail: 'Decadent melted cocoa and warm steamed milk' },
  { id: 'double-choco-iced', name: 'Double Chocolate (Iced 16 oz)', category: 'Chocolate', variant: 'Iced', price: 160, emoji: '🧋', detail: 'Rich iced dark chocolate drink' },
  { id: 'salted-caramel-dc-hot', name: 'Salted Caramel DC (Hot 8 oz)', category: 'Chocolate', variant: 'Hot', price: 160, emoji: '🍫', detail: 'Double chocolate with salted caramel infusion' },
  { id: 'salted-caramel-dc-iced', name: 'Salted Caramel DC (Iced 16 oz)', category: 'Chocolate', variant: 'Iced', price: 180, emoji: '🧋', detail: 'Iced double chocolate with sea salt caramel' },

  // MATCHA (All Iced 16 oz)
  { id: 'classic-matcha-iced', name: 'Classic Matcha (Iced 16 oz)', category: 'Matcha', variant: 'Iced', price: 160, emoji: '🍵', detail: 'Authentic Japanese green tea matcha with cold milk' },
  { id: 'strawberry-matcha-iced', name: 'Strawberry Matcha (Iced 16 oz)', category: 'Matcha', variant: 'Iced', price: 180, emoji: '🍓', detail: 'Layered strawberry compote, milk, and ceremonial matcha' },
  { id: 'mango-matcha-iced', name: 'Mango Matcha (Iced 16 oz)', category: 'Matcha', variant: 'Iced', price: 180, emoji: '🥭', detail: 'Sweet mango nectar layered with matcha and milk' },

  // TEA-BASED
  { id: 'chia-green-tea-hot', name: 'Chia Green Tea Lemon Cucumber (Hot 8 oz)', category: 'Tea-Based', variant: 'Hot', price: 130, emoji: '🫖', detail: 'Refreshing green tea with organic chia, lemon & cucumber' },
  { id: 'chia-green-tea-iced', name: 'Chia Green Tea Lemon Cucumber (Iced 16 oz)', category: 'Tea-Based', variant: 'Iced', price: 140, emoji: '🧊', detail: 'Chilled green tea with plump chia seeds, cucumber & citrus' },
  { id: 'green-tea-hot', name: 'Green Tea (Hot 8 oz)', category: 'Tea-Based', variant: 'Hot', price: 120, emoji: '🍵', detail: 'Pure whole leaf Japanese green tea' },
  { id: 'chamomile-tea-hot', name: 'Chamomile Tea (Hot 8 oz)', category: 'Tea-Based', variant: 'Hot', price: 120, emoji: '🌼', detail: 'Calming caffeine-free herbal chamomile blossoms' },
  { id: 'honey-citron-hot', name: 'Honey Citron Tea (Hot 8 oz)', category: 'Tea-Based', variant: 'Hot', price: 150, emoji: '🍋', detail: 'Korean yuzu citron preserve with wild floral honey' },
  { id: 'honey-citron-iced', name: 'Honey Citron Tea (Iced 16 oz)', category: 'Tea-Based', variant: 'Iced', price: 160, emoji: '🍹', detail: 'Iced yuzu citron and honey fruit infusion' },

  // PASTA (Chef's Pam's Specials)
  { id: 'pasta-macaroni', name: 'Macaroni', category: 'Pasta', variant: 'Special', price: 270, emoji: '🍝', detail: "Chef Pam's special creamy baked macaroni casserole" },
  { id: 'pasta-lasagna', name: 'Lasagna', category: 'Pasta', variant: 'Special', price: 285, emoji: '🧀', detail: "Chef Pam's rich multi-layer beef and béchamel lasagna" },

  // SANDWICHES
  { id: 'sand-egg-cheese', name: 'Egg and Cheese Sandwich', category: 'Sandwiches', variant: 'Sandwich', price: 120, emoji: '🥪', detail: 'Fluffy eggs with melted cheddar on artisan bread' },
  { id: 'sand-triple-cheese', name: 'Triple Cheese Sandwich', category: 'Sandwiches', variant: 'Sandwich', price: 150, emoji: '🥪', detail: 'Cheddar, mozzarella, and gouda toasted golden crisp' },
  { id: 'sand-tuna-cheese', name: 'Tuna and Cheese Sandwich', category: 'Sandwiches', variant: 'Sandwich', price: 140, emoji: '🥪', detail: 'Savory seasoned tuna flake spread with melted cheese' },
  { id: 'sand-ham-cheese', name: 'Ham and Cheese Sandwich', category: 'Sandwiches', variant: 'Sandwich', price: 150, emoji: '🥪', detail: 'Smoked ham slices with melted cheddar cheese' },
  { id: 'sand-spam-cheese', name: 'Spam and Cheese Sandwich', category: 'Sandwiches', variant: 'Sandwich', price: 175, emoji: '🥪', detail: 'Crispy fried Spam luncheon meat with cheddar slice' },

  // BREAD / PASTRIES
  { id: 'pastry-brownies', name: 'Brownies', category: 'Bread / Pastries', variant: 'Pastry', price: 85, emoji: '🍫', detail: 'Fudgy dark chocolate walnut brownie square' },
  { id: 'pastry-crinkles', name: 'Crinkles', category: 'Bread / Pastries', variant: 'Pastry', price: 85, emoji: '🍪', detail: 'Soft-baked chocolate crinkles dusted in powdered sugar' },
  { id: 'pastry-cinnamon-glazed', name: 'Cinnamon Glazed', category: 'Bread / Pastries', variant: 'Pastry', price: 100, emoji: '🥐', detail: 'Warm rolled cinnamon pastry topped with sugar glaze' },
  { id: 'pastry-revel-bar', name: 'Revel Bar', category: 'Bread / Pastries', variant: 'Pastry', price: 135, emoji: '🥧', detail: 'Chewy oatmeal crust filled with dark fudge chocolate' },
  { id: 'pastry-cheesy-ensaymada', name: 'Cheesy Ensaymada', category: 'Bread / Pastries', variant: 'Pastry', price: 135, emoji: '🧀', detail: 'Buttery brioche pastry smothered in cheese & butter cream' },

  // CAKES
  { id: 'cake-biscoff', name: 'Biscoff Cheese Cake', category: 'Cakes', variant: 'Cake', price: 250, emoji: '🍰', detail: 'Creamy cheesecake topped with Lotus Biscoff biscuit & spread' },
  { id: 'cake-blueberry', name: 'Blueberry Cheese Cake', category: 'Cakes', variant: 'Cake', price: 250, emoji: '🫐', detail: 'Classic New York style cheesecake with whole blueberry puree' },

  // DESSERTS
  { id: 'dessert-affogato', name: 'Affogato', category: 'Desserts', variant: 'Dessert', price: 160, emoji: '🍨', detail: 'Scoop of premium vanilla ice cream drowned in hot espresso' },
  { id: 'dessert-mango-scoop', name: 'Mango Vanilla Scoop', category: 'Desserts', variant: 'Dessert', price: 150, emoji: '🍨', detail: 'Ripe mango chunks paired with premium vanilla bean ice cream' },
  { id: 'dessert-strawberry-scoop', name: 'Strawberry Vanilla Scoop', category: 'Desserts', variant: 'Dessert', price: 160, emoji: '🍓', detail: 'Fresh strawberry coulis over rich vanilla gelato' }
];

// Inventory Base
const defaultInventory = [
  { id: 1, name: 'Espresso Beans (Benguet Arabica)', category: 'Coffee & tea', quantity: 5000, unit: 'g', par: 1500, cost: 0.98 },
  { id: 2, name: 'Fresh Whole Milk', category: 'Milk & dairy', quantity: 20000, unit: 'ml', par: 5000, cost: 0.095 },
  { id: 3, name: 'Barista Oat Milk', category: 'Milk & dairy', quantity: 8000, unit: 'ml', par: 2000, cost: 0.145 },
  { id: 4, name: 'Sweet Condensed Milk', category: 'Pantry', quantity: 5000, unit: 'ml', par: 1500, cost: 0.085 },
  { id: 5, name: 'Dutch Dark Cocoa / Chocolate Sauce', category: 'Pantry', quantity: 3000, unit: 'ml', par: 1000, cost: 0.15 },
  { id: 6, name: 'Ceremonial Matcha Powder', category: 'Coffee & tea', quantity: 1000, unit: 'g', par: 300, cost: 1.65 },
  { id: 7, name: 'Organic Chia Seeds', category: 'Pantry', quantity: 1500, unit: 'g', par: 500, cost: 0.12 },
  { id: 8, name: 'Honey Citron Preserve', category: 'Pantry', quantity: 3000, unit: 'g', par: 800, cost: 0.16 },
  { id: 9, name: 'Green Tea Leaves', category: 'Coffee & tea', quantity: 1000, unit: 'g', par: 300, cost: 0.90 },
  { id: 10, name: 'Chamomile Blossoms', category: 'Coffee & tea', quantity: 800, unit: 'g', par: 200, cost: 1.10 },
  { id: 11, name: 'Specialty Syrups (Vanilla, Caramel, Hazelnut)', category: 'Pantry', quantity: 4000, unit: 'ml', par: 1000, cost: 0.18 },
  { id: 12, name: 'Hot Cup (8 oz) & Lid', category: 'Packaging', quantity: 300, unit: 'pcs', par: 100, cost: 4.20 },
  { id: 13, name: 'Cold Cup (16 oz) & Sip Lid', category: 'Packaging', quantity: 400, unit: 'pcs', par: 100, cost: 5.50 },
  { id: 14, name: 'Paper Straws', category: 'Packaging', quantity: 500, unit: 'pcs', par: 100, cost: 0.75 },
  { id: 15, name: 'Chef Macaroni Portions', category: 'Food Prep', quantity: 20, unit: 'pcs', par: 8, cost: 110.00 },
  { id: 16, name: 'Chef Lasagna Portions', category: 'Food Prep', quantity: 18, unit: 'pcs', par: 8, cost: 125.00 },
  { id: 17, name: 'Sandwich Bread & Cheese Portions', category: 'Food Prep', quantity: 30, unit: 'pcs', par: 10, cost: 45.00 },
  { id: 18, name: 'Fresh Bakery / Pastry Batch', category: 'Bakery', quantity: 40, unit: 'pcs', par: 15, cost: 35.00 },
  { id: 19, name: 'Cheesecake Slices', category: 'Bakery', quantity: 16, unit: 'pcs', par: 6, cost: 95.00 },
  { id: 20, name: 'Premium Vanilla Ice Cream', category: 'Produce', quantity: 3000, unit: 'g', par: 1000, cost: 0.12 }
];

const defaultRecipes = {
  'americano-hot': [{ ingredientId: 1, qty: 18, unit: 'g' }, { ingredientId: 12, qty: 1, unit: 'pcs' }],
  'americano-iced': [{ ingredientId: 1, qty: 18, unit: 'g' }, { ingredientId: 13, qty: 1, unit: 'pcs' }, { ingredientId: 14, qty: 1, unit: 'pcs' }],
  'cafe-latte-hot': [{ ingredientId: 1, qty: 18, unit: 'g' }, { ingredientId: 2, qty: 160, unit: 'ml' }, { ingredientId: 12, qty: 1, unit: 'pcs' }],
  'cafe-latte-iced': [{ ingredientId: 1, qty: 18, unit: 'g' }, { ingredientId: 2, qty: 200, unit: 'ml' }, { ingredientId: 13, qty: 1, unit: 'pcs' }, { ingredientId: 14, qty: 1, unit: 'pcs' }],
  'spanish-latte-hot': [{ ingredientId: 1, qty: 18, unit: 'g' }, { ingredientId: 2, qty: 140, unit: 'ml' }, { ingredientId: 4, qty: 30, unit: 'ml' }, { ingredientId: 12, qty: 1, unit: 'pcs' }],
  'spanish-latte-iced': [{ ingredientId: 1, qty: 18, unit: 'g' }, { ingredientId: 2, qty: 180, unit: 'ml' }, { ingredientId: 4, qty: 30, unit: 'ml' }, { ingredientId: 13, qty: 1, unit: 'pcs' }, { ingredientId: 14, qty: 1, unit: 'pcs' }],
  'classic-matcha-iced': [{ ingredientId: 6, qty: 6, unit: 'g' }, { ingredientId: 2, qty: 200, unit: 'ml' }, { ingredientId: 13, qty: 1, unit: 'pcs' }, { ingredientId: 14, qty: 1, unit: 'pcs' }],
  'strawberry-matcha-iced': [{ ingredientId: 6, qty: 6, unit: 'g' }, { ingredientId: 2, qty: 180, unit: 'ml' }, { ingredientId: 13, qty: 1, unit: 'pcs' }, { ingredientId: 14, qty: 1, unit: 'pcs' }],
  'pasta-macaroni': [{ ingredientId: 15, qty: 1, unit: 'pcs' }],
  'pasta-lasagna': [{ ingredientId: 16, qty: 1, unit: 'pcs' }],
  'sand-egg-cheese': [{ ingredientId: 17, qty: 1, unit: 'pcs' }],
  'pastry-brownies': [{ ingredientId: 18, qty: 1, unit: 'pcs' }],
  'cake-biscoff': [{ ingredientId: 19, qty: 1, unit: 'pcs' }],
  'dessert-affogato': [{ ingredientId: 1, qty: 18, unit: 'g' }, { ingredientId: 20, qty: 80, unit: 'g' }]
};

// Storage helper with strict blank-slate baseline
const APP_STORE_VERSION = 'v6_blank_slate_baseline';

const readStore = (key, fallback) => {
  try {
    if (typeof localStorage === 'undefined') return fallback;
    if (localStorage.getItem('la-version') !== APP_STORE_VERSION) {
      localStorage.removeItem('la-menu-items');
      localStorage.removeItem('la-recipes');
      localStorage.removeItem('la-menu-groups');
      localStorage.removeItem('cg-inventory');
      localStorage.removeItem('cg-orders');
      localStorage.removeItem('la-loyalty');
      localStorage.removeItem('la-opex');
      localStorage.removeItem('la-stockin');
      localStorage.removeItem('la-pending-tickets');
      localStorage.removeItem('la-spoilage');
      localStorage.removeItem('la-promos');
      localStorage.removeItem('la-shift');
      localStorage.removeItem('la-active-cart');
      localStorage.removeItem('la-active-service');
      localStorage.removeItem('la-active-loyalty-id');
      localStorage.removeItem('la-applied-discount');
      localStorage.setItem('la-version', APP_STORE_VERSION);
    }
    const val = localStorage.getItem(key);
    return val !== null ? JSON.parse(val) : fallback;
  } catch (e) {
    return fallback;
  }
};

// State Stores
let products = readStore('la-menu-items', defaultProducts);
let menuGroups = readStore('la-menu-groups', [...new Set(defaultProducts.map(p => p.category))]);
let inventory = readStore('cg-inventory', defaultInventory);
let recipes = readStore('la-recipes', defaultRecipes);

// Orders, Financials, and Loyalty start strictly from 0
let orders = readStore('cg-orders', []);
let opexLedger = readStore('la-opex', []);
let stockInHistory = readStore('la-stockin', []);
let spoilageLedger = readStore('la-spoilage', []);
let pendingTickets = readStore('la-pending-tickets', []);
let loyaltyMembers = readStore('la-loyalty', []);

const defaultPromos = [
  { id: 'PRM-001', code: 'COFFEE10', name: '10% Off Entire Order', type: 'percentage', value: 10, minSpend: 0, maxCap: 0, active: true },
  { id: 'PRM-002', code: 'WOOD50', name: '₱50.00 Off Order', type: 'fixed', value: 50, minSpend: 0, maxCap: 0, active: true },
  { id: 'PRM-003', code: 'WELCOME20', name: '20% Welcome Voucher (Min ₱150, Max ₱100)', type: 'percentage', value: 20, minSpend: 150, maxCap: 100, active: true }
];
let promos = readStore('la-promos', defaultPromos);
let activePromoFilter = 'All';

// Mode state: 'portal', 'pos', or 'mgmt'
let currentAppMode = 'portal';
let activeCart = readStore('la-active-cart', []);
let activeService = readStore('la-active-service', 'Dine in');
let activeCategory = 'All';
let activeSubcategory = 'All';
let activeItemGroup = 'All';
let activeInventoryFilter = 'All';
let activeOrderFilter = 'all';
let activeAnalyticsRange = 'today';
let activeDashboardTab = 'sales';
let savedLoyaltyId = readStore('la-active-loyalty-id', null);
let activeLoyaltyMember = savedLoyaltyId ? (loyaltyMembers.find(m => m.id === savedLoyaltyId) || null) : null;
let appliedDiscount = readStore('la-applied-discount', { type: 'none', idType: '', idLastDigits: '', promoCode: '', promoDiscount: 0 });
let currentShift = readStore('la-shift', {
  id: 'SHIFT-' + new Date().toISOString().slice(0, 10),
  openingFloat: 1000.00,
  isOpen: true,
  startTime: '08:00 AM'
});

let toastTimer = null;
const $ = selector => typeof document !== 'undefined' ? document.querySelector(selector) : null;
const $$ = selector => typeof document !== 'undefined' ? [...document.querySelectorAll(selector)] : [];
const peso = value => '₱' + Number(value || 0).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function saveCartState() {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem('la-active-cart', JSON.stringify(activeCart));
    localStorage.setItem('la-active-service', JSON.stringify(activeService));
    localStorage.setItem('la-active-loyalty-id', JSON.stringify(activeLoyaltyMember ? activeLoyaltyMember.id : null));
    localStorage.setItem('la-applied-discount', JSON.stringify(appliedDiscount));
  } catch (e) {
    // ignore quota
  }
}

const saveAll = () => {
  if (typeof localStorage === 'undefined') return true;
  try {
    localStorage.setItem('la-menu-items', JSON.stringify(products));
    localStorage.setItem('la-menu-groups', JSON.stringify(menuGroups));
    localStorage.setItem('cg-inventory', JSON.stringify(inventory));
    localStorage.setItem('la-recipes', JSON.stringify(recipes));
    localStorage.setItem('cg-orders', JSON.stringify(orders));
    localStorage.setItem('la-loyalty', JSON.stringify(loyaltyMembers));
    localStorage.setItem('la-opex', JSON.stringify(opexLedger));
    localStorage.setItem('la-stockin', JSON.stringify(stockInHistory));
    localStorage.setItem('la-spoilage', JSON.stringify(spoilageLedger));
    localStorage.setItem('la-pending-tickets', JSON.stringify(pendingTickets));
    localStorage.setItem('la-promos', JSON.stringify(promos));
    localStorage.setItem('la-shift', JSON.stringify(currentShift));
    saveCartState();
    return true;
  } catch (e) {
    notify('Storage alert: LocalStorage quota exceeded.');
    return false;
  }
};

const escapeHTML = value => String(value || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function notify(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2800);
}

// --- Mode Management: Landing Portal vs POS vs Management ---
function setAppMode(mode, targetView = null) {
  currentAppMode = mode;
  const navPortal = $('#nav-portal');
  const navPos = $('#nav-pos');
  const navMgmt = $('#nav-mgmt');
  const modeBadge = $('#header-mode-badge');

  if (navPortal) {
    navPortal.hidden = true;
    navPortal.style.display = 'none';
  }
  if (navPos) {
    navPos.hidden = (mode !== 'pos');
    navPos.style.display = (mode === 'pos') ? 'flex' : 'none';
  }
  if (navMgmt) {
    navMgmt.hidden = (mode !== 'mgmt');
    navMgmt.style.display = (mode === 'mgmt') ? 'flex' : 'none';
  }

  if (modeBadge) {
    if (mode === 'portal') {
      modeBadge.textContent = 'Portal Home';
      modeBadge.style.background = 'var(--brick-primary)';
    } else if (mode === 'pos') {
      modeBadge.textContent = 'Barista POS Active';
      modeBadge.style.background = 'var(--accent-green)';
    } else if (mode === 'mgmt') {
      modeBadge.textContent = 'Management Portal';
      modeBadge.style.background = 'var(--wood-dark)';
    }
  }

  // Navigate to appropriate view
  if (mode === 'portal') {
    showView('portal');
  } else if (mode === 'pos') {
    showView(targetView || 'pos');
  } else if (mode === 'mgmt') {
    showView(targetView || 'analytics');
  }
}

function showView(name) {
  $$('.view').forEach(view => view.classList.toggle('active-view', view.id === name + '-view'));
  $$('.nav-link').forEach(btn => btn.classList.toggle('active', btn.dataset.view === name));
  if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });

  if (name === 'portal') renderPortalPulse();
  if (name === 'pos') { renderCategories(); renderProducts(); renderCart(); updatePendingTicketsBadge(); }
  if (name === 'orders') renderOrders();
  if (name === 'inventory') renderInventory();
  if (name === 'items') { renderItems(); renderItemGroups(); }
  if (name === 'promos') renderPromos();
  if (name === 'finance') renderFinance();
  if (name === 'analytics') renderVisualAnalytics();
  if (name === 'report') renderExecutiveReport();
  if (name === 'shift') renderShift();
}

// --- Landing Portal Pulse Numbers ---
function renderPortalPulse() {
  const todayStr = new Date().toISOString().slice(0, 10);
  const todaysOrders = orders.filter(o => o.date === todayStr && o.status === 'Completed');

  const grossSales = todaysOrders.reduce((sum, o) => sum + (o.grossTotal || o.total), 0);
  const footfall = todaysOrders.length;
  const aov = footfall > 0 ? (grossSales / footfall) : 0;
  const cogs = todaysOrders.reduce((sum, o) => sum + (o.cogs || 0), 0);
  const compGoodwill = todaysOrders.reduce((sum, o) => sum + (o.complimentaryCost || 0), 0);
  const spoilageToday = spoilageLedger.filter(s => s.date === todayStr).reduce((sum, s) => sum + (s.totalCost || 0), 0);
  const wastedToday = orders.filter(o => o.date === todayStr && o.status === 'Waste / Lugi').reduce((sum, o) => sum + (o.cogs || 0), 0);
  const opexToday = opexLedger.filter(op => op.date === todayStr).reduce((sum, op) => sum + op.amount, 0);
  const netProfit = grossSales - cogs - compGoodwill - spoilageToday - wastedToday - opexToday;

  if ($('#portal-gross-sales')) $('#portal-gross-sales').textContent = peso(grossSales);
  if ($('#portal-order-count')) $('#portal-order-count').textContent = `${footfall} orders today`;
  if ($('#portal-footfall')) $('#portal-footfall').textContent = footfall;
  if ($('#portal-aov')) $('#portal-aov').textContent = peso(aov);
  if ($('#portal-net-profit')) $('#portal-net-profit').textContent = peso(netProfit);
}

// --- COGS & Inventory Engine ---
function getIngredientCost(ingredientId) {
  const ing = inventory.find(i => i.id === Number(ingredientId));
  return ing ? ing.cost : 0;
}

function calculateProductCOGS(productOrId, mods = {}) {
  const productId = typeof productOrId === 'object' && productOrId !== null ? productOrId.id : productOrId;
  const recipe = recipes[productId] || [];
  let totalCOGS = 0;

  recipe.forEach(item => {
    const unitCost = getIngredientCost(item.ingredientId);
    let qty = item.qty;
    if (item.ingredientId === 2 && mods.milk === 'Oat milk') return;
    totalCOGS += qty * unitCost;
  });

  if (mods.milk === 'Oat milk') totalCOGS += 200 * getIngredientCost(3);
  if (mods.addons?.includes('Chia seed')) totalCOGS += 15 * getIngredientCost(7);
  if (mods.addons?.includes('Extra shot')) totalCOGS += 18 * getIngredientCost(1);
  if (mods.syrup && mods.syrup.length) totalCOGS += mods.syrup.length * 20 * getIngredientCost(11);

  return Math.round(totalCOGS * 100) / 100;
}

function deductInventoryForCart(cartList) {
  cartList.forEach(cartItem => {
    const recipe = recipes[cartItem.id] || [];
    const count = cartItem.qty;

    recipe.forEach(r => {
      let targetIngId = r.ingredientId;
      if (targetIngId === 2 && cartItem.mods?.milk === 'Oat milk') targetIngId = 3;

      const ing = inventory.find(i => i.id === targetIngId);
      if (ing) {
        ing.quantity = Math.max(0, ing.quantity - (r.qty * count));
      }
    });

    if (cartItem.mods?.addons?.includes('Chia seed')) {
      const chia = inventory.find(i => i.id === 7);
      if (chia) chia.quantity = Math.max(0, chia.quantity - (15 * count));
    }
    if (cartItem.mods?.addons?.includes('Extra shot')) {
      const beans = inventory.find(i => i.id === 1);
      if (beans) beans.quantity = Math.max(0, beans.quantity - (18 * count));
    }
    if (cartItem.mods?.syrup?.length) {
      const syrup = inventory.find(i => i.id === 11);
      if (syrup) syrup.quantity = Math.max(0, syrup.quantity - (20 * cartItem.mods.syrup.length * count));
    }
  });
  saveAll();
}

function restoreInventoryForOrder(order) {
  if (!order.cartSnapshot || !Array.isArray(order.cartSnapshot)) return;
  order.cartSnapshot.forEach(cartItem => {
    const recipe = recipes[cartItem.id] || [];
    const count = cartItem.qty;

    recipe.forEach(r => {
      let targetIngId = r.ingredientId;
      if (targetIngId === 2 && cartItem.mods?.milk === 'Oat milk') targetIngId = 3;

      const ing = inventory.find(i => i.id === targetIngId);
      if (ing) {
        ing.quantity += (r.qty * count);
      }
    });

    if (cartItem.mods?.addons?.includes('Chia seed')) {
      const chia = inventory.find(i => i.id === 7);
      if (chia) chia.quantity += (15 * count);
    }
    if (cartItem.mods?.addons?.includes('Extra shot')) {
      const beans = inventory.find(i => i.id === 1);
      if (beans) beans.quantity += (18 * count);
    }
    if (cartItem.mods?.syrup?.length) {
      const syrup = inventory.find(i => i.id === 11);
      if (syrup) syrup.quantity += (20 * cartItem.mods.syrup.length * count);
    }
  });
  saveAll();
}

// --- Barista POS: Categories & Dynamic Subcategories ---
function renderCategories() {
  const cats = ['All', ...new Set(products.map(p => p.category))];
  if (activeCategory !== 'All' && !cats.includes(activeCategory)) activeCategory = 'All';

  const catContainer = $('#category-tabs');
  if (!catContainer) return;

  catContainer.innerHTML = cats.map(cat => `
    <button class="category-tab ${activeCategory === cat ? 'selected' : ''}" data-category="${escapeHTML(cat)}">
      ${escapeHTML(cat)}
    </button>
  `).join('');

  $$('#category-tabs .category-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      activeSubcategory = 'All';
      renderCategories();
      renderSubcategories();
      renderProducts();
    });
  });

  renderSubcategories();
}

function getDefaultMods(product) {
  if (product.category === 'Coffee-Based') {
    return { roast: 'Harmonie (Smooth)', milk: 'Whole milk', addons: [], syrup: [] };
  } else if (['Chocolate', 'Matcha', 'Tea-Based'].includes(product.category)) {
    return { roast: 'None', milk: 'Whole milk', addons: [], syrup: [] };
  }
  return { roast: 'None', milk: 'None', addons: [], syrup: [] };
}

function renderSubcategories() {
  const subContainer = $('#subcategory-tabs');
  if (!subContainer) return;

  const relevantProducts = products.filter(p => activeCategory === 'All' || p.category === activeCategory);
  const variants = [...new Set(relevantProducts.map(p => p.variant).filter(Boolean))];

  // Only show when >= 2 distinct variants exist (e.g. Hot & Iced under Coffee-Based, or across All menu items)
  if (activeCategory !== 'All' && variants.length < 2) {
    subContainer.hidden = true;
    subContainer.style.display = 'none';
    activeSubcategory = 'All';
    return;
  }

  subContainer.hidden = false;
  subContainer.style.display = 'flex';

  let options = [];
  if (activeCategory === 'All') {
    const defaultAllVariants = ['All', 'Hot', 'Iced', 'Pastry', 'Special', 'Sandwich', 'Cake', 'Dessert'];
    options = defaultAllVariants.filter(opt => opt === 'All' || variants.includes(opt));
  } else {
    options = ['All', ...variants];
  }

  if (!options.includes(activeSubcategory)) activeSubcategory = 'All';

  subContainer.innerHTML = options.map(v => {
    let icon = '';
    let label = v;
    if (v === 'All') label = activeCategory === 'All' ? 'All Variants' : `All ${activeCategory}`;
    if (v === 'Hot') { label = 'Hot (8 oz)'; }
    if (v === 'Iced') { label = 'Iced (16 oz)'; }
    if (v === 'Special') { label = "Chef's Specials"; }
    if (v === 'Sandwich') { label = 'Sandwiches'; }
    if (v === 'Pastry') { label = 'Pastries'; }
    if (v === 'Cake') { label = 'Cakes'; }
    if (v === 'Dessert') { label = 'Desserts'; }

    return `
      <button type="button" class="sub-tab ${activeSubcategory === v ? 'selected' : ''}" data-sub="${escapeHTML(v)}">
        ${icon}${escapeHTML(label)}
      </button>
    `;
  }).join('');

  $$('#subcategory-tabs .sub-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSubcategory = btn.dataset.sub;
      $$('#subcategory-tabs .sub-tab').forEach(b => b.classList.toggle('selected', b === btn));
      renderProducts();
    });
  });
}

// --- UI-only helpers: presentation of menu items (no business logic) ---
function uiSlug(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// "Café Latte (Hot 8 oz)" -> { title: "Café Latte", size: "8 oz" }
function splitProductName(name) {
  const match = String(name || '').match(/^(.*?)\s*\((?:Hot|Iced)\s*([^)]*)\)\s*$/i);
  if (!match) return { title: name, size: '' };
  return { title: match[1], size: match[2].trim() };
}

function productKind(p) {
  const v = String(p.variant || '').toLowerCase();
  if (v === 'hot') return 'hot';
  if (v === 'iced') return 'iced';
  if (v === 'pastry') return 'pastry';
  if (v === 'cake' || v === 'dessert') return 'cake';
  if (v === 'sandwich') return 'sandwich';
  if (v === 'special') return 'bowl';
  return 'other';
}

function productIllustration(p) {
  if (p.customIcon) {
    return p.emoji
      ? `<span class="product-emoji" aria-hidden="true">${escapeHTML(p.emoji)}</span>`
      : '';
  }

  const art = {
    hot: `
      <path class="art-steam" d="M52 22c-5 6 5 9 0 15M66 18c-5 6 5 9 0 15"/>
      <ellipse class="art-plate" cx="60" cy="86" rx="36" ry="6"/>
      <path class="art-handle" d="M85 52h5a9 9 0 0 1 0 18h-7"/>
      <path class="art-vessel" d="M34 46h52v14a24 24 0 0 1-24 24h-4a24 24 0 0 1-24-24V46Z"/>
      <ellipse class="art-liquid" cx="60" cy="46" rx="26" ry="5"/>
      <ellipse class="art-foam" cx="60" cy="46" rx="12" ry="2.2"/>`,
    iced: `
      <path class="art-straw" d="M69 6 62 40"/>
      <path class="art-glass" d="M40 28h40l-5.2 62H45.2Z"/>
      <path class="art-liquid" d="M42 50h36l-3.4 38H45.4Z"/>
      <path class="art-milk" d="M41.4 42h37.2l-.6 8H42Z"/>
      <rect class="art-ice" x="47" y="36" width="11" height="11" rx="2.5" transform="rotate(-14 52.5 41.5)"/>
      <rect class="art-ice" x="61" y="40" width="10" height="10" rx="2.5" transform="rotate(12 66 45)"/>
      <path class="art-rim" d="M38 28h44"/>`,
    pastry: `
      <ellipse class="art-plate" cx="60" cy="84" rx="40" ry="6"/>
      <path class="art-food" d="M20 72c5-24 25-38 40-38s35 14 40 38c-9 5-18 2-24-5-5 6-10 9-16 9s-11-3-16-9c-6 7-15 10-24 5Z"/>
      <path class="art-detail" d="M46 42l6 30M74 42l-6 30M60 35v40"/>`,
    cake: `
      <ellipse class="art-plate" cx="60" cy="84" rx="40" ry="6"/>
      <path class="art-food" d="M26 78V52l68-18v44Z"/>
      <path class="art-cream" d="M26 52l68-18v9L26 61Z"/>
      <path class="art-cream" d="M26 68l68-10v5L26 73Z"/>
      <circle class="art-berry" cx="72" cy="32" r="6"/>`,
    sandwich: `
      <ellipse class="art-plate" cx="60" cy="84" rx="40" ry="6"/>
      <path class="art-food" d="M22 78 58 30l36 48Z"/>
      <path class="art-fill" d="M30 70h56"/>
      <path class="art-cream" d="M34 64h48l-3-4H37Z"/>`,
    bowl: `
      <path class="art-steam" d="M50 18c-5 6 5 9 0 15M66 14c-5 6 5 9 0 15"/>
      <path class="art-food" d="M30 50c4-10 14-12 20-6 6-8 18-8 22 0 6-6 16-2 18 6Z"/>
      <path class="art-vessel" d="M22 50h76a38 32 0 0 1-76 0Z"/>
      <path class="art-detail" d="M40 46c4-6 10 2 14-3s10 2 14-2 8 2 10 4"/>`,
  }[productKind(p)];

  if (!art) return `<span class="product-emoji" aria-hidden="true">${escapeHTML(p.emoji || '☕')}</span>`;
  return `<svg class="product-svg" viewBox="0 0 120 100" aria-hidden="true">${art}</svg>`;
}

function renderProducts() {
  const searchEl = $('#menu-search');
  const query = searchEl ? searchEl.value.trim().toLowerCase() : '';

  const filtered = products.filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSub = activeSubcategory === 'All' || p.variant === activeSubcategory;
    const matchesQuery = `${p.name} ${p.category} ${p.detail || ''}`.toLowerCase().includes(query);
    return matchesCat && matchesSub && matchesQuery;
  });

  const grid = $('#product-grid');
  if (!grid) return;

  grid.innerHTML = filtered.length ? filtered.map(p => {
    const { title, size } = splitProductName(p.name);
    const badge = [p.variant, size].filter(Boolean).join(' · ') || 'Standard';
    return `
    <div class="product-card" data-product-id="${escapeHTML(p.id)}" role="button" tabindex="0" aria-label="Add ${escapeHTML(p.name)}, ${peso(p.price)}">
      <div class="product-art" data-cat="${escapeHTML(uiSlug(p.category))}" data-kind="${escapeHTML(productKind(p))}">
        ${p.image ? `<img class="product-image" src="${escapeHTML(p.image)}" alt="">` : productIllustration(p)}
        <span class="product-badge">${escapeHTML(badge)}</span>
      </div>
      <div class="product-copy">
        <strong>${escapeHTML(title)}</strong>
        <span class="product-detail">${escapeHTML(p.detail || '')}</span>
        <span class="product-foot">
          <b class="product-price">${peso(p.price)}</b>
          <span class="product-add" aria-hidden="true">+</span>
        </span>
      </div>
    </div>
  `;
  }).join('') : `
    <div class="no-results">
      <strong>${query ? `Nothing matches “${escapeHTML(query)}”` : 'No items here yet'}</strong>
      <span>${query ? 'Try another word, or pick a different category.' : 'Add items to this group from Back office → Menu &amp; recipes.'}</span>
    </div>`;

  $$('#product-grid .product-card').forEach(card => {
    const pid = card.dataset.productId;
    const product = products.find(p => p.id === pid);
    if (!product) return;

    // Single click / tap opens the customization/modifier interface
    card.addEventListener('click', () => {
      openModifierModal(product);
    });

    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModifierModal(product);
      }
    });
  });
}

function openModifierModal(product) {
  $('#mod-item-name').textContent = product.name;
  $('#mod-item-price').textContent = `Base: ${peso(product.price)}`;
  $('#mod-item-id').value = product.id;
  $('#modifier-form').reset();

  const isBeverage = ['Coffee-Based', 'Chocolate', 'Matcha', 'Tea-Based'].includes(product.category);
  const bevSec = $('#mod-beverage-sections');
  const foodSec = $('#mod-food-sections');
  const roastSec = $('#mod-roast-section');

  if (bevSec) bevSec.hidden = !isBeverage;
  if (foodSec) foodSec.hidden = isBeverage;
  if (roastSec) roastSec.hidden = (product.category !== 'Coffee-Based');

  updateModModalTotal(product.price);
  $('#modifier-dialog').showModal();
}

function updateModModalTotal(basePrice) {
  let extra = 0;
  const milk = $('#modifier-form input[name="milk"]:checked')?.value;
  if (milk === 'Oat milk') extra += 40;

  const addons = $$('#modifier-form input[name="addons"]:checked');
  addons.forEach(cb => {
    if (cb.value === 'Chia seed') extra += 20;
    if (cb.value === 'Extra shot') extra += 40;
  });

  const syrups = $$('#modifier-form input[name="syrup"]:checked');
  extra += syrups.length * 20;

  $('#mod-total-btn').textContent = peso(basePrice + extra);
}

function addToCart(product, mods = {}, modifierPrice = 0) {
  const itemTotal = product.price + modifierPrice;
  const modSignature = JSON.stringify(mods);
  const existing = activeCart.find(item => item.id === product.id && JSON.stringify(item.mods) === modSignature);

  if (existing) {
    existing.qty += 1;
  } else {
    activeCart.push({
      cartItemId: 'c-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      id: product.id,
      name: product.name,
      basePrice: product.price,
      price: itemTotal,
      qty: 1,
      mods
    });
  }
  renderCart();
}

const DRINK_CATEGORIES = ['Coffee-Based', 'Chocolate', 'Matcha', 'Tea-Based'];

function getEligibleDrinkInCart(cart = activeCart) {
  if (!Array.isArray(cart) || cart.length === 0) return null;
  const prodList = (typeof products !== 'undefined' && products.length) ? products : defaultProducts;
  const drinks = cart.filter(item => {
    const prod = prodList.find(p => p.id === item.id);
    return prod && DRINK_CATEGORIES.includes(prod.category) && !item.isComp;
  });
  if (!drinks.length) return null;
  return drinks.slice().sort((a, b) => b.price - a.price)[0];
}

function renderCart() {
  // If loyalty free drink promo is active, ensure it accurately reflects eligible drink in cart
  if (appliedDiscount.promoCode === 'LOYALTY_FREE_DRINK') {
    const eligibleDrink = getEligibleDrinkInCart();
    if (eligibleDrink) {
      appliedDiscount.promoDiscount = eligibleDrink.price;
    } else {
      appliedDiscount.promoDiscount = 0;
    }
  }

  const totalCount = activeCart.reduce((sum, item) => sum + item.qty, 0);
  const grossSubtotal = activeCart.reduce((sum, item) => sum + ((item.isComp ? 0 : item.price) * item.qty), 0);

  if ($('#cart-count')) $('#cart-count').textContent = totalCount;
  if ($('#service-label')) $('#service-label').textContent = activeService;
  if ($('#checkout-button')) $('#checkout-button').disabled = totalCount === 0;

  const itemsContainer = $('#cart-items');
  if (!itemsContainer) return;

  if (totalCount === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-cart">
        <svg class="empty-icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M10 18h24v8a12 12 0 0 1-12 12h0a12 12 0 0 1-12-12v-8Z"/><path d="M34 21h2a5 5 0 0 1 0 10h-3"/><path d="M18 8c-2 3 2 4 0 7M25 6c-2 3 2 4 0 7"/></svg>
        <strong>Order is empty</strong>
        <p>Tap a drink or food item to start.</p>
      </div>
    `;
  } else {
    itemsContainer.innerHTML = activeCart.map(item => {
      const modLabels = [];
      if (item.mods.roast && item.mods.roast !== 'None') modLabels.push(item.mods.roast);
      if (item.mods.milk && item.mods.milk !== 'None' && item.mods.milk !== 'Whole milk') modLabels.push(item.mods.milk);
      if (item.mods.addons && item.mods.addons.length) modLabels.push(...item.mods.addons.map(a => `+${a}`));
      if (item.mods.syrup && item.mods.syrup.length) modLabels.push(...item.mods.syrup.map(s => `+${s.replace(' syrup', '')}`));

      const canEditMods = ['Coffee-Based', 'Chocolate', 'Matcha', 'Tea-Based'].includes(products.find(p => p.id === item.id)?.category);
      return `
        <div class="cart-item ${item.isComp ? 'cart-item-comp' : ''}">
          <div class="cart-item-info">
            <div class="cart-item-title">
              <strong>${escapeHTML(item.name)}</strong>
              ${item.isComp ? '<span class="comp-badge">Comp</span>' : ''}
            </div>
            ${modLabels.length ? `<span class="cart-item-mods">${escapeHTML(modLabels.join(' · '))}</span>` : ''}
            <div class="cart-item-actions">
              <small>${item.isComp ? 'On the house' : `${peso(item.price)} each`}</small>
              ${canEditMods ? `<button type="button" class="cart-mod-btn" data-edit-mods="${item.cartItemId}" title="Change milk, roast or add-ons">Edit</button>` : ''}
              <button type="button" class="cart-comp-btn ${item.isComp ? 'active' : ''}" data-comp-item="${item.cartItemId}" aria-pressed="${item.isComp ? 'true' : 'false'}" title="Give this item for free">Comp</button>
            </div>
          </div>
          <div class="cart-item-side">
            <span class="cart-line-total">${item.isComp ? '₱0.00' : peso(item.price * item.qty)}</span>
            <div class="qty-controls">
              <button class="cart-qty-btn" data-cart-item="${item.cartItemId}" data-step="-1" aria-label="Remove one ${escapeHTML(item.name)}">−</button>
              <span aria-live="polite">${item.qty}</span>
              <button class="cart-qty-btn" data-cart-item="${item.cartItemId}" data-step="1" aria-label="Add one more ${escapeHTML(item.name)}">+</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    $$('[data-comp-item]').forEach(btn => {
      btn.addEventListener('click', () => {
        const cId = btn.dataset.compItem;
        const item = activeCart.find(i => i.cartItemId === cId);
        if (!item) return;
        item.isComp = !item.isComp;
        renderCart();
      });
    });

    $$('[data-edit-mods]').forEach(btn => {
      btn.addEventListener('click', () => {
        const cId = btn.dataset.editMods;
        const item = activeCart.find(i => i.cartItemId === cId);
        if (!item) return;
        const product = products.find(p => p.id === item.id);
        if (product) openModifierModal(product);
      });
    });

    $$('.cart-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cId = btn.dataset.cartItem;
        const step = Number(btn.dataset.step);
        const item = activeCart.find(i => i.cartItemId === cId);
        if (!item) return;

        item.qty += step;
        if (item.qty <= 0) {
          if (item.isLoyaltyReward && activeLoyaltyMember) {
            activeLoyaltyMember.stamps += 12;
            activeLoyaltyMember.history.push({
              date: new Date().toISOString().slice(0, 10),
              type: 'refund',
              stamps: 12,
              note: `Removed free drink (${item.name}) — 12 stamps refunded`
            });
            notify(`Removed free drink. 12 stamps refunded to ${activeLoyaltyMember.name}.`);
            saveAll();
            updateLoyaltyCustomerDisplay();
          }
          activeCart = activeCart.filter(i => i.cartItemId !== cId);
        }
        renderCart();
      });
    });
  }

  // Statutory Discounts & Taxes
  const discountSelect = $('#discount-type-select');
  const discountType = discountSelect ? discountSelect.value : 'none';
  let discountAmount = 0;
  let vatableSales = 0;
  let vatAmount = 0;
  let vatExemptSales = 0;
  let totalPayable = grossSubtotal;

  if (discountType === 'pwd' || discountType === 'senior') {
    const netOfVat = grossSubtotal / 1.12;
    discountAmount = netOfVat * 0.20;
    totalPayable = netOfVat * 0.80;
    vatExemptSales = grossSubtotal;
    vatableSales = 0;
    vatAmount = 0;

    $('#discount-display-row').hidden = false;
    $('#discount-label').textContent = discountType === 'senior' ? 'Senior 20% + VAT Ex.' : 'PWD 20% + VAT Ex.';
    $('#vat-exempt-row').hidden = false;
  } else if (discountType === 'promo') {
    discountAmount = appliedDiscount.promoDiscount;
    totalPayable = Math.max(0, grossSubtotal - discountAmount);
    vatableSales = totalPayable / 1.12;
    vatAmount = totalPayable - vatableSales;
    vatExemptSales = 0;

    $('#discount-display-row').hidden = false;
    $('#discount-label').textContent = `Promo (${appliedDiscount.promoCode || 'Applied'})`;
    $('#vat-exempt-row').hidden = true;
  } else {
    vatableSales = grossSubtotal / 1.12;
    vatAmount = grossSubtotal - vatableSales;
    vatExemptSales = 0;
    totalPayable = grossSubtotal;

    $('#discount-display-row').hidden = true;
    $('#vat-exempt-row').hidden = true;
  }

  $('#subtotal').textContent = peso(grossSubtotal);
  $('#discount-amount').textContent = `-${peso(discountAmount)}`;
  $('#vatable-sales').textContent = peso(vatableSales);
  $('#tax').textContent = peso(vatAmount);
  $('#vat-exempt-sales').textContent = peso(vatExemptSales);
  $('#cart-total').textContent = peso(totalPayable);

  appliedDiscount.computed = {
    grossSubtotal,
    discountAmount,
    vatableSales,
    vatAmount,
    vatExemptSales,
    totalPayable
  };

  saveCartState();
}

// --- Visual Analytics Dashboard (SVG Charts from References 1 & 2) ---
function getFilterDateRange(rangeType) {
  const now = new Date();
  const start = new Date(now);
  const end = new Date(now);

  if (rangeType === 'today') {
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
  } else if (rangeType === 'week') {
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    start.setDate(diff);
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
  } else if (rangeType === 'month') {
    start.setDate(1);
    start.setHours(0, 0, 0, 0);
    end.setMonth(now.getMonth() + 1, 0);
    end.setHours(23, 59, 59, 999);
  } else if (rangeType === 'quarter') {
    const currentQ = Math.floor(now.getMonth() / 3);
    start.setMonth(currentQ * 3, 1);
    start.setHours(0, 0, 0, 0);
    end.setMonth((currentQ + 1) * 3, 0);
    end.setHours(23, 59, 59, 999);
  } else if (rangeType === 'sixths') {
    const isFirstHalf = now.getMonth() < 6;
    start.setMonth(isFirstHalf ? 0 : 6, 1);
    start.setHours(0, 0, 0, 0);
    end.setMonth(isFirstHalf ? 5 : 11, 30);
    end.setHours(23, 59, 59, 999);
  } else if (rangeType === 'year') {
    start.setMonth(0, 1);
    start.setHours(0, 0, 0, 0);
    end.setMonth(11, 31);
    end.setHours(23, 59, 59, 999);
  } else if (rangeType === 'custom') {
    const startVal = $('#custom-start-date')?.value;
    const endVal = $('#custom-end-date')?.value;
    if (startVal && endVal) {
      return { start: new Date(startVal + 'T00:00:00'), end: new Date(endVal + 'T23:59:59') };
    }
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
  }

  return { start, end };
}

function renderVisualAnalytics() {
  const { start, end } = getFilterDateRange(activeAnalyticsRange);

  const windowOrders = orders.filter(o => {
    if (o.status !== 'Completed') return false;
    const oDate = new Date(o.timestamp || o.date);
    return oDate >= start && oDate <= end;
  });

  const totalRevenue = windowOrders.reduce((sum, o) => sum + o.total, 0);
  const totalOrders = windowOrders.length;
  const aov = totalOrders > 0 ? (totalRevenue / totalOrders) : 0;
  const totalCOGS = windowOrders.reduce((sum, o) => sum + (o.cogs || 0), 0);
  const totalWindowGoodwill = windowOrders.reduce((sum, o) => sum + (o.complimentaryCost || 0), 0);

  const windowSpoilage = spoilageLedger.filter(s => {
    const sDate = new Date(s.timestamp || s.date);
    return sDate >= start && sDate <= end;
  });
  const windowSpoilageLoss = windowSpoilage.reduce((sum, s) => sum + (s.totalCost || 0), 0);
  const windowWastedOrders = orders.filter(o => {
    if (o.status !== 'Waste / Lugi') return false;
    const oDate = new Date(o.timestamp || o.date);
    return oDate >= start && oDate <= end;
  });
  const windowWasteLoss = windowWastedOrders.reduce((sum, o) => sum + (o.cogs || 0), 0);
  const totalWindowWaste = windowSpoilageLoss + windowWasteLoss;

  let windowCompCount = 0;
  windowOrders.forEach(o => {
    (o.cartSnapshot || []).forEach(item => {
      if (item.isComp) windowCompCount += item.qty;
    });
  });

  const netProfit = totalRevenue - totalCOGS - totalWindowGoodwill - totalWindowWaste;

  if ($('#an-revenue')) $('#an-revenue').textContent = peso(totalRevenue);
  if ($('#an-orders')) $('#an-orders').textContent = totalOrders;
  if ($('#an-aov')) $('#an-aov').textContent = peso(aov);
  if ($('#an-net-profit')) $('#an-net-profit').textContent = peso(netProfit);
  if ($('#an-waste-loss')) $('#an-waste-loss').textContent = peso(totalWindowWaste);
  if ($('#an-waste-delta')) $('#an-waste-delta').textContent = `${windowSpoilage.length + windowWastedOrders.length} waste events`;
  if ($('#an-goodwill-cost')) $('#an-goodwill-cost').textContent = peso(totalWindowGoodwill);
  if ($('#an-goodwill-delta')) $('#an-goodwill-delta').textContent = `${windowCompCount} comp items`;

  if ($('#an-revenue-delta')) $('#an-revenue-delta').textContent = totalOrders === 0 ? '₱0.00 baseline' : `${peso(totalRevenue)} revenue`;
  if ($('#an-orders-delta')) $('#an-orders-delta').textContent = totalOrders === 0 ? '0 orders recorded' : `${totalOrders} orders`;
  if ($('#an-aov-delta')) $('#an-aov-delta').textContent = totalOrders === 0 ? '₱0.00 baseline' : `${peso(aov)} avg bill`;
  if ($('#an-profit-delta')) $('#an-profit-delta').textContent = totalOrders === 0 ? '₱0.00 baseline' : `${peso(netProfit)} net margin`;

  // 1. Chart 1: Hourly Trading Volume Curve (SVG)
  const hourBuckets = {};
  for (let h = 7; h <= 21; h++) hourBuckets[h] = { orders: 0, revenue: 0 };
  windowOrders.forEach(o => {
    const oDate = new Date(o.timestamp || o.date);
    const h = oDate.getHours();
    if (hourBuckets[h]) {
      hourBuckets[h].orders += 1;
      hourBuckets[h].revenue += o.total;
    }
  });

  const maxOrders = Math.max(1, ...Object.values(hourBuckets).map(b => b.orders));
  const svgChart = $('#svg-hourly-chart');
  const hourlyEmpty = $('#chart-hourly-empty');

  if (totalOrders === 0) {
    if (svgChart) svgChart.innerHTML = '';
    if (hourlyEmpty) hourlyEmpty.hidden = false;
  } else {
    if (hourlyEmpty) hourlyEmpty.hidden = true;
    const hours = Object.keys(hourBuckets).map(Number);
    const points = hours.map((h, idx) => {
      const x = 30 + idx * ((600 - 60) / (hours.length - 1));
      const y = 190 - (hourBuckets[h].orders / maxOrders) * 150;
      return { x, y, count: hourBuckets[h].orders, hour: h };
    });

    const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    const areaD = `${pathD} L ${points[points.length - 1].x} 190 L ${points[0].x} 190 Z`;

    if (svgChart) {
      svgChart.innerHTML = `
        <defs>
          <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#b85333" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#b85333" stop-opacity="0.0"/>
          </linearGradient>
        </defs>
        <!-- Horizontal gridlines -->
        <line x1="30" y1="190" x2="570" y2="190" stroke="#ddd" stroke-width="1"/>
        <line x1="30" y1="115" x2="570" y2="115" stroke="#eee" stroke-dasharray="4" stroke-width="1"/>
        <line x1="30" y1="40" x2="570" y2="40" stroke="#eee" stroke-dasharray="4" stroke-width="1"/>
        <!-- Area fill -->
        <path d="${areaD}" fill="url(#curveGradient)" />
        <!-- Curve line -->
        <path d="${pathD}" fill="none" stroke="#b85333" stroke-width="3" stroke-linecap="round"/>
        <!-- Dots and labels -->
        ${points.map(p => `
          <circle cx="${p.x}" cy="${p.y}" r="4" fill="#2c1a11" stroke="#fff" stroke-width="2"/>
          <text x="${p.x}" y="208" font-size="9" text-anchor="middle" fill="#666">${p.hour > 12 ? p.hour - 12 + 'p' : p.hour + 'a'}</text>
          ${p.count > 0 ? `<text x="${p.x}" y="${p.y - 8}" font-size="10" font-weight="bold" text-anchor="middle" fill="#b85333">${p.count}</text>` : ''}
        `).join('')}
      `;
    }
  }

  // 2. Chart 2: Category % Distribution
  const catSales = {};
  windowOrders.forEach(o => {
    (o.cartSnapshot || []).forEach(item => {
      const prod = products.find(p => p.id === item.id);
      const cat = prod?.category || 'Coffee-Based';
      catSales[cat] = (catSales[cat] || 0) + (item.price * item.qty);
    });
  });

  const catBarsList = $('#category-bars-list');
  const catEmpty = $('#chart-category-empty');
  if (totalOrders === 0) {
    if (catBarsList) catBarsList.innerHTML = '';
    if (catEmpty) catEmpty.hidden = false;
  } else {
    if (catEmpty) catEmpty.hidden = true;
    const sortedCats = Object.entries(catSales).sort((a, b) => b[1] - a[1]);
    if (catBarsList) {
      catBarsList.innerHTML = sortedCats.map(([cat, rev]) => {
        const share = totalRevenue > 0 ? ((rev / totalRevenue) * 100).toFixed(1) : '0';
        return `
          <div class="cat-bar-item">
            <div class="cat-bar-header">
              <span>${escapeHTML(cat)}</span>
              <span><strong>${peso(rev)}</strong> (${share}%)</span>
            </div>
            <div class="cat-bar-track">
              <div class="cat-bar-fill" style="width: ${share}%;"></div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 3. Chart 3: Size & Temperature Distribution (Hot vs Iced vs Food)
  let hotCount = 0, icedCount = 0, foodCount = 0;
  windowOrders.forEach(o => {
    (o.cartSnapshot || []).forEach(item => {
      const prod = products.find(p => p.id === item.id);
      if (prod?.variant === 'Hot') hotCount += item.qty;
      else if (prod?.variant === 'Iced') icedCount += item.qty;
      else foodCount += item.qty;
    });
  });

  const totalServings = hotCount + icedCount + foodCount;
  const donutSvg = $('#svg-size-donut');
  const legendContainer = $('#size-legend-container');
  const sizeEmpty = $('#chart-size-empty');

  if (totalServings === 0) {
    if (donutSvg) donutSvg.innerHTML = '';
    if (legendContainer) legendContainer.innerHTML = '';
    if (sizeEmpty) sizeEmpty.hidden = false;
  } else {
    if (sizeEmpty) sizeEmpty.hidden = true;
    const hotPct = Math.round((hotCount / totalServings) * 100);
    const icedPct = Math.round((icedCount / totalServings) * 100);
    const foodPct = Math.max(0, 100 - hotPct - icedPct);

    // SVG stroke-dasharray donut calculation
    const circumference = 2 * Math.PI * 40; // r=40 -> ~251.3
    const hotDash = (hotPct / 100) * circumference;
    const icedDash = (icedPct / 100) * circumference;
    const foodDash = (foodPct / 100) * circumference;

    if (donutSvg) {
      donutSvg.innerHTML = `
        <circle cx="80" cy="80" r="40" fill="transparent" stroke="#ddd" stroke-width="20"/>
        <!-- Hot Segment -->
        <circle cx="80" cy="80" r="40" fill="transparent" stroke="#b85333" stroke-width="20"
                stroke-dasharray="${hotDash} ${circumference}" stroke-dashoffset="0" transform="rotate(-90 80 80)"/>
        <!-- Iced Segment -->
        <circle cx="80" cy="80" r="40" fill="transparent" stroke="#2c1a11" stroke-width="20"
                stroke-dasharray="${icedDash} ${circumference}" stroke-dashoffset="-${hotDash}" transform="rotate(-90 80 80)"/>
        <!-- Food Segment -->
        <circle cx="80" cy="80" r="40" fill="transparent" stroke="#2d6a4f" stroke-width="20"
                stroke-dasharray="${foodDash} ${circumference}" stroke-dashoffset="-${hotDash + icedDash}" transform="rotate(-90 80 80)"/>
        <text x="80" y="85" text-anchor="middle" font-size="14" font-weight="bold" fill="#2c1a11">${totalServings}</text>
        <text x="80" y="98" text-anchor="middle" font-size="9" fill="#777">Items</text>
      `;
    }

    if (legendContainer) {
      legendContainer.innerHTML = `
        <div class="size-legend-item"><span class="legend-dot" style="background:#b85333;"></span><span>Hot 8 oz: <strong>${hotPct}%</strong> (${hotCount})</span></div>
        <div class="size-legend-item"><span class="legend-dot" style="background:#2c1a11;"></span><span>Iced 16 oz: <strong>${icedPct}%</strong> (${icedCount})</span></div>
        <div class="size-legend-item"><span class="legend-dot" style="background:#2d6a4f;"></span><span>Food / Pastry: <strong>${foodPct}%</strong> (${foodCount})</span></div>
      `;
    }
  }

  // 4. Chart 4: Top 5 Products Bar Chart
  const productSales = {};
  windowOrders.forEach(o => {
    (o.cartSnapshot || []).forEach(item => {
      if (!productSales[item.id]) {
        productSales[item.id] = { name: item.name, qty: 0, revenue: 0 };
      }
      productSales[item.id].qty += item.qty;
      productSales[item.id].revenue += item.price * item.qty;
    });
  });

  const sortedProducts = Object.values(productSales).sort((a, b) => b.qty - a.qty);
  const top5 = sortedProducts.slice(0, 5);
  const top5Container = $('#top5-bars-list');
  const top5Empty = $('#chart-top5-empty');

  if (top5.length === 0) {
    if (top5Container) top5Container.innerHTML = '';
    if (top5Empty) top5Empty.hidden = false;
  } else {
    if (top5Empty) top5Empty.hidden = true;
    const maxTopQty = top5[0].qty;
    if (top5Container) {
      top5Container.innerHTML = top5.map(p => {
        const barWidth = Math.round((p.qty / maxTopQty) * 100);
        return `
          <div class="top5-item">
            <div class="top5-header">
              <span><strong>${escapeHTML(p.name)}</strong> (${p.qty} sold)</span>
              <span>${peso(p.revenue)}</span>
            </div>
            <div class="top5-track">
              <div class="top5-fill" style="width: ${barWidth}%;"></div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // Top Selling Items Table
  if ($('#top-selling-rows')) {
    $('#top-selling-rows').innerHTML = sortedProducts.length ? sortedProducts.map(item => `
      <tr>
        <td><strong>${escapeHTML(item.name)}</strong></td>
        <td>${escapeHTML(products.find(p => p.name === item.name)?.category || 'Coffee-Based')}</td>
        <td><strong>${item.qty} units</strong></td>
        <td>${peso(item.revenue)}</td>
      </tr>
    `).join('') : '<tr><td colspan="4" class="no-results">0 sales recorded in this period.</td></tr>';
  }

  // Date range labels (dashboard heading + hourly table)
  const rangeText = describeRange(activeAnalyticsRange, start, end);
  if ($('#analytics-range-label')) $('#analytics-range-label').textContent = rangeText.long;
  if ($('#hourly-range-label')) $('#hourly-range-label').textContent = rangeText.short;

  // Hourly Sales Table: latest hour first. For today, hide hours that haven't happened yet.
  if ($('#hourly-sales-rows')) {
    const now = new Date();
    const isToday = start.toDateString() === now.toDateString() && end.toDateString() === now.toDateString();
    const currentHour = now.getHours();
    const hours = Object.keys(hourBuckets).map(Number)
      .filter(h => !isToday || h <= currentHour)
      .sort((a, b) => b - a);

    $('#hourly-sales-rows').innerHTML = hours.length ? hours.map(h => {
      const data = hourBuckets[h];
      const hourLabel = h === 12 ? '12:00 PM' : h > 12 ? `${h - 12}:00 PM` : `${h}:00 AM`;
      const share = totalOrders > 0 ? ((data.orders / totalOrders) * 100).toFixed(0) : '0';
      const isNow = isToday && h === currentHour;
      return `
        <tr class="${isNow ? 'row-now' : ''}">
          <td><strong>${hourLabel}</strong>${isNow ? ' <span class="now-pill">Now</span>' : ''}</td>
          <td>${data.orders} ${data.orders === 1 ? 'order' : 'orders'}</td>
          <td>
            <div class="share-cell">
              <span class="share-track"><span class="share-fill" style="width:${Math.min(100, Number(share))}%"></span></span>
              <small>${share}%</small>
            </div>
          </td>
          <td><strong>${peso(data.revenue)}</strong></td>
        </tr>
      `;
    }).join('') : '<tr><td colspan="4" class="no-results">The café opens at 7:00 AM. Hourly sales will appear here once the day starts.</td></tr>';
  }

  renderExpensesDashboard(
    start,
    end,
    rangeText,
    windowOrders,
    totalCOGS,
    totalWindowWaste,
    totalWindowGoodwill,
    windowSpoilage.length,
    windowWastedOrders.length
  );
}

function parseEntryDate(entry) {
  if (entry.timestamp) return new Date(entry.timestamp);
  if (entry.date && /^\d{4}-\d{2}-\d{2}$/.test(entry.date)) {
    return new Date(entry.date + 'T12:00:00');
  }
  return new Date(entry.date || 0);
}

function renderExpensesDashboard(start, end, rangeText, windowOrders, totalCOGS, totalWindowWaste, totalWindowGoodwill, spoilageCount, wastedOrdersCount) {
  const windowOpex = opexLedger.filter(e => {
    const d = parseEntryDate(e);
    return d >= start && d <= end;
  });
  const windowStockIn = stockInHistory.filter(s => {
    const d = parseEntryDate(s);
    return d >= start && d <= end;
  });

  const totalRevenue = windowOrders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
  const totalOpEx = windowOpex.reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
  const totalStockIn = windowStockIn.reduce((sum, s) => sum + (Number(s.totalCost) || 0), 0);
  const totalOutflows = totalOpEx + totalStockIn;

  const cogsPct = totalRevenue > 0 ? ((totalCOGS / totalRevenue) * 100).toFixed(1) : '0.0';
  const opexRatio = totalRevenue > 0 ? ((totalOpEx / totalRevenue) * 100).toFixed(1) : '0.0';
  const netOperatingProfit = totalRevenue - totalCOGS - totalWindowGoodwill - totalWindowWaste - totalOpEx;
  const netOperatingMargin = totalRevenue > 0 ? ((netOperatingProfit / totalRevenue) * 100).toFixed(1) : '0.0';

  if ($('#exp-total-opex')) $('#exp-total-opex').textContent = peso(totalOpEx);
  if ($('#exp-opex-delta')) {
    $('#exp-opex-delta').textContent = windowOpex.length === 0
      ? '0 expenses recorded'
      : `${windowOpex.length} ${windowOpex.length === 1 ? 'expense' : 'expenses'} recorded`;
  }
  if ($('#exp-total-cogs')) $('#exp-total-cogs').textContent = peso(totalCOGS);
  if ($('#exp-cogs-delta')) $('#exp-cogs-delta').textContent = `${cogsPct}% of sales`;
  if ($('#exp-total-spoilage')) $('#exp-total-spoilage').textContent = peso(totalWindowWaste);
  if ($('#exp-spoilage-delta')) $('#exp-spoilage-delta').textContent = `${spoilageCount + wastedOrdersCount} waste events`;
  if ($('#exp-net-margin')) {
    const marginEl = $('#exp-net-margin');
    marginEl.textContent = `${netOperatingMargin}%`;
    marginEl.classList.toggle('text-accent', netOperatingProfit >= 0);
    marginEl.classList.toggle('text-discount', netOperatingProfit < 0);
  }
  if ($('#exp-ratio-delta')) {
    $('#exp-ratio-delta').textContent = `Expense-to-sales ratio: ${opexRatio}% (${peso(netOperatingProfit)} EBIT)`;
  }
  if ($('#exp-total-stockin')) $('#exp-total-stockin').textContent = peso(totalStockIn);
  if ($('#exp-stockin-delta')) {
    $('#exp-stockin-delta').textContent = `${windowStockIn.length} restock ${windowStockIn.length === 1 ? 'delivery' : 'deliveries'}`;
  }
  if ($('#exp-total-outflows')) $('#exp-total-outflows').textContent = peso(totalOutflows);
  if ($('#exp-outflows-delta')) $('#exp-outflows-delta').textContent = `OpEx (${peso(totalOpEx)}) + Stock-In (${peso(totalStockIn)})`;

  // 1. OpEx Breakdown by Category
  const opexByCat = {};
  windowOpex.forEach(e => {
    const cat = e.category || 'Other OpEx';
    opexByCat[cat] = (opexByCat[cat] || 0) + (Number(e.amount) || 0);
  });
  const expCatList = $('#exp-category-bars-list');
  const expCatEmpty = $('#chart-exp-category-empty');
  const sortedOpexCats = Object.entries(opexByCat).sort((a, b) => b[1] - a[1]);
  if (sortedOpexCats.length === 0 || totalOpEx <= 0) {
    if (expCatList) expCatList.innerHTML = '';
    if (expCatEmpty) expCatEmpty.hidden = false;
  } else {
    if (expCatEmpty) expCatEmpty.hidden = true;
    if (expCatList) {
      expCatList.innerHTML = sortedOpexCats.map(([cat, amt]) => {
        const share = totalOpEx > 0 ? ((amt / totalOpEx) * 100).toFixed(1) : '0.0';
        return `
          <div class="cat-bar-item">
            <div class="cat-bar-header">
              <span>${escapeHTML(cat)}</span>
              <span><strong>${peso(amt)}</strong> (${share}%)</span>
            </div>
            <div class="cat-bar-track">
              <div class="cat-bar-fill" style="width: ${Math.min(100, Number(share))}%;"></div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 2. Expense Payment Method Share
  const opexByMethod = {};
  windowOpex.forEach(e => {
    const method = e.method || 'Petty Cash';
    opexByMethod[method] = (opexByMethod[method] || 0) + (Number(e.amount) || 0);
  });
  const expMethodList = $('#exp-method-bars-list');
  const expMethodEmpty = $('#chart-exp-method-empty');
  const sortedMethods = Object.entries(opexByMethod).sort((a, b) => b[1] - a[1]);
  if (sortedMethods.length === 0 || totalOpEx <= 0) {
    if (expMethodList) expMethodList.innerHTML = '';
    if (expMethodEmpty) expMethodEmpty.hidden = false;
  } else {
    if (expMethodEmpty) expMethodEmpty.hidden = true;
    if (expMethodList) {
      expMethodList.innerHTML = sortedMethods.map(([method, amt]) => {
        const share = totalOpEx > 0 ? ((amt / totalOpEx) * 100).toFixed(1) : '0.0';
        return `
          <div class="top5-item">
            <div class="top5-header">
              <span><strong>${escapeHTML(method)}</strong></span>
              <span>${peso(amt)} (${share}%)</span>
            </div>
            <div class="top5-track">
              <div class="exp-method-fill" style="width: ${Math.min(100, Number(share))}%;"></div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 3. Cost Composition Donut (COGS vs OpEx vs Spoilage/Waste)
  const totalCostPool = totalCOGS + totalOpEx + totalWindowWaste;
  const costDonut = $('#svg-cost-donut');
  const costLegend = $('#cost-legend-container');
  const costEmpty = $('#chart-cost-empty');
  if (totalCostPool <= 0) {
    if (costDonut) costDonut.innerHTML = '';
    if (costLegend) costLegend.innerHTML = '';
    if (costEmpty) costEmpty.hidden = false;
  } else {
    if (costEmpty) costEmpty.hidden = true;
    const cogsPctCost = Math.round((totalCOGS / totalCostPool) * 100);
    const opexPctCost = Math.round((totalOpEx / totalCostPool) * 100);
    const wastePctCost = Math.max(0, 100 - cogsPctCost - opexPctCost);

    const circumference = 2 * Math.PI * 40;
    const cogsDash = (cogsPctCost / 100) * circumference;
    const opexDash = (opexPctCost / 100) * circumference;
    const wasteDash = (wastePctCost / 100) * circumference;

    if (costDonut) {
      costDonut.innerHTML = `
        <circle cx="80" cy="80" r="40" fill="transparent" stroke="#ddd" stroke-width="20"/>
        <circle cx="80" cy="80" r="40" fill="transparent" stroke="#2c1a11" stroke-width="20"
                stroke-dasharray="${cogsDash} ${circumference}" stroke-dashoffset="0" transform="rotate(-90 80 80)"/>
        <circle cx="80" cy="80" r="40" fill="transparent" stroke="#b85333" stroke-width="20"
                stroke-dasharray="${opexDash} ${circumference}" stroke-dashoffset="-${cogsDash}" transform="rotate(-90 80 80)"/>
        <circle cx="80" cy="80" r="40" fill="transparent" stroke="#8a6700" stroke-width="20"
                stroke-dasharray="${wasteDash} ${circumference}" stroke-dashoffset="-${cogsDash + opexDash}" transform="rotate(-90 80 80)"/>
        <text x="80" y="83" text-anchor="middle" font-size="11" font-weight="bold" fill="#2c1a11">${peso(totalCostPool)}</text>
        <text x="80" y="96" text-anchor="middle" font-size="8.5" fill="#777">Total Cost</text>
      `;
    }
    if (costLegend) {
      costLegend.innerHTML = `
        <div class="size-legend-item"><span class="legend-dot" style="background:#2c1a11;"></span><span>COGS: <strong>${cogsPctCost}%</strong> (${peso(totalCOGS)})</span></div>
        <div class="size-legend-item"><span class="legend-dot" style="background:#b85333;"></span><span>OpEx: <strong>${opexPctCost}%</strong> (${peso(totalOpEx)})</span></div>
        <div class="size-legend-item"><span class="legend-dot" style="background:#8a6700;"></span><span>Spoilage / Lugi: <strong>${wastePctCost}%</strong> (${peso(totalWindowWaste)})</span></div>
      `;
    }
  }

  // 4. Itemized Operating Expenses Table
  if ($('#exp-table-range-label')) $('#exp-table-range-label').textContent = rangeText.short;
  if ($('#exp-opex-rows')) {
    $('#exp-opex-rows').innerHTML = windowOpex.length ? windowOpex.map(op => `
      <tr>
        <td>${escapeHTML(op.date)}</td>
        <td><strong>${escapeHTML(op.category)}</strong></td>
        <td>${escapeHTML(op.description)}</td>
        <td><span class="service-pill">${escapeHTML(op.method)}</span></td>
        <td><strong>${peso(op.amount)}</strong></td>
      </tr>
    `).join('') : '<tr><td colspan="5" class="no-results">No operating expenses recorded in this period (₱0.00).</td></tr>';
  }
}

// UI-only: human-readable label for the selected date range
function describeRange(rangeType, start, end) {
  const now = new Date();
  const sameYear = start.getFullYear() === now.getFullYear() && end.getFullYear() === now.getFullYear();
  const fmt = d => d.toLocaleDateString('en-PH', sameYear
    ? { month: 'short', day: 'numeric' }
    : { month: 'short', day: 'numeric', year: 'numeric' });
  const shownEnd = end > now ? now : end;   // don't promise future days

  if (start.toDateString() === now.toDateString() && end.toDateString() === now.toDateString()) {
    const day = now.toLocaleDateString('en-PH', { weekday: 'short', month: 'short', day: 'numeric' });
    return { long: `Showing today · ${day}`, short: `Today · ${day}` };
  }
  if (start.toDateString() === shownEnd.toDateString()) {
    return { long: `Showing ${fmt(start)}`, short: fmt(start) };
  }
  const span = `${fmt(start)} – ${fmt(shownEnd)}${sameYear ? `, ${now.getFullYear()}` : ''}`;
  return { long: `Showing ${span}`, short: `${span} · all days combined` };
}

// --- Executive Business Sales Report (Exact Layout from Reference Images 3–6) ---
function renderExecutiveReport() {
  const { start, end } = getFilterDateRange(activeAnalyticsRange);
  const windowOrders = orders.filter(o => {
    if (o.status !== 'Completed') return false;
    const oDate = new Date(o.timestamp || o.date);
    return oDate >= start && oDate <= end;
  });

  const grossSales = windowOrders.reduce((sum, o) => sum + (o.grossTotal || o.total), 0);
  const totalDiscounts = windowOrders.reduce((sum, o) => sum + (o.discountAmount || 0), 0);
  const netSales = windowOrders.reduce((sum, o) => sum + o.total, 0);
  const totalCOGS = windowOrders.reduce((sum, o) => sum + (o.cogs || 0), 0);
  const totalCompGoodwill = windowOrders.reduce((sum, o) => sum + (o.complimentaryCost || 0), 0);

  const windowSpoilage = spoilageLedger.filter(s => {
    const sDate = new Date(s.timestamp || s.date);
    return sDate >= start && sDate <= end;
  });
  const windowSpoilageLoss = windowSpoilage.reduce((sum, s) => sum + (s.totalCost || 0), 0);
  const windowWastedOrders = orders.filter(o => {
    if (o.status !== 'Waste / Lugi') return false;
    const oDate = new Date(o.timestamp || o.date);
    return oDate >= start && oDate <= end;
  });
  const windowWasteLoss = windowWastedOrders.reduce((sum, o) => sum + (o.cogs || 0), 0);
  const totalOperationalWaste = windowSpoilageLoss + windowWasteLoss;

  const totalOpEx = opexLedger.reduce((sum, e) => sum + e.amount, 0);
  const operatingProfit = netSales - totalCOGS - totalCompGoodwill - totalOperationalWaste - totalOpEx;
  const marginPct = netSales > 0 ? ((operatingProfit / netSales) * 100).toFixed(2) : '0.00';
  const footfall = windowOrders.length;
  const aov = footfall > 0 ? (netSales / footfall) : 0;

  if ($('#report-period-badge')) {
    $('#report-period-badge').textContent = `Reporting Window: ${start.toLocaleDateString()} to ${end.toLocaleDateString()}`;
  }

  if ($('#report-sales-summary-text')) {
    $('#report-sales-summary-text').innerHTML = `
      Total sales revenue recorded in this period stands at <strong>${peso(netSales)}</strong> (Gross: ${peso(grossSales)}) across <strong>${footfall} customer transactions</strong>.
    `;
  }

  if ($('#report-traffic-text')) {
    $('#report-traffic-text').innerHTML = `
      Customer footfall for this window stands at <strong>${footfall} orders</strong> with an Average Bill / Ticket Value of <strong>${peso(aov)}</strong> per transaction.
    `;
  }

  // Section I Overview Table
  if ($('#report-overview-table')) {
    $('#report-overview-table').innerHTML = `
      <tr><td>Gross Sales</td><td><strong>${peso(grossSales)}</strong></td><td>Calculated from all fulfilled barista tickets</td></tr>
      <tr><td>Discounts (Senior/PWD/Promo)</td><td><span class="text-discount">-${peso(totalDiscounts)}</span></td><td>Statutory 20% + VAT Exemption deductions</td></tr>
      <tr><td>Net Sales Realized</td><td><strong>${peso(netSales)}</strong></td><td>Total collected revenue</td></tr>
      <tr><td>Total Footfall</td><td><strong>${footfall} transactions</strong></td><td>Completed customer orders</td></tr>
      <tr><td>Average Bill / Person</td><td><strong>${peso(aov)}</strong></td><td>Average ticket realization</td></tr>
    `;
  }

  // Section II Product Analysis Table
  const catSales = {};
  const itemCounts = {};
  windowOrders.forEach(o => {
    (o.cartSnapshot || []).forEach(item => {
      const prod = products.find(p => p.id === item.id);
      const cat = prod?.category || 'Coffee-Based';
      catSales[cat] = catSales[cat] || { units: 0, revenue: 0 };
      catSales[cat].units += item.qty;
      catSales[cat].revenue += item.price * item.qty;

      itemCounts[item.name] = (itemCounts[item.name] || 0) + item.qty;
    });
  });

  const sortedItems = Object.entries(itemCounts).sort((a, b) => b[1] - a[1]);
  if ($('#report-top-products-list')) {
    $('#report-top-products-list').innerHTML = sortedItems.length ? sortedItems.slice(0, 5).map(([name, count]) => `
      <li><strong>${escapeHTML(name)}</strong> — ${count} units served</li>
    `).join('') : '<li>No product sales recorded in this period (0 baseline).</li>';
  }

  if ($('#report-category-table')) {
    const catEntries = Object.entries(catSales);
    $('#report-category-table').innerHTML = catEntries.length ? catEntries.map(([cat, data]) => {
      const share = netSales > 0 ? ((data.revenue / netSales) * 100).toFixed(1) : '0';
      return `
        <tr>
          <td><strong>${escapeHTML(cat)}</strong></td>
          <td>${data.units} units</td>
          <td><strong>${peso(data.revenue)}</strong></td>
          <td>${share}%</td>
        </tr>
      `;
    }).join('') : '<tr><td colspan="4" class="no-results">No category sales recorded yet.</td></tr>';
  }

  // Section III Loyalty Table
  if ($('#report-loyalty-table')) {
    const totalStamps = loyaltyMembers.reduce((sum, m) => sum + m.stamps, 0);
    $('#report-loyalty-table').innerHTML = `
      <tr><td>Registered Loyalty Members</td><td><strong>${loyaltyMembers.length}</strong></td><td>Active digital accounts</td></tr>
      <tr><td>Stamps In Circulation</td><td><strong>${totalStamps} stamps</strong></td><td>Accumulated towards free beverage reward</td></tr>
      <tr><td>Reward Threshold</td><td><strong>12 stamps = 1 Free Drink</strong></td><td>Redeemable directly on Barista POS</td></tr>
    `;
  }

  // Section IV Financial Summary Table
  if ($('#report-finance-table')) {
    $('#report-finance-table').innerHTML = `
      <tr><td>Net Sales Revenue</td><td><strong>${peso(netSales)}</strong></td><td>100.0%</td></tr>
      <tr><td>Ingredient & Packaging Costs (COGS)</td><td><span class="text-discount">-${peso(totalCOGS)}</span></td><td>${netSales > 0 ? ((totalCOGS / netSales) * 100).toFixed(1) : '0.0'}%</td></tr>
      <tr><td>Complimentary Items / Goodwill Cost</td><td><span class="text-discount">-${peso(totalCompGoodwill)}</span></td><td>${netSales > 0 ? ((totalCompGoodwill / netSales) * 100).toFixed(1) : '0.0'}%</td></tr>
      <tr><td>Operational Waste / Spoilage Loss (Lugi)</td><td><span class="text-discount">-${peso(totalOperationalWaste)}</span></td><td>${netSales > 0 ? ((totalOperationalWaste / netSales) * 100).toFixed(1) : '0.0'}%</td></tr>
      <tr><td>Operating Expenses (OpEx)</td><td><span class="text-discount">-${peso(totalOpEx)}</span></td><td>${netSales > 0 ? ((totalOpEx / netSales) * 100).toFixed(1) : '0.0'}%</td></tr>
      <tr class="row-total">
        <td>Net Operating Profit</td>
        <td><strong class="text-accent">${peso(operatingProfit)}</strong></td>
        <td><strong class="text-accent">${marginPct}%</strong></td>
      </tr>
    `;
  }
}

// --- Finance, P&L & VAT Breakdown ---
function renderFinance() {
  const completedOrders = orders.filter(o => o.status === 'Completed');
  const wastedOrders = orders.filter(o => o.status === 'Waste / Lugi');

  const grossSales = completedOrders.reduce((sum, o) => sum + (o.grossTotal || o.total), 0);
  const totalDiscounts = completedOrders.reduce((sum, o) => sum + (o.discountAmount || 0), 0);
  const netSales = completedOrders.reduce((sum, o) => sum + o.total, 0);

  const totalCOGS = completedOrders.reduce((sum, o) => sum + (o.cogs || 0), 0);
  const totalCompGoodwill = completedOrders.reduce((sum, o) => sum + (o.complimentaryCost || 0), 0);
  const totalSpoilageLoss = spoilageLedger.reduce((sum, s) => sum + (s.totalCost || 0), 0);
  const totalVoidWasteLoss = wastedOrders.reduce((sum, o) => sum + (o.cogs || 0), 0);
  const totalOperationalWaste = totalSpoilageLoss + totalVoidWasteLoss;

  const grossProfit = netSales - totalCOGS - totalCompGoodwill - totalOperationalWaste;
  const grossMargin = netSales > 0 ? ((grossProfit / netSales) * 100).toFixed(1) : '0.0';

  const totalOpEx = opexLedger.reduce((sum, e) => sum + e.amount, 0);
  const operatingProfit = grossProfit - totalOpEx;

  const totalInflow = netSales;
  const totalStockPurchases = stockInHistory.reduce((sum, s) => sum + s.totalCost, 0);
  const totalOutflow = totalOpEx + totalStockPurchases;
  const netCashFlow = totalInflow - totalOutflow;

  const vatableBase = completedOrders.reduce((sum, o) => sum + (o.vatableSales || 0), 0);
  const vatOutput = completedOrders.reduce((sum, o) => sum + (o.vatAmount || 0), 0);
  const vatExempt = completedOrders.reduce((sum, o) => sum + (o.vatExemptSales || 0), 0);

  if ($('#fin-total-inflow')) $('#fin-total-inflow').textContent = peso(totalInflow);
  if ($('#fin-total-outflow')) $('#fin-total-outflow').textContent = peso(totalOutflow);
  if ($('#fin-net-cashflow')) $('#fin-net-cashflow').textContent = peso(netCashFlow);
  if ($('#fin-total-waste')) $('#fin-total-waste').textContent = peso(totalOperationalWaste);
  if ($('#fin-total-goodwill')) $('#fin-total-goodwill').textContent = peso(totalCompGoodwill);

  if ($('#pl-gross-sales')) $('#pl-gross-sales').textContent = peso(grossSales);
  if ($('#pl-discounts')) $('#pl-discounts').textContent = `-${peso(totalDiscounts)}`;
  if ($('#pl-net-sales')) $('#pl-net-sales').textContent = peso(netSales);
  if ($('#pl-cogs')) $('#pl-cogs').textContent = `-${peso(totalCOGS)}`;
  if ($('#pl-goodwill')) $('#pl-goodwill').textContent = `-${peso(totalCompGoodwill)}`;
  if ($('#pl-waste')) $('#pl-waste').textContent = `-${peso(totalOperationalWaste)}`;
  if ($('#pl-gross-profit')) $('#pl-gross-profit').textContent = peso(grossProfit);
  if ($('#pl-margin')) $('#pl-margin').textContent = `${grossMargin}%`;
  if ($('#pl-opex')) $('#pl-opex').textContent = `-${peso(totalOpEx)}`;
  if ($('#pl-operating-profit')) $('#pl-operating-profit').textContent = peso(operatingProfit);

  if ($('#vat-table-base')) $('#vat-table-base').textContent = peso(vatableBase);
  if ($('#vat-output-amount')) $('#vat-output-amount').textContent = peso(vatOutput);
  if ($('#vat-exempt-amount')) $('#vat-exempt-amount').textContent = peso(vatExempt);
  if ($('#vat-total-sales')) $('#vat-total-sales').textContent = peso(grossSales);

  if ($('#opex-rows')) {
    $('#opex-rows').innerHTML = opexLedger.length ? opexLedger.map((op, idx) => `
      <tr>
        <td>${escapeHTML(op.date)}</td>
        <td><strong>${escapeHTML(op.category)}</strong></td>
        <td>${escapeHTML(op.description)}</td>
        <td><span class="service-pill">${escapeHTML(op.method)}</span></td>
        <td><strong>${peso(op.amount)}</strong></td>
        <td>
          <button class="restock-btn is-danger" data-delete-opex="${idx}">Remove</button>
        </td>
      </tr>
    `).join('') : '<tr><td colspan="6" class="no-results">No operating expenses recorded yet (₱0.00).</td></tr>';

    $$('[data-delete-opex]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.deleteOpex);
        opexLedger.splice(idx, 1);
        saveAll();
        renderFinance();
        renderPortalPulse();
        renderVisualAnalytics();
        renderExecutiveReport();
        notify('OpEx expense removed.');
      });
    });
  }
}

// --- Orders & Voids ---
function renderOrders() {
  const searchEl = $('#order-search');
  const query = searchEl ? searchEl.value.trim().toLowerCase() : '';

  const filtered = orders.filter(o => {
    const matchesQuery = `${o.id} ${o.customer || ''} ${o.items || ''} ${o.referenceNumber || ''} ${o.payment || ''}`.toLowerCase().includes(query);
    const matchesFilter = activeOrderFilter === 'all' ||
      (activeOrderFilter === 'completed' && o.status === 'Completed') ||
      (activeOrderFilter === 'voided' && o.status === 'Voided') ||
      (activeOrderFilter === 'waste' && o.status === 'Waste / Lugi');
    return matchesQuery && matchesFilter;
  });

  const orderTable = $('#order-rows');
  if (!orderTable) return;

  const displayLimit = 100;
  const displayList = filtered.slice(0, displayLimit);

  if ($('#orders-count-indicator')) {
    $('#orders-count-indicator').textContent = filtered.length > displayLimit
      ? `Showing latest ${displayLimit} of ${filtered.length} matching transactions (use search to locate older tickets)`
      : `Total ${filtered.length} matching transactions recorded`;
  }

  orderTable.innerHTML = displayList.length ? displayList.map(o => `
    <tr>
      <td><strong>${escapeHTML(o.id)}</strong></td>
      <td>${escapeHTML(o.date)}<br><small class="muted">${escapeHTML(o.time)}</small></td>
      <td>${escapeHTML(o.items)}</td>
      <td><span class="service-pill">${escapeHTML(o.service)}</span></td>
      <td>
        <strong>${escapeHTML(o.payment)}</strong>
        ${o.referenceNumber ? `<br><small class="muted">Ref: ${escapeHTML(o.referenceNumber)}</small>` : ''}
      </td>
      <td>
        ${o.discountType !== 'none' ? `<span class="text-discount">${escapeHTML(o.discountType.toUpperCase())} (-${peso(o.discountAmount)})</span><br>` : ''}
        <small class="muted">VAT: ${peso(o.vatAmount)}</small>
      </td>
      <td><strong>${peso(o.total)}</strong></td>
      <td>
        <span class="status-pill ${o.status === 'Completed' ? 'completed' : o.status === 'Voided' ? 'voided' : 'waste'}">
          ${escapeHTML(o.status)}
        </span>
        ${o.voidReason ? `<br><small class="text-discount">${escapeHTML(o.voidReason)}</small>` : ''}
      </td>
      <td>
        ${o.status === 'Completed' ? `
          <button class="restock-btn is-danger" data-void-order="${escapeHTML(o.id)}">Void / Cancel</button>
        ` : '—'}
      </td>
    </tr>
  `).join('') : '<tr><td colspan="9" class="no-results">No orders matching criteria. Start fresh by placing a new order!</td></tr>';

  $$('[data-void-order]').forEach(btn => {
    btn.addEventListener('click', () => {
      const orderId = btn.dataset.voidOrder;
      const order = orders.find(o => o.id === orderId);
      if (!order) return;

      $('#void-order-id').value = order.id;
      $('#void-order-copy').textContent = `Order ${order.id} (${peso(order.total)}) by ${order.customer}`;
      $('#void-form').reset();
      $('#void-dialog').showModal();
    });
  });
}

// --- Inventory & Items ---
function renderInventory() {
  const searchEl = $('#inventory-search');
  const query = searchEl ? searchEl.value.trim().toLowerCase() : '';

  const filtered = inventory.filter(i => {
    const matchesCat = activeInventoryFilter === 'All' || i.category === activeInventoryFilter;
    const matchesQuery = `${i.name} ${i.category}`.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  const totalValuation = inventory.reduce((sum, i) => sum + (i.quantity * i.cost), 0);
  const lowCount = inventory.filter(i => i.quantity <= i.par).length;

  if ($('#inv-total-count')) $('#inv-total-count').textContent = inventory.length;
  if ($('#inv-total-valuation')) $('#inv-total-valuation').textContent = peso(totalValuation);
  if ($('#inv-low-count')) $('#inv-low-count').textContent = lowCount;
  if ($('#inv-movements-count')) $('#inv-movements-count').textContent = stockInHistory.length + orders.length;

  const rows = $('#inventory-rows');
  if (!rows) return;

  rows.innerHTML = filtered.length ? filtered.map(i => {
    const isOut = i.quantity <= 0;
    const isLow = i.quantity > 0 && i.quantity <= i.par;
    const statusClass = isOut ? 'out' : isLow ? 'low' : 'high';
    const statusText = isOut ? 'Out of Stock' : isLow ? 'Low Stock' : 'In Stock';

    return `
      <tr>
        <td><strong>${escapeHTML(i.name)}</strong></td>
        <td>${escapeHTML(i.category)}</td>
        <td><strong>${i.quantity.toLocaleString()} ${escapeHTML(i.unit)}</strong></td>
        <td>${i.par.toLocaleString()} ${escapeHTML(i.unit)}</td>
        <td>${peso(i.cost)} / ${escapeHTML(i.unit)}</td>
        <td>
          <small class="muted">
            ${i.unit === 'g' ? `${peso(i.cost * 18)} per 18g shot` : i.unit === 'ml' ? `${peso(i.cost * 200)} per 200ml` : `${peso(i.cost)} per pc`}
          </small>
        </td>
        <td><span class="status-pill ${statusClass}">${statusText}</span></td>
        <td>
          <button class="restock-btn" data-quick-stockin="${i.id}">＋ Stock</button>
          <button class="restock-btn" data-edit-ing="${i.id}">✎ Edit</button>
          <button class="restock-btn is-danger" data-delete-ing="${i.id}">Remove</button>
        </td>
      </tr>
    `;
  }).join('') : '<tr><td colspan="8" class="no-results">No inventory items found.</td></tr>';

  if ($('#stock-in-rows')) {
    $('#stock-in-rows').innerHTML = stockInHistory.length ? stockInHistory.slice(0, 10).map(s => `
      <tr>
        <td>${escapeHTML(s.date)}</td>
        <td><strong>${escapeHTML(s.ingredientName)}</strong></td>
        <td>${escapeHTML(s.supplier || 'Direct')}</td>
        <td>+${s.qtyAdded.toLocaleString()} ${escapeHTML(s.unit)}</td>
        <td>${peso(s.totalCost)}</td>
        <td><strong>${peso(s.newUnitCost)} / ${escapeHTML(s.unit)}</strong></td>
      </tr>
    `).join('') : '<tr><td colspan="6" class="no-results">No stock-in records yet (0 baseline).</td></tr>';
  }

  if ($('#spoilage-rows')) {
    $('#spoilage-rows').innerHTML = spoilageLedger.length ? spoilageLedger.map((s, idx) => `
      <tr>
        <td>${escapeHTML(s.date)}</td>
        <td><strong>${escapeHTML(s.ingredientName)}</strong></td>
        <td>${s.qty} ${escapeHTML(s.unit)}</td>
        <td>${peso(s.unitCost)}/${escapeHTML(s.unit)}</td>
        <td><span class="text-discount">-${peso(s.totalCost)}</span></td>
        <td><span class="status-pill waste">${escapeHTML(s.reason)}</span></td>
        <td>${escapeHTML(s.notes || '—')}</td>
        <td>
          <button class="restock-btn is-danger" data-delete-spoilage="${idx}">Remove</button>
        </td>
      </tr>
    `).join('') : '<tr><td colspan="8" class="no-results">No operational spoilage or discards recorded yet (₱0.00 loss).</td></tr>';

    $$('[data-delete-spoilage]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.deleteSpoilage);
        spoilageLedger.splice(idx, 1);
        saveAll();
        renderInventory();
        renderFinance();
        renderPortalPulse();
        renderVisualAnalytics();
        renderExecutiveReport();
        notify('Spoilage record removed.');
      });
    });
  }

  $$('[data-quick-stockin]').forEach(btn => {
    btn.addEventListener('click', () => openStockInModal(Number(btn.dataset.quickStockin)));
  });

  $$('[data-edit-ing]').forEach(btn => {
    btn.addEventListener('click', () => openIngredientModal(Number(btn.dataset.editIng)));
  });

  $$('[data-delete-ing]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.deleteIng);
      if (confirm('Are you sure you want to remove this ingredient from inventory?')) {
        inventory = inventory.filter(i => i.id !== id);
        saveAll();
        renderInventory();
        notify('Ingredient removed.');
      }
    });
  });
}

function openIngredientModal(ingId = null) {
  const form = $('#item-form');
  if (form) form.reset();
  const title = $('#item-dialog-title');
  const editIdInput = $('#item-edit-id');
  const ing = ingId ? inventory.find(i => i.id === ingId) : null;

  if (ing) {
    if (title) title.textContent = 'Edit Inventory Item';
    if (editIdInput) editIdInput.value = ing.id;
    if ($('#new-item-name')) $('#new-item-name').value = ing.name;
    if ($('#new-item-category')) $('#new-item-category').value = ing.category;
    if ($('#new-item-unit')) $('#new-item-unit').value = ing.unit;
    if ($('#new-item-cost')) $('#new-item-cost').value = ing.cost;
    if ($('#new-item-qty')) $('#new-item-qty').value = ing.quantity;
    if ($('#new-item-par')) $('#new-item-par').value = ing.par;
  } else {
    if (title) title.textContent = 'Add Inventory Item';
    if (editIdInput) editIdInput.value = '';
  }
  $('#item-dialog')?.showModal();
}

function openStockInModal(preSelectedIngId = null) {
  $('#stock-in-form')?.reset();
  if ($('#stock-in-item')) {
    $('#stock-in-item').innerHTML = inventory.map(i => `
      <option value="${i.id}" ${preSelectedIngId === i.id ? 'selected' : ''}>
        ${escapeHTML(i.name)} (${escapeHTML(i.unit)}) - Current: ${i.quantity} ${escapeHTML(i.unit)}
      </option>
    `).join('');
  }
  if ($('#stock-in-date')) $('#stock-in-date').value = new Date().toISOString().slice(0, 10);
  if (preSelectedIngId && $('#stock-in-item')) $('#stock-in-item').value = preSelectedIngId;
  $('#stock-in-dialog')?.showModal();
}

function openSpoilageModal() {
  const itemSelect = $('#spoilage-item');
  if (itemSelect) {
    itemSelect.innerHTML = inventory.map(i => `
      <option value="${i.id}">${escapeHTML(i.name)} (${i.quantity} ${i.unit} on hand @ ${peso(i.cost)}/${i.unit})</option>
    `).join('');
  }
  if ($('#spoilage-qty')) $('#spoilage-qty').value = '';
  if ($('#spoilage-notes')) $('#spoilage-notes').value = '';
  if ($('#spoilage-date')) $('#spoilage-date').value = new Date().toISOString().slice(0, 10);
  $('#spoilage-dialog')?.showModal();
}

function recordSpoilageDiscard(itemId, qty, reason, date = null, notes = '') {
  const ing = inventory.find(i => i.id === Number(itemId));
  if (!ing || isNaN(qty) || qty <= 0) return null;

  const lossAmount = Math.round(qty * ing.cost * 100) / 100;
  ing.quantity = Math.max(0, ing.quantity - qty);

  const spoilageEntry = {
    id: 'SPL-' + Date.now(),
    date: date || new Date().toISOString().slice(0, 10),
    timestamp: new Date().toISOString(),
    ingredientId: ing.id,
    ingredientName: ing.name,
    qty: Number(qty),
    unit: ing.unit,
    unitCost: ing.cost,
    totalCost: lossAmount,
    reason: reason || 'Expired Shelf-Life (Unsold)',
    notes: notes || ''
  };

  spoilageLedger.unshift(spoilageEntry);
  saveAll();
  return spoilageEntry;
}

function renderItemGroups() {
  const groups = ['All', ...new Set([...menuGroups, ...products.map(p => p.category)])];
  const container = $('#item-groups');
  if (!container) return;

  container.innerHTML = groups.map(g => `
    <button class="category-tab ${activeItemGroup === g ? 'selected' : ''}" data-item-group="${escapeHTML(g)}">
      ${escapeHTML(g)}
    </button>
  `).join('');

  $$('#item-groups .category-tab').forEach(b => {
    b.addEventListener('click', () => {
      activeItemGroup = b.dataset.itemGroup;
      renderItemGroups();
      renderItems();
    });
  });
}

function renderItems() {
  const searchEl = $('#items-search');
  const query = searchEl ? searchEl.value.trim().toLowerCase() : '';

  const filtered = products.filter(p => {
    const matchesGroup = activeItemGroup === 'All' || p.category === activeItemGroup;
    const matchesQuery = `${p.name} ${p.category}`.toLowerCase().includes(query);
    return matchesGroup && matchesQuery;
  });

  const rows = $('#items-rows');
  if (!rows) return;

  rows.innerHTML = filtered.length ? filtered.map(p => {
    const cogs = calculateProductCOGS(p.id, {});
    const grossMargin = p.price > 0 ? ((p.price - cogs) / p.price * 100).toFixed(1) : '0.0';
    const recipeCount = (recipes[p.id] || []).length;

    return `
      <tr>
        <td><strong>${escapeHTML(p.name)}</strong></td>
        <td>${escapeHTML(p.category)}</td>
        <td><span class="service-pill">${escapeHTML(p.variant || 'Standard')}</span></td>
        <td><strong>${peso(p.price)}</strong></td>
        <td>${peso(cogs)}</td>
        <td><span class="text-accent"><strong>${grossMargin}%</strong></span></td>
        <td>
          <button class="restock-btn" data-edit-recipe="${escapeHTML(p.id)}">
            ${recipeCount} Ingredients ✎
          </button>
        </td>
        <td>
          <button class="restock-btn" data-edit-product="${escapeHTML(p.id)}">Edit</button>
          <button class="restock-btn is-danger" data-delete-product="${escapeHTML(p.id)}">Remove</button>
        </td>
      </tr>
    `;
  }).join('') : '<tr><td colspan="8" class="no-results">No menu items found.</td></tr>';

  $$('[data-edit-recipe]').forEach(btn => {
    btn.addEventListener('click', () => openRecipeModal(btn.dataset.editRecipe));
  });
  $$('[data-edit-product]').forEach(btn => {
    btn.addEventListener('click', () => openProductModal(btn.dataset.editProduct));
  });
  $$('[data-delete-product]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.deleteProduct;
      if (confirm('Delete this product from the menu?')) {
        products = products.filter(p => p.id !== id);
        delete recipes[id];
        saveAll();
        renderItems();
        renderCategories();
        renderProducts();
        notify('Product deleted.');
      }
    });
  });
}

function openRecipeModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  $('#recipe-product-id').value = product.id;
  $('#recipe-modal-title').textContent = `Recipe: ${product.name}`;

  $('#recipe-ing-select').innerHTML = inventory.map(i => `
    <option value="${i.id}">${escapeHTML(i.name)} (${escapeHTML(i.unit)})</option>
  `).join('');

  renderRecipeList(productId);
  $('#recipe-dialog').showModal();
}

function renderRecipeList(productId) {
  const currentRecipe = recipes[productId] || [];
  $('#recipe-ingredients-list').innerHTML = currentRecipe.length ? currentRecipe.map((r, idx) => {
    const ing = inventory.find(i => i.id === r.ingredientId);
    const ingName = ing ? ing.name : 'Unknown Ingredient';
    const ingUnit = ing ? ing.unit : r.unit;
    const itemCost = ing ? (ing.cost * r.qty) : 0;

    return `
      <div class="recipe-row">
        <span><strong>${escapeHTML(ingName)}</strong>: ${r.qty} ${escapeHTML(ingUnit)} (${peso(itemCost)})</span>
        <button type="button" class="restock-btn is-danger" data-remove-recipe-item="${idx}">✕</button>
      </div>
    `;
  }).join('') : '<p class="modal-copy">No ingredients attached to this product yet.</p>';

  $$('[data-remove-recipe-item]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.removeRecipeItem);
      recipes[productId].splice(idx, 1);
      saveAll();
      renderRecipeList(productId);
      renderItems();
    });
  });
}

let pendingMenuItemImage = '';

function syncMenuItemImagePreview(imageSrc = '') {
  pendingMenuItemImage = imageSrc || '';
  const preview = $('#menu-item-preview');
  const removeBtn = $('#remove-menu-image');
  if (preview) {
    preview.src = pendingMenuItemImage;
    preview.hidden = !pendingMenuItemImage;
  }
  if (removeBtn) {
    removeBtn.hidden = !pendingMenuItemImage;
  }
}

function openProductModal(productId = '') {
  const product = products.find(p => p.id === productId);
  $('#menu-item-form').reset();
  $('#menu-item-id').value = product ? product.id : '';
  $('#menu-item-title').textContent = product ? 'Edit Menu Item' : 'Add Menu Item';
  $('#menu-item-category').innerHTML = menuGroups.map(g => `<option value="${escapeHTML(g)}">${escapeHTML(g)}</option>`).join('');

  if (product) {
    $('#menu-item-name').value = product.name;
    $('#menu-item-detail').value = product.detail || '';
    $('#menu-item-price').value = product.price;
    $('#menu-item-category').value = product.category;
    $('#menu-item-variant').value = product.variant || 'Hot';
    $('#menu-item-emoji').value = product.emoji || '';
    syncMenuItemImagePreview(product.image || '');
  } else {
    syncMenuItemImagePreview('');
  }
  $('#menu-item-dialog').showModal();
}

// --- Shift Reconciliation ---
function renderShift() {
  const completedToday = orders.filter(o => o.status === 'Completed');
  const cashSales = completedToday.filter(o => o.payment === 'Cash').reduce((sum, o) => sum + o.total, 0);
  const gcashSales = completedToday.filter(o => o.payment === 'GCash').reduce((sum, o) => sum + o.total, 0);
  const mayaSales = completedToday.filter(o => o.payment === 'Maya').reduce((sum, o) => sum + o.total, 0);
  const cardSales = completedToday.filter(o => o.payment === 'Card').reduce((sum, o) => sum + o.total, 0);
  const cashlessTotal = gcashSales + mayaSales + cardSales;
  const expectedCash = currentShift.openingFloat + cashSales;

  if ($('#shift-opening-float')) $('#shift-opening-float').textContent = peso(currentShift.openingFloat);
  if ($('#shift-cash-sales')) $('#shift-cash-sales').textContent = peso(cashSales);
  if ($('#shift-expected-cash')) $('#shift-expected-cash').textContent = peso(expectedCash);
  if ($('#shift-gcash-sales')) $('#shift-gcash-sales').textContent = peso(gcashSales);
  if ($('#shift-maya-sales')) $('#shift-maya-sales').textContent = peso(mayaSales);
  if ($('#shift-card-sales')) $('#shift-card-sales').textContent = peso(cardSales);
  if ($('#shift-cashless-total')) $('#shift-cashless-total').textContent = peso(cashlessTotal);
}

function updatePendingTicketsBadge() {
  const count = pendingTickets.length;
  if ($('#pending-tickets-count')) $('#pending-tickets-count').textContent = count;
  if ($('#resume-count')) $('#resume-count').textContent = count;
}

function updateLoyaltyCustomerDisplay() {
  const container = $('#loyalty-active-customer');
  if (!container) return;

  if (activeLoyaltyMember) {
    const isEligible = activeLoyaltyMember.stamps >= 12;
    container.innerHTML = `
      <div class="loyalty-member">
        <span class="loyalty-avatar" aria-hidden="true">${escapeHTML(activeLoyaltyMember.name.trim().charAt(0).toUpperCase())}</span>
        <div class="loyalty-member-copy">
          <strong>${escapeHTML(activeLoyaltyMember.name)}</strong>
          <span class="loyalty-stamps" aria-label="${activeLoyaltyMember.stamps} of 12 stamps">
            ${Array.from({ length: 12 }, (_, i) => `<i class="${i < activeLoyaltyMember.stamps ? 'on' : ''}"></i>`).join('')}
          </span>
        </div>
        <button type="button" class="restock-btn is-danger" id="btn-detach-loyalty" title="Remove customer from this order">Remove</button>
      </div>
      ${isEligible ? `<button type="button" class="restock-btn reward-btn" id="btn-redeem-stamp">Free drink earned · Redeem</button>` : ''}
    `;

    $('#btn-detach-loyalty')?.addEventListener('click', () => {
      const hadLoyaltyReward = (appliedDiscount.promoCode === 'LOYALTY_FREE_DRINK') || activeCart.some(i => i.isLoyaltyReward);
      if (hadLoyaltyReward && activeLoyaltyMember) {
        activeLoyaltyMember.stamps += 12;
        activeLoyaltyMember.history.push({
          date: new Date().toISOString().slice(0, 10),
          type: 'refund',
          stamps: 12,
          note: 'Customer detached before checkout — 12 stamps refunded'
        });
        activeCart = activeCart.filter(i => !i.isLoyaltyReward);
        appliedDiscount = { type: 'none', idType: '', idLastDigits: '', promoCode: '', promoDiscount: 0 };
        if ($('#discount-type-select')) $('#discount-type-select').value = 'none';
        notify(`Customer detached. 12 stamps refunded to ${activeLoyaltyMember.name}.`);
      } else {
        notify('Customer detached from ticket.');
      }
      activeLoyaltyMember = null;
      saveAll();
      updateLoyaltyCustomerDisplay();
      renderCart();
    });

    const redeemBtn = $('#btn-redeem-stamp');
    if (redeemBtn) {
      redeemBtn.addEventListener('click', () => {
        redeemFreeDrinkForMember(activeLoyaltyMember);
      });
    }
  } else {
    container.innerHTML = '<em>Guest</em>';
  }
}

// --- Loyalty Free Drink Redemption (Supports Redeeming Without Prior Ordering) ---
function redeemFreeDrinkForMember(member = activeLoyaltyMember) {
  if (!member || member.stamps < 12) {
    notify('Member needs at least 12 stamps to redeem a free drink reward.');
    return;
  }
  activeLoyaltyMember = member;

  const eligibleDrink = getEligibleDrinkInCart();
  if (eligibleDrink) {
    if (confirm(`Redeem free beverage reward for ${member.name}? This will deduct 12 stamps and discount ${eligibleDrink.name} to ₱0.00.`)) {
      member.stamps -= 12;
      member.history.push({
        date: new Date().toISOString().slice(0, 10),
        type: 'redeem',
        stamps: -12,
        note: `Free drink reward redeemed (${eligibleDrink.name})`
      });
      appliedDiscount.promoCode = 'LOYALTY_FREE_DRINK';
      appliedDiscount.promoDiscount = eligibleDrink.price;
      if ($('#discount-type-select')) $('#discount-type-select').value = 'promo';
      saveAll();
      updateLoyaltyCustomerDisplay();
      renderCart();
      notify(`Loyalty reward redeemed! ${eligibleDrink.name} is now FREE (₱0.00).`);
    }
  } else {
    // If no drink in cart (empty cart or non-beverages), allow customer to pick free drink directly!
    openRedeemDrinkModal(member);
  }
}

function openRedeemDrinkModal(member = activeLoyaltyMember) {
  if (!member || member.stamps < 12) return;
  activeLoyaltyMember = member;

  const dialog = $('#redeem-dialog');
  if (!dialog) return;

  const subtext = $('#redeem-dialog-subtext');
  if (subtext) {
    subtext.innerHTML = `Customer: <strong>${escapeHTML(member.name)}</strong> (${member.stamps} / 12 Stamps). Select any beverage below to redeem for free (₱0.00).`;
  }

  const searchInput = $('#redeem-drink-search');
  if (searchInput) searchInput.value = '';

  function renderDrinkList(filterText = '') {
    const listContainer = $('#redeem-drink-list');
    if (!listContainer) return;

    const prodList = (typeof products !== 'undefined' && products.length) ? products : defaultProducts;
    const query = String(filterText).trim().toLowerCase();
    const availableDrinks = prodList.filter(p => DRINK_CATEGORIES.includes(p.category) && (!query || p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)));

    if (!availableDrinks.length) {
      listContainer.innerHTML = '<p class="modal-copy empty-note">No matching beverages found.</p>';
      return;
    }

    listContainer.innerHTML = availableDrinks.map(d => `
      <div class="pending-ticket-row">
        <div>
          <strong>${escapeHTML(d.name)}</strong>
          <small class="muted">${escapeHTML(d.category)} · usually ${peso(d.price)}</small>
        </div>
        <button type="button" class="button button-dark" data-select-free-drink="${escapeHTML(d.id)}">Make it free</button>
      </div>
    `).join('');

    $$('[data-select-free-drink]').forEach(btn => {
      btn.addEventListener('click', () => {
        const drinkId = btn.dataset.selectFreeDrink;
        const drink = prodList.find(p => p.id === drinkId);
        if (!drink) return;

        // Deduct 12 stamps
        member.stamps -= 12;
        member.history.push({
          date: new Date().toISOString().slice(0, 10),
          type: 'redeem',
          stamps: -12,
          note: `Free drink reward redeemed (${drink.name})`
        });

        // Add directly to activeCart as complimentary item (₱0.00 customer charge)
        activeCart.push({
          cartItemId: 'CART-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
          id: drink.id,
          name: `${drink.name}`,
          basePrice: drink.price,
          price: 0,
          isComp: true,
          isLoyaltyReward: true,
          qty: 1,
          mods: { roast: 'Harmonie (Smooth)', milk: 'Whole milk', addons: [], syrup: [] }
        });

        saveAll();
        $('#redeem-dialog')?.close();
        updateLoyaltyCustomerDisplay();
        renderCart();
        notify(`Redeemed 12 stamps for ${member.name}! Added free ${drink.name} to order (₱0.00).`);
      });
    });
  }

  renderDrinkList('');
  if (searchInput) {
    searchInput.oninput = (e) => renderDrinkList(e.target.value);
  }

  dialog.showModal();
}

// --- Customer Loyalty Search & Registration ---
function openLoyaltyModal() {
  const searchInput = $('#loyalty-search');
  if (searchInput) searchInput.value = '';
  renderLoyaltyResults('');
  $('#loyalty-dialog').showModal();
}

function renderLoyaltyResults(query = '') {
  const container = $('#loyalty-customer-results');
  if (!container) return;

  const q = String(query).trim().toLowerCase();
  const matched = loyaltyMembers.filter(m => 
    !q || m.name.toLowerCase().includes(q) || m.phone.includes(q) || m.id.toLowerCase().includes(q)
  );

  if (matched.length === 0) {
    container.innerHTML = `<p class="modal-copy empty-note">No members found matching "${escapeHTML(query)}". Use the form below to register a new member.</p>`;
    return;
  }

  container.innerHTML = matched.map(m => `
    <div class="loyalty-result-item">
      <div>
        <strong>${escapeHTML(m.name)}</strong> <small>(${escapeHTML(m.phone)})</small><br>
        <span class="loyalty-stamp-badge">${m.stamps} / 12 Stamps</span>
        ${m.stamps >= 12 ? '<span class="reward-ready-badge">Free drink ready</span>' : ''}
      </div>
      <div class="loyalty-item-actions">
        <button type="button" class="button button-dark" data-attach-loyalty="${escapeHTML(m.id)}">Add to order</button>
        ${m.stamps >= 12 ? `<button type="button" class="button button-light" data-modal-redeem="${escapeHTML(m.id)}">Redeem free drink</button>` : ''}
      </div>
    </div>
  `).join('');

  $$('[data-attach-loyalty]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.attachLoyalty;
      const member = loyaltyMembers.find(m => m.id === id);
      if (member) {
        activeLoyaltyMember = member;
        updateLoyaltyCustomerDisplay();
        $('#loyalty-dialog').close();
        notify(`Attached ${member.name} to current ticket.`);
      }
    });
  });

  $$('[data-modal-redeem]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.modalRedeem;
      const member = loyaltyMembers.find(m => m.id === id);
      if (member && member.stamps >= 12) {
        $('#loyalty-dialog')?.close();
        redeemFreeDrinkForMember(member);
      }
    });
  });
}

function openStickerModal(order) {
  const container = $('#sticker-preview');
  if (!container) return;

  container.innerHTML = `
    <div class="sticker-brand">LE AUGEM CAFE · BARISTA STICKER</div>
    <div class="sticker-row"><span>TICKET:</span><strong>${escapeHTML(order.id)}</strong></div>
    <div class="sticker-row"><span>DATE/TIME:</span><span>${escapeHTML(order.date)} ${escapeHTML(order.time)}</span></div>
    <div class="sticker-row"><span>CUSTOMER:</span><strong>${escapeHTML(order.customer)}</strong></div>
    <div class="sticker-row"><span>SERVICE:</span><span>${escapeHTML(order.service)}</span></div>
    <hr style="border:0; border-top:1px dashed #444; margin:8px 0;">
    ${order.cartSnapshot.map(item => `
      <div class="sticker-item">${item.qty}x ${escapeHTML(item.name)}${item.isComp ? ' [Complimentary Item (₱0.00)]' : ''}</div>
      ${item.isComp ? `<div class="sticker-mods" style="color:var(--accent-green, #2e7d32); font-weight:bold;">• Complimentary Item (₱0.00)</div>` : ''}
      ${item.mods?.roast && item.mods.roast !== 'None' ? `<div class="sticker-mods">• Roast: ${escapeHTML(item.mods.roast)}</div>` : ''}
      ${item.mods?.milk && item.mods.milk !== 'None' && item.mods.milk !== 'Whole milk' ? `<div class="sticker-mods">• Milk: ${escapeHTML(item.mods.milk)}</div>` : ''}
      ${item.mods?.addons?.length ? `<div class="sticker-mods">• ${escapeHTML(item.mods.addons.join(', '))}</div>` : ''}
      ${item.mods?.syrup?.length ? `<div class="sticker-mods">• Syrups: ${escapeHTML(item.mods.syrup.join(', '))}</div>` : ''}
    `).join('')}

    <hr style="border:0; border-top:2px dashed #444; margin:14px 0 10px;">
    <div class="sticker-brand" style="margin-top:4px;">LE AUGEM CAFE · OFFICIAL RECEIPT</div>
    <div class="sticker-row"><span>ORDER NO:</span><strong>${escapeHTML(order.id)}</strong></div>
    <div class="sticker-row"><span>PAYMENT:</span><span>${escapeHTML(order.payment)} ${order.referenceNumber ? `(Ref: ${escapeHTML(order.referenceNumber)})` : ''}</span></div>
    <div style="margin:8px 0; border-top:1px dashed #888; border-bottom:1px dashed #888; padding:6px 0;">
      ${order.cartSnapshot.map(item => `
        <div style="display:flex; justify-content:space-between; margin:2px 0;">
          <span>${item.qty}x ${escapeHTML(item.name)}${item.isComp ? '<br><small style="color:var(--accent-green, #2e7d32); font-weight:bold;">Complimentary Item (₱0.00)</small>' : ''}</span>
          <span>${item.isComp ? '₱0.00' : peso(item.price * item.qty)}</span>
        </div>
      `).join('')}
    </div>
    <div class="sticker-row"><span>Gross Subtotal:</span><span>${peso(order.grossTotal || order.total)}</span></div>
    ${order.discountAmount ? `<div class="sticker-row"><span>Discount (${escapeHTML(order.discountType)}):</span><span>-${peso(order.discountAmount)}</span></div>` : ''}
    ${order.complimentaryCost ? `<div class="sticker-row"><span>Complimentary Goodwill Cost:</span><span style="color:var(--accent-green, #2e7d32);">${peso(order.complimentaryCost)}</span></div>` : ''}
    <div class="sticker-row" style="font-weight:bold; font-size:13px; margin-top:4px;"><span>TOTAL AMOUNT PAID:</span><span>${peso(order.total)}</span></div>
    <div class="sticker-row" style="font-size:10px; color:#555; margin-top:4px;"><span>VATable: ${peso(order.vatableSales || 0)}</span><span>VAT (12%): ${peso(order.vatAmount || 0)}</span></div>
    <div style="text-align:center; font-size:10px; color:#666; margin-top:8px;">Thank you for visiting Le Augem Cafe!</div>
  `;
  $('#sticker-modal').showModal();
}

// --- Manager Promos & Discounts Controller ---
function renderPromos() {
  const searchEl = $('#promo-search');
  const query = searchEl ? searchEl.value.trim().toLowerCase() : '';

  const activeCount = promos.filter(p => p.active).length;
  const pctCount = promos.filter(p => p.type === 'percentage').length;
  const fixedCount = promos.filter(p => p.type === 'fixed').length;

  const promoOrders = orders.filter(o => o.promoCode && o.promoCode !== 'LOYALTY_FREE_DRINK');
  const totalUses = promoOrders.length;

  if ($('#promo-metric-active')) $('#promo-metric-active').textContent = activeCount;
  if ($('#promo-metric-percentage')) $('#promo-metric-percentage').textContent = pctCount;
  if ($('#promo-metric-fixed')) $('#promo-metric-fixed').textContent = fixedCount;
  if ($('#promo-metric-uses')) $('#promo-metric-uses').textContent = totalUses;

  const filtered = promos.filter(p => {
    let matchesStatus = true;
    if (activePromoFilter === 'Active') matchesStatus = p.active;
    else if (activePromoFilter === 'Inactive') matchesStatus = !p.active;
    else if (activePromoFilter === 'percentage') matchesStatus = p.type === 'percentage';
    else if (activePromoFilter === 'fixed') matchesStatus = p.type === 'fixed';

    const matchesQuery = `${p.code} ${p.name}`.toLowerCase().includes(query);
    return matchesStatus && matchesQuery;
  });

  const rows = $('#promos-rows');
  if (!rows) return;

  if (!filtered.length) {
    rows.innerHTML = `<tr><td colspan="8" class="no-results">No promotions match your filter criteria.</td></tr>`;
    return;
  }

  rows.innerHTML = filtered.map(p => {
    const statusBadge = p.active
      ? `<span class="status-pill completed">Active</span>`
      : `<span class="status-pill voided">Inactive</span>`;

    const typeBadge = p.type === 'percentage'
      ? `<span class="service-pill">Percentage (%)</span>`
      : `<span class="service-pill">Fixed (₱)</span>`;

    const valDisplay = p.type === 'percentage' ? `${p.value}% Off` : `${peso(p.value)} Off`;
    const minDisplay = Number(p.minSpend) > 0 ? peso(p.minSpend) : '<span class="muted">None</span>';
    const capDisplay = (p.type === 'percentage' && Number(p.maxCap) > 0) ? peso(p.maxCap) : '<span class="muted">No cap</span>';

    return `
      <tr>
        <td><strong class="promo-code">${escapeHTML(p.code)}</strong></td>
        <td>
          <div class="strong">${escapeHTML(p.name)}</div>
        </td>
        <td>${typeBadge}</td>
        <td><strong>${valDisplay}</strong></td>
        <td>${minDisplay}</td>
        <td>${capDisplay}</td>
        <td>${statusBadge}</td>
        <td>
          <button class="restock-btn" data-toggle-promo="${escapeHTML(p.id)}">${p.active ? 'Disable' : 'Enable'}</button>
          <button class="restock-btn" data-edit-promo="${escapeHTML(p.id)}">✎ Edit</button>
          <button class="restock-btn is-danger" data-delete-promo="${escapeHTML(p.id)}">Remove</button>
        </td>
      </tr>
    `;
  }).join('');

  rows.querySelectorAll('[data-toggle-promo]').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = promos.find(item => item.id === btn.dataset.togglePromo);
      if (p) {
        p.active = !p.active;
        saveAll();
        renderPromos();
        notify(`Promo ${p.code} is now ${p.active ? 'Active' : 'Inactive'}.`);
      }
    });
  });

  rows.querySelectorAll('[data-edit-promo]').forEach(btn => {
    btn.addEventListener('click', () => {
      openPromoModal(btn.dataset.editPromo);
    });
  });

  rows.querySelectorAll('[data-delete-promo]').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = promos.find(item => item.id === btn.dataset.deletePromo);
      if (!p) return;
      if (typeof confirm !== 'undefined' && !confirm(`Are you sure you want to remove promo "${p.code}"?`)) return;
      promos = promos.filter(item => item.id !== p.id);
      saveAll();
      renderPromos();
      notify(`Promo code ${p.code} removed.`);
    });
  });
}

function openPromoModal(promoId = null) {
  const dialog = $('#promo-dialog');
  if (!dialog) return;

  const title = $('#promo-dialog-title');
  const idInput = $('#promo-id');
  const codeInput = $('#promo-code');
  const nameInput = $('#promo-name');
  const typeSelect = $('#promo-type');
  const valInput = $('#promo-value');
  const minSpendInput = $('#promo-min-spend');
  const maxCapInput = $('#promo-max-cap');
  const activeCheckbox = $('#promo-active');

  if (promoId) {
    const p = promos.find(item => item.id === promoId);
    if (!p) return;
    if (title) title.textContent = 'Edit Promotion';
    if (idInput) idInput.value = p.id;
    if (codeInput) codeInput.value = p.code;
    if (nameInput) nameInput.value = p.name;
    if (typeSelect) typeSelect.value = p.type;
    if (valInput) valInput.value = p.value;
    if (minSpendInput) minSpendInput.value = p.minSpend || 0;
    if (maxCapInput) maxCapInput.value = p.maxCap || 0;
    if (activeCheckbox) activeCheckbox.checked = !!p.active;
  } else {
    if (title) title.textContent = 'New Promotion';
    if (idInput) idInput.value = '';
    if (codeInput) codeInput.value = '';
    if (nameInput) nameInput.value = '';
    if (typeSelect) typeSelect.value = 'percentage';
    if (valInput) valInput.value = '';
    if (minSpendInput) minSpendInput.value = '0';
    if (maxCapInput) maxCapInput.value = '0';
    if (activeCheckbox) activeCheckbox.checked = true;
  }

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else {
    dialog.setAttribute('open', '');
  }
}

// --- Browser Event Wireup Function (Guaranteed Execution) ---
function initApp() {
  // Brand Click -> Return to Portal
  $('#brand-home-btn')?.addEventListener('click', () => setAppMode('portal'));

  // Navigation Links
  $$('[data-view]').forEach(btn => btn.addEventListener('click', () => showView(btn.dataset.view)));

  // Mode Switchers
  $$('[data-switch-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      setAppMode(btn.dataset.switchMode);
    });
  });

  // Service toggle
  $$('.service-option').forEach(btn => {
    btn.addEventListener('click', () => {
      activeService = btn.dataset.service;
      $$('.service-option').forEach(b => b.classList.toggle('selected', b === btn));
      renderCart();
    });
  });

  $('#menu-search')?.addEventListener('input', renderProducts);
  $('#clear-cart')?.addEventListener('click', () => {
    const hadLoyaltyReward = (appliedDiscount.promoCode === 'LOYALTY_FREE_DRINK') || activeCart.some(i => i.isLoyaltyReward);
    if (hadLoyaltyReward && activeLoyaltyMember) {
      activeLoyaltyMember.stamps += 12;
      activeLoyaltyMember.history.push({
        date: new Date().toISOString().slice(0, 10),
        type: 'refund',
        stamps: 12,
        note: 'Order cleared before checkout — 12 stamps refunded'
      });
      notify(`Order cleared. 12 loyalty stamps refunded to ${activeLoyaltyMember.name}.`);
    }
    activeCart = [];
    appliedDiscount = { type: 'none', idType: '', idLastDigits: '', promoCode: '', promoDiscount: 0 };
    if ($('#discount-type-select')) $('#discount-type-select').value = 'none';
    if ($('#id-capture-box')) $('#id-capture-box').hidden = true;
    if ($('#promo-input-box')) $('#promo-input-box').hidden = true;
    saveAll();
    updateLoyaltyCustomerDisplay();
    renderCart();
  });

  $('#modifier-form')?.addEventListener('change', () => {
    const pid = $('#mod-item-id').value;
    const p = products.find(item => item.id === pid);
    if (p) updateModModalTotal(p.price);
  });

  $('#modifier-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const pid = $('#mod-item-id').value;
    const product = products.find(p => p.id === pid);
    if (!product) return;

    const isBeverage = ['Coffee-Based', 'Chocolate', 'Matcha', 'Tea-Based'].includes(product.category);
    let mods = {};
    let extra = 0;

    if (isBeverage) {
      const roast = (product.category === 'Coffee-Based')
        ? ($('#modifier-form input[name="roast"]:checked')?.value || 'Harmonie (Smooth)')
        : 'None';
      const milk = $('#modifier-form input[name="milk"]:checked')?.value || 'Whole milk';
      const addons = $$('#modifier-form input[name="addons"]:checked').map(cb => cb.value);
      const syrup = $$('#modifier-form input[name="syrup"]:checked').map(cb => cb.value);

      if (milk === 'Oat milk') extra += 40;
      if (addons.includes('Chia seed')) extra += 20;
      if (addons.includes('Extra shot')) extra += 40;
      extra += syrup.length * 20;

      mods = { roast, milk, addons, syrup };
    } else {
      const prep = $('#modifier-form input[name="food_prep"]:checked')?.value || 'Warmed / Toasted';
      const cutlery = $$('#modifier-form input[name="food_cutlery"]:checked').map(cb => cb.value);
      mods = { prep, cutlery, milk: 'None', roast: 'None', addons: [], syrup: [] };
    }

    addToCart(product, mods, extra);
    $('#modifier-dialog').close();
    notify(`Added customized ${product.name} to ticket.`);
  });

  $('#discount-type-select')?.addEventListener('change', e => {
    const val = e.target.value;
    $('#id-capture-box').hidden = !(val === 'pwd' || val === 'senior');
    $('#promo-input-box').hidden = !(val === 'promo');
    if (val !== 'promo') appliedDiscount.promoDiscount = 0;
    renderCart();
  });

  $('#apply-promo-btn')?.addEventListener('click', () => {
    const code = $('#promo-code-input').value.trim().toUpperCase();
    const subtotal = activeCart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    const foundPromo = promos.find(p => p.code.toUpperCase() === code);

    if (!foundPromo) {
      appliedDiscount.promoDiscount = 0;
      appliedDiscount.promoCode = '';
      $('#promo-message').textContent = 'Invalid promo code.';
      notify('Invalid promo code.');
    } else if (!foundPromo.active) {
      appliedDiscount.promoDiscount = 0;
      appliedDiscount.promoCode = '';
      $('#promo-message').textContent = 'This promo code is currently inactive.';
      notify('Promo code is inactive.');
    } else if (Number(foundPromo.minSpend) > 0 && subtotal < Number(foundPromo.minSpend)) {
      appliedDiscount.promoDiscount = 0;
      appliedDiscount.promoCode = '';
      $('#promo-message').textContent = `Minimum order spend of ${peso(foundPromo.minSpend)} required.`;
      notify(`Min spend ${peso(foundPromo.minSpend)} required.`);
    } else {
      let discount = 0;
      if (foundPromo.type === 'percentage') {
        discount = subtotal * (Number(foundPromo.value) / 100);
        if (Number(foundPromo.maxCap) > 0 && discount > Number(foundPromo.maxCap)) {
          discount = Number(foundPromo.maxCap);
        }
      } else {
        discount = Math.min(subtotal, Number(foundPromo.value));
      }

      appliedDiscount.promoCode = foundPromo.code;
      appliedDiscount.promoDiscount = discount;
      $('#promo-message').textContent = `${foundPromo.name} applied (-${peso(discount)})`;
      notify(`Promo code ${foundPromo.code} applied (-${peso(discount)})`);
    }
    renderCart();
  });

  // Customer Loyalty Modal & Search Wireup
  $('#btn-loyalty-lookup')?.addEventListener('click', openLoyaltyModal);
  $('#loyalty-search')?.addEventListener('input', e => renderLoyaltyResults(e.target.value));

  $('#new-loyalty-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#loyalty-name').value.trim();
    const phone = $('#loyalty-phone').value.trim();
    if (!name || !phone) return;

    const newMember = {
      id: 'LOY-' + (1000 + loyaltyMembers.length + 1),
      name,
      phone,
      stamps: 0,
      history: []
    };

    loyaltyMembers.unshift(newMember);
    activeLoyaltyMember = newMember;
    saveAll();
    updateLoyaltyCustomerDisplay();
    $('#new-loyalty-form').reset();
    $('#loyalty-dialog').close();
    notify(`New loyalty member ${name} created and attached to ticket.`);
  });

  // Hold Ticket
  $('#hold-ticket-btn')?.addEventListener('click', () => {
    if (activeCart.length === 0) {
      notify('Current ticket is empty.');
      return;
    }
    const ticketLabel = prompt('Enter a label for this ticket (e.g. Table 4 / Sarah):', `Held #${pendingTickets.length + 1}`);
    if (!ticketLabel) return;

    pendingTickets.push({
      id: 'TKT-' + Date.now(),
      label: ticketLabel,
      time: new Date().toLocaleTimeString('en-PH', { hour: 'numeric', minute: '2-digit' }),
      items: [...activeCart],
      service: activeService,
      discountType: $('#discount-type-select')?.value || 'none'
    });
    activeCart = [];
    saveAll();
    updatePendingTicketsBadge();
    renderCart();
    notify(`Ticket "${ticketLabel}" held successfully.`);
  });

  // Resume Tickets
  $('#view-pending-btn')?.addEventListener('click', () => {
    if (pendingTickets.length === 0) {
      notify('No pending tickets to resume.');
      return;
    }
    $('#pending-tickets-list').innerHTML = pendingTickets.map((t, idx) => `
      <div class="pending-ticket-row">
        <div>
          <strong>${escapeHTML(t.label)}</strong>
          <small class="muted">${escapeHTML(t.time)} · ${t.items.reduce((sum, i) => sum + i.qty, 0)} items · ${escapeHTML(t.service)}</small>
        </div>
        <div class="row-actions">
          <button class="button button-light is-danger" data-delete-pending="${idx}">Discard</button>
          <button class="button button-dark" data-resume-index="${idx}">Resume</button>
        </div>
      </div>
    `).join('');

    $$('[data-resume-index]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.resumeIndex);
        const ticket = pendingTickets.splice(idx, 1)[0];
        activeCart = ticket.items;
        activeService = ticket.service;
        if ($('#discount-type-select')) $('#discount-type-select').value = ticket.discountType || 'none';
        saveAll();
        updatePendingTicketsBadge();
        renderCart();
        $('#pending-tickets-dialog').close();
        notify(`Ticket "${ticket.label}" resumed.`);
      });
    });

    $$('[data-delete-pending]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.deletePending);
        pendingTickets.splice(idx, 1);
        saveAll();
        updatePendingTicketsBadge();
        $('#pending-tickets-dialog').close();
        notify('Held ticket discarded.');
      });
    });

    $('#pending-tickets-dialog').showModal();
  });

  // Checkout Modal
  $('#checkout-button')?.addEventListener('click', () => {
    const total = appliedDiscount.computed.totalPayable;
    $('#payment-amount').textContent = peso(total);
    $('#payment-form').reset();
    $('#payment-method').value = 'Cash';
    $('#cash-tendered-box').hidden = false;
    $('#cashless-details-box').hidden = true;
    $('#change-due').textContent = '₱0.00';
    $('#cashless-datetime').value = new Date().toISOString().slice(0, 16);
    $('#payment-dialog').showModal();
  });

  $('#payment-method')?.addEventListener('change', e => {
    const method = e.target.value;
    const isCashless = method !== 'Cash';
    $('#cash-tendered-box').hidden = isCashless;
    $('#cashless-details-box').hidden = !isCashless;
    if (isCashless) {
      $('#cashless-provider').value = method === 'Card' ? 'BDO' : method;
    }
  });

  $('#cash-tendered')?.addEventListener('input', e => {
    const tendered = Number(e.target.value) || 0;
    const due = appliedDiscount.computed.totalPayable;
    const change = Math.max(0, tendered - due);
    $('#change-due').textContent = peso(change);
  });

  // Payment Form Submission
  $('#payment-form')?.addEventListener('submit', e => {
    e.preventDefault();
    if (activeCart.length === 0) return;

    const method = $('#payment-method').value;
    let refNumber = '';
    let provider = method;

    if (method !== 'Cash') {
      refNumber = $('#cashless-ref-number').value.trim();
      provider = $('#cashless-provider').value;
      if (!refNumber) {
        notify('Reference number is mandatory for cashless payments.');
        return;
      }
    }

    const discountType = $('#discount-type-select').value;
    let idType = '';
    let idLastDigits = '';
    if (discountType === 'pwd' || discountType === 'senior') {
      idType = $('#id-type-select').value;
      idLastDigits = $('#id-last-digits').value.trim();
      if (!idLastDigits || idLastDigits.length < 4) {
        notify('Please enter the last 4 digits of the ID for compliance.');
        return;
      }
    }

    let orderCOGS = 0;
    let complimentaryCost = 0;
    activeCart.forEach(item => {
      const itemCOGS = calculateProductCOGS(item.id, item.mods) * item.qty;
      if (item.isComp) {
        complimentaryCost += itemCOGS;
      } else {
        orderCOGS += itemCOGS;
      }
    });

    const now = new Date();
    const orderId = `#LA-${String(orders.length + 1).padStart(4, '0')}`;
    const customerName = $('#customer-name').value.trim() || activeLoyaltyMember?.name || 'Guest Customer';

    const orderRecord = {
      id: orderId,
      date: now.toISOString().slice(0, 10),
      time: now.toLocaleTimeString('en-PH', { hour: 'numeric', minute: '2-digit' }),
      timestamp: now.toISOString(),
      items: activeCart.map(i => `${i.name}${i.isComp ? ' [Complimentary Item (₱0.00)]' : ''}${i.qty > 1 ? ` × ${i.qty}` : ''}`).join(', '),
      cartSnapshot: JSON.parse(JSON.stringify(activeCart)),
      service: activeService,
      payment: method,
      referenceNumber: refNumber,
      paymentProvider: provider,
      grossTotal: appliedDiscount.computed.grossSubtotal,
      discountType,
      discountAmount: appliedDiscount.computed.discountAmount,
      complimentaryCost: Math.round(complimentaryCost * 100) / 100,
      idType,
      idLastDigits,
      promoCode: appliedDiscount.promoCode || '',
      vatableSales: appliedDiscount.computed.vatableSales,
      vatAmount: appliedDiscount.computed.vatAmount,
      vatExemptSales: appliedDiscount.computed.vatExemptSales,
      total: appliedDiscount.computed.totalPayable,
      cogs: Math.round(orderCOGS * 100) / 100,
      status: 'Completed',
      customer: customerName,
      loyaltyId: activeLoyaltyMember ? activeLoyaltyMember.id : null
    };

    if (activeLoyaltyMember) {
      const stampsEarned = activeCart.reduce((sum, item) => sum + item.qty, 0);
      activeLoyaltyMember.stamps += stampsEarned;
      activeLoyaltyMember.history.push({
        date: now.toISOString().slice(0, 10),
        type: 'earn',
        stamps: stampsEarned,
        note: `Order ${orderId}`
      });
    }

    deductInventoryForCart(activeCart);
    orders.unshift(orderRecord);
    saveAll();

    $('#payment-dialog').close();
    openStickerModal(orderRecord);

    activeCart = [];
    activeLoyaltyMember = null;
    updateLoyaltyCustomerDisplay();
    if ($('#discount-type-select')) $('#discount-type-select').value = 'none';
    if ($('#id-capture-box')) $('#id-capture-box').hidden = true;
    if ($('#promo-input-box')) $('#promo-input-box').hidden = true;

    renderCart();
    renderOrders();
    renderPortalPulse();
    renderFinance();
    renderVisualAnalytics();
    renderExecutiveReport();
    notify(`Order ${orderId} completed successfully.`);
  });

  // Sticker Print
  $('#btn-print-sticker')?.addEventListener('click', () => {
    notify('Printing cup label...');
    window.print();
  });
  $('#btn-close-sticker')?.addEventListener('click', () => $('#sticker-modal').close());

  // Print Executive Report
  $('#btn-print-report')?.addEventListener('click', () => {
    notify('Opening print preview for Executive Report...');
    window.print();
  });

  // Void Order
  $('#void-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const orderId = $('#void-order-id').value;
    const reason = $('#void-reason').value;
    const disposition = $('#void-disposition').value;
    const pin = $('#void-manager-pin').value.trim();

    if (pin !== '1234') {
      notify('Invalid manager PIN. Authorization failed.');
      return;
    }

    const order = orders.find(o => o.id === orderId);
    if (!order || order.status !== 'Completed') {
      notify('Order cannot be voided.');
      return;
    }

    if (disposition === 'balik') {
      order.status = 'Voided';
      order.disposition = 'Balik-Inventory (Restocked)';
      restoreInventoryForOrder(order);
      notify(`Order ${order.id} voided. Ingredients restored to stock.`);
    } else {
      order.status = 'Waste / Lugi';
      order.disposition = 'Waste (Lugi)';
      notify(`Order ${order.id} marked as Waste/Lugi. Loss recorded in finance.`);
    }

    order.voidReason = reason;
    order.voidAuthorizedBy = 'Manager (PIN verified)';
    order.voidTimestamp = new Date().toISOString();

    saveAll();
    $('#void-dialog').close();
    renderOrders();
    renderInventory();
    renderPortalPulse();
    renderFinance();
    renderVisualAnalytics();
    renderExecutiveReport();
  });

  // Stock-In Form
  $('#btn-stock-in')?.addEventListener('click', () => openStockInModal());
  $('#stock-in-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const ingId = Number($('#stock-in-item').value);
    const qty = Number($('#stock-in-qty').value);
    const totalCost = Number($('#stock-in-cost').value);
    const supplier = $('#stock-in-supplier').value.trim();
    const date = $('#stock-in-date').value || new Date().toISOString().slice(0, 10);

    const ing = inventory.find(i => i.id === ingId);
    if (!ing || qty <= 0 || totalCost <= 0) return;

    const currentValuation = ing.quantity * ing.cost;
    const newQuantity = ing.quantity + qty;
    const newCost = (currentValuation + totalCost) / newQuantity;

    ing.quantity = newQuantity;
    ing.cost = Math.round(newCost * 10000) / 10000;

    stockInHistory.unshift({
      id: 'STK-' + Date.now(),
      date,
      ingredientId: ing.id,
      ingredientName: ing.name,
      supplier,
      qtyAdded: qty,
      unit: ing.unit,
      totalCost,
      newUnitCost: ing.cost
    });

    saveAll();
    $('#stock-in-dialog').close();
    renderInventory();
    renderFinance();
    renderVisualAnalytics();
    notify(`Stocked in ${qty} ${ing.unit} of ${ing.name}.`);
  });

  // Spoilage / Discard Form Wireup
  $('#btn-spoilage-modal')?.addEventListener('click', () => openSpoilageModal());
  $('#spoilage-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const itemId = Number($('#spoilage-item').value);
    const qty = Number($('#spoilage-qty').value);
    const reason = $('#spoilage-reason').value;
    const date = $('#spoilage-date').value || new Date().toISOString().slice(0, 10);
    const notes = $('#spoilage-notes').value.trim();

    const ing = inventory.find(i => i.id === itemId);
    if (!ing || isNaN(qty) || qty <= 0) {
      notify('Please specify a valid item and quantity.');
      return;
    }

    const lossAmount = Math.round(qty * ing.cost * 100) / 100;
    ing.quantity = Math.max(0, ing.quantity - qty);

    const spoilageEntry = {
      id: 'SPL-' + Date.now(),
      date,
      timestamp: new Date().toISOString(),
      ingredientId: ing.id,
      ingredientName: ing.name,
      qty: Number(qty),
      unit: ing.unit,
      unitCost: ing.cost,
      totalCost: lossAmount,
      reason: reason || 'Expired Shelf-Life (Unsold)',
      notes
    };

    spoilageLedger.unshift(spoilageEntry);
    saveAll();

    $('#spoilage-dialog')?.close();
    renderInventory();
    renderFinance();
    renderPortalPulse();
    renderVisualAnalytics();
    renderExecutiveReport();
    notify(`Logged spoilage for ${qty} ${ing.unit} of ${ing.name} (-${peso(lossAmount)} loss).`);
  });

  // OpEx Expense Form
  $('#btn-add-expense')?.addEventListener('click', () => {
    $('#opex-form').reset();
    $('#opex-date').value = new Date().toISOString().slice(0, 10);
    $('#opex-dialog').showModal();
  });

  $('#opex-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const category = $('#opex-category').value;
    const amount = Number($('#opex-amount').value);
    const method = $('#opex-method').value;
    const description = $('#opex-description').value.trim();
    const date = $('#opex-date').value || new Date().toISOString().slice(0, 10);

    if (amount <= 0 || !description) return;

    opexLedger.unshift({
      id: 'OPX-' + Date.now(),
      date,
      category,
      amount,
      method,
      description
    });

    saveAll();
    $('#opex-dialog').close();
    renderFinance();
    renderPortalPulse();
    renderVisualAnalytics();
    renderExecutiveReport();
    notify(`Expense "${description}" recorded.`);
  });

  // Dashboard Mode Switcher (Sales vs Expenses & Operating)
  $$('[data-dashboard-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeDashboardTab = btn.dataset.dashboardTab === 'expenses' ? 'expenses' : 'sales';
      $$('[data-dashboard-tab]').forEach(b => {
        const isSelected = b === btn;
        b.classList.toggle('selected', isSelected);
        b.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      });
      if ($('#analytics-sales-panel')) $('#analytics-sales-panel').hidden = activeDashboardTab !== 'sales';
      if ($('#analytics-expenses-panel')) $('#analytics-expenses-panel').hidden = activeDashboardTab !== 'expenses';
      renderVisualAnalytics();
    });
  });

  // Analytics Filters
  $$('.analytics-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeAnalyticsRange = btn.dataset.range;
      $$('.analytics-filter-btn').forEach(b => b.classList.toggle('selected', b === btn));
      $('#custom-date-box').hidden = activeAnalyticsRange !== 'custom';
      renderVisualAnalytics();
      renderExecutiveReport();
    });
  });

  $('#btn-apply-custom-date')?.addEventListener('click', () => {
    renderVisualAnalytics();
    renderExecutiveReport();
  });

  
  $('#btn-seed-sim-portal')?.addEventListener('click', () => {
    loadTwoMonthsSimulation();
    notify('Loaded 2-month realistic dataset (600+ orders, OpEx & inventory).');
  });
  $('#btn-clear-sim-portal')?.addEventListener('click', () => {
    clearAllToZeroBaseline();
    notify('Reset all system records to 0 baseline.');
  });

  // Cash Drawer Count Verification
  $('#cash-count-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const counted = Number($('#counted-cash-input').value);
    const completedToday = orders.filter(o => o.status === 'Completed');
    const cashSales = completedToday.filter(o => o.payment === 'Cash').reduce((sum, o) => sum + o.total, 0);
    const expectedCash = currentShift.openingFloat + cashSales;
    const variance = counted - expectedCash;

    $('#shift-variance').textContent = peso(variance);
    const statusEl = $('#variance-status');
    if (Math.abs(variance) < 0.01) {
      statusEl.textContent = 'Balanced ✓';
      statusEl.style.color = 'var(--accent-green)';
    } else if (variance < 0) {
      statusEl.textContent = `Shortage (${peso(Math.abs(variance))})`;
      statusEl.style.color = 'var(--accent-red)';
    } else {
      statusEl.textContent = `Overage (+${peso(variance)})`;
      statusEl.style.color = 'var(--accent-gold)';
    }
    notify(`Shift verified. Drawer variance: ${peso(variance)}`);
  });

  // Orders Filter Chips
  $$('[data-order-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      activeOrderFilter = chip.dataset.orderFilter;
      $$('[data-order-filter]').forEach(c => c.classList.toggle('selected', c === chip));
      renderOrders();
    });
  });

  $('#order-search')?.addEventListener('input', renderOrders);

  // Export CSV
  $('#export-orders')?.addEventListener('click', () => {
    const headers = ['Order ID', 'Date', 'Time', 'Items', 'Service', 'Payment Method', 'Reference Number', 'Gross Total', 'Discount Type', 'Discount Amount', 'Total Net', 'COGS', 'Status', 'Customer'];
    const rows = orders.map(o => [
      o.id,
      o.date,
      o.time,
      o.items,
      o.service,
      o.payment,
      o.referenceNumber || '',
      o.grossTotal || o.total,
      o.discountType,
      o.discountAmount || 0,
      o.total,
      o.cogs || 0,
      o.status,
      o.customer || 'N/A'
    ]);

    const csvContent = [headers, ...rows].map(row => row.map(v => `"${String(v).replaceAll('"', '""')}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `le-augem-orders-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    notify('Order export downloaded.');
  });

  // Modal Closers
  $$('.modal').forEach(dialog => {
    const closeBtn = dialog.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => {
      if (e.target === dialog) dialog.close();
    });
  });

  // Inventory Search & Category Filters
  $('#inventory-search')?.addEventListener('input', renderInventory);
  $$('[data-inv-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      activeInventoryFilter = chip.dataset.invFilter;
      $$('[data-inv-filter]').forEach(c => c.classList.toggle('selected', c === chip));
      renderInventory();
    });
  });

  // Add / Edit Inventory Ingredient Form
  $('#add-item-button')?.addEventListener('click', () => openIngredientModal());
  $('#item-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const editId = $('#item-edit-id')?.value;
    const name = $('#new-item-name').value.trim();
    const category = $('#new-item-category').value;
    const unit = $('#new-item-unit').value;
    const cost = Number($('#new-item-cost').value);
    const qty = Number($('#new-item-qty').value);
    const par = Number($('#new-item-par').value);

    if (!name || isNaN(cost) || isNaN(qty) || isNaN(par)) return;

    if (editId) {
      const existing = inventory.find(i => i.id === Number(editId));
      if (existing) {
        existing.name = name;
        existing.category = category;
        existing.unit = unit;
        existing.cost = cost;
        existing.quantity = qty;
        existing.par = par;
        notify(`Updated ingredient "${name}".`);
      }
    } else {
      const nextId = inventory.length ? Math.max(...inventory.map(i => i.id)) + 1 : 1;
      inventory.push({
        id: nextId,
        name,
        category,
        unit,
        cost,
        quantity: qty,
        par
      });
      notify(`Added new ingredient "${name}".`);
    }

    saveAll();
    $('#item-dialog').close();
    renderInventory();
  });

  // Recipe Builder Form ("＋ Add to Recipe")
  $('#add-recipe-ingredient-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const productId = $('#recipe-product-id').value;
    const ingId = Number($('#recipe-ing-select').value);
    const qty = Number($('#recipe-ing-qty').value);

    if (!productId || !ingId || qty <= 0) return;

    const ing = inventory.find(i => i.id === ingId);
    if (!ing) return;

    if (!recipes[productId]) recipes[productId] = [];

    const existing = recipes[productId].find(r => r.ingredientId === ingId);
    if (existing) {
      existing.qty += qty;
    } else {
      recipes[productId].push({
        ingredientId: ingId,
        qty,
        unit: ing.unit
      });
    }

    saveAll();
    $('#recipe-ing-qty').value = '';
    renderRecipeList(productId);
    renderItems();
    notify(`Added ${qty} ${ing.unit} of ${ing.name} to recipe.`);
  });

  // Menu Search
  $('#items-search')?.addEventListener('input', renderItems);

  // Menu Groups Management
  function renderMenuGroupsList() {
    const container = $('#menu-groups-list');
    if (!container) return;

    container.innerHTML = menuGroups.map((g, idx) => `
      <div class="pending-ticket-row">
        <strong>${escapeHTML(g)}</strong>
        <button type="button" class="restock-btn is-danger" data-delete-group="${idx}">Remove</button>
      </div>
    `).join('');

    $$('[data-delete-group]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.deleteGroup);
        const removed = menuGroups.splice(idx, 1)[0];
        saveAll();
        renderMenuGroupsList();
        renderItemGroups();
        renderCategories();
        notify(`Removed menu group "${removed}".`);
      });
    });
  }

  $('#add-menu-group')?.addEventListener('click', () => {
    $('#create-group-form')?.reset();
    $('#create-group-dialog')?.showModal();
  });

  $('#create-group-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const newGroup = $('#new-menu-group-name').value.trim();
    if (!newGroup) return;

    if (!menuGroups.includes(newGroup)) {
      menuGroups.push(newGroup);
      saveAll();
      renderItemGroups();
      renderCategories();
      notify(`Created menu group "${newGroup}".`);
    } else {
      notify('Menu group already exists.');
    }
    $('#create-group-dialog').close();
  });

  $('#edit-menu-groups')?.addEventListener('click', () => {
    renderMenuGroupsList();
    $('#menu-groups-dialog')?.showModal();
  });
  $('#done-menu-groups')?.addEventListener('click', () => $('#menu-groups-dialog')?.close());

  // Add Item to Menu & Groups
  $('#add-menu-item')?.addEventListener('click', () => openProductModal());
  $('#menu-item-image')?.addEventListener('change', e => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      notify('Please select a valid image file.');
      e.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        syncMenuItemImagePreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  });
  $('#remove-menu-image')?.addEventListener('click', () => {
    if ($('#menu-item-image')) $('#menu-item-image').value = '';
    syncMenuItemImagePreview('');
  });
  $('#menu-item-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const id = $('#menu-item-id').value;
    const name = $('#menu-item-name').value.trim();
    const detail = $('#menu-item-detail').value.trim();
    const price = Number($('#menu-item-price').value);
    const category = $('#menu-item-category').value;
    const variant = $('#menu-item-variant').value;
    const emoji = $('#menu-item-emoji').value;

    if (!name || isNaN(price)) return;

    const existing = products.find(p => p.id === id);
    if (existing) {
      if (emoji !== (existing.emoji || '')) {
        existing.customIcon = true;
      }
      existing.name = name;
      existing.detail = detail;
      existing.price = price;
      existing.category = category;
      existing.variant = variant;
      existing.emoji = emoji;
      if (pendingMenuItemImage) {
        existing.image = pendingMenuItemImage;
      } else {
        delete existing.image;
      }
    } else {
      const newId = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      products.push({
        id: newId,
        name,
        detail,
        price,
        category,
        variant,
        emoji,
        customIcon: true,
        ...(pendingMenuItemImage ? { image: pendingMenuItemImage } : {})
      });
      recipes[newId] = [];
    }

    saveAll();
    $('#menu-item-dialog').close();
    renderItems();
    renderCategories();
    renderProducts();
    notify('Menu item saved.');
  });

  // Promo & Discount Management Wireup
  $('#btn-add-promo')?.addEventListener('click', () => openPromoModal());
  $('#promo-search')?.addEventListener('input', () => renderPromos());

  $$('#promo-status-filter [data-promo-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('#promo-status-filter [data-promo-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activePromoFilter = btn.dataset.promoFilter;
      renderPromos();
    });
  });

  $('#btn-cancel-promo')?.addEventListener('click', () => {
    const dialog = $('#promo-dialog');
    if (dialog) {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    }
  });

  $('#promo-dialog .modal-close')?.addEventListener('click', () => {
    const dialog = $('#promo-dialog');
    if (dialog) {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    }
  });

  $('#promo-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const id = $('#promo-id')?.value.trim();
    const code = $('#promo-code')?.value.trim().toUpperCase();
    const name = $('#promo-name')?.value.trim();
    const type = $('#promo-type')?.value;
    const value = parseFloat($('#promo-value')?.value || '0');
    const minSpend = parseFloat($('#promo-min-spend')?.value || '0');
    const maxCap = parseFloat($('#promo-max-cap')?.value || '0');
    const active = $('#promo-active')?.checked ?? true;

    if (!code || !name || isNaN(value) || value <= 0) {
      notify('Please enter a valid code, name, and positive discount value.');
      return;
    }

    const duplicate = promos.find(p => p.code.toUpperCase() === code && p.id !== id);
    if (duplicate) {
      notify(`Promo code "${code}" already exists.`);
      return;
    }

    if (id) {
      const p = promos.find(item => item.id === id);
      if (p) {
        p.code = code;
        p.name = name;
        p.type = type;
        p.value = value;
        p.minSpend = minSpend;
        p.maxCap = maxCap;
        p.active = active;
        notify(`Promo "${code}" updated successfully.`);
      }
    } else {
      const newPromo = {
        id: 'PRM-' + Date.now().toString(36).toUpperCase(),
        code,
        name,
        type,
        value,
        minSpend,
        maxCap,
        active
      };
      promos.push(newPromo);
      notify(`Promo "${code}" created successfully.`);
    }

    saveAll();
    const dialog = $('#promo-dialog');
    if (dialog) {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    }
    renderPromos();
  });

  // Initial Boot
  setAppMode('portal');
  
  renderPortalPulse();
  renderCategories();
  renderProducts();

  // Restore saved active discount UI state if present
  if (appliedDiscount && appliedDiscount.type && appliedDiscount.type !== 'none') {
    if ($('#discount-type-select')) $('#discount-type-select').value = appliedDiscount.type;
    if ($('#id-capture-box')) $('#id-capture-box').hidden = !(appliedDiscount.type === 'pwd' || appliedDiscount.type === 'senior');
    if ($('#promo-input-box')) $('#promo-input-box').hidden = !(appliedDiscount.type === 'promo');
    if ($('#promo-code-input') && appliedDiscount.promoCode) $('#promo-code-input').value = appliedDiscount.promoCode;
    if ($('#senior-pwd-id') && appliedDiscount.idLastDigits) $('#senior-pwd-id').value = appliedDiscount.idLastDigits;
  }
  if ($$('.service-option').length) {
    $$('.service-option').forEach(b => b.classList.toggle('selected', b.dataset.service === activeService));
  }

  renderCart();
  renderItems();
  renderItemGroups();
  renderPromos();
  renderInventory();
  renderOrders();
  renderFinance();
  renderVisualAnalytics();
  renderExecutiveReport();
  renderShift();
  updatePendingTicketsBadge();
  updateLoyaltyCustomerDisplay();
}

// Immediate execution if DOM is ready, or on DOMContentLoaded
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}

// CommonJS & Universal Global export bridge for Node.js test runner and browser environments
const LeAugemPOS = {
  defaultProducts,
  defaultInventory,
  defaultRecipes,
  calculateProductCOGS,
  deductInventoryForCart,
  restoreInventoryForOrder,
  recordSpoilageDiscard,
  getSpoilageLedger: () => spoilageLedger,
  getEligibleDrinkInCart,
  DRINK_CATEGORIES,
  REQUIRED_LOYALTY_STAMPS: 12,
  redeemFreeDrinkForMember,
  openRedeemDrinkModal,
  defaultPromos,
  getPromos: () => promos,
  setPromos: (p) => { promos = p; saveAll(); },
  renderPromos,
  openPromoModal,
  saveCartState,
  getActiveCart: () => activeCart,
  setActiveCart: (c) => { activeCart = c; saveCartState(); renderCart(); },
  getActiveLoyaltyMember: () => activeLoyaltyMember,
  setActiveLoyaltyMember: (m) => { activeLoyaltyMember = m; saveCartState(); updateLoyaltyCustomerDisplay(); },
  getAppliedDiscount: () => appliedDiscount,
  peso
};

if (typeof globalThis !== 'undefined') {
  globalThis.LeAugemPOS = LeAugemPOS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LeAugemPOS;
}
