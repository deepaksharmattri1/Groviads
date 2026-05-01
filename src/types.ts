export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
