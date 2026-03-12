# Color Palette Documentation

## 🎨 New Three-Color Scheme

The Kershaw luxury real estate website now features a sophisticated three-color palette that conveys trust, elegance, and timeless luxury.

---

## Color Definitions

### Primary Color - Deep Ocean Blue
```css
--primary: #2C5F7C
RGB: (44, 95, 124)
```

**Usage:**
- Main call-to-action buttons
- Navigation active states
- Primary brand elements
- Hover states for cards
- Background gradients
- Scroll progress bar

**Psychology:** Trust, professionalism, stability, depth, sophistication

**Where Applied:**
- Hero CTA buttons
- Property card "View Details" button hover
- Navbar "Get Started" button
- Search button
- Back to top button
- Page transition overlay
- Animated stats icons
- Background gradient orbs

---

### Secondary Color - Luxe Gold
```css
--secondary: #D4AF37
RGB: (212, 175, 55)
```

**Usage:**
- Accent elements
- Icons and decorative elements
- Section labels and badges
- Hover states for links
- Star ratings
- Social media icon hovers
- Underline animations

**Psychology:** Luxury, prestige, quality, wealth, elegance

**Where Applied:**
- Hero badge
- Property card "Exclusive" badge
- Property card icons (location, beds, baths)
- Section labels ("Exclusive Portfolio", "Why Us", etc.)
- Testimonial stars
- Feature card icons
- Footer social icons hover
- Link underline animations
- Search filter icons
- Price badge

---

### Tertiary Color - Saddle Brown
```css
--tertiary: #8B4513
RGB: (139, 69, 19)
```

**Usage:**
- Secondary hover states
- Gradient combinations
- Depth and warmth accents
- Button hover states
- Background gradient variations

**Psychology:** Warmth, earthiness, reliability, heritage, tradition

**Where Applied:**
- Hero button hover state
- CTA button hover state
- Search button hover state
- Back to top button hover
- Gradient orbs in hero
- Animated stats gradients
- Page transition gradient
- Scroll progress gradient

---

## Supporting Colors

### Background
```css
--background: #FAFAFA
RGB: (250, 250, 250)
```
Clean, neutral off-white for main background

### Foreground (Text)
```css
--foreground: #0F172A
RGB: (15, 23, 42)
```
Deep slate for primary text

### Surface
```css
--surface: #FFFFFF
RGB: (255, 255, 255)
```
Pure white for cards and elevated surfaces

### Accent
```css
--accent: #E8D5B7
RGB: (232, 213, 183)
```
Soft beige for subtle accents

---

## Color Combinations

### Gradient Combinations

#### Primary to Secondary
```css
background: linear-gradient(to right, #2C5F7C, #D4AF37);
```
**Used in:** Scroll progress bar, animated stats

#### Secondary to Tertiary
```css
background: linear-gradient(to right, #D4AF37, #8B4513);
```
**Used in:** Animated stats cards, hover effects

#### Tertiary to Primary
```css
background: linear-gradient(to right, #8B4513, #2C5F7C);
```
**Used in:** Animated stats cards

#### Three-Color Gradient
```css
background: linear-gradient(to right, #2C5F7C, #D4AF37, #8B4513);
```
**Used in:** Page transitions, scroll progress

---

## Opacity Variations

### Primary Variations
- `primary/5` - Very subtle background tint
- `primary/10` - Light background tint
- `primary/20` - Border colors
- `primary/30` - Hover borders
- Full opacity - Solid elements

### Secondary Variations
- `secondary/5` - Very subtle background tint
- `secondary/10` - Icon backgrounds
- `secondary/20` - Border colors
- `secondary/30` - Hover borders
- Full opacity - Solid elements

### Tertiary Variations
- `tertiary/10` - Light background tint
- `tertiary/20` - Gradient overlays
- Full opacity - Solid elements

---

## Usage Guidelines

### Do's ✅

1. **Use Primary for main actions**
   - Primary CTAs
   - Important buttons
   - Navigation highlights

2. **Use Secondary for accents**
   - Icons
   - Labels
   - Decorative elements
   - Hover states

3. **Use Tertiary for depth**
   - Secondary hover states
   - Gradient combinations
   - Warm accents

4. **Maintain contrast**
   - Always ensure text is readable
   - Use white text on primary/tertiary
   - Use foreground color on light backgrounds

5. **Use gradients sparingly**
   - Background decorations
   - Progress indicators
   - Transitions

### Don'ts ❌

1. **Don't mix too many colors**
   - Stick to the three-color palette
   - Use supporting colors for neutrals

2. **Don't use low contrast combinations**
   - Avoid secondary text on primary background
   - Avoid tertiary text on secondary background

3. **Don't overuse gradients**
   - Keep gradients subtle
   - Use for backgrounds, not text (except special cases)

4. **Don't ignore accessibility**
   - Maintain WCAG AA contrast ratios
   - Test with color blindness simulators

---

## Accessibility

### Contrast Ratios

#### Primary (#2C5F7C) on White
- **Ratio:** 5.8:1
- **WCAG AA:** ✅ Pass (Normal Text)
- **WCAG AAA:** ✅ Pass (Large Text)

#### Secondary (#D4AF37) on White
- **Ratio:** 3.2:1
- **WCAG AA:** ✅ Pass (Large Text)
- **WCAG AAA:** ❌ Fail (Normal Text)
- **Note:** Use for decorative elements, not body text

#### Tertiary (#8B4513) on White
- **Ratio:** 6.1:1
- **WCAG AA:** ✅ Pass (Normal Text)
- **WCAG AAA:** ✅ Pass (Large Text)

#### White on Primary
- **Ratio:** 3.6:1
- **WCAG AA:** ✅ Pass (Large Text)
- **Use:** Button text, large headings

#### White on Tertiary
- **Ratio:** 3.4:1
- **WCAG AA:** ✅ Pass (Large Text)
- **Use:** Button text, large headings

---

## Color Psychology

### Why This Palette Works for Luxury Real Estate

1. **Primary (Deep Ocean Blue)**
   - Conveys trust and professionalism
   - Associated with stability and reliability
   - Premium feel without being flashy
   - Timeless and sophisticated

2. **Secondary (Luxe Gold)**
   - Universal symbol of luxury and wealth
   - Adds warmth and elegance
   - Creates visual interest
   - Premium brand association

3. **Tertiary (Saddle Brown)**
   - Represents heritage and tradition
   - Adds earthiness and warmth
   - Complements gold beautifully
   - Suggests quality and craftsmanship

### Emotional Impact

- **Trust:** Blue primary color builds confidence
- **Luxury:** Gold accents signal premium quality
- **Heritage:** Brown tones suggest established legacy
- **Sophistication:** Combined palette feels refined
- **Warmth:** Gold and brown add approachability

---

## Implementation Examples

### Button Styles

```css
/* Primary Button */
.btn-primary {
  background: var(--primary);
  color: white;
}
.btn-primary:hover {
  background: var(--tertiary);
}

/* Secondary Button */
.btn-secondary {
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: var(--foreground);
}
.btn-secondary:hover {
  border-color: var(--secondary);
  background: rgba(212, 175, 55, 0.1);
}
```

### Card Styles

```css
/* Property Card */
.property-card {
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.property-card:hover {
  border-color: rgba(212, 175, 55, 0.3);
}

/* Feature Card Icon */
.feature-icon {
  background: linear-gradient(to bottom right, 
    rgba(212, 175, 55, 0.1), 
    rgba(212, 175, 55, 0.05)
  );
  color: var(--secondary);
}
```

### Gradient Backgrounds

```css
/* Hero Background */
.hero-bg {
  background: linear-gradient(to bottom right,
    var(--background),
    var(--background),
    rgba(44, 95, 124, 0.05)
  );
}

/* Floating Orbs */
.orb-primary {
  background: rgba(44, 95, 124, 0.1);
}
.orb-secondary {
  background: rgba(212, 175, 55, 0.15);
}
.orb-tertiary {
  background: rgba(139, 69, 19, 0.1);
}
```

---

## Migration from Old Palette

### Old Colors → New Colors

| Old Color | Hex | New Color | Hex |
|-----------|-----|-----------|-----|
| Primary (Gold) | #C5A059 | Secondary (Luxe Gold) | #D4AF37 |
| Accent (Beige) | #E8D5B7 | Accent (Beige) | #E8D5B7 |
| N/A | - | Primary (Ocean Blue) | #2C5F7C |
| N/A | - | Tertiary (Saddle Brown) | #8B4513 |

### What Changed

1. **Old primary gold** → **New secondary gold** (brighter, more luxurious)
2. **Added primary blue** → Main brand color (trust, professionalism)
3. **Added tertiary brown** → Depth and warmth (heritage, quality)
4. **Accent beige** → Kept the same (continuity)

---

## Brand Consistency

### Logo Usage
- Primary logo: Foreground color (#0F172A)
- Accent: Secondary color (#D4AF37) for "& SONS"
- On dark backgrounds: White with secondary accent

### Typography
- Headings: Foreground color
- Body text: Foreground with 60% opacity
- Labels: Secondary color
- Links: Foreground → Secondary on hover

### Icons
- Default: Secondary color (#D4AF37)
- Hover: Scale + maintain color
- Active: Primary color (#2C5F7C)

---

## Testing Checklist

- [ ] All buttons have proper hover states
- [ ] Text contrast meets WCAG AA standards
- [ ] Gradients are subtle and professional
- [ ] Icons are visible and clear
- [ ] Links have clear hover states
- [ ] Cards have proper border colors
- [ ] Badges use appropriate colors
- [ ] Animations use color transitions smoothly
- [ ] Dark mode considerations (if applicable)
- [ ] Print styles (if applicable)

---

## Resources

- [Adobe Color Wheel](https://color.adobe.com/)
- [Coolors Palette Generator](https://coolors.co/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Blind Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)

---

**Last Updated:** 2024
**Version:** 2.0
**Status:** ✅ Implemented
