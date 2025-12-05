import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

const PageHeader = ({ title, subtitle, gradient = true }: PageHeaderProps) => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-nebula opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${gradient ? 'gradient-text' : 'text-white'}`}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;