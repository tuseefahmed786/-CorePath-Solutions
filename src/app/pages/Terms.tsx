import { motion } from 'motion/react';
import AnimatedSection from '../components/AnimatedSection';

export default function Terms() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl opacity-90">Last updated: April 10, 2026</p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by CorePath Solutions LLC, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2>Services</h2>
            <p>
              CorePath Solutions provides technology consulting, software development, and related services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all intellectual property rights in work products created by CorePath Solutions shall be owned by the client upon full payment. CorePath Solutions retains the right to use general knowledge, skills, and experience gained during the project.
            </p>

            <h2>Client Responsibilities</h2>
            <p>Clients agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Respond to requests in a timely manner</li>
              <li>Make payments according to agreed terms</li>
              <li>Provide necessary access and resources</li>
            </ul>

            <h2>Payment Terms</h2>
            <p>
              Payment terms are specified in individual project agreements. Unless otherwise stated, invoices are due within 30 days of receipt. Late payments may incur additional fees.
            </p>

            <h2>Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This obligation survives the termination of services.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              CorePath Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate services with written notice as specified in the project agreement. Termination does not relieve the client of payment obligations for work completed.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms, please contact:
              <br />
              CorePath Solutions LLC
              <br />
              2525 Old Farm Rd, Houston, Texas, 77063
              <br />
              Email: victrodriguez88@gmail.com
              <br />
              Phone: +1 346-448-4823
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
