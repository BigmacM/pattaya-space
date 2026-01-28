# Pattaya Space Brand System

## Visual Identity
**"Industrial Elegance meets Tropical Productivity"**

The brand embodies the unique transformation of a fine dining restaurant into a premium coworking space. It balances sophistication with accessibility, warmth with professionalism, and heritage with innovation.

---

## Color Palette

### Primary Colors
- **Deep Emerald Green** `#064E3B` - Primary backgrounds, footer, key sections
  - Evokes sophistication, growth, and the tropical setting
  - Use for headers, accents, and call-to-action elements

### Secondary Colors
- **Brass/Gold** `#B8860B` - Accent color for buttons, highlights, icons
  - Nods to the premium fine dining heritage
  - Creates warmth and draws attention
  - Variations: Light `#E8C547`, Dark `#92702B`

### Neutral Colors
- **Warm Walnut** `#2D221B` - Text on light backgrounds
  - Rich, warm alternative to pure black
  - Maintains the cozy restaurant vibe

- **Cream/Off-White** `#FDF8E7` - Primary backgrounds
  - Soft, inviting alternative to stark white
  - Reduces eye strain for all-day work
  - Variations: `#FFFEF7` (lightest), `#F5E6BE` (warmest)

---

## Typography

### Headers: Playfair Display
- **Style:** Elegant serif with high contrast
- **Usage:** H1, H2, section titles, hero text
- **Why:** Nods to the fine dining heritage, creates sophistication
- **Weights:** 400 (Regular), 600 (SemiBold), 700 (Bold)

### Body: Inter
- **Style:** Clean, highly readable sans-serif
- **Usage:** Paragraphs, navigation, buttons, captions
- **Why:** Modern, professional, optimized for screens
- **Weights:** 400 (Regular), 500 (Medium), 600 (SemiBold)

### Hierarchy
```
H1: Playfair Display Bold, 48-72px
H2: Playfair Display SemiBold, 36-48px
H3: Playfair Display Medium, 24-32px
Body: Inter Regular, 16-18px
Caption: Inter Regular, 14px
Button: Inter SemiBold, 16px (uppercase tracking)
```

---

## Layout Rules

### NO Symmetrical Grids
- Embrace organic, asymmetric layouts
- Allow content to breathe with generous whitespace
- Create visual interest through intentional imbalance

### Organic Shapes
- Use SVG wave dividers between sections
- Incorporate subtle curved elements
- Avoid harsh corners—use 16-24px border radius

### Overlapping Elements
- Images and cards slightly overlap containers for depth
- Create layers using z-index and negative margins
- Hero images extend beyond their containers

### Soft Shadows
- Large, diffuse shadows (neomorphism-inspired)
- Shadow color should be warm, not pure black
- Cards: `0 10px 40px rgba(0, 0, 0, 0.15)`
- Hover: `0 20px 60px rgba(0, 0, 0, 0.25)`

### Glass Morphism (Navigation)
- Navbar: `backdrop-blur: 12px`
- Background: `rgba(253, 248, 231, 0.8)`
- Subtle border: `rgba(255, 255, 255, 0.3)`

---

## Interactive Elements

### Buttons
- Primary: Brass background `#B8860B`, cream text
- Hover: Glow effect `box-shadow: 0 0 30px rgba(184, 134, 11, 0.4)`
- Active: Slight scale down (0.98)
- Transition: 300ms ease-out

### Cards
- Default: Soft shadow, slight rotation (-1° to 1°)
- Hover: Scale 1.02, increased shadow, rotation normalize
- Transition: 400ms cubic-bezier(0.4, 0, 0.2, 1)

### Scroll Animations
- Elements fade in and float up on scroll
- Stagger delays for grouped elements (100ms intervals)
- Use `threshold: 0.2` for intersection observer

### Parallax Effects
- Hero background: 0.5x scroll speed
- Decorative elements: Variable speeds (0.3x - 0.7x)
- Keep subtle—enhance, don't distract

---

## Imagery Guidelines

### Photography Style
- Warm color temperature (slightly orange/golden)
- Natural lighting with moody shadows
- Focus on textures: wood grain, fabric, warm lighting
- Show the space in use—people working, collaborating

### Placeholder Imagery
- High ceilings visible
- Warm pendant/mood lighting
- Comfortable seating arrangements
- Plants and natural elements
- Coffee cups, laptops, notebooks

### Image Treatment
- Slight desaturation for cohesive feel
- Warm overlay in brand colors
- Grain texture for editorial quality

---

## Mobile First Design

### Responsive Breakpoints
```
Mobile: 0 - 639px
Tablet: 640px - 1023px
Desktop: 1024px+
Large: 1280px+
```

### Mobile Specific
- Larger touch targets (min 44px)
- Simplified navigation (hamburger menu)
- Stack cards vertically
- Reduce parallax effects for performance

---

## Voice & Tone

### Brand Voice
- **Confident** but not arrogant
- **Warm** but professional
- **Unique** but accessible
- **Premium** but not pretentious

### Copy Guidelines
- Use "we" and "you" for connection
- Short sentences for impact
- Highlight the unique restaurant heritage
- Emphasize community over transactions
