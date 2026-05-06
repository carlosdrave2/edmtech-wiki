# EDMTECH Logo Usage Guide

## Logo Files Included

This folder contains the EDMTECH logo in multiple formats for different use cases:

### File Inventory

| File | Format | Purpose | Size |
|------|--------|---------|------|
| `EDMTECH_logo_original.png` | PNG | Original from website | 12 KB |
| `EDMTECH_logo_actual.svg` | SVG | **ACTUAL logo from website** | 4.3 KB |
| `EDMTECH_logo.png` | PNG | Clean PNG version | 11 KB |

---

## IMPORTANT: Actual Logo Design

### ⚠️ Correction from Previous Analysis

The EDMTECH logo is **NOT** three horizontal gradient bars. The actual logo consists of:

1. **Icon:** A complex **3D geometric shape** in **RED** (#E74F3D)
   - Resembles a crystal, gem, or stylized hexagon
   - Three-dimensional appearance with facets
   - Contains internal geometric patterns
   - **Color:** Solid red (not gradient)

2. **Text:** "EDMTECH" in **white/light gray** (#E5E7EB)
   - Custom letterforms
   - **Color:** Solid white/gray (not gradient)

### Visual Description

```
    ┌─────────────────────────────────────────┐
    │                                         │
    │    [3D RED GEOMETRIC ICON]  EDMTECH     │
    │         ↓                      ↓        │
    │    Red crystal/              White      │
    │    gem shape                 text       │
    │    (#E74F3D)                 (#E5E7EB)  │
    │                                         │
    └─────────────────────────────────────────┘
```

---

## Logo Variations

### 1. Full Logo (EDMTECH_logo_actual.svg)

**Best for:**
- Website headers
- Marketing materials
- Presentations
- Brand collateral

**Colors:**
- Icon: **Red** (#E74F3D)
- Text: **White/Light Gray** (#E5E7EB)

**Usage:**
- Default choice for most applications
- Works on dark backgrounds (primary use)
- Can be used on light backgrounds with adjustment

### 2. Logo on Light Backgrounds

**Requirements:**
- Use on light backgrounds (white, light gray)
- May need dark text version or dark icon version
- Ensure sufficient contrast

### 3. Icon Only

The icon can be used separately when:
- Favicon
- App icons
- Social media avatars
- Loading animations
- Watermarks

**Icon Color:** Red (#E74F3D)

---

## Logo Specifications

### Clear Space

Maintain minimum clear space around the logo equal to the height of the icon on all sides.

```
    ┌─────────────────────────┐
    │                         │
    │    ┌──────────────┐     │
    │    │              │     │
    │    │    LOGO      │     │
    │    │              │     │
    │    └──────────────┘     │
    │                         │
    └─────────────────────────┘
    
    [Clear Space = Height of Icon]
```

### Minimum Sizes

| Format | Minimum Width | Notes |
|--------|---------------|-------|
| Full Logo | 120px | For web |
| Full Logo (print) | 30mm | For print materials |
| Icon Only | 16px | Favicon size |
| Icon Only | 32px | App icon minimum |

### Color Specifications

**Primary Logo Colors:**
| Element | Color | Hex | RGB |
|---------|-------|-----|-----|
| Icon | Red | #E74F3D | rgb(231, 79, 61) |
| Text | Light Gray | #E5E7EB | rgb(229, 231, 235) |

**Background Compatibility:**
- Dark backgrounds (black, navy): ✓ Use as-is
- Light backgrounds: ⚠ May need inverted version
- Image backgrounds: ⚠ Ensure contrast

---

## Correct Usage

### ✅ DO

- Use the actual SVG file provided (`EDMTECH_logo_actual.svg`)
- Maintain the red icon color (#E74F3D)
- Use white/light gray text on dark backgrounds
- Provide sufficient clear space
- Use icon only for small applications
- Maintain aspect ratio

### ❌ DON'T

- Don't recreate the logo from scratch
- Don't change the icon color (keep it red)
- Don't change the text color (keep it white/gray)
- Don't stretch or distort
- Don't add effects (drop shadows, bevels, gradients)
- Don't rotate or tilt
- Don't use low-resolution versions
- Don't change the font/text styling

---

## Logo on Backgrounds

### Dark Backgrounds (Primary Use)

**Background Colors:**
- Black (#000000)
- Dark Navy (#0B0E15)
- Dark Blue (#00263E)

**Usage:** Use logo as-is with red icon and white text

### Light Backgrounds

**For White/Light Backgrounds:**

Option 1: Use original with sufficient contrast
Option 2: Create inverted version with dark text

**Recommended:** Use dark backgrounds as primary

### Image Backgrounds

**Guidelines:**
- Ensure sufficient contrast
- Add subtle overlay behind logo if needed
- Position on uniform areas of image
- Avoid busy backgrounds

---

## Web Implementation

### HTML Example

```html
<!-- Default logo - dark backgrounds -->
<img src="EDMTECH_logo_actual.svg" alt="EDMTECH" width="200">

<!-- With explicit dimensions -->
<svg width="200" viewBox="0 0 300 72" style="height: auto;">
    <!-- SVG content -->
</svg>
```

### CSS Styling

```css
.logo {
  height: 40px;
  width: auto;
  display: block;
}

.logo svg {
  fill: currentColor;
}

/* For dark backgrounds (default) */
.logo {
  --icon-color: #E74F3D;
  --text-color: #E5E7EB;
}
```

### SVG Color Customization (if needed)

```svg
<!-- Icon color -->
<path fill="#E74F3D" ... />

<!-- Text color -->
<path fill="#E5E7EB" ... />
```

---

## Favicon & App Icons

### Recommended Sizes

| Size | Purpose | Format |
|------|---------|--------|
| 16x16 | Browser favicon | PNG |
| 32x32 | Browser favicon (retina) | PNG |
| 180x180 | Apple Touch Icon | PNG |
| 192x192 | Android icon | PNG |
| 512x512 | PWA icon | PNG |

### Favicon Implementation

Use the **red icon** from the logo:

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

---

## Print Usage

### File Preparation

For print materials:
1. Use SVG file (`EDMTECH_logo_actual.svg`)
2. Export to PDF
3. Use high-resolution PNG (300 DPI)
4. Minimum print size: 30mm width

### Color Modes

- **Digital:** RGB (use #E74F3D for red, #E5E7EB for white)
- **Print:** CMYK (convert from RGB)
  - Red: C0 M66 Y73 K9
  - White: C0 M0 Y0 K0

---

## Social Media

### Profile Pictures

**Use:** Icon only (red geometric shape)

- Export icon portion of logo
- Crop to circle for most platforms
- Ensure clear space around icon
- Minimum 400x400px export

### Cover Images

**Use:** Full logo with dark background

- Position in safe zone (center-left)
- Add dark gradient background
- Maintain clear space

---

## Animation Guidelines

### Logo Animation

If animating the logo:

**Acceptable:**
- Fade in/out
- Scale up/down subtly (0.95x - 1.05x)
- Simple entrance animations

**Not Acceptable:**
- Distorting or stretching
- Rotating
- Adding bounce effects
- Changing colors
- 3D effects

### Example CSS Animation

```css
@keyframes logoFadeIn {
  from { 
    opacity: 0; 
    transform: translateY(-10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.logo {
  animation: logoFadeIn 0.5s ease-out;
}
```

---

## File Conversion

### SVG to PNG

Use tools like:
- Adobe Illustrator
- Figma
- Inkscape
- Online converters

### Recommended PNG Exports

| Use Case | Width | Format | Background |
|----------|-------|--------|------------|
| Header | 200px | PNG-24 | Transparent |
| Footer | 160px | PNG-24 | Transparent |
| Mobile | 140px | PNG-24 | Transparent |
| Favicon | 32px | PNG-8 | Transparent |
| Social | 400px | PNG-24 | Transparent |

---

## Logo Checklist

Before using the logo, verify:

- [ ] Using the correct SVG file (`EDMTECH_logo_actual.svg`)
- [ ] Icon color is RED (#E74F3D)
- [ ] Text color is white/light gray (#E5E7EB)
- [ ] Sufficient clear space around logo
- [ ] Size is at least the minimum recommended
- [ ] Contrast is sufficient for background
- [ ] Logo is not distorted or stretched
- [ ] Aspect ratio is maintained

---

## Quick Reference

| Need | File to Use |
|------|-------------|
| Website header | `EDMTECH_logo_actual.svg` |
| Favicon | Extract icon from SVG |
| App icon | Extract icon from SVG |
| Print materials | `EDMTECH_logo_actual.svg` → PDF |
| Social media avatar | Red icon only |
| Watermark | `EDMTECH_logo_actual.svg` |
| Loading animation | Red icon only |

---

## Technical Notes

### SVG ViewBox
- ViewBox: `0 0 300 72`
- Aspect ratio: ~4.17:1
- Icon width: ~64px
- Text starts at x: 190.5

### Color Classes (from website)
```css
.fill-edm-red {
  fill: #E74F3D;
}

.fill-gray-200 {
  fill: #E5E7EB;
}
```

---

*For questions about logo usage, refer to the full Brand Guidelines document.*  
*Logo extracted directly from edmtech.pt website.*
