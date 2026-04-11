import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Code, Smartphone, Cloud, Shield, BarChart, Palette,
  Database, TrendingUp, ArrowRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Build powerful, scalable web applications with modern frameworks and best practices',
      features: ['React & Next.js', 'Node.js Backend', 'API Development', 'Progressive Web Apps'],
      path: '/services/web-development',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions that deliver exceptional user experiences',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
      path: '/services/mobile-app-development',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Software Development',
      description: 'Custom enterprise software solutions tailored to your unique business needs',
      features: ['Enterprise Systems', 'Custom Solutions', 'Legacy Modernization', 'Integration Services'],
      path: '/services/software-development',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Create beautiful, intuitive interfaces that users love and that drive conversions',
      features: ['User Research', 'Interface Design', 'Prototyping', 'Usability Testing'],
      path: '/services/ui-ux-design',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud & DevOps',
      description: 'Build scalable infrastructure and automate your deployment pipeline',
      features: ['AWS & Azure', 'Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'],
      path: '/services/cloud-devops',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and best practices',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Detection'],
      path: '/services/cybersecurity',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: 'AI & Data Solutions',
      description: 'Leverage artificial intelligence and data analytics to gain competitive insights',
      features: ['Machine Learning', 'Data Analytics', 'Predictive Modeling', 'Business Intelligence'],
      path: '/services/ai-data-solutions',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Digital Marketing',
      description: 'Drive growth with data-driven digital marketing strategies and optimization',
      features: ['SEO & SEM', 'Content Marketing', 'Social Media', 'Analytics & Reporting'],
      path: '/services/digital-marketing',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive technology solutions to transform your business and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link
                  to={service.path}
                  className="block h-full p-8 bg-card rounded-2xl border border-border hover:border-primary transition-all shadow-sm hover:shadow-2xl"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    {service.icon}
                  </div>

                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our team can help you identify the right solutions for your business goals
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
