# Custom Cursor Quick Start Guide

## 🚀 Getting Started

The custom gradient trail cursor is already integrated and working! Here's everything you need to know.

---

## ✨ What You Get

### Automatic Features (No Setup Required)

✅ **Gradient Trail** - 15 dots flowing from blue to gold to brown
✅ **Hover Effects** - Cursor scales up on interactive elements
✅ **Click Animation** - Ripple effect on click
✅ **Smooth Animations** - GSAP-powered 60fps animations
✅ **Mobile Friendly** - Automatically disabled on touch devices
✅ **Performance Optimized** - Hardware-accelerated transforms

---

## 🎯 How to Use

### 1. Basic Usage (Already Working!)

Just move your mouse on desktop - the cursor works automatically on:
- All links
- All buttons
- All form inputs
- All images
- Any element with `cursor-hover` class

### 2. Add Custom Cursor Text

Want text to appear above the cursor on hover? Add this attribute:

```html
<!-- On buttons -->
<button data-cursor-text="Click Me">
  Explore Properties
</button>

<!-- On links -->
<a href="/listings" data-cursor-text="View All">
  Browse Listings
</a>

<!-- On any element -->
<div data-cursor-text="Learn More" className="cursor-hover">
  Feature Card
</div>
```

### 3. Make Any Element Interactive

Add the `cursor-hover` class to any element:

```html
<div className="cursor-hover">
  This will trigger hover effects
</div>
```

---

## 🎨 Visual Guide

### Normal State
```
    ╭─────╮
    │  ●  │  ← Gold ring + gradient dot
    ╰─────╯
   ● ● ● ●  ← Blue to gold to brown trail
```

### Hover State
```
   ╭────────╮
   │   ●    │  ← Ring scales to 1.8x
   ╰────────╯  ← Dot shrinks to 0.3x
  ● ● ● ● ●   ← Trail fades slightly
```

### With Custom Text
```
  ┌──────────┐
  │ CLICK ME │  ← Custom text in gold badge
  └──────────┘
      ╭───╮
      │ ● │
      ╰───╯
```

### Click Effect
```
    ╭─────╮
    │  ●  │  ← Cursor shrinks briefly
    ╰─────╯
      ○     ← Ripple expands and fades
     ○ ○
    ○   ○
```

---

## 📱 Device Behavior

### Desktop (≥768px)
```
✅ Custom cursor active
✅ Trail effect visible
✅ All animations working
✅ Interactive hover states
```

### Mobile (<768px)
```
❌ Custom cursor disabled
✅ Default touch behavior
✅ No performance impact
✅ Normal cursor on tablets
```

---

## 🎯 Examples

### Example 1: Property Card Button

```tsx
<Link 
  href={`/listings/${id}`}
  data-cursor-text="View Details"
  className="property-card-button"
>
  Explore Property
</Link>
```

**Result:** Cursor shows "VIEW DETAILS" on hover

### Example 2: Hero CTA

```tsx
<Link 
  href="/listings"
  data-cursor-text="Browse"
  className="btn-primary"
>
  Explore Portfolio
</Link>
```

**Result:** Cursor shows "BROWSE" on hover

### Example 3: Image Gallery

```tsx
<div className="cursor-hover" data-cursor-text="Zoom">
  <Image src={propertyImage} alt="Property" />
</div>
```

**Result:** Cursor shows "ZOOM" on hover

---

## 🎨 Customization Options

### Change Cursor Text Style

The text appears in a gold badge above the cursor. To customize:

```typescript
// In CursorTrail.tsx, find the cursor text div
style={{
  background: "rgba(212, 175, 55, 0.95)", // Change color
  padding: "6px 12px",                     // Change padding
  fontSize: "12px",                        // Change size
  // ... more styles
}}
```

### Change Trail Length

```typescript
// In CursorTrail.tsx
const trailCount = 15; // Change to 10, 20, etc.
```

### Change Cursor Size

```typescript
// Main ring
width: "32px",  // Make bigger/smaller
height: "32px",

// Center dot
width: "6px",   // Make bigger/smaller
height: "6px",
```

---

## 💡 Pro Tips

### Tip 1: Use Short Text
```html
<!-- Good ✅ -->
<button data-cursor-text="Click">Buy Now</button>

<!-- Too Long ❌ -->
<button data-cursor-text="Click here to purchase">Buy Now</button>
```

### Tip 2: Strategic Placement
```html
<!-- Use on important CTAs -->
<button data-cursor-text="Explore">View Properties</button>

<!-- Don't use on every link -->
<a href="/about">About</a> <!-- No cursor text needed -->
```

### Tip 3: Test on Desktop
- Open in Chrome/Firefox/Safari
- Move mouse around
- Hover over buttons and links
- Click to see ripple effect

---

## 🐛 Troubleshooting

### Cursor Not Showing?

**Check:**
1. Are you on desktop? (≥768px screen width)
2. Is JavaScript enabled?
3. Check browser console for errors

**Fix:**
```bash
# Restart dev server
npm run dev
```

### Trail Not Smooth?

**Check:**
1. Close other heavy applications
2. Check browser performance
3. Reduce trail count if needed

### Hover Not Working?

**Check:**
1. Element has proper selector (a, button, etc.)
2. Or add `cursor-hover` class
3. Check z-index conflicts

---

## 📊 Performance

### Expected Performance
- **CPU Usage:** <2%
- **Memory:** ~1MB
- **FPS:** 60fps
- **Smooth:** Yes ✅

### If Performance Issues
1. Reduce trail count (15 → 10)
2. Increase animation duration
3. Check for other animations

---

## 🎯 Best Practices

### Do's ✅
- Use custom text on CTAs
- Keep text short (1-2 words)
- Test on various browsers
- Monitor performance

### Don'ts ❌
- Don't add text to every element
- Don't make trail too long
- Don't forget mobile users
- Don't disable without reason

---

## 🔗 Related Documentation

- **Full Documentation:** `CURSOR_DOCUMENTATION.md`
- **Color Palette:** `COLOR_PALETTE.md`
- **Animations:** `ANIMATION_GUIDE.md`
- **Improvements:** `IMPROVEMENTS.md`

---

## 🎉 Quick Test

### Test the Cursor Now!

1. **Run dev server:**
   ```bash
   npm run dev
   ```

2. **Open browser:**
   ```
   http://localhost:3000
   ```

3. **Move your mouse:**
   - See the gradient trail
   - Hover over buttons
   - Click anywhere
   - Watch the magic! ✨

---

## 📝 Summary

```
✅ Cursor is already working
✅ No setup required
✅ Desktop only (mobile-friendly)
✅ Add data-cursor-text for custom labels
✅ Smooth GSAP animations
✅ Three-color gradient trail
✅ Performance optimized
```

---

**Enjoy your luxurious custom cursor!** 🎨✨

For detailed information, see `CURSOR_DOCUMENTATION.md`
