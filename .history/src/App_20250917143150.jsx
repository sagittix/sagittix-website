import React, { useState } from 'react';

const BackgroundBlobs = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
  </div>
);

const AppleIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>;
const PlayStoreIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M2.33 2.33 22 12 2.33 21.67V2.33zM22 12l-10 6V6l10 6z"/></svg>;

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#apps', label: 'Our Apps' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <nav className="bg-white/40 backdrop-blur-md rounded-xl shadow-lg px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-orange-500 bg-clip-text text-transparent">Sagittix</a>
        <div className="hidden md:flex space-x-8">
          {links.map(link => (
            <a key={link.href} href={link.href} className="text-gray-700 hover:text-fuchsia-600 font-medium transition-colors">{link.label}</a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur-md mt-2 rounded-lg shadow-lg">
          {links.map(link => (
            <a key={link.href} href={link.href} className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-500 hover:text-white" onClick={() => setOpen(false)}>{link.label}</a>
          ))}
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 text-center">
    <BackgroundBlobs />
    <div className="relative z-10 px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">From Idea to <span className="bg-gradient-to-r from-fuchsia-600 to-orange-500 bg-clip-text text-transparent">Iconic App</span></h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">We build beautiful, high-performance mobile apps for iOS & Android.</p>
      <a href="#apps" className="bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition">Start Creating Now</a>
    </div>
  </section>
);

const AppsSection = () => {
  const apps = [
    { name: 'ConnectSphere', description: 'A social networking app for shared interests.', appStore: true, googlePlay: true },
    { name: 'FinanceFlow', description: 'Budgeting and expense tracking made easy.', appStore: true, googlePlay: true },
    { name: 'ZenQuest', description: 'Guided meditations and mindfulness exercises.', appStore: true, googlePlay: false }
  ];

  return (
    <section id="apps" className="py-20 bg-white/50">
      <h2 className="text-4xl font-bold text-center mb-12">Our Flagship Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {apps.map(app => (
          <div key={app.name} className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold mb-2">{app.name}</h3>
            <p className="text-gray-600 mb-4">{app.description}</p>
            <div className="flex justify-center gap-3">
              {app.appStore && <a href="#" className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg"><AppleIcon className="w-5 h-5"/>App Store</a>}
              {app.googlePlay && <a href="#" className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg"><PlayStoreIcon className="w-5 h-5"/>Google Play</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-gray-800 text-gray-300 py-8 text-center">
    <p>&copy; {new Date().getFullYear()} Sagittix Inc. All Rights Reserved.</p>
  </footer>
);

export default function App() {
  return (
    <>
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
      <div className="bg-gray-50 text-gray-800">
        <Header />
        <main>
          <Hero />
          <AppsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}