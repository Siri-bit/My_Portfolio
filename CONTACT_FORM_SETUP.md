# Contact Form Setup Guide

## Problem
The contact form currently uses `mailto:` links which only open the user's email client. This doesn't send emails directly to you.

## Solution: Use Formspree (FREE - Recommended)

Formspree is a free service that receives form submissions and sends them directly to your email inbox.

### Step 1: Create Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account (no credit card required)
3. Free plan includes 50 submissions per month

### Step 2: Create a New Form
1. After logging in, click "New Form"
2. Name it "Portfolio Contact Form"
3. Add your email: `sirishavl.cse.rymec@mail.com`
4. Copy the form ID (it looks like: `xrgkjpqv` or `moqznklo`)

### Step 3: Update the Contact Form
1. Open `components/Contact.tsx`
2. Find this line:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
   ```
3. Replace `YOUR_FORMSPREE_ID` with your actual Formspree form ID
4. Save the file

### Step 4: Test
1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox (`sirishavl.cse.rymec@mail.com`)
4. You should receive the form submission!

---

## Alternative: Use EmailJS (Also FREE)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Free plan includes 200 emails per month

### Step 2: Set Up Email Service
1. Go to "Email Services" → Add New Service
2. Choose your email provider (Gmail, Outlook, etc.)
3. Connect your email account
4. Copy the Service ID

### Step 3: Create Email Template
1. Go to "Email Templates" → Create New Template
2. Use this template:
   ```
   From: {{from_email}}
   Name: {{from_name}}
   Message: {{message}}
   ```
3. Set "To Email" to: `sirishavl.cse.rymec@mail.com`
4. Copy the Template ID

### Step 4: Get Public Key
1. Go to "Account" → API Keys
2. Copy your Public Key

### Step 5: Update Contact Form
1. Open `components/Contact.tsx`
2. Replace the Formspree code with EmailJS:
   ```typescript
   import emailjs from '@emailjs/browser'
   
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     {
       from_name: formData.name,
       from_email: formData.email,
       message: formData.message,
     },
     'YOUR_PUBLIC_KEY'
   )
   ```

---

## Current Status
The contact form is currently set up to use Formspree. You just need to:
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form ID
3. Replace `YOUR_FORMSPREE_ID` in `components/Contact.tsx`

Once configured, you'll receive all form submissions directly in your email inbox!

---

## Quick Test
After setting up, test with:
- Name: Test User
- Email: test@example.com
- Message: This is a test message

You should receive an email at `sirishavl.cse.rymec@mail.com` within seconds.

