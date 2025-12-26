# Analytics Setup Guide

## Google Analytics Setup

This project uses Google Analytics 4 (GA4) to track site visits and user behavior.

### Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or "Create Account"
4. Enter your account name (e.g., "MenoDAO")

### Step 2: Create a Property

1. Click "Create Property"
2. Enter property name: "MenoDAO Landing Page"
3. Select your time zone and currency
4. Click "Next" and fill out business information
5. Click "Create"

### Step 3: Get Your Measurement ID

1. After creating the property, you'll see a "Data Streams" option
2. Click "Add stream" → "Web"
3. Enter your website URL (e.g., `https://menodao.co.ke` or your domain)
4. Enter a stream name
5. Click "Create stream"
6. You'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 4: Add Measurement ID to Your Project

1. Create a `.env.local` file in the project root (if it doesn't exist)
2. Add your Measurement ID:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

3. Restart your development server:

```bash
npm run dev
```

### Step 5: Verify Analytics is Working

1. Visit your site
2. Go to Google Analytics → Reports → Realtime
3. You should see your visit appear within a few seconds

## What Gets Tracked

The analytics implementation automatically tracks:

- **Page views** - Every time someone visits your site
- **Page navigation** - When users navigate between sections
- **User interactions** - Button clicks, form submissions (if you add event tracking)
- **Device information** - Mobile vs desktop usage
- **Geographic data** - Where your visitors are coming from
- **Referral sources** - How users found your site

## Adding Custom Event Tracking

To track specific user actions (like button clicks or form submissions), you can add event tracking in your components:

```typescript
// Track a button click
const handleClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'button_click', {
      button_name: 'Join Founding Members',
      location: 'hero_section'
    });
  }
  // Your existing click handler
};
```

## Privacy & GDPR Compliance

Make sure to:
- Add a privacy policy to your site
- Inform users about analytics tracking
- Consider adding a cookie consent banner if required in your region

## Troubleshooting

- **No data appearing?** Check that your Measurement ID is correct and the `.env.local` file is in the project root
- **Still not working?** Make sure you've restarted your dev server after adding the environment variable
- **Production?** Make sure to add the environment variable in your hosting platform's environment settings (Vercel, Netlify, etc.)

