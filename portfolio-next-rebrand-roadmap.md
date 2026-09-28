# Portfolio Next --- Creative Developer Rebrand

## Tujuan Project

Mengubah portfolio Next.js yang sekarang terasa seperti portfolio
template biasa menjadi **creative developer portfolio** yang lebih
premium, immersive, dan memiliki motion yang kuat seperti website
referensi `alejandroha.com/en`, tanpa menyalin desainnya secara mentah.

Target utama:

-   Visual minimal, editorial, dan typography-driven.
-   Motion digunakan untuk mengarahkan perhatian, bukan sekadar
    dekorasi.
-   Smooth scrolling menggunakan Lenis.
-   Scroll-based animation menggunakan GSAP + ScrollTrigger.
-   Micro-interactions seperti magnetic button, text reveal, image
    reveal, parallax, dan custom cursor.
-   Tetap ringan dan responsive.
-   Mobile tidak boleh diperlakukan sebagai versi desktop yang
    diperkecil.
-   Portfolio harus tetap berfokus pada identitas dan karya Thoriq.

------------------------------------------------------------------------

# Kondisi Saat Ini

Project menggunakan:

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   GSAP --- SUDAH TERINSTALL
-   Lenis --- SUDAH TERINSTALL

Struktur saat ini kurang lebih:

``` text
portfolio-next/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── tw-animate.css
│
├── components/
│   ├── bits/
│   ├── layouts/
│   ├── BubbleMenu.tsx
│   ├── GithubCalendar.tsx
│   └── LightRays.tsx
│
├── lib/
├── public/
│   ├── assets/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── sections/
│
└── package.json
```

## Status

-   [x] Next.js project
-   [x] React
-   [x] TypeScript
-   [x] Tailwind
-   [x] GSAP installed
-   [x] Lenis installed
-   [ ] Animation architecture
-   [ ] Visual rebrand
-   [ ] New Hero
-   [ ] Intro section
-   [ ] Project showcase
-   [ ] Horizontal project section
-   [ ] About
-   [ ] Experience
-   [ ] Tech stack marquee
-   [ ] Contact
-   [ ] Custom cursor
-   [ ] Magnetic interactions
-   [ ] Page transition
-   [ ] Mobile optimization
-   [ ] Performance optimization
-   [ ] Accessibility / reduced motion
-   [ ] Production QA

------------------------------------------------------------------------

# Prinsip Utama

## 1. Jangan Rewrite Project Dari Nol

Pertahankan project yang sudah ada.

Jangan langsung menghapus:

``` text
components/bits
components/layouts
BubbleMenu.tsx
GithubCalendar.tsx
LightRays.tsx
lib
public/assets
sections
```

Audit terlebih dahulu.

Komponen lama boleh dipertahankan jika masih berguna.

Komponen yang terlalu dekoratif atau berat boleh dihapus setelah
diketahui penggunaannya.

------------------------------------------------------------------------

## 2. Jangan Menambahkan Library Berlebihan

Stack animation utama:

``` text
GSAP
├── ScrollTrigger
└── @gsap/react

Lenis
```

Jangan langsung menambahkan:

``` text
Three.js
Framer Motion
R3F
particles.js
WebGL effects
```

kecuali memang ada kebutuhan desain yang jelas.

Tujuan awal adalah mendapatkan website yang terasa premium dengan DOM +
CSS + GSAP + Lenis.

------------------------------------------------------------------------

## 3. Motion Harus Memiliki Fungsi

Jangan membuat:

``` text
semua elemen bergerak
semua teks fade
semua gambar parallax
semua section punya transition
```

Gunakan motion untuk:

-   mengarahkan mata;
-   memberi hierarchy;
-   menunjukkan hubungan antar section;
-   memperjelas interaksi;
-   memberi feedback terhadap user.

------------------------------------------------------------------------

# TARGET VISUAL

Homepage final dirancang menjadi:

``` text
HOME
│
├── Navbar
│
├── Hero
│
├── Intro / Statement
│
├── Selected Works
│
├── Horizontal Projects
│
├── About
│
├── Experience
│
├── Stack / Marquee
│
├── Contact
│
└── Footer
```

Visual direction:

``` text
Minimal
Editorial
Typography-heavy
Large whitespace
Large typography
High contrast
Subtle accent color
Smooth motion
Large project imagery
Few but meaningful interactions
```

------------------------------------------------------------------------

# PHASE 1 --- FOUNDATION

## Status

Sudah selesai sebagian.

-   [x] Install GSAP
-   [x] Install Lenis
-   [ ] Buat animation architecture
-   [ ] Buat SmoothScroll
-   [ ] Integrasikan GSAP + Lenis + ScrollTrigger

------------------------------------------------------------------------

# PHASE 2 --- VISUAL REBRAND

## STATUS SAAT INI

**CURRENT STEP: STEP 2**

Fokus sekarang bukan membuat semua animasi.

Fokusnya adalah membangun identitas visual baru terlebih dahulu.

Urutan:

``` text
2.1 Audit desain lama
      ↓
2.2 Tentukan typography
      ↓
2.3 Tentukan color system
      ↓
2.4 Tentukan spacing system
      ↓
2.5 Buat Navbar baru
      ↓
2.6 Buat Hero baru
      ↓
2.7 Buat Intro section
```

------------------------------------------------------------------------

# STEP 2.1 --- Audit Project Lama

Sebelum mengubah desain, baca:

``` text
app/page.tsx
app/layout.tsx
app/globals.css

components/
sections/

package.json
```

Tujuan audit:

-   mengetahui section yang masih digunakan;
-   mengetahui komponen yang masih dipakai;
-   mengetahui font yang digunakan;
-   mengetahui warna;
-   mengetahui apakah Tailwind configuration sudah digunakan;
-   mengetahui asset yang tersedia;
-   mengetahui apakah ada animasi lama yang konflik dengan GSAP.

Jangan menghapus file hanya karena terlihat tidak dipakai.

------------------------------------------------------------------------

# STEP 2.2 --- Typography

Typography adalah bagian terpenting dari visual baru.

Target:

``` text
DISPLAY
Very large
Bold / semibold
Tight line-height
Tight letter-spacing

BODY
Simple
Readable
Small / medium
Normal line-height
```

Contoh hierarchy:

``` text
Hero:
8vw — 14vw

Section title:
6vw — 10vw

Project title:
5vw — 8vw

Body:
16px — 20px

Metadata:
12px — 14px
```

Nilai tersebut adalah starting point, bukan angka mutlak.

Typography harus responsive.

Contoh konsep:

``` css
.hero-title {
    font-size: clamp(4rem, 12vw, 12rem);
    line-height: 0.85;
    letter-spacing: -0.05em;
}
```

Jangan menggunakan terlalu banyak font.

Target:

``` text
1 display font
1 body font
```

atau satu font family dengan beberapa weight.

------------------------------------------------------------------------

# STEP 2.3 --- Color System

Jangan menggunakan banyak warna.

Mulai dari:

``` text
Background
Foreground
Muted
Accent
```

Contoh:

``` css
:root {
    --background: #f2f0eb;
    --foreground: #111111;
    --muted: #777777;
    --accent: #ff4d00;
}
```

Warna tersebut hanya contoh.

Pilih warna berdasarkan identitas portfolio setelah melihat project
screenshot/asset yang sebenarnya.

Target visual:

``` text
Background dominan
+
Typography kuat
+
1 accent color
```

Hindari:

``` text
gradient berlebihan
glow berlebihan
glassmorphism di setiap card
neon
shadow berlebihan
```

------------------------------------------------------------------------

# STEP 2.4 --- Spacing System

Gunakan whitespace sebagai bagian dari desain.

Contoh:

``` text
Section
padding-top: 15vh — 25vh
padding-bottom: 15vh — 25vh
```

Jangan membuat setiap section rapat.

Creative portfolio biasanya membutuhkan ruang agar typography dan image
memiliki impact.

------------------------------------------------------------------------

# STEP 2.5 --- Navbar

Buat:

``` text
THORIQ                     WORK   ABOUT   CONTACT
```

atau:

``` text
THORIQ                     MENU
```

Desktop:

-   fixed/sticky;
-   background transparan pada awal;
-   berubah ketika scroll jika diperlukan;
-   transition sangat halus.

Mobile:

``` text
THORIQ                         MENU
```

Jangan memaksakan desktop navigation ke mobile.

------------------------------------------------------------------------

# STEP 2.6 --- Hero

Hero adalah prioritas utama.

Target:

``` text
┌──────────────────────────────────────┐
│ THORIQ                     WORK      │
│                            ABOUT     │
│                                      │
│                                      │
│ WEB                                  │
│ DEVELOPER                             │
│                                      │
│ FROM INDONESIA.                      │
│                                      │
│                                      │
│                    SCROLL ↓          │
└──────────────────────────────────────┘
```

Jangan langsung memasukkan:

-   particle;
-   3D;
-   LightRays;
-   video background;
-   banyak floating object.

Hero harus kuat walaupun semua animasi dimatikan.

------------------------------------------------------------------------

# STEP 2.7 --- Intro

Contoh:

``` text
I BUILD DIGITAL
EXPERIENCES AND
WEB APPLICATIONS
WITH A FOCUS ON
FUNCTIONALITY AND
DETAIL.
```

Section ini nantinya akan mendapatkan:

``` text
Text Reveal
ScrollTrigger
```

Tetapi desain statisnya harus selesai terlebih dahulu.

------------------------------------------------------------------------

# PHASE 3 --- ANIMATION ENGINE

Setelah visual dasar selesai.

Buat:

``` text
components/
└── animation/
    ├── SmoothScroll.tsx
    ├── TextReveal.tsx
    ├── ImageReveal.tsx
    ├── Parallax.tsx
    ├── Magnetic.tsx
    └── PageReveal.tsx

lib/
└── gsap.ts
```

------------------------------------------------------------------------

# STEP 3.1 --- SmoothScroll

Buat satu provider/component:

``` text
components/animation/SmoothScroll.tsx
```

Tanggung jawab:

``` text
Lenis
   ↓
requestAnimationFrame
   ↓
GSAP ticker
   ↓
ScrollTrigger
```

Jangan membuat instance Lenis di setiap component.

Hanya boleh ada satu global smooth-scroll instance.

------------------------------------------------------------------------

# STEP 3.2 --- GSAP Context

Gunakan `@gsap/react`.

Setiap component yang memakai GSAP harus memiliki lifecycle yang aman.

Prinsip:

``` text
mount
 ↓
create GSAP animation
 ↓
component unmount
 ↓
cleanup
```

Hindari animation leak.

------------------------------------------------------------------------

# STEP 3.3 --- Text Reveal

Buat reusable component:

``` tsx
<TextReveal>
    I BUILD DIGITAL EXPERIENCES.
</TextReveal>
```

Efek:

``` text
hidden
 ↓
translateY
 ↓
opacity
 ↓
visible
```

Gunakan stagger untuk kata/line jika diperlukan.

------------------------------------------------------------------------

# STEP 3.4 --- Image Reveal

Buat:

``` tsx
<ImageReveal src="..." />
```

Efek:

``` text
image container
overflow: hidden

image
scale: 1.15
        ↓
scale: 1
```

Tambahkan clip/reveal jika cocok.

------------------------------------------------------------------------

# STEP 3.5 --- Parallax

Buat:

``` tsx
<Parallax>
    <Image />
</Parallax>
```

Gunakan secara selektif.

Jangan setiap gambar diberi parallax.

------------------------------------------------------------------------

# STEP 3.6 --- Magnetic Button

Contoh:

``` text
VIEW PROJECT
```

Ketika cursor mendekati:

``` text
button bergerak 5–15px
```

Bukan bergerak berlebihan.

Mobile:

``` text
disable
```

------------------------------------------------------------------------

# STEP 3.7 --- Custom Cursor

Desktop only.

Normal:

``` text
small circle
```

Hover link:

``` text
circle berubah
```

Hover project:

``` text
VIEW
```

Mobile:

``` text
disable
```

------------------------------------------------------------------------

# PHASE 4 --- PROJECT SHOWCASE

Ini harus menjadi salah satu bagian terkuat portfolio.

Project yang dapat ditampilkan:

``` text
TaxLearning
Aksademy
Bimwin
SmartCounting
BI Inspira
dan project relevan lainnya
```

Jangan memasukkan semua project.

Pilih project yang menunjukkan kemampuan berbeda.

Contoh:

``` text
TaxLearning
→ complex business system

Aksademy
→ e-learning / payment

Bimwin
→ government platform

SmartCounting
→ data / dashboard

Portfolio
→ frontend / animation
```

------------------------------------------------------------------------

# Project Card

Struktur:

``` text
01

TAXLEARNING

Tax education platform

[ LARGE IMAGE ]

Laravel · React · MySQL
```

Hover:

``` text
image scale
cursor interaction
metadata transition
```

------------------------------------------------------------------------

# PHASE 5 --- HORIZONTAL PROJECTS

Section:

``` text
SELECTED WORK

┌─────────────┐
│ TAXLEARNING │
└─────────────┘

        ┌─────────────┐
        │ AKSADEMY    │
        └─────────────┘

                ┌─────────────┐
                │ BIMWIN      │
                └─────────────┘
```

Vertical scrolling mengontrol horizontal movement.

Teknik:

``` text
ScrollTrigger
+
pin
+
scrub
+
horizontal translation
```

Section ini hanya digunakan jika hasil akhirnya tetap smooth di mobile.

Mobile boleh menggunakan horizontal native scroll jika GSAP horizontal
pin terasa terlalu berat/rumit.

------------------------------------------------------------------------

# PHASE 6 --- ABOUT

Buat sederhana.

Contoh:

``` text
ABOUT

I'm Thoriq, a web developer
focused on building modern
web applications and digital
experiences.
```

Tambahkan:

``` text
location
experience
current role
focus
```

Jangan membuat About menjadi CV panjang.

Detail lengkap dapat diarahkan ke halaman Resume/CV jika diperlukan.

------------------------------------------------------------------------

# PHASE 7 --- EXPERIENCE

Gunakan layout editorial.

Contoh:

``` text
EXPERIENCE

2025 — NOW
Junior Web Developer
Aksara Teknologi Mandiri

Laravel
React
Inertia
MySQL
```

Animasi cukup:

``` text
fade
translate
line reveal
```

Tidak perlu efek rumit.

------------------------------------------------------------------------

# PHASE 8 --- STACK / MARQUEE

Contoh:

``` text
LARAVEL — REACT — NEXT.JS — TYPESCRIPT — GSAP — MYSQL —
```

Animation:

``` text
← ← ← ← ←
```

Baris kedua:

``` text
→ → → → →
```

Gunakan CSS/GSAP ringan.

------------------------------------------------------------------------

# PHASE 9 --- CONTACT

Buat besar.

Contoh:

``` text
LET'S
WORK
TOGETHER.

hello@example.com
```

Button:

``` text
GET IN TOUCH ↗
```

Gunakan:

-   magnetic interaction;
-   subtle hover;
-   text movement.

Jangan terlalu banyak efek.

------------------------------------------------------------------------

# PHASE 10 --- PAGE TRANSITION

Setelah semua section stabil.

Baru buat:

``` text
page exit
 ↓
overlay
 ↓
page enter
```

Jangan membuat page transition di awal karena dapat menyulitkan
debugging routing dan animation lifecycle.

------------------------------------------------------------------------

# PHASE 11 --- PERFORMANCE

Ini WAJIB karena targetnya bukan hanya keren tetapi juga ringan.

## Images

Gunakan:

``` tsx
next/image
```

Jika memungkinkan.

Hindari:

``` text
gambar 8MB
gambar 12MB
video background 30MB
```

Target asset image harus dikompresi.

------------------------------------------------------------------------

## GSAP

Hindari:

``` text
1000 DOM elements
+
1000 ScrollTriggers
```

Gunakan animation pada section penting saja.

------------------------------------------------------------------------

## Lenis

Pastikan hanya ada satu instance global.

Jangan:

``` text
Hero → Lenis
Projects → Lenis
About → Lenis
```

Harus:

``` text
App
└── SmoothScroll
    ├── Hero
    ├── Projects
    ├── About
    └── Contact
```

------------------------------------------------------------------------

# PHASE 12 --- ACCESSIBILITY

Tambahkan:

``` css
@media (prefers-reduced-motion: reduce) {
    ...
}
```

Jika user meminta reduced motion:

``` text
disable:
- parallax
- smooth scrolling
- large entrance animation
- cursor animation
```

Content tetap harus dapat dibaca.

------------------------------------------------------------------------

# PHASE 13 --- RESPONSIVE

## Desktop

Fokus:

``` text
large typography
horizontal interaction
custom cursor
magnetic buttons
complex scroll animation
```

## Tablet

Kurangi:

``` text
font size
spacing
animation intensity
```

## Mobile

Prioritas:

``` text
readability
touch
performance
simple navigation
```

Jangan memaksakan semua desktop animation ke mobile.

------------------------------------------------------------------------

# PHASE 14 --- QA

Checklist:

``` text
[ ] npm run lint
[ ] npm run build
[ ] desktop Chrome
[ ] Safari
[ ] mobile Safari
[ ] mobile Chrome
[ ] slow network
[ ] reduced motion
[ ] keyboard navigation
```

Periksa:

``` text
[ ] tidak ada horizontal overflow
[ ] tidak ada layout shift besar
[ ] image tidak terlalu besar
[ ] scroll tetap smooth
[ ] GSAP cleanup benar
[ ] Lenis hanya satu instance
[ ] mobile tidak patah
```

------------------------------------------------------------------------

# IMPLEMENTATION RULES

## Rule 1

Jangan mengubah banyak file sekaligus.

Gunakan urutan:

``` text
1 feature
↓
test
↓
commit
↓
next feature
```

------------------------------------------------------------------------

## Rule 2

Sebelum membuat component baru:

``` text
cek apakah component serupa sudah ada
```

------------------------------------------------------------------------

## Rule 3

Sebelum menghapus component:

``` text
search seluruh project
```

untuk mengetahui apakah component masih digunakan.

------------------------------------------------------------------------

## Rule 4

Animation component harus reusable.

Jangan membuat:

``` text
TaxLearningSpecialAnimation.tsx
AksademySpecialAnimation.tsx
BimwinSpecialAnimation.tsx
```

jika efeknya sama.

Buat:

``` text
ImageReveal
TextReveal
Parallax
Magnetic
```

------------------------------------------------------------------------

# DEFINITION OF DONE

Project dianggap selesai jika:

``` text
[ ] Hero sudah memiliki visual identity yang kuat
[ ] Website tidak terlihat seperti template portfolio biasa
[ ] Typography menjadi elemen utama
[ ] Lenis berjalan smooth
[ ] GSAP terintegrasi dengan benar
[ ] ScrollTrigger digunakan secara selektif
[ ] Project showcase menarik
[ ] Ada minimal satu horizontal interaction
[ ] Ada text reveal
[ ] Ada image reveal
[ ] Ada magnetic interaction
[ ] Custom cursor hanya desktop
[ ] Mobile tetap nyaman
[ ] Reduced motion tersedia
[ ] Tidak ada animation leak
[ ] Tidak ada horizontal overflow
[ ] Image teroptimasi
[ ] npm run build berhasil
```

------------------------------------------------------------------------

# URUTAN KERJA SEKARANG

Karena GSAP dan Lenis sudah terinstall, **jangan langsung membuat
animasi**.

Kerjakan persis urutan berikut:

``` text
CURRENT
   ↓
STEP 2.1
Audit page.tsx
layout.tsx
globals.css
sections/
components/
   ↓
STEP 2.2
Tentukan typography
   ↓
STEP 2.3
Tentukan color system
   ↓
STEP 2.4
Tentukan spacing
   ↓
STEP 2.5
Redesign Navbar
   ↓
STEP 2.6
Redesign Hero
   ↓
STEP 2.7
Redesign Intro
   ↓
STOP
   ↓
Review visual
   ↓
PHASE 3
Animation Engine
```

## Penting

**Jangan lanjut ke Phase 3 sebelum Phase 2 secara visual sudah terasa
bagus walaupun semua animation dimatikan.**

Prinsipnya:

``` text
GOOD DESIGN
    +
GOOD MOTION
    =
GOOD CREATIVE PORTFOLIO
```

bukan:

``` text
BAD DESIGN
    +
LOTS OF ANIMATION
    =
GOOD WEBSITE
```

------------------------------------------------------------------------

# Next Action

Mulai dari:

``` text
app/page.tsx
app/layout.tsx
app/globals.css
```

Kemudian audit:

``` text
components/
sections/
```

Setelah struktur dipahami, implementasikan **STEP 2.2 --- Typography**.

Jangan membuat animation terlebih dahulu.
