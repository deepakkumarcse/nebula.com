import { createSlice } from '@reduxjs/toolkit';
import type { Service } from '@/types';

const initialState: Service[] = [
  {
    id: 'python-django',
    title: 'Python & Django Development',
    category: 'Backend',
    description: 'Build robust, scalable backend systems with Python and Django. Our expert team delivers high-performance APIs, data processing pipelines, and enterprise-grade web applications.',
    benefits: [
      'Rapid development with Django\'s batteries-included framework',
      'Scalable architecture for growing businesses',
      'Strong security features and best practices',
      'Seamless database integration and ORM',
      'RESTful API development with Django REST Framework'
    ],
    technologies: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery'],
    idealFor: ['Enterprise applications', 'Data-driven platforms', 'Content management systems', 'E-commerce backends'],
    icon: 'Code2'
  },
  {
    id: 'fastapi',
    title: 'FastAPI Development',
    category: 'Backend',
    description: 'Leverage the speed and modern features of FastAPI to build high-performance APIs. Perfect for microservices, real-time applications, and AI/ML integrations.',
    benefits: [
      'Lightning-fast performance with async support',
      'Automatic API documentation with OpenAPI',
      'Type safety with Pydantic models',
      'Easy integration with modern frontend frameworks',
      'Built-in validation and serialization'
    ],
    technologies: ['FastAPI', 'Python', 'Pydantic', 'SQLAlchemy', 'Uvicorn', 'Docker'],
    idealFor: ['Microservices architecture', 'Real-time APIs', 'AI/ML model serving', 'High-performance backends'],
    icon: 'Zap'
  },
  {
    id: 'nodejs-express',
    title: 'Node.js & Express Development',
    category: 'Backend',
    description: 'Create efficient, event-driven backend services with Node.js and Express. Ideal for real-time applications, APIs, and scalable network applications.',
    benefits: [
      'Non-blocking I/O for high concurrency',
      'JavaScript/TypeScript across the stack',
      'Rich ecosystem with npm packages',
      'Perfect for real-time applications',
      'Microservices-friendly architecture'
    ],
    technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Socket.io', 'Redis'],
    idealFor: ['Real-time applications', 'RESTful APIs', 'Streaming services', 'Chat applications'],
    icon: 'Server'
  },
  {
    id: 'react-nextjs',
    title: 'React & Next.js Development',
    category: 'Frontend',
    description: 'Build modern, responsive web applications with React and Next.js. We create fast, SEO-friendly, and user-centric interfaces that drive engagement.',
    benefits: [
      'Server-side rendering for better SEO',
      'Lightning-fast page loads with static generation',
      'Component-based architecture for maintainability',
      'Rich ecosystem and community support',
      'Excellent developer experience'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'React Query'],
    idealFor: ['Web applications', 'E-commerce platforms', 'SaaS products', 'Marketing websites'],
    icon: 'Layout'
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    category: 'Design',
    description: 'Create stunning, intuitive user interfaces that delight users and drive conversions. Our design team combines aesthetics with usability research.',
    benefits: [
      'User-centered design approach',
      'Comprehensive user research and testing',
      'Modern, accessible design systems',
      'Responsive and mobile-first designs',
      'Brand-aligned visual identity'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
    idealFor: ['Startups', 'Product redesigns', 'Mobile apps', 'Web platforms'],
    icon: 'Palette'
  },
  {
    id: 'ai-genai',
    title: 'AI & GenAI Solutions',
    category: 'AI',
    description: 'Transform your business with cutting-edge AI and Generative AI solutions. From LLM integration to custom AI models, we bring intelligence to your applications.',
    benefits: [
      'Custom AI model development and training',
      'LLM integration (GPT, Claude, Gemini)',
      'Intelligent automation and workflows',
      'Natural language processing capabilities',
      'Computer vision and image recognition'
    ],
    technologies: ['OpenAI', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Vector DBs'],
    idealFor: ['AI-powered products', 'Automation solutions', 'Chatbots', 'Content generation'],
    icon: 'Brain'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    category: 'Infrastructure',
    description: 'Optimize your infrastructure with modern cloud solutions and DevOps practices. We ensure your applications are scalable, secure, and highly available.',
    benefits: [
      'Infrastructure as Code (IaC)',
      'CI/CD pipeline automation',
      'Container orchestration with Kubernetes',
      'Cloud cost optimization',
      'Security and compliance best practices'
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    idealFor: ['Enterprise systems', 'Scaling startups', 'Migration projects', 'DevOps transformation'],
    icon: 'Cloud'
  },
  {
    id: 'custom-enterprise',
    title: 'Custom Enterprise Solutions',
    category: 'Enterprise',
    description: 'Develop tailored software solutions that address your unique business challenges. From legacy modernization to greenfield projects.',
    benefits: [
      'Customized to your business processes',
      'Integration with existing systems',
      'Scalable and maintainable architecture',
      'Comprehensive documentation and training',
      'Ongoing support and maintenance'
    ],
    technologies: ['Full Stack', 'Microservices', 'API Gateways', 'Message Queues', 'Databases'],
    idealFor: ['Large enterprises', 'Complex workflows', 'Legacy modernization', 'Digital transformation'],
    icon: 'Building2'
  }
];

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
});

export default servicesSlice.reducer;