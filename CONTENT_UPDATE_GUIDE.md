# Content Update Guide

## How to Update Partner Clinics and Testimonials

All editable content is centralized in `app/data/content.ts` for easy updates.

### Updating Partner Clinics

Edit the `partnerClinics` array in `app/data/content.ts`:

```typescript
export const partnerClinics = [
  {
    name: "Your Real Clinic Name",
    location: "Actual Street Address, City",
    area: "Neighborhood",
  },
  // Add more clinics...
];
```

### Updating Testimonials

Edit the `testimonials` array in `app/data/content.ts`:

```typescript
export const testimonials = [
  {
    name: "Real Customer Name",
    location: "Their Area",
    text: "Their actual testimonial quote",
    treatment: "What they got treated for",
    savings: "Amount saved (just the number)",
  },
  // Add more testimonials...
];
```

### Updating Hero Content

Edit the `heroContent` object in `app/data/content.ts`:

```typescript
export const heroContent = {
  headline: "Your main headline",
  subheadline: "Your subheadline",
  ctaText: "Button text",
  ctaSubtext: "Secondary link text",
};
```

## After Making Changes

1. Save the file
2. The changes will appear immediately on the landing page
3. No need to edit the main page.tsx file

## Current Placeholder Data

The current data uses realistic but fictional:

- Clinic names and locations in Mombasa/Kwale
- Customer testimonials with savings amounts
- All can be replaced with real data without changing code
