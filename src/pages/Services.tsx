import { motion } from 'framer-motion';
import { ArrowRight, Code2, Zap, Server, Palette, Brain, Cloud, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import type { LucideIcon } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = useSelector((state: RootState) => state.services);

  const icons: Record<string, LucideIcon> = {
    Code2, Zap, Server, Palette, Brain, Cloud, Building2
  };

  const categories = [
    { name: 'Backend', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    { name: 'Frontend', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
    { name: 'Design', color: 'bg-pink-500/10 text-pink-400 border-pink-500/20' },
    { name: 'AI', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
    { name: 'Infrastructure', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
    { name: 'Enterprise', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
  ];

  return (
    <Layout>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive software development services powered by cutting-edge technology and delivered by expert teams"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service) => {
              const IconComponent = icons[service.icon] || Code2;
              const categoryColor = categories.find(c => c.name === service.category)?.color || categories[0].color;

              return (
                <AnimatedSection key={service.id}>
                  <Card className="bg-nebula-surface-light border-nebula-border hover:shadow-card-hover transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Content Side */}
                        <div className="p-8 lg:p-12">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center shadow-neon">
                              <IconComponent className="w-7 h-7 text-white" />
                            </div>
                            <Badge className={`${categoryColor} border`}>
                              {service.category}
                            </Badge>
                          </div>

                          <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            {service.description}
                          </p>

                          {/* Benefits */}
                          <div className="mb-6">
                            <h4 className="text-xl font-semibold text-white mb-4">Key Benefits</h4>
                            <div className="space-y-3">
                              {service.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-300">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div className="mb-6">
                            <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="outline" className="border-nebula-border text-gray-300">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Ideal For */}
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-4">Ideal For</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.idealFor.map((item, idx) => (
                                <Badge key={idx} className="bg-nebula-indigo/20 text-nebula-indigo border-nebula-indigo/30 border">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative h-64 lg:h-auto">
                          <img 
                            src={
                              service.category === 'Backend' ? '/assets/code-development.jpg' :
                              service.category === 'Frontend' ? '/assets/mobile-app-design.jpg' :
                              service.category === 'Design' ? '/assets/mobile-app-design_variant_1.jpg' :
                              service.category === 'AI' ? '/assets/ai-brain-network.jpg' :
                              service.category === 'Infrastructure' ? '/assets/cloud-infrastructure.jpg' :
                              '/assets/data-analytics.jpg'
                            }
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-nebula-dark/80 to-transparent lg:from-transparent lg:to-nebula-dark/80" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-nebula-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:shadow-neon transition-all duration-300">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-nebula-indigo text-white hover:bg-nebula-surface-light">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Services;