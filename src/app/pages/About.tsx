import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Users, TrendingUp, Globe, Zap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Client-First Approach',
      description: 'Your success is our priority. We build lasting partnerships through trust and exceptional service.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project we undertake.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Local expertise with a global perspective to serve diverse markets.',
    },
  ];

  const timeline = [
    { year: '2011', title: 'Founded', description: 'CorePath Solutions was established in Houston, Texas' },
    { year: '2014', title: 'Expansion', description: 'Grew team to 20+ developers and designers' },
    { year: '2017', title: 'Recognition', description: 'Awarded Best Tech Company in Houston' },
    { year: '2020', title: 'Innovation', description: 'Launched AI and cloud services division' },
    { year: '2023', title: 'Milestone', description: 'Completed 500+ successful projects' },
    { year: '2026', title: 'Today', description: 'Leading technology partner for businesses nationwide' },
  ];

  const team = [
    {
      name: 'Victor Rodriguez',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    },
    {
      name: 'Sarah Mitchell',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      name: 'James Chen',
      role: 'Head of Development',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      name: 'Emily Davis',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    },
  ];

  const achievements = [
    { icon: <Users className="w-8 h-8" />, value: '50+', label: 'Team Members' },
    { icon: <Award className="w-8 h-8" />, value: '25+', label: 'Industry Awards' },
    { icon: <Globe className="w-8 h-8" />, value: '30+', label: 'Countries Served' },
    { icon: <TrendingUp className="w-8 h-8" />, value: '$50M+', label: 'Client Revenue Impact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">About CorePath Solutions</h1>
            <p className="text-xl opacity-90">
              Empowering businesses through innovative technology solutions since 2011
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To empower businesses with transformative technology solutions that drive growth, enhance efficiency,
                and create lasting competitive advantages in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-900"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To be the most trusted technology partner for businesses worldwide, recognized for our innovation,
                excellence, and unwavering commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Milestones that shaped our story</p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-8"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-primary">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full" />
                <div className="flex-grow p-6 bg-muted/50 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team */}
      <AnimatedSection className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground">The experts driving our vision forward</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Achievements */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl opacity-90">Numbers that speak to our impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{achievement.value}</div>
                <p className="opacity-90">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
