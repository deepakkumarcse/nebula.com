import { createSlice } from '@reduxjs/toolkit';
import type { CaseStudy } from '@/types';

const initialState: CaseStudy[] = [
  {
    id: '1',
    title: 'AI-Powered Customer Analytics Platform',
    industry: 'SaaS / Analytics',
    description: 'Built an enterprise-grade analytics platform that uses machine learning to predict customer behavior and optimize marketing campaigns.',
    challenge: 'Client needed to process 50M+ data points daily and provide real-time insights to marketing teams across multiple regions.',
    solution: 'Developed a scalable microservices architecture using FastAPI, PostgreSQL, and Redis. Integrated custom ML models for predictive analytics.',
    technologies: ['FastAPI', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'React', 'AWS'],
    results: [
      'Processing 50M+ events per day',
      '99.99% uptime achieved',
      'Real-time insights in <2 seconds',
      '45% improvement in campaign ROI'
    ],
    metrics: [
      { label: 'Data Processing', value: '50M+ daily' },
      { label: 'Response Time', value: '<2 sec' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'ROI Increase', value: '+45%' }
    ],
    image: `${import.meta.env.BASE_URL}/assets/data-analytics.jpg`
  },
  {
    id: '2',
    title: 'Enterprise Banking Platform Modernization',
    industry: 'FinTech / Banking',
    description: 'Modernized a legacy banking system to a cloud-native platform supporting millions of daily transactions with enhanced security.',
    challenge: 'Replace 20-year-old mainframe system while maintaining zero downtime and ensuring regulatory compliance.',
    solution: 'Phased migration to Django-based microservices with comprehensive API layer, deployed on AWS with multi-region redundancy.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Redis'],
    results: [
      '5M+ transactions processed daily',
      'Zero downtime during migration',
      '60% reduction in operational costs',
      'SOC 2 and PCI DSS compliant'
    ],
    metrics: [
      { label: 'Daily Transactions', value: '5M+' },
      { label: 'Cost Reduction', value: '60%' },
      { label: 'Migration Downtime', value: '0 hours' },
      { label: 'Security Score', value: 'A+' }
    ],
    image: `${import.meta.env.BASE_URL}/assets/security-shield.jpg`
  },
  {
    id: '3',
    title: 'Telemedicine Platform with AI Triage',
    industry: 'HealthTech',
    description: 'Created a comprehensive telemedicine platform with AI-powered symptom checker and virtual consultation features.',
    challenge: 'Build HIPAA-compliant platform that handles video consultations, EHR integration, and AI-based preliminary diagnosis.',
    solution: 'Full-stack solution using Next.js frontend, Node.js backend with WebRTC, and custom NLP models for symptom analysis.',
    technologies: ['Next.js', 'Node.js', 'WebRTC', 'MongoDB', 'OpenAI', 'AWS', 'TypeScript'],
    results: [
      '100K+ consultations completed',
      '40% faster patient triage',
      '95% patient satisfaction rate',
      'HIPAA compliant infrastructure'
    ],
    metrics: [
      { label: 'Consultations', value: '100K+' },
      { label: 'Triage Speed', value: '+40%' },
      { label: 'Satisfaction', value: '95%' },
      { label: 'Compliance', value: 'HIPAA' }
    ],
    image: `${import.meta.env.BASE_URL}/assets/mobile-app-design.jpg`
  },
  {
    id: '4',
    title: 'E-Commerce Platform with GenAI Recommendations',
    industry: 'E-Commerce / Retail',
    description: 'Developed a modern e-commerce platform with AI-powered product recommendations and personalized shopping experiences.',
    challenge: 'Create personalized shopping experience for 2M+ users while handling peak traffic of 50K concurrent shoppers.',
    solution: 'Built with Next.js and Django, integrated GPT-4 for product descriptions and recommendations, deployed on auto-scaling infrastructure.',
    technologies: ['Next.js', 'Django', 'PostgreSQL', 'OpenAI GPT-4', 'Stripe', 'AWS', 'Redis'],
    results: [
      '2M+ active users',
      '35% increase in conversion rate',
      '50% higher average order value',
      '99.9% uptime during Black Friday'
    ],
    metrics: [
      { label: 'Active Users', value: '2M+' },
      { label: 'Conversion Rate', value: '+35%' },
      { label: 'Order Value', value: '+50%' },
      { label: 'Peak Uptime', value: '99.9%' }
    ],
    image: `${import.meta.env.BASE_URL}/assets/mobile-app-design_variant_1.jpg`
  },
  {
    id: '5',
    title: 'Real-Time Collaboration Platform',
    industry: 'SaaS / Productivity',
    description: 'Built a real-time collaboration platform for distributed teams with document editing, video calls, and project management.',
    challenge: 'Support real-time collaboration for 10K+ concurrent users with sub-100ms latency across global regions.',
    solution: 'Implemented using Node.js with Socket.io, operational transform algorithms, and edge computing for low latency.',
    technologies: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'Redis', 'WebRTC', 'Cloudflare'],
    results: [
      '10K+ concurrent users',
      '<100ms global latency',
      '30% faster release cycles',
      '99.95% uptime SLA'
    ],
    metrics: [
      { label: 'Concurrent Users', value: '10K+' },
      { label: 'Latency', value: '<100ms' },
      { label: 'Speed Improvement', value: '+30%' },
      { label: 'Uptime', value: '99.95%' }
    ],
    image: `${import.meta.env.BASE_URL}/assets/team-collaboration.jpg`
  },
  {
    id: '6',
    title: 'Cloud Infrastructure Optimization',
    industry: 'Enterprise / Infrastructure',
    description: 'Transformed enterprise infrastructure with containerization, Kubernetes orchestration, and automated CI/CD pipelines.',
    challenge: 'Reduce cloud costs while improving deployment frequency and system reliability for a Fortune 500 company.',
    solution: 'Migrated to Kubernetes on AWS, implemented GitOps with ArgoCD, and optimized resource allocation with auto-scaling.',
    technologies: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'ArgoCD', 'Prometheus', 'Grafana'],
    results: [
      '40% reduction in cloud costs',
      '10x faster deployments',
      '99.99% service availability',
      'Zero-downtime deployments'
    ],
    metrics: [
      { label: 'Cost Savings', value: '40%' },
      { label: 'Deploy Speed', value: '10x' },
      { label: 'Availability', value: '99.99%' },
      { label: 'Downtime', value: '0 hours' }
    ],
    image: `${import.meta.env.BASE_URL}/assets/cloud-infrastructure.jpg`
  }
];

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
});

export default portfolioSlice.reducer;