import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Careers() {
  const benefits = [
    'Competitive salary and equity',
    'Health, dental, and vision insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Unlimited PTO',
    'Remote work options',
    '401(k) with company match',
    'Modern tech stack',
  ];

  const openings = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Houston, TX / Remote',
      type: 'Full-time',
      description: 'Build scalable web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Houston, TX / Remote',
      type: 'Full-time',
      description: 'Create beautiful mobile experiences with React Native and Flutter.',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Houston, TX / Hybrid',
      type: 'Full-time',
      description: 'Design intuitive user interfaces and conduct user research.',
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Houston, TX / Remote',
      type: 'Full-time',
      description: 'Manage cloud infrastructure and CI/CD pipelines.',
    },
    {
      title: 'Data Scientist',
      department: 'AI & Data',
      location: 'Houston, TX / Remote',
      type: 'Full-time',
      description: 'Build machine learning models and analyze complex datasets.',
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Houston, TX',
      type: 'Full-time',
      description: 'Lead client projects from conception to delivery.',
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl opacity-90">
              Build your career with a team that values innovation, collaboration, and growth
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-xl text-muted-foreground">
              We invest in our team's growth and well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-muted/50 rounded-xl text-center"
              >
                <p className="font-semibold">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              Find your next opportunity
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary transition-all shadow-sm hover:shadow-xl group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{job.department}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity group-hover:gap-3">
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't See a Perfect Fit?</h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for talented individuals. Send us your resume!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
