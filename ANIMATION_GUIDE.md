# GSAP Animation Reference Guide

## 🎬 Animation Patterns Used

### 1. Fade In with Y Movement
```javascript
gsap.from(element, {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});
```
**Used in:** Hero, PropertyGrid, WhyChooseUs, AnimatedStats

---

### 2. Stagger Animation
```javascript
gsap.from(".elements", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
  ease: "power3.out"
});
```
**Used in:** PropertyGrid, Testimonials, WhyChooseUs, Hero buttons

---

### 3. Scale Animation (Bounce)
```javascript
gsap.from(element, {
  scale: 0.95,
  opacity: 0,
  duration: 1.5,
  ease: "back.out(1.7)"
});
```
**Used in:** CTASection, AnimatedStats, BackToTop

---

### 4. Parallax Scrolling
```javascript
gsap.to(element, {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: container,
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});
```
**Used in:** Hero images, PropertyCard images, ParallaxSection

---

### 5. Counter Animation
```javascript
gsap.from(".number", {
  textContent: 0,
  duration: 2.5,
  ease: "power2.out",
  snap: { textContent: 1 },
  scrollTrigger: {
    trigger: container,
    start: "top 75%"
  }
});
```
**Used in:** Hero stats, AnimatedStats

---

### 6. Floating Animation
```javascript
gsap.to(element, {
  y: -10,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
```
**Used in:** Hero orbs, AnimatedStats icons, CTASection circles

---

### 7. Random Movement
```javascript
gsap.to(".orbs", {
  y: "random(-30, 30)",
  x: "random(-20, 20)",
  duration: "random(3, 5)",
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  stagger: {
    each: 0.3,
    from: "random"
  }
});
```
**Used in:** Hero floating orbs

---

### 8. Timeline Animation
```javascript
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.from(".element1", { y: 30, opacity: 0, duration: 1 })
  .from(".element2", { y: 30, opacity: 0, duration: 1 }, "-=0.6")
  .from(".element3", { y: 50, opacity: 0, duration: 1.2 }, "-=0.8");
```
**Used in:** Hero, CTASection

---

### 9. Scroll Progress
```javascript
gsap.to(progressBar, {
  scaleX: 1,
  ease: "none",
  scrollTrigger: {
    start: "top top",
    end: "bottom bottom",
    scrub: 0.3
  }
});
```
**Used in:** ScrollProgress component

---

### 10. Page Transition
```javascript
const tl = gsap.timeline();

tl.to(overlay, {
  scaleY: 1,
  transformOrigin: "bottom",
  duration: 0.6,
  ease: "power4.inOut"
});

tl.to(overlay, {
  scaleY: 0,
  transformOrigin: "top",
  duration: 0.6,
  ease: "power4.inOut"
});
```
**Used in:** PageTransition component

---

### 11. 3D Transform Animation
```javascript
gsap.from(".cards", {
  y: 80,
  opacity: 0,
  scale: 0.95,
  rotateX: 10,
  duration: 1.2,
  stagger: 0.2,
  ease: "power3.out"
});
```
**Used in:** PropertyGrid

---

### 12. Hover Animation (Event-based)
```javascript
element.addEventListener('mouseenter', () => {
  gsap.to(element, {
    y: -8,
    duration: 0.4,
    ease: "power2.out"
  });
});

element.addEventListener('mouseleave', () => {
  gsap.to(element, {
    y: 0,
    duration: 0.4,
    ease: "power2.out"
  });
});
```
**Used in:** PropertyCard

---

## 🎯 ScrollTrigger Patterns

### Basic ScrollTrigger
```javascript
scrollTrigger: {
  trigger: element,
  start: "top 75%",
}
```

### Scrub Animation
```javascript
scrollTrigger: {
  trigger: element,
  start: "top bottom",
  end: "bottom top",
  scrub: 1
}
```

### Pin Element
```javascript
scrollTrigger: {
  trigger: element,
  start: "top top",
  end: "bottom top",
  pin: true,
  scrub: true
}
```

---

## 🎨 Easing Functions Used

1. **power3.out** - Smooth deceleration (most common)
2. **power2.out** - Gentle deceleration
3. **power4.inOut** - Strong acceleration/deceleration
4. **back.out(1.7)** - Elastic bounce effect
5. **sine.inOut** - Smooth oscillation
6. **none** - Linear (for parallax)

---

## ⚡ Performance Tips

1. **Use transforms** - `x`, `y`, `scale`, `rotate` (GPU accelerated)
2. **Avoid animating** - `width`, `height`, `top`, `left`
3. **Use `will-change`** - For complex animations
4. **Batch animations** - Use timelines for multiple elements
5. **Use `scrub`** - For smooth scroll-linked animations
6. **Optimize ScrollTrigger** - Set appropriate start/end points

---

## 🔧 Common GSAP Methods

### Animation Methods
- `gsap.to()` - Animate to values
- `gsap.from()` - Animate from values
- `gsap.fromTo()` - Animate from/to values
- `gsap.set()` - Set values instantly

### Timeline Methods
- `tl.to()` - Add animation to timeline
- `tl.from()` - Add from animation
- `tl.add()` - Add callback or label
- `tl.pause()` - Pause timeline
- `tl.play()` - Play timeline
- `tl.reverse()` - Reverse timeline

### ScrollTrigger Methods
- `ScrollTrigger.create()` - Create trigger
- `ScrollTrigger.refresh()` - Recalculate positions
- `ScrollTrigger.update()` - Update all triggers

---

## 📚 Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Easing Visualizer](https://greensock.com/ease-visualizer/)
- [GSAP Cheat Sheet](https://greensock.com/cheatsheet/)

---

## 💡 Best Practices

1. **Register plugins** - Always register ScrollTrigger
2. **Clean up** - Use `useGSAP` hook for React
3. **Scope animations** - Use `scope` parameter
4. **Dependencies** - Add to useGSAP dependencies array
5. **Mobile optimization** - Test on mobile devices
6. **Accessibility** - Respect `prefers-reduced-motion`
7. **Performance** - Use `will-change` sparingly

---

Happy animating! 🎉
