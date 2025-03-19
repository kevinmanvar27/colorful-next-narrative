
import React from 'react';
import Button from '../Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden"
    >
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          Earn with PAI3
        </h1>
        <p className="text-sm md:text-base opacity-80 max-w-2xl mx-auto mb-8">
          From staking to running specialized agent mining to
          contributing to the ecosystem. Discover the many ways to earn with PAI3.
        </p>
        
        <div className="w-full max-w-xl mx-auto h-px bg-white/20 mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
          <div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
            <h3 className="font-bold text-lg mb-2">Stake</h3>
            <p className="text-xs text-gray-400">Secure the network and earn rewards</p>
          </div>
          
          <div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
            <h3 className="font-bold text-lg mb-2">Operate Nodes</h3>
            <p className="text-xs text-gray-400">Run nodes to earn a share of network fees</p>
          </div>
          
          <div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
            <h3 className="font-bold text-lg mb-2">Earn Pi</h3>
            <p className="text-xs text-gray-400">Mine and earn PAI tokens</p>
          </div>
          
          <div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
            <h3 className="font-bold text-lg mb-2">Build</h3>
            <p className="text-xs text-gray-400">Contribute to the ecosystem</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Button variant="outline" size="md">
            Read Documentation
          </Button>
          <Button variant="primary" size="md">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
