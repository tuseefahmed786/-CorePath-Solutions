import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      content: 'CorePath Solutions transformed our digital presence completely. Their team understood our vision and delivered beyond expectations. The attention to detail and technical expertise are unmatched.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow Systems',
      content: 'Working with CorePath was a game-changer for our business. They delivered a scalable solution that handles our growing user base seamlessly. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, HealthTech Plus',
      content: 'Professional, innovative, and reliable. CorePath is our go-to technology partner. They helped us navigate complex healthcare compliance while building a beautiful product.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    },
    {
      name: 'David Kim',
      role: 'Director of IT, FinSecure',
      content: 'The mobile app CorePath developed for us has been a huge success. Our customers love the user experience, and the security features are top-notch.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    },
    {
      name: 'Lisa Anderson',
      role: 'VP Marketing, GrowthLabs',
      content: 'Their digital marketing strategies drove a 200% increase in our online conversions. The team is data-driven, creative, and always delivers results.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    },
    {
      name: 'James Wilson',
      role: 'COO, LogisticsPro',
      content: 'CorePath built us a custom logistics platform that streamlined our entire operation. The system is robust, user-friendly, and has saved us countless hours.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl opacity-90">
              Hear what our clients have to say about working with us
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
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
