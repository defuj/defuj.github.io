# 🎨 Animation & Effects Guide

## Overview
Website ini dilengkapi dengan animasi dan efek visual yang canggih menggunakan **Framer Motion**, **TailwindCSS**, dan **Custom CSS Animations**.

## 🎬 Jenis Animasi

### 1. Hero Section
**Efek yang Diterapkan:**
- ✨ 3 Animated Gradient Backgrounds (berbeda kecepatan)
- ✨ 20 Floating Particles yang bergerak random
- ✨ Mouse Follower Effect (gradient mengikuti cursor)
- ✨ Animated Gradient Text dengan infinite loop
- ✨ Social Icons dengan hover scale + rotate
- ✨ CTA Buttons dengan shine effect

**Cara Kerja:**
```javascript
// Gradient bergerak dengan Motion
<motion.div 
  animate={{
    x: [0, 100, 0],
    y: [0, -50, 0],
    scale: [1, 1.2, 1],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
  }}
/>
```

### 2. Projects Section
**Efek yang Diterapkan:**
- ✨ Card lift on hover (translateY -10px)
- ✨ Image zoom effect (scale 1.1)
- ✨ Gradient border animation
- ✨ Shine overlay effect
- ✨ Stagger animation untuk card entrance
- ✨ Animated tags dengan individual delays

**Performance:**
- Menggunakan `transform` dan `opacity` (GPU-accelerated)
- Viewport detection untuk animasi on-scroll
- Smooth 60fps animations

### 3. Skills Section
**Efek yang Diterapkan:**
- ✨ 3D Card rotation (rotateY 5deg on hover)
- ✨ Animated progress bars dengan gradients
- ✨ Icon rotation 360deg on hover
- ✨ Pulse effect pada category icons
- ✨ Color-coded skills berdasarkan teknologi
- ✨ Shine effect pada progress bars

**Contoh Progress Bar:**
```javascript
<motion.div 
  initial={{ width: 0 }}
  whileInView={{ width: `${skill.level}%` }}
  transition={{ duration: 1.5 }}
/>
```

### 4. Navbar
**Efek yang Diterapkan:**
- ✨ Glass morphism dengan backdrop blur
- ✨ Active indicator dengan smooth transition
- ✨ Hover underline animation
- ✨ Mobile menu slide animation
- ✨ Logo hover effect

**Layout Animation:**
```javascript
<motion.div
  layoutId="navbar-indicator"
  transition={{ type: "spring", stiffness: 380 }}
/>
```

## 🎨 Custom CSS Animations

### Keyframe Animations:
1. **gradient** - Moving gradient (3s linear infinite)
2. **float** - Element floating up/down
3. **pulse-glow** - Pulsing glow effect
4. **shimmer** - Shine overlay movement
5. **fadeInUp** - Fade and slide up
6. **slideInLeft/Right** - Slide from sides
7. **scaleIn** - Scale entrance
8. **particle-float** - Particle movement

### Utility Classes:
- `.text-gradient` - Animated gradient text
- `.glass-effect` - Glassmorphism style
- `.glow-effect` - Glowing shadow
- `.card-hover` - Card hover effect
- `.shine` - Shine overlay effect

## ⚡ Performance Tips

### Optimizations Applied:
1. **GPU Acceleration**
   - Menggunakan `transform` dan `opacity`
   - Framer Motion otomatis apply `will-change`

2. **Viewport Detection**
   ```javascript
   whileInView={{ opacity: 1 }}
   viewport={{ once: true }}
   ```

3. **Smooth Scroll**
   ```css
   html {
     scroll-behavior: smooth;
   }
   ```

4. **Conditional Animations**
   - Animasi complex hanya di desktop
   - Simplified animations di mobile

## 🎯 Customization

### Mengubah Timing:
```javascript
// Di component yang ingin diubah
transition={{ 
  duration: 0.5,  // Ubah durasi
  delay: 0.2,     // Tambah delay
  ease: "easeOut" // Ubah easing
}}
```

### Mengubah Colors:
Ubah di `tailwind.config.js`:
```javascript
colors: {
  primary: {
    400: '#your-color',
    500: '#your-color',
  }
}
```

### Menambah Particle:
Di `Hero.jsx`, ubah array size:
```javascript
{[...Array(50)].map((_, i) => (  // 20 -> 50
  <motion.div ... />
))}
```

## 🐛 Troubleshooting

### Animasi Patah-patah?
- Check browser performance
- Reduce particle count
- Simplify animations di mobile

### Scroll Animation Tidak Trigger?
- Check `viewport={{ once: true }}`
- Adjust `margin` di viewport
- Pastikan element in viewport

### Layout Shift?
- Add `initial` state yang sama dengan final
- Use `layoutId` untuk smooth transitions

## 📱 Mobile Considerations

### Automatic Adjustments:
- Simplified animations
- Reduced particle count
- Touch-optimized interactions
- Lower blur intensity

### Manual Overrides:
```javascript
const isMobile = window.innerWidth < 768
const particleCount = isMobile ? 5 : 20
```

## 🔗 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [TailwindCSS Docs](https://tailwindcss.com)
- [CSS Tricks - Animations](https://css-tricks.com/almanac/properties/a/animation/)

---

**Dibuat oleh:** defuj  
**Tanggal:** 16 Desember 2024  
**Version:** 2.0
