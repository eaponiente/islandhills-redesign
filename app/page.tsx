import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Properties } from '@/app/components/Properties';
import { Footer } from '@/app/components/Footer';

export default function IslandHillsSPA() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-200">
      <Navbar />
      <Hero />
      <Properties />
      <Footer />
    </div>
  );
}