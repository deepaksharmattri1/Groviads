import { Service, Testimonial, PortfolioItem, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Custom, responsive, and high-performance websites built with the latest technologies to drive your business forward.',
    icon: 'Layout',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Streamline your workflows and ensure project success with our professional management and coordination services.',
    icon: 'ListChecks',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic online marketing campaigns designed to increase brand awareness, engagement, and conversions.',
    icon: 'Megaphone',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'Develop a unique and memorable brand identity that resonates with your target audience and stands out.',
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic with our data-driven SEO strategies.',
    icon: 'Search',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Grow your community and boost engagement across all major social platforms with expert management.',
    icon: 'Share2',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'business-growth',
    title: 'Business Growth Solutions',
    description: 'End-to-end solutions to scale your business, optimize operations, and maximize revenue potential.',
    icon: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'portfolio-building',
    title: 'Portfolio Building',
    description: 'Professional portfolio creation for individuals and businesses to showcase their best work effectively.',
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'TechFlow Systems',
    content: 'Groviads transformed our online presence. Their data-driven approach to marketing doubled our lead generation in just three months.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'NextGen Retail',
    content: 'The website they developed is not only beautiful but incredibly fast. Our bounce rate dropped by 40% immediately after launch.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    company: 'Creative Hub',
    content: 'Professional, responsive, and highly skilled. They don\'t just provide services; they act as a strategic partner in our growth.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1523474253046-2cd2c78b6ad1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Enterprise Workflow Engine',
    category: 'Project Management',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Fintech Brand Evolution',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Modern Real Estate Portal',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What services does Groviads offer?',
    answer: 'We offer a wide range of digital services including Website Development, Project Management, Digital Marketing, Branding, SEO, Social Media Management, and Business Growth Solutions.'
  },
  {
    question: 'How long does a typical web project take?',
    answer: 'Timeline varies based on complexity, but a standard business website typically takes 4-6 weeks from discovery to launch.'
  },
  {
    question: 'Do you offer custom pricing packages?',
    answer: 'Yes, we understand every business is unique. We provide tailored solutions and pricing based on your specific goals and requirements.'
  },
  {
    question: 'Can you help with international business growth?',
    answer: 'Absolutely. Our digital marketing and growth strategies are designed to help businesses expand globally through targeted online channels.'
  }
];
