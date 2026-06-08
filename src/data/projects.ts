export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  gallery: string[];
  techStack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'tideli',
    title: 'Tideli',
    category: 'Food Delivery Ecosystem',
    shortDesc: 'A lightning-fast logistics and food delivery platform mapping out urban culinary grids.',
    fullDesc: 'Tideli redefines urban food delivery through efficient routing algorithms and a localized logistics network. Built specifically for high-density environments, the platform handles real-time driver tracking, immediate multi-vendor cart processing, and seamless M-Pesa automated payments.',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800'
    ],
    techStack: ['React Native', 'Node.js', 'Redis', 'PostgreSQL', 'Google Maps API']
  },
  {
    id: 'african-kings',
    title: 'African Kings',
    category: 'Cultural Platform',
    shortDesc: 'An immersive digital experience showcasing African heritage and contemporary royal lineages.',
    fullDesc: 'African Kings is an interactive digital exhibition platform bridging historical archives with modern webGL rendering. We designed a sprawling, animated database that allows users to traverse generational lineages, cultural artifacts, and majestic storytelling in a purely 3D driven interface.',
    image: 'https://images.unsplash.com/photo-1516025251457-36e2f1f0a0bb?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1506869640319-fea3a2837ce5?auto=format&fit=crop&q=80&w=800'
    ],
    techStack: ['Three.js', 'React', 'GraphQL', 'AWS S3']
  },
  {
    id: 'madis-pos',
    title: 'MADIS POS',
    category: 'Retail Terminal',
    shortDesc: 'Offline-first Point-of-Sale built for resilience in unpredictable network conditions.',
    fullDesc: 'MADIS POS is our flagship structural engineering product. Designed for the Kenyan market, it features an offline-first architecture that seamlessly queues transactions and syncs database changes locally, while integrating directly with Daraja APIs for immediate M-Pesa settlement.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556741533-6e40ce2cbddf?auto=format&fit=crop&q=80&w=800'
    ],
    techStack: ['Electron', 'React', 'SQLite', 'Daraja API']
  },
  {
    id: 'teddy-cabs',
    title: 'Teddy Cabs',
    category: 'Ride Hailing Infrastructure',
    shortDesc: 'A scalable ride hailing backend with dynamic pricing and geo-fenced tracking algorithms.',
    fullDesc: 'Teddy Cabs needed a reliable localized ride-hailing framework. We constructed a resilient backend utilizing websockets and real-time mapping for immediate driver dispatch, incorporating dynamic pricing adjustments during peak urban gridlock.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555021287-ba8aafeafdb6?auto=format&fit=crop&q=80&w=800'
    ],
    techStack: ['React Native', 'Node.js', 'Socket.io', 'Google Maps Platform']
  },
  {
    id: 'madis-ecommerce',
    title: 'Madis E-commerce',
    category: 'Digital Storefront',
    shortDesc: 'A hyper-optimized headless e-commerce architecture scaling global transactions.',
    fullDesc: 'The Madis E-commerce extension converts the powerful backend of the MADIS platform into a direct-to-consumer storefront. Utilizing edge-caching and headless CMS principles, we reduced page load times to under 400ms across 3G networks.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800'
    ],
    techStack: ['Next.js', 'Vercel Edge', 'Stripe', 'Tailwind']
  }
];
