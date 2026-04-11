import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';
import { ThemeProvider } from '../components/ThemeProvider';

export default function Root() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </ThemeProvider>
  );
}
