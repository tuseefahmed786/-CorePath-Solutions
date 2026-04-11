import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Blog() {
  const posts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Discover how artificial intelligence is transforming modern business operations and decision-making.',
      category: 'AI & Technology',
      date: 'April 5, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    },
    {
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      category: 'Cloud & DevOps',
      date: 'April 1, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    },
    {
      title: 'Mobile App Security Essentials',
      excerpt: 'Critical security measures every mobile app developer must implement.',
      category: 'Security',
      date: 'March 28, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    },
    {
      title: 'UI/UX Trends for 2026',
      excerpt: 'The latest design trends shaping user experiences this year.',
      category: 'Design',
      date: 'March 25, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
    },
    {
      title: 'Building Scalable APIs',
      excerpt: 'Best practices for designing APIs that grow with your business.',
      category: 'Development',
      date: 'March 20, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    },
    {
      title: 'Data Analytics for Startups',
      excerpt: 'How early-stage companies can leverage data for growth.',
      category: 'Data & Analytics',
      date: 'March 15, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl opacity-90">
              Stay updated with the latest technology trends, tips, and best practices
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-sm rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
