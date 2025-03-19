
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-xl mb-4">PAI3</div>
            <p className="text-sm text-gray-400 mb-4">
              Building the future of decentralized AI infrastructure.
            </p>
            <div className="flex space-x-4">
              {[
                'twitter', 'discord', 'github', 'telegram'
              ].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0-20 0"></path>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-sm">Products</h3>
            <ul className="space-y-2">
              {[
                'AI Agents', 'Node Running', 'Governance', 'PAI Token'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-sm">Resources</h3>
            <ul className="space-y-2">
              {[
                'Documentation', 'Whitepaper', 'GitHub', 'Blog'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-sm">Company</h3>
            <ul className="space-y-2">
              {[
                'About', 'Careers', 'Contact', 'Press'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} PAI3. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
