# 🎂 Birthday Surprise Website

A production-ready, emotionally engaging, and fully customizable digital birthday experience built with Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion, and the HTML5 Audio API. Inspired by nostalgic anime aesthetics, cinematic storytelling, starry nightscapes, and heartfelt surprises.

---

## ✨ Features

- **🌸 Nostalgic Anime Aesthetic:** Dreamy gradient backdrops, floating stars and glowing heart particles, soft ambient lighting, and grain texture.
- **🎁 Opening Reveal & Confetti Ritual:** Engaging interactive opening screen that triggers smooth transitions, festive confetti explosions, and background birthday serenades.
- **💌 Heartfelt Birthday Letter:** Elegant letter card with wax seal badge, warm typography, and sign-offs.
- **📷 Interactive Memory Scrapbook:** Responsive photo gallery with hover zooms, caption tags, fallback image protection, and full-screen lightbox preview.
- **✨ Milestones Timeline:** Vertical glowing journey track depicting meaningful memories, road trips, and milestones.
- **💎 Reasons You're Special Cards:** Interactive appreciation cards revealing heartfelt compliments on click or all at once.
- **🎂 Blowable Birthday Cake & Candles:** Interactive cake with animated flickering flames that can be blown out individually or all at once (with candle smoke and starburst effects), plus a relight button.
- **🌟 Make a Wish Constellation:** Interactive wish-casting board where users can submit their own starry wishes in real time.
- **📦 Mystery Surprise Gift Box:** Interactive 3D-styled gift box that unties its ribbons to unveil secret surprises and bonus gift vouchers.
- **🎵 Functional HTML5 Audio Player:**
  - Play, pause, track skipping, seek bar, time display, volume control, mute toggle.
  - Spinning vinyl artwork, dynamic waveform visualizer, and mini-player / full-screen expanded modal modes.
  - Royalty-free nostalgic lo-fi audio pre-configured.
- **⚙️ Centralized Configuration System:** Easily personalize the recipient name, photos, letter, timeline, music, themes, and section visibility without touching code logic.

---

## 🚀 Quick Start & Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm run start
```

---

## 🎨 How to Personalize & Customize

All customization is handled in [`src/config/`](file:///d:/project/BirthdayWish%20template%201/src/config/):

### 1. Personal Details & Messages ([`src/config/birthday.config.ts`](file:///d:/project/BirthdayWish%20template%201/src/config/birthday.config.ts))
Edit the following fields:
```typescript
recipient: {
  name: "Sarah", // Birthday person's name
  nickname: "Starlight",
  age: 24, // Optional age
  relationship: "Best Friend", // e.g. "Partner", "Best Friend", "Sister"
},
sender: {
  name: "Alex",
  relationshipToRecipient: "Always by your side",
},
celebrationDate: "October 11",
```

### 2. Replacing Photos in Memory Gallery
1. Drop your images inside `public/images/gallery/` (e.g. `photo1.jpg`, `photo2.jpg`).
2. Update the `memoryGallery.items` array in [`src/config/birthday.config.ts`](file:///d:/project/BirthdayWish%20template%201/src/config/birthday.config.ts):
```typescript
{
  id: "photo-1",
  url: "/images/gallery/photo1.jpg",
  caption: "Our weekend picnic in the hills",
  date: "Summer 2024",
  tag: "Cherished Moments",
}
```

### 3. Adding Personal Songs & Background Music
1. Place audio files in `public/music/` (e.g. `birthday-song.mp3`).
2. In [`src/config/music.config.ts`](file:///d:/project/BirthdayWish%20template%201/src/config/music.config.ts), add or edit the track:
```typescript
{
  id: 'my-song',
  title: 'Our Favorite Song',
  artist: 'Artist Name',
  url: '/music/birthday-song.mp3',
  coverUrl: '/images/gallery/photo1.jpg',
}
```

### 4. Toggling & Reordering Sections
In `BIRTHDAY_CONFIG.sections`:
```typescript
sections: {
  hero: true,
  birthdayLetter: true,
  memoryGallery: true,
  timeline: true,
  reasonsSpecial: true,
  birthdayCake: true,
  makeAWish: true,
  surpriseReveal: true,
  finalWish: true,
}
```
Set any section to `false` to hide it instantly.

---

## ☁️ Deployment to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com).
3. Click **Add New...** -> **Project**.
4. Import your repository.
5. Next.js App Router defaults will be automatically detected:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
6. Click **Deploy**. Your custom birthday surprise will be live within seconds!
