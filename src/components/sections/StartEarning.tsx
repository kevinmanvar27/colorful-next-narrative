
import React from 'react';
import Section from '../Section';
import Button from '../Button';

const StartEarning: React.FC = () => {
  return (
    <Section id="start-earning" className="bg-black/30">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Start Earning with PAI3</h2>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto mb-10">
          Whether you're a node operator, developer, AI specialist, or just an enthusiast,
          there are multiple ways to contribute and earn with PAI3.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <Button variant="outline" size="md">
            Read Documentation
          </Button>
          <Button variant="primary" size="md">
            Get Started Now
          </Button>
        </div>
        
        <p className="text-xs text-gray-500">
          Need assistance with getting started? Contact our support team anytime at support@pai3.io
        </p>
      </div>
    </Section>
  );
};

export default StartEarning;
