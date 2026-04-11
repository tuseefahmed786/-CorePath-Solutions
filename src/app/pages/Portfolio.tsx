import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Code, Smartphone, Palette, BarChart } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'data', label: 'Data & AI' },
  ];

  const projects = [
    {
      title: 'HealthCare Pro',
      category: 'web',
      description: 'HIPAA-compliant patient management system',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      icon: <Code className="w-6 h-6" />,
      results: '40% increase in efficiency',
    },
    {
      title: 'FinTech Mobile',
      category: 'mobile',
      description: 'Secure mobile banking application',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      tags: ['React Native', 'Firebase', 'Biometrics'],
      icon: <Smartphone className="w-6 h-6" />,
      results: '100K+ downloads',
    },
    {
      title: 'E-Commerce Redesign',
      category: 'design',
      description: 'Modern UI/UX for leading retailer',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      tags: ['Figma', 'Design System', 'User Research'],
      icon: <Palette className="w-6 h-6" />,
      results: '60% conversion increase',
    },
    {
      title: 'AI Analytics Platform',
      category: 'data',
      description: 'Predictive analytics for retail',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['Python', 'TensorFlow', 'React'],
      icon: <BarChart className="w-6 h-6" />,
      results: '$2M revenue impact',
    },
    {
      title: 'Real Estate Portal',
      category: 'web',
      description: 'Property listing and management platform',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      tags: ['Next.js', 'TypeScript', 'Maps API'],
      icon: <Code className="w-6 h-6" />,
      results: '500+ listings daily',
    },
    {
      title: 'Fitness Tracker App',
      category: 'mobile',
      description: 'Personalized workout and nutrition app',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
      tags: ['Flutter', 'Health Kit', 'Cloud Functions'],
      icon: <Smartphone className="w-6 h-6" />,
      results: '4.8 star rating',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl opacity-90">
              Discover how we've helped businesses transform and grow through technology
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-muted hover:bg-muted/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary">
                    {project.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm font-semibold text-green-600">
                      {project.results}
                    </span>
                    <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all">
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something amazing together
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
