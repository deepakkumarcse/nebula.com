import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, TrendingUp, Globe } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at a Fortune 500 tech company. PhD in Computer Science from MIT. 15+ years building scalable systems.',
      image: '/assets/team-collaboration_variant_2.jpg',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'AI/ML expert with background at Google Brain. Led development of multiple award-winning AI products. Stanford CS graduate.',
      image: '/assets/ai-brain-network.jpg',
    },
    {
      name: 'Emily Watson',
      role: 'VP of Product',
      bio: 'Product visionary with 12+ years at leading SaaS companies. Expert in user-centric design and agile methodologies.',
      image: '/assets/mobile-app-design_variant_2.jpg',
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Full-stack architect specializing in cloud-native solutions. Previously led engineering teams at Amazon and Microsoft.',
      image: '/assets/cloud-infrastructure_variant_1.jpg',
    },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Nebula Tech was born from a vision to democratize enterprise-grade software development.',
    },
    {
      year: '2019',
      title: 'First Major Client',
      description: 'Secured partnership with Fortune 500 financial services company, delivering mission-critical systems.',
    },
    {
      year: '2020',
      title: 'AI Division Launch',
      description: 'Established dedicated AI/ML team, pioneering GenAI solutions for enterprise clients.',
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Opened offices in London and Singapore, serving clients across three continents.',
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Named "Top 10 AI Software Companies" by TechCrunch. Reached 200+ enterprise clients.',
    },
    {
      year: '2023',
      title: 'Innovation Milestone',
      description: 'Launched proprietary AI platform, processing 1B+ API calls monthly for clients worldwide.',
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Team of 150+ experts, 500+ projects delivered, maintaining 98% client satisfaction rate.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue technical excellence in every line of code, every design decision, and every client interaction.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe the best solutions emerge from close collaboration between our team and our clients.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new tools and methodologies.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and delivering on our commitments.',
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="About Nebula Tech"
        subtitle="We're a team of passionate technologists building the future of enterprise software"
      />

      {/* Company Story */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded in 2018 by a team of former tech executives and AI researchers, Nebula Tech 
                  emerged from a simple observation: enterprise software development was broken. 
                  Projects took too long, cost too much, and often failed to deliver real business value.
                </p>
                <p>
                  We set out to change that. By combining cutting-edge AI technology with battle-tested 
                  software engineering practices, we created a new model for building enterprise applications. 
                  One that's faster, more reliable, and delivers measurable ROI.
                </p>
                <p>
                  Today, we're proud to serve over 200 enterprise clients worldwide, from Fortune 500 
                  companies to innovative startups. Our team of 150+ experts has delivered 500+ successful 
                  projects, and we're just getting started.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/assets/team-collaboration_variant_3.jpg" 
                alt="Our Team" 
                className="rounded-2xl shadow-neon-lg"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Vision & Mission */}
      <AnimatedSection className="py-20 bg-nebula-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-nebula-surface-light border-nebula-border hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-6 shadow-neon">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the world's most trusted partner for AI-powered software development, 
                  empowering businesses of all sizes to leverage cutting-edge technology and 
                  achieve their digital transformation goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-nebula-surface-light border-nebula-border hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-secondary flex items-center justify-center mb-6 shadow-neon-pink">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To deliver exceptional software solutions that combine technical excellence 
                  with business acumen, helping our clients innovate faster, operate more 
                  efficiently, and stay ahead of the competition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Values */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-nebula-surface-light border-nebula-border hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-neon">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Leadership Team */}
      <AnimatedSection className="py-20 bg-nebula-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries driving Nebula Tech forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-nebula-surface-light border-nebula-border hover:shadow-card-hover transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-nebula-indigo font-medium mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Journey Timeline */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in our growth and evolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-nebula-border last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-gradient-primary shadow-neon" />
                <div className="bg-nebula-surface-light border border-nebula-border rounded-lg p-6 hover:shadow-card-hover transition-all duration-300">
                  <div className="text-nebula-indigo font-bold text-lg mb-2">{event.year}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-20 bg-nebula-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, value: '3', label: 'Global Offices' },
              { icon: Users, value: '150+', label: 'Team Members' },
              { icon: Award, value: '500+', label: 'Projects Delivered' },
              { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-neon">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default About;