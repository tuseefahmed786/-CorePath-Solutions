import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Code, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

export default function WebDevelopment() {
  const technologies = [
    'React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Express',
    'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'TypeScript', 'Tailwind CSS'
  ];

  const process = [
    { step: '01', title: 'Discovery & Planning', description: 'We analyze your requirements and create a detailed project roadmap' },
    { step: '02', title: 'Design & Prototyping', description: 'Our designers create stunning interfaces and interactive prototypes' },
    { step: '03', title: 'Development', description: 'Expert developers build your application using best practices' },
    { step: '04', title: 'Testing & QA', description: 'Rigorous testing ensures quality and performance' },
    { step: '05', title: 'Deployment', description: 'Seamless launch to production with monitoring' },
    { step: '06', title: 'Support & Maintenance', description: 'Ongoing support and feature enhancements' },
  ];

  const benefits = [
    'Scalable and performant applications',
    'Modern, responsive design',
    'SEO-optimized architecture',
    'Security best practices',
    'Cross-browser compatibility',
    'Progressive Web App capabilities',
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Code className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Web Development</h1>
            <p className="text-xl opacity-90">
              Build powerful, scalable web applications that drive business growth and deliver exceptional user experiences
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Modern Web Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our web development team specializes in creating custom web applications using the latest technologies and frameworks. We build scalable, secure, and high-performance solutions that meet your unique business requirements.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800"
                alt="Web development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground">A proven approach to deliver exceptional results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <div className="text-4xl font-bold text-primary mb-3">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground">Industry-leading tools and frameworks</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg shadow-lg"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Web Application?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and create a solution that exceeds your expectations
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
