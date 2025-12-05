import { createSlice } from '@reduxjs/toolkit';
import type { Testimonial } from '@/types';

const initialState: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechVision Inc',
    quote: 'The team delivered an exceptional AI-powered analytics platform that transformed how we process customer data. Their expertise in FastAPI and machine learning was evident throughout the project.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'VP of Engineering',
    company: 'FinanceFlow',
    quote: 'Outstanding work on our enterprise banking platform. The Django backend they built handles millions of transactions daily with zero downtime. Highly professional team.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'Product Manager',
    company: 'HealthTech Solutions',
    quote: 'They redesigned our entire patient portal with React and Next.js. The new interface is intuitive, fast, and our user satisfaction scores increased by 40%. Exceptional UI/UX work.',
    rating: 5
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Founder & CEO',
    company: 'StartupX',
    quote: 'From concept to deployment in just 8 weeks. Their full-stack expertise and agile approach helped us launch our MVP ahead of schedule. The GenAI features they integrated are game-changing.',
    rating: 5
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Director of IT',
    company: 'Global Retail Corp',
    quote: 'The cloud migration and DevOps transformation they led reduced our infrastructure costs by 35% while improving performance. Their Kubernetes expertise is world-class.',
    rating: 5
  },
  {
    id: '6',
    name: 'James Patterson',
    role: 'Head of Innovation',
    company: 'MediaStream',
    quote: 'They built a real-time content delivery platform using Node.js that handles 10M+ concurrent users. The architecture is brilliant and scales effortlessly.',
    rating: 5
  }
];

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {},
});

export default testimonialsSlice.reducer;