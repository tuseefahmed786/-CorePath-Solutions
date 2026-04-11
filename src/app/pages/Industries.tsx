import { motion } from 'motion/react';
import { Heart, DollarSign, ShoppingCart, GraduationCap, Home, Rocket } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Industries() {
  const industries = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Healthcare',
      description: 'HIPAA-compliant solutions for modern healthcare providers',
      features: ['Patient Management', 'Telemedicine', 'EHR Systems', 'Medical Analytics'],
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: 'FinTech',
      description: 'Secure financial solutions with regulatory compliance',
      features: ['Payment Processing', 'Banking Apps', 'Blockchain', 'Risk Management'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'E-Commerce',
      description: 'Scalable platforms that drive online sales',
      features: ['Marketplaces', 'Inventory Systems', 'Payment Integration', 'Analytics'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Education',
      description: 'Digital learning platforms for modern education',
      features: ['LMS Solutions', 'Virtual Classrooms', 'Student Portals', 'Assessment Tools'],
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Real Estate',
      description: 'Property management and listing solutions',
      features: ['Listing Platforms', 'CRM Systems', 'Virtual Tours', 'Analytics'],
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: 'Startups',
      description: 'MVP development and scaling solutions',
      features: ['Rapid Prototyping', 'MVP Development', 'Growth Tools', 'Investor Demos'],
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl opacity-90">
              Specialized solutions tailored to your industry's unique challenges
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary transition-all shadow-sm hover:shadow-xl"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {industry.icon}
                </div>
                <h2 className="text-2xl font-bold mb-3">{industry.title}</h2>
                <p className="text-muted-foreground mb-6">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't See Your Industry?</h2>
          <p className="text-xl mb-8 opacity-90">
            We work with businesses across all sectors. Let's discuss your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
