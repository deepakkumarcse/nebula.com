import { motion } from 'framer-motion';
import { Brain, Sparkles, Bot, Database, Workflow, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AIGenAI = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Consulting & Strategy',
      description: 'Navigate your AI transformation journey with expert guidance. We help you identify opportunities, assess feasibility, and create a roadmap for AI adoption.',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'ROI analysis and business case development',
        'Technology stack recommendations',
        'Implementation roadmap'
      ]
    },
    {
      icon: Sparkles,
      title: 'LLM Integration',
      description: 'Integrate powerful language models like GPT-4, Claude, and Gemini into your applications. Build intelligent features that understand and generate human-like text.',
      features: [
        'Custom prompt engineering',
        'Multi-model orchestration',
        'Fine-tuning for domain-specific tasks',
        'RAG (Retrieval Augmented Generation)',
        'Cost optimization strategies'
      ]
    },
    {
      icon: Workflow,
      title: 'GenAI Automation',
      description: 'Automate complex workflows with generative AI. From content creation to data processing, we build intelligent systems that learn and adapt.',
      features: [
        'Intelligent document processing',
        'Automated content generation',
        'Smart data extraction and classification',
        'Workflow orchestration',
        'Quality assurance and validation'
      ]
    },
    {
      icon: Bot,
      title: 'Custom AI Copilots & Chatbots',
      description: 'Build conversational AI assistants that understand context, remember conversations, and provide accurate, helpful responses.',
      features: [
        'Multi-turn conversation handling',
        'Context-aware responses',
        'Integration with business systems',
        'Multi-language support',
        'Analytics and continuous improvement'
      ]
    },
    {
      icon: Database,
      title: 'Data Pipelines & ML Ops',
      description: 'Build robust infrastructure for AI/ML operations. From data ingestion to model deployment, we ensure your AI systems run smoothly at scale.',
      features: [
        'Automated data pipelines',
        'Model training and versioning',
        'A/B testing infrastructure',
        'Monitoring and observability',
        'Continuous deployment'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Custom AI Model Development',
      description: 'Develop specialized AI models tailored to your unique requirements. From computer vision to NLP, we build models that solve your specific problems.',
      features: [
        'Custom model architecture design',
        'Transfer learning and fine-tuning',
        'Model optimization for production',
        'Edge deployment capabilities',
        'Ongoing model maintenance'
      ]
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      title: 'AI-Powered Diagnosis Assistant',
      description: 'Analyze medical images and patient data to provide preliminary diagnosis suggestions, reducing diagnosis time by 60%.',
      outcome: '60% faster diagnosis, 95% accuracy rate'
    },
    {
      industry: 'Finance',
      title: 'Intelligent Fraud Detection',
      description: 'Real-time transaction analysis using ML models to identify fraudulent activities with minimal false positives.',
      outcome: '85% reduction in fraud losses'
    },
    {
      industry: 'E-Commerce',
      title: 'Personalized Shopping Assistant',
      description: 'GenAI-powered chatbot that understands customer preferences and provides personalized product recommendations.',
      outcome: '40% increase in conversion rate'
    },
    {
      industry: 'Manufacturing',
      title: 'Predictive Maintenance System',
      description: 'AI models that predict equipment failures before they occur, optimizing maintenance schedules and reducing downtime.',
      outcome: '50% reduction in unplanned downtime'
    },
    {
      industry: 'Legal',
      title: 'Contract Analysis Automation',
      description: 'NLP-powered system that reviews contracts, identifies risks, and suggests improvements automatically.',
      outcome: '80% faster contract review process'
    },
    {
      industry: 'Marketing',
      title: 'AI Content Generation Platform',
      description: 'Generate high-quality marketing content at scale while maintaining brand voice and SEO optimization.',
      outcome: '10x increase in content production'
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="AI & GenAI Solutions"
        subtitle="Transform your business with cutting-edge Artificial Intelligence and Generative AI technology"
      />

      {/* Hero Section with Image */}
      <AnimatedSection className="py-20 bg-nebula-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-6">
                Harness the Power of AI
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We're at the forefront of the AI revolution, helping businesses leverage 
                the latest advancements in machine learning, natural language processing, 
                and generative AI to solve complex problems and create new opportunities.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                From integrating large language models to building custom AI solutions, 
                our team of AI experts has the experience and expertise to bring your 
                AI vision to life.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gradient-primary text-white px-4 py-2">GPT-4 Integration</Badge>
                <Badge className="bg-gradient-secondary text-white px-4 py-2">Custom ML Models</Badge>
                <Badge className="bg-gradient-accent text-white px-4 py-2">LangChain</Badge>
                <Badge className="bg-gradient-primary text-white px-4 py-2">Vector Databases</Badge>
              </div>
            </div>
            <div className="relative">
              <img 
                src={`${import.meta.env.BASE_URL}/assets/ai-brain-network_variant_1.jpg `}
                alt="AI Neural Network" 
                className="rounded-2xl shadow-neon-lg"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* AI Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-nebula-surface-light border-nebula-border hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-neon">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <AnimatedSection className="py-20 bg-nebula-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Real-World Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI is transforming businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-nebula-surface-light border-nebula-border hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-nebula-indigo/20 text-nebula-indigo border-nebula-indigo/30 border">
                      {useCase.industry}
                    </Badge>
                    <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{useCase.description}</p>
                    <div className="pt-4 border-t border-nebula-border">
                      <div className="text-sm font-semibold text-green-400">{useCase.outcome}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Technology Stack */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">AI Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the most advanced AI technologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'OpenAI GPT-4', 'Claude', 'Gemini', 'LangChain', 'LlamaIndex',
              'TensorFlow', 'PyTorch', 'Hugging Face', 'Pinecone', 'Weaviate',
              'Anthropic', 'Cohere', 'Stability AI', 'Midjourney', 'DALL-E'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-nebula-surface-light border border-nebula-border rounded-lg p-4 text-center hover:shadow-neon transition-all duration-300"
              >
                <span className="text-white font-medium text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-nebula-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-primary border-0 shadow-neon-lg overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="absolute inset-0 bg-gradient-nebula opacity-30" />
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center"
                >
                  <Brain className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Leverage AI?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how AI can transform your business. Our team of AI experts 
                  is ready to help you explore the possibilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" variant="secondary" className="bg-white text-nebula-indigo hover:bg-gray-100 text-lg px-8 py-6">
                      Talk to AI Experts
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                      View AI Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default AIGenAI;