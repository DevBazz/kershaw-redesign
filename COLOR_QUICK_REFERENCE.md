# Quick Color Reference Guide

## 🎨 Color Swatches

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  PRIMARY - Deep Ocean Blue                                  │
│  #2C5F7C                                                    │
│  RGB(44, 95, 124)                                           │
│  ████████████████████████████████████████                   │
│                                                             │
│  Use for: Main buttons, CTAs, navigation, brand elements    │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  SECONDARY - Luxe Gold                                      │
│  #D4AF37                                                    │
│  RGB(212, 175, 55)                                          │
│  ████████████████████████████████████████                   │
│                                                             │
│  Use for: Icons, accents, labels, badges, hover states      │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  TERTIARY - Saddle Brown                                    │
│  #8B4513                                                    │
│  RGB(139, 69, 19)                                           │
│  ████████████████████████████████████████                   │
│                                                             │
│  Use for: Button hovers, gradients, warm accents            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Quick Usage Guide

### Buttons

```
┌──────────────────────┐
│   Primary Button     │  ← Primary (#2C5F7C)
│   [Hover State]      │  ← Tertiary (#8B4513)
└──────────────────────┘

┌──────────────────────┐
│  Secondary Button    │  ← Border: black/10
│   [Hover State]      │  ← Border: Secondary (#D4AF37)
└──────────────────────┘
```

### Icons

```
🏠 📍 🛏️ 🚿 → Secondary (#D4AF37)
```

### Badges

```
┌─────────────┐
│  EXCLUSIVE  │ → Background: Secondary (#D4AF37)
└─────────────┘

┌─────────────┐
│  FEATURED   │ → Background: Secondary (#D4AF37)
└─────────────┘
```

### Gradients

```
Primary → Secondary → Tertiary
  🔵  →    🟡    →    🟤
```

---

## 📊 Color Distribution

```
Component Usage:

Hero Section:
├─ Badge: Secondary ████████
├─ Buttons: Primary → Tertiary ████████
├─ Orbs: All three colors ████████
└─ Grid: Primary ████████

Property Cards:
├─ Badge: Secondary ████████
├─ Icons: Secondary ████████
├─ Button: Primary ████████
└─ Hover: Secondary border ████████

Navigation:
├─ Logo accent: Secondary ████████
├─ CTA button: Primary → Tertiary ████████
├─ Menu links: Secondary underline ████████
└─ Toggle: Secondary when open ████████

Stats Section:
├─ Icons: Secondary ████████
├─ Numbers: Secondary suffix ████████
└─ Gradients: Three-color mix ████████

Features:
├─ Icons: Secondary background ████████
├─ Title hover: Primary ████████
└─ Borders: Secondary ████████

Testimonials:
├─ Stars: Secondary ████████
├─ Buttons: Secondary hover ████████
└─ Avatars: Secondary border ████████

CTA Section:
├─ Badge: Secondary ████████
├─ Primary button: Primary → Tertiary ████████
└─ Secondary button: Secondary border ████████

Footer:
├─ Logo: Secondary accent ████████
├─ Links: Secondary hover ████████
└─ Icons: Secondary ████████
```

---

## 🔄 State Changes

### Button States

```
Default:    Primary (#2C5F7C)
Hover:      Tertiary (#8B4513)
Active:     Tertiary (#8B4513) + scale(0.95)
Disabled:   Gray + opacity(0.5)
```

### Link States

```
Default:    Foreground (#0F172A)
Hover:      Secondary (#D4AF37)
Active:     Secondary (#D4AF37)
Visited:    Foreground (#0F172A)
```

### Card States

```
Default:    Border: black/5
Hover:      Border: Secondary/30 (#D4AF37)
            Shadow: Enhanced
            Transform: translateY(-8px)
```

---

## 🎨 Opacity Variations

### Primary (#2C5F7C)
```
100% ████████ Solid buttons, text
 50% ████████ Overlays
 30% ████████ Hover borders
 20% ████████ Light borders
 10% ████████ Background tints
  5% ████████ Subtle backgrounds
```

### Secondary (#D4AF37)
```
100% ████████ Icons, badges
 50% ████████ Overlays
 30% ████████ Hover borders
 20% ████████ Borders
 10% ████████ Icon backgrounds
  5% ████████ Subtle backgrounds
```

### Tertiary (#8B4513)
```
100% ████████ Button hovers
 50% ████████ Overlays
 20% ████████ Gradient overlays
 10% ████████ Background orbs
```

---

## 🌈 Gradient Recipes

### Three-Color Gradient
```css
background: linear-gradient(
  to right,
  #2C5F7C,  /* Primary */
  #D4AF37,  /* Secondary */
  #8B4513   /* Tertiary */
);
```

### Primary to Secondary
```css
background: linear-gradient(
  to right,
  #2C5F7C,  /* Primary */
  #D4AF37   /* Secondary */
);
```

### Secondary to Tertiary
```css
background: linear-gradient(
  to right,
  #D4AF37,  /* Secondary */
  #8B4513   /* Tertiary */
);
```

### Radial Gradient (Background)
```css
background: radial-gradient(
  circle at 50% 50%,
  rgba(212, 175, 55, 0.08),  /* Secondary */
  transparent 70%
);
```

---

## 🎯 Component Color Map

```
Component               Primary    Secondary   Tertiary
─────────────────────────────────────────────────────────
Hero Badge                         ✓
Hero Buttons            ✓                      ✓ (hover)
Hero Orbs               ✓          ✓           ✓
Property Badge                     ✓
Property Icons                     ✓
Property Button         ✓ (hover)
Nav Logo                           ✓
Nav CTA                 ✓                      ✓ (hover)
Nav Menu                           ✓
Stats Icons                        ✓
Stats Gradients         ✓          ✓           ✓
Feature Icons                      ✓
Feature Title           ✓ (hover)
Testimonial Stars                  ✓
Testimonial Buttons                ✓ (hover)
CTA Badge                          ✓
CTA Buttons             ✓                      ✓ (hover)
Search Icons                       ✓
Search Button           ✓                      ✓ (hover)
Footer Logo                        ✓
Footer Links                       ✓ (hover)
Footer Icons                       ✓
Back to Top             ✓                      ✓ (hover)
Page Transition         ✓          ✓           ✓
Scroll Progress         ✓          ✓           ✓
```

---

## 📱 Responsive Considerations

### Mobile
- Maintain color contrast
- Ensure touch targets are visible
- Keep gradients subtle
- Test on various screen sizes

### Tablet
- Same color scheme
- Adjust gradient sizes
- Maintain hover states

### Desktop
- Full color experience
- Enhanced gradients
- Smooth transitions
- Rich hover effects

---

## ✅ Quick Checklist

When adding new components:

- [ ] Use Primary for main actions
- [ ] Use Secondary for accents/icons
- [ ] Use Tertiary for warm hovers
- [ ] Check contrast ratios
- [ ] Test hover states
- [ ] Verify gradient smoothness
- [ ] Ensure mobile compatibility
- [ ] Test with color blindness simulator

---

## 🔗 Related Files

- `COLOR_PALETTE.md` - Full documentation
- `COLOR_UPDATE_SUMMARY.md` - Implementation summary
- `src/app/globals.css` - Color variables
- `IMPROVEMENTS.md` - All improvements

---

**Quick Tip:** Copy hex codes directly from this guide for consistency!

```
Primary:   #2C5F7C
Secondary: #D4AF37
Tertiary:  #8B4513
```
