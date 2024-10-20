## **Product Requirements Document (PRD)**
### **Project Overview**
You are building a website for a company that offers the following services:
- 3D modeling of real-world industrial installations.
- 3D models of proposed upgrades to existing installations.
- Virtual Reality tours of proposed installations.
- Assistance in implementing these upgrades.

The website should serve as a showcase for the company's services, allowing potential clients to explore their offerings and book a demo. It should emphasize the interactive 3D capabilities of the company and use a modern, sleek design.

### **Technical Stack**
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **3D Visualization**: three.js
- **Deployment**: Vercel (or similar platform)
- **Version Control**: Git (GitHub)

### **Core Functionality**
#### **Color Palette:**
- **Background**: Dark
- **Text**: Light Purple
- **Buttons**: Bright Green (for "Book a Demo")

#### **Components and Pages**
- **Navigation:**
  - A sticky navigation bar that smoothly scrolls to relevant sections of the page.
  - Contains:
    - Logo (positioned to the left).
    - Menu items for "Services", "Testimonials", "Contact", etc.
    - "Book a Demo" button, styled in bright green for prominence.
    - Mobile-friendly hamburger menu.

- **Homepage:**
  - **Hero Section**:
    - Clear message about the company's offerings.
    - Background video that highlights 3D work.
    - Call-to-action button ("Book a Demo") prominently placed.
  - **Benefits Section**:
    - Showcases the advantages of using the company's services.
    - Include visual elements like images and icons.
  - **3D Model Section**:
    - Displays an interactive 3D model of an industrial installation.
    - Users can zoom, pan, and rotate the model.
  - **Testimonials**:
    - Display feedback from previous clients with text and images.
  - **Call to Action**:
    - Another "Book a Demo" section at the bottom of the page.

- **Background Animations:**
  - Populate the background with 3D abstract shapes using three.js to add a dynamic feel to the site.

---

### **File Structure**
The project should follow the structure below to maintain organization and facilitate collaboration:

```
my-industrial-3d-website/
│
├── public/                  
│   ├── models/              
│   ├── videos/              
│   ├── images/              
│   └── assets/              
│
├── src/
│   ├── app/                 
│   │   ├── layout.tsx       
│   │   ├── page.tsx         
│   │   ├── api/             
│   │   │   └── contact/     
│   │   ├── components/      
│   │   │   ├── Navbar.tsx   
│   │   │   ├── Hero.tsx     
│   │   │   ├── Benefits.tsx 
│   │   │   ├── ModelViewer.tsx 
│   │   │   ├── Testimonials.tsx 
│   │   │   ├── CTA.tsx      
│   │   │   ├── Footer.tsx   
│   │   │   └── AnimatedBackground.tsx 
│   │   └── styles/          
│   │       └── globals.css  
│   │
│   ├── hooks/               
│   │   └── useWindowSize.ts 
│   │
│   ├── types/               
│   │   ├── index.d.ts       
│   │   └── api.ts           
│   │
│   ├── utils/               
│   │   └── apiHelpers.ts    
│   │
│   └── config/              
│       └── theme.ts         
│
├── .env.local               
├── .gitignore               
├── next.config.js           
├── tailwind.config.js       
├── tsconfig.json            
└── README.md                
```

### **Detailed Component Requirements**
1. **Navbar (`Navbar.tsx`)**
   - **Desktop Layout**: Logo on the left, menu items in the center, "Book a Demo" button on the right.
   - **Mobile Layout**: Hamburger icon that opens a sidebar with menu items.
   - **Props**: Menu items (array), current section (for active highlight).
   - **Style**: Dark background, light purple text, bright green button.

2. **Hero Section (`Hero.tsx`)**
   - **Content**: Background video loop, headline, and subheadline with a "Book a Demo" button.
   - **Style**: Full-screen with dark overlay on video to ensure text readability.
   - **Props**: Headline text, subheadline text, video file path.

3. **3D Model Viewer (`ModelViewer.tsx`)**
   - **Functionality**: Uses `three.js` to load and display a 3D model from the `/public/models` folder.
   - **Interactions**: Pan, zoom, and rotate the model.
   - **Props**: Model path, initial camera position, and control settings.

4. **Animated Background (`AnimatedBackground.tsx`)**
   - **Functionality**: Creates abstract, rotating 3D shapes using `three.js` as a background.
   - **Style**: Subtle animations that do not detract from the main content.
   - **Props**: Shape types, animation speed, and color scheme.

5. **Testimonials (`Testimonials.tsx`)**
   - **Content**: Carousel of client feedback, including text and optional client image.
   - **Props**: Array of testimonial objects (name, feedback, image URL).

6. **Call to Action (`CTA.tsx`)**
   - **Content**: Clear message and bright green button to encourage users to book a demo.
   - **Style**: Centralized on the page with high contrast to draw attention.
   - **Props**: Message text, button text.

---

### **Additional Requirements**
1. **Project Setup**
   - **Next.js**: Use Next.js 14 with the App Router.
   - **Tailwind CSS**: Configure in `tailwind.config.js` with custom colors for the website's color palette.
   - **TypeScript**: Configure using `tsconfig.json` for strict type checking.
   - **Three.js**: Import and configure `three.js` in `ModelViewer.tsx` and `AnimatedBackground.tsx`.
   - **Client Components**: Use `'use client'` at the top of files where client-side hooks or state management are used.

2. **Type Safety**
   - **Interfaces**: Use TypeScript interfaces for all data structures, including component props and API responses.
   - **Avoid `any`**: Define explicit types for all variables and function parameters.
   - **API Response Types**: Store types in `types/api.ts` for consistent data handling.

3. **Environment Variables**
   - **.env.local**: Store API keys, endpoint URLs, and any other sensitive information.
   - **Usage**: Access these variables only in server-side code or API routes.
   - **Deployment**: Set environment variables through the deployment platform (e.g., Vercel).

4. **Code Quality**
   - **Linting**: Use ESLint for code quality checks.
   - **Prettier**: Set up Prettier for code formatting.
   - **Git Hooks**: Use Husky for pre-commit hooks to ensure linting and formatting before commits.

---

### **Deployment and Testing**
- **Staging Environment**: Create a staging environment for pre-production testing.
- **Testing**: Implement basic unit tests for key components and integration tests for page navigation.
- **Performance**: Ensure 3D models are optimized to reduce loading times.
- **Deployment**: Deploy to Vercel or a similar platform, leveraging serverless functions for API routes.

### **Success Metrics**
- **Page Load Time**: Aim for a load time under 3 seconds, even with 3D assets.
- **User Engagement**: Measure interactions with the 3D models and demo requests.
- **Mobile Responsiveness**: Ensure the website is fully responsive on mobile and tablet devices.

---