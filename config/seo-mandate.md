# SEO Mandate for Pattaya Space

## Core Requirements

Every page on the Pattaya Space website MUST include proper SEO optimization to ensure visibility in search results and rich snippets.

---

## Structured Data Requirements

### Every Page Needs
```html
<script type="application/ld+json">
  // Appropriate schema for the page type
</script>
```

### Homepage: LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "CoworkingSpace",
  "name": "Pattaya Space",
  "description": "Pattaya's most unique coworking experience in a converted fine dining restaurant",
  "url": "https://pattayaspace.co",
  "telephone": "+66 38 123 4567",
  "email": "hello@pattayaspace.co",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Beach Road",
    "addressLocality": "Pattaya",
    "addressRegion": "Chonburi",
    "postalCode": "20150",
    "addressCountry": "TH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9271",
    "longitude": "100.8789"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "08:00",
    "closes": "02:00"
  },
  "priceRange": "฿฿ - ฿฿฿",
  "image": "https://pattayaspace.co/og-image.jpg",
  "sameAs": [
    "https://facebook.com/pattayaspace",
    "https://instagram.com/pattayaspace"
  ]
}
```

### Pricing Page: Offer Schema
```json
{
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Pattaya Space Memberships",
  "itemListElement": [
    {
      "@type": "Offer",
      "name": "Day Pass",
      "price": "400",
      "priceCurrency": "THB",
      "description": "Full day access to coworking space"
    }
    // ... more offers
  ]
}
```

### Contact Page: ContactPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Pattaya Space",
  "description": "Get in touch with Pattaya Space for membership inquiries",
  "mainEntity": {
    "@type": "Organization",
    "name": "Pattaya Space",
    "telephone": "+66 38 123 4567",
    "email": "hello@pattayaspace.co"
  }
}
```

---

## Meta Tags Requirements

### Every Page Must Have

```html
<!-- Primary Meta Tags -->
<title>{Unique Page Title} | Pattaya Space</title>
<meta name="title" content="{Unique Page Title} | Pattaya Space">
<meta name="description" content="{Unique 150-160 character description}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="{Page URL}">
<meta property="og:title" content="{Page Title}">
<meta property="og:description" content="{Page Description}">
<meta property="og:image" content="/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="{Page URL}">
<meta property="twitter:title" content="{Page Title}">
<meta property="twitter:description" content="{Page Description}">
<meta property="twitter:image" content="/og-image.jpg">

<!-- Additional -->
<meta name="robots" content="index, follow">
<meta name="language" content="English">
<meta name="author" content="Pattaya Space">
<link rel="canonical" href="{Canonical URL}">
```

---

## Page-Specific Meta Content

### Homepage
- **Title:** "Pattaya Space | Premium Coworking in a Former Fine Dining Restaurant"
- **Description:** "Work where fine dining used to be. Pattaya's most unique coworking experience featuring high ceilings, warm ambiance, and a community of digital nomads. Open 8 AM - 2 AM."

### Pricing Page
- **Title:** "Membership & Pricing | Pattaya Space Coworking"
- **Description:** "Flexible coworking memberships starting at 400 THB/day. Hot desks, dedicated desks, private offices & virtual office options available in Pattaya."

### Contact Page
- **Title:** "Contact & Location | Pattaya Space"
- **Description:** "Visit Pattaya Space in the heart of Pattaya. Get directions, contact information, and book your workspace today. Open 8 AM - 2 AM daily."

---

## Technical SEO Requirements

### Performance
- Images: WebP format, lazy loading, proper dimensions
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Mobile responsive: 100% mobile-friendly

### Accessibility
- All images have descriptive alt text
- Proper heading hierarchy (single H1 per page)
- ARIA labels where needed
- Sufficient color contrast (WCAG AA)

### Sitemap
- Auto-generated sitemap.xml
- Submit to Google Search Console

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://pattayaspace.co/sitemap.xml
```

---

## Keyword Strategy

### Primary Keywords
- Coworking Pattaya
- Coworking space Pattaya
- Pattaya workspace
- Hot desk Pattaya

### Secondary Keywords
- Digital nomad Thailand
- Remote work Pattaya
- Shared office Pattaya
- Meeting room Pattaya
- Virtual office Thailand

### Long-tail Keywords
- Best coworking space in Pattaya
- 24 hour coworking Pattaya
- Coworking with meeting rooms Pattaya
- Monthly desk rental Pattaya
