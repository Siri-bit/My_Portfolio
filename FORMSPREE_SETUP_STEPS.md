# How to Find Your Formspree Form ID - Step by Step

## Step 1: Sign Up/Log In to Formspree
1. Go to **https://formspree.io**
2. Click **"Sign Up"** (or **"Log In"** if you already have an account)
3. You can sign up with:
   - Google account (easiest)
   - Email address
   - GitHub account

## Step 2: Create a New Form
1. After logging in, you'll see your dashboard
2. Click the **"+ New Form"** button (usually at the top right or center)
3. You'll be asked to:
   - **Form Name**: Enter "Portfolio Contact Form" (or any name you like)
   - **Email**: Enter `sirishavl.cse.rymec@mail.com`
   - Click **"Create Form"**

## Step 3: Find Your Form ID
After creating the form, you'll see your form details page. The Form ID is shown in **two places**:

### Option A: From the Form URL
Look at the URL in your browser. It will look like:
```
https://formspree.io/f/YOUR_FORM_ID_HERE
```
or
```
https://formspree.io/forms/YOUR_FORM_ID_HERE
```

**Example:**
- If the URL is: `https://formspree.io/f/xrgkjpqv`
- Then your Form ID is: `xrgkjpqv`

### Option B: From the Form Settings
1. On your form page, look for:
   - **"Form Endpoint"** or **"Endpoint URL"**
   - It will show: `https://formspree.io/f/YOUR_FORM_ID`
   - The part after `/f/` is your Form ID

### Option C: From Integration Instructions
1. Click on your form
2. Look for **"Integration"** or **"Setup"** tab
3. You'll see code examples showing your Form ID

## Step 4: Copy Your Form ID
1. Copy the Form ID (it's usually 8-12 characters long)
   - Examples: `xrgkjpqv`, `moqznklo`, `pwkjvxnm`
2. It should look like random letters/numbers

## Step 5: Update Your Code
1. Open `components/Contact.tsx` in your code editor
2. Find line 56 (around there):
   ```typescript
   const response = await fetch('https://formspree.io/f/https://formspree.io/f/xldoqrjp', {
   ```
3. Replace `YOUR_FORMSPREE_ID` with your actual Form ID
   ```typescript
   const response = await fetch('https://formspree.io/f/xrgkjpqv', {
   ```
   (Replace `xrgkjpqv` with YOUR actual Form ID)

4. Save the file

## Step 6: Test It
1. Restart your development server:
   ```bash
   npm run dev
   ```
2. Go to your contact form
3. Fill it out and submit
4. Check your email: `sirishavl.cse.rymec@mail.com`
5. You should receive the form submission!

---

## Visual Guide

```
Formspree Dashboard
├── [New Form Button]
│
└── Your Forms
    └── Portfolio Contact Form
        ├── Form ID: xrgkjpqv  ← THIS IS WHAT YOU NEED
        ├── Endpoint: https://formspree.io/f/xrgkjpqv
        └── Status: Active
```

---

## Still Can't Find It?

If you're having trouble:
1. Click on your form name in the dashboard
2. Look at the **"Endpoint"** or **"Form URL"** field
3. It will show: `https://formspree.io/f/[YOUR_ID]`
4. Copy everything after `/f/`

---

## Quick Example

**Before:**
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
```

**After (with real Form ID):**
```typescript
const response = await fetch('https://formspree.io/f/xrgkjpqv', {
```

That's it! Once you replace `YOUR_FORMSPREE_ID` with your actual Form ID, the contact form will start sending emails to your inbox.

