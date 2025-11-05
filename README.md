# Sirisha VL - Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Sirisha VL - Software Developer & AI Enthusiast.

## 🚀 Features

- **Modern Design**: Clean, minimal design with glassmorphism effects and smooth gradients
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Typewriter Effect**: Dynamic hero section with animated text
- **Contact Form**: Functional contact form (requires EmailJS setup)
- **Resume Download**: Direct download link for resume PDF
- **Project Filtering**: Filter projects by category (Web, AI, All)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email Service**: EmailJS (configurable)

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory)
   ```bash
   cd "siri port"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your resume PDF**
   - Place your resume PDF file named `Sirisha_vl_90.pdf` in the `public` folder
   - The file should be accessible at `/Sirisha_vl_90.pdf`

4. **Configure EmailJS (Optional)**
   - Sign up for a free account at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the Contact component (`components/Contact.tsx`) with your:
     - Service ID
     - Template ID
     - Public Key
   - Alternatively, you can use Formspree or another email service

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
siri port/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── About.tsx            # About section component
│   ├── BackToTop.tsx        # Back to top button
│   ├── Contact.tsx          # Contact form and information
│   ├── Experience.tsx       # Experience and achievements
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Projects.tsx         # Projects showcase
│   ├── Skills.tsx           # Skills section
│   ├── ThemeProvider.tsx    # Dark/light theme provider
│   └── Typewriter.tsx       # Typewriter effect component
├── public/
│   └── Sirisha_vl_90.pdf    # Resume PDF (add your file here)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme. The primary color is used throughout the site.

### Content
Update the following files to customize content:
- **About**: `components/About.tsx`
- **Skills**: `components/Skills.tsx`
- **Projects**: `components/Projects.tsx`
- **Experience**: `components/Experience.tsx`
- **Contact**: `components/Contact.tsx`
- **Hero**: `components/Hero.tsx`

### Metadata
Update SEO metadata in `app/layout.tsx`:
- Title
- Description
- Keywords

## 📧 Contact Form Setup

### EmailJS Setup (Current)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Public Key
5. Update `components/Contact.tsx` with your credentials

### Alternative: Formspree
Replace the EmailJS code in `components/Contact.tsx` with Formspree integration:
```typescript
// Replace handleSubmit function
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // Formspree integration code
}
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Import your repository to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms
This is a standard Next.js application and can be deployed on any platform that supports Next.js.

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Sirisha VL**
- Email: sirishavl.cse.rymec@mail.com
- Phone: +91 74831 05684
- LinkedIn: [linkedin.com/in/sirisha-vl](https://linkedin.com/in/sirisha-vl)

## 🙏 Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons from React Icons
- Animations powered by Framer Motion

---

**Note**: Remember to add your actual resume PDF file to the `public` folder and configure the email service for the contact form to work properly.


