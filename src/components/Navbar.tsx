
import React from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "py-3 backdrop-blur-md bg-black/80" : "py-5"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-xl font-bold tracking-tighter">
          PAI3
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'Run a Node', 'Rewards', 'Lease', 'AI Agents', 'Community'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="text-xs px-4 py-2 border border-white/20 rounded hover:bg-white/5 transition-colors">
            Connect
          </button>
          <button className="md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
