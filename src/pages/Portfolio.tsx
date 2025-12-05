import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const caseStudies = useSelector((state: RootState) => state.portfolio);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const industries = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.industry.split(' / ')[0])))];

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry.includes(selectedIndustry));

  return (
    <Layout>
      <PageHeader
        title="Our Portfolio"
        subtitle="Explore our successful projects and the impact we've made for clients across industries"
      />

      {/* Filter Section */}
      <AnimatedSection className="py-12 bg-nebula-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <Button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                variant={selectedIndustry === industry ? 'default' : 'outline'}
                className={selectedIndustry === industry 
                  ? 'bg-gradient-primary hover:shadow-neon' 
                  : 'border-nebula-border text-gray-300 hover:bg-nebula-surface-light'
                }
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <Card className="bg-nebula-surface-light border-nebula-border hover:shadow-card-hover transition-all duration-300 overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nebula-dark/80 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-gradient-primary text-white">
                      {caseStudy.industry}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{caseStudy.title}</h3>
                    <p className="text-gray-300 mb-4">{caseStudy.description}</p>

                    {/* Challenge & Solution */}
                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-nebula-indigo mb-1">Challenge</h4>
                        <p className="text-sm text-gray-400">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-nebula-purple mb-1">Solution</h4>
                        <p className="text-sm text-gray-400">{caseStudy.solution}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="border-nebula-border text-gray-400 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-nebula-border">
                      {caseStudy.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="mt-4 pt-4 border-t border-nebula-border">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-nebula-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Let's Build Your Success Story
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to see similar results for your business? Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:shadow-neon transition-all duration-300">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-nebula-indigo text-white hover:bg-nebula-surface-light">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Portfolio;