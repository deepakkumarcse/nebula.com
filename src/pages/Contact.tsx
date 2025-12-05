import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import type { ContactFormInputs } from '@/types';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ContactFormInputs>();

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@nebulatech.com',
      link: 'mailto:contact@nebulatech.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 91 7440949481',
      link: 'tel:+917440949481'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '123 Tech Street, Indore, MP 452011',
      link: 'https://maps.google.com'
    }
  ];

  const budgetRanges = [
    'Less than $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    'More than $250,000'
  ];

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'AI/ML Solution',
    'Cloud Infrastructure',
    'UI/UX Design',
    'Custom Software',
    'Consulting',
    'Other'
  ];

  return (
    <Layout>
      <PageHeader
        title="Get in Touch"
        subtitle="Let's discuss your project and how we can help you achieve your goals"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <AnimatedSection>
                <h2 className="text-3xl font-bold gradient-text mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  Reach out to us through any of these channels. We're here to help!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-nebula-surface-light border border-nebula-border hover:shadow-neon transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-neon">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                        <p className="text-gray-400 text-sm">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-lg bg-gradient-primary">
                  <h3 className="text-white font-bold text-xl mb-2">Schedule a Call</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Prefer to talk? Book a 30-minute discovery call with our team.
                  </p>
                  <Button variant="secondary" className="w-full bg-white text-nebula-indigo hover:bg-gray-100">
                    Book a Call
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <Card className="bg-nebula-surface-light border-nebula-border">
                  <CardContent className="p-8">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-10 h-10 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                        <p className="text-gray-300">
                          We've received your message and will get back to you within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Name */}
                          <div>
                            <Label htmlFor="name" className="text-white mb-2 block">
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              {...register('name', { required: 'Name is required' })}
                              className="bg-nebula-surface border-nebula-border text-white"
                              placeholder="John Doe"
                            />
                            {errors.name && (
                              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                            )}
                          </div>

                          {/* Email */}
                          <div>
                            <Label htmlFor="email" className="text-white mb-2 block">
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              {...register('email', { 
                                required: 'Email is required',
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: 'Invalid email address'
                                }
                              })}
                              className="bg-nebula-surface border-nebula-border text-white"
                              placeholder="john@company.com"
                            />
                            {errors.email && (
                              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Company */}
                          <div>
                            <Label htmlFor="company" className="text-white mb-2 block">
                              Company Name
                            </Label>
                            <Input
                              id="company"
                              {...register('company')}
                              className="bg-nebula-surface border-nebula-border text-white"
                              placeholder="Your Company"
                            />
                          </div>

                          {/* Budget */}
                          <div>
                            <Label htmlFor="budget" className="text-white mb-2 block">
                              Budget Range *
                            </Label>
                            <Select onValueChange={(value) => setValue('budget', value)}>
                              <SelectTrigger className="bg-nebula-surface border-nebula-border text-white">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                {budgetRanges.map((range) => (
                                  <SelectItem key={range} value={range}>
                                    {range}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.budget && (
                              <p className="text-red-400 text-sm mt-1">{errors.budget.message}</p>
                            )}
                          </div>
                        </div>

                        {/* Project Type */}
                        <div>
                          <Label htmlFor="projectType" className="text-white mb-2 block">
                            Project Type *
                          </Label>
                          <Select onValueChange={(value) => setValue('projectType', [value])}>
                            <SelectTrigger className="bg-nebula-surface border-nebula-border text-white">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.projectType && (
                            <p className="text-red-400 text-sm mt-1">{errors.projectType.message}</p>
                          )}
                        </div>

                        {/* Message */}
                        <div>
                          <Label htmlFor="message" className="text-white mb-2 block">
                            Project Details *
                          </Label>
                          <Textarea
                            id="message"
                            {...register('message', { required: 'Message is required' })}
                            className="bg-nebula-surface border-nebula-border text-white min-h-[150px]"
                            placeholder="Tell us about your project, goals, and timeline..."
                          />
                          {errors.message && (
                            <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-primary hover:shadow-neon transition-all duration-300 text-lg py-6"
                        >
                          {isSubmitting ? (
                            'Sending...'
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 w-5 h-5" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <AnimatedSection className="py-20 bg-nebula-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-300">
              Located in the heart of indore's tech district
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-neon-lg h-96 bg-nebula-surface-light border border-nebula-border flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-nebula-indigo mx-auto mb-4" />
              <p className="text-gray-400">Map integration placeholder</p>
              <p className="text-sm text-gray-500 mt-2">123 Tech Street, Indore, MP 452011</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Contact;