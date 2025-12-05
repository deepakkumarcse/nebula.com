import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Code2, Brain, Cloud, Palette, Server, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { LucideIcon } from 'lucide-react';

const Index = () => {
  const services = useSelector((state: RootState) => state.services);
  const testimonials = useSelector((state: RootState) => state.testimonials);

  const techStack = [
    { name: 'Python', icon: Code2, color: 'text-blue-400' },
    { name: 'React', icon: Code2, color: 'text-cyan-400' },
    { name: 'Node.js', icon: Server, color: 'text-green-400' },
    { name: 'AI/ML', icon: Brain, color: 'text-purple-400' },
    { name: 'Cloud', icon: Cloud, color: 'text-indigo-400' },
    { name: 'FastAPI', icon: Zap, color: 'text-yellow-400' },
  ];

  const whyChooseUs = [
    'Enterprise-grade solutions built for scale',
    'AI-first approach to modern problems',
    'Agile methodology with rapid delivery',
    'Full-stack expertise across technologies',
    '24/7 support and maintenance',
    'Proven track record with Fortune 500 clients',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}/assets/hero-nebula-background.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-nebula-dark/80" />
        </div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-nebula opacity-40 animate-glow-pulse" />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <Badge className="bg-gradient-primary text-white px-6 py-2 text-sm font-semibold shadow-neon">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                AI-Powered Software Solutions
              </Badge>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="gradient-text">Transform Your Business</span>
              <br />
              <span className="text-white">With Cutting-Edge Technology</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              We build enterprise-grade software solutions powered by AI, from intelligent backends 
              to stunning frontends. Your vision, our expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:shadow-neon-lg transition-all duration-300 text-lg px-8 py-6">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-nebula-indigo text-white hover:bg-nebula-surface-light text-lg px-8 py-6">
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            >
              {[
                { value: '500+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '50+', label: 'Enterprise Clients' },
                { value: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-primary rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <AnimatedSection className="py-20 bg-nebula-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive software development services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service, index) => {
              const icons: Record<string, LucideIcon> = {
                Code2, Zap, Server, Palette, Brain, Cloud
              };
              const IconComponent = icons[service.icon] || Code2;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-nebula-surface-light border-nebula-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-neon">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{service.description.slice(0, 120)}...</p>
                      <Link to="/services" className="text-nebula-indigo hover:text-nebula-purple transition-colors text-sm font-medium inline-flex items-center">
                        Learn More <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-nebula-indigo text-white hover:bg-nebula-surface-light">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Tech Stack */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging the latest and most powerful technologies to build your solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-nebula-surface-light border border-nebula-border rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-neon transition-all duration-300"
              >
                <tech.icon className={`w-12 h-12 mb-3 ${tech.color}`} />
                <span className="text-white font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-20 bg-nebula-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Why Choose Nebula Tech?</h2>
              <p className="text-xl text-gray-300 mb-8">
                We combine technical excellence with business acumen to deliver solutions 
                that drive real results for your organization.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={`${import.meta.env.BASE_URL}/assets/team-collaboration.jpg`} 
                alt="Team Collaboration" 
                className="rounded-2xl shadow-neon-lg"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* AI & GenAI Highlight */}
      <AnimatedSection className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-nebula opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center shadow-neon-lg"
            >
              <Brain className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              AI & GenAI Solutions
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Harness the power of Artificial Intelligence and Generative AI to automate workflows, 
              enhance decision-making, and create intelligent applications that learn and adapt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ai-genai">
                <Button size="lg" className="bg-gradient-secondary hover:shadow-neon-pink transition-all duration-300">
                  Explore AI Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-nebula-purple text-white hover:bg-nebula-surface-light">
                  Talk to AI Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20 bg-nebula-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by industry leaders and innovative startups worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-nebula-surface-light border-nebula-border hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Sparkles key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="border-t border-nebula-border pt-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-nebula-indigo">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-primary border-0 shadow-neon-lg overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="absolute inset-0 bg-gradient-nebula opacity-30" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and create a solution that exceeds your expectations.
                </p>
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-nebula-indigo hover:bg-gray-100 text-lg px-8 py-6">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Index;