export const WA_NUMBER = "6285122414249";
export const WA_TEXT = "Halo Doumi, saya tertarik dengan kemitraan Doumi. Mohon info lebih lanjut.";
export const waLink = (t = WA_TEXT) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`;

export const contact = {
  phone: "+62 851-2241-4249", email: "doumiofficial26@gmail.com",
  web: "www.doumiofficial26.com", ig: "@doumiofficial", address: "Jl Karah No.116 Surabaya",
};

export const stats = [
  { v: "95%", t: "masyarakat Indonesia lebih suka makanan siap santap" },
  { v: "51%", t: "transaksi online adalah makanan" },
  { v: "34%", t: "penyambung ekonomi kreatif adalah sektor kuliner" },
  { v: "Rp 47,5 T", t: "nilai layanan pesan antar makanan (USD 3,3 miliar)" },
];

export const market = [
  ["Persaingan semakin ketat", "Dibutuhkan konsep yang berbeda dan mudah dikenali"],
  ["Kebutuhan produk praktis", "Dibutuhkan produk yang praktis dan mudah diterima"],
  ["Pasar bakery sudah terbentuk", "Dibutuhkan produk dengan karakter dan daya tarik sendiri"],
  ["Operasional jadi tantangan", "Dibutuhkan sistem usaha yang terstruktur"],
];

export const values = [
  ["Konsep yang berbeda", "Donut & Milk yang mudah dikenali."],
  ["Fleksibel dalam penempatan", "Pilihan outlet disesuaikan dengan potensi lokasi."],
  ["Sistem operasional terstruktur", "Dilengkapi SOP, training, dan standar operasional usaha."],
  ["Dukungan & pendampingan", "Branding, promosi, dan pendampingan dari persiapan hingga operasional."],
];

export const menu = {
  Donat: [
    "Sweet Series (Bomboloni) — Rp 5.000: Taro Milky Cloud, Caramelized Biscoff, Coffee Tiramisu Bliss, Matcha Milky, Strawberry Milky",
    "Classic Series — Rp 4.000: Classic Chocolate, Chocolate Peanut, Double Choco, Snowy Dusting Mint",
    "Savory Series — Rp 5.000: Mayo Floss Delight, Cheesy Mentai Oregano",
    "Promo set isi 3: Classic Rp 10.000 • Sweet Rp 13.000",
  ],
  Minuman: [
    "Tea Series — Rp 8.000–10.000", "Coffee Series — Rp 7.000–10.000",
    "Matcha Series — Rp 12.000", "Milky Booster Series — Rp 8.000–12.000",
    "Choco Series — Rp 12.000", "Promo Ceban: kopi susu jadul / original milk + donat Rp 10.000 (50 porsi/hari)",
  ],
};

export const packages = [
  { name: "Doumi Reguler", price: "Rp 69 Juta", promo: "Normal Rp 89 Juta — promo khusus 5 mitra pertama (5 slot)",
    desc: "Untuk mitra yang ingin mengelola operasional usaha secara mandiri.",
    pts: ["Outlet container (belum termasuk sewa lokasi)", "Kontrak kerja sama 5 tahun", "Wajib membeli bahan baku dari Doumi sesuai ketentuan",
      "Mitra mengelola operasional harian", "Bimbingan, pendampingan, evaluasi berkala", "Dukungan promosi, marketing, pengembangan produk & inovasi"] },
  { name: "Doumi Autopilot", price: "Rp 79 Juta", promo: "Cukup duduk manis dan nikmati hasilnya",
    desc: "Untuk mitra yang ingin punya usaha tanpa terlibat langsung dalam operasional harian.",
    pts: ["Outlet container (belum termasuk sewa lokasi)", "Kontrak kerja sama 5 tahun", "Wajib membeli bahan baku dari Doumi Pusat",
      "Komisi 10% dari omzet kotor sebelum balik modal", "Komisi 5% dari omzet kotor setelah balik modal", "Tim Doumi membantu pengelolaan & pemantauan operasional"] },
];

export const included = ["Branding booth", "Peralatan usaha", "Starter produk", "Packaging", "SOP operasional", "Training karyawan", "Free marketing kit", "Supply bahan baku, apron & topi"];

export const partners = [
  { n: "Growth Partner", u: "10 Unit + FREE 2 Unit", p: "Rp 400 Juta", a: "12 kecamatan Surabaya (Tegal Sari, Kenjeran, Mulyorejo, Sawahan, Tambak Sari, Gubeng, Wiyung, Genteng, Sukolilo, Karang Pilang, Gayung, Gunung Anyar)" },
  { n: "Strategic Partner", u: "28 Unit + FREE 4 Unit", p: "Rp 1 Miliar", a: "Skala kota/regional" },
  { n: "Enterprise Partner", u: "44 Unit + FREE 6 Unit", p: "Rp 1,5 Miliar", a: "Skala regional luas" },
  { n: "National Partner", u: "90 Unit + FREE 10 Unit", p: "Rp 3 Miliar", a: "Skala nasional" },
];

export const steps = [
  ["Konsultasi", "Hubungi tim Doumi dan diskusikan konsep usaha."],
  ["Pilih Paket", "Tentukan paket kemitraan sesuai kebutuhan."],
  ["Survey Lokasi", "Tentukan lokasi yang sesuai untuk outlet."],
  ["Persiapan Outlet", "Booth, peralatan, produk, dan training dipersiapkan."],
  ["Grand Opening", "Outlet Doumi resmi beroperasi."],
];

export const KNOWLEDGE = `Doumi (Donut & Milk) adalah brand kuliner milik PAK D GROUP (berpengalaman sejak 2008), Jl Karah No.116 Surabaya.
Paket: ${packages.map(p => `${p.name} ${p.price} (${p.promo}). ${p.desc} ${p.pts.join("; ")}`).join(" | ")}.
Harga paket belum termasuk sewa lokasi. Kontrak 5 tahun. Mitra wajib beli bahan baku dari Doumi.
Partner multi-outlet: ${partners.map(p => `${p.n}: ${p.u}, ${p.p}`).join("; ")}.
Yang didapat mitra: ${included.join(", ")}.
Menu: ${[...menu.Donat, ...menu.Minuman].join(" | ")}.
Langkah bergabung: ${steps.map((s, i) => `${i + 1}. ${s[0]}`).join(", ")}.
Kontak: WA/Telp ${contact.phone}, email ${contact.email}, IG ${contact.ig}.
PENTING: semua transaksi hanya ke rekening atas nama Marsudi Utomo Sejahtera; Doumi tidak bertanggung jawab atas penipuan di luar itu.`;
