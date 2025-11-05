# Quick Setup Guide

## ✅ Before Running the Project

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Resume PDF**
   - Replace `public/Sirisha_vl_90.pdf` with your actual resume PDF file
   - The file must be named exactly `Sirisha_vl_90.pdf`

3. **Configure Contact Form (Optional)**
   - Open `components/Contact.tsx`
   - Replace EmailJS credentials:
     - `YOUR_SERVICE_ID`
     - `YOUR_TEMPLATE_ID`
     - `YOUR_PUBLIC_KEY`
   - Or use Formspree/another service

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

## 📝 Notes

- The contact form requires EmailJS setup to send emails
- All project links (GitHub, Demo) are currently set to `#` - update them in `components/Projects.tsx`
- The LinkedIn URL should be updated to the full URL (currently shows relative path)

## 🎨 Customization

- Colors: Edit `tailwind.config.ts`
- Content: Update component files in `components/` folder
- SEO: Update metadata in `app/layout.tsx`


