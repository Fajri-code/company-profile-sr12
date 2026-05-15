// ===== DATA PRODUK =====
// Ganti nilai "image" dengan nama file gambar lo (taruh di folder img/)
// Contoh: image: 'img/serum.jpg'
// Kalau gambar belum ada, hapus property image-nya → otomatis pakai emoji

const products = [
  {
    id: 1, cat: 'Personal Care',
    image: 'Revisivco.jpg',   // ← ganti nama file gambar
    emoji: '💆',
    name: 'Virgin Coconut Oil (VCO)',
    desc: 'Rasakan Keajaiban Alami dalam Setiap Tetes: Virgin Coconut Oil (VCO) SR12 Hadir untuk Memanjakan Kesehatan dan Kecantikan Anda!.',
    cat_label: 'Personal Care', price: 'Rp 85.000', badge: 'Terlaris'
  },
  {
    id: 2, cat: 'Personal Care',
    image: 'Revisilivemouse.jpg',   // ← ganti nama file gambar
    emoji: '🌟',
    name: 'Lip Mousse Cream',
    desc: 'Lip Mousse Cream SR12 adalah produk pewarna bibir dengan tekstur mousse yang ringan dan hasil akhir semi-matte. Diformulasikan dengan pigmentasi tinggi, produk ini mampu menutupi warna bibir dengan sempurna dalam se  kali pulasan.',
    cat_label: 'Personal Care', price: 'Rp 45.000', badge: 'Populer'
  },
  {
    id: 3, cat: 'Face Care',
    image: 'Revisigoldserum.jpg',   // ← ganti nama file gambar
    emoji: '✨',
    name: 'Gold Serum',
    desc: 'Membantu mempertahankan kelembapan alami kulit, membantu menyamarkan garis-garis halus sehingga kulit tampak lebih lembab dan kenyal',
    cat_label: 'Face Care', price: 'Rp 147.000', badge: ''
  },
  {
    id: 4, cat: 'Face Care',
    image: 'Revisinight.jpg',   // ← ganti nama file gambar
    emoji: '💧',
    name: 'Brightening Night Cream',
    desc: 'Krim malam dengan kandungan Arisaema Amurense Extract dapat serta Kolagen yang dapat Melembapkan kulit wajah',
    cat_label: 'Face Care', price: 'Rp 121.000', badge: ''
  },
  {
    id: 5, cat: 'herbal',
    image: 'Revisigomilku.jpg',   // ← ganti nama file gambar
    emoji: '🌿',
    name: 'Susu Kambing Gomilku',
    desc: 'Susu Kambing Gomilku adalah susu kambing etawa murni yang kaya nutrisi, mudah dicerna, dan meningkatkan daya tahan tubuh. Cocok untuk semua usia, dari anak-anak hingga lansia. Pilihan terbaik untuk kesehatan keluarga Anda! ',
    cat_label: 'Herbal', price: 'Rp 120.000', badge: 'Terlaris'
  },
  {
    id: 6, cat: 'herbal',
    image: 'Revisistevia.jpg ',   // ← ganti nama file gambar
    emoji: '🍵',
    name: 'Stevia12',
    desc: 'Stevia12 SR12 adalah pemanis alami tanpa gula dan tanpa kalori yang aman untuk penderita diabetes, diet keto, maupun gaya hidup sehat. Rasanya manis alami dari daun stevia, tanpa efek samping berbahaya.',
    cat_label: 'Herbal', price: 'Rp 75.000', badge: ''
  },
  {
    id: 6, cat: 'herbal',
    image: 'Revisihabba.jpg ',   // ← ganti nama file gambar
    emoji: '🍵',
    name: 'Habbatussauda',
    desc: 'Dengan rrutin konsumsi suplemen asupan Habbatussauda SR12 untuk menjaga daya tahan tubuh tetap sehat dan aktif',
    cat_label: 'Herbal', price: 'Rp 75.000', badge: ''
  },
  {
    id: 7, cat: 'bodycare',
    image: 'Revisideodorant.jpg',   // ← ganti nama file gambar
    emoji: '🛁',
    name: 'Deodorant Spray Premium',
    desc: 'Deodorant Spray Premium SR12, deodorant alami yang efektif menghilangkan bau badan, tidak meninggalkan noda, dan aman untuk kulit sensitif. Diformulasikan dengan bahan-bahan alami seperti jeruk nipis dan tawas. Dapatkan perlindungan maksimal dengan Deodorant SR12!',
    cat_label: 'Bodycare', price: 'Rp Rp63.000', badge: 'Populer'
  },
  {
    id: 8, cat: 'bodycare',
    image: 'Revisi.jpg',   // ← ganti nama file gambar
    emoji: '🧴',
    name: 'Skinsane Body Scrub',
    desc: 'Perawatan Kulit (BodyCare) Yang Berbentuk Scrub Membantu Melembutkan dan Meremajakan Kulit Agar Terlihat Lebih Cerah dan Sehat',
    cat_label: 'Bodycare', price: 'Rp Rp55.000-Rp77.000', badge: ''
  },
   {
    id: 8, cat: 'bodycare',
    image: 'Revisibodywash.png',   // ← ganti nama file gambar
    emoji: '🧴',
    name: 'Body Wash Coffee',
    desc: 'Membantu membersihkan sel-sel kulit mati dan kotoran, debu, minyak serta keringat yang berada di seluruh badan',
    cat_label: 'Bodycare', price: 'RpRp31.500-Rp63.000', badge: ''
  },
   {
    id: 8, cat: 'bodycare',
    image: 'Revisimis.jpg',   // ← ganti nama file gambar
    emoji: '🧴',
    name: 'Paket Miss Manja – Wash and Spray',
    desc: 'Paket Miss Manja SR12: Wash & Spray, jaga kebersihan & kesegaran area kewanitaan! Alami, cegah bau & iritasi. Beli Sekarang!',
    cat_label: 'Bodycare', price: 'Rp 85.000', badge: ''
  },
  {
    id: 9, cat: 'Face Care',
    image: ' Revisidna.jpg',   // ← ganti nama file gambar
    emoji: '💆',
    name: 'Paket DNA Salmon',
    desc: 'Paket DNA Salmon SR12: Kulit glowing, kenyal & awet muda! Revitalisasi, regenerasi & lindungi kulitmu. Beli Sekarang.',
    cat_label: 'Face Care', price: 'Rp 187.000', badge: 'Terlaris'
  },
  {
    id: 10, cat: 'Haircare',
    image: 'Revisicoconut.jpg',  // ← ganti nama file gambar
    emoji: '🌸',
    name: 'Coconut Shampoo Tube',
    desc: 'Membersihkan, menyegarkan kulit kepala serta membantu melembutkan rambut, shingga kulit kepala dan rambut menjadi bersih dan segar.',
    cat_label: 'Haircare', price: 'Rp 90.000', badge: ''
  },
   {
    id: 13, cat: 'Haircare',
    image: 'Revisihairtonic.jpg',  // ← ganti nama file gambar
    emoji: '🌸',
    name: 'Hair Tonic Protection Spray Anti Dundruff',
    desc: 'Hair Tonic Anti Dandruff: Atasi ketombe membandel & dapatkan rambut sehat! Formula alami, seimbangkan kulit kepala, cegah ketombe datang lagi. Beli Sekarang!',
    cat_label: 'Haircare', price: 'Rp 185.000', badge: ''
  },
  {
    id: 11, cat: 'Hair Care',
    image: 'Revisihairserum.jpg',  // ← ganti nama file gambar
    emoji: '🎭',
    name: 'Hair Serum With Rose Oil',
    desc: 'Hair Serum with Rose Oil. Dapatkan rambut sehat, berkilau, dan harum alami dengan sentuhan mewah rose oil. Serum ringan, menutrisi, dan melindungi. Beli Sekarang! ',
    cat_label: 'Skincare', price: 'Rp 95.000', badge: 'Baru'
  },
  {
    id: 12, cat: 'bodycare',
    image: 'Revisibulus.jpg',  // ← ganti nama file gambar
    emoji: '🌺',
    name: 'Minyak Bulus',
    desc: 'Minyak Bulus SR12 adalah minyak herbal multifungsi yang diformulasikan dari ekstrak lemak bulus asli. Dengan kandungan vitamin A, vitamin E, dan asam lemak esensial, produk ini efektif untuk mengencangkan dan meningkatkan elastisitas kulit, menyamarkan stretch mark serta bekas luka, melembapkan, dan meremajakan kulit. Aman digunakan secara rutin dan telah terdaftar di BPOM dengan nomor NA18170104192',
    cat_label: 'Bodycare', price: 'Rp 100.000', badge: ''
  },
  {
    id: 1, cat: 'Personal Care',
    image: 'Revisisalimah.jpg',   // ← ganti nama file gambar
    emoji: '💆',
    name: 'Salimah Slim',
    desc: 'Salimah Slim SR12 adalah kapsul herbal alami yang diformulasikan untuk membantu menjaga berat badan ideal. Mengandung ekstrak pilihan yang mendukung metabolisme tubuh, mengurangi lemak berlebih, serta menjaga kesehatan pencernaan. Cocok dikonsumsi sebagai pendukung program diet sehat dan gaya hidup lebih ideal.',
    cat_label: 'Personal Care', price: 'Rp 85.000', badge: ''
  },
];

// ===== DATA GALERI =====
// Ganti nilai "image" dengan nama file gambar lo (taruh di folder img/)
const galeriData = [
  { image: 'LOGO.jpg', label: 'Skincare Premium', overlay: 'Skincare Collection', emoji: '✨' },
  { image: 'GOMILKUGALERI.png', label: 'Produk Herbal SR12',       overlay: 'Herbal Products',     emoji: '🌿' },
  { image: 'BODYCARE.png', label: 'Bodycare Series',          overlay: 'Bodycare Series',      emoji: '🛁' },
  { image: 'HAIRSERUMDANTUNIC.png', label: 'Haircare Treatment',       overlay: 'Haircare Treatment',   emoji: '💆' },
  { image: 'MITRA.png', label: 'Business Starter Kit',        overlay: 'Business Starter Kit',    emoji: '👑' },
  { image: 'SR12.png', label: 'Bahan Alami SR12',         overlay: 'Natural Ingredients',  emoji: '🌺' },
];

const testimonials = [
  { emoji:'👩', name:'Siti Rahayu',   city:'Tasikmalaya', stars:5, text:'SR12 Face Serum benar-benar mengubah kulit saya! Dalam 2 minggu, wajah saya terasa lebih cerah dan lembap. Produk original, harga terjangkau, dan pelayanannya ramah banget!' },
  { emoji:'👨', name:'Ahmad Fauzi',   city:'Bandung',     stars:5, text:'Sudah 3 bulan pakai SR12 Jamu Herbal, badan terasa lebih fit dan stamina meningkat. Recommended banget, apalagi langsung konsultasi gratis sebelum beli!' },
  { emoji:'👩', name:'Dewi Kartini',  city:'Jakarta',     stars:5, text:'Body lotion SR12 ini luar biasa! Kulit saya jadi jauh lebih halus dan cerah. Pengiriman juga cepat, packaging rapi. Pasti order lagi!' },
  { emoji:'🧑', name:'Budi Santoso',  city:'Surabaya',    stars:5, text:'SR12 Shampoo herbal ini bagus banget! Rambut saya yang dulu rontok parah, sekarang sudah jauh berkurang. Harga terjangkau dan jelas original.' },
  { emoji:'👩', name:'Rina Wulandari',city:'Yogyakarta',  stars:5, text:'Senang banget belanja di sini! Produknya original, admin responsif 24 jam, bisa konsultasi kapan saja. Sudah jadi pelanggan setia lebih dari 1 tahun!' },
  { emoji:'👩', name:'Nurul Hidayah', city:'Semarang',    stars:5, text:'SR12 Sunscreen-nya ringan banget di kulit, ga bikin gerah. Cocok banget buat aktivitas outdoor. Packing cantik, harga oke, pelayanan ramah!' },
];

// ===== HELPER: cek apakah gambar ada =====
// Kalau gambar gagal load → fallback ke emoji otomatis
function produkImgHTML(p) {
  if (p.image) {
    return `
      <img
        src="${p.image}"
        alt="${p.name}"
        style="width:100%;height:100%;object-fit:cover;display:block;"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      >
      <div class="produk-img-emoji-wrap" style="display:none;width:100%;height:100%;align-items:center;justify-content:center;flex-direction:column;">
        <div class="produk-img-bg"></div>
        <div class="produk-img-emoji">${p.emoji}</div>
      </div>
    `;
  }
  return `
    <div class="produk-img-bg"></div>
    <div class="produk-img-emoji">${p.emoji}</div>
  `;
}

function galeriImgHTML(g) {
  if (g.image) {
    return `
      <img

        src="${g.image}"
        alt="${g.label}"
        style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      >
      <div style="display:none;width:100%;height:100%;align-items:center;justify-content:center;flex-direction:column;gap:8px;padding:20px;position:relative;">
        <div class="galeri-emoji">${g.emoji}</div>
        <div class="galeri-label">${g.label}</div>
      </div>
    `;
  }
  return `
    <div class="galeri-emoji">${g.emoji}</div>
    <div class="galeri-label">${g.label}</div>
  `;
}

// ===== RENDER PRODUCTS =====
function renderProducts(cat) {
  const grid = document.getElementById('produkGrid');
  const filtered = cat === 'all' ? products : products.filter(p => p.cat === cat);
  grid.innerHTML = filtered.map((p, i) => `
    <div class="produk-card reveal" style="transition-delay:${i * 0.08}s">
      <div class="produk-img">
        ${produkImgHTML(p)}
        ${p.badge ? `<div class="produk-badge">${p.badge}</div>` : ''}
      </div>
      <div class="produk-body">
        <div class="produk-cat">${p.cat_label}</div>
        <div class="produk-name">${p.name}</div>
        <div class="produk-desc">${p.desc}</div>
      </div>
      <div class="produk-footer">
        <div class="produk-price">${p.price}</div>
        <a href="https://wa.me/6289533041539?text=Halo%2C%20saya%20mau%20order%20${encodeURIComponent(p.name)}" target="_blank" class="produk-order" title="Order via WhatsApp">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  `).join('');
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }, 50);
}

// ===== RENDER GALERI =====
function renderGaleri() {
  const grid = document.querySelector('.galeri-grid');
  if (!grid) return;
  grid.innerHTML = galeriData.map((g, i) => `
    <div class="galeri-item">
      <div class="galeri-inner" style="padding:0;position:relative;">
        ${galeriImgHTML(g)}
      </div>
      <div class="galeri-overlay">
        <i class="fa fa-search-plus"></i>
        <span>${g.overlay}</span>
      </div>
    </div>
  `).join('');
}

// ===== RENDER TESTIMONIALS =====
function renderTestimonials() {
  const track = document.getElementById('testiTrack');
  const doubled = [...testimonials, ...testimonials];
  track.innerHTML = doubled.map(t => `
    <div class="testi-card">
      <div class="testi-stars">${'★'.repeat(t.stars)}</div>
      <div class="testi-text">"${t.text}"</div>
      <div class="testi-author">
        <div class="testi-avatar">${t.emoji}</div>
        <div class="testi-info">
          <strong>${t.name}</strong>
          <span>${t.city}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== CATEGORY TABS =====
document.querySelectorAll('.cat-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderProducts(tab.dataset.cat);
  });
});

// ===== SCROLL OBSERVER =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

function observeAll() {
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('backTop').classList.toggle('visible', window.scrollY > 400);
});

// ===== ACTIVE NAV LINKS =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeMenu = document.getElementById('closeMenu');

function openMenu() { mobileMenu.classList.add('open'); mobileOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMobileMenu() { mobileMenu.classList.remove('open'); mobileOverlay.classList.remove('open'); document.body.style.overflow = ''; }

hamburger.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));

// ===== DARK MODE =====
const darkToggle = document.getElementById('darkToggle');
let isDark = localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme(dark) {
  isDark = dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  darkToggle.innerHTML = dark ? '<i class="fa fa-sun"></i>' : '<i class="fa fa-moon"></i>';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}
applyTheme(isDark);
darkToggle.addEventListener('click', () => applyTheme(!isDark));

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const heroObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target, parseInt(e.target.dataset.count)); heroObs.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(c => heroObs.observe(c));

const statObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(document.getElementById('s1'), 500);
      animateCounter(document.getElementById('s2'), 1000);
      animateCounter(document.getElementById('s5'), 50);
      statObs.disconnect();
    }
  });
}, { threshold: 0.5 });
statObs.observe(document.getElementById('statistik'));

// ===== FORM SUBMIT =====
function submitForm() {
  const name  = document.querySelector('.kontak-form-card input[type="text"]').value;
  const phone = document.querySelector('.kontak-form-card input[type="tel"]').value;
  const msg   = document.querySelector('.kontak-form-card textarea').value;
  if (!name || !phone) { alert('Mohon lengkapi nama dan nomor WhatsApp Anda.'); return; }
  const waMsg = encodeURIComponent(`Halo, saya ${name} (${phone}).\n${msg || 'Saya ingin mengetahui lebih lanjut tentang produk SR12.'}`);
  window.open(`https://wa.me/6289533041539?text=${waMsg}`, '_blank');
}

// ===== LOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    observeAll();
  }, 2000);
});

// ===== INIT =====
renderProducts('all');
renderGaleri();
renderTestimonials();
observeAll();