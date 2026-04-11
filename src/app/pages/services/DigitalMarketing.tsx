import { Link } from 'react-router';
import { motion } from 'motion/react';
import { TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

export default function DigitalMarketing() {
  const technologies = ['Google Analytics', 'SEO', 'SEM', 'Social Media', 'Email Marketing', 'Content Marketing', 'A/B Testing', 'Marketing Automation'];
  const benefits = ['Increased traffic', 'Higher conversions', 'Brand awareness', 'ROI tracking', 'Data-driven strategies', 'Multi-channel campaigns'];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-yellow-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Digital Marketing</h1>
            <p className="text-xl opacity-90">Drive growth with data-driven digital marketing strategies and optimization</p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Results-Driven Marketing</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Grow your business with strategic digital marketing campaigns that deliver measurable results. We combine creativity with data to maximize your ROI.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, i) => (
                <div key={i} className="px-6 py-3 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-lg shadow-lg">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
