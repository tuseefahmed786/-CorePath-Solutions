import { Link } from 'react-router';
import { motion } from 'motion/react';
import { BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

export default function AIDataSolutions() {
  const technologies = ['TensorFlow', 'PyTorch', 'scikit-learn', 'Python', 'R', 'Tableau', 'Power BI', 'Apache Spark'];
  const benefits = ['Predictive analytics', 'Machine learning models', 'Data visualization', 'Business intelligence', 'Natural language processing', 'Computer vision'];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-violet-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <BarChart className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-bold mb-6">AI & Data Solutions</h1>
            <p className="text-xl opacity-90">Leverage artificial intelligence and data analytics to gain competitive insights</p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Intelligent Data Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Transform your data into actionable insights with AI and machine learning. We help you make data-driven decisions that accelerate growth and innovation.
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
                <div key={i} className="px-6 py-3 bg-gradient-to-br from-violet-500 to-purple-500 text-white rounded-lg shadow-lg">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Harness Your Data?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
