# Pattaya Space Brand System

## Brand Identity

**Concept:** Dark Tropical Industrial
**Tagline:** "Work Where Fine Dining Used to Be"
**Mood:** Nocturnal, productive, exclusive, yet highly inviting

We are transforming a former fine dining restaurant in Pattaya into a premium coworking space. The aesthetic bridges the gap between industrial workspace and tropical luxury—think late-night productivity sessions with warm ambient lighting, exposed textures, and modern tech vibes.

---

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Deep Turquoise | `#0F3D3E` | Primary brand color, headers, accents |
| Charcoal | `#222831` | Main backgrounds, dark sections |
| Gunmetal | `#393E46` | Secondary backgrounds, cards |

### Accent Colors
| Name | Hex | Usage |
|------|-----|-------|
| Cyan | `#00ADB5` | CTAs, buttons, links, highlights |
| Teal Glow | `#00FFF5` | Hover states, glows, active indicators |

### Neutral Colors
| Name | Hex | Usage |
|------|-----|-------|
| Silver | `#EEEEEE` | Primary text |
| Muted | `#A0A0A0` | Secondary text, captions |
| Dark Muted | `#6B7280` | Disabled states |

### Semantic Colors
| Name | Hex | Usage |
|------|-----|-------|
| Success | `#10B981` | Success states |
| Warning | `#F59E0B` | Warnings |
| Error | `#EF4444` | Errors |

---

## Typography

### Font Families

**Headlines (Editorial):**
- Primary: `Cinzel` - Bold, high-contrast serif for large headlines
- Fallback: `Playfair Display`, `Georgia`, serif

**Body & UI:**
- Primary: `Inter` - Clean sans-serif for readability
- Fallback: `system-ui`, sans-serif

**Code & Technical:**
- Primary: `JetBrains Mono` - Monospace for prices, technical details
- Fallback: `Fira Code`, `monospace`

### Type Scale
| Element | Size | Weight | Font |
|---------|------|--------|------|
| Hero H1 | 5rem - 8rem | 700 | Cinzel |
| Section H2 | 3rem - 4rem | 600 | Cinzel |
| Card H3 | 1.5rem - 2rem | 600 | Inter |
| Body Large | 1.25rem | 400 | Inter |
| Body | 1rem | 400 | Inter |
| Small/Caption | 0.875rem | 400 | JetBrains Mono |
| Price | 2rem - 3rem | 700 | JetBrains Mono |

---

## Layout Systems

### 1. Broken Grid (Hero & About)
- Asymmetric layouts with overlapping elements
- Images breaking out of containers
- Angled text blocks
- Negative space as design element
- Creates uniqueness and visual interest

```
┌─────────────────────────────────────┐
│     ┌──────────┐                    │
│     │  IMAGE   │    HEADLINE        │
│     │          │    ───────         │
│     └──────────┘                    │
│              ┌──────────────────┐   │
│              │   DESCRIPTION    │   │
│              └──────────────────┘   │
│  ┌─────────┐                        │
│  │  CTA    │                        │
│  └─────────┘                        │
└─────────────────────────────────────┘
```

### 2. Bento Grid (Pricing & Amenities)
- Card-based modular grid
- Varying card sizes (1x1, 2x1, 1x2, 2x2)
- Consistent gaps and padding
- Perfect for showcasing features/tiers

```
┌─────┬─────┬───────────┐
│ 1x1 │ 1x1 │    2x1    │
├─────┴─────┼───────────┤
│    2x1    │    1x1    │
├───────────┼─────┬─────┤
│    1x1    │ 1x1 │ 1x1 │
└───────────┴─────┴─────┘
```

---

## UI Components

### Glassmorphism Cards
```css
.glass-card {
  background: rgba(57, 62, 70, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

### Glassmorphism Navbar
```css
.glass-nav {
  background: rgba(34, 40, 49, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
```

### Buttons

**Primary Button:**
- Background: `#00ADB5`
- Hover: `#00FFF5` with glow effect
- Text: `#222831`
- Border-radius: 8px

**Secondary Button:**
- Background: transparent
- Border: 1px solid `#00ADB5`
- Hover: Fill with `#00ADB5`
- Text: `#00ADB5` → `#222831` on hover

**Ghost Button:**
- Background: transparent
- Text: `#EEEEEE`
- Hover: `rgba(255, 255, 255, 0.1)` background

### Hover Effects
- Scale: 1.02 - 1.05 for cards
- Glow: `box-shadow: 0 0 30px rgba(0, 173, 181, 0.4)`
- Border highlight: `border-color: #00ADB5`
- Transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

---

## Animation Guidelines

### Scroll Animations
- Fade up on enter: `translateY(30px)` → `translateY(0)`
- Stagger children: 0.1s delay between items
- Duration: 0.6s - 0.8s
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

### Hover Animations
- Duration: 0.3s
- Scale: subtle (1.02 - 1.05)
- Glow pulse for CTAs

### Parallax
- Background: 0.5x scroll speed
- Foreground elements: 1.2x scroll speed
- Keep subtle to avoid motion sickness

---

## Spacing System

| Name | Size | Usage |
|------|------|-------|
| xs | 4px | Tight spacing |
| sm | 8px | Component internal |
| md | 16px | Component gaps |
| lg | 24px | Section internal |
| xl | 32px | Section padding |
| 2xl | 48px | Large gaps |
| 3xl | 64px | Section spacing |
| 4xl | 96px | Hero spacing |

---

## Page Structure

### Homepage
1. Hero (Broken Grid) - Headline, subheadline, CTA, ambient image
2. Quick Stats Bar - Key numbers (hours, members, amenities)
3. Featured Pricing - 3 popular tiers (Bento preview)
4. CTA Section - "Visit Us Today"

### About Page
1. Story Section (Broken Grid) - The transformation story
2. Vision Section - Phase 1 focus, future plans
3. Community Section - Who works here

### Pricing Page
1. Hero - Simple headline
2. Pricing Grid (Bento) - All 5 tiers with glassmorphism
3. FAQ Section - Common questions

### Amenities Page
1. Hero - Simple headline
2. Amenities Grid (Bento) - All amenities with icons
3. Hours & Access - Operating hours

### Contact Page
1. Split Layout - Form on left, info on right
2. Map Section - Full-width map embed

---

## Responsive Breakpoints

| Name | Size | Columns |
|------|------|---------|
| Mobile | < 640px | 1 |
| Tablet | 640px - 1024px | 2 |
| Desktop | > 1024px | 3-4 |

---

## Accessibility Requirements

- Contrast ratio: Minimum 4.5:1 for body text
- Focus states: Visible outline with `#00ADB5`
- Alt text: Required for all images
- Reduced motion: Respect `prefers-reduced-motion`
- Font size: Minimum 16px for body text

---

## Do's and Don'ts

### Do's
✓ Use deep, rich colors for backgrounds
✓ Create depth with glassmorphism
✓ Use monospace for technical/price information
✓ Add subtle glow effects on interactive elements
✓ Break the grid in hero sections
✓ Keep text readable with proper contrast

### Don'ts
✗ Use pure white (#FFFFFF) - use off-white instead
✗ Use pure black (#000000) - use charcoal instead
✗ Overuse glow effects
✗ Create symmetrical, boring layouts
✗ Use generic stock photo aesthetics
✗ Forget mobile responsiveness
