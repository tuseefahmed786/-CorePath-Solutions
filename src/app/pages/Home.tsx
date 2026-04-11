import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Code, Smartphone, Cloud, Shield, BarChart, Palette,
  ArrowRight, CheckCircle, Star, TrendingUp, Users, Award,
  Zap, Target, Rocket, Globe, Lock, Cpu, Lightbulb, Settings
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies',
      path: '/services/web-development',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions',
      path: '/services/mobile-app-development',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Software Development',
      description: 'Enterprise-grade software tailored to your needs',
      path: '/services/software-development',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centric design experiences',
      path: '/services/ui-ux-design',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automation',
      path: '/services/cloud-devops',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Protect your business from digital threats',
      path: '/services/cybersecurity',
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'AI & Data Solutions',
      description: 'Harness the power of AI and data analytics',
      path: '/services/ai-data-solutions',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Drive growth with data-driven marketing strategies',
      path: '/services/digital-marketing',
    },
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '200+', label: 'Happy Clients' },
    { value: '15+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      content: 'CorePath Solutions transformed our digital presence. Their expertise and dedication are unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow Systems',
      content: 'Working with CorePath was a game-changer. They delivered beyond our expectations.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, HealthTech Plus',
      content: 'Professional, innovative, and reliable. CorePath is our go-to technology partner.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1775709610612-c589e29679ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
              >
                <span className="text-white">🚀 Trusted Technology Partner</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Innovation
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-200 mb-8"
              >
                Cutting-edge technology solutions that drive growth, enhance efficiency, and deliver measurable results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">500+ Projects</p>
                    <p className="text-sm text-gray-600">Successfully Delivered</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Link
                  to={service.path}
                  className="block h-full p-6 bg-card rounded-xl border border-border hover:border-primary transition-all shadow-sm hover:shadow-xl group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* About Preview */}
      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Office workspace"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
                About CorePath Solutions
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Your Trusted Technology Partner Since 2011
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are a Houston-based technology company specializing in delivering innovative solutions that transform businesses. With over 15 years of experience, we've helped hundreds of companies achieve their digital goals.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Industry-leading expertise',
                  'Client-focused approach',
                  'Cutting-edge technology',
                  'Proven track record',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Hear what our clients have to say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              View All Testimonials
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works - Process Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-slate-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4"
            >
              Our Process
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', icon: <Lightbulb className="w-8 h-8" />, title: 'Discovery', description: 'We analyze your needs and define clear objectives' },
              { step: '02', icon: <Settings className="w-8 h-8" />, title: 'Planning', description: 'Strategic roadmap with timelines and milestones' },
              { step: '03', icon: <Rocket className="w-8 h-8" />, title: 'Execution', description: 'Expert development with continuous communication' },
              { step: '04', icon: <Target className="w-8 h-8" />, title: 'Delivery', description: 'Seamless launch with ongoing support' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5 dark:text-primary/10">
                  {item.step}
                </div>
                <div className="relative bg-card p-8 rounded-2xl border border-border hover:border-primary transition-all shadow-sm hover:shadow-xl group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-sm font-semibold text-primary mb-2">Step {item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Technologies We Master */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626908013943-df94de54984c?w=1920')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks to build the future
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
              'TypeScript', 'Next.js', 'Flutter', 'PostgreSQL', 'MongoDB', 'GraphQL',
              'TensorFlow', 'Azure', 'React Native', 'Vue.js', 'Go', 'Redis'
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center p-6 hover:bg-white/20 transition-all cursor-pointer group"
              >
                <span className="font-semibold text-center group-hover:text-blue-300 transition-colors">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose CorePath */}
      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
                Why Choose Us
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We don't just build software — we build partnerships that drive lasting success
              </p>

              <div className="space-y-6">
                {[
                  { icon: <Zap className="w-6 h-6" />, title: 'Lightning Fast Delivery', description: 'Agile methodology ensures rapid, iterative progress' },
                  { icon: <Shield className="w-6 h-6" />, title: 'Enterprise Security', description: 'Bank-level security standards in every project' },
                  { icon: <Users className="w-6 h-6" />, title: 'Dedicated Teams', description: 'Expert developers assigned to your success' },
                  { icon: <Globe className="w-6 h-6" />, title: 'Global Experience', description: 'Serving clients across 30+ countries worldwide' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-8 left-8 right-8"
                >
                  <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground">98%</div>
                        <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      "CorePath consistently exceeds expectations and delivers world-class solutions"
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Success Metrics - Animated Counters */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1750365919971-7dd273e7b317?w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Delivering Measurable Results</h2>
            <p className="text-xl opacity-90">
              Numbers that showcase our impact and commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '$50M+', label: 'Revenue Generated', icon: <TrendingUp className="w-8 h-8" />, color: 'from-green-400 to-emerald-500' },
              { value: '15+', label: 'Years Experience', icon: <Award className="w-8 h-8" />, color: 'from-yellow-400 to-orange-500' },
              { value: '200+', label: 'Happy Clients', icon: <Users className="w-8 h-8" />, color: 'from-blue-400 to-cyan-500' },
              { value: '500+', label: 'Projects Delivered', icon: <Rocket className="w-8 h-8" />, color: 'from-purple-400 to-pink-500' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  {stat.icon}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="text-5xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Projects Preview */}
      <AnimatedSection className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              A glimpse of our most impactful work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'HealthCare Pro',
                category: 'Healthcare',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
                impact: '40% efficiency increase',
                color: 'from-red-500 to-pink-500'
              },
              {
                title: 'FinTech Mobile',
                category: 'Financial Services',
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
                impact: '100K+ active users',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'AI Analytics Platform',
                category: 'Data & AI',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
                impact: '$2M revenue impact',
                color: 'from-purple-500 to-violet-500'
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-semibold`}>
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-green-300 font-semibold">{project.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Awards & Recognition */}
      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-xl text-muted-foreground">
              Industry recognition for our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: '2026', award: 'Best Tech Company', org: 'Houston Business Awards' },
              { year: '2025', award: 'Innovation Leader', org: 'Tech Innovation Summit' },
              { year: '2024', award: 'Top Developer Team', org: 'Dev Excellence Awards' },
              { year: '2023', award: 'Client Choice Award', org: 'Industry Partners' },
            ].map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border-2 border-yellow-200 dark:border-yellow-900/30 text-center hover:shadow-xl transition-all"
              >
                <Award className="w-12 h-12 text-yellow-600 dark:text-yellow-500 mx-auto mb-4" />
                <div className="text-sm font-semibold text-yellow-600 dark:text-yellow-500 mb-2">{award.year}</div>
                <h3 className="text-lg font-bold mb-1">{award.award}</h3>
                <p className="text-sm text-muted-foreground">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Latest Insights Preview */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Latest Insights</h2>
              <p className="text-xl text-muted-foreground">
                Stay updated with technology trends and best practices
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden lg:inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
            >
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'The Future of AI in Business', category: 'AI & Technology', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800' },
              { title: 'Cloud Migration Best Practices', category: 'Cloud & DevOps', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800' },
              { title: 'Mobile Security Essentials', category: 'Security', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800' },
            ].map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-8 lg:hidden">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
            >
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Enhanced CTA Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-primary via-purple-600 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1770210217380-d78a69acdc77?w=1920')] bg-cover bg-center opacity-5" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <span className="font-semibold">🚀 Let's Build Something Amazing</span>
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
              Join 200+ companies that trust CorePath Solutions to deliver exceptional results
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <Rocket className="w-6 h-6" />, text: 'Free Consultation' },
                { icon: <Lock className="w-6 h-6" />, text: 'NDA Protection' },
                { icon: <Cpu className="w-6 h-6" />, text: 'Expert Team' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-center gap-3 py-4 px-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  {item.icon}
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-primary rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg shadow-2xl hover:shadow-3xl"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/portfolio"
                className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl hover:bg-white/20 transition-colors font-semibold text-lg"
              >
                View Our Portfolio
              </Link>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-sm opacity-75"
            >
              Response time: Within 24 hours • No commitment required
            </motion.p>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
